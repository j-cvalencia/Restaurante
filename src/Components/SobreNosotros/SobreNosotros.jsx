import './SobreNosotros.css'

export const SobreNosotros = () => {
  return (
    <section id='SobreNosotros'>
      <h2>Sobre Nosotros</h2>
      <div id='tarjetas'>
        <img src={`${import.meta.env.BASE_URL}/imagenes/fotoSobreNosotros.jfif`} alt="" />
        <div id='tarjetaPrincipal'>
          <h3>Restaurante Ensigna</h3>
          <h2>Sabor que encanta, frescura que se siente.</h2>
          <p>En Restaurante Ensigna, fusionamos frescura y sabor en cada platillo. Descubre una experiencia culinaria única que deleita todos los sentidos.</p>
          <button>LEER MAS</button>
        </div>
        <img src={`${import.meta.env.BASE_URL}/imagenes/fotoSobreNosotros2.jfif`} alt="" />
      </div>
    </section>
  )
}
