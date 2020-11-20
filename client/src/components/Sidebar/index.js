import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Sidebar(props) {
  
    return (
        <div className="sidebar">
          <div>
            <span className="sidebar-close-button" onClick={props.closeMenu}>&times;</span>
            <h3>Categories</h3>
          </div>
          <div>
            <Link to="/" onClick={props.closeMenu}>
              <p>Mountain</p>
            </Link>
            <Link to="/" onClick={props.closeMenu}>
              <p>Road</p>
            </Link>
            <Link to="/" onClick={props.closeMenu}>
              <p>Country</p>
            </Link>
            <Link to="/" onClick={props.closeMenu}>
              <p>E-bike</p>
            </Link>

            <br/><br/><br/><br/><br/>
            <h3>Admin Section</h3>
            <Link to='/orderStatus' onClick={props.closeMenu}>
              <p>Order Status</p>
            </Link>
            <a href="/createProduct" onClick={props.closeMenu}>
              <p>Create Product</p>
            </a>
            <Link to='/productManagement' onClick={props.closeMenu}>
              <p>Product Management</p>
            </Link>
          </div>
        </div>
    )
}

export default Sidebar
