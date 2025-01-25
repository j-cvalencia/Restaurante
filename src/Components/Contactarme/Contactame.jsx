import './Contactame.css'

export const Contactame = ({github}) => {
  return (
    <div id='contacto'>
      <a id='contactame' href={github} target='_blank'><i className="fa-brands fa-github"></i></a>
    </div>
  )
}
