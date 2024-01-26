import { useState } from "react";
import "./accordion.css";

export const Accordion = () => {
  const faqs = [
    {
      id: 0,
      question: "What is Frontend Mentor, and how will it help me?",
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
                     frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                     all levels and ideal for portfolio building.`,
    },
    {
      id: 1,
      question: "Is Frontend Mentor free?",
      answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
            option providing access to a range of projects suitable for all skill levels.`,
    },
    {
      id: 2,
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!`,
    },
    {
      id: 3,
      question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
      answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
            channel where you can ask questions and seek support from other community members.`,
    },
  ];

  const [activeId, setActiveId] = useState(-1);

  return (
    <main>
      <section className="top-background" />
      <section className="bottom-background-container">
        <article className="faq-card">
          <div className="title-container">
            <img
              src="assets/images/icon-star.svg"
              alt="Star"
              className="icon-star"
            />
            <h1 className="title">FAQs</h1>
          </div>
          {faqs.map((faq) => {
            return (
              <section className="faq-item" key={faq.id}>
                <button
                  className="question-container"
                  onClick={() => setActiveId(activeId === faq.id ? -1 : faq.id)}
                >
                  <h2 className="question">{faq.question}</h2>
                  <div
                    className={`answer-button ${
                      activeId === faq.id ? "is-open" : ""
                    }`}
                  />
                </button>
                {activeId === faq.id && <p className="answer">{faq.answer}</p>}
                {faq.id !== faqs.at(-1).id && <hr />}
              </section>
            );
          })}
        </article>
      </section>
    </main>
  );
};
