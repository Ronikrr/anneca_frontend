import React from "react";
import Service from "../component/servicesection/service";
import Sellers from "../component/seller/sellers";
import Photosection from "../component/photosection/photosection";
import Frequentlyaskedquestions from "../component/frequentlyaskedquestions/frequentlyaskedquestions";
import Testimonial from "../component/testimonial/testimonial";
import Banner from "../component/banner/banner";
import Mostpopular from "../component/featuredproduct/mostpopular";
import FeaturedProduct from "../component/featuredproduct/featuredproduct";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Sellers />
      <FeaturedProduct />
      <Photosection />
      {/* <Topselling /> */}
      <Mostpopular />
      <Frequentlyaskedquestions />
      <Testimonial />
    </>
  );
};

export default Home;
