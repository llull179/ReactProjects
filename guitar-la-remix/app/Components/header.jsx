import { Link,useLocation } from "@remix-run/react"
import Logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion"

function Header() {
  return (
    <div className="header">
        <div className="contenedor barra">
            <Link to ="/">
                <img className="logo" src={Logo} alt="imagen logo"/>
            </Link>
            <Navegacion/>
        </div>
    </div>
  )
}

export default Header