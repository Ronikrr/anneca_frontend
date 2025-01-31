import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Alert, ListGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "../../redux/slices/addressSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Buynowmodal.css";
import { clearCart } from "../../redux/slices/cartSlice";
import Spinner from "../../utils/spinner";

const BuyNowModal = ({
  show,
  handleClose,
  product,
  quantity,
  cartItems,
  carttotal,
  size,
}) => {
  const [selectedSize, setSelectedSize] = useState(size || "");
  const [selectedSku, setSelectedSku] = useState("");

  useEffect(() => {
    if (product && size) {
      const skuObj = product.sizeSkus.find((sku) => sku.size === size);
      if (skuObj) {
        setSelectedSize(size);
        setSelectedSku(skuObj.sku);
      }
    }
  }, [product, size]);
  const user = useSelector((state) => state.auth.user) || {};
  const token = useSelector((state) => state.auth.token);
  const [paymentMethod, setPaymentMethod] = useState("prepaid");
  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [step, setStep] = useState("address");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [address, setAddress] = useState({
    first_name: "",
    last_name: "",
    address: "",
    user: user?.userId,
    city: "",
    state: "",
    country: "",
    postal_code: "",
    email: "",
    phone_no: "",
  });

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountedTotal, setDiscountedTotal] = useState(null);

  useEffect(() => {
    if (user && user.userId) {
      fetchAddresses();
    }
  }, []);

  const api = "https://anneca-backend-89l2.vercel.app";
  // const api = "http://localhost:8000"

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!address.first_name.trim())
  //     newErrors.first_name = "First name is required";
  //   if (!address.last_name.trim())
  //     newErrors.last_name = "Last name is required";
  //   if (!address.address.trim()) newErrors.address = "Address is required";
  //   if (!address.city.trim()) newErrors.city = "City is required";
  //   if (!address.state.trim()) newErrors.state = "State is required";
  //   if (!address.country.trim()) newErrors.country = "Country is required";
  //   if (!address.postal_code.trim())
  //     newErrors.postal_code = "Postal code is required";
  //   if (!address.email.trim()) newErrors.email = "Email is required";
  //   else if (!/\S+@\S+\.\S+/.test(address.email))
  //     newErrors.email = "Email is invalid";
  //   if (!address.phone_no.trim())
  //     newErrors.phone_no = "Phone number is required";
  //   else if (!/^\d{10}$/.test(address.phone_no))
  //     newErrors.phone_no = "Phone number must be 10 digits";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const fetchAddresses = async () => {
    if (!user || !user.userId) return;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${api}/api/v1/address/user/me/address/${user.userId}`,
        {
          headers: { Authorization: token },
        }
      );
      setAddresses(response.data.data || []);
    } catch (error) {
      console.error("Error fetching addresses:", error);
      setAddresses([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const checklogin = () => {
    if (!token) {
      navigate('/login')
      return
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!address.first_name) {
      toast.error("First name is required");
    } else if (!address.last_name) {
      toast.error("Last name is required");
    } else if (!address.address) {
      toast.error("Address is required");
    } else if (!address.city) {
      toast.error("City is required");
    } else if (!address.state) {
      toast.error("State is required");
    } else if (!address.country) {
      toast.error("Country is required");
    } else if (!address.postal_code) {
      toast.error("Postal code is required");
    } else if (!address.email) {
      toast.error("Email is required");
    } else if (!emailRegex.test(address.email)) {
      toast.error("Invalid email format");
    } else if (!address.phone_no) {
      toast.error("Phone number is required");
    } else if (!phoneRegex.test(address.phone_no)) {
      toast.error("Phone number must be exactly 10 digits");
    } else {
      try {
        await dispatch(createAddress(address)).unwrap();
        fetchAddresses();

        toast.success("Address saved successfully");
        setAddress({
          first_name: "",
          last_name: "",
          address: "",
          user: user?.userId,
          city: "",
          state: "",
          country: "",
          postal_code: "",
          email: "",
          phone_no: "",
        });
        setStep("address");
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {

    setIsLoading(true);
    const res = await initializeRazorpay();
    if (!res) {
      setIsLoading(false);
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    try {
      const total =
        discountedTotal || (cartItems ? carttotal : product.weight * quantity);
      const amountInPaise = Math.round(total * 100);

      const orderData = cartItems
        ? {
          amount: amountInPaise,
          currency: "INR",
          items: cartItems.map((item) => ({
            id: item._id,
            quantity: item.quantity,
            size: item.cartsize,
            sku: item.sku,
          })),
          paymentMethod: paymentMethod,
          address: currentAddress,
          coupon: appliedCoupon,
        }
        : {
          amount: amountInPaise,
          currency: "INR",
          id: product?._id,
          quantity: quantity,
          paymentMethod: paymentMethod,
          address: currentAddress,
          coupon: appliedCoupon,
          size: size,
          sku: selectedSku,
        };

      const result = await axios.post(
        `${api}/api/v1/payment/create-order`,
        orderData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (paymentMethod === "cod") {
        setIsLoading(false);
        // window.location.reload();
        toast.success(
          "Order placed successfully. Please pay at the time of delivery."
        );
        navigate("/");
        if (cartItems) {
          dispatch(clearCart());
        }
      } else {
        const options = {
          // key: 'rzp_test_imXSQj8w4l8YC5',
          key: "rzp_live_Kj4UB5uRmQsvf7",
          amount: result.data.order.amount,
          currency: result.data.order.currency,
          name: "Your Company Name",
          description: cartItems
            ? "Purchase of Cart Items"
            : `Purchase of ${quantity} x ${product.name}`,
          order_id: result.data.order.id,
          handler: async function (response) {
            try {
              const verifyData = cartItems
                ? {
                  ...response,
                  items: cartItems.map((item) => ({
                    id: item._id,
                    quantity: item.quantity,
                    size: item.cartsize,
                    sku: item.sku,
                  })),
                  amount: amountInPaise / 100,
                  paymentMethod: "prepaid",
                  address: currentAddress,
                  coupon: appliedCoupon,
                }
                : {
                  ...response,
                  id: product?._id,
                  quantity: quantity,
                  amount: amountInPaise / 100,
                  paymentMethod: "prepaid",
                  address: currentAddress,
                  coupon: appliedCoupon,
                  size: size,
                  sku: selectedSku,
                };

              const verifyResult = await axios.post(
                `${api}/api/v1/payment/verify-payment`,
                verifyData,
                {
                  headers: {
                    Authorization: `${token}`,
                  },
                }
              );
              if (verifyResult.data.success) {
                toast.success("Payment successful");
                if (cartItems) {
                  dispatch(clearCart());
                }
                window.location.reload();
                handleClose();
              } else {
                toast.error("Payment verification failed");
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
              toast.error("Payment verification failed");
            }
          },
          modal: {
            ondismiss: function () {
              toast.info("Payment cancelled. Your order has not been placed.");
            },
          },
          prefill: {
            name: `${currentAddress.first_name} ${currentAddress.last_name}`,
            email: currentAddress.email,
            contact: currentAddress.phone_no,
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressSelect = (add) => {
    setCurrentAddress(add);
    setAddress(add);
    setStep("payment");
  };
  const openNewAddressForm = () => {
    setStep("newAddress");
  };

  const handleApplyCoupon = async () => {
    try {
      const response = await axios.post(
        `${api}/api/v1/coupon/apply`,
        {
          code: couponCode,
          totalPrice: cartItems ? carttotal : product.weight * quantity,
        },
        {
          headers: { Authorization: token },
        }
      );

      if (response.data.success) {
        setAppliedCoupon(response.data);
        setDiscountedTotal(response.data.discountedPrice);
        toast.success("Coupon applied successfully!");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      toast.error(error.response?.data?.message || "Failed to apply coupon");
    }
  };

  if (isLoading) return <div className="loader-overlay"><Spinner /></div>;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === "address" && (
            <>
              {addresses.length > 0 ? (
                <>
                  <h5>Select an Address</h5>
                  <ListGroup>
                    {addresses.map((add) => (
                      <ListGroup.Item
                        key={add._id}
                        onClick={() => handleAddressSelect(add)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <Card>
                          <Card.Body>
                            <Card.Title>{`${add.first_name} ${add.last_name}`}</Card.Title>
                            <Card.Text>
                              {add.address}, {address.city}, {add.state},{" "}
                              {add.country}, {add.postal_code}
                              <br />
                              Email: {add.email}
                              <br />
                              Phone: {add.phone_no}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <Button className="addtocart" onClick={openNewAddressForm}>
                      Add New Address
                    </Button>
                  </div>
                </>
              ) : (
                // If there are no addresses, show the address form by default
                <Form onSubmit={handleSubmit}>
                  <h5>Fill in Your Address</h5>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="first_name"
                      value={address.first_name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="last_name"
                      value={address.last_name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={address.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={address.state}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={address.country}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postal_code"
                      value={address.postal_code}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={address.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone_no"
                      value={address.phone_no}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-center">
                      <Button type="submit" className="addtocart" >
                      Save Address & Proceed to Payment
                    </Button>
                  </div>
                </Form>
              )}
            </>
          )}

          {step === "newAddress" && (
            <Form onSubmit={handleSubmit}>
              <h5>Fill in Your Address</h5>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={address.first_name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={address.last_name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={address.address}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={address.country}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postal_code"
                  value={address.postal_code}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={address.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone_no"
                  value={address.phone_no}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                <Button type="submit" className="addtocart">
                  Save Address & Proceed to Payment
                </Button>
              </div>
            </Form>
          )}

          {step === "payment" && (
            <div>
              <div className="product-details">
                <div className="product-info">
                  {cartItems ? (
                    <>
                      {cartItems.map((item) => (
                        <div key={item._id} className="cart-item">
                          <h2 className="cart-item-name">{item.name}</h2>
                          <p className="cart-item-detail">
                            <strong>Quantity:</strong> {item.quantity}
                          </p>
                          <p className="cart-item-detail">
                            <strong>Total Price:</strong> ₹{item.totalPrice}
                          </p>
                          {/* <p className="cart-item-detail">
                            <strong>Weight:</strong> {item.weight} grams
                          </p> */}
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="cart-item">
                        <h2 className="cart-item-name">{product.name}</h2>
                        <p className="cart-item-detail">
                          <strong>Quantity:</strong> {quantity}
                        </p>
                        <p className="cart-item-detail">
                          <strong>Price:</strong> ₹{product.weight}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* {
                cartItems ? <><div className="cart-item">
                  Total Price : ₹{carttotal}
                </div></> : <div className="cart-item">Total Price: ₹{product.weight * quantity} </div>
              } */}
              <div className="cart-item">
                <strong>Total Price:</strong> ₹
                {discountedTotal ||
                  (cartItems ? carttotal : product.weight * quantity)}
              </div>

              {/* Coupon Code Application */}
              <Form.Group className="mb-3">
                <Form.Label>Apply Coupon Code</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={handleApplyCoupon}
                  >
                    Apply
                  </Button>
                </div>
              </Form.Group>

              {appliedCoupon && (
                <Alert variant="success">
                  Coupon applied! You saved ₹
                  {(cartItems ? carttotal : product.weight * quantity) -
                    discountedTotal}
                </Alert>
              )}
              {/* Payment Method Selection */}
              <Form.Group className="mb-3 d-flex gap-3 mt-3">
                <Form.Check
                  type="radio"
                  label="Prepaid"
                  name="paymentMethod"
                  value="prepaid"
                  checked={paymentMethod === "prepaid"}
                  onChange={() => setPaymentMethod("prepaid")}
                />
                <Form.Check
                  type="radio"
                  label="Cash on Delivery"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
              </Form.Group>
              <Button className="paybtn" onClick={handlePayment}>
                {paymentMethod === "prepaid" ? "Pay Now" : "Place Order"}
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader-content">
            <div className="loader-spinner"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNowModal;
