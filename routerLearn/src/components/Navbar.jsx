import { NavLink } from 'react-router-dom'
import useTheme from '../context/Theme'

export default function Navbar() {
   const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
      
        if (themeMode==='light') {
            darkTheme()
        } else {
            lightTheme()
        }
    }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light " >
        <div className="container-fluid  ">
          <a className="navbar-brand" href="#">Navbar</a>
          <a onClick={onChangeBtn} className='text-text-decoration-none'>{ (themeMode==='light')? <i class="fa-solid fa-moon fa-lg" style={{color: "#000000"}}></i>:<i class="fa-solid fa-sun fa-lg" style={{color: "#ffffffff"}}></i>}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav float-start p-2 ">
              <NavLink to='/' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : themeMode==='dark'? "text-light":"text-dark"
                }`}>Home</NavLink>
              <NavLink to='/about' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : themeMode==='dark'? "text-light":"text-dark"
                }`
              }>About</NavLink>
              <NavLink to='/product' className={({ isActive }) =>
                `nav-link text-decoration-none ${isActive ? "text-danger" : themeMode==='dark'? "text-light":"text-dark"
                }`
              }>Product</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
} 