import React from 'react'
import selling1 from "../../assets/new_images/dis1.avif"
import selling2 from "../../assets/new_images/dis3.avif"
import person1 from "../../assets/new_images/dis2.avif"
import { Link } from 'react-router-dom'
const Photosection = () => {
    return (
        <div className='photosection'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap">
                        <Link to={`https://www.annecafashion.com/ourcollection/Palazzo%20Set`} className="col-12 col-md-3">
                            <img src={selling1} className='box_class' alt="" />
                        </Link>
                        <div className="col-12 col-md-6 centersmallimage my-2 my-lg-0 d-flex flex-wrap justify-content-between justify-content-md-center">
                            <div className="col-12 col-md-12 h-100 ">
                                <div className="photosection-img h-100 me-0 me-md-2 me-lg-2  ms-0 ms-md-2">
                                    <img src={person1} alt="" />
                                </div>
                            </div>
                        </div>
                        <Link to={`https://www.annecafashion.com/ourcollection/Lehenga%20Choli`} className="col-12 col-md-3">
                            <img  src={selling2} className='box_class' alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photosection
