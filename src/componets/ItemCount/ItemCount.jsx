import styles from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({stock, inicio, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicio)

    const increment = () => {
        if(cantidad< stock){
            setCantidad(cantidad+1)
        }
    }
    const decrement = () => {
        if (cantidad > 1){
            setCantidad(cantidad-1)
        }
    }
    return(
        <div className= {styles.contador}>
            <div className= {styles.controles}>
                <button className= {styles.btnControl} onClick={increment}>+</button>
                <h3 className= {styles.numerito}>{cantidad}</h3>
                <button className= {styles.btnControl} onClick={decrement}>-</button>
            </div>
            <div>
                <button className={styles.btnAddToCart} onClick={() => onAdd(cantidad)} desabled={!stock}>
                Agregar al carrito
                </button>
            </div>
        </div>



    )
}
export default ItemCount