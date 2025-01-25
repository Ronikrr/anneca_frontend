import React, { useEffect } from 'react';

const CustomerService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-light py-5">
            <div className="d-flex justify-content-center">
                <div className="card" style={{ maxWidth: '800px', width: '100%' }}>
                    <div className="card-body text-center">
                        <h3 className="card-title mb-4 text-success">CUSTOMER SERVICE</h3>
                        <p className="card-text h4 mb-3">+91 94279 21383</p>
                        <p className="card-text h5 text-muted">
                            Monday to Saturday · 10am - 7pm · India Time
                        </p>
                        <div className="mt-2">
                            <p className="card-text text-muted">
                                We're here to help! Feel free to reach out to us during our service hours.
                            </p>
                            <p className="card-text text-muted">
                                You can call us at the above number, or send us an email at <b>annecafashion06@gmail.com</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;
