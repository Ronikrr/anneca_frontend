import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import selling1 from "../../assets/selling-1.png";
import selling2 from "../../assets/selling-2.png";
import selling3 from "../../assets/selling-3.png";
import selling4 from "../../assets/selling-4.png";

const PRODUCT = [
  {
    name: "Girls Light Yellow Georgette Fl",
    desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
    price: "₹299.00",
    rating: 4,
    img: selling1
  },
  {
    name: "Girls Light Yellow Georgette Fl",
    desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
    price: "₹299.00",
    rating: 5,
    img: selling2
  },
  {
    name: "Girls Light Yellow Georgette Fl",
    desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
    price: "₹299.00",
    rating: 4,
    img: selling3
  },
  {
    name: "Girls Light Yellow Georgette Fl",
    desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
    price: "₹299.00",
    rating: 3,
    img: selling4
  }
];

const Topselling = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className="container topselling">
        <div className="row">
          <div className="title">
            <h4 className="text-center mb-4">Top Selling</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-none d-md-flex flex-wrap">
            {PRODUCT.map((v, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0">
                <div className="selling-img me-2">
                  <img src={v.img} alt="product" className="img-fluid" />
                </div>
                <div className="selling-text mt-2">
                  <h5>{v.name}</h5>
                  <p className="mb-0">{v.desc}</p>
                </div>
                <div className="selling-rating d-flex flex-wrap">
                  <div className="s-rating">
                    {[0, 1, 2, 3, 4].map((r, j) => (
                      r < v.rating ? <i key={j} className="bi bi-star-fill text-warning me-1"></i> : <i key={j} className="bi bi-star text-warning me-1"></i>
                    ))}
                  </div>
                  <div className="s-price ms-auto">
                    <span className="me-3">{v.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 d-block d-md-none">
            <Slider {...settings}>
              {PRODUCT.map((v, i) => (
                <div key={i} className="col-12">
                  <div className="selling-img me-0 me-lg-2">
                    <img src={v.img} alt="product" className="img-fluid" />
                  </div>
                  <div className="selling-text mt-2">
                    <h5>{v.name}</h5>
                    <p className="mb-0">{v.desc}</p>
                  </div>
                  <div className="selling-rating d-flex flex-wrap">
                    <div className="s-rating">
                      {[0, 1, 2, 3, 4].map((r, j) => (
                        r < v.rating ? <i key={j} className="bi bi-star-fill text-warning me-1"></i> : <i key={j} className="bi bi-star text-warning me-1"></i>
                      ))}
                    </div>
                    <div className="s-price ms-auto">
                      <span className="me-3">{v.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="topsellingbtn d-flex justify-content-center mt-5">
            <button className="viewall">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topselling;
