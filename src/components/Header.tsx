import { useEffect, useState } from "react"
import Brand from "./ui/Brand"
import Button from "./ui/Button"
import Icon from "./ui/Icon"

export default function Header({ onBook }: { onBook: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (!menuOpen) return
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false)
    }
    document.addEventListener("keydown", closeMenu)
    window.addEventListener("resize", onResize)
    return () => {
      document.removeEventListener("keydown", closeMenu)
      window.removeEventListener("resize", onResize)
    }
  }, [menuOpen])
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="التنقل الرئيسي"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            عن لينا
          </a>
          <a href="#support" onClick={() => setMenuOpen(false)}>
            مجالات الدعم
          </a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            كيف نبدأ
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            أسئلة شائعة
          </a>
          <a href="#social" onClick={() => setMenuOpen(false)}>
            تواصل معنا
          </a>
          <button
            className="mobile-nav-book"
            onClick={() => {
              setMenuOpen(false)
              onBook()
            }}
          >
            احجز جلسة
          </button>
        </nav>
        <div className="header-actions">
          <Button
            onClick={() => {
              setMenuOpen(false)
              onBook()
            }}
            className="header-book"
          >
            احجز جلسة
          </Button>
          <button
            type="button"
            className="menu-toggle icon-button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={25} />
          </button>
        </div>
      </div>
    </header>
  )
}
