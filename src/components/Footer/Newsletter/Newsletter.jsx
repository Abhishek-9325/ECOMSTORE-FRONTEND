import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear any previous validation error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      // Submit the form (you may want to add logic here to send data to server)
      setSubmitted(true);
    }
  };

  const validateEmail = (email) => {
    // Very basic email validation, you can enhance it as needed
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        {!submitted ? (
          <>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={handleChange}
              />
              <button type="submit">Subscribe</button>
            </form>
            {error && <span className="error">{error}</span>}
          </>
        ) : (
          <p className="thank-you-message">
            Thank you for subscribing! We shall contact you soon!
          </p>
        )}
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
