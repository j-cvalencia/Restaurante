import './Button.css'

export const Button = ({texto,colorTexto,colorFondo}) => {
  return (
    <button className='botonesRedondos' style={{color: colorTexto, backgroundColor: colorFondo}}>{texto}</button>
  )
}
