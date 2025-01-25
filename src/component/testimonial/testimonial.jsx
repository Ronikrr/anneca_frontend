import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import review1 from '../../assets/review/review1.png'
import review2 from '../../assets/review/review2.png'
import review3 from '../../assets/review/review3.png'
import review4 from '../../assets/review/review4.png'
import review5 from '../../assets/review/review5.png'
import review6 from '../../assets/review/review6.png'
import review7 from '../../assets/review/review7.png'
import review8 from '../../assets/review/review8.png'
import review9 from '../../assets/review/review9.png'
import review10 from '../../assets/review/review10.png'
import review11 from '../../assets/review/review11.png'
import review12 from '../../assets/review/review12.png'
import review13 from '../../assets/review/review13.png'
import review14 from '../../assets/review/review14.png'
import review15 from '../../assets/review/review15.png'
import review16 from '../../assets/review/review16.png'
import review17 from '../../assets/review/review17.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: 'Bhavesh Balar',
    text: 'The top qualtity could have been good but the skirt is very good and soft for longer duration my kid was happy wearing it, it was bit big for her age and size but we adjusted it.',
    rating: 5,
    img: review1
  },
  // Additional reviews
  {
    name: 'Harsh Chevli',
    text: 'Anneca Fashion Owners Have A Great Experience In Kids Garments Stitching. The Garments Stitching was very satisfactory And Up To The Mark.',
    rating: 5,
    img: review2
  },
  {
    name: 'Dr Rahul Gelani',
    text: 'Wonderful collection with different colour variations & owner of firm will connect you directly while delivering product! More power to this firm !',
    rating: 5,
    img: review3
  },
  {
    name: 'Om Dobriya',
    text: 'It is just best  & supar  experience....🙂 I can nott believe ki is price mai itna best quality kahi se bhi mil skata hai...🙂! Such awesome...🙂🙂🙂🙂 ………',
    rating: 5,
    img: review4
  },
  {
    name: 'keval soni',
    text: 'All the clothes we received are very well made and with good quality fabric, which is always a plus for this textile-lover.',
    rating: 5,
    img: review5
  },
  {
    name: 'Om Davra',
    text: 'Anneca FASHION is extremely good. I highly recommend Anneca for the great shopping experience.',
    rating: 5,
    img: review6
  },
  {
    name: 'Gaurang dobariya',
    text: 'The quality is amazing, and the service was super fast. I will be a return customer for sure.',
    rating: 5,
    img: review7
  },
  {
    name: 'Milan Mandani',
    text: 'Good Company And Genuine Product Good Experience Make its so happy with purchase',
    rating: 5,
    img: review8
  },
  {
    name: 'Kunal Raval',
    text: 'I love Anneca for my daughter. Highly recommended',
    rating: 5,
    img: review9
  },
  {
    name: 'Vaghani Parth',
    text: 'Good Products Best Quality Work',
    rating: 5,
    img: review10
  },
  {
    name: 'Rakesh Dobariya',
    text: 'Good manufacturing all types cloths.',
    rating: 5,
    img: review11
  },

  {
    name: 'Jodhani Riddhi',
    text: 'Beutiful drees, I loved it 😍 …',
    rating: 5,
    img: review12
  },
  {
    name: 'Chirag Patel',
    text: 'Great quality child wears.',
    rating: 5,
    img: review13
  },
  {
    name: 'hiren kanani',
    text: 'Good and genuine Product',
    rating: 5,
    img: review14
  },
  {
    name: 'Radhe Mobile',
    text: 'Good fabric and design...',
    rating: 5,
    img: review15
  },
  {
    name: 'komal patel Patel',
    text: 'It is really nice .',
    rating: 5,
    img: review16
  },
  {
    name: ' DARSHAK VAGHEDIYA',
    text: 'Super cute 🥰🥰🥰🥰🥰 product …',
    rating: 5,
    img: review17
  },
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-30px', cursor: 'pointer' }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle style={{ color: 'black', fontSize: '30px' }} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-30px', cursor: 'pointer' }}
      onClick={onClick}
    >

      <IoIosArrowDropleftCircle style={{ color: 'black', fontSize: '30px' }} />
    </div>
  );
};

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 0L12.8331 6.10054L19.5106 6.90983L14.5841 11.4895L15.8779 18.0902L10 14.82L4.12215 18.0902L5.41591 11.4895L0.489435 6.90983L7.16687 6.10054L10 0Z"
      fill="#FFC633"
    />
  </svg>
);

const ReviewSlider = () => {
  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="text-dark" />,
    prevArrow: <SamplePrevArrow className="text-dark" />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]

  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <StarIcon key={index} />
    ));
  };

  return (
    <div className="review-section container mx-auto overflow-visible  ">
      <div className="title mb-4 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
        <h4 className="text-center text-lg-start mb-0">Our Happy Client</h4>
        <Link target='_blank' className='text-white text-decoration-none' to="https://www.google.com/maps/place/Anneca+FASHION/@21.1654483,72.8441641,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04f4767438ab7:0x4f3f159917350d6!8m2!3d21.1654433!4d72.846739!16s%2Fg%2F11y1ygp9_w?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
          <button className="buttons_alldata d-none d-md-flex align-items-center">
            Add Review
            <MdOutlineKeyboardArrowRight className="icons" />
          </button>
        </Link>
      </div>
      <div className="title">

        <Link className='text-white text-decoration-none' target='_blank' to="https://www.google.com/maps/place/Anneca+FASHION/@21.1654483,72.8441641,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04f4767438ab7:0x4f3f159917350d6!8m2!3d21.1654433!4d72.846739!16s%2Fg%2F11y1ygp9_w?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
          <button className="buttons_alldata d-flex d-md-none align-items-center mx-auto mb-4">
            Add Review
            <MdOutlineKeyboardArrowRight className="icons" />
          </button>
        </Link>
      </div>
      <div className="">
        <Slider {...desktopSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card p-3 mb-2" style={{ background: '#F5F5F5' }}>
              <div className="review-rating d-flex">
                {renderStars(review.rating)}
              </div>
              <p className="review-text my-4">{review.text}</p>
              <div className="review-author d-flex align-items-center">
                <div
                  className="author-img bg-light rounded-circle"
                  style={{ width: '50px', height: '50px' }}>
                  <img src={review.img} alt="product" className="img-fluid" />
                </div>
                <p className="ms-3 mb-0">
                  {review.name}
                  {/* <span style={{ color: 'green' }}>✔️</span> */}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="d-block d-md-none">
        <Slider {...mobileSettings}
        autoplay={true}
        autoplaySpeed={3000}
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-card p-3 mb-2" style={{ background: '#F5F5F5' }}>
              <div className="review-rating d-flex">
                {renderStars(review.rating)}
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-author d-flex align-items-center">
                <div
                  className="author-img bg-light rounded-circle"
                  style={{ width: '50px', height: '50px' }}>
                  <img src={review.img} alt="product" className="img-fluid" />
                </div>
                <p className="ms-3 mb-0">
                  {review.name}
                  {/* <span style={{ color: 'green' }}>✔️</span> 
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </div >
  );
};

export default ReviewSlider;
