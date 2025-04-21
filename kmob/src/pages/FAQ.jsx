import React, { useState } from 'react';
import Layout from '../components/Layout';
import "../styling/FAQ.css"

const faqs = [
    {
      question: "How do I avoid unintentionally harmful or biased language in my writing?",
      answer: "Use inclusive language guides and tools to flag outdated or discriminatory terms. Reread your work for assumptions, stereotypes, or generalizations. Seek feedback from colleagues or sensitivity readers, especially when writing about groups you don’t belong to."
    },
    {
      question: "What should I consider when publishing research that involves vulnerable populations or high-stakes social issues?",
      answer: "Ensure ethical approval and informed consent. Consider long-term impacts on participants and involve community members in shaping your research or reviewing drafts for greater trust and accuracy."
    },
    {
      question: "How can I prepare for criticism or misinterpretation of my research before it’s published?",
      answer: "Write a plain-language summary and a FAQ section. Discuss communication strategies with your institution’s media team to ensure your message is clear and accessible."
    },
    {
      question: "How do I balance academic freedom with potential societal impact or backlash?",
      answer: "Frame your findings thoughtfully without removing meaningful content. Be transparent about impacts and prepared for respectful dialogue."
    },
    {
      question: "Should I include disclaimers or contextual notes in my publication? If so, how?",
      answer: "Yes. Use clear, objective notes to explain limitations or specific conditions. This adds clarity and shows ethical responsibility."
    },
    {
      question: "How can I involve affected communities or stakeholders in reviewing or shaping my research before publication?",
      answer: "Engage meaningfully through feedback sessions or co-authorship. Acknowledge contributions to build trust and accountability."
    },
    {
      question: "How do I protect myself from online harassment or targeted attacks related to my research?",
      answer: "Adjust privacy settings, document harassment, report serious issues, and avoid direct engagement with trolls. Set boundaries and seek support networks."
    },
    {
      question: "What steps should I take if my research is being misrepresented online or in the media?",
      answer: "Respond quickly with a clear statement restating your key findings. Share it via institutional channels and avoid arguing point-by-point."
    },
    {
      question: "How can I respond constructively to public or academic backlash after publication?",
      answer: "Listen openly, acknowledge valid concerns, and correct misrepresentations calmly. Show honesty and willingness to grow."
    },
    {
      question: "Should I issue a clarification or public statement if my work is misunderstood? How do I write one?",
      answer: "Yes. Use clear, accessible language to address key misreadings. Focus on facts and share through multiple appropriate platforms."
    },
    {
      question: "What legal or institutional resources can I turn to if I face reputational damage or threats?",
      answer: "Contact your university’s legal, ethics, or communications departments. Document incidents and seek support from professional organizations if needed."
    },
    {
      question: "How can I repair trust if my research unintentionally caused harm or offense?",
      answer: "Acknowledge the impact, avoid excuses, and commit to learning. Public statements or follow-up articles can show accountability and growth."
    },
    {
      question: "Is retracting or revising my publication a good option—and what are the implications of doing so?",
      answer: "Retract for serious issues; revise for smaller changes. Always be transparent about what changed and why, and consult with editors or advisors."
    },
    {
      question: "How do I navigate publishing controversial work when my institutional leadership discourages it?",
      answer: "Find allies, explore alternate publishing venues, and document conversations with leadership. Stand by your principles and preparation."
    },
    {
      question: "What if I know my findings will be politically unpopular, but scientifically solid?",
      answer: "Prepare multiple communication formats and address misunderstandings with empathy. Stand firm in your evidence while being respectful."
    },
    {
      question: "How should I respond when my research is co-opted by ideologically extreme groups?",
      answer: "Issue a public statement explaining the misuse and original intent. Avoid direct confrontation and focus on context and clarity."
    },
    {
      question: "What’s the best approach if I realize mid-project that my methodology may unintentionally reinforce systemic bias?",
      answer: "Pause and seek external input. Adjust your methods as needed and document the changes transparently in your publication."
    },
    {
      question: "How can I embed accountability and care into my publication process without compromising rigor?",
      answer: "Be transparent, cite diverse sources, acknowledge limitations, and discuss real-world impacts alongside your data."
    },
    {
      question: "How can I responsibly share my work on social media if I suspect it will attract trolling?",
      answer: "Share with care—use summaries, limit comments, and have support to monitor responses. Focus on accurate, respectful communication."
    },
    {
      question: "What does it mean to ‘publish defensively’ and when is it appropriate?",
      answer: "It means anticipating misreadings and addressing them proactively in your publication. This is useful for sensitive or controversial topics."
    },
    {
      question: "How can I help build a culture of care in peer review rather than gatekeeping?",
      answer: "Offer constructive, respectful feedback. Promote transparency and support editors in valuing thoughtful, developmental reviews."
    },
    {
      question: "How should I handle conflicting peer review comments—especially when one suggests removing something for sensitivity and another demands boldness?",
      answer: "Balance both perspectives. Add context or reframe language, and explain your decisions in your response letter to show thoughtfulness."
    },
    {
      question: "What if I’m being called out post-publication for something that wasn’t considered problematic at the time of writing?",
      answer: "Acknowledge that norms evolve. Reflect, and consider a follow-up statement to share your growth and understanding."
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
