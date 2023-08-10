import { Link } from "react-router-dom"
import { useContext } from 'react';
import CartContext from "../../context/CartContext";

const CartItem = ({id, name, img, price, count}) => {

    const {removeItem} = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return(
        <div className="divCartItem">
            <img src={img} alt={name} className="imgCart"/>            
            <h3 className="nameDescription"><Link to={`/detail/${id}`}className="nameLink">{name}</Link></h3>
            <h4 className="priceDescription">${price}</h4>
            <h5 className="countDescription">{count}</h5>
            <h5 className="countDescription">${count*price}</h5>
            <img src="/assets/delete.png" alt={id} className="imgtrash" onClick={() => handleRemove(id)}/>
        </div>
    )
}
export default CartItem