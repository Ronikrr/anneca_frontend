import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ProductCard = ({ products, sliderRef}) => {

    const navigate = useNavigate();

    return (
        <div className="product-slider position-relative">
            <Slider ref={sliderRef} {...settings}>
                {products?.map((v, i) => (
                    <div key={i} onClick={() => {
                        navigate(`product/${v?.id}`)
                    }} className="similarproductimage position-relative mb-4 d-flex flex-wrap  ">
                        <div className="selling-img w-100">
                            <img src={v.image} alt="product" className='img-fluid w-100' />
                        </div>
                        <div className="discountnumber commonnumber">
                            <p className='text-center mb-0'>-10%</p>
                        </div>
                        <div className="selling-text mt-2">
                            <h5>{v.name}</h5>
                        </div>
                        <div className="selling-rating d-flex flex-wrap align-items-center w-100">
                            <div className="similar-price">
                                <span className="me-1 cancelprice"><del>₹{v.price}</del></span>
                                <span className="me-3 fixedprice">₹{v.weight}</span>
                            </div>
                            <div className="plusicon ms-auto">
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 24" fill="none">
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
    )
}

export default ProductCard
