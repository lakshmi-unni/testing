import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import{Card} from 'react-bootstrap'

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://bluehour-admin-dash.herokuapp.com/auth/login",
        { username, password },
        config
      )

      console.log("data",data)
      localStorage.setItem("userInfo", JSON.stringify(data))
      if (localStorage.userInfo) {
        navigate('/user')
    }
    } catch (error) {}
  };

  return (
    
    <div className="container">
      <form>
        <h3>Log in</h3>

        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            value={username}
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <br />
        <button  onClick={submitHandler} type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;