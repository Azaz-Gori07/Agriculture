import React, { useEffect, useRef } from 'react';
import './home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Onion from '../../public/Onion.png';
import carrot from '../../public/carrot.png';
import tomato from '../../public/tomato.png';
import graphs from '../../public/graphs.png';
import garlic from '../../public/garlic.png';
import lettuce from '../../public/lettuce.png';
import rated from '../../public/5rating.png';
import patagobi from '../../public/Patagobi.png';
import bananas from '../../public/bananas.png';
import apples from '../../public/Appels.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home({ name1 }) {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((sec, i) => {
      if (sec) {
        gsap.fromTo(sec,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.02,
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



  const vegetables = [
    { id: '1', img: Onion, name: 'Onions', price: "$20.00", rank: rated },
    { id: '2', img: carrot, name: 'Carrot', price: "$50.00", rank: rated },
    { id: '3', img: tomato, name: 'Tomato', price: "$50.00", rank: rated },
    { id: '4', img: graphs, name: 'Red Graphs', price: "$100.00", rank: rated },
    { id: '5', img: garlic, name: 'Garlic', price: "$20.00", rank: rated },
    { id: '6', img: lettuce, name: 'Lettuce', price: "$30.00", rank: rated }
  ];

  const vegetables2 = [
    { id: '1', img: patagobi, name: 'Patagobi', price: "$100.00", rank: rated },
    { id: '2', img: Onion, name: 'Onions', price: "$20.00", rank: rated },
    { id: '3', img: apples, name: 'Apples', price: "$50.00", rank: rated },
    { id: '4', img: bananas, name: 'Bananas', price: "$20.00", rank: rated }
  ];

  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      <div className="Header" ref={addSectionRef}>
        <div className='MiniHeader'>
          <h1><b>Agriculture {name1}</b> <br /> & Organic <br /> Market</h1>
          <div className='ShowBtn'><button>Shop now</button></div>
        </div>
      </div>

      <div className="DownHeader" ref={addSectionRef}>
        <div className='ReturnPolicy'>
          <img src="__before.png" alt="" />
          <p><b>Return Policy</b><br />Money Back Guarantee</p>
        </div>
        <div className='ReturnPolicy'>
          <img src="__before (1).png" alt="" />
          <p><b>Free Shipping</b><br />On All Orders Over $45.00</p>
        </div>
        <div className='ReturnPolicy2'>
          <img src="__before (2).png" alt="" />
          <p><b>Store Locator</b><br />Find Your Nearest Store</p>
        </div>
      </div>

      <div className="latestproduct" ref={addSectionRef}>
        <p>Recently Added</p>
        <h1>Latest Products</h1>
      </div>

      <div className="mainCards" ref={addSectionRef}>
        {vegetables.map((card) => (
          <Link to={`/product/${card.id}`} key={card.id}>
            <div className="cards">
              <img src={card.img} alt="" />
              <h3>{card.name}</h3>
              <p>{card.price}</p>
              <img src={card.rank} alt="" className='rankimg' />
            </div>
          </Link>
        ))}
      </div>

      <div className="yellowGreenContanair" ref={addSectionRef}>
        <div className="yellow">
          <div className="y1">
            <p>100% ORGANIC</p>
            <h2>Quality Organic <br /> Food Store</h2>
            <button>Order Now</button>
          </div>
        </div>
        <div className="green">
          <div className="g1">
            <p>100% ORGANIC</p>
            <h2>Healthy Products <br /> Everyday</h2>
            <button>Order Now</button>
          </div>
        </div>
      </div>

      <div className="healthyFood" ref={addSectionRef}>
        <h1>Be Healthy & Eat Only Fresh <br /> Organic Vegetables</h1>
        <button>Shop Now</button>
      </div>

      <div className="hotDeal" ref={addSectionRef}>
        <p>Special Offers</p>
        <h1>Today's Hot Deal</h1>
      </div>

      <div className="vegContanair2" ref={addSectionRef}>
        {vegetables2.map((veg2) => (
          <div className="cards2" key={veg2.id}>
            <img src={veg2.img} alt="" />
            <div className="mt">
              <h3>{veg2.name}</h3>
              <img src={veg2.rank} alt="" />
            </div>
            <p>{veg2.price}</p>
          </div>
        ))}
      </div>

      <div className="qualityProducts" ref={addSectionRef}>
        <div className="imgsec">
          <img src="div.elementor-column.png" alt="" />
        </div>
        <div className="section2">
          <div className="textsec">
            <p>Quality Products</p>
            <h1>Only Organic Food</h1>
          </div>
          <p className='peregraph'>There are many variations of passages of lorem ipsum available...</p>
          <div className="miniSec">
            <img src="ninjahathodi.png" alt="" />
            <h1>Professional Farmers <br /><b>There are many variation...</b></h1>
          </div>
          <div className="miniSec2">
            <img src="bahenkilodi.png" alt="" />
            <h1>Solution for Farming<br /><b>There are many variation...</b></h1>
          </div>
          <button>Start Shopping Now</button>
        </div>
      </div>

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
            <img src="div.avatar.png" alt="" className='avatar' />
            <div className="review">
              <p>Mr. Arthur</p>
              <img src="Review_Star-removebg-preview.png" alt="" />
              <div className="reviewLines">
                <p>The product quality is consistently outstanding...</p>
              </div>
            </div>
          </div>
          <div className="testi2">
            <img src="div.avatar (1).png" alt="" className='avatar' />
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
        <p>From the Blog</p>
        <h1>News & Articles</h1>
      </div>

      <div className="branding" ref={addSectionRef}>
        <div className="brand"></div>
        <div className="brand1"></div>
        <div className="brand2"></div>
      </div>

      <div className="greenNAture" ref={addSectionRef}>
        <div className="greenPro"></div>
        <div className="greenPro2"></div>
        <div className="greenPro3"></div>
        <div className="greenPro4"></div>
        <div className="greenPro5"></div>
      </div>
    </>
  );
}

export default Home;
