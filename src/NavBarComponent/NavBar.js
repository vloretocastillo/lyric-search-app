import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
          <nav>
            <div className="nav-wrapper teal accent-4 navbarcomponent">
            <Link to='/'> <h5>LyricFinder </h5></Link>
            </div>
        </nav>
    )

}

export default Navbar