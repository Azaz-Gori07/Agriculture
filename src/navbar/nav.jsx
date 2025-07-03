import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function nav({setnav}) {
  return (
 <>
 <div className="navbar">

    <div className="Logo">
        <img src="./Link - logo → logo@2x.webp.png" alt="" />
    </div>

  <div className='links'>
  <ul>
    <li>
        <Link to='/' className='link'>Home</Link>
    </li>
  </ul>
  <ul>
    <li>
        <Link to='/about' className='link'>About</Link>
    </li>
  </ul>
  <ul>
    <li>
        <Link to='/project' className='link'>Project</Link>
    </li>
  </ul>
  <ul>
    <li>
        <Link to='/service' className='link'>Service</Link>
    </li>
  </ul>
  </div>

  <div className="nv2">
    <Link to='/search'><img src="./Link - search.png" alt="" /></Link>
    <Link to='/shopping'><img src="./Link.png" alt="" /></Link>
    <p onClick={()=>setnav(true)}>X</p>
  </div>

 </div>
 </>
  )
}

export default nav
