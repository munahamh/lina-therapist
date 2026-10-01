import { useState } from "react"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Icon from "../components/ui/Icon"

export default function ContactSection() {
  const [contactSubmitted, setContactSubmitted] = useState(false)
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <Eyebrow>لنفتح باب الحديث</Eyebrow>
          <h2>
            لديك سؤال؟
            <br />
            <em>اكتب لنا.</em>
          </h2>
          <p>
            استخدم النموذج لمعاينة تجربة التواصل. هذا المشروع للعرض فقط، ولا
            تُرسل الرسائل من خلاله.
          </p>
          <div className="contact-mark" aria-hidden="true">
            <Icon name="message" size={44} />
          </div>
        </div>
        <form
          className="contact-form reveal"
          onSubmit={(event) => {
            event.preventDefault()
            setContactSubmitted(true)
          }}
        >
          <div className="form-row">
            <label htmlFor="contact-name">
              الاسم
              <input
                id="contact-name"
                name="name"
                maxLength={100}
                placeholder="اسمك"
                autoComplete="name"
                required
                onChange={() => setContactSubmitted(false)}
              />
            </label>
            <label htmlFor="contact-email">
              البريد الإلكتروني
              <input
                id="contact-email"
                name="email"
                type="email"
                dir="ltr"
                maxLength={200}
                placeholder="name@example.com"
                autoComplete="email"
                required
                onChange={() => setContactSubmitted(false)}
              />
            </label>
          </div>
          <label htmlFor="contact-message">
            الرسالة
            <textarea
              id="contact-message"
              name="message"
              maxLength={3000}
              rows={5}
              placeholder="بماذا تحب أن تبدأ؟"
              required
              onChange={() => setContactSubmitted(false)}
            />
          </label>
          <div className="form-footer">
            <Button type="submit">معاينة الإرسال</Button>
            <span>لن تُرسل بياناتك فعليًا.</span>
          </div>
          {contactSubmitted && (
            <p className="form-feedback" role="status">
              <Icon name="check" size={18} /> اكتملت المعاينة. لم تُرسل الرسالة؛
              هذا نموذج تصوّري فقط.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
