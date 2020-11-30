import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Sidebar() {
    function closeMenu(){
      document.querySelector('.sidebar').classList.remove('open')
    }
  
    return (
        <div className="sidebar">
          <div>
            <span className="sidebar-close-button" onClick={closeMenu}>&times;</span>
            <h3>Categories</h3>
          </div>
          <div>
            <Link to="/" onClick={closeMenu}>
              <p>Mountain</p>
            </Link>
            <Link to="/" onClick={closeMenu}>
              <p>Road</p>
            </Link>
            <Link to="/" onClick={closeMenu}>
              <p>Country</p>
            </Link>
            <Link to="/" onClick={closeMenu}>
              <p>E-bike</p>
            </Link>

            <br/><br/><br/><br/><br/>
            <h3>Admin Section</h3>
            <Link to='/orderStatus' onClick={closeMenu}>
              <p>Order Status</p>
            </Link>
            <a href="/createProduct" onClick={closeMenu}>
              <p>Create Product</p>
            </a>
            <Link to='/productManagement' onClick={closeMenu}>
              <p>Product Management</p>
            </Link>
          </div>
        </div>
    )
}

export default Sidebar
