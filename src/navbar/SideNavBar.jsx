import React from 'react'
import './SideNavBar.css'
import { Link } from 'react-router-dom'

function SideNavBar({sidenav , closenav}) {
  return (
    <div className={sidenav ? "open sidebar" : "close sidebar"}>
      <div className="sidelinks">
        <ul>
            <li>
                <Link to='/' className='linkExtra'>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
                <Link to='/about' className='linkExtra'>About</Link>
            </li>
          </ul>
          <ul>
            <li>
                <Link to='/project' className='linkExtra'>Project</Link>
            </li>
          </ul>
          <ul>
            <li>
                <Link to='/service' className='linkExtra'>Service</Link>
            </li>
          </ul>
      </div>
    <p onClick={ ()=> closenav(false)}>O</p>

    </div>
  )
}

export default SideNavBar
