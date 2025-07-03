import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
            <img src="white agriculture.png" alt="" />
            <p>There are many variations of passages <br />
            of lorem ipsum available, but the <br />
            majority suffered.</p>
            <div className="links">
              <a href="https://web.telegram.org/k/#@fastual1"><img src="twitter.png" alt="" /></a>
              <a href=""><img src="facebook.png" alt="" /></a>
              <a href=""><img src="pintrest.png" alt="" /></a>
              <a href=""><img src="instagram.png" alt="" /></a>
            </div>
        </div>
        <div className="explore">
          <div className="expl">
            <h2>Explore</h2>
          </div>
          <div className="yfs">
            <img src="ped ka pata.png" alt="" />
            <p>About</p>
          </div>
          <div className="yfs">
          <img src="ped ka pata.png" alt="" />
          <p>Service</p>
          </div>
          <div className="yfs">
          <img src="ped ka pata.png" alt="" />
          <p>Our project</p>
          </div>
          <div className="yfs">
          <img src="ped ka pata.png" alt="" />
          <p>Meet the Farmers</p>
          </div>
          <div className="yfs">
          <img src="ped ka pata.png" alt="" />
          <p>Letest News</p>
          </div>
          <div className="yfs">
          <img src="ped ka pata.png" alt="" />
          <p>Contact</p>
          </div>
        </div>
        <div className="news">
        <div className="expl">
            <h2>News</h2>
          </div>
          <p>Bringing Food Production <br/>
          Back To Cities <br/>
          <b>July 5, 2022</b>
          </p>

          <p>The Future of Farming, <br/>
          Smart Irrigation Solutions <br />
          <b>July 5, 2022</b>
          </p>
        </div>
        <div className="contact">
        <div className="expl">
            <h2>Contact</h2>
          </div>
          <p><img src="telephone.png" style={{height:'21px'}}/>666 888 0000</p>
          <p><img src="massage.png" style={{height:'17px'}}/>needhelp@company.com</p>
          <p className='ppoo'><img src="location.png" style={{height:'20px'}}/>80 broklyn golden street line <br />
          New York, USA</p>
          <form class="email-container">
    <input type="email" class="email-input" placeholder="Your Email Address" required/>
    <button type="submit" class="email-button">
      <img src="share.png" alt="" />
    </button>
  </form>
        </div>
      </div>

      <div className="lastfooter">
        <p>© All Copyright 2024 by shawonetc Themes</p>
        <div className="policy">
        <p>Terms of Use</p>
        <p>|</p>
        <p>Privacy Policy</p>
        </div>
      </div>
    </>
  )
}

export default Footer
