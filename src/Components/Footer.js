import React from "react";
import logo from "../assets/logo.svg";
function Footer() {
  return (
    <div className="container footer   ">
      <div className="row ">
        <div className="col-lg-4 footer-align mb-3">
          <img className="logo" src={logo}></img>
          <p className="p-3 mb-4">
            Crechterwoord K12 182 DK Alknjkcb,<br></br> All Rights Reserved
          </p>
        </div>
        <div className="col-sm">
          <h6>Links</h6>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-sm">
          <h6>Company</h6>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-md">
          <h6>Get in touch</h6>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
        <hr></hr>
      </div>
      <hr></hr>
      <div className="row lastFooter">
        <div className="col-lg-8 d-flex py-3 pl-4">
          <p className="text-center m-0 py-2">
            © 2021 GPT-3. All rights reserved.
          </p>
        </div>
        <div className="col-lg-3 py-3">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
