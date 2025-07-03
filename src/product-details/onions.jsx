// import React, { useState } from 'react';
import './onions.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import marthin from '../../public/avatar-02.webp.png'


export default function onions() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const allProduct = [
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

    const selectedProduct = allProduct.find((item) => item.id === id);

    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p>Loading....</p>;




  // let [data, setData] = useState(1)

  // const Increase = (e) => (
  //   setData(e => e + 1)
  // )

  // const Decrease = (e) => (
  //   setData(e => e - 1)
  // )

  return (
    <>
      <div className="main-componend">

        {/* <<<<quantity>///////</quantity> */}
        <div className="quantity">
          <img src={product.img} alt="" className='Product-img' />
          <div className="qauntity2">

            <div className="qau1">
              <div className="mm">
                <h1>{product.name} <span>{product.price}</span> </h1>
                <p>(1 Customer Review)</p>
              </div>
            </div>

            <p className='lorem'>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris <br />
              commodo venenatis ligula commodo leez sed blandit convallis dignissim <br />
              onec vel pellentesque neque.</p>


            {/* choose quantity>>>>> */}

            <div className="choose-quantity">
              <div className="set-quantity">
                <h3>Choose Quantity</h3>
                <div className="count">
                  {/* <div className="show-count">{data}</div> */}
                  <div className="click">
                    {/* <div className="increase" onClick={Increase}>+</div>
                    <div className="decrease" onClick={Decrease}>-</div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <<<<<add to card buttons>>> */}

            <div className="add-to-card">
              <button className='add-cart'>Add To Cart</button>
              <button className='add-whitelist'>Add To WhiteList</button>
            </div>

            {/* <<<<<<share-with-friends>>>> */}

            <div className="share-With-Friends">
              <h2>Share with Friends</h2>

              <div className="social-media">
                <img src="FacebookWhite.png" alt="" />
                <img src="TwitterWhite.png" alt="" />
                <img src="InWhite.png" alt="" />
                <img src="PintrestWhite.png" alt="" />
              </div>
            </div>


          </div>

        </div>

      </div>


      {/* <<<<<<<optional detailes>>>>>>>. */}

      <div className="optional-detailes">
        <div className="details">
          <h1 style={{ fontFamily: "verdana", }}>Description</h1>

          <p>Lorem ipsum dolor sit amet sectetur adipiscin elit cras feuiat antesed ces condimentum viverra duis autue nim convallis id diam vitae duis  <br />
            erosin dictum sem. Vivamus sed molestie sapien aliquam et facilisis arcu dut molestie augue suspendisse sodales tortor nunced quis cto <br />
            cursus keuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecated cupidatat non <br />
            sunt in culpa qui officia deserunt mollit anim id est laborum ivamus sed molestie sapien.</p>

          <p>Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor nunc quis auctor ligula posuere cursus duis aute  in reprehenderit in <br />
            voluptate velit esse cill doloreeu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui  mollit anim id est <br />
            laborum. Vivaus sed delly molestie sapien. Aliquam et facilisis arcuut molestie augue.</p>

          <h2 style={{ fontFamily: "verdana", fontSize: '22px' }}>1 review for Tomato</h2>

          <div className="marthin-review">
            <img src={marthin} alt="" />
            <div className="review">
              <h4>Kevin Martin <br /><b>July 10, 2022</b></h4>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised <br />
                containing lorem ipsum is simply free text. sint occaecat cupidatat non proident sunt in culpa qui officia deserunt <br />
                est laborum. Vivaus sed delly molestie sapien  in the sheets mollit anim id .</p>
            </div>
          </div>

          <div className="review-and-info">
            <h1 style={{ fontFamily: "verdana", fontSize: '22px', marginBottom: "18px" }}>Add a review</h1>
            <p> <input type="checkbox" />
              Save my name, email, and website in this browser for the next time I comment.
            </p>
            <p>Your rating</p>

            <form className='form-page'>
              <input type="text" className='Your-Reviews' placeholder='Your Review...' />

              <div className="form2">
                <input type="text" className='Your-name' placeholder='Your Name' />
                <input type="email" className='your-email' placeholder='Email Address' />
              </div>

              <button>Submit Review</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}
