import './index.css';
import { Link } from 'react-router-dom';
import { CartContext } from './../../contexts/CartContext/index';
import { useContext } from 'react';

export const CartWidget = () => {
    const cartContext = useContext(CartContext);

    return (
      <>
        <Link to={`/carrito`}>
          <div className='cartWidget-container'>
            <i><img className="cart" src="/images/carrito.png" alt="Carrito" /></i>
            <p className='cart-counter'>{ cartContext.cart.length }</p>
          </div>
        </Link>
      </>
    )
}