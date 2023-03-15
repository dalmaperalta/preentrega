import Tarjetas from "./tarjetas"

const TarjetaCategory = ({  productos }) => {
      return (
        < >
        {productos.map((categories) => (
            <Tarjetas key={productos.categories} categories={categories} />
        ))
        }
        </>
  
      )
    }
    

export default TarjetaCategory