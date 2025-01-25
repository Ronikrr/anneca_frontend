import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

const ORDERLIST = [
    {
        orderno: "2133",
        items: "Double Bed & Dressing",
        status: "In Progress",
        trackingid: "2176413876",
        deliverydate: "02-07-2024",
        price: "$168.20",
        odetails: "Order Details",
    },
    {
        orderno: "2133",
        items: "Double Bed & Dressing",
        status: "In Progress",
        trackingid: "2176413876",
        deliverydate: "02-07-2024",
        price: "$168.20",
        odetails: "Order Details",
    },
]


const Neworder = () => {
    return (
        <>
            <div className="container py-5">

                <div className="col-12">
                    <h2>Order History</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus eos quae similique ipsa voluptas dolor reiciendis corrupti inventore consequuntur! </p>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr className='table_heading'>
                                    <th scope="col" className='px-2 py-4 fw-normal product_heading text-center'>Order no</th>
                                    <th scope="col" className='p-4 fw-normal'>Items</th>
                                    <th scope="col" className='p-4 fw-normal'>Status</th>
                                    <th scope="col" className='p-4 fw-normal'>Tracking ID</th>
                                    <th scope="col" className='p-4 fw-normal text-center'>Delivery Date</th>
                                    <th scope="col" className='p-4 fw-normal text-center'>Price</th>
                                    <th scope="col" className='p-4 fw-normal text-center'>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ORDERLIST.map((order, index) => (
                                    <tr key={index} className='border'>
                                        <td className='px-2 py-4 text-center'>{order.orderno}</td>
                                        <td className='p-4'>{order.items}</td>
                                        <td className='p-4'>
                                            <div className="status_clock fw-semibold text-center">
                                                <CiClock2 className='me-2' />
                                                {order.status}
                                            </div>
                                        </td>
                                        <td className='p-4'>
                                            <a href="#" className='tracking_id'>
                                                {order.trackingid} <GoLinkExternal className='ms-2' />
                                            </a>
                                        </td>
                                        <td className='p-4 text-center'>{order.deliverydate}</td>
                                        <td className='p-4 text-center'>{order.price}</td>
                                        <td className='p-4 text-center'>
                                            <a href="#" className='order_encar fw-semibold'>
                                                {order.odetails} <FaArrowRight className='ms-2' />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Neworder
