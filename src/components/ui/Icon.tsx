import type { ReactNode } from "react"

export type IconName = "arrow" | "heart" | "layers" | "link" | "video" | "calendar" | "check" | "close" | "menu" | "plus" | "minus" | "message" | "leaf"
export default function Icon({
  name,
  size = 22,
  className = "",
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
      </>
    ),
    leaf: (
      <>
        <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 20 3c0 9-4 16-9 17Z" />
        <path d="M4 13c7 0 11 4 11 4" />
      </>
    ),
    heart: (
      <>
        <path d="M20.3 8.2c0 4.3-8.3 10.3-8.3 10.3S3.7 12.5 3.7 8.2a4.4 4.4 0 0 1 8.3-2 4.4 4.4 0 0 1 8.3 2Z" />
        <path d="M8.5 12.5c1.1.9 2.3 1.8 3.5 2.6" />
      </>
    ),
    layers: (
      <>
        <path d="M12 3c-4.5 0-8 3.4-8 7.8 0 4.7 3.3 8.8 8 10.2 4.7-1.4 8-5.5 8-10.2C20 6.4 16.5 3 12 3Z" />
        <path d="M8.5 9.5c1 1.3 2.2 2 3.5 2.4 1.3-.4 2.5-1.1 3.5-2.4M9 15.5c1 .6 2 .9 3 .9s2-.3 3-.9" />
      </>
    ),
    link: (
      <>
        <path d="M9.5 14.5 14.5 9.5M8 17H6a4 4 0 0 1 0-8h3m6-2h3a4 4 0 0 1 0 8h-3" />
        <path d="M9 7h3m0 10h3" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="5" width="13" height="14" rx="3" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4m10-4v4M3 10h18m-13 5h3" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4.5 4.5L19 7" />
      </>
    ),
    close: (
      <>
        <path d="M5 5 19 19M19 5 5 19" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    minus: (
      <>
        <path d="M5 12h14" />
      </>
    ),
    message: (
      <>
        <path d="M20 11.5a8 8 0 0 1-8 8 8.7 8.7 0 0 1-3.3-.7L4 20l1.2-4.6A8 8 0 1 1 20 11.5Z" />
        <path d="M8 11.5h8" />
      </>
    ),
  }
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
