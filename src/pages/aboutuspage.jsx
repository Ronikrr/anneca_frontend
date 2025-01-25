import React, { useEffect } from 'react';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-light py-5" style={{ minHeight: 'calc(100vh - 56px)', paddingBottom: '4rem' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>

                <h2 className="text-primary mb-4" style={{ fontSize: '2.5rem', textAlign: 'center' }}>About Us</h2>

                <h3 className="text-success mb-4" style={{ fontSize: '2rem', textAlign: 'center' }}>Who is Anneca Fashion?</h3>
                <h6 className='text-uppercase'>sole proprietorship</h6>
                <h6>Pancard Number:-ASQPD8806R</h6>
                <p className="text-muted mb-4">
                    Anneca Fashions is a dream come true for Vijay Dobariya. A few years ago, while working in fashion design, he realized something was missing. He thought, "I could do it better." Born out of necessity, Anneca Fashions took inspiration from the monotonous clothing available for kids in India. Little did we know how much fun we would have along the way!
                </p>
                <p className="text-muted mb-4">
                    Anneca FASHION is an online store dedicated to all you lovely kids and mothers who throw the house upside down, trying to find the best attire for every occasion. The best thing about shopping online is the ease of sitting on your couch and letting your fingers do the magic.
                </p>
                <p className="text-muted mb-4">
                    We aim to provide top-notch customer service. Please feel free to leave suggestions & comments at <a href="mailto:annecafashion06@gmail.com"><b>annecafashion06@gmail.com</b></a>. We would love to hear from you!
                </p>

                <h3 className="text-success mb-4" style={{ fontSize: '2rem', textAlign: 'center' }}>About Our Store</h3>
                <p className="text-muted">
                    Embrace the joy of growing up in our curated collection of enchanting ethnic and party wear for kids aged 0-15. Crafted with care in India, loved by families worldwide.
                </p>
                

            </div>
        </div>
    );
};

export default AboutUs;
