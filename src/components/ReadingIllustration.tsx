export default function ReadingIllustration({
  kind,
}: {
  kind: "feelings" | "boundaries"
}) {
  return (
    <svg
      className="reading-illustration"
      viewBox="0 0 100 85"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 49C8 21 38 6 66 12c32 7 34 48 9 60C48 86 16 76 12 49Z"
        fill="#e7efe5"
      />
      <g
        stroke="#587363"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "feelings" ? (
          <>
            <path d="M26 22h46v38H50l-12 9v-9H26V22Z" />
            <path d="M35 34h27M35 43h18" />
            <path d="M63 46c8-9 14 1 0 9-14-8-8-18 0-9Z" fill="#bdd3b8" />
          </>
        ) : (
          <>
            <circle cx="50" cy="43" r="25" strokeDasharray="3 5" />
            <path d="M36 54V41a14 14 0 0 1 28 0v13M30 55h40M41 61v7m18-7v7" />
            <path d="M50 20v-5m29 28h5M21 43h-5" />
          </>
        )}
      </g>
    </svg>
  )
}
