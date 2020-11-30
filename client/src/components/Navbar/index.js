import React from 'react'
import './styles.css'
import { FaBars, FaCartArrowDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";


function Navbar() {
    const cartItems = useSelector(state => state.cartReducer)
    function openMenu(){
      document.querySelector('.sidebar').classList.add('open')
    }

    return (
        <nav>
          <div className="brand">
            <FaBars className="bar" onClick={openMenu}/>
            <Link to='/'>PremiumBikes</Link>
          </div>
          <div className="nav-links">
            <Link to='/cart' className="cart-icon">
              {cartItems.data.length > 0 ? <span>{cartItems.data.length}</span> : null}
              <FaCartArrowDown /> Cart
            </Link>
            <Link to='/signin'>Sign-in</Link>
            <Link to='/register'>Register</Link>
          </div>
        </nav>
    )
}

export default Navbar
