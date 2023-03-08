const ProductList = ({ productos }) => {
  return (
    < >
    {productos.map((producto) => (
        <div key={producto.id}>{producto.title}</div>
      ))}
    </>
  )
}

export default ProductList