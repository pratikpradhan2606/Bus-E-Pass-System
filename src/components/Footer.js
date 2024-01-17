import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const FooterComponent = () => {
  const myStyle = () => {
    // Add your styling logic here
  };

  return (
    <footer className="bodycontainer">
      <div>
        <div className="container my-5">
          <footer className="text-center text-lg-start text-white">
            <div className="container p-4 pb-0">
              <section className="">
                <div className="row">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text">
                      E-Pass
                    </h6>
                     <p className="black-text">
                      "In response to the evolving needs of our modern world,
                      our organization has implemented a cutting-edge e-pass
                      system. This digital solution streamlines the process of
                      obtaining and managing passes, providing a secure,
                      efficient, and user-friendly experience for individuals
                      and businesses alike."
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  <hr class="w-100 clearfix d-md-none" />

                  {/* <!-- Grid column --> */}
                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      Partners and Affiliates
                    </h6>
                    <p className="text2">
                      <p>Shri tours & travels</p>
                      <p>Rakesh Kalbhor</p>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  <hr class="w-100 clearfix d-md-none" />

                  {/* <!-- Grid column --> */}
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
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
                  {/* <!-- Grid column --> */}
                  <hr class="w-100 clearfix d-md-none" />

                  {/* <!-- Grid column --> */}
                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      Contact
                    </h6>
                    <p>
                      <i class="fas fa-home mr-3"></i>Pune,Maharashtra
                    </p>
                    <p className="email">
                      <i class="fas fa-envelope mr-3"></i> epass2024gmail.com
                    </p>
                    <p className="contact1">
                      <i class="fas fa-print mr-3"></i> +919764979640
                    </p>
                    <p className="contact2">
                      <i class="fas fa-print mr-3"></i> +918180032920
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
                {/* <!--Grid row--> */}
              </section>
              {/* <!-- Section: Links --> */}

              <hr class="my-3"></hr>

              {/* <!-- Section: Copyright --> */}
              <section class="footerend">
                <div class="row d-flex align-items-center">
                  {/* <!-- Grid column --> */}
                  <div class="col-md-7 col-lg-8 text-center text-md-start">
                    {/* <!-- Copyright --> */}
                    <div class="p-3">
                      © 2024 Copyright:
                      <a class="text-white" href="http://localhost:3000/">
                        Epass.com
                      </a>
                    </div>
                    {/* <!-- Copyright --> */}
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    {/* <!-- Facebook --> */}
                    

                    {/* <!-- Twitter --> */}
                    <a
                      href="https://twitter.com/EPass328601"
                      className="btn btn-outline-light btn-floating m-1 text-white"
                      role="button"
                    >
<i className="twitter" ><BsTwitter/></i>                  
  </a>

                    {/* <!-- linkedin --> */}
                    <a
                      href="https://www.linkedin.com/"
                      className="btn btn-outline-light btn-floating m-1 text-white"
                      role="button"
                    >
                        <i className="linkedin" ><SiLinkedin/></i>                  

                    </a>

                    {/* <!-- facebook --> */}
                    <a
                      href="https://facebook.com/profile.php?id=61555757000659"
                      className="btn btn-outline-light btn-floating m-1 text-white"
                      role="button"
                    >
<i className="facebook" ><FaFacebookF/></i>                  
                    </a>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
              </section>
              {/* <!-- Section: Copyright --> */}
            </div>
            {/* <!-- Grid container --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>
        {/* <!-- End of .container --> */}
      </div>
    </footer>
  );
};

export default FooterComponent;
