import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const FooterComponent = () => {

  
  return (
    <footer className="bodycontainer">
      <div>
        <div className="container my-5">
          <footer className="text-center text-lg-start text-white">
            <div className="container p-4 pb-0">
              <section className="d-flex justify-content-around flex-wrap">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', padding: '20px' }}>
                  <h6 className="text">E-Pass</h6>
                  <p className="black-text">
                    "In response to the evolving needs of our modern world,
                    our organization has implemented a cutting-edge e-pass
                    system. This digital solution streamlines the process of
                    obtaining and managing passes, providing a secure,
                    efficient, and user-friendly experience for individuals
                    and businesses alike."
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Partners and Affiliates
                  </h6>
                  <p className="text2">
                    <p>Shri tours & travels</p>
                    <p>Rakesh Kalbhor</p>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', padding: '20px' }}>
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <p>
                      <a href="/your-account" className="text-white">
                        Terms of Service
                      </a>
                    </p>
                    <p>
                      <a href="/become-an-affiliate" className="text-white">
                        Privacy Policy
                      </a>
                    </p>
                  </p>
                </div>


                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i>Pune, Maharashtra
                  </p>
                  <p className="email">
                    <i className="fas fa-envelope mr-3"></i> epass2024gmail.com
                  </p>
                  <p className="contact1">
                    <i className="fas fa-print mr-3"></i> +919764979640
                  </p>
                  <p className="contact2">
                    <i className="fas fa-print mr-3"></i> +918180032920
                  </p>
                </div>
                <div className="p-3">
                    © 2024 Copyright:
                    <a className="text-white" href="http://localhost:3000/">
                      Epass.com
                    </a>
                  </div>
                
                <div className="col-md-12 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    href="https://twitter.com/EPass328601"
                    className="changeColor btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="twitter">
                      <BsTwitter />
                    </i>
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    className="changeColor btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="linkedin">
                      <SiLinkedin />
                    </i>
                  </a>

                  <a
                    href="https://facebook.com/profile.php?id=61555757000659"
                    className="changeColor btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                    
                  >
                    <i className="facebook">
                      <FaFacebookF />
                    </i>
                  </a>
                </div>
              </section>

             

              <section className="footerend d-flex justify-content-between align-items-center flex-wrap">
               

                
                
              </section>
              
            </div>
              
          </footer>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
