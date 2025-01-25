import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Productreview from "../productreview/productreview";
import Frequentlyaskedquestions from "../frequentlyaskedquestions/frequentlyaskedquestions";
import Testimonial from "../testimonial/testimonial";
import ProductDisplay from "./productDisplay";
import { useGetSingleProductQuery } from "../../redux/apiSlice";
import { useParams } from "react-router-dom";
import Spinner from "../../utils/spinner";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { addItem as addWishListItem } from "../../redux/slices/wishListSlice";
import Productsimilar from "../productsimilar/productsimilar";
import MeasurementTable from "./SizeChartTable";
import BuyNowModal from "./BuyNowModal";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [Mobilescroll, setMobilescroll] = useState(0)
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const { data: product, error, isLoading } = useGetSingleProductQuery(productId);

  const wishlist = useSelector((state) => state.wishlist);

  const [sizeData, setSizeData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState({});
  const handleBuyNow = () => {
    if (!token) {
      navigate('/login');
    } else {
      setShowBuyNowModal(true);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    const handleScrollmobile = () => {
      setMobilescroll(window.scrollY)
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollmobile);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollmobile);
    };
  }, []);
  const showButton = scrollPosition >= 700;
  const showButtonmobile = Mobilescroll >= 900;
  const handleCloseBuyNowModal = () => {
    setShowBuyNowModal(false);
  };

  useEffect(() => {
    if (product?.data?.size && product?.data?.size.length > 0) {
      const sizeExtract = product.data.size[0].split(",").map(size => size.trim()) || [];
      setSizeData(sizeExtract);

      setImages(product?.data?.images || []);


      const videoContent = product?.data?.images?.find((v) => v?.url.includes("/video/"))
      setVideo(videoContent)
      if (sizeExtract.length > 0) {
        setSelectedSize(sizeExtract[0]);
      }
    }
  }, [product?.data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageHover = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddWishList = () => {
    dispatch(addWishListItem(
      {
        id: productId,
        image: product?.data?.images?.[0],
        name: product?.data?.name,
        price: product?.data?.weight,
      }
    ));
  }

  // const handleAddToCart = () => {
  //   setLoading(true); // Start loading
  //   setTimeout(() => {
  //     dispatch(
  //       addItem({
  //         id: productId,
  //         image: product?.data?.images?.[0],
  //         name: product?.data?.name,
  //         price: product?.data?.weight, 
  //         quantity: quantity,
  //         image:product?.data?.images[0]?.url,
  //         size: selectedSize,
  //       })
  //     );
  //     setLoading(false);
  //   }, 2000);
  // };
  const handleAddToCart = () => {
    setLoading(true); // Start loading


    const selectedSku = product?.data?.sizeSkus?.find(skuObj => skuObj.size === selectedSize)?.sku;

    setTimeout(() => {
      dispatch(
        addItem({
          id: productId,
          image: product?.data?.images?.[0],
          name: product?.data?.name,
          price: product?.data?.weight,
          quantity: quantity,
          image: product?.data?.images[0]?.url,
          size: selectedSize,
          sku: selectedSku,
        })
      );
      setLoading(false);
    }, 2000);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value); // Update selected size
  };


  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading product</p>;


  return (
    <>
      {showButton && (
        <>
          <div className="bg-white d-none d-lg-flex position-fixed w-100 bigscreen_scroll ">
            <div className="container h-100 ">
              <div className="d-flex align-items-center justify-content-between h-100">
                <div className="">
                  {product?.data?.name}
                </div>
                <div className="">
                  <span className="fs-4 fw-semibold">
                    <del>₹{product?.data?.price}</del>
                  </span>
                  <span className="fs-4 fw-semibold color"> ₹{product?.data?.weight}</span>
                </div>
                <div className="">
                  <select className="form-select" value={selectedSize} onChange={handleSizeChange} aria-label="Default select example">
                    {sizeData?.map((val, index) => (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="outline-secondary" className="me-2" onClick={handleDecrement}>
                    -
                  </Button>
                  <span className="fw-bold">{quantity}</span>
                  <Button variant="outline-secondary" className="ms-2" onClick={handleIncrement}>
                    +
                  </Button>
                </div>
                <div className=" d-flex align-items-center gap-2 ">
                  <Button className="addtocart" onClick={handleAddToCart} disabled={loading || product?.data?.quantity === 0}>
                    {loading ? (
                      <span className="d-flex align-items-center justify-content-center">
                        <div className="spinner-border spinner-border-sm text-light" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </span>
                    ) : product?.data?.quantity === 0 ? (
                      "Out of Stock"
                    ) : (
                      "Add to Cart"
                    )}
                  </Button>

                  <Button variant="outline-dark bg-white" className="" onClick={handleBuyNow} disabled={product?.data?.quantity === 0}>
                    {product?.data?.quantity === 0 ? "Out of Stock" : "Buy Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </>

      )}
      {showButtonmobile && (
        <div className="addtocart_fixed_button d-block d-lg-none position-fixed d-flex align-items-center w-100 bg-white py-3 px-2 ">
          <Button className="addtocart w-50" onClick={handleAddToCart} disabled={loading || product?.data?.quantity === 0}>
            {loading ? (
              <span className="d-flex align-items-center justify-content-center">
                <div className="spinner-border spinner-border-sm text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </span>
            ) : product?.data?.quantity === 0 ? (
              "Out of Stock"
            ) : (
              "Add to Cart"
            )}
          </Button>

          <Button variant="outline-dark bg-white w-50" className="" onClick={handleBuyNow} disabled={product?.data?.quantity === 0}>
            {product?.data?.quantity === 0 ? "Out of Stock" : "Buy Now"}
          </Button>
        </div>
)}
      <div className="mt-5 container product-slider d-flex flex-wrap align-items-start">

        <ProductDisplay images={images} currentImageIndex={currentImageIndex} handleImageHover={handleImageHover} />
        <div className="col-12 col-md-5 ms-0 ms-lg-0 main-collection">
          <div className="decs d-flex flex-wrap align-items-start">
            <h2 className="mb-2 d-flex align-items-start">{product?.data?.name}
              {
                !wishlist?.items?.find((item) => item.id == product?.data?._id)?.name?.length > 0
                  ? <i onClick={handleAddWishList} className="bi bi-heart fs-5" style={{ marginBottom: '0px', position: 'relative', top: '8px', left: '4px', color: 'gray', cursor: 'pointer' }}></i>
                  : <i onClick={handleAddWishList} className="bi bi-heart-fill fs-5 text-danger" style={{ marginBottom: '0px', position: 'relative', top: '8px', left: '4px', color: 'gray', cursor: 'pointer' }}></i>
              }
            </h2>
          </div>
          <div className="mb-3 pb-2 border-bottom">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <span className="fs-4 fw-semibold">
                  <del>₹{product?.data?.price}</del>
                </span>
                <span className="fs-4 fw-semibold color"> ₹{product?.data?.weight}</span>
              </div>
              <div>
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <i
                    key={i}
                    className={star <= product?.data?.ratings ? "bi bi-star-fill text-warning me-1" : "bi bi-star text-warning me-1"}
                  ></i>
                ))}
                <span className="ms-2">({product?.data?.reviews?.length} reviews)</span>
              </div>
              {
                product?.data?.quantity > 0
                  ? <div><span class="ms-2" style={{ color: "#007600" }}>In Stock</span></div>
                  : <div><span class="ms-2" style={{ color: "#b12704" }}>Out Of Stock</span></div>
              }
            </div>
          </div>
       
          <div className="product-size mt-3 mb-2">
            <div className="size-title d-flex flex-wrap justify-content-between align-items-center">
              <h6 className="mb-0">Size</h6>
              <button
                className="btn p-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <u>Size Chart</u>
              </button>
            </div>
          </div>

          {/* Dropdown Select */}
          <select className="form-select" value={selectedSize} onChange={handleSizeChange} aria-label="Default select example">
            {sizeData?.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>

          <div className="mt-4 d-flex flex-wrap">
            <div className="col-12 col-md-3 mb-0">
              <div className="d-flex align-items-center">
                <Button variant="outline-secondary" className="me-2" onClick={handleDecrement}>
                  -
                </Button>
                <span className="fw-bold">{quantity}</span>
                <Button variant="outline-secondary" className="ms-2" onClick={handleIncrement}>
                  +
                </Button>
              </div>
            </div>
            <div className="col-12 col-md-9 mb-0 mt-4 mt-lg-0 ">
              <Button className="addtocart w-100" onClick={handleAddToCart} disabled={loading || product?.data?.quantity === 0}>
                {loading ? (
                  <span className="d-flex align-items-center justify-content-center">
                    <div className="spinner-border spinner-border-sm text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </span>
                ) : product?.data?.quantity === 0 ? (
                  "Out of Stock"
                ) : (
                  "Add to Cart"
                )}
              </Button>
            </div>
          </div>

          <div className="mt-3">
            <Button variant="outline-dark" className="w-100" onClick={handleBuyNow} disabled={product?.data?.quantity === 0}>
              {product?.data?.quantity === 0 ? "Out of Stock" : "Buy Now"}
            </Button>
          </div>

          <BuyNowModal
            show={showBuyNowModal}
            handleClose={handleCloseBuyNowModal}
            product={product?.data}
            quantity={quantity}
            size={selectedSize}
          />

          <div className="mt-4">
            <p className="mb-0">
              <i className="bi bi-truck"></i> Free delivery in all over India.
            </p>
            <p className="mb-0">
              <i className="bi bi-truck"></i> Make to order available and No Return* | Contact Us: <a href="tel:9427921383">+91 9427921383</a>
            </p>
            <p className="mb-0">
              <i className="bi bi-clock"></i> Delivers in: 3 Working Days Shipping & Return
            </p>
          </div>
          <Productreview description={product?.data?.description} />
        </div>
      </div>
      <div className="py-5 py-lg-5">
        {product?.data?.category?._id && <Productsimilar categoryId={product?.data?.category?._id} />}
      </div>
      <Frequentlyaskedquestions />
      <Testimonial />

      {/* Offcanvas for Size Chart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Size Chart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Table displaying the size options */}
          <MeasurementTable productId={productId} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
