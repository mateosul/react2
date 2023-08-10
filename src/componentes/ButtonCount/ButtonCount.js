import { useState } from "react"
const ButtonCount = ({ onAdd, stock, initial = 0}) => {
    const [count, setCount] = useState(initial)

    const incrementCount = () => {
        if (count < stock) setCount(count+1)
    }
    const decrementCount = () => {
        if (count > 0) setCount(count-1)
    }

    return (
        <div className="buttonsCount">
            <h6 className="avisoStock">Solo quedan {stock} disponibles*</h6>
            <button className="buttonCount" onClick={decrementCount}>-</button>
            <h1 className="textCount">{count}</h1>
            <button className="buttonCount" onClick={incrementCount}>+</button><br/>
            <button className="buttonOnAdd" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ButtonCount