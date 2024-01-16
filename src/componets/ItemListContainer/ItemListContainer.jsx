import { useState, useEffect } from 'react'
import { getProducts ,  getProductsByCategory} from '../../asyncMock.js'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx'
import styles from './ItemListContainer.module.css'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams ()

  useEffect(() => {

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            }) 
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])
  
  return (
    <div className=''>
      <div className=''> 
        <div className=''>
          <h1 className=''>{greeting}</h1>
        </div>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;