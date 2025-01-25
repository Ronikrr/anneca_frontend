import React, { useEffect } from 'react';

const Securpayment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-center">
                <div className="card" style={{ maxWidth: '800px', width: '100%' }}>
                    <div className="card-body text-center">
                        <h3 className="card-title mb-4 text-success">SECURE PAYMENT</h3>
                        <h4 className='card-subtitle mb-4'>
                            Your payment information is processed securely using SHA-256 with RSA Encryption
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Securpayment;
