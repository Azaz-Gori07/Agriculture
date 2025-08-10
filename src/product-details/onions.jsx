import './onions.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
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
import marthin from '../../public/avatar-02.webp.png';
import { CartContext } from '../hook/cartController.jsx';

export default function Onions() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const allProduct = [
      { id: '1', img: Onion, name: 'Onions', price: 20, rank: rated },
      { id: '2', img: carrot, name: 'Carrot', price: 50, rank: rated },
      { id: '3', img: tomato, name: 'Tomato', price: 50, rank: rated },
      { id: '4', img: graphs, name: 'Red Graphs', price: 100, rank: rated },
      { id: '5', img: garlic, name: 'Garlic', price: 20, rank: rated },
      { id: '6', img: lettuce, name: 'Lettuce', price: 30, rank: rated }
    ];
    const selectedProduct = allProduct.find((item) => item.id === id);
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p>Loading....</p>;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <>
      <div className="main-componend">
        <div className="quantity">
          <img src={product.img} alt="" className='Product-img' />
          <div className="qauntity2">
            <div className="qau1">
              <div className="mm">
                <h1>{product.name} <span>${product.price.toFixed(2)}</span></h1>
                <p>(1 Customer Review)</p>
              </div>
            </div>

            <p className='lorem'>
              Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris
              commodo venenatis ligula commodo leez sed blandit convallis dignissim
              onec vel pellentesque neque.
            </p>

            {/* Choose quantity */}
            <div className="choose-quantity">
              <div className="set-quantity">
                <h3>Choose Quantity</h3>
                <div className="count">
                  <button id="increase" onClick={increaseQty}>+</button>
                  <div id="show-count">{quantity}</div>
                  <button id="decrease" onClick={decreaseQty}>-</button>
                </div>
              </div>
            </div>

            {/* Add to cart buttons */}
            <div className="add-to-card">
              <button id='add-cart' onClick={handleAddToCart}>Add To Cart</button>
              <button id='add-whitelist'>Add To WhiteList</button>
            </div>

            {/* Share with friends */}
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

      {/* Optional details */}
      <div className="optional-detailes">
        <div className="details">
          <h1 style={{ fontFamily: "verdana" }}>Description</h1>
          <p>
            Lorem ipsum dolor sit amet sectetur adipiscin elit cras feuiat antesed ces condimentum viverra...
          </p>
          <p>
            Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor nunc quis auctor ligula posuere...
          </p>

          <h2 style={{ fontFamily: "verdana", fontSize: '22px' }}>1 review for {product.name}</h2>
          <div className="marthin-review">
            <img src={marthin} alt="" />
            <div className="review">
              <h4>Kevin Martin <br /><b>July 10, 2022</b></h4>
              <p>
                It has survived not only five centuries, but also the leap into electronic typesetting unchanged...
              </p>
            </div>
          </div>

          {/* Review form */}
          <div className="review-and-info">
            <h1 style={{ fontFamily: "verdana", fontSize: '22px', marginBottom: "18px" }}>Add a review</h1>
            <p>
              <input type="checkbox" />
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
  );
}
