import { useEffect, useRef, useState, type FormEvent } from "react"
import Button from "./ui/Button"
import Eyebrow from "./ui/Eyebrow"
import Icon from "./ui/Icon"

export default function BookingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            "button, input, a[href], textarea, select",
          ),
        ).filter((element) => !element.hasAttribute("disabled"))
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === dialogRef.current)
        ) {
          event.preventDefault()
          last.focus()
        } else if (
          !event.shiftKey &&
          (document.activeElement === last ||
            document.activeElement === dialogRef.current)
        ) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKey)
      previousFocus?.focus()
    }
  }, [onClose])

  useEffect(() => {
    dialogRef.current?.focus()
  }, [step])

  function nextFromDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim()) return
    setName(name.trim())
    setStep(3)
  }

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="modal-top">
          <span className="modal-kicker">مسار الحجز التوضيحي</span>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="إغلاق نافذة الحجز"
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="progress-track" aria-label={`الخطوة ${step} من 3`}>
          <span style={{ width: `${step * 33.333}%` }} />
        </div>
        <ol className="booking-steps" aria-label="مراحل الحجز">
          {["نوع الجلسة", "بيانات التواصل", "المراجعة"].map((label, index) => (
            <li
              key={label}
              className={step >= index + 1 ? "booking-step-active" : ""}
              aria-current={step === index + 1 ? "step" : undefined}
            >
              <span>{index + 1}</span>
              {label}
            </li>
          ))}
        </ol>
        {step === 1 && (
          <div className="modal-content" key={step}>
            <Eyebrow>الخطوة ١ من ٣</Eyebrow>
            <h2 id="booking-title">لنبدأ بالتعارف.</h2>
            <p>
              جلسة أولى عن بُعد للحديث عمّا يشغلك، واستكشاف ما قد يناسبك من خطوات.
            </p>
            <div className="booking-choice">
              <span className="choice-icon">
                <Icon name="video" />
              </span>
              <span>
                <strong>جلسة تعارف عن بُعد</strong>
                <small>خيار توضيحي ضمن هذا المشروع</small>
              </span>
              <Icon name="check" size={20} />
            </div>
            <Button onClick={() => setStep(2)} className="modal-action">
              متابعة
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="modal-content" key={step}>
            <Eyebrow>الخطوة ٢ من ٣</Eyebrow>
            <h2 id="booking-title">كيف يمكن التواصل معك؟</h2>
            <p>
              جرّب ملء الحقول لمعاينة تجربة الحجز. لن تُرسل بياناتك إلى أي جهة.
            </p>
            <form onSubmit={nextFromDetails} className="modal-form">
              <label htmlFor="booking-name">الاسم</label>
              <input
                id="booking-name"
                maxLength={100}
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="اسمك"
                required
              />
              <label htmlFor="booking-email">البريد الإلكتروني</label>
              <input
                id="booking-email"
                type="email"
                dir="ltr"
                maxLength={200}
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
                required
              />
              <div className="modal-actions">
                <button
                  type="button"
                  className="back-button"
                  onClick={() => setStep(1)}
                >
                  السابق
                </button>
                <Button type="submit">مراجعة الخطوة</Button>
              </div>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="modal-content" key={step}>
            <Eyebrow>الخطوة ٣ من ٣</Eyebrow>
            <h2 id="booking-title">خطوتك جاهزة.</h2>
            <p>هذه معاينة فقط لمسار الحجز؛ لا يوجد إرسال فعلي أو موعد مؤكّد.</p>
            <div className="review-box">
              <span>
                نوع الجلسة <strong>تعارف عن بُعد</strong>
              </span>
              <span>
                الاسم <strong>{name}</strong>
              </span>
              <span>
                البريد <strong dir="ltr">{email}</strong>
              </span>
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="back-button"
                onClick={() => setStep(2)}
              >
                تعديل البيانات
              </button>
              <Button onClick={onClose}>إنهاء المعاينة</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
