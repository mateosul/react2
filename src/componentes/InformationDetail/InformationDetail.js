import { useState } from 'react'

const InformationDetail = () =>{
    const [contentType, setContentType] = useState(2)

    const IndLavado = () => {
        return(
            <>
            <h1 className='title'>Indicaciones de Lavado</h1>
            <h2 className='title2'>Las prendas compuestas por un 100% de algodon tienden a encoger entre un 3% y un 10%.</h2>
            <p className='textdetails'>Para minimizar ese encogimiento, recomendamos lavar las prendas con agua fria sin centrifugados, pero es preferente que se lave a mano.</p>
            <p className='textdetails'>Se recomienda un secado al aire libre, sin secadoras, a la sombra, preferentemente colgado en una percha.</p>
            <p className='textdetails'>Las prendas lavadas ya no podran ser cambiadas ni devueltas.</p>
            <p className='textdetails'>Las prendas SuperSoft pueden encojer un pequeño porcentaje pero tienden a no hacerlo.</p>
            </>
        )
    }
    const EnviosPagos = () =>{
        return(
            <>
            <h1 className='title'>Envios y pagos</h1>
            <h2 className='title2'>Envio</h2>
            <p className='textdetails'>Hacemos envíos a todo el país mediante Urbano a domicilio o Correo argentino a sucursal o domicilio pagando previamente con una demora de 3 días hábiles para el despacho luego de la acreditación del pago.<br/>También tenemos la opción contra entrega para CABA y algunas zonas de GBA con una demora de 24 a 72 hs hábiles para el despacho.</p>
            <p className='textdetails'>Si estas en estas zonas y abonas previamente, el despacho se realiza de 24 a 72hs habiles luego de los plazos de acreditacion. Para este metodo el rango horario de entrega es de 10 a 20 hs.</p>
            <p className='textdetails'>Los envios en el dia tienen un cupo limitado, si no se muestra esta opcion es porque el cupo ya fue lleno.</p>
            <h2 className='title2'>Pagos</h2>
            <p className='textdetails'>Tenemos diferentes tipos de medios de pago segun donde te encuentres.</p>
            <p className='textdetails'>La acreditacion de los pagos puede demorar de 24 a 72hs habiles luego de informado.</p>
            </>
        )
    }
    const CambiosDevoluciones = () => {
        return (
            <>
            <h1 className='title'>Cambios y devoluciones</h1>
            <h2 className='title2'>Para el caso de prendas de linea, colecciones o cápsulas:</h2>
            <p className='textdetails'>30 días corridos desde la celebración de la compra para la devolución de cualquiera de las prendas.</p>
            <p className='textdetails'>La devolución solicitada NO INCLUYE el costo abonado por el envío.</p>
            <p className='textdetails'>30 días corridos de recibido el paquete para el cambio de cualquiera de las prendas.</p>
            <p className='textdetails'>El envío de dicho cambio tiene un costo según donde te encuentres.</p>
            <h2 className='title2'>Para el caso de prendas de outlet o sale, contienen fallas y las mismas tienen cambio solo por otra prenda de outlet.</h2>
            <p className='textdetails'>Las prendas lavadas no podrán ser cambiadas ni devueltas.</p>
            <p className='textdetails'>En caso de no haber stock en algún artículo del pedido, o que se encuentre una falla dentro del mismo, no se enviará dicha prenda. En consecuencia podemos ofrecerte la devolución proporcional de las prendas faltantes o que elijas una prenda similar y con el mismo precio, enviándola sin costo. </p>
            <p className='textdetails'>Ya que el mismo es sin costo permitimos que si quieres agregar alguna prenda al pedido o elegir alguna que tenga un mayor valor abonando la diferencia del mismo, el envío seguirá siendo GRATUITO. </p>
            <p className='textdetails'>Cada paquete es enviado con una copia del pedido donde se chequean por nosotros las prendas antes de ser enviadas, ese papel siempre llega con el paquete ya que contiene también la etiqueta de envío, por lo tanto solicitamos no desecharlo y revisar el pedido apenas es recibido. Sin dicho detalle no se podrán tomar reclamos por faltante de prendas.</p>
            </>
        )
    }
    const Content = () =>{
            if (contentType === 2){
                return <IndLavado/>
            }else if (contentType === 3){
                return <EnviosPagos/>
            }
            else if (contentType === 4){
                return <CambiosDevoluciones />
            }      
    }
    return(
        <>
        <div className="informationDetail">
            <div className="itemsInformationDetail">
                    <h3 className="itemsOptions" onClick={e =>setContentType(2)}>Indicaciones de Lavado</h3>
                    <h3 className="itemsOptions" onClick={e => setContentType(3)}>Envios y pagos</h3>
                    <h3 className="itemsOptions" onClick={e => setContentType(4)}>Cambios y devoluciones</h3>
            </div>
            <div className="contentInformationDetail">
                      <Content />
             </div>
        </div>
        </>
    )
}
export default InformationDetail