import { useNavigate } from "react-router-dom";
import { Button } from '../Button/Button'
import './Banner.css'


export const Banner = ({videoBanner,tituloBanner='Bienvenido a Nombre',descripcionBanner='Descripcion',textoBTN1='Boton1',textoBTN2='Boton2',rutaBTN1,rutaBTN2}) => {
  const navegate = useNavigate();
  return (
    <section id='inicio'>
      <div id='banner'>
        <video src={`${import.meta.env.BASE_URL}${videoBanner}`} autoPlay muted loop ></video>
        <div id='ContenidoBanner'>
          <h1>{tituloBanner}</h1>
          <p>{descripcionBanner}</p>
          <div id='botones'>
            <Button texto={textoBTN1} colorTexto={'white'} colorFondo={'black'} funcion={()=>navegate(rutaBTN1)}/>
            <Button texto={textoBTN2} colorTexto={'black'} colorFondo={'#eac445'} funcion={()=>navegate(rutaBTN2)}/>
          </div>
        </div>
      </div>
    </section>
  )
}