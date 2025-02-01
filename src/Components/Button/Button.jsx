import './Button.css'

export const Button = ({texto,colorTexto,colorFondo,funcion}) => {
  return (
    <button onClick={funcion} className='botonesRedondos' style={{color: colorTexto, backgroundColor: colorFondo}}>{texto}</button>
  )
}
