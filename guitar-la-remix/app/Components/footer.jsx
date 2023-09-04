import Navegacion from "./navegacion"

function Footer() {
  return (
    <footer className='footer'>
        <div className='contenido'>
            <Navegacion/>
            <p className="copyright">Copyright: todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer