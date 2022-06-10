import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("user")
      .then((response) => {
        console.log(response);
      })
      // .catch((error) => {
      //   console.log(error);
      //   if (error.response.status === 401) {
      //     localStorage.removeItem("token");
      //     navigate("/login");
      //   }
      // });
  }, []);
  return (
    <div>
      <h1 className="text-center">About Us</h1>
    </div>
  );
};

export default About;
