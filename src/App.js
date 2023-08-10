import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/checkout' element={<Checkout/>} />
            </Routes>
            <Footer />
            </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;