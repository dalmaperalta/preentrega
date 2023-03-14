import { useParams } from "react-router-dom"
import styles from './item.module.css'

const ProductItem = ({ productos}) => {
    const { id } = useParams()
    const producto = productos.find((producto)=> producto.id == id )
    return (       
            <div className={styles.container}>
            <div className={styles.tarj}>
            <h4 className={styles.price}> Categoria: {producto.category} </h4>
            <img className={styles.img} src={producto.image} alt="" />
            <h4 className={styles.titulo}>{producto.title}</h4>
            <h2 className={styles.price}> Precio ${producto.price} </h2>
            <p className={styles.price}> Rating: {producto.rating.rate}</p>
            </div>
   </div>   
  )
}

export default ProductItem