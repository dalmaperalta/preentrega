import { Link, useParams } from "react-router-dom"

const ProductCateg = ({producto}) => {
    const {cat} = useParams ()
    if (cat) {producto.filter((producto)=> producto.category === cat)
    
  return (
    <>
    {producto.map((producto=>
        <Link to={`/item/${producto.id}`} >
         <div key={producto.id} producto={producto}><h1>hola</h1></div>
        </Link>
    ))}
    </>
  )
}}

export default ProductCateg
