import type { IconName } from "./ui/Icon"

export default function SupportIllustration({ type }: { type: IconName }) {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      aria-hidden="true"
      className="support-illustration"
    >
      <circle cx="56" cy="56" r="48" fill="currentColor" opacity=".07" />
      <g
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {type === "leaf" && (
          <>
            <path d="M45 77C25 59 39 34 77 28c5 29-8 50-32 49Z" />
            <path d="M37 86c8-21 17-35 32-48M47 65l-2-16M55 54l14-2" />
            <path
              d="M21 68c4 1 7 1 10 0M80 75c4-2 7-4 9-7M27 37l5 3"
              opacity=".5"
            />
          </>
        )}
        {type === "layers" && (
          <>
            <path d="M73 81H44V66c-12-8-16-24-8-35 8-12 29-13 39-1 7 9 7 19 2 30l-4 9v12Z" />
            <path d="M43 42c3-10 19-11 25-2 7 10-3 21-13 16-7-3-5-11 1-12 6-1 8 6 3 8" />
            <path d="M47 81v7M70 81v7M24 50l5-1M82 29l5-3" opacity=".5" />
          </>
        )}
        {type === "link" && (
          <>
            <circle cx="39" cy="37" r="9" />
            <circle cx="74" cy="37" r="9" />
            <path d="M22 78V66c0-11 8-17 17-17 7 0 13 4 17 9M91 78V66c0-11-8-17-17-17-7 0-13 4-17 9" />
            <path d="M38 62v16h13M74 62v16H61M50 69l6-6 6 6M56 63v22" />
            <path d="M18 34l5 2M89 34l5-2" opacity=".5" />
          </>
        )}
      </g>
    </svg>
  )
}
