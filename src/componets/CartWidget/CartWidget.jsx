import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'


const CartWidget = () => {
    return(
        <div className= {styles.cartCount} >
            <img src={cart} alt="logo de carrito" className={styles.logoCarrito} />
            <span className={styles.count}>0</span>
        </div>
    )
}


export default CartWidget