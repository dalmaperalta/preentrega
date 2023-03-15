import { Link } from 'react-router-dom'
import styles from './tarjeta.module.css'


const Tarjetas = ({ producto }) => {
  return (
    <Link to ={`${producto.id}`}
      >
      <div>
      </div>
        <div className={styles.container}>
            <div className={styles.tarj}>
            <img className={styles.img} src={producto.image} alt="" />
            <h4 className={styles.titulo}>{producto.title}</h4>
            <h2 className={styles.price}> Precio ${producto.price} </h2>
            </div>
        </div> 
     </Link>
  )

  }

export default Tarjetas
