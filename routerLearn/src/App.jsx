
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './pages/NotFound.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} >
              <Route path='men' element={<Men />} />
              <Route path='women' element={<Women />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
