import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer.jsx/ItemDetailContainer'
import CartView from './componets/CartView/CartView'
import Checkout from './componets/Checkout/Checkout'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
             <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/categoria/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<CartView />} />
                <Route path='/Checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
              </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>  
    </div>  
  )
}

export default App
