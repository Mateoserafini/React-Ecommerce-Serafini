import styles from './Item.module.css'
import { Link } from "react-router-dom"
const Item = ({ id, titulo, img, precio}) => {

    return (
         <div className={styles.containerCard}>
             <div className={styles.containerTitulo}>
                 <h2>{titulo}</h2>
             </div>
             <div className={styles.containerImg}>
                 <img src={img} alt={titulo} />
             </div>
             <div className={styles.containerPrecio}>
                 <p>Precio: ${precio}</p>
             </div>
            <Link to={`/Item/${id}`}>
                <div className={styles.containerDetalles}>
                    Ver Detalles
                </div>
            </Link> 
             
        </div>
    );
};

export default Item;