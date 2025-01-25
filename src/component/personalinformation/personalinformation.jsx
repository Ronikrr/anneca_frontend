import React from 'react'

const Personalinformation = () => {
  return (
    <div className="py-4">
      <div className="container form-personal">
        <div className="d-flex flex-wrap justify-content-center">
          <div class="card col-12 col-md-6">
            <div class="card-header">Personal</div>
            <div className="card-body">
              <form action="" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="streetAddress"
                    placeholder="Street Address"
                    required=""
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-auto">
                    <label htmlFor="city">Town / City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Town / City"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md6">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-auto">
                    <label htmlFor="postalCode">Postcode / Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="postalCode"
                      placeholder="Postcode / Zip"
                      required=""
                    />
                  </div>
                </div>
                <div className="title">

                  <button type="submit" className="d-flex justify-content-center mx-auto mt-4 mt-lg-2">
                    Proceed to Next Step
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalinformation
