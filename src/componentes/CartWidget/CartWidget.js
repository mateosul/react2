import { useContext } from "react"
import CartContext from "../../context/CartContext"
const CartWidget = () => {

    const {getCartCount}=useContext(CartContext)

    const totalCount = getCartCount()
    return (
        <div className="button-row">
            {totalCount > 0 && <div className="cart">
                                        <div>
                                            <img src="/assets/cart.png" alt="logo" className="cartIcon" name='0'/>
                                            <p className="countCart">{totalCount}</p>
                                        </div>
                                </div>}
            {totalCount === 0 && <div className="cart cartempty"> </div>}
        </div>
                
            
    )
}
 
export default CartWidget