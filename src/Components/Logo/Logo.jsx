import './Logo.css' 

export const Logo = () => {
  return (
    <div id='logo'>
      <img src={`${import.meta.env.BASE_URL}/imagenes/tenedor.png`}/>
      <h3>Restaurante Ensigna</h3>
    </div>
  )
}
