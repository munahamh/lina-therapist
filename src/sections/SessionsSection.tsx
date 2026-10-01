import SessionIllustration from "../components/SessionIllustration"
import Eyebrow from "../components/ui/Eyebrow"
import Icon from "../components/ui/Icon"

export default function SessionsSection() {
  return (
    <section id="sessions" className="sessions-section section-padding">
      <div className="container sessions-grid">
        <div className="sessions-copy reveal">
          <Eyebrow>مكان يناسبك</Eyebrow>
          <h2>
            جلسة قريبة،
            <br />
            <em>أينما كنت.</em>
          </h2>
          <p>
            يمكن أن تبدأ الجلسات عن بُعد، من مكان هادئ يمنحك الخصوصية والراحة.
            المهم أن تجد مساحة تستطيع فيها أن تكون على طبيعتك.
          </p>
          <div className="session-tags">
            <span>
              <Icon name="video" size={19} /> جلسات عن بُعد
            </span>
            <span>
              <Icon name="calendar" size={19} /> وتيرة تناسبك
            </span>
          </div>
          <div className="future-note">
            <span className="future-note-icon">
              <Icon name="calendar" size={20} />
            </span>
            <div>
              <strong>من مكان تشعر فيه بالراحة</strong>
              <p>
                اختر مساحة هادئة واتصالًا مستقرًا لتكون تجربة الحديث أكثر سلاسة.
              </p>
            </div>
          </div>
        </div>
        <div
          className="sessions-visual reveal"
          aria-label="رسم توضيحي لجلسة عن بُعد"
        >
          <div className="session-outer">
            <SessionIllustration />
            <span className="session-badge">
              <Icon name="video" size={22} />
              <span>
                مساحة خاصة
                <br />
                من مكانك
              </span>
            </span>
          </div>
          <span className="session-caption">على مهل، ومن حيث أنت.</span>
        </div>
      </div>
    </section>
  )
}
