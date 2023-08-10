import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setloading] = useState(true)

    const {productId} = useParams()
    useEffect(() => {
        setloading(true)
        const docRef = doc(db, 'items', productId)
        getDoc(docRef).then(doc => {
            const productFS = {id: doc.id,
                                ...doc.data()}
            setProduct(productFS)
        }).finally(()=>{
            setloading(false)
        })
    },[productId])

    if(loading){
        return <div className='loading'><div className="spinner"></div></div>
    }
    return (
        <>
        <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer