import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css/animate.min.css';
import { useGetSimilarProductQuery } from '../../redux/apiSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Productsimilar = ({ categoryId }) => {

  const navigate = useNavigate();

  const { productId } = useParams();
  const { data } = useGetSimilarProductQuery({categoryId, productId});
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15px'
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div className='pb-5 mb-0 mb-md-5 pt-0 pt-lg-3'>
      <div className="container">
        <div className="row">
          <div className="title ">
            <h4 className='text-center mb-4'>Similar Product</h4>
          </div>
        </div>
        <div className="row desktop-view d-none d-md-flex">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            {data?.products?.map((v, i) => (
              <div key={i} onClick={() => navigate(`/product/${v?.id}`)} className="similarproductimage position-relative col-12 col-sm-6 col-lg-2 mb-4 mb-lg-0 px-0 px-sm-2 px-lg-0">
                <div className="selling-img me-0 me-lg-2">
                  <img src={v.image} alt="product" className='img-fluid position-relative' />
                </div>
                <div className="discountnumber commonnumber">
                  <p className='text-center mb-0'>-10%</p>
                </div>
                <div className="selling-text mt-2">
                  <h5>{v.name}</h5>
                </div>
                <div className="selling-rating d-flex flex-wrap align-items-center">
                  <div className="similar-price">
                    <span className="me-1 cancelprice"><del>₹{v.price}</del></span>
                    <span className="me-3 fixedprice">₹{v.weight}</span>
                  </div>
                  <div className="plusicon ms-auto me-2">
                    <Link>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M12.5 1.5C6.725 1.5 2 6.225 2 12C2 17.775 6.725 22.5 12.5 22.5C18.275 22.5 23 17.775 23 12C23 6.225 18.275 1.5 12.5 1.5ZM12.5 21.225C7.4 21.225 3.275 17.1 3.275 12C3.275 6.9 7.4 2.775 12.5 2.775C17.6 2.775 21.725 6.9 21.725 12C21.725 17.1 17.6 21.225 12.5 21.225Z" fill="black" />
                        <path d="M13.1 8.32495H11.9V11.4H9.125V12.6H11.9V15.825H13.1V12.6H15.95V11.4H13.1V8.32495Z" fill="black" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="customslidemain row mobile-view d-block d-md-none">
          <Slider {...settings}>
            {data?.products?.map((v, i) => (
              <div key={i} onClick={() => navigate(`/product/${v?.id}`)}  className="similarproductimage position-relative p-0">
                <div className="selling-img me-0 me-lg-2">
                  <img src={v.image} alt="product" className='img-fluid position-relative' />
                </div>
                <div className="discountnumber">
                  <p className='text-center mb-0'>-10%</p>
                </div>
                <div className="selling-text mt-2">
                  <h5>{v.name}</h5>
                </div>
                <div className="selling-rating d-flex align-items-center">
                  <div className="similar-price">
                    <span className="me-1 cancelprice"><del>₹{v.price}</del></span>
                    <span className="me-3 fixedprice">₹{v.weight}</span>
                  </div>
                  <div className="plusicon ms-auto me-2">
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M12.5 1.5C6.725 1.5 2 6.225 2 12C2 17.775 6.725 22.5 12.5 22.5C18.275 22.5 23 17.775 23 12C23 6.225 18.275 1.5 12.5 1.5ZM12.5 21.225C7.4 21.225 3.275 17.1 3.275 12C3.275 6.9 7.4 2.775 12.5 2.775C17.6 2.775 21.725 6.9 21.725 12C21.725 17.1 17.6 21.225 12.5 21.225Z" fill="black" />
                        <path d="M13.1 8.32495H11.9V11.4H9.125V12.6H11.9V15.825H13.1V12.6H15.95V11.4H13.1V8.32495Z" fill="black" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Productsimilar;
