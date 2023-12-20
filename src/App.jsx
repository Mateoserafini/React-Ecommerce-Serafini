import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
function App() {

  return (
    <div className='wrapper'>
       <NavBar/>
       <ItemListContainer greeting={'Bienvenido/a'}/>
    </div>  
  )
}

export default App
