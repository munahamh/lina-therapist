import Eyebrow from "../components/ui/Eyebrow"
import Icon, { type IconName } from "../components/ui/Icon"

export default function JourneySection() {
  return (
    <section id="journey" className="journey-section section-padding">
      <div className="container">
        <div className="journey-heading reveal">
          <Eyebrow>خطوة بخطوة</Eyebrow>
          <h2>
            كيف نبدأ<span>؟</span>
          </h2>
          <p>ببساطة، ومن دون تعقيد. البداية مجرد مساحة للتعارف.</p>
        </div>
        <div className="journey-path reveal" aria-label="خطوات البدء">
          <svg
            className="journey-curve journey-curve-desktop"
            viewBox="0 0 900 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M895 50C720 -15 650 110 450 50S175 -10 5 50"
              pathLength="1"
            />
          </svg>
          <svg
            className="journey-curve journey-curve-mobile"
            viewBox="0 0 74 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M37 4C8 65 66 105 37 160S8 275 37 330 37 380 37 396"
              pathLength="1"
            />
          </svg>
          {[
            {
              number: "١",
              icon: "message" as IconName,
              title: "تواصل أولي",
              text: "تشارك ما ترغب به، ونتعرّف إلى سبب تواصلك.",
            },
            {
              number: "٢",
              icon: "heart" as IconName,
              title: "جلسة تعارف",
              text: "نلتقي لنتحدث بهدوء عمّا تحتاجه وتوقعاتك.",
            },
            {
              number: "٣",
              icon: "check" as IconName,
              title: "الخطوات التالية",
              text: "نتفق معًا على ما يبدو مناسبًا لك للمضي قدمًا.",
            },
          ].map((item, index) => (
            <div
              className="journey-step reveal"
              key={item.number}
              style={{ transitionDelay: `${index * 160}ms` }}
            >
              <div className="step-illustration">
                <span className="step-number">{item.number}</span>
                <Icon name={item.icon} size={32} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
