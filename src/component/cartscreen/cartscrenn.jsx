import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateItemQuantity, removeItem } from '../../redux/slices/cartSlice';
import BuyNowModal from '../productslider/BuyNowModal';
import { useLocation, useNavigate } from 'react-router-dom';

const Cartscreen = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const location = useLocation();
    const [quantities, setQuantities] = useState(
        cart.items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
    );
    const [showModal, setShowModal] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);

    const handleQuantityChange = (id, value) => {
        const newQuantity = Math.max(1, value);
        setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
        dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

   

    const handleProceedToCheckout = () => {
        if (!token) {
            localStorage.setItem("redirectAfterLogin", location.pathname); // Store exact page path
            navigate('/login', { state: { from: location.pathname } }); // Pass last page
            window.scrollTo(0, 0);
        } else {
            const productsForCheckout = cart.items.map((product) => ({
                _id: product.id,
                name: product.name,
                weight: product.price,
                quantity: quantities[product.id],
                totalPrice: (product.price * quantities[product.id]).toFixed(2),
                cartsize: product.cartsize,
                sku: product.sku
            }));
            setSelectedProducts(productsForCheckout);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };



    return (
        <div className="cartscreen container py-5">
            <div className='col-12'>
                <div className="table-responsive">
                    <table className="table table-striped mb-5">
                        <thead>
                            <tr className='table_heading'>
                                <th scope="col" className='p-3 p-md-4 border-0 product_heading fw-normal'>Product</th>
                                <th scope="col" className='p-3 p-md-4 border-0 fw-normal'>Price</th>
                                <th scope="col" className='p-3 p-md-4 border-0 fw-normal'>size</th>
                                <th scope="col" className='p-3 p-md-4 border-0 fw-normal col-9 d-flex'>Quantity</th>
                                <th className='p-sm-4 border-bottom-0 radius_right'>Total Price</th>
                            </tr>
                        </thead>
                        <tbody className='col-12'>
                            {cart?.items?.length > 0 ? (
                                cart.items.map((order) => (
                                    <tr key={order.id} className='border col-12'>
                                        <th className='pe-3 pe-sm-4 py-3 py-md-4 ps-2 d-flex align-items-center border-bottom-0 fw-normal'>
                                            <a href="javascript:void(0);" className='text-black' onClick={() => handleRemoveItem(order.id)}>
                                                <RxCross2 className='me-2' />
                                            </a>
                                            <span className='d-flex me-3 rounded-1r'>
                                                <img
                                                    src={order.image}
                                                    alt={order.name}
                                                    className="img-fluidcart rounded w-12 h-12"

                                                />
                                            </span>{order.name}
                                        </th>
                                        <td className='p-3 p-md-4'>₹{order.price}</td>
                                        <td className='p-3 p-md-4'>{order.cartsize}</td>
                                        <td className='px-2 px-sm-3 px-md-4 py-3 col-4 col-md-3 col-xxl-2'>
                                            <div className="quantity_main_box col-8 border rounded-pill d-flex justify-content-center">
                                                <button
                                                    className='border-0 bg-transparent fs-3'
                                                    onClick={() => handleQuantityChange(order.id, quantities[order.id] - 1)}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    className='col-5 border-0 text-center'
                                                    type="number"
                                                    value={quantities[order.id]}
                                                    onChange={(e) => handleQuantityChange(order.id, Number(e.target.value))}
                                                />
                                                <button
                                                    className='border-0 bg-transparent'
                                                    onClick={() => handleQuantityChange(order.id, quantities[order.id] + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className='p-3 p-md-4 d-flex justify-content-center border-bottom-0'>
                                            ₹{(order.price * quantities[order.id]).toFixed(2)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-5">
                                        <h4>No items in the cart</h4>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <table className="table mb-0">
                    <thead>
                        <tr className='table_heading '>
                            <th className='py-4 product_heading'>Total Quantity: {cart?.totalQuantity}</th>
                            <th className='py-4 text-end '>Total Price: {cart?.totalPrice}</th>
                        </tr>
                    </thead>
                </table>
                <button
                    className='addtocartbtn p-4 border-0 border_radius_left'
                    onClick={handleProceedToCheckout}
                >
                    Proceed To Checkout
                </button>
            </div>

            {selectedProducts && selectedProducts.length > 0 && (
                <BuyNowModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    cartItems={selectedProducts}
                    carttotal={cart?.totalPrice}
                />
            )}
        </div>
    );
};

export default Cartscreen;