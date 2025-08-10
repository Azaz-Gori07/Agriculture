import React, {useContext} from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../hook/cartController'

function nav({ setnav }) {

  const { cart } = useContext(CartContext)

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="navbar">

        <div className="Logo">
          <img src="./Link - logo → logo@2x.webp.png" alt="" />
        </div>

        <div className='links'>
          <ul>
            <li>
              <Link to='/' className='link'>
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/about' className='link'>
                <i className="fas fa-info-circle"></i>
                About
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/project' className='link'>
                <i className="fas fa-project-diagram"></i>
                Project
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/service' className='link'>
                <i className="fas fa-tools"></i>
                Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="nv2">
          <Link to='/search'><img src="./Link - search.png" alt="" /></Link>
          <Link to='/cart'><img src="./Link.png" alt="" /> {totalQuantity}</Link>
          <p onClick={() => setnav(true)}>☰</p>
        </div>

      </div>
    </>
  )
}

export default nav
