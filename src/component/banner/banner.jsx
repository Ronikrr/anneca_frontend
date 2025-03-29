import React from 'react'
import Bannerimg from '../../assets/new_images/Banner1.avif';
import Benner_2 from '../../assets/new_images/Banner2.avif';
import Benner_3 from '../../assets/new_images/Banner3.avif';
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
            <img src={Bannerimg} className="d-block w-100 bannerimg" loading='lazy' alt="..." />
          </div>
          <div className="carousel-item"data-bs-interval="2500">
            <img src={Benner_2} className="d-block w-100 bannerimg" loading='lazy' alt="..." />
          </div>
          <div className="carousel-item"data-bs-interval="2500">
            <img src={Benner_3} className="d-block w-100 bannerimg" loading='lazy' alt="..." />
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
