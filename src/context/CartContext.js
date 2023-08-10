import { useState, createContext } from 'react';

const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)){
          setCart([...cart, productToAdd])
      }
    }
    const removeItem = (id) =>{
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const getCartCount = () =>{
        let totalCount = 0
        cart.forEach(prod => {
            totalCount += prod.count
        })
        return totalCount
    }
    const clear = () => {
        setCart([])
    }
    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            let subtotal = prod.count * prod.price
            total += subtotal
        })
        return total
    }
    return(
        <CartContext.Provider value={{ cart , addItem, removeItem, isInCart, getCartCount, clear, getTotal }}>
             { children }
        </CartContext.Provider>
    )

}

export default CartContext