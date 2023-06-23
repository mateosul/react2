import { useState } from "react";

const Home = ( {nombre} ) => {
 
 let contador = 0;

 const sumar = () => {
    contador = contador + 1
 };

    return (
    <div style = {{padding: "0 20px"}}>
        <h1>Hola {nombre}</h1>
    

    </div>
  )
}

export default Home