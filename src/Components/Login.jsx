import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "midhun" && password === "test") {
      navigate("/posts");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Instagram</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
