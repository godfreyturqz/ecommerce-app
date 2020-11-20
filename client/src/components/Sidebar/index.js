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
          <p><Link to="/" onClick={props.closeMenu}>Mountain</Link></p>
          <p><Link to="/" onClick={props.closeMenu}>Road</Link></p>
          <p><Link to="/" onClick={props.closeMenu}>Country</Link></p>
          <p><Link to="/" onClick={props.closeMenu}>E-bike</Link></p>
          <br/><br/><br/><br/><br/>
          <p><a href="/createProduct" onClick={props.closeMenu}>Create Product</a></p>
          {/* <p><Link to='/createProduct' onClick={props.closeMenu}>Create Product</Link></p> */}
          <p><Link to='/productManagement' onClick={props.closeMenu}>Product Management</Link></p>
        </div>
    )
}

export default Sidebar
