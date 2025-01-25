import './Logo.css' 

export const Logo = ({logo,nombreRestaurante}) => {
  return (
    <div id='logo'>
      <img src={`${import.meta.env.BASE_URL}${logo}`}/>
      <h3>{nombreRestaurante}</h3>
    </div>
  )
}
