import React from 'react'
import './home.css'
import Onion from '../../public/Onion.png'
import carrot from '../../public/carrot.png'
import tomato from '../../public/tomato.png'
import graphs from '../../public/graphs.png'
import garlic from '../../public/garlic.png'
import lettuce from '../../public/lettuce.png'
import rated from '../../public/5rating.png'
import patagobi from '../../public/Patagobi.png'
import bananas from '../../public/bananas.png'
import apples from '../../public/Appels.png'
import projects from '../projects/projects'
import { Link } from 'react-router-dom'


function home({ name1 }) {

  const vegetables = [
    {
      id: '1',
      img: Onion,
      name: 'Onions',
      price: "$20.00",
      rank: rated
    },
    {
      id: '2',
      img: carrot,
      name: 'Carrot',
      price: "$50.00",
      rank: rated
    },
    {
      id: '3',
      img: tomato,
      name: 'Tomato',
      price: "$50.00",
      rank: rated
    },
    {
      id: '4',
      img: graphs,
      name: 'Red Graphs',
      price: "$100.00",
      rank: rated
    },
    {
      id: '5',
      img: garlic,
      name: 'Garlic',
      price: "$20.00",
      rank: rated
    },
    {
      id: '6',
      img: lettuce,
      name: 'Lettuce',
      price: "$30.00",
      rank: rated
    }
  ];

  const vegetables2 = [
    {
      id: '1',
      img: patagobi,
      name: 'Patagobi',
      price: "$100.00",
      rank: rated
    },
    {
      id: '2',
      img: Onion,
      name: 'Onions',
      price: "$20.00",
      rank: rated
    },
    {
      id: '3',
      img: apples,
      name: 'Apples',
      price: "$50.00",
      rank: rated
    },
    {
      id: '4',
      img: bananas,
      name: 'Bananas',
      price: "$20.00",
      rank: rated
    }
  ];

  return (
    <>
      <div className='Header'>
        <div className='MiniHeader'>
          <h1><b>Agriculture {name1}</b> <br />
            & Organic <br />
            Market
          </h1>
          <div className='ShowBtn'>
            <button>Show now</button>
          </div>
        </div>
      </div>

      <div className="DownHeader">
        <div className='ReturnPolicy'>
          <img src="__before.png" alt="" />
          <p><b>Return Policy</b> <br />
            Money Back Guarantee
          </p>
        </div>
        <div className='ReturnPolicy'>
          <img src="__before (1).png" alt="" />
          <p><b>Free Shipping</b> <br />
            On All Orders Over $45.00
          </p>
        </div>
        <div className='ReturnPolicy2'>
          <img src="__before (2).png" alt="" />
          <p><b>Store Locator</b> <br />
            Find Your Nearest Store
          </p>
        </div>
      </div>

      <div className='latestproduct'>
        <p>Recently Added</p>
        <h1>Latest Products</h1>
      </div>

      <div className="mainCards">

        {vegetables.map((card) => (

          <>
          <Link to={`/product/${card.id}`} key={card.id}>
          <div className="cards" key={card.id}>
            <img src={card.img} alt="" />
            <h3>{card.name}</h3>
            <p>{card.price}</p>
            <img src={card.rank} alt="" className='rankimg' />

          </div>
          </Link>
          </>
        ))}
      </div>

      <div className="yellowGreenContanair">
        <div className="yellow">
          <div className="y1">
            <p>100% ORGANIC</p>
            <h2>Quality Organic <br />
              Food Store</h2>
            <button>Order Now</button>
          </div>
        </div>
        <div className="green">
          <div className="g1">
            <p>100% ORGANIC</p>
            <h2>Healthy Products <br />
              Everyday</h2>
            <button>Order Now</button>
          </div>
        </div>
      </div>

      <div className="healthyFood">
        <h1>Be Healthy & Eat Only Fresh <br />
          Organic Vagetables</h1>
        <button>Shop Now</button>
      </div>

      <div className="hotDeal">
        <p>Special Offers</p>
        <h1>Today's Hot Deal</h1>
      </div>

      <div className="vegContanair2">
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

      <div className="qualityProducts">
        <div className="imgsec">
          <img src="div.elementor-column.png" alt="" />
        </div>
        <div className="section2">
          <div className="textsec">
            <p>Quality Products</p>
            <h1>Only Organic Food</h1>
          </div>
          <p className='peregraph'>There are many variations of passages of lorem ipsum available but the <br />
            majority have suffered alteration in some form by injected humor or <br
            />
            random word.</p>
          <div className="miniSec">
            <img src="ninjahathodi.png" alt="" />
            <h1>Professional Farmers <br/>
            <b>There are many variation of passages of lorem ipsum.</b>
            </h1>
          </div>
          <div className="miniSec2">
          <img src="bahenkilodi.png" alt="" />
          <h1>Solution for Farming<br/>
            <b>There are many variation of passages of lorem ipsum.</b>
            </h1>
          </div>
          <button>Start Shopping Now</button>
        </div>
      </div>

      <div className="proDetail">
        <p>Agriculture Products</p>
        <p>Projects Completed</p>
        <p>Satisfied Clients</p>
        <p>Experts Farmers</p>
      </div>

      <div className="OurTestimonials">
        <p className='testp'>Our Testimonials</p>
        <h1>What They Say</h1>
        <div className="ourtesti">
          <div className="testi1">
            <img src="div.avatar.png" alt="" className='avatar'/>
            <div className="review">
              <p>Mr. Arthur</p>
              <img src="Review_Star-removebg-preview.png" alt="" />
              <div className="reviewLines">
                <p>The product quality is consistently
                outstanding, exceeding my expectations every time. <br/>
                The customer service was fantastic! They quickly
                resolved my issue and were very friendly.
                </p>
              </div>
            </div>
          </div>
          <div className="testi2">
          <img src="div.avatar (1).png" alt="" className='avatar'/>
          <div className="review">
              <p>Mr. Norman</p>
              <img src="Review_Star-removebg-preview.png" alt="" />
              <div className="reviewLines">
                <p>The product quality is consistently
                outstanding, exceeding my expectations every time. <br/>
                The customer service was fantastic! They quickly
                resolved my issue and were very friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="articals">
      <p>From the Blog</p>
      <h1>News & Articles</h1>
      </div>

      <div className="branding">
        <div className="brand">
          <div className="bra">
            <img src="span.btn.png" className='spanbtn'/>
            <div className="brainfo">
          <h4>Kevin Smith</h4>
          <p>Farmer</p>
        </div>
          </div>
        </div>
        <div className="brand1">
        <div className="bra">
        <img src="span.btn.png" className='spanbtn'/>
        <div className="brainfo">
          <h4>Jessica Brown</h4>
          <p>Farmer</p>
        </div>
        </div>
        </div>
        <div className="brand2">
        <div className="bra">
        <img src="span.btn.png" className='spanbtn'/>
        <div className="brainfo">
          <h4>Devid Martin</h4>
          <p>Farmer</p>
        </div>
        </div>
        </div>
      </div>

      <div className="greenNAture">
        <div className="greenPro"></div>
        <div className="greenPro2"></div>
        <div className="greenPro3"></div>
        <div className="greenPro4"></div>
        <div className="greenPro5"></div>
      </div>
    </>
  )
}

export default home
