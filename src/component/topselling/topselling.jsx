import React from 'react'
import selling1 from "../../assets/new_images/selling-1.avif"
import selling2 from "../../assets/new_images/selling-2.png"
import selling3 from "../../assets/new_images/selling-3.png"
import selling4 from "../../assets/new_images/selling-4.png"

const PRODUCT = [
    {
        name: "Girls Light Yellow Georgette Fl",
        desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
        price: "₹299.00",
        rating: 4,
        img: selling1
    },
    {
        name: "Girls Light Yellow Georgette Fl",
        desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
        price: "₹299.00",
        rating: 5,
        img: selling2
    },
    {
        name: "Girls Light Yellow Georgette Fl",
        desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
        price: "₹299.00",
        rating: 4,
        img: selling3
    },
    {
        name: "Girls Light Yellow Georgette Fl",
        desc: "Sony - WH-1000XM5 Wireless Noise Canceling",
        price: "₹299.00",
        rating: 3,
        img: selling4
    }
]

const Topselling = () => {
    return (
        <div>
            <div className="container topselling">
                <div className="row">
                    <div className="title">
                        <h4 className='text-center mb-4'>Top Selling</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-wrap ">
                        {
                            PRODUCT.map((v, i) => <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0">
                                <div className="selling-img me-2" >
                                    <img src={v.img} alt="product" className='img-fluid' />
                                </div>
                                <div className="selling-text mt-2">
                                    <h5>{v.name}</h5>
                                    <p className='mb-0'>{v.desc}</p>
                                </div>
                                <div className="selling-rating d-flex flex-wrap">
                                    <div className="s-rating">
                                        {
                                            [0, 1, 2, 3, 4].map((r, j) => {
                                                return r < v.rating ? <i key={j} class="bi bi-star-fill text-warning me-1"></i> : <i key={j} class="bi bi-star text-warning me-1"></i>
                                            })
                                        }
                                    </div>
                                    <div className="s-price ms-auto">
                                        <span className="me-3">{v.price}</span>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                    <div className="topsellingbtn d-flex justify-content-center mt-5">
                        <button className='viewall'>View All</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topselling
