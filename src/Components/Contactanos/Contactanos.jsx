import { Formulario } from "../Formulario/Formulario";
import "./Contactanos.css";

export const Contactanos = () => {
  return (
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
              <i className="fa-regular fa-envelope"></i>Correo@correo.com
            </li>
            <li>
              <i className="fa-solid fa-mobile-screen"></i>+00 00 00 000
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>Carrera 0 # 00-00
              Extra
            </li>
            <li>
              <i className="fa-regular fa-clock"></i>09:00-18:00
            </li>
          </ul>
        </div>
      </div>
      <div id="redes">
        <ul>
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};
