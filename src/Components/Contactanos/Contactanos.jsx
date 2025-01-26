import { Formulario } from "../Formulario/Formulario";
import "./Contactanos.css";

export const Contactanos = ({correo='Correo@correo.com',telefono='+00 00 00 000',direccion='Carrera 0 # 00-00 Extra',horario='09:00-18:00',facebook,instagram,whatsapp}) => {
  return (
    <div id="contacto">
      <section id="contactanos">
        <div id="contenedorFormulario">
          <h2>Contactanos</h2>
          <p>
            Tienes algun reclamo,sugerencia o agradecimiento este es el lugar para hacernoslo saber
          </p>
          <div id="formulario">
            <Formulario />
          </div>
        </div>

        <div id="decoracion">
          <div id="informacion">
            <div id="cuadro"></div>
            <h3>Info</h3>
            <ul>
              <li>
                <i className="fa-regular fa-envelope"></i>
                {correo}
              </li>
              <li>
                <i className="fa-solid fa-mobile-screen"></i>
                {telefono}
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                {direccion}
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                {horario}
              </li>
            </ul>
          </div>
        </div>
        <div id="redes">
          <ul>
            <li>
              <a href="" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href="" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            </li>
            <li>
              <a href="" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
