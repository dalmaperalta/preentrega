import { InsertEmoticon } from '@mui/icons-material'
import { Link, NavLink } from 'react-router-dom'
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
      
     <Link to= "products/categories/:cat">
        <p>Mujer</p>
     </Link>
     
    </nav>
  )
}

export default Navbar