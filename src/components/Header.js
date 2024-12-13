import React from "react";
import logo from "../assets/images/logo1.png"; // Replace with your logo path

const Header = () => (
  <header className="navbar navbar-light bg-light shadow-sm">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      {/* Left side: Logo */}
      <div className="d-flex align-items-center">
        <img src={logo} alt="Logo" className="me-3" style={{ height: "40px" }} />
      </div>

      {/* Center: Title */}
      <div className="text-center flex-grow-1">
        <h1 className="h5 fw-bold mb-0">TOGETHER GROW x STUTT</h1>
      </div>

      {/* Right side: Profile icons */}
      <div className="d-flex gap-3">
        <i className="bi bi-cart fs-4"></i>
        <i className="bi bi-person fs-4"></i>
      </div>
    </div>
  </header>
);

export default Header;
