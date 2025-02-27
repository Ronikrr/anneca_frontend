import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import girls1 from "../../assets/new_images/3.avif";
import girls2 from "../../assets/new_images/2.avif";
import girls3 from "../../assets/new_images/1.avif";
import { useNavigate } from 'react-router-dom';

const categories = [
    { id: 2, name: 'Girls' },
];



const girlsCategories = [
    { id: 1, url: 'lehenga choli', name: 'Lehenga choli', img: girls1 },
    { id: 2, url: 'palazzo set',name: 'Palazzo set', img: girls2 },
    { id: 3, url: 'clothing set',name: 'Clothing set', img: girls3 },
];

const Sellers = () => {
    const [activeTab, setActiveTab] = useState('Girls');

    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderCategories = (categories) => (
        <div className="row d-none d-md-flex flex-wrap justify-content-center">
            {categories.map((category) => (
                <div onClick={() => navigate(`ourcollection/${category?.url}`)} key={category.id} className="sellerdiv col-12 col-sm-6 col-md-4 mb-4 px-0 px-sm-1">
                    <div className="position-relative">
                        <img src={category.img} alt={category.name} className="img-fluid" />
                        <div
                            className="position-absolute text-center py-2 selerbtn"
                            onClick={() => navigate(`ourcollection/${category?.url}`)}
                            style={{ 
                                bottom: '15px', 
                                left: '10px', 
                                right: '10px',
                                width: 'calc(100% - 20px)',
                                fontWeight: '700',
                                height: '50px',
                                lineHeight:'30px'
                            }}
                        >
                            {category.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderSliderCategories = (categories) => (
        <Slider {...settings}
        autoplay={true}
          autoplaySpeed={3000}
        >
            {categories.map((category) => (
                <div onClick={() => navigate(`ourcollection/${category?.url}`)}  key={category.id} className="mb-0 mb-lg-4 px-0 px-sm-1">
                    <div className="position-relative">
                        <img src={category.img} alt={category.name} className="img-fluid" />
                        <div
                            className="position-absolute text-center py-2 selerbtn"
                            onClick={() => navigate(`ourcollection/${category?.url}`)}
                            style={{ 
                                bottom: '15px', 
                                left: '10px', 
                                right: '10px',
                                width: 'calc(100% - 20px)',
                                fontWeight: '700',
                                height: '50px',
                                lineHeight:'30px'
                            }}
                        >
                            {category.name}
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );

    return (
        <section className='sellers'>
            <div className="container mx-auto">
                <div className="text-center title mb-8">
                    <h4 className='font-semibold sellerstitle mb-2 title'>Best Sellers</h4>
                </div>
                <div className="mb-1 mt-3">
                    <nav className="bg-white">
                        <ul className="sellersmenu navbar-nav flex-row d-flex justify-content-center">
                            {categories.map((category) => (
                                <li className="flex-shrink-0" key={category.id}>
                                    <p
                                        className={`sellersitem nav-link d-flex justify-content-center align-items-center rounded-full hover:bg-gray-300 ${activeTab === category.name ? 'active' : ''}`}
                                        onClick={() => setActiveTab(category.name)}
                                    >
                                        {category.name}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="container mt-2 mt-lg-4">
                    {/* {activeTab === 'Boys' && (
                        <>
                            {renderCategories(boysCategories)}
                            <div className="d-block d-md-none">
                                {renderSliderCategories(boysCategories)}
                            </div>
                        </>
                    )} */}
                    {activeTab === 'Girls' && (
                        <>
                            {renderCategories(girlsCategories)}
                            <div className="d-block d-md-none">
                                {renderSliderCategories(girlsCategories)}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Sellers;
