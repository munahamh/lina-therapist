import type { IconName } from "../components/ui/Icon"

export const heroImage =
  "https://images.unsplash.com/photo-1718070477385-eed35e367ec8?auto=format&fit=crop&w=1200&q=85"
export const journalImage =
  "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?auto=format&fit=crop&w=1000&q=85"

export const supportAreas: {
  number: string
  title: string
  description: string
  icon: IconName
  tone: string
}[] = [
  {
    number: "01",
    title: "القلق والضغط النفسي",
    description: "مساحة لفهم ما يثقل يومك، والتعامل معه بخطوات تناسب إيقاعك.",
    icon: "leaf",
    tone: "card-cream",
  },
  {
    number: "02",
    title: "فهم الذات والمشاعر",
    description: "وقت للتوقف، والإصغاء لما تشعر به، والتعرّف إلى نفسك عن قرب.",
    icon: "layers",
    tone: "card-sage",
  },
  {
    number: "03",
    title: "العلاقات والحدود الشخصية",
    description: "نستكشف معًا ما تحتاجه في علاقاتك، وكيف تعبّر عنه بوضوح.",
    icon: "link",
    tone: "card-pale",
  },
]

export const questions = [
  {
    question: "كيف تكون الجلسة الأولى؟",
    answer:
      "نبدأ بالتعارف والحديث عمّا دفعك لطلب الدعم. يمكنك مشاركة ما يناسبك فقط، وسنتحدث عن توقعاتك والخطوات الممكنة من دون استعجال.",
  },
  {
    question: "هل يمكن عقد الجلسات عن بُعد؟",
    answer:
      "نعم، صُمّمت الجلسات لتكون متاحة عن بُعد في مساحة خاصة وهادئة تختارها أنت. تفاصيل الموعد وطريقة الاتصال تُحدَّد عند تأكيد الحجز الفعلي.",
  },
  {
    question: "كيف أحجز موعدًا؟",
    answer:
      "يمكنك استكشاف مسار الحجز التوضيحي من زر «احجز جلسة». هذا الموقع مشروع تصوّري، لذلك لا تُرسل الطلبات ولا تُحجز مواعيد فعلية من خلاله.",
  },
  {
    question: "هل أحتاج أن أعرف ما سأقوله قبل الجلسة؟",
    answer:
      "ليس بالضرورة. يكفي أن تبدأ من حيث أنت الآن. يمكن للجلسة الأولى أن تكون مساحة لترتيب الأفكار وفهم ما ترغب بالحديث عنه.",
  },
]
