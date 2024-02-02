import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const CartView = () => {

    const { cart, total, removeItem } = useCart()

    return (
        <>
            <h1>Cart</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h3>{prod.titulo}</h3>
                            <h4>Cantidad: {prod.cantidad}</h4>
                            <h4>Precio por unidad: ${prod.precio}</h4>
                            <h4>Subtotal: ${prod.cantidad * prod.precio}</h4>
                            <button onClick={() => removeItem(prod.id)}>Remover</button>
                        </div>
                    )
                })
            }
            </section>
            <section>
                <h1>Total: ${total}</h1>
            </section>
            <section>
                <Link to='/checkout'>Checkout</Link>
            </section>
        </>
    )
}

export default CartView