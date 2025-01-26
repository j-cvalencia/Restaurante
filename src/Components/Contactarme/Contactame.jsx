import './Contactame.css'

export const Contactame = ({github}) => {
  return (
    <div id='contactame'>
      <a id='linkContactame' href={github} target='_blank'><i className="fa-brands fa-github"></i></a>
    </div>
  )
}
