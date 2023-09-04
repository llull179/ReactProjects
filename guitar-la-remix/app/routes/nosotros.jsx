import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'


export function meta() {
  return [{
    title: 'GUITAR LA- Sobre nosotrs',
    description: 'blog de guitarras'
  }]
      
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href: imagen,
      as:'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
          <img src= {imagen} alt="imagen nosotrs"/>
          <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel imperdiet ipsum, commodo elementum lorem. Maecenas ultrices ipsum eu turpis facilisis, ut dapibus nisl accumsan. In hendrerit blandit interdum. Duis tincidunt enim ligula, vel rhoncus eros scelerisque vel. Morbi vehicula viverra dolor eget consectetur. Aliquam mauris nulla, ullamcorper at laoreet eu, scelerisque non dolor. Suspendisse porttitor porta leo, a tincidunt magna elementum ut. Nunc maximus mollis metus id dapibus. Nulla accumsan eleifend dui, eu lacinia urna sagittis nec. Suspendisse in turpis ultrices, sagittis urna non, fermentum nisi.</p>

          <p>Maecenas a elit et augue aliquet lobortis. Morbi ultricies sagittis ante, a porttitor nisi pulvinar vitae. Praesent orci tortor, hendrerit eget consequat ac, luctus ac arcu. Etiam eget tincidunt metus, eget volutpat lacus. Nunc eleifend fringilla orci, et vestibulum dui facilisis vitae. Maecenas blandit eleifend mauris, in elementum risus faucibus sed. Sed quis euismod arcu. Nullam at finibus magna, eget accumsan justo. Pellentesque lacus sem, rhoncus quis rhoncus vel, auctor sit amet eros. Sed lorem metus, volutpat nec erat sed, venenatis maximus risus. Vivamus id turpis odio. Donec dapibus mi non nisi aliquam auctor.</p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros