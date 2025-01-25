import React, { useEffect } from 'react'

const Shipping = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">

            <div className="row ">
                <div className="col-12 py-5 px-5 text-capitalize">
                    <div className="title">
                        <h3>Shipping Policy</h3>
                    </div>
                    <div className="privacy_policy_paragraph mt-5">
                        <p>
                            At Annecafashion.com, we make sure that your orders reach you in time. For this we are associated with trusted shipping channels who work 24/7 to help us send packages. There are some facts related to our shipping policy that you must be aware of before placing an order with us.
                        </p>
                        <p>
                            Free Shipping Charges:- For deliveries across India
                        </p>
                        <h6>
                            For deliveries to any other country:
                        </h6>
                        <p>
                            Shop on the International Store Shop Here →
                        </p>
                        <p>
                            Cash On Delivery (COD) - Currently Unavailable
                        </p>
                        <h6>
                            Time taken to deliver your order:
                        </h6>
                        <h6>
                            We get on our toes as soon as you place an order with us. Delivery times are usually as follows:
                        </h6>
                        <p>
                            Your order should reach you in 2 - 6 business days from the date of dispatch.

                        </p>
                        <p>
                            Processing time for each product varies. Your entire order is shipped together once all products are ready to be shipped. The cart page and the checkout shipping page gives an estimated delivery date. Please note, deliveries can sometimes get delayed due to unforeseen circumstances.
                        </p>
                        <h6>
                            Packaging:
                        </h6>
                        <p>
                            All the orders that we ship are carefully packed so that the product retains its quality and reaches you in good shape. We make sure your order is sealed and discreet.
                        </p>
                        <h6>
                            International Shipping:
                        </h6>
                        <p>
                            International shipping is possible. Shop on the International Store Shop Here →
                        </p>
                        <h6>
                            Tampered, Damaged or Opened Packages:
                        </h6>
                        <p>
                            If you receive a shipment that seems tampered, damaged or opened - please do not accept that shipment. Take a photo of the shipment and get in touch with our customer care team at +919427921383 or email us at annecafashion06@gmail.com
                        </p>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Shipping
