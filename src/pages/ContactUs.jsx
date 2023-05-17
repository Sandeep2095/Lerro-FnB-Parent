import React from "react";
import Banner from "../components/shared/banner/Banner";
import bannerImg from "../assets/contactpage.jpg";

const ContactUs = () => {
  return (
    <div>
      <Banner title={"Contact Us"} bgImg={bannerImg} />
      <div className="row justify-content-evenly mx-auto my-4 p-2">
        <div className="col-sm-4">
          <h4
            style={{ letterSpacing: "2px", fontFamily: "Poppins" }}
            className="text-uppercase fw-light"
          >
            send us message
          </h4>
          <div class="row contact-form-input-container">
            <input
              type="email"
              class="form-control"
              placeholder="Name"
              id="inputEmail4"
            />
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              id="inputEmail4"
            />
            <input
              type="email"
              class="form-control"
              placeholder="Phone"
              id="inputEmail4"
            />
            <textarea
              type="email"
              className="form-control my-2 p-2"
              placeholder="Message"
              id="inputEmail4"
            />
            <button type="submit" className="btn btn-warning my-4">
              Submit
            </button>
          </div>
        </div>
        <div className="col-sm-4">
          <h4
            style={{ letterSpacing: "2px", fontFamily: "Poppins" }}
            className="text-uppercase fw-light"
          >
            Contact info
          </h4>

          {/* address line */}
          <div className="address-div">
            <h6 className="yell">Address</h6>{" "}
            <p>
              6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi
              110021
            </p>
          </div>

          {/* For Franchise Enquiry */}
          <div className="address-div">
            <h6 className="yell">For Franchise Enquiry</h6>{" "}
            <p>
              Mobile:&nbsp;<span className="yell fw-normal">+91 98745321</span>
              <br />
              Email:&nbsp;
              <span className="yell fw-normal">franchise@domain.in</span>
            </p>
          </div>

          {/* For HR Enquiry */}
          <div className="address-div">
            <h6 className="yell">For HR Enquiry</h6>
            <p>
              Mobile:&nbsp;<span className="yell fw-normal">+91 987654321</span>
              <br /> Email:&nbsp;
              <span className="yell fw-normal">hr@domain.in</span>
            </p>
          </div>

          {/* For Other Enquiry */}
          <div className="address-div">
            <h6 className="yell">For Other Enquiry</h6>{" "}
            <p>
              Phone:&nbsp;<span className="yell fw-normal">7676380000</span>
              <br />
              Email:&nbsp;
              <span className="yell fw-normal">customercare@domain.in</span>
              <br />
              Open: Monday – Saturday 10:30 – 19:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
