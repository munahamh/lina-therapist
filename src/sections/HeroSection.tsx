import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Icon from "../components/ui/Icon"
import { heroImage } from "../data/content"

export default function HeroSection({ onBook }: { onBook: () => void }) {
  return (
    <section className="hero section-padding" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>هنا، يمكنك أن تبدأ على مهل</Eyebrow>
          <span className="concept-label">لينا · مشروع تصوّري</span>
          <h1 id="hero-title">
            مساحة آمنة
            <br />
            لتفهم نفسك،
            <br />
            <em className="hero-highlight">
              وتبدأ بطريقتك.
              <svg
                className="hero-underline"
                viewBox="0 0 360 22"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M5 15C85 3 225 2 355 12" pathLength="1" />
              </svg>
            </em>
          </h1>
          <p>
            الدعم النفسي ليس طريقًا واحدًا للجميع. هنا مساحة للحديث، والفهم،
            واكتشاف ما تحتاجه بخطوات تشبهك.
          </p>
          <div className="hero-actions">
            <Button onClick={onBook}>احجز جلسة تعارف</Button>
            <Button href="#sessions" variant="text" icon={false}>
              تعرّف على طريقة الجلسات <Icon name="arrow" size={18} />
            </Button>
          </div>
          <div className="hero-note">لا تحتاج أن تعرف كل الإجابات لتبدأ.</div>
        </div>
        <div className="hero-visual">
          <div
            className="hero-photo-layer hero-photo-layer-back"
            aria-hidden="true"
          />
          <div
            className="hero-photo-layer hero-photo-layer-front"
            aria-hidden="true"
          />
          <div className="hero-photo-wrap">
            <img
              width={1200}
              height={1200}
              src={heroImage}
              alt="زاوية جلوس هادئة بنباتات وضوء طبيعي؛ صورة توضيحية قابلة للاستبدال"
              fetchPriority="high"
            />
          </div>
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-sticker" aria-hidden="true">
            <svg
              className="hero-leaf"
              width="27"
              height="31"
              viewBox="0 0 32 36"
              fill="none"
            >
              <path
                d="M10 29C1 22 5 9 26 4c3 15-3 25-16 25Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 33C12 24 16 18 23 11M13 23l-1-8M17 18l7-1"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span>
              على
              <br />
              مهلك
            </span>
          </div>
          <span className="hero-dot hero-dot-one" />
          <span className="hero-dot hero-dot-two" />
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true" />
    </section>
  )
}
