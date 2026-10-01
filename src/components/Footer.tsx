import Brand from "./ui/Brand"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Brand light />
        <p>مساحة للحديث، والفهم، والبداية على مهل.</p>
        <a href="#social" className="footer-social-link">
          قنوات التواصل ↖
        </a>
        <a href="#top" className="back-to-top">
          العودة للأعلى <span>↑</span>
        </a>
      </div>
      <div className="container footer-bottom">
        <span>مشروع تصوّري — جميع البيانات لأغراض العرض</span>
        <span>الصور عناصر توضيحية قابلة للاستبدال ولا تثبت هوية الأخصائية</span>
      </div>
    </footer>
  )
}
