import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartAndPayment = () => {
  const [cart, setCart] = useState([
    { product: "Product 1", quantity: 2, price: 50 },
    { product: "Product 2", quantity: 3, price: 30 },
  ]);

  const [paymentOption, setPaymentOption] = useState("COD");

  const handlePaymentChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const countTotal = () => {
    return calculateSubtotal() + 100;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add order submission logic here
  };

  return (
    <div className="container my-5 cartpayment">
      <div className="row">
        {/* <div className="col-md-6">
                    <h2>Cart Details</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.quantity * item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={2}>Subtotal</td>
                                <td>${calculateSubtotal()}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Shipping</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Total</td>
                                <td>${countTotal()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div> */}
        <div className="col-md-12 d-flex flex-wrap justify-content-center justify-lg-content-start">
          <div className="col-12 col-md-6 px-2 px-lg-0 ">
            <div className="card me-0 me-lg-0">
              <div className="card-header text-white">Cart Details</div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead className="thead-padding-bottom">
                    <tr>
                      <th className="">Product</th>
                      <th className="text-end">Quantity</th>
                      <th className="text-end">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="py-3">{item.product}</td>
                        <td className="text-end py-3">{item.quantity}</td>
                        <td className="text-end py-3">
                        ₹{item.quantity * item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2} className="py-4">
                        Subtotal
                      </td>
                      <td className="text-end py-4">${calculateSubtotal()}</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="py-4">
                        Shipping
                      </td>
                      <td className="text-end py-4">₹100</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="py-4">
                        Total
                      </td>
                      <td className="text-end py-4">${countTotal()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 px-2 px-lg-0 mt-5 mt-lg-0">
            <div className="card ms-0 ms-lg-2">
              <div className="card-header text-white">Payment Process</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group" controlId="paymentOption">
                    <h5 className="mb-0">Available Payment</h5>
                    <div className="d-flex flex-wrap pb-1">
                      <label htmlFor="cod" className="ml-2">
                        COD
                      </label>
                      <input
                        type="radio"
                        label="COD"
                        value="COD"
                        checked={paymentOption === "COD"}
                        onChange={handlePaymentChange}
                        id="cod"
                        name="paymentOption"
                        className="ms-auto"
                      />
                    </div>
                    <div className="d-flex flex-wrap pb-1">
                      <label htmlFor="visa" className="ml-2">
                        Visa Card
                      </label>
                      <input
                        type="radio"
                        label="Visa Card"
                        value="Visa Card"
                        checked={paymentOption === "Visa Card"}
                        onChange={handlePaymentChange}
                        id="visa"
                        name="paymentOption"
                        className="ms-auto"
                      />
                    </div>
                    <div className="d-flex flex-wrap pb-1">
                      <label htmlFor="gpay" className="ml-2">
                        G-Pay
                      </label>
                      <input
                        type="radio"
                        label="G-Pay"
                        value="G-Pay"
                        checked={paymentOption === "G-Pay"}
                        onChange={handlePaymentChange}
                        id="gpay"
                        name="paymentOption"
                        className="ms-auto"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex flex-wrap pb-5 mb-1 showtotal">
                    <h6 className="fw-regular">Total : </h6>
                    <h5 className="ms-auto"> ${countTotal()}</h5>
                  </div>
                  <div className="title mb-2 d-flex flex-wrap">
                    <button
                      href="#login_modal"
                      className="mx-auto"
                      type="submit"
                      data-bs-toggle="modal"
                    >
                      Place Order
                    </button>
                    <>
                      {/* user modal */}
                      <div className="modal fade col-8" id="login_modal">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            {/* <div className="modal-header"> 
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div> */}
                            <div className="modal-body">
                              <div className="tab-content text-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 69 69"
                                  fill="none"
                                >
                                  <path
                                    d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z"
                                    fill="#A67C5C"
                                  />
                                  <path
                                    d="M25.6846 50.0636L43.4243 67.8033C58.1167 63.8853 69 50.4989 69 34.5005V33.521L55.0694 20.6787L25.6846 50.0636Z"
                                    fill="#A67C5C"
                                  />
                                  <path
                                    d="M35.3708 42.2267C36.8944 43.7503 36.8944 46.3623 35.3708 47.886L32.2146 51.0421C30.691 52.5658 28.079 52.5658 26.5553 51.0421L12.7336 37.1115C11.2099 35.5879 11.2099 32.9759 12.7336 31.4522L15.8897 28.2961C17.4134 26.7724 20.0254 26.7724 21.549 28.2961L35.3708 42.2267Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M47.4512 18.175C48.9749 16.6513 51.5868 16.6513 53.1105 18.175L56.2667 21.3311C57.7903 22.8548 57.7903 25.4668 56.2667 26.9904L32.3234 50.8248C30.7998 52.3485 28.1878 52.3485 26.6641 50.8248L23.508 47.6687C21.9843 46.145 21.9843 43.533 23.508 42.0094L47.4512 18.175Z"
                                    fill="white"
                                  />
                                </svg>
                                <h4>Thank you!</h4>
                                <p>
                                  Your order has been confirmed & it is on the
                                  way. Check your email for the details
                                </p>
                                <button className="text-uppercase">
                                  Go to Homepage
                                </button>
                                <button className="text-uppercase ms-4 bg-transparent text-dark border">
                                  Check Order Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAndPayment;
