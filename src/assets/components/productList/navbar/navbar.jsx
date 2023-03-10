import { Link } from 'react-router-dom'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to = "products">
        <p>Productos</p>
      </Link>
      <Link to="categories/:id" >
        <p>Mujer</p>
      </Link>
      <Link to="categories/:id" >
        <p>Hombre</p>
      </Link>
      
      
      
    </nav>
  )
}

export default Navbar