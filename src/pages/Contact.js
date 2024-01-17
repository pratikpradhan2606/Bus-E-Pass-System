/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Base from "../components/Base";

const Contact = () => {
  const form = useRef();

  const notify = () => toast("Submitted Successfully!");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_zc253nt",
        "template_9t1ea4e",
        form.current,
        "1cGbFoeUswaOn1Mcb"
      );

      notify(); // Notify on successful submission
      e.target.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error, e.g., show an error toast
      toast.error("Error submitting form. Please try again later.");
    }
  };

  return (
    <section>
      <div className="container contact">
        <form ref={form} onSubmit={sendEmail} className="form-control card-flex-center-dir-column">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="image"
                />
                <h2>Contact Us</h2>
                <h4>We would love to hear from you!</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="fname">
                    First Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Enter First Name"
                      name="fname"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="lname">
                    Last Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      placeholder="Enter Last Name"
                      name="lname"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">
                    Email:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">
                    Comment:
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="comment"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="toast-container">
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
 