import { Formulario } from "../Formulario/Formulario";
import "./Contactanos.css";

export const Contactanos = () => {
  return (
    <section id="contactanos">
      <div id="contenedorFormulario">
        <h2>Contactanos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          debitis et! Voluptas nostrum eos dolor culpa facere sequi, asperiores
          optio, illum, mollitia magnam a quisquam minima iusto sunt doloribus
          ipsum!
        </p>
        <div id="formulario">
          <Formulario />
        </div>
      </div>
      <div id="informacion">
        <div id="cuadro"></div>
        <h3>Info</h3>
        <ul>
          <li>
            <i class="fa-regular fa-envelope"></i>Correo@correo.com
          </li>
          <li><i class="fa-solid fa-mobile-screen"></i>+00 00 00 000</li>
          <li><i class="fa-solid fa-location-dot"></i>Carrera 0 # 00-00 Extra</li>
          <li><i class="fa-regular fa-clock"></i>09:00-18:00</li>
        </ul>
      </div>
      <div id="decoracion"></div>
      <div id="redes">
        <ul>
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-whatsapp"></i></li>
        </ul>
      </div>
    </section>
  );
};
