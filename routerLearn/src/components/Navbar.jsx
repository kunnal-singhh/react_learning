import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav float-start p-2 ">
              <NavLink to='/' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : "text-dark"
                }`}>Home</NavLink>
              <NavLink to='/about' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : "text-dark"
                }`
              }>About</NavLink>
              <NavLink to='/product' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : "text-dark"
                }`
              }>Product</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
} 