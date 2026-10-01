import ReadingIllustration from "../components/ReadingIllustration"
import { useCallback, useState } from "react"
import { articles, type ReadingArticle } from "../data/articles"
import { journalImage } from "../data/content"
import ArticleDialog from "../components/ArticleDialog"
import Eyebrow from "../components/ui/Eyebrow"

export default function ReadingSection() {
  const [selected, setSelected] = useState<ReadingArticle | null>(null)
  const closeArticle = useCallback(() => setSelected(null), [])

  return (
    <section
      id="reading"
      className="reading-section"
      aria-labelledby="reading-title"
    >
      <div className="container">
        <div className="reading-heading reveal">
          <div>
            <Eyebrow>مساحة للقراءة</Eyebrow>
            <h2 id="reading-title">
              أفكار تقرّبك
              <br />
              <em>من نفسك.</em>
            </h2>
          </div>
          <p>
            قراءات قصيرة نترك فيها مساحة للسؤال، والتأمل، وفهم التفاصيل الصغيرة
            في يومنا.
          </p>
        </div>
        <div className="reading-grid">
          {articles.map((article, index) => (
            <article
              className={`reading-card reveal${
                index === 0 ? " reading-featured" : ""
              }`}
              key={article.id}
            >
              {index === 0 && (
                <div className="reading-image">
                  <img
                    src={journalImage}
                    alt="دفتر ويد تكتب، في مساحة للتأمل"
                    width={1000}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <div className="reading-card-body">
                {index > 0 && (
                  <ReadingIllustration
                    kind={index === 1 ? "feelings" : "boundaries"}
                  />
                )}
                <div className="reading-meta">
                  <span>{article.category}</span>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <button
                  type="button"
                  className="reading-link"
                  onClick={() => setSelected(article)}
                  aria-label={`اقرأ المقال: ${article.title}`}
                >
                  اقرأ المقال<span aria-hidden="true">←</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && <ArticleDialog article={selected} onClose={closeArticle} />}
    </section>
  )
}
