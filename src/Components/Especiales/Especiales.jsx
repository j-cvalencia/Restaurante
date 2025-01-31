import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Especiales.css'

export const Especiales = ({imagen,datos=[{nombre:'Opcion 1',precio:'10',descripcion: 'Descripcion del menu'},{nombre:'Opcion 2',precio:'10',descripcion: 'Descripcion del menu'},{nombre:'Opcion 3',precio:'10',descripcion: 'Descripcion del menu'}],ruta}) => {

  const [platos, setPlatos] = useState(datos);
  const navigate = useNavigate();

  const irARuta = () => {
    navigate(ruta);
  };
  
  return (
    <div id='carta'>
      <section id='seccionEspeciales'>
        <img src={`${import.meta.env.BASE_URL}${imagen}`} alt="" />
        <div id='contenedorEspeciales'>
          <h2>Nuestros Especiales</h2>
          <ul id='especiales'>
            {platos[0].items.map((plato)=>{
              return(
                <li className='plato' key={plato.nombre}>
                  <div className='contenedorInformacion'>
                    <h3>{plato.nombre}</h3>
                    <div className='linea'></div>
                    <p className='precio'>${plato.precio}</p>
                  </div>
                  <p className='descripcion'>{plato.descripcion}</p>
                </li>
              )
            })}
          </ul>
          <button onClick={irARuta}>MOSTRAR MAS</button>
        </div>
      </section>
    </div>
  )
}
