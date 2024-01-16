import './Item.module.css';
import { Link } from "react-router-dom"
const Item = ({ id, titulo, img, precio, stock, descripcion }) => {

    return (
        <div className=''>
            <article className=''>
                <header className=''>
                    <h2 className=''>{titulo}</h2>
                </header>
                <picture>
                    <img src={img} alt={titulo} />
                </picture>
                <section>
                    <p className=''>Precio: ${precio}</p>
                </section>
                <footer className=''>
                    <Link to={`./Item/${id}`}>ver detalle</Link>
                </footer>
            </article>
        </div>
    );
};

export default Item;