import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Sidebar(props) {
    return (
        <div className="sidebar">
          <h2 className="sidebar-close-button" onClick={props.closeMenu}>&times;</h2>
          <h3>Categories</h3>
          <p><Link to="/">Mountain</Link></p>
          <p><Link to="/">Road</Link></p>
          <p><Link to="/">Country</Link></p>
          <p><Link to="/">E-bike</Link></p>
          <br/><br/><br/><br/><br/>
          <p><Link to='/createProduct'>Create product</Link></p>
        </div>
    )
}

export default Sidebar
