import React, { useEffect } from 'react';

const Areyoudesigner = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-light py-5">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-primary mb-4" style={{ fontSize: '2rem' }}>Are You A Designer?</h3>
                <h4 className="text-success mb-3">Got that creative spark?</h4>
                <p className="text-muted mb-4">
                    We are interested in collaborating with you! If you're a designer, we're all ears for a collaboration! Drop us a line at <a href="mailto:annecafashion06@gmail.com"><b>annecafashion06@gmail.com</b></a>. Share your brand details and portfolio with us—we're excited to hear how your magic can shake up the kids' apparel scene.
                </p>
                <p className="text-muted">
                    Our team will be right on it to fill you in on the next steps. Let's make some fashion waves!
                </p>
            </div>
        </div>
    );
};

export default Areyoudesigner;
