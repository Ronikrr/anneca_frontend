import React, { useMemo, useState } from "react";
import { Tabs, Tab, Button, Form } from "react-bootstrap";
import { useGetProductReviewQuery, useProductReviewMutation } from "../../redux/apiSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const ADDREVIEW = [
  {
    rating: 3,
  },
];
const Productreview = ({ description }) => {
  const [rating, setRating] = useState([]);
  const [newReview, setNewReview] = useState("");
  const { productId } = useParams();

  const [creayereview, { isLoading }] = useProductReviewMutation();
  const { data: reviews, refetch } = useGetProductReviewQuery({ productId });

  const handleAddReview = async () => {
    try {
      const response = await creayereview({
        rating: rating,
        comment: newReview,
        productId: productId
      }).unwrap();
      refetch();
      setNewReview("")
      toast.success('Review added successful!');
    } catch (err) {
      toast.error('Failed to add review');
    }
  };
  return (
    <div className="">

      <div className="container productreview p-1 mt-4">
        {/* <h4>Product Details</h4> */}
        <Tabs defaultActiveKey="description" id="product-tabs">
          <Tab eventKey="description" title="Description">
            <div dangerouslySetInnerHTML={{ __html: description }} className="mb-3"></div>
          </Tab>

          <Tab eventKey="reviews" title="Reviews">
            <div className="mt-3">
              {/* {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index} className="mb-2">
                    <p>{review}</p>
                  </div>
                ))
              ) : ( 
                <p>No reviews yet.</p>
              )} 
              <Button href="#login_modal" data-bs-toggle="modal" className="mt-2" onClick={handleAddReview}>
                Add Review
              </Button> */}
              <div className="product-review">
                {/* Display reviews */}
                {reviews?.reviews.length > 0 ? (
                  reviews?.reviews.map((review, index) => (
                    <div key={index} className="mb-3 ">
                      <div className="d-flex align-items-center mb-2">
                        {review.image && (
                          <img
                            src={review.image}
                            alt={review.name}
                            style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
                          />
                        )}
                        <div>
                          <strong>{review.name}</strong>
                          <br />
                          {/* <span>{review.time}</span> */}
                        </div>
                      </div>

                      <div className="t-rating">
                        {[0, 1, 2, 3, 4].map((star, i) => (
                          <i
                            key={i}
                            className={star < review.rating ? "bi bi-star-fill text-warning me-1" : "bi bi-star text-warning me-1"}
                          ></i>
                        ))}
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
              <Form.Group controlId="newReview">
                <Form.Label>Add a Review</Form.Label>
                  <div className="col-12 col-lg-3 mb-4 mb-lg-0">
                    <div className="t-rating mt-2">
                      {[1, 2, 3, 4, 5].map((r, j) => {
                        return r <= rating ? (
                          <i key={j} onClick={() => setRating(j+1)} class="bi bi-star-fill cursor-pointer text-warning me-1"></i>
                        ) : (
                          <i key={j} onClick={() => setRating(j+1)} class="bi bi-star cursor-pointer text-warning me-1"></i>
                        );
                      })}
                    </div>
                  </div>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Write your review here"
                  className="mt-4"
                />
              </Form.Group>
              <Button onClick={handleAddReview} className="mt-2">
                Save
              </Button>

            </div>
          </Tab>
        </Tabs>


      </div>

      {/* modal */}
      <div className="modal fade" id="login_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">

              <Form.Group controlId="newReview">
                <Form.Label>Add a Review</Form.Label>
                {ADDREVIEW.map((v, i) => (
                  <div key={i} className="col-12 col-lg-3 mb-4 mb-lg-0">
                    <div className="t-rating mt-2">
                      {[0, 1, 2, 3, 4].map((r, j) => {
                        return r < r.rating ? (
                          <i key={j} class="bi bi-star-fill text-warning me-1"></i>
                        ) : (
                          <i key={j} class="bi bi-star text-warning me-1"></i>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Write your review here"
                  className="mt-4"
                />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Productreview;
