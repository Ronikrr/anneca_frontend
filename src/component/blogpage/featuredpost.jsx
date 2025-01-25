import React from "react";
import productmain from "../../assets/product-main.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import Ellipse from "../../assets/Ellipse1139.png";

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

const Featuredpost = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className=" maintext col-12 text-center">
          <h4>Our Featured Posts</h4>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-4 col-sm-6">
              <div className="mainimage pe-md-5 mb-4 mb-md-0">
                <img src={productmain} alt="Product img" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-md-8 col-sm-6">
              <div className="product-data ps-md-4 mt-5">
                <h3>
                  Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
                </h3>
                <p className="col-12 col-lg-7 text-center text-lg-start">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam.
                </p>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                  >
                    <circle cx="14" cy="14.1919" r="14" fill="#A6A6A6" />
                  </svg>
                  <h4 className="mb-0 ms-2">Oliver Bennett</h4>
                  <ul className="mb-0 ms-3">
                    <li>18 Jan 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="title mb-4 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <h4 className="text-center text-lg-start mb-0">Latest Posts</h4>
        </div>
        <div className="col-12 d-flex flex-wrap justify-content-center">
          {ONGOINGS.map((v, i) => (
            <div
              key={i}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0"
            >
              <div className="ongoings-img me-2">
                <img src={v.img} alt="product" className="img-fluid" />
              </div>
              <div className="ongoing-detail d-flex align-items-center mt-4">
                <img src={v.pimg} alt="product" className="img-fluid" />
                <h5 className="mb-0 ms-2">{v.name}</h5>

                <ul className="p-0 m-0 ps-4">
                  <li>{v.date}</li>
                </ul>
              </div>
              <div className="testimonial-text mt-3">
                <p className="mb-0 me-2">{v.desc}</p>
              </div>
            </div>
          ))} 
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          {ONGOINGS.map((v, i) => (
            <div
              key={i}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0"
            >
              <div className="ongoings-img me-2">
                <img src={v.img} alt="product" className="img-fluid" />
              </div>
              <div className="ongoing-detail d-flex align-items-center mt-4">
                <img src={v.pimg} alt="product" className="img-fluid" />
                <h5 className="mb-0 ms-2">{v.name}</h5>

                <ul className="p-0 m-0 ps-4">
                  <li>{v.date}</li>
                </ul>
              </div>
              <div className="testimonial-text mt-3">
                <p className="mb-0 me-2">{v.desc}</p>
              </div>
            </div>
          ))} 
          <div className="title d-flex justify-content-center py-5">
            <button className="viewall d-flex align-items-center">
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.72013 19.5455C7.28079 19.1062 7.28079 18.3938 7.72013 17.9545L13.6746 12L7.72013 6.04549C7.28079 5.60616 7.28079 4.89384 7.72013 4.45451C8.15947 4.01517 8.87178 4.01517 9.31112 4.45451L16.0611 11.2045C16.5005 11.6438 16.5005 12.3562 16.0611 12.7955L9.31112 19.5455C8.87178 19.9848 8.15947 19.9848 7.72013 19.5455Z"
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

export default Featuredpost;
