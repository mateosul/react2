import CartContext from "../../context/CartContext"
import CartListContainer from "../CartListContainer/CartListContainet"
import { Link } from "react-router-dom"
import { useContext } from "react"

const Cart = () => {
    const {getTotal} = useContext(CartContext)
    const total = getTotal()

    return(
           (total === 0) ? 
                <div className="cartEmpty">
                    <h2 className="titleCarrito">Carrito</h2>
                    <h2 className="titleCarrito empty">Tu carrito está vacío.</h2>
                    <Link to='/' className="comeback">Volver a la Tienda</Link>
                </div>
                :
                <CartListContainer total={total}/>        
    )
}
export default Cart 