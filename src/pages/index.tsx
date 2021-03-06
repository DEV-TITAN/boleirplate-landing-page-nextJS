import { About } from "../components/About";
import { BackToTop } from "../components/BackToTop";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        {/* Counts
        About Video
        Clients
        Testimonials
        Services
        Cta
        Portfolio
        Team
        Pricing
        Frequently Asked Questions */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}