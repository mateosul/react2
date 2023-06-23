import {useState} from "react";
import Navbar from "./componentes/layout/navbar/Navbar";
import HomeContainer from "./componentes/pages/home/HomeContainer";
import ItemListContainer from "./componentes/pages/itemList/ItemListContainer";


function App() {

  const [nombre, setNombre] = useState ("mateo");

  const saludar = "Hola Mateo"
  
  return (
    <div>
      
    <Navbar />
    <button onClick={() => setNombre ("Cualquiera")}>Cambiar Nombre</button>
    <HomeContainer nombre = {nombre} />
    <ItemListContainer />
    </div>
  );
}

export default App;
