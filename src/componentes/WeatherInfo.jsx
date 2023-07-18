import React from 'react'

const WeatherInfo = ({ temperatura, description , humedad , velocidad , ciudad , pais,error}) => {
  //Recibo todas las props que me manda App.js
  // console.log(temperatura);
  // console.log(description);
  // console.log(humedad);
  // console.log(velocidad);
  // console.log(ciudad);
  // console.log(pais);
  return (
    <div>
        {
        error && //Si existe un error pinta la alerta
        <div className='alert alert-danger'> {/*Div rojo de boostrap*/}
        <p> {error} </p>
        </div>
    }
    {
      temperatura ? 
      <div className='card card-body'>
      <p>
        {/*Quiero mostrar el pais que pusieron*/}
        Regíon : {ciudad}, {pais}
      </p>
      <p>
        Temperatura: {temperatura} °C, {description}
      </p>
      <p>
        Humedad : {humedad}
      </p>
      <p>
        Velocidad del viento: {velocidad}
      </p>

    </div>
    :
    <div className='card card-body'>
      <p>No has colocado nada aún</p>
    </div>
    }
     
   
    </div>

  
  
  )
}

export default WeatherInfo;