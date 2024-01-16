import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import styles from './NavBar.module.css'
const NavBar = () => {
    return (
        <header className={styles.headerPrincipal}>
            <Link to={'/'}>
                <h1 className={styles.logo}>michi shop</h1>
            </Link>

            <div className={styles.containerButtons}>
                <Link to={'/'} >
                    <button>Todo</button>  
                </Link>
                <Link to={'/categoria/michimio'} >
                    <button>michimio</button> 
                </Link>
                <Link to={'/categoria/val'}>
                    <button>val</button>
                </Link>
                <Link to={'/categoria/otro'}> 
                    <button>otro</button>
                </Link>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar