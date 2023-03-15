

const ProductCateg = ({productos}) => {  
        return (
          < >
          {productos.map((producto) => (
              <div key={producto.id} producto={producto}> <p>hola</p> </div>
          ))
          }
          </>
        )
      }    

export default ProductCateg



