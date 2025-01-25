import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGetProductsQuery } from "../../redux/apiSlice";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from "../../utils/spinner";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import '../header/change.css';

const Ourcollectionproduct = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { category } = useParams();
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = useSelector((state) => state.categories);

  const [page, setPage] = useState(1);
  // const [allProducts, setAllProducts] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm(searchParams.get("searchQuery"))
  }, [searchTerm, searchParams.get("searchQuery")])

  // const loadMoreRef = useRef();

  const { data: products, error, isLoading, isFetching } = useGetProductsQuery({ category, page, searchTerm });
  const decodedPath = useMemo(() => decodeURIComponent(location.pathname)?.split("/ourcollection/")?.[1], [location.pathname])

  const priceRanges = [
    { id: '400-600', label: '₹400 - ₹600', min: 400, max: 600 },
    { id: '600-800', label: '₹600 - ₹800', min: 600, max: 800 },
    { id: '800-1000', label: '₹800 - ₹1000', min: 800, max: 1000 },
    { id: '1000+', label: '₹1000 & above', min: 1000, max: Infinity }
  ];

  const addToCartHandler = (product) => {
    dispatch(addItem({
      id: product._id,
      name: product.name,
      price: product.weight,
      quantity: 1
    }));
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRanges(prev => {
      if (prev.includes(range.id)) {
        return prev.filter(id => id !== range.id);
      } else {
        return [...prev, range.id];
      }
    });
  };

  const getFilteredProducts = () => {
    if (!products?.data) return [];
    if (selectedPriceRanges.length === 0) return products.data;

    return products.data.filter(product => {
      const price = Number(product.weight); // Assuming weight is being used as price
      return selectedPriceRanges.some(rangeId => {
        const range = priceRanges.find(r => r.id === rangeId);
        return price >= range.min && price <= range.max;
      });
    });
  };

  if (isLoading) return <Spinner />
  if (error) return <p>Error loading products: {error.message}</p>;

  const filteredProducts = getFilteredProducts();

  return (
    <div className="container mt-5">
      <div className="col-12">
        <div className="title">
          <h4 className="text-center mb-2 mb-lg-4">Our Collection Of {decodedPath}</h4>
        </div>
        <button
          type="button"
          className="DocSearch d-flex flex-wrap"
          aria-label="Search"
        >
          <input
            type="text"
            placeholder="Search An Item"
            className="search-input2"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setSearchParams({ searchQuery: e.target.value });
            }}
          />
          <div className="search-button d-flex">
            <svg
              className="ms-auto"
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875Z"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>

        <div className="description">
          <p className="desc mt-4 mb-0">Showing {filteredProducts.length} item(s)</p>
          <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="col-12 d-flex flex-wrap main-collection">
          <div className="col-12 col-lg-2 d-none d-lg-block">
            <div className="card ">
              <h5 className="filter-title ms-4 mt-2">Categories</h5>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                {
                  categories?.data?.map((c, i) => {
                    return <Link key={i} to={`/ourcollection/${c.name.toLowerCase()}`} className="accordion-item text-dark">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed text-decoration-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapseOne-${i + 1}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapseOne-${i + 1}`}
                        >
                          {c.name}
                        </button>
                      </h2>
                      {
                        c?.children && c?.children?.map((ch, j) => {
                          return <Link to={`/ourcollection/${ch.name}`}
                            key={j}
                            id={`flush-collapseOne-${i + 1}`}
                            className="accordion-collapse collapse text-dark text-decoration-none subcategorymenu"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              {ch.name}
                            </div>
                          </Link>
                        })
                      }
                    </Link>
                  })
                }
              </div>
            </div>
            <div className="card mt-4 d-none d-lg-block">
              <h5 className="filter-title ms-4 mt-2">Price Range</h5>
              <div className="ms-3">
                {priceRanges.map((range) => (
                  <div className="form-check" key={range.id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`price-${range.id}`}
                      checked={selectedPriceRanges.includes(range.id)}
                      onChange={() => handlePriceRangeChange(range)}
                    />
                    <label className="form-check-label" htmlFor={`price-${range.id}`}>
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-10 mt-5 mt-lg-0 d-flex flex-wrap justify-content-center justify-content-lg-start mt-0 ms-0">
            {filteredProducts.map((v, i) => {
              const isImage = v.images?.[0]?.url.includes("/image/");
              const isVideo = v.images?.[0]?.url.includes("/video/");
              return (
                <div key={i} className="similarproductimage position-relative col-12 col-sm-6 col-md-3 mb-4 mb-lg-3">
                  <div className="ms-0 me-sm-2 ms-lg-4">
                    <div onClick={() => navigation('/product/' + v?._id)} className="selling-img me-0 me-md-2 d-flex justify-content-center">
                      {isImage && (
                        <LazyLoadImage
                          src={v.images?.[0]?.url}
                          alt="product"
                          className="img-fluid position-relative w-100"
                          effect="blur"
                        />
                      )}
                      {isVideo && (
                        <video
                          src={v.images?.[0]?.url}
                          alt="product"
                          className="img-fluid position-relative w-100"
                          loop
                          autoPlay
                          muted
                        />
                      )}
                    </div>
                    <div className="discountnumber">
                      <p className='text-center mb-0'>{v.discount ?? "-10%"}</p>
                    </div>
                    <div className="selling-text mt-2">
                      <h5>{v.name}</h5>
                    </div>
                    <div className="selling-rating d-flex flex-wrap align-items-center">
                      <div className="similar-price">
                        <span className="me-1 cancelprice"><del>₹{v.price}</del></span>
                        <span className="me-3 fixedprice">₹{v.weight}</span>
                      </div>
                      <div onClick={() => addToCartHandler(v)} className="plusicon ms-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                          <path d="M12.5 1.5C6.725 1.5 2 6.225 2 12C2 17.775 6.725 22.5 12.5 22.5C18.275 22.5 23 17.775 23 12C23 6.225 18.275 1.5 12.5 1.5ZM12.5 21.225C7.4 21.225 3.275 17.1 3.275 12C3.275 6.9 7.4 2.775 12.5 2.775C17.6 2.775 21.725 6.9 21.725 12C21.725 17.1 17.6 21.225 12.5 21.225Z" fill="black" />
                          <path d="M13.1 8.32495H11.9V11.4H9.125V12.6H11.9V15.825H13.1V12.6H15.95V11.4H13.1V8.32495Z" fill="black" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="title d-flex justify-content-center my-5">
          <button className='viewall d-flex align-items-center'>View All
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.72013 19.5455C7.28079 19.1062 7.28079 18.3938 7.72013 17.9545L13.6746 12L7.72013 6.04549C7.28079 5.60616 7.28079 4.89384 7.72013 4.45451C8.15947 4.01517 8.87178 4.01517 9.31112 4.45451L16.0611 11.2045C16.5005 11.6438 16.5005 12.3562 16.0611 12.7955L9.31112 19.5455C8.87178 19.9848 8.15947 19.9848 7.72013 19.5455Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ourcollectionproduct;