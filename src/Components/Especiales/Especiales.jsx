import './Especiales.css'

export const Especiales = () => {
  const platos = [
    {
      nombre: 'Bife de Chorizo',
      precio: 250,
      descripcion: 'Corte argentino de carne a la parrilla, servido con puré de papas y chimichurri.'
    },
    {
      nombre: 'Costillas BBQ',
      precio: 300,
      descripcion: 'Costillas de cerdo glaseadas con salsa barbacoa, acompañadas de papas fritas y ensalada coleslaw.'
    },
    {
      nombre: 'Pollo a la Parrilla',
      precio: 180,
      descripcion: 'Jugoso pollo marinado en especias y asado a la parrilla, servido con verduras asadas.'
    },
    {
      nombre: 'Tacos de Arrachera',
      precio: 150,
      descripcion: 'Suaves tortillas rellenas de arrachera, cebolla, cilantro y salsa de tu elección.'
    }
  ];
  
  return (
    <section id='seccionEspeciales'>
      <img src="../../../public/especiales.jfif" alt="" />
      <div id='contenedorEspeciales'>
        <h2>Nuestros Especiales</h2>
        <ul id='especiales'>
          {platos.map((plato)=>{
            return(
              <li className='plato' key={plato.nombre}>
                <div className='contenedorInformacion'>
                  <h3>{plato.nombre}</h3>
                  <div className='linea'></div>
                  <p className='precio'>{plato.precio}</p>
                </div>
                <p className='descripcion'>{plato.descripcion}</p>
              </li>
            )
          })}
        </ul>
        <button>MOSTRAR MAS</button>
      </div>
    </section>
  )
}
