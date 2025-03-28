import React, { useState } from "react";
import "../styles/FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    queryType: "Order Issue",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      email: "",
      queryType: "Order Issue",
      message: "",
    });
  };

  return (
    <div className="feedback-container">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Query Type:</label>
        <select name="queryType" value={formData.queryType} onChange={handleChange}>
          <option>Order Issue</option>
          <option>Payment</option>
          <option>General Query</option>
          <option>Suggestion</option>
        </select>

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your issue or suggestion..."
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
