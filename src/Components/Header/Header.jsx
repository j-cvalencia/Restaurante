import {Logo} from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Modo } from '../Contactarme/Contactame';
import './Header.css';

export const Header = () => {
  return (
    <div id='header'>
      <Logo />
      <Nav />
      <Modo />
    </div>
  )
}
