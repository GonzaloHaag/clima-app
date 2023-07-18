
import { useState } from 'react';
import './App.css';
import WeatherFormulario from './componentes/WeatherFormulario';
import WeatherInfo from './componentes/WeatherInfo';

/*
Api de llamada
Lo haremos a la version 2.5, a la 3.0 no anda
 https://api.openweathermap.org/data/2.5/weather?q=london&appid=789c34a07ccaf642577014c00bd5cef3
*/

function App() {
    
  const [temperatura,setTemperatura] = useState('');
  const [description,setDescription] = useState('');
  const [humedad,setHumedad] = useState('');
  const [velocidad,setVelocidad] = useState('');
  const [ciudad,setCiudad] = useState('');
  const [pais,setPais] = useState('');

  const [error,setError] = useState(null); //Para informar un error

  const obtenerClima = async (e) => {
    //Creo la funcion aca y la mando al formulario
    //Es como hacerla en el componente formulario
    e.preventDefault();
     //console.log(e.target.elements); //Imprime los inputs,tengo acceso a todo el formulario

     const {ciudad,pais} = e.target.elements;
     //Solo quiero estos dos inputs, los identifica por el name
     const valorCiudad = ciudad.value; //Me traigo solo lo que esta escrito
     const valorPais = pais.value; //Lo mismo aca
    //  console.log(valorCiudad,valorPais) imprime lo q escribi en el input
    if(valorCiudad && valorPais) {
      //Hacemos la peticion solo si viene algo en los inputs
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${valorCiudad},${valorPais}&appid=789c34a07ccaf642577014c00bd5cef3&units=metric`;
      //Reemplazamos la ciudad y el pais por lo q esta escrito en el input, asi me traera los valores de lo que escribo
       
      //Como va a llevar tiempo, es mejor guardarlo en un await 
      const respuesta = await fetch(API_URL);
      const data = await respuesta.json(); //Tambien va a llevar tiempo, por eso el await 
      // console.log(data); //Aca viene la data
     
      //Ahora es ver la respuesta e ir llenando los datos que nos da la api
      setTemperatura(data.main.temp);
      setDescription(data.weather[0].description);
      setHumedad(data.main.humidity);
      setVelocidad(data.wind.speed);
      setCiudad(data.name);
      setPais(data.sys.country);
    }
    else {
      //Si no hay nada en los inputs, le aviso al usuario que lo ingrese
      setError('Porfavor ingrese una ciudad y un país');
    }
   
    
  }
  return (
    //Estamos usando boostrap, el css
    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <WeatherFormulario obtenerClima = {obtenerClima} />
          

          <WeatherInfo 
          //Le paso todos los datos 
           temperatura ={temperatura}
           description = {description}
           humedad = {humedad}
           velocidad = {velocidad}
           ciudad = {ciudad}
           pais = {pais}
           error = {error}
           />
          
          
        </div>
      </div>
    </div>
   
  );
}

export default App;
