import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Brand Name
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="ms-auto">
              <Link className="mx-2 fw-bold text-decoration-none" to="/home">
                Home
              </Link>
              <Link className="mx-2 fw-bold text-decoration-none" to="/about">
                About
              </Link>
            </div>
            <div className="d-flex">
              {token ? (
                <div>
                  <span className="navbar-text fw-bold text-white bg-success p-2 rounded-pill">
                    <i className="fas fa-user"></i> Name
                  </span>
                  <button
                    onClick={logOut}
                    type="submit"
                    className="btn btn-outline-success text-dark fw-bold mx-1"
                  >
                    <i className="fas fa-sign-out-alt"></i> LOG OUT
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button
                    type="submit"
                    className="btn btn-outline-success text-dark fw-bold mx-1"
                  >
                    <i className="fas fa-sign-in-alt"></i> LOG IN
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
