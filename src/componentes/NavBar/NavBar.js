import CartWidget from "../CartWidget/CartWidget"
import Icon from "../Icon/Icon"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to='/'><Icon /></Link>
            <ul>
            <Link className="button-row" to='/'><div><p>Inicio</p></div></Link>
            <Link className="button-row" to='/category/buzos-remeras'><div><p>Buzos & Remeras</p></div></Link>
            <Link className="button-row" to='/category/jeans-pants'><div><p>Jeans & Pants</p></div></Link>
            <Link className="button-row" to='/category/outfits'><div><p>Outfits</p></div></Link>
            <Link className="button-row" to='/category/maxicombos'><div><p>Maxicombos</p></div></Link>
            <Link className="button-row" to='/category/accesorios'><div><p>Accesorios</p></div></Link>
            <Link to='/cart'><CartWidget/></Link>
            </ul>
        </nav>
    )
}
export default NavBar