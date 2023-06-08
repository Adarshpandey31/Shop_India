import React from 'react';
import { Link } from 'react-router-dom';
import mens_tshirts from '../assets/mens_tshirts.jpg';
import img3_1 from '../assets/mens_tshirts/101-1B.jpg';
import img3_2 from '../assets/mens_tshirts/101-2B.jpg';
import img3_3 from '../assets/mens_tshirts/101-3B.jpg';
import img3_4 from '../assets/mens_tshirts/101-4B.jpg';
import img3_5 from '../assets/mens_tshirts/101-5B.jpg';
import img3_6 from '../assets/mens_tshirts/101-6B.jpg';
import img3_7 from '../assets/mens_tshirts/101-7B.jpg';
import img3_8 from '../assets/mens_tshirts/101-8B.jpg';
import img3_9 from '../assets/mens_tshirts/101-9B.jpg';
import img3_0 from '../assets/mens_tshirts/101-0B.jpg';


function MensOuterwearBody() {
  return (
    <div className="main-body">

      <div className="top-box">
        <img src={mens_tshirts} className="imgg-head-pages" ></img>
        <header >
          <h2 className="img-title-page">Men&apos;s T-Shirts</h2>
          <span>(10 items)</span>
        </header>
      </div>

      <div className="grid">
        <ul className="items">

          <li className="item item-1-1">
            <Link to="/" className='page1-item-img-link'>
              <img src={img3_1} alt="" className="page-1-items" />
              <div className="img-detail">Youtube Organic Cotton T-Shirts - Grey</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-2">
            <Link to="/" className='page1-item-img-link'>
              <img src={img3_2} alt="" className="page-1-items" />
              <div className="img-detail">Inbox - Subtle Actions T- Shirt</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-3">
            <Link to="/" className='page1-item-img-link'>
              <img src={img3_3} alt="" className="page-1-items" />
              <div className="img-detail">Adult Android Superhero T - Shirt</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-4">
            <Link to="/" className='page1-item-img-link'>
              <img src={img3_4} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-5">
          <Link to="/" className='page1-item-img-link' >
              <img src={img3_5} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-6">
          <Link to="/" className='page1-item-img-link'>
              <img src={img3_6} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-7">
             <Link to="/" className='page1-item-img-link'>
              <img src={img3_7} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-8">
             <Link to="/" className='page1-item-img-link' >
              <img src={img3_8} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>

          <li className="item item-1-9">
             <Link to="/" className='page1-item-img-link' >
              <img src={img3_9} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>
          <li className="item item-1-10">
          <Link to="/" className='page1-item-img-link' >
              <img src={img3_0} alt="" className="page-1-items" />
              <div className="img-detail">Men&apos;s Tech Shell Full-zip</div>
              <span className="price">$50.20</span>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default MensOuterwearBody;