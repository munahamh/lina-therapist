import Eyebrow from "../components/ui/Eyebrow"
import SupportIllustration from "../components/SupportIllustration"
import { supportAreas } from "../data/content"

export default function SupportSection() {
  return (
    <section
      id="support"
      className="support-section section-padding"
      aria-labelledby="support-title"
    >
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <Eyebrow>مساحات نعمل عليها معًا</Eyebrow>
            <h2 id="support-title">
              لكل ما تمرّ به،
              <br />
              <em>مساحة للفهم.</em>
            </h2>
          </div>
          <p>
            قد لا يكون لما تشعر به اسم واضح بعد. لا بأس؛ يمكننا أن نبدأ من حيث
            أنت.
          </p>
        </div>
        <div className="support-grid">
          {supportAreas.map((area) => (
            <article
              key={area.number}
              className={"support-card " + area.tone + " reveal"}
              aria-labelledby={"support-" + area.number}
            >
              <div className="support-card-top">
                <SupportIllustration type={area.icon} />
                <span className="card-number" aria-hidden="true">
                  {area.number}
                </span>
              </div>
              <div className="support-card-content">
                <h3 id={"support-" + area.number}>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <div className="card-line" aria-hidden="true">
                <span />
              </div>
            </article>
          ))}
        </div>
        <p className="support-footnote reveal">
          <span aria-hidden="true" />
          لا تحتاج أن تختار تصنيفًا لتبدأ الحديث.
        </p>
      </div>
    </section>
  )
}
