import { useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/productList/navbar/navbar'
import ProductList from './assets/components/productList/productList'

function App() {
  const [productos, setProductos] = useState ([])

  useEffect(() => {
    fetch( 'https://fakestoreapi.com/products' )
      .then((response) => response.json())
      .then((json) => setProductos(json))
  },  [])

  return (
   <div>
    <h1>Mi app</h1>
    <Navbar />
    <Routes>

      <Route
       path='/'
       element={ 
       <p>Hola soy /</p> 
      } 
      />
      <Route
      path='/products'
      element={<ProductList productos={productos} />}
      />
      
    </Routes>
   </div>
  )
}

export default App
