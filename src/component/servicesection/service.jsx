import React from 'react';
import '../../component/header/change.css'


const Service = () => {
    return (
        <div className='container service'>
            <div className="row">
                <div className="col-12 d-flex flex-wrap align-items-start " >
                    <div className="cardpart col-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="card d-flex flex-row align-items-center  me-0 me-lg-0 px-2  py-4 ">
                            <svg className="card-img-top w-25 " xmlns="http://www.w3.org/2000/svg" width="50" height="42" viewBox="0 0 54 49" fill="none">
                                <path d="M32.0822 42.1096V12.0274M32.0822 42.1096H37.0959M32.0822 42.1096H19.5479M32.0822 12.0274C32.0822 6.48942 27.5928 2 22.0548 2H12.0274C6.48942 2 2 6.48942 2 12.0274V32.0822C2 36.758 5.20041 40.6864 9.53019 41.7962M32.0822 12.0274H40.1269C41.4007 12.0274 42.6267 12.5122 43.556 13.3834L50.5524 19.9425C51.5634 20.8903 52.137 22.2143 52.137 23.6002V37.0959C52.137 39.8649 49.8923 42.1096 47.1233 42.1096M47.1233 42.1096C47.1233 44.8786 44.8786 47.1233 42.1096 47.1233C39.3406 47.1233 37.0959 44.8786 37.0959 42.1096M47.1233 42.1096C47.1233 39.3406 44.8786 37.0959 42.1096 37.0959C39.3406 37.0959 37.0959 39.3406 37.0959 42.1096M19.5479 42.1096C19.5479 44.8786 17.3032 47.1233 14.5342 47.1233C11.7653 47.1233 9.52055 44.8786 9.52055 42.1096C9.52055 42.0043 9.52379 41.8998 9.53019 41.7962M19.5479 42.1096C19.5479 39.3406 17.3032 37.0959 14.5342 37.0959C11.8705 37.0959 9.69198 39.1732 9.53019 41.7962" stroke="#141718" stroke-width="2.5" />
                                <path d="M22.0548 14.5342H17.0411" stroke="#141718" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.0548 24.5616H12.0274" stroke="#141718" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="card-body w-75 text-center pb-0">
                                <h4 >Free Shipping</h4>
                                <p className="card-text mb-0 d-none d-md-block">Order above $200</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardpart col-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="card ms-2 ms-lg-2 px-2  py-4 w-100 flex flex-row align-items-center ">
                            <svg className="card-img-top mb-0 w-25  mb-lg-2" xmlns="http://www.w3.org/2000/svg" width="44" height="36" viewBox="0 0 44 36" fill="none">
                                <rect x="2" y="2" width="40" height="32" rx="4" stroke="#141718" stroke-width="2.5" />
                                <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 18 22)" stroke="#141718" stroke-width="2.5" />
                                <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 32 20)" fill="#141718" />
                                <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 8 20)" fill="#141718" />
                            </svg>
                            <div className="card-body text-center w-75 pb-0">
                                <h4 >Money-back</h4>
                                <p className="card-text mb-0 d-none d-md-block">30 days Return</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardpart col-6 col-md-6 col-lg-3 mb-0 mb-lg-0">
                        <div className="card ms-0 ms-lg-2 px-2  py-4 w-100 flex flex-row align-items-center ">
                            <svg className="card-img-top w-25" xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44" fill="none">
                                <path d="M26 14H10M26 14C30.4183 14 34 17.5817 34 22V34C34 38.4183 30.4183 42 26 42H10C5.58172 42 2 38.4183 2 34V22C2 17.5817 5.58172 14 10 14M26 14V10C26 5.58172 22.4183 2 18 2C13.5817 2 10 5.58172 10 10V14M18 30V26" stroke="#141718" stroke-width="2.5" stroke-linecap="round" />
                            </svg>
                            <div className="card-body text-center w-75 pb-0">
                                <h4 >Secure Payments</h4>
                                <p className="card-text mb-0 d-none d-md-block">Secured by Stripe</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardpart col-6 col-md-6 col-lg-3 mb-0 mb-lg-0">
                        <div className="card ms-2 ms-lg-2 px-2  py-4 w-100 flex flex-row align-items-center">
                            <svg className="card-img-top w-25" xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 40 40" fill="none">
                                <path d="M38 34V30.7081C38 29.0725 37.0042 27.6017 35.4856 26.9942L31.4173 25.3669C29.4857 24.5943 27.2844 25.4312 26.354 27.292L26 28C26 28 21 27 17 23C13 19 12 14 12 14L12.708 13.646C14.5688 12.7156 15.4057 10.5143 14.6331 8.58271L13.0058 4.51444C12.3983 2.99581 10.9275 2 9.29187 2H6C3.79086 2 2 3.79086 2 6C2 23.6731 16.3269 38 34 38C36.2091 38 38 36.2091 38 34Z" stroke="#141718" stroke-width="2.5" stroke-linejoin="round" />
                            </svg>
                            <div className="card-body text-center w-75 pb-0">
                                <h4 >24/7 Support</h4>
                                <p className="card-text mb-0 d-none d-md-block">Contact Anytime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service