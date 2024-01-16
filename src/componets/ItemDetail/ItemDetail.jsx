import ItemCount from '../ItemCount/ItemCount'
import styles from './ItemDetail.module.css'
const ItemDetail = ({ titulo, img, descripcion, precio, stock }) => {
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
                <ItemCount inicio={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada', cantidad)} />
            </div>
        </div>
    )
}

export default ItemDetail
