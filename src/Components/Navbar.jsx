import React from 'react';
import {Link} from "react-router-dom";
import "./nvbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link to="/">HOME</Link>  
        </div>
        <div>
        <Link to="/login">LOGIN</Link>
        </div>
    </div>
  )
}

export default Navbar