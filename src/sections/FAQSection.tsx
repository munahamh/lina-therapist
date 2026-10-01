import { useState } from "react"
import Eyebrow from "../components/ui/Eyebrow"
import Icon from "../components/ui/Icon"
import { questions } from "../data/content"

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)
  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container faq-grid">
        <div className="faq-heading reveal">
          <Eyebrow>قبل أن تبدأ</Eyebrow>
          <h2>
            أسئلة
            <br />
            <em>قد تخطر ببالك.</em>
          </h2>
          <p>وإن كان لديك سؤال آخر، يمكنك ترك رسالة في الأسفل.</p>
          <div className="faq-doodle" aria-hidden="true">
            <svg viewBox="0 0 190 130" fill="none">
              <path
                d="M17 84C31 29 79 13 111 37c24 19 4 67-31 53-19-8-3-31 12-20 25 19 42 24 79-18"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="m159 46 13 5-5 13"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="faq-list reveal">
          {questions.map((item, index) => (
            <div
              className={`faq-item ${openQuestion === index ? "faq-open" : ""}`}
              key={item.question}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={openQuestion === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle">
                    <Icon
                      name={openQuestion === index ? "minus" : "plus"}
                      size={19}
                    />
                  </span>
                </button>
              </h3>
              <div
                className="faq-answer"
                id={`faq-answer-${index}`}
                hidden={openQuestion !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
