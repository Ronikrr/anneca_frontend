import React, { useEffect } from 'react';

const Contactus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-light py-5" >
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-success mb-4" style={{ fontSize: '2rem' }}>Contact Us</h3>
                <p className="h4 mb-3">+91 94279 21383</p>
                <p className="h5 text-muted">
                    Monday to Saturday · 10am - 7pm · India Time
                </p>
                <div className="mt-2 text-center">
                    <p className="text-muted">
                        We're here to help! Feel free to reach out to us during our service hours.
                    </p>
                    <p className="text-muted">
                        Need to contact us? Just send us an e-mail at <b>annecafashion06@gmail.com</b>
                    </p>
                </div>
                <p className="text-muted text-center" style={{ fontSize: '1rem' }}>
                    Our goal is to keep you happy. We aim to respond to your queries with lightning speed, but in any case, give us a few hours, and you will hear from us most certainly.
                </p>
                <h6>Address: 30, 2nd floor, 2nd gali, new estate, near T.V Coumpund, opp pani tanki, Road No-6 udhna-Surat-394210</h6>
            </div>
        </div>
    );
};

export default Contactus;
