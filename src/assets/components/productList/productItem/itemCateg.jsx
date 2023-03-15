import { useParams } from "react-router-dom"

const ItemCateg = ({ productos}) => {
    const { cat } = useParams()
    if (cat) { productos = productos.filter((producto)=> producto.categories === cat ) }
    return ( 
            <div className={styles.container}>
            <div className={styles.tarj}>
            <h4 className={styles.price}> Categoria: {productos.category} </h4>
            <img className={styles.img} src={productos.image} alt="" />
            <h4 className={styles.titulo}>{productos.title}</h4>
            <h2 className={styles.price}> Precio ${producto.price} </h2>
            <p className={styles.price}> Rating: {producto.rating.rate}</p>
            </div>
   </div>   
  )
}

export default ItemCateg