import { useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categorias from './assets/components/productList/categorias/categorias'
import Navbar from './assets/components/productList/navbar/navbar'
import ProductItem from './assets/components/productList/productItem/item'
import ProductList from './assets/components/productList/productList'
import styles from './index.module.css'


function App() {
  const [productos, setProductos] = useState ([])
  useEffect(() => {
    fetch( 'https://fakestoreapi.com/products' )
      .then((response) => response.json())
      .then((json) => setProductos(json))
  }, [])

  return (
   <div className={styles.container}>
    <h1 className={styles.titulo}>Tienda online</h1>

    <Navbar />

    <Routes>
       
      <Route
       path='/' element={ <p className={styles.p}>Bienvenidos a Tienda online</p> } 
      />
      <Route
      path='/products'
      element={<ProductList productos={productos} />}
      />
      <Route
       path='products/:id' 
      element={<ProductItem productos={productos}/>}
      />
      <Route
       path='/categorias/:id' 
      element={<Categorias productos={productos} />}
      />
      
      
    </Routes>
   </div>
  )
}

export default App
