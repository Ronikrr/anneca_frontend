import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Orders.css';
import Spinner from '../../utils/spinner';


const Orders = () => {
  const user = useSelector((state) => state.auth.user) || {};
  const token = useSelector((state) => state.auth.token);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const api = "https://anneca-backend-89l2.vercel.app"
// const api = "http://localhost:8000"

  useEffect(() => {
    fetchOrders();
  }, []); 

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${api}/api/v1/order/user/orders/${user.userId}`, {
        headers: { Authorization: token }
      });
      setOrders(response.data.data);
    } catch (err) {
      setError('Failed to fetch orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      await axios.put(`${api}/api/v1/order/user/cancle-order/${orderId}`, {}, {
        headers: { Authorization: token }
      });
      fetchOrders(); // Refresh the orders list
    } catch (err) {
      setError('Failed to cancel order. Please try again.');
    }
  };

  if (loading) return <div className="text-center mt-8"><Spinner /></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No Order Yet</p>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order?._id} className="order-card">
              <div className="header">
                <h2>Order #{order._id}</h2>
                <span className={`status ${order?.order_status.toLowerCase()}`}>
                  {order?.order_status}
                </span>
              </div>
              <p className="text-gray-600 px-2">Ordered on: {new Date(order.createdAt).toLocaleString()}</p>
              <div className="order-items">
                <h3>Order Items:</h3>
                {order?.order_items.map((item) => (
                  <div key={item?._id} className="order-item">
                    <img src={item?.product?.images[0]?.url} alt={item?.product?.name} />
                    <div className="item-details">
                    
                      <p><span className='font-medium fw-bold'>Product Name :</span> {item?.product?.name}</p>
                      <p><span className='font-medium fw-bold'>SKU :</span> {item?.sku}</p>
                      <p><span className='font-medium fw-bold'> Size: </span>{item?.size}</p>
                      <p><span className='font-medium fw-bold'>Quantity: </span> {item?.quantity}</p>
                      <p className="font-medium"><span className='font-medium fw-bold'>Amount : </span> ₹{item?.product_price.toFixed(2)} each</p>
                      {/* <p className="font-semibold">Total: ₹{(item.total_price).toFixed(2)}</p> */}
                      <p className="font-medium fw-bold">Status: {item?.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="info-section">
                <div>
                  <h3>Shipping Information:</h3>
                  <p>{order.shippingInfo?.frist_name} {order?.shippingInfo?.last_name}</p>
                  <p>{order?.shippingInfo?.address}</p>
                  <p>{order?.shippingInfo?.city}, {order?.shippingInfo?.state} {order?.shippingInfo?.postal_code}</p>
                  <p>{order?.shippingInfo?.country}</p>
                  <p>Phone: {order?.shippingInfo?.phone_no}</p>
                  <p>Email: {order?.shippingInfo?.email}</p>
                </div>
                <div>
                  <h3>Payment Information:</h3>
                  <p>Payment ID: {order?.payment_info?.id}</p>
                  <p>Status: {order?.payment_info?.status}</p>
                  {/* <p className="mt-4 font-medium">Items Price: ₹{order.items_price.toFixed(2)}</p> */}
                  {/* <p className="font-medium">Shipping: ₹{order.shipping_price.toFixed(2)}</p> */}
                  {/* <p className="font-medium">Tax: ₹500 </p> */}
                  <p className="font-semibold">Total: ₹{(order?.total_price / 100).toFixed(2)} (inclusive of all taxes)</p>
                </div>
              </div>
              {order?.order_status !== 'Cancelled' && order?.order_status !== 'Delivered' && (
                <div className="order-summary">
                  <button
                    onClick={() => cancelOrder(order._id)}
                    className="cancel-button"
                  >
                    Cancel Order
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;