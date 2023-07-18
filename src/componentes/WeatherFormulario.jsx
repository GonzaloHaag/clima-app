import React from 'react'

const WeatherFormulario = ({obtenerClima}) => {
  return (
    //Toma los datos del clima pero no muestra nada
    <div className='card card-body'>
        <form onSubmit={obtenerClima}>
            <div className='form-group'>
                <input type='text' name='ciudad' placeholder='Ingresá tú ciudad'
                className='form-control' autoFocus />
                <input type='text' name='pais' placeholder='Ingresá tú país'
                className='form-control mt-1' />
            </div>
            <button
            className='btn btn-success btn-block mt-2 w-50'
            > {/*Ya tiene el submit por defecto*/}
                Obtener clima

            </button>
        </form>
    </div>
  )
}

export default WeatherFormulario