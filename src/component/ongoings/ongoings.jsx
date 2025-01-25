import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import Ellipse from "../../assets/Ellipse1139.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ONGOINGS = [
  {
    name: "James L.",
    desc: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    date: "18 Jan 2022",
    img: person1,
    pimg: Ellipse,
  },
  {
    name: "James L.",
    desc: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    date: "18 Jan 2022",
    img: person2,
    pimg: Ellipse,
  },
  {
    name: "James L.",
    desc: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    date: "18 Jan 2022",
    img: person3,
    pimg: Ellipse,
  },
  {
    name: "James L.",
    desc: "Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog",
    date: "18 Jan 2022",
    img: person4,
    pimg: Ellipse,
  },
];

const Ongoings = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <div className="Ongoings">
      <div className="container">
        <div className="row">
          <div className="title mb-4 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
            <h4 className="text-center text-lg-start mb-0">Latest Ongoings</h4>
            <button className="buttons_alldata d-none d-md-flex align-items-center">
              Read All Blogs
              <MdOutlineKeyboardArrowRight className="icons" />
            </button>
          </div>
          <div className="col-12 d-none d-md-flex flex-wrap justify-content-center">
            {ONGOINGS.map((v, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 px-0 px-sm-1 px-lg-0">
                <div className="ongoings-img me-0 me-lg-2">
                  <img src={v.img} alt="product" className="img-fluid" />
                </div>
                <div className="ongoing-detail d-flex align-items-center mt-4">
                  <img src={v.pimg} alt="product" className="img-fluid" />
                  <h5 className="mb-0 ms-2">{v.name}</h5>
                  <ul className="p-0 m-0 ps-4">
                    <li>{v.date}</li>
                  </ul>
                </div>
                <div className="testimonial-text mt-2">
                  <p className="mb-0 me-2">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 d-block d-md-none">
            <Slider {...settings}>
              {ONGOINGS.map((v, i) => (
                <div key={i} className="col-12">
                  <div className="ongoings-img me-0 me-lg-2">
                    <img src={v.img} alt="product" className="img-fluid" />
                  </div>
                  <div className="ongoing-detail d-flex align-items-center mt-4">
                    <img src={v.pimg} alt="product" className="img-fluid" />
                    <h5 className="mb-0 ms-2">{v.name}</h5>
                    <ul className="p-0 m-0 ps-4">
                      <li>{v.date}</li>
                    </ul>
                  </div>
                  <div className="testimonial-text mt-2">
                    <p className="mb-0 me-2">{v.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="title mt-4 d-block d-lg-none ">
            <button className="ongoing-button d-block mx-auto mt-3">
              Read All Blogs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.72025 19.7374C7.28091 19.298 7.28091 18.5857 7.72025 18.1464L13.6748 12.1919L7.72025 6.23739C7.28091 5.79805 7.28091 5.08574 7.72025 4.6464C8.15959 4.20706 8.8719 4.20706 9.31124 4.6464L16.0612 11.3964C16.5006 11.8357 16.5006 12.548 16.0612 12.9874L9.31124 19.7374C8.8719 20.1767 8.15959 20.1767 7.72025 19.7374Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ongoings;
