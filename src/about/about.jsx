import React, { useEffect, useRef } from 'react';
import './about.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionsRef = useRef([]);

  // Helper function to add refs
  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      if (sec) {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div className="firstSec" ref={addSectionRef}>
        <p>Home / About</p>
        <h1>About</h1>
      </div>

      <div className="biggerSec" ref={addSectionRef}>
        <div className="big1">
          <img src="black wanda.png" alt="" />
        </div>
        <div className="big2">
          <p className='p1'>Get to Know Us</p>
          <h1>The Best Agriculture <br /> Market</h1>
          <p className='p2'>There are many variations of passa of lorem available...</p>
          <p className='p3'>There are many variations of passages of lorem ipsum available...</p>

          <p className='p4'><img src="yellow right.png" alt="" /> Suspe ndisse suscipit sagittis leo</p>
          <p className="p4"><img src="yellow right.png" alt="" /> Entum estibulum disgnissim posuere</p>
          <p className="p4"><img src="yellow right.png" alt="" /> Lorem Ipsum on the tend to repeat</p>

          <button>Discover More</button>
        </div>
      </div>

      <div className="vedioContainer" ref={addSectionRef}></div>

      <div className="proDetail" ref={addSectionRef}>
        <p>Agriculture Products</p>
        <p>Projects Completed</p>
        <p>Satisfied Clients</p>
        <p>Experts Farmers</p>
      </div>

      <div className="OurTestimonials" ref={addSectionRef}>
        <p className='testp'>Our Testimonials</p>
        <h1>What They Say</h1>
        <div className="ourtesti">
          <div className="testi1">
            <img src="obama.png" alt="" className='avatar' style={{ borderRadius: 10 }} />
            <div className="review">
              <p>Mr. Arthur</p>
              <img src="Review_Star-removebg-preview.png" alt="" />
              <div className="reviewLines">
                <p>The product quality is consistently outstanding...</p>
              </div>
            </div>
          </div>
          <div className="testi2">
            <img src="dhara420.png" alt="" className='avatar' />
            <div className="review">
              <p>Mr. Norman</p>
              <img src="Review_Star-removebg-preview.png" alt="" />
              <div className="reviewLines">
                <p>The product quality is consistently outstanding...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="articals" ref={addSectionRef}>
        <p>Team Members</p>
        <h1>Meet Our Farmers</h1>
      </div>

      <div className="branding" ref={addSectionRef}>
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

      <div className="offwhite" ref={addSectionRef}></div>
    </>
  );
}

export default About;
