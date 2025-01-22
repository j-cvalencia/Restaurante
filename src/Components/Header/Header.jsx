import {Logo} from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Modo } from '../Modo/Modo';
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
