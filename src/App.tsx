import { useCallback, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BookingModal from "./components/BookingModal"
import useReveal from "./hooks/useReveal"
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import SupportSection from "./sections/SupportSection"
import JourneySection from "./sections/JourneySection"
import SessionsSection from "./sections/SessionsSection"
import ReadingSection from "./sections/ReadingSection"
import FAQSection from "./sections/FAQSection"
import CTASection from "./sections/CTASection"
import ContactSection from "./sections/ContactSection"
import SocialSection from "./sections/SocialSection"

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const openBooking = useCallback(() => setBookingOpen(true), [])
  const closeBooking = useCallback(() => setBookingOpen(false), [])
  useReveal()

  return (
    <div id="top" className="site-shell" dir="rtl">
      <a className="skip-link" href="#main-content">
        انتقل إلى المحتوى
      </a>
      <Header onBook={openBooking} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection onBook={openBooking} />
        <AboutSection />
        <SupportSection />
        <JourneySection />
        <SessionsSection />
        <ReadingSection />
        <FAQSection />
        <CTASection onBook={openBooking} />
        <ContactSection />
        <SocialSection />
      </main>
      <Footer />
      {bookingOpen && <BookingModal onClose={closeBooking} />}
    </div>
  )
}
