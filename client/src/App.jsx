import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Courses from './components/sections/Courses'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import Roles from './components/sections/Roles'
import Gamification from './components/sections/Gamification'
import Testimonials from './components/sections/Testimonials'
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
        <HowItWorks />
        <Features />
        <Roles />
        <Gamification />
        <Testimonials />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
