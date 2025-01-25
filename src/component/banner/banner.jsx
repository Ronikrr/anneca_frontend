import React from 'react'
import Bannerimg from '../../assets/Banner1.jpg';
import Benner_2 from '../../assets/Banner2.jpg';
import Benner_3 from '../../assets/Banner3.jpg';
// import Benner_1 from '../../assets/banner-responsive.jpg';

const Banner = () => {
  return (
    <div className='banner'>
     
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        
        <div className="carousel-inner">
          <div className="carousel-item active"data-bs-interval="2500">
            <img src={Bannerimg} className="d-block w-100 bannerimg" alt="..." />
          </div>
          {/* <div className="carousel-item active d-block d-md-none"data-bs-interval="2500">
            <img src={Benner_1} className="d-block w-100 bannerimg" alt="..." />
          </div> */}
          <div className="carousel-item"data-bs-interval="2500">
            <img src={Benner_2} className="d-block w-100 bannerimg" alt="..." />
          </div>
          <div className="carousel-item"data-bs-interval="2500">
            <img src={Benner_3} className="d-block w-100 bannerimg" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Banner;
