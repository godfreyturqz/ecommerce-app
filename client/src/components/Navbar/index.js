import React from 'react'
import './styles.css'
import { FaBars, FaCartArrowDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';

function Navbar(props) {
    // const {userInfo} = useSelector(state => state.userSignin)
    return (
        <nav>
          <div className="brand">
            <FaBars onClick={props.openMenu}/>
            <Link to='/'>Premium wheels</Link>
          </div>
          <div className="header-links">
            <Link to='/form'>Create product</Link>
            <Link to='/cart'><FaCartArrowDown /></Link>
            {
              // userInfo && <Link to='/profile'>{userInfo.name}</Link>
            }
            <Link to='/signin'>Sign-in</Link>
          </div>
        </nav>
    )
}

export default Navbar
