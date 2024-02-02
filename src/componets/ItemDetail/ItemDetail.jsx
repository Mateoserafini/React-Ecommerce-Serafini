import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, titulo, img, descripcion, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useCart()
    const { showNotification } = useNotification()
    
    const handleOnAdd= (cantidad) => {
        setQuantityAdded(cantidad)


        const item = {
            id, titulo, precio, cantidad
        }
        addItem(item)
        showNotification('info', `Se agregaron correctamente ${cantidad} ${titulo}`)
    }

    return (
        <div className={styles.containerCardDetalles}>
            <div className={styles.containerTitulo}>
                <h2 className=''>
                    {titulo}
                </h2>
            </div >
            <div className={styles.containerImg}>
                <img src={img} alt={titulo} className='' />
            </div>
            <div className={styles.containerInfo}>
                <p className={styles.infoDescripcion}>
                    Descripción: {descripcion}
                </p>
                <p className={styles.infoPrecio}>
                    Precio: {precio}
                </p>
                <p className={styles.infoStock}>
                    Stock: {stock}
                </p>
            </div>
            <div className={styles.containerContador}>
               {
                quantityAdded === 0 ? 
                (
                    <ItemCount inicio={1} stock={stock} onAdd={handleOnAdd} />
                ) : (

                    <Link to='/cart'><button className={styles.btnFinalizarCompra}>Finalizar compra</button></Link>

                )
               } 
            </div>
        </div>
    )
}

export default ItemDetail
