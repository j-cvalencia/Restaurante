import './SobreNosotros.css'

export const SobreNosotros = ({imagen1,imagen2,nombre='Nombre de la pagina',eslogan='Eslogan de la pagina',descripcion='Descripcion de la pagina'}) => {
  return (
    <section id='SobreNosotros'>
      <h2>Sobre Nosotros</h2>
      <div id='tarjetas'>
        <img src={`${import.meta.env.BASE_URL}${imagen1}`} alt="" />
        <div id='tarjetaPrincipal'>
          <h3>{nombre}</h3>
          <h2>{eslogan}</h2>
          <p>{descripcion}</p>
          <button>LEER MAS</button>
        </div>
        <img src={`${import.meta.env.BASE_URL}${imagen2}`} alt="" />
      </div>
    </section>
  )
}
