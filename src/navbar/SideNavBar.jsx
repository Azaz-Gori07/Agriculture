import React, { useState } from 'react'
import './SideNavBar.css'
import { Link } from 'react-router-dom'

function SideNavBar({sidenav , closenav}) {
  const [showLogin, setShowLogin] = useState(false);

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'login-popup') {
      setShowLogin(false);
    }
  };

  return (
    <div className={sidenav ? "open sidebar" : "close sidebar"}>
      <div className="sidelinks">
        <ul style={{"--i": 1}}>
            <li>
                <Link to='/' className='linkExtra'>
                  <span>
                    <i className="fas fa-home"></i>
                    Home
                  </span>
                </Link>
            </li>
          </ul>
          <ul style={{"--i": 2}}>
            <li>
                <Link to='/about' className='linkExtra'>
                  <span>
                    <i className="fas fa-info-circle"></i>
                    About
                  </span>
                </Link>
            </li>
          </ul>
          <ul style={{"--i": 3}}>
            <li>
                <Link to='/project' className='linkExtra'>
                  <span>
                    <i className="fas fa-project-diagram"></i>
                    Project
                  </span>
                </Link>
            </li>
          </ul>
          <ul style={{"--i": 4}}>
            <li>
                <Link to='/service' className='linkExtra'>
                  <span>
                    <i className="fas fa-tools"></i>
                    Service
                  </span>
                </Link>
            </li>
          </ul>
          <ul style={{"--i": 5}}>
            <li>
                <button 
                  className='linkExtra login-btn' 
                  onClick={() => setShowLogin(true)}
                >
                  <span>
                    <i className="fas fa-sign-in-alt"></i>
                    Login
                  </span>
                </button>
            </li>
          </ul>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div className="login-popup" onClick={handleBackgroundClick}>
          <div className="login-content">
            <div className="login-header">
              <h3><i className="fas fa-user-circle"></i> Login</h3>
              <button 
                className="close-login" 
                onClick={() => setShowLogin(false)}
                title="Close Login"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form className="login-form">
              <div className="form-group">
                <i className="fas fa-envelope"></i>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                />
              </div>
              <div className="form-group">
                <i className="fas fa-lock"></i>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                />
              </div>
              <div className="form-options">
                <label>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              <button type="submit" className="login-submit">
                <i className="fas fa-sign-in-alt"></i>
                Login
              </button>
            </form>
            <div className="login-footer">
              <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
          </div>
        </div>
      )}

      <p onClick={ ()=> closenav(false)}>✕</p>
    </div>
  )
}

export default SideNavBar
