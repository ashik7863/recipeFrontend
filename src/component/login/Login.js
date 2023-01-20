import React, { useEffect, useState } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './LoginStyle.css';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import loader from "../../assets/loaderLogin.gif";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [val, setVal] = useState({
    userid: "",
    password: "",
  });
  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const successNotification = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  function changeData(e) {
    setVal({ ...val, [e.target.name]: e.target.value });
  }
  async function saveData(e) {
    e.preventDefault();
    if (validateForm()) {
      const { userid, password } = val;
      setIsLoading(true);
      const { data } = await axios.post(
        "https://recipe-backend-dnyk.vercel.app/login",
        {
          userid,
          password,
        }
      );
      if (data.status === false) {
        setIsLoading(false);
        toast.error(data.msg, toastOption);
      }
      if (data.status === true) {
        setIsLoading(false);
        localStorage.setItem('login',true);
        navigate('/product');
        toast(data.msg, successNotification);      
      }
    }
  }
  function validateForm() {
    const { userid, password } = val;
    if (userid === "") {
      toast.error("Username and password is required!", toastOption);
      return false;
    } else if (password === "") {
      toast.error("Username and password is required!", toastOption);
      return false;
    }
    return true;
  }
  return (
    <>
      <div className="form-container">
        <form method="POST">
          <div className="brand">
            {isLoading && (
              <>
                <img src={loader} alt="loader" className="loader" />
              </>
            )}
            <h1>Login</h1>
          </div>
          <input
            type="text"
            placeholder="Enter Username"
            name="userid"
            onChange={(e) => changeData(e)}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={(e) => changeData(e)}
          />

          <button onClick={(e) => saveData(e)}>Login</button>
          
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
