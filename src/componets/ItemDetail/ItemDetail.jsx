//import  style from  './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ titulo, img, descripcion, precio, stock }) => {
    return (
        <article className=''>
            <header className=''>
                <h2 className=''>
                    {titulo}
                </h2>
            </header>
                <img src={img} alt={titulo} className='' />
            <section>
                <p className=''>
                    Descripción: {descripcion}
                </p>
                <p className=''>
                    Precio: {precio}
                </p>
                <p className=''>
                    Stock: {stock}
                </p>
            </section>
            <footer className=''>
                <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada', cantidad)} />
            </footer>
        </article>
    )
}

export default ItemDetail
