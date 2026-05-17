  
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

  
  const App = () => {
    return (
        <> 
        <Header />
            <div className='container-fluid p-0 bg-primary min-vh-100 '> 
               <Routes> 
                {/* <Route path="/" element={<Layout />} > */}
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />

                {/* </Route> */}
               </Routes>
            </div>
            <Footer />
        </>
    )
  }
  
  export default App