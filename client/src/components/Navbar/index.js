import React from 'react'
import './styles.css'
import { FaBars, FaCartArrowDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/auth/authActions";


function Navbar({authReducer, setFilteredProducts}) {
  
    const cartReducer = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open')
    }
    
    const handleLogout = () => {
      dispatch(userLogout())
    }

    const handleLinks = () => {
      setFilteredProducts('')
    }


    return (
      <nav>
        <div className="brand">
          <FaBars className="bar" onClick={openMenu}/>
          <Link to='/' onClick={handleLinks}>PremiumBikes</Link>
        </div>
        <div className="nav-links">
          <Link to='/cart' className="cart-icon">
            {
              cartReducer && cartReducer.data.length > 0 ? <span>{ cartReducer.data.length }</span> : null
            }
            <FaCartArrowDown /> Cart
          </Link>
          {
            authReducer.isAuth
            ?
            <>
              <Link to='/profile'>Profile</Link>
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </>
            :
            <>
              <Link to='/signin'>Sign-in</Link>
              <Link to='/register'>Register</Link>
            </>
          }
        </div>
      </nav>
    )
}

export default Navbar
