import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const navItems=["jewelery", "men's clothing", "women's clothin, electrics"]
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <p>Home</p>
      </Link>

      <Link to = "products">
        <p>Productos</p>
      </Link>
    
      <Link to = "/products/category/jewelery">
      <p>Joyeria</p>
      </Link>
       
      <Link to = "/cart">
       <ShoppingCartIcon className={styles.icono}/>
      </Link>
      
    
    </nav>
  )
}

export default Navbar