import {Logo} from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Contactame } from '../Contactarme/Contactame';
import './Header.css';
/*Inicio Sobre Nosotros Carta Localizacion*/
export const Header = ({logo,nombreRestaurante,opcionesNav=['Opcion1','Opcion2','Opcion3','Opcion4'],gitHub}) => {
  return (
    <div id='header'>
      <Logo logo={logo} nombreRestaurante={nombreRestaurante} />
      <Nav opcionesNav={opcionesNav}/>
      <Contactame github={gitHub}/>
    </div>
  )
}
