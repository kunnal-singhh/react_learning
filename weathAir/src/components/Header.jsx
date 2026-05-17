import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const themeMode = 'light';
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-light " >
        <div className="container-fluid  ">
          <a className="navbar-brand" href="#">Navbar</a>
       
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav float-start p-2 ">
              <NavLink to='/' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : themeMode==='dark'? "text-light":"text-dark"
                }`}>Home</NavLink>
              <NavLink to='/about' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : themeMode==='dark'? "text-light":"text-dark"
                }`
              }>About</NavLink>
              <NavLink to='/contact' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : themeMode==='dark'? "text-light":"text-dark"
                }`
              }>Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header