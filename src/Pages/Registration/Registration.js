import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../BaseURL/BaseURL";

const Registration = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegistration(e) {
    e.preventDefault();

    if (password === confirmPassword) {
      const response = await fetch(
        "https://myapi.holycareschool.com/api/register",
        // baseURL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      const data = await response.json();
      e.target.reset("");

      if (data.status === true) {
        setMessage("You Are Successfully Register");
        navigate("/login");
      } else {
        setMessage("Something Went Wrong");
        navigate("/registration");
      }
    } else {
      setMessage("Check Your Password");
    }
  }

  return (
    <div className="mx-auto mt-5 card w-75 ">
      <div className="card-header">
        <h3 className="text-start">Registration</h3>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
          {message && (
            <div className="alert alert-primary alert-dismissible fade show w-50">
              <strong>{message}</strong>
            </div>
          )}
        </div>
        <form onSubmit={handleRegistration} className="container w-50">
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold">
                <i className="fas fa-user"></i>
              </div>
              <input
                type="text"
                className="form-control"
                onBlur={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter Your Name"
                required
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold">
                <i className="fas fa-envelope"></i>
              </div>
              <input
                type="email"
                className="form-control"
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold">
                <i className="fas fa-key"></i>
              </div>
              <input
                type="password"
                className="form-control"
                onBlur={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Your Password"
                required
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="input-group">
              <div className="input-group-text fw-bold">
                <i className="fas fa-key"></i>
              </div>
              <input
                type="password"
                className="form-control"
                onBlur={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark fw-bold w-100">
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="fw-bold">
            Already User..? Please{" "}
            <Link className="text-decoration-none" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
