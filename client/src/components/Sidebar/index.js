import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Sidebar(props) {
    return (
        <div className="sidebar">
          <h2 className="sidebar-close-button" onClick={props.closeMenu}>&times;</h2>
          <h3>Categories</h3>
          <p><Link to="/" onClick={props.closeMenu}>Mountain</Link></p>
          <p><Link to="/" onClick={props.closeMenu}>Road</Link></p>
          <p><Link to="/" onClick={props.closeMenu}>Country</Link></p>
          <p><Link to="/" onClick={props.closeMenu}>E-bike</Link></p>
          <br/><br/><br/><br/><br/>
          <p><Link to='/createProduct' onClick={props.closeMenu}>Product Management</Link></p>
        </div>
    )
}

export default Sidebar
