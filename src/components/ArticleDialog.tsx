import { useEffect, useRef } from "react"
import type { ReadingArticle } from "../data/articles"
import Icon from "./ui/Icon"
import Eyebrow from "./ui/Eyebrow"

export default function ArticleDialog({
  article,
  onClose,
}: {
  article: ReadingArticle
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialog?.showModal()
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="article-dialog"
      aria-labelledby="article-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      <div className="article-dialog-top">
        <Eyebrow>{article.category}</Eyebrow>
        <button
          className="icon-button"
          type="button"
          onClick={onClose}
          aria-label="إغلاق المقال"
        >
          <Icon name="close" />
        </button>
      </div>
      <article>
        <h2 id="article-title">{article.title}</h2>
        <p className="article-intro">{article.excerpt}</p>
        {article.paragraphs.map((paragraph) => (
          <section className="article-paragraph" key={paragraph.heading}>
            <h3>{paragraph.heading}</h3>
            <p>{paragraph.text}</p>
          </section>
        ))}
      </article>
      <button
        className="button button-outline article-close"
        onClick={onClose}
        type="button"
      >
        العودة إلى مساحة القراءة
      </button>
    </dialog>
  )
}
