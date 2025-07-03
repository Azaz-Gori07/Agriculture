import './App.css'
import Navbar from './navbar/nav.jsx'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './home/home.jsx'
import About from './about/about.jsx'
import Projects from './projects/projects.jsx'
import Service from './service/service.jsx'
import Footer from './Footer/Footer.jsx'
import SideNavBar from './navbar/SideNavBar.jsx'
import { useState } from 'react'
import Product from './product-details/onions.jsx'

function App() {

  let [nav , setNav] = useState(false)

  return (
    <>
    <Router>
      <Navbar setnav={setNav}/>
      <SideNavBar sidenav={nav} closenav={setNav}/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/project' element ={<Projects/>}/>
        <Route path='/service' element ={<Service/>}/>
        {/* <Route path='/search' element ={<Service/>}/>
        <Route path='/shopping' element ={<Service/>}/> */}
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
      {/* <Product/> */}
    </Router>
       
    </>
  )
}

export default App




