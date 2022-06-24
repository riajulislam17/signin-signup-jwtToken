import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const url = "https://myapi.holycareschool.com/api/login";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          localStorage.setItem("accessToken", data.token);
          console.log(data.token);
          e.target.reset("");
          setMessage("You Are Successfully Login");
          navigate("/home");
        } else {
          setMessage("Check Your Username & Password");
        }
      });
  };

  // async function handleLogin(e) {
  //   e.preventDefault();

  //   const response = await fetch("https://myapi.holycareschool.com/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await response.json();

  //   if (data.status === true) {
  //     e.target.reset("");
  //     localStorage.setItem("token", data.token);
  //     setMessage("You Are Successfully Login");
  //     navigate("/home");
  //   } else {
  //     e.target.reset("");
  //     setMessage("Check Your Username & Password");
  //   }
  // }
  return (
    <div>
      <div className="mx-auto mt-5 card w-75 ">
        <div className="card-header">
          <h3 className="text-start">Login</h3>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            {message && (
              <div className="alert alert-primary alert-dismissible fade show w-50">
                <strong>{message}</strong>
              </div>
            )}
          </div>
          <form onSubmit={handleLogin} className="container w-50">
            <div className="row my-2">
              <div className="input-group">
                <div className="input-group-text fw-bold">
                  <i className="fas fa-envelope"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter Your Password"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark fw-bold w-100">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="fw-bold">
              New User..? Please{" "}
              <Link className="text-decoration-none" to="/registration">
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
