import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import { journalImage } from "../data/content"

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <div className="about-image-layer" aria-hidden="true" />
          <div className="about-image">
            <img
              width={1000}
              height={1200}
              decoding="async"
              src={journalImage}
              alt="يد تكتب في دفتر؛ صورة توضيحية وليست صورة للأخصائية"
              loading="lazy"
            />
          </div>
          <span className="about-image-caption">مساحة للإصغاء والتأمل</span>
          <div className="about-decor" aria-hidden="true" />
        </div>
        <div className="about-copy reveal">
          <Eyebrow light>تعال نتعارف</Eyebrow>
          <h2>
            أهلًا،
            <br />
            <em>أنا لينا.</em>
          </h2>
          <p className="about-lead">
            أؤمن بأن لكل شخص قصته وإيقاعه الخاص. في جلساتنا، نترك مساحة لما تمرّ
            به، ونبحث معًا عن فهم أعمق لما تحتاجه الآن.
          </p>
          <p className="about-reassurance">
            لست بحاجة إلى ترتيب كل أفكارك قبل أن تبدأ.
            <strong>يكفي أن تأتي كما أنت.</strong>
            <span>ومن هناك نبدأ الحديث.</span>
          </p>
          <div className="credentials">
            <div>
              <span>مساحة الحديث</span>
              <strong>نبدأ مما يهمّك أنت</strong>
            </div>
            <div>
              <span>إيقاع الجلسات</span>
              <strong>خطوة بخطوة، دون استعجال</strong>
            </div>
          </div>
          <p className="about-concept">
            لينا شخصية افتراضية ضمن نموذج تصميم؛ تُضاف بيانات الأخصائية المعتمدة
            عند تخصيص الموقع.
          </p>
          <Button href="#support" variant="light">
            اكتشف مجالات الدعم
          </Button>
        </div>
      </div>
      <svg
        className="about-wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#FAF9F4"
          d="M0 55 C210 100 405 87 635 47 C895 0 1110 12 1440 62 L1440 100 L0 100Z"
        />
      </svg>
    </section>
  )
}
