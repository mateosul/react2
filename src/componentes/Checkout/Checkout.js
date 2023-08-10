import { addDoc, collection, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import swal from 'sweetalert'

const Checkout = () => {

    const [loading, setloading] = useState(false)
    const {cart, getTotal, clear} = useContext(CartContext)
    const total = getTotal()
    
    const handleCreateOrder = ()=>{
        setloading(true)
        const parametroNombre = document.getElementById('nombre').value
        const parametroApellido = document.getElementById('apellido').value
        const parametroPhone = document.getElementById('phone').value
        const parametroEmail = document.getElementById('email').value
        const parametroAdress = document.getElementById('adress').value

        const order = {
            buyer: {
                name: {parametroNombre},
                apellido: {parametroApellido},
                numberphone: {parametroPhone},
                email: {parametroEmail},
                adress: {parametroAdress},
            },
            items: cart,
            totalCart: total,
            date: new Date(),
        }
        const batch = writeBatch(db)
        const outOfStock =  []
        const ids = cart.map(prod => prod.id)
        const productsCollRef = collection(db, 'items')
        getDocs(query(productsCollRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDocs= doc.data()
                    const productQ = cart.find(prod => prod.id ===doc.id)
                    const productQuantity = productQ.count
                    if(dataDocs.stock >= productQuantity) {
                        batch.update(doc.ref, {stock: dataDocs.stock - productQuantity})
                    }else {
                        outOfStock.push({id: doc.id, ...doc})
                    }
                })
            }).then(()=>{
                if (outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, order)
                } else {
                    return Promise.reject({type: 'out_of_stock', products: outOfStock})
                }
            }).then(({id})=>{
                batch.commit()
                swal("¡Listo!", "Tu número de orden es: " +{id} , "success");
                clear()
                
            }).catch(error => {
                    if (error.type === 'out_of_stock'){
                        swal("¡Ups!", "Tuvimos un inconveniente, intenta nuevamente más tarde. " , "error");
                        clear()
                    }
            }).finally(()=>{
                setloading(false)
            })
        }
    
        const [values, setValue] = useState({
                nombre: '',
                apellido: '',
                email: '',
                email2: '',
                phone: '',
                adress: '',
            })
        
    const {nombre, apellido, email, email2, phone, adress} = values

    const handleChange = (e) => {
        const {name, value} = e.target
        setValue({...value, [name]: value})
    }

    if(loading){
        return <div className='loading'><div className="spinner"></div></div>
    }

    return (
        <>
        <form>
            <div className="cartWidht">
                    <h1 className='titleCarrito'>Información de contacto</h1>
                    <label className='labelblock labelform'>Ingrese su nombre:
                        <input type='text' id='nombre' value={nombre} onChange={handleChange} className='labelblock inputform' required/>
                    </label>
                    <label className='labelblock labelform'>Ingrese su apellido:
                        <input type='text' id='apellido' value={apellido} onChange={handleChange} className='labelblock inputform' required/>
                    </label>
                    <label className='labelblock labelform'>Ingrese su correo electrónico:
                        <input type='email' id='email' value={email} onChange={handleChange} className='labelblock inputform' required/>
                    </label>
                    <label className='labelblock labelform'>Confirme su correo electrónico:
                        <input type='email' value={email2} onChange={handleChange} className='labelblock inputform' required/>
                    </label>
                    <label className='labelblock labelform'>Ingrese su número de teléfono:
                        <input type='numer' id='phone' value={phone} onChange={handleChange} className='labelblock inputform' required/>
                    </label>
                    <label className='labelblock labelform'>Ingrese su dirección:
                        <input type='text' id='adress' value={adress} onChange={handleChange} className='labelblock inputform' required/>
                    </label>
                    <button className="finalizarCompra2" onClick={handleCreateOrder}>Finalizar Compra</button>
                
            </div>
            </form>
        </>
    )
}
export default Checkout