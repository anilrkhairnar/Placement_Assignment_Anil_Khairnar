import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      const token = response.data.token;
      if (token) {
        navigate("/dashboard");
      }
      console.log(
        "DEMO TEST\n\nEmail: eve.holt@reqres.in\nPassword: cityslicka"
      );
    } catch (error) {
      alert("check console");
      console.log(
        "DEMO TEST\n\nEmail: eve.holt@reqres.in\nPassword: cityslicka"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
