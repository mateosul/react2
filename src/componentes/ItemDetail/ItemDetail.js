import ButtonCount from "../ButtonCount/ButtonCount"
import InformationDetail from "../InformationDetail/InformationDetail";
import { useState, useContext } from 'react';
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
const ItemDetail = ({id, name, price, img, stock, description}) => {

    const [countAdded, setCountAdded] = useState(0)
    const {addItem} = useContext(CartContext)
    const handleOnAdd = (count) => {
        addItem({id, name, img, price, count})
        setCountAdded(count)
    } 

    return (
        <div>
        <div className="itemDetailContainer">
            <img src={img} alt={name} className="imgDetail"/>
            <h3 className="nameProduct">{name}</h3>
            <h3 className="detailItemProduct">{description}</h3>
            <h5 className="priceProduct">${price}</h5>
            {countAdded === 0 ? 
                <ButtonCount onAdd={handleOnAdd} stock={stock}/> 
                : 
                <Link to='/cart'><button className="finish">Terminar Compra</button></Link>}
        </div>
        <InformationDetail />

        </div>
    )
}

export default ItemDetail