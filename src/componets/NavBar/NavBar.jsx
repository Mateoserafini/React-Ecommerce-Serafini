import CartWidget from "../CartWidget/CartWidget"
import styles from './NavBar.module.css'
const NavBar = () => {
    return (
        <header className={styles.headerPrincipal}>
            <h1 className={styles.logo}>michi shop</h1>
            <div className={styles.containerButtons}>
                <button>Todo</button>
                <button>Michi 1</button>
                <button>Michi 2</button>
                <button>Michi 3</button>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar