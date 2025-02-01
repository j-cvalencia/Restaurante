import { Header } from '../Components/Header/Header'
import { Banner } from '../Components/Banner/Banner'
import { SobreNosotros } from '../Components/SobreNosotros/SobreNosotros'
import { Especiales } from '../Components/Especiales/Especiales'
import { Contactanos } from '../Components/Contactanos/Contactanos'

import menu from '../data/menu.json'

export const Inicio = () => {
  return (
    <>
      <Header logo={'/imagenes/tenedor.png'} opcionesNav={['Inicio','Sobre Nosotros','Carta','Contacto']} nombreRestaurante={'Restaurante Ensigna'} gitHub={'https://github.com/j-cvalencia'} />
      <Banner videoBanner={'/videos/videoBanner.mp4'} tituloBanner={'Bienvenido a Restaurante Ensigna'} descripcionBanner={'Donde nuestra comida es deliciosa y unica'} textoBTN1={'VER CARTA'} rutaBTN1={'/menú'} textoBTN2={'RESERVAR MESA'}/>
      <SobreNosotros imagen1={'/imagenes/fotoSobreNosotros.jfif'} imagen2={'/imagenes/fotoSobreNosotros2.jfif'} nombre={'Restaurante Ensigna'} eslogan={'Sabor que encanta, frescura que se siente.'} descripcion={'En Restaurante Ensigna, fusionamos frescura y sabor en cada platillo. Descubre una experiencia culinaria única que deleita todos los sentidos.'}/>
      <Especiales imagen={'/imagenes/Especiales.jfif'} datos={menu} ruta={'/menú'}/>
      <Contactanos />
    </>
  )
}
