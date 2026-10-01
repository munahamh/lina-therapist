export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="لينا — العودة إلى البداية"
    >
      <span className="brand-mark">
        <svg
          width="31"
          height="36"
          viewBox="0 0 31 36"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M15.2 32C4 28 2.5 18 7.2 11.5c4.5-6.2 12.9-4.6 16.5-9.2 3.5 10.3-1.3 23-12.1 26.1"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M9.5 27.5c4-5.3 8-9.8 13-14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="brand-name">
        <span className="brand-wordmark">
          لينا
          <span className="brand-period" aria-hidden="true" />
        </span>
        <small>مساحة للدعم النفسي</small>
      </span>
    </a>
  )
}
