import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"

export default function CTASection({ onBook }: { onBook: () => void }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner reveal">
        <Eyebrow light>مستعد أن تبدأ؟</Eyebrow>
        <h2>
          الخطوة الأولى
          <br />
          <em>تبدأ بمحادثة.</em>
        </h2>
        <p>لا تحتاج إلى أن تكون متأكدًا من كل شيء. يكفي أن تبدأ بالسؤال.</p>
        <Button onClick={onBook} variant="light">
          احجز جلسة تعارف
        </Button>
        <span className="cta-doodle cta-doodle-left" aria-hidden="true">
          <svg viewBox="0 0 165 115" fill="none">
            <path
              d="M6 106c28-3 28-41 49-50 25-11 38 30 56 11 14-15-8-39 14-58 8-7 20-8 34-8"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </section>
  )
}
