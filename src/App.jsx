import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer.jsx/ItemDetailContainer'

function App() {

  return (
    <div className='wrapper'>
      <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
      </BrowserRouter>  
    </div>  
  )
}

export default App
