import { Link, useParams } from "react-router-dom"
import Tarjetas from "../tarjetas/tarjetas"

const Categorias = ({ productos }) => {   
  
  const {id} = useParams = {} 
  if (id) {
    productos = productos.filter((productos) => productos.categories == id)}
        
  return (
   <div>
        {productos.map((producto =>
        <Link to = {`src/assets/components/productList/categorias/categorias/${producto.id}`} >
        <Tarjetas key={producto.id} producto={producto} categories={categories} />
        </Link>
    ))}
   </div>
         
  )
}

export default Categorias