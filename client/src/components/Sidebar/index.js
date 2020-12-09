import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Sidebar({setFilteredProducts}) {

    function closeMenu(){
      document.querySelector('.sidebar').classList.remove('open')
    }
    
    const handleLinks = (value) => {
      setFilteredProducts(value)
      closeMenu()
    }
    
    return (
        <div className="sidebar">
          <div>
            <span className="sidebar-close-button" onClick={closeMenu}>&times;</span>
            <h3>Categories</h3>
          </div>
          <div>
            <Link to="/" onClick={() => handleLinks('Mountain')}>
              <p>Mountain</p>
            </Link>
            <Link to="/" onClick={() => handleLinks('Road')}>
              <p>Road</p>
            </Link>
            <Link to="/" onClick={() => handleLinks('Country')}>
              <p>Country</p>
            </Link>
            <Link to="/" onClick={() => handleLinks('E-bike')}>
              <p>E-bike</p>
            </Link>

            <br/><br/><br/><br/><br/>
            <h3>Admin Section</h3>
            <Link to='/orders' onClick={closeMenu}>
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
