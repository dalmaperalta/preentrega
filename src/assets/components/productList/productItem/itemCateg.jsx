import { useParams } from "react-router-dom"

const ItemCateg = ({ productos}) => {
    const { cat } = useParams()
    if (cat) { productos = productos.filter((producto)=> producto.category === cat ) }
    return ( 
          <div>
            {productos.map((producto =>
              <Link to={`/item/${producto.id}`} key={producto.id}></Link>
              
              ))}
          </div>  
     
  )
}

export default ItemCateg