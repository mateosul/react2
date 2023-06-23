import { useState } from "react";

const Home = ( {nombre} ) => {
 
 const [contador , setContador ] = useState (0)
 const [userName , setUserName] = useState ("Mateo")
 console.log ("Me renderice")

 const sumar = () => {
   setContador (contador + 1)
 }

    return (
    <div style = {{padding: "0 20px"}}>
        <h1>Hola {nombre}</h1>
        <h2>Hola {userName}</h2>
        <button onClick={()=> setUserName ("Alejandro")}> Cambiar nombre </button>

        <h2>{contador}</h2>
    
<button onClick={sumar}>Sumar 1</button>

    </div>
  )
}

export default Home