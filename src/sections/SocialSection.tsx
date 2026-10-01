import { type ReactNode } from "react"

const channels = [
  {
    id: "instagram",
    name: "Instagram",
    arabic: "إنستغرام",
    description: "مساحة لأفكار قصيرة وتذكيرات لطيفة خلال يومك.",
  },
  {
    id: "facebook",
    name: "Facebook",
    arabic: "فيسبوك",
    description: "مساحة لمشاركة المحتوى والتعرّف على جديد الصفحة.",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    arabic: "لينكدإن",
    description: "مساحة للتواصل المهني ومشاركة الأفكار والخبرات.",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    arabic: "واتساب",
    description: "طريقة مباشرة للاستفسار عن الجلسات والخطوات الأولى.",
  },
] as const

function SocialIcon({ id }: { id: string }) {
  const shapes: Record<string, ReactNode> = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    facebook: (
      <path d="M14 21v-8h3l.5-4H14V7c0-1.2.5-2 2-2h2V2h-3c-3 0-5 2-5 5v2H7v4h3v8" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m4-7v7m0-4c0-4 6-4 6 0v4" />
        <circle cx="7" cy="7" r=".7" fill="currentColor" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.7-5.3A8.5 8.5 0 1 1 20.5 11.5Z" />
        <path d="M8 7c-2 3 3 8 6 8l2-2-3-2-1 1-2-2 1-1-2-2Z" />
      </>
    ),
  }
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes[id]}
    </svg>
  )
}

export default function SocialSection() {
  return (
    <section
      className="social-section"
      id="social"
      aria-labelledby="social-title"
    >
      <div className="container">
        <div className="social-heading reveal">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-line" />
              نلتقي أيضًا هنا
            </span>
            <h2 id="social-title">
              مساحات صغيرة،
              <br />
              <em>لنبقى على تواصل.</em>
            </h2>
          </div>
          <p>أفكار وتذكيرات ومساحات للحديث، أقرب إلى يومك.</p>
        </div>
        <div className="social-grid">
          {channels.map((channel) => (
            <article
              key={channel.id}
              className="social-card reveal"
              aria-label={channel.arabic}
            >
              <span className="social-card-top">
                <span className="social-icon">
                  <SocialIcon id={channel.id} />
                </span>
              </span>
              <span className="social-name" lang="en" dir="ltr">
                {channel.name}
              </span>
              <span className="social-description">{channel.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
