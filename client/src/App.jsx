import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Courses from './components/sections/Courses'
import Pricing from './components/sections/Pricing'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import Roles from './components/sections/Roles'
import Gamification from './components/sections/Gamification'
import About from './components/sections/About'
import FAQ from './components/sections/FAQ'
import ContactForm from './components/sections/ContactForm'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <Pricing />
        <HowItWorks />
        <Features />
        <Roles />
        <Gamification />
        <About />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
