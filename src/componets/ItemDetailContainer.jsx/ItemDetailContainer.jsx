import { useEffect, useState } from 'react'
//import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import styles from './ItemDetailContainer.module.css'
import { useNotification } from "../../notification/NotificationService"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()
    const { showNotification } = useNotification()

    useEffect(() => {
        if(product) document.title = product.titulo
        
        return () => {
            document.title = 'michistore'
        }
    })

    useEffect(() => {
        setLoading(true)

        const productDocument = doc(db, 'products', itemId)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error')
            })
            .finally(() => {
                setLoading(false)
            })
       
       
       
       
       
       
       
        /* getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                showNotification('error', 'Error: Cargando los productos')
            })
            */
    }, [itemId])

    if(loading) {
        return <h1>Cargando el producto...</h1>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return (
        <div className={styles.wrapper}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer