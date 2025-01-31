import './Nav.css'

export const Nav = ({opcionesNav}) => {
  return (
    <nav>
      <ul>
        {opcionesNav.map((opcion)=> <li key={opcion}><a href={`#${opcion.toLowerCase().replace(/\s+/g, "")}`}>{opcion.toUpperCase()}</a></li>)}
      </ul>
    </nav>
  )
}
