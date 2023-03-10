import Tarjetas from "./tarjetas/tarjetas"

const ProductList = ({ productos }) => {
  return (
    < >
    {productos.map((producto) => (
        <Tarjetas key={producto.id} producto={producto} />
    ))
    }
    </>
  )
}


export default ProductList