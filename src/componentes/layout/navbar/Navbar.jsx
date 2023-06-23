

import CartWidget from "../../common/cardWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {

  return (
    <div className = "navContainer">
      <h4>DarkySTYLE</h4>
      <ul className = "containerCategories">
        <li>Computadoras</li>
        <li>Notebook</li>
        <li>Mouse y teclado</li>
      </ul>

      <CartWidget />

    </div>
  )
}

export default Navbar;
