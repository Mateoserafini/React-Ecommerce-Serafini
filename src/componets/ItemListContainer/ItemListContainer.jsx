import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx'
import styles from './ItemListContainer.module.css'
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import { useNotification } from "../../notification/NotificationService"

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams ()
  const { showNotification } = useNotification()

  useEffect (() => {
    if(categoryId) document.title = 'michistore ' + categoryId
    return () => {
      document.title = 'michistore'
    }
  })

  const asyncFunction = () => getProducts(categoryId)

  const { data: products ,error, loading } = useAsync(asyncFunction, [categoryId])

  if(loading) {
      return <h1>Cargando los productos...</h1>
  }

  if(error) {
    showNotification('error', 'Hubo un error')
  }
  
  return (
    <div className={styles.wrapper}>
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