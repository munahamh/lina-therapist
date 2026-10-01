import type { ReactNode } from "react"
import Icon from "./Icon"

export default function Button({
  children,
  onClick,
  href,
  variant = "dark",
  icon = false,
  type = "button",
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: "dark" | "light" | "outline" | "text"
  icon?: boolean
  type?: "button" | "submit"
  className?: string
}) {
  const classes = `button button-${variant} ${className}`
  const content = (
    <>
      {children}
      {icon && (
        <span className="button-icon">
          <Icon name="arrow" size={17} />
        </span>
      )}
    </>
  )
  return href ? (
    <a className={classes} href={href}>
      {content}
    </a>
  ) : (
    <button className={classes} type={type} onClick={onClick}>
      {content}
    </button>
  )
}
