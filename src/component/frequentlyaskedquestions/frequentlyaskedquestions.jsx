import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const Frequentlyaskedquestions = () => {
  return (
    <div className="frequentlyaskedquestions" >
      <div className="container">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <div className="faq-title title col-12 col-lg-4">
            <h4 className="text-center text-lg-start">Frequently Asked Questions</h4>
            <p className="text-center text-lg-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </p>
            {/* <button className="d-none d-lg-block">
              Ask A Question{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.72024 19.7374C7.2809 19.298 7.2809 18.5857 7.72024 18.1464L13.6747 12.1919L7.72024 6.23739C7.2809 5.79805 7.2809 5.08574 7.72024 4.6464C8.15958 4.20706 8.87189 4.20706 9.31123 4.6464L16.0612 11.3964C16.5006 11.8357 16.5006 12.548 16.0612 12.9874L9.31123 19.7374C8.87189 20.1767 8.15958 20.1767 7.72024 19.7374Z"
                  fill="white"
                />
              </svg>
            </button> */}
            <Link className='text-white text-decoration-none' to="mailto:annecafashion06@gmail.com">
              <button type="button" class="buttons_alldata d-none d-md-flex align-items-center">
                Ask A Question{" "}
                <MdOutlineKeyboardArrowRight className="icons" />
              </button>
            </Link>
          </div>
          <div className="col-12 col-lg-8 mt-4 mt-lg-0 accordion-faq">
            <div className="accordion ms-0 ms-lg-4" id="accordionExample">
              <div className="accordion-item mb-0">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What age range are the products suitable for?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our products are designed for children aged 0-12 years, covering a wide range of interests and developmental stages.
                  </div>
                </div>
              </div>
              <div className="accordion-item  mb-0">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Are the toys and products safe for children?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, all our products meet stringent safety standards and are non-toxic, making them safe for children.
                  </div>
                </div>
              </div>
              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I choose the right size for my child?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our size guide is available on each product page to help you select the perfect fit for your child.
                  </div>
                </div>
              </div>

              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can I return or exchange items?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, we offer a hassle-free return and exchange policy within 3 days of purchase, provided the items are in their original condition.
                  </div>
                </div>
              </div>

              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We accept all major credit/debit cards, PayPal, and online banking options for your convenience.
                  </div>
                </div>
              </div>

              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How long does delivery take?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Standard delivery usually takes 5-7 business days. Expedited shipping options are also available at checkout.
                  </div>
                </div>
              </div>

              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingSevan">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSevan"
                    aria-expanded="false"
                    aria-controls="collapseSevan"
                  >
                    What if I receive a damaged or defective item?
                  </button>
                </h2>
                <div
                  id="collapseSevan"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSevan"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    * If the polythene of the parcel you received is torn,
                    * if the polythene of the parcel you received is taped,
                    * or if the polythene of the parcel you received is gummed,
                    * please do not accept the parcel. And immediately call customer care to return the parcel. Email with a photo of
                  </div>
                </div>
              </div>

              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingEeitght">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEeitght"
                    aria-expanded="false"
                    aria-controls="collapseEeitght"
                  >
                    How can I contact customer service?
                  </button>
                </h2>
                <div
                  id="collapseEeitght"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    8. How can I contact customer service?
                    You can reach our customer service team via email, phone, or live chat. Visit our Contact Us page for more details.
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="title mt-4">
            {/* <button className="d-block d-lg-none">
              Ask A Question{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.72024 19.7374C7.2809 19.298 7.2809 18.5857 7.72024 18.1464L13.6747 12.1919L7.72024 6.23739C7.2809 5.79805 7.2809 5.08574 7.72024 4.6464C8.15958 4.20706 8.87189 4.20706 9.31123 4.6464L16.0612 11.3964C16.5006 11.8357 16.5006 12.548 16.0612 12.9874L9.31123 19.7374C8.87189 20.1767 8.15958 20.1767 7.72024 19.7374Z"
                  fill="white"
                />
              </svg>
            </button> */}
            <Link className='text-white text-decoration-none' to="mailto:annecafashion06@gmail.com">
              <button type="button" class="btn btn-primary d-block d-md-none">
                Ask A Question{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.72024 19.7374C7.2809 19.298 7.2809 18.5857 7.72024 18.1464L13.6747 12.1919L7.72024 6.23739C7.2809 5.79805 7.2809 5.08574 7.72024 4.6464C8.15958 4.20706 8.87189 4.20706 9.31123 4.6464L16.0612 11.3964C16.5006 11.8357 16.5006 12.548 16.0612 12.9874L9.31123 19.7374C8.87189 20.1767 8.15958 20.1767 7.72024 19.7374Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequentlyaskedquestions;
