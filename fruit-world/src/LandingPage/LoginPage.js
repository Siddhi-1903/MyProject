import React, { useState } from "react";
import "./LoginPage.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">🍎 FruitMart<br/>Login</h1>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <label>Login As</label>
          <select 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          New User? <a href="/register">Create Account</a>
        </p>
      </div>
    </div>
  );
}
