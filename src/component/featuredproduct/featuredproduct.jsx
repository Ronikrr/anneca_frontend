import React, { useRef } from 'react';
import '../header/change.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useGetFeaturedProductQuery } from '../../redux/apiSlice';
import ProductCard from '../product-card';


const FeaturedProduct = () => {
  const sliderRef = useRef(null);

  const { data } = useGetFeaturedProductQuery();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className=' position-relative overflow-x-hidden'>
      <div className='container'>
        <button onClick={previous} className="carousel-control-prev fs-2 ms-4 ms-lg-5   text-dark position-absolute justify-content-start">
          <IoIosArrowDropleftCircle className='w-100 h-100 ' aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <div className="feature_product mx-5">
        <div className="row">
            <div className=" title ">
              <h4 className='text-center mb-4'>Featured Product</h4>
            </div>
        </div>
        <ProductCard products={data?.products} sliderRef={sliderRef} />
      </div>
        <button onClick={next} className="carousel-control-next  fs-2 me-4 me-lg-5 text-dark position-absolute justify-content-end">
          <IoIosArrowDroprightCircle className='w-100 h-100 ' aria-hidden="true" />

        <span className="visually-hidden">Next</span>
      </button>
      </div>
      
    </div>
  );
};

export default FeaturedProduct;
