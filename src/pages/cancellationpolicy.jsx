import React, { useEffect } from 'react'

const Cancellation  = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">

            <div className="row ">
                <div className="col-12 py-5 px-5 text-capitalize">
                    <div className="title mb-3">
                        <h3 >Cancellation Policy</h3>
                    </div>
                    <div className="privacy_policy_paragraph mt-5">
                        <h6 className="title mb-3">At mail to:[www.annecafashion.com], we strive to provide the best shopping experience for our customers. We understand that sometimes you may need to cancel an order. Below is our cancellation policy:</h6>
                        
                        <h6>Order Cancellation:</h6>
                        <h6>Before Shipment:</h6>
                        <p>
                            •	You can cancel your order within 12 hours of placing it, as long as it has not been shipped. To cancel your order, please contact our customer support team at annecafashion06@gmail.com or [Customer Support Mo:-9427921383].
                        </p>
                        <p>
                            •	If the order is successfully canceled, you will receive a full refund to your original payment method.
                            After Shipment:
                        </p>
                        <p>
                            •	If your order has already been shipped, it cannot be canceled. However, you may return the product in accordance with our return policy once you have received it.
                        </p>
                        <h6>Cancellation by Us:</h6>
                        <p>
                            •	Order Not Fulfillable: We reserve the right to cancel an order if the product is out of stock, if there are issues with payment, or if the order does not meet our shipping criteria. In such cases, you will be notified via email and will receive a full refund.
                        </p> 
                        <p>
                            • Suspicious or Fraudulent Orders: Orders that appear to be fraudulent or suspicious may be canceled at our discretion. We will notify you immediately if such a cancellation occurs.
                        </p>
                         
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cancellation 
