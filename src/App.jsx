import { useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/productList/navbar/navbar'
import ProductCateg from './assets/components/productList/productCateg'
import ProductItem from './assets/components/productList/productItem/item'
import ItemCateg from './assets/components/productList/productItem/itemCateg'
import ProductList from './assets/components/productList/productList'
import styles from './index.module.css'


function App() {
  const [productos, setProductos ] = useState ([])

  const obtenerProducto = async () => {
    const res = await fetch ('https://fakestoreapi.com/products')
    const data =  await res.json()
    setProductos (data)
  }

  const [categoria, setCategoria ] = useState ([])

  const obtenerCategoria = async () => {
    const res = await fetch ('https://fakestoreapi.com/products/category/jewelery')
    const data =  await res.json()
    setCategoria (data)
  }
 
  useEffect(() => {
    obtenerProducto()
    obtenerCategoria ()
  }, [])

  
  return (
   <div className={styles.container}>
    <h1 className={styles.titulo}>Tienda online</h1>

    <Navbar  />
   
   
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
     path='/products/category:/cat'
     element={<ItemCateg categoria={categoria} />}
     />
    </Routes>
   </div>
  )
}

export default App
