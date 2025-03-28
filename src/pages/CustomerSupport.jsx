import React from "react";
import ChatWidget from "../components/ChatWidget";
import FeedbackForm from "../components/FeedbackForm";
import "../styles/CustomerSupport.css";

const CustomerSupport = () => {
  return (
    <div className="customer-support-page">
      <h1>Customer Support</h1>
      <p>Need help? Chat with us or browse our FAQs below!</p>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>How do I track my order?</li>
          <li>What is the return policy?</li>
          <li>How can I change my shipping address?</li>
          <li>How do I contact support?</li>
        </ul>
      </div>

      <div className="cs-email">
        <h1>For Anymore Queries</h1>
        <a href="https://puginarug.com/">
          <p>Send us an email to support@swiftcart.com</p>
        </a>
      </div>

      {/* Customer Feedback Form */}
      <FeedbackForm />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default CustomerSupport;
