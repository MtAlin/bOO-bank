import React from "react";
import logo from "../assets/logo.svg";
function NavBar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div>
          <img className="w-75" src={logo}></img>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto  d-flex justify-content-between">
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About US
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Solution
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
