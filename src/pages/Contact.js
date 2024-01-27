/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Base from "../components/Base";
import axios from "axios";
const Contact = () => {
  const form = useRef();
  const [contact, setContact] = useState({
    fname:'',
    lname:'',
    email:'',
    comment:'',
  });

  const handleChange = (event, property) => {
    //dynamically changing value
    setContact({ ...contact, [property]: event.target.value })
  }
  const notify = async () => {
    try{
      let res = await axios.post("http://localhost:8081/api/contact/save",contact);
      alert(res.data);
      if(res.data===404){
        toast("Something Went Wrong!! Try again!!");
        return;
      }else{
        toast("Thanks! Your response submitted");
      }
    }catch(error){
      console.log(error+" couldd not save feedback")
    }
  }

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
    <Base>
    <section>
      <div className="container contact">
        <form ref={form} onSubmit={sendEmail} className="form-control card-flex-center-dir-column">
          <div className="row transparent">
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
                      onChange={(e) => handleChange(e, 'fname')}
                      value={contact.fname}
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
                      onChange={(e) => handleChange(e, 'lname')}
                      value={contact.lname}
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
                      onChange={(e) => handleChange(e, 'email')}
                      value={contact.email}
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
                      onChange={(e) => handleChange(e, 'comment')}
                      value={contact.comment}
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
    </Base>
  );
};

export default Contact;