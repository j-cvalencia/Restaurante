import { useNavigate } from "react-router-dom";
import "./ComponenteMenú.css";

export const ComponenteMenú = ({ menú }) => {
  const navegate = useNavigate();
  return (
    <>
      <button onClick={() => navegate("/")} id="botonRegresar">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h2>Menú</h2>
      <div className="linea" style={{ width: "100%", margin: 0 }}></div>

      <div id="contenedorMenú">
        {menú.map((item)=>{
          return(
            <div key={item.title} id={item.title} className="opcionesMenú">
              <h2 className="titulosMenú">{item.title}</h2>
              <ul>
                {item.items.map((plato)=>{
                  return(
                    <li className="plato" key={plato.nombre}>
                    <div className="contenedorInformacion">
                      <h3>{plato.nombre}</h3>
                      <div className="linea"></div>
                      <p className="precio">${plato.precio}</p>
                    </div>
                    <p className="descripcion">{plato.descripcion}</p>
                    </li>
                  )
                  })}
              </ul>
            </div>
          );
        }
        )}

      </div>
    </>
  );
};
