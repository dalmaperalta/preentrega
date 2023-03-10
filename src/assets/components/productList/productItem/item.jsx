import { useParams } from "react-router-dom"

const ProductItem = ({ productos}) => {
    const { id } = useParams()
    const producto = productos.find((producto)=> producto.id == id )
    return (
   <div>
            <h4>{producto.title}</h4>
            <img src={producto.image} alt="" />
            <h4>{producto.category}</h4>
            <p>{producto.description}</p>
            <h2> Precio ${producto.price} </h2>
            <p> Rating: {producto.rating.rate}</p>
   </div>   
  )
}

export default ProductItem