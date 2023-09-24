import React from "react";
import './Contact.css';

export function Contact() {
  return (
    <>
      <div id="contact" class="container-fluid px-5 my-5">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-sm-6 d-none d-sm-block bg-image"></div>

                  <div class="col-sm-6 p-4 bgGrn">
                    <div class="text-center">
                      <div class="h3 fw-light fsize">Contact us</div>

                      <p class="mb-4 text-muted fsizep text--White">
                        Fill out this form
                      </p>
                    </div>

                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Name"
                          data-sb-validations="required"
                        />
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="name:required"
                        >
                          Name is required.
                        </div>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="emailAddress"
                          type="email"
                          placeholder="Email Address"
                          data-sb-validations="required,email"
                        />
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="emailAddress:required"
                        >
                          Email Address is required.
                        </div>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="emailAddress:email"
                        >
                          Email Address Email is not valid.
                        </div>
                      </div>

                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          id="message"
                          type="text"
                          placeholder="Message"
                          style={{ height: "10rem" }}
                          data-sb-validations="required"
                        ></textarea>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="message:required"
                        >
                          Message is required.
                        </div>
                      </div>

                      <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                          <div className="fw-bolder fsize">
                            Thank you for contacting us
                          </div>
                          <p className="fsizep">for more information</p>
                          <a href="https://startbootstrap.com/solution/contact-forms">
                            Click here
                          </a>
                        </div>
                      </div>

                      <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">
                          Error sending message!
                        </div>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-success"
                          id="submitButton"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
