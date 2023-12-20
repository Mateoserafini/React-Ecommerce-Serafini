import styles from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => { 
    return(
        <div className= {styles.center}>
            <h2 className= {styles.saludo}>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer