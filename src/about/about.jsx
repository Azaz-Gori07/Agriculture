import React from 'react'
import './about.css'

function about() {
  return (
    <>
      <div className="firstSec">
        <p>Home /  About</p>
        <h1>About</h1>
      </div>

      <div className="biggerSec">
        <div className="big1">
          <img src="black wanda.png" alt="" />
        </div>
        <div className="big2">
          <p className='p1'>Get to Know Us</p>
          <h1>The Best Agriculture <br />
            Market</h1>
          <p className='p2'>There are many variations of passa of lorem available, but <br />
            the majority have suffered alteration.</p>
          <p className='p3'>There are many variations of passages of lorem ipsum available but the <br />
            majority have suffered alteration in some form by injected humor or <br />
            random word which don’t look even.</p>

          <p className='p4'><img src="yellow right.png" alt="" />Suspe ndisse suscipit sagittis leo</p>
          <p className="p4"><img src="yellow right.png" alt="" />Entum estibulum disgnissim posuere</p>
          <p className="p4"><img src="yellow right.png" alt="" />Lorem Ipsum on the tend to repeat</p>

          <button>Discover More</button>
        </div>
      </div>

      <div className="vedioContainer" >
      </div>

      <div className="proDetail">
        <p>Agriculture Products</p>
        <p>Projects Completed</p>
        <p>Satisfied Clients</p>
        <p>Experts Farmers</p>
      </div>


      {/* bsjfbjashj */}


      <div className="OurTestimonials">
        <p className='testp'>Our Testimonials</p>
        <h1>What They Say</h1>
        <div className="ourtesti">
          <div className="testi1">
            <img src="obama.png" alt="" className='avatar' style={{ borderRadius: 10 }} />
            <div className="review">
              <p>Mr. Arthur</p>
              <img src="Review_Star-removebg-preview.png" alt="" />
              <div className="reviewLines">
                <p>The product quality is consistently
                  outstanding, exceeding my expectations every time. <br />
                  The customer service was fantastic! They quickly
                  resolved my issue and were very friendly.
                </p>
              </div>
            </div>
          </div>
          <div className="testi2">
            <img src="dhara420.png" alt="" className='avatar' />
            <div className="review">
              <p>Mr. Norman</p>
              <img src="Review_Star-removebg-preview.png" alt="" />
              <div className="reviewLines">
                <p>The product quality is consistently
                  outstanding, exceeding my expectations every time. <br />
                  The customer service was fantastic! They quickly
                  resolved my issue and were very friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* jhadjahdjkah */}

      <div className="articals">
        <p>Team Members</p>
        <h1>Meet Our Farmers</h1>
      </div>


      {/* afsaffsfsfsg */}



      <div className="branding">
        <div className="brand">
          <div className="bra">
            <img src="span.btn.png" className='spanbtn' />
            <div className="brainfo">
              <h4>Kevin Smith</h4>
              <p>Farmer</p>
            </div>
          </div>
        </div>
        <div className="brand1">
          <div className="bra">
            <img src="span.btn.png" className='spanbtn' />
            <div className="brainfo">
              <h4>Jessica Brown</h4>
              <p>Farmer</p>
            </div>
          </div>
        </div>
        <div className="brand2">
          <div className="bra">
            <img src="span.btn.png" className='spanbtn' />
            <div className="brainfo">
              <h4>Devid Martin</h4>
              <p>Farmer</p>
            </div>
          </div>
        </div>
      </div>


      <div className="offwhite"></div>


    </>
  )
}

export default about
