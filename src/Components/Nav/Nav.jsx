import './Nav.css'

export const Nav = ({opcionesNav}) => {
  return (
    <nav>
      <ul>
        {opcionesNav.map((opcion)=> <li><a href="#">{opcion.toUpperCase()}</a></li>)}
      </ul>
    </nav>
  )
}
