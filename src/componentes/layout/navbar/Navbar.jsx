

import CartWidget from "../../common/cardWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {

  return (
    <div ClassName = "navContainer">
      <h4>DarkySTYLE</h4>
      <ul ClassName = "containerCategories">
        <li>Todas</li>
        <li>Deportivas</li>
        <li>About</li>
      </ul>

      <CartWidget/>

    </div>
  )
}

export default Navbar;
