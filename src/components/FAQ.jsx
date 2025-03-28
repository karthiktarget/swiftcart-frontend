import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className="toggle-icon">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "How do I track my order?", answer: "You can track your order in the 'Orders' section after logging in." },
    { question: "What is your return policy?", answer: "We offer a 30-day return policy for unused items in original packaging." },
    { question: "How can I contact support?", answer: "Reach out via email at support@swiftcart.com or our Customer Service page." },
    { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, UPI, and PayPal." },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
