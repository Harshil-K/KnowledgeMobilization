import React, { useState } from 'react';
import Layout from '../components/Layout';
import "../styling/FAQ.css"

const faqs = [
  {
    question: "What is Knowledge Mobilization?",
    answer: "Knowledge Mobilization is the process of sharing, translating, and applying knowledge from research into practical use by various stakeholders such as policymakers, practitioners, and the public."
  },
  {
    question: "Who can contribute to the platform?",
    answer: "Researchers, students, community partners, and institutions interested in sharing and utilizing knowledge for societal impact can contribute."
  },
  {
    question: "Is there a cost to use the platform?",
    answer: "No, the platform is free to use for both contributors and readers."
  },
  {
    question: "How do I submit my research project?",
    answer: "You can submit your project through the 'Submit Project' form available on your dashboard after signing up."
  },
  {
    question: "Can I collaborate with others on a project?",
    answer: "Yes, the platform encourages collaboration and allows you to invite others to work on shared projects."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Layout>
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default FAQ;
