import { Link } from "react-router-dom"
const Item = ({id, name, price, img}) => {
    return(
        <div className="divItem" >
            <Link to={`/detail/${id}`}><img src={img} alt={name} className="imgItem"/></Link>
            <h3>{name}</h3>
            <h5>${price}</h5>
            <div className="detailProduct"><Link className='detail'to={`/detail/${id}`}>Ver Detalle</Link></div>
        </div>
       )
}

export default Item