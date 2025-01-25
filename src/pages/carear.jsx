import React, { useEffect } from 'react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        // style={{ minHeight: 'calc(100vh - 56px)', paddingBottom: '4rem' }}
        <div className="bg-light py-5" >
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-primary mb-4" style={{ fontSize: '2rem' }}>Careers</h3>
                <h4 className="mb-3">Work at Anneca Fashion!</h4>
                <p className="text-muted mb-3">
                    Please email us at <a href="mailto:annecafashion06@gmail.com"><b>annecafashion06@gmail.com</b></a> with your CV or Resume. We would love to know about you and how you can make Little Muffet more awesome!
                </p>
                <p className="text-muted">
                    Once we have your details, our team will get in touch with you with the next steps.
                </p>
            </div>
        </div>
    );
};

export default Careers;
