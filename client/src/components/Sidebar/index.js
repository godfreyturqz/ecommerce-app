import React from 'react'
import './styles.css'

function Sidebar(props) {
    return (
        <div className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={props.closeMenu}>x</button>
          <ul>
            <li><a href="/">Pants</a></li>
            <li><a href="/">Shirts</a></li>
          </ul>
        </div>
    )
}

export default Sidebar
