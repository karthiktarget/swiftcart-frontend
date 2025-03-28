import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/LoginSignupPage.css";
import googleicon from "../assets/googleicon.png";
import facebookicon from "../assets/facebookicon.png";

const LoginSignupPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    if (isSignup && (!formData.name || !formData.dob)) {
      alert("Please fill in all required fields for registration.");
      return;
    }

    console.log(`${isSignup ? "Signed up" : "Logged in"} as:`, formData.email);
    console.log("Remember me:", rememberMe);

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", formData.email);
    }

    navigate("/");
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="login-signup-page">
      <div className="login-signup-container">
        <h2>{isSignup ? "Create an Account" : "Login to SwiftCart"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {!isSignup && (
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          )}

          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        {/* Google & Facebook Buttons */}
        <div className="social-buttons">
          <button
            className="google-btn"
            onClick={() => alert("Google Login (Mock)")}
          >
            <img src={googleicon} alt="google" />
          </button>
          <button
            className="facebook-btn"
            onClick={() => alert("Facebook Login (Mock)")}
          >
            <img src={facebookicon} alt="facebook" />
          </button>
        </div>

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login here" : "Register here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
