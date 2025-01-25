import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/wishListSlice';
import { Link } from 'react-router-dom';

const WishList = () => {
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    const handleRemoveItem = (order) => {
        dispatch(addItem(order));
    };

    return (
        <div className="WishList container py-5">
            <div className='col-12'>
                <div className="table-responsive">
                    <table className="table table-striped mb-5">
                        <thead>
                            <tr className='table_heading'>
                                <th scope="col" className='p-3 p-md-4 border-0 product_heading fw-normal'>Product</th>
                                <th scope="col" className='p-3 p-md-4 border-0 fw-normal'>Price</th>
                            </tr>
                        </thead>
                        <tbody className='col-12'>
                            {wishlist?.items?.map((order) => (
                                <tr key={order.id} className='border col-12'>
                                    <th className='pe-3 pe-sm-4 py-3 py-md-4 cursor-pointer ps-2 d-flex align-items-center border-bottom-0 fw-normal'>
                                        <p className='text-black cross-icon' onClick={() => handleRemoveItem(order)}>
                                            <RxCross2 className='me-2' />
                                        </p>
                                        <span className='d-flex me-3 rounded-1'>
                                            <img src={order?.image} alt={order.name} />
                                        </span>
                                        <Link className='text-dark' to={`/product/${order.id}`}>
                                            {order.name}
                                        </Link>
                                    </th>
                                    <td className='p-3 p-md-4'>₹{order.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WishList;