import { Button } from '../Button/Button'
import './Banner.css'


export const Banner = () => {
  return (
    <div>
      <div id='banner'>
        <video src="../../../public/videoBanner.mp4" autoPlay muted loop ></video>
        <div id='ContenidoBanner'>
          <h1>Bienvenido a Restaurante Ensigna</h1>
          <p>Donde nuestra comida es deliciosa y unica</p>
          <div id='botones'>
            <Button texto={'VER CARTA'} colorTexto={'white'} colorFondo={'black'}/>
            <Button texto={'RESERVAR MESA'} colorTexto={'black'} colorFondo={'#eac445'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
