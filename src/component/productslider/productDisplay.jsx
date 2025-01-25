import React, { useMemo, useEffect } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDisplay = React.memo(({ images, handleImageHover, currentImageIndex }) => {
    const removedVideoImages = useMemo(() => images?.filter(v => !v?.url.includes("/video/")), [images]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
    };

    useEffect(() => {
        const handleResize = () => {
            const mainImageContainer = document.querySelector('.mainsliderimg');
            const smallImagesContainer = document.querySelector('.smallimage-container');

            if (window.innerWidth <= 768) {
                if (mainImageContainer && smallImagesContainer) {
                    smallImagesContainer.parentNode.insertBefore(mainImageContainer, smallImagesContainer);
                }
            } else {
                if (mainImageContainer && smallImagesContainer) {
                    smallImagesContainer.parentNode.insertBefore(smallImagesContainer, mainImageContainer);
                }
            }
        };

        // Initial check and resize listener
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="col-12 col-md-1 mb-3 d-flex flex-row flex-md-column flex-wrap align-items-end me-2 smallimage-container">
                {/* {removedVideoImages?.length > 6 ? (
                    <Slider {...settings}>
                        {removedVideoImages?.map((img, index) => (
                            <div key={index} className="mb-3 me-2 me-lg-0 smallimage">
                                <img
                                    src={img?.url}
                                    alt={`Product img ${index + 1}`}
                                    className="w-100"
                                    onMouseEnter={() => handleImageHover(index)}
                                    style={{
                                        height: '60px',
                                        border: currentImageIndex === index ? '2px solid rgb(100 100 100)' : 'none' // Add border if selected
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                ) : ( */}
                    {removedVideoImages.map((img, index) => (
                        <div key={index} className="mb-3 me-2 me-lg-0 smallimage">
                            <img
                                src={img?.url}
                                alt={`Product img ${index + 1}`}
                                className="w-100"
                                onMouseEnter={() => handleImageHover(index)}
                                style={{
                                    height: '60px',
                                    border: currentImageIndex === index ? '2px solid rgb(100 100 100)' : 'none' // Add border if selected
                                }}
                            />
                        </div>
                    ))}
                {/* )} */}
            </div>
            <div className="col-12 col-md-5 mb-3 ms-0 ms-lg-0 mainsliderimg">
                <div className="mx-0 mx-lg-0 pe-0 pe-lg-0 zoom-container">
                    <InnerImageZoom
                        src={removedVideoImages?.[currentImageIndex]?.url}
                        zoomSrc={removedVideoImages?.[currentImageIndex]?.url}
                        zoomType="hover"
                        zoomPreload={true}
                    />
                </div>
            </div>
        </>
    );
});

export default ProductDisplay;
