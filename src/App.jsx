import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CompareViz from './components/CompareViz.jsx'
import ValueProps from './components/ValueProps.jsx'
import SeoSection from './components/SeoSection.jsx'
import { Reviews, FAQAccordion } from './components/TestimonialsFAQ.jsx'
import Footer from './components/Footer.jsx'

const fadeUp = {
  initial: { opacity: 0, y: 32, scale: 0.985 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: false, amount: 0.3 }
}

export default function App() {
  useEffect(() => {}, [])
  return (
    <div className="min-h-screen bg-softpink">
      <Navbar />
      <main>
        {/* Slide 1: Hero */}
        <motion.section {...fadeUp} className="section min-h-screen md:h-screen snap-start flex flex-col justify-center items-center">
          <Hero />
        </motion.section>
        {/* Slide 2: Comparison */}
        <motion.section {...fadeUp} className="section min-h-screen md:h-screen snap-start flex flex-col justify-center items-center bg-frosted">
          <CompareViz />
        </motion.section>
        {/* Slide 3: Features */}
        <motion.section {...fadeUp} className="section min-h-screen md:h-screen snap-start flex flex-col justify-center items-center">
          <ValueProps />
        </motion.section>
        {/* Slide 4: Content & Trust (SEO + Reviews combined) */}
        <motion.section {...fadeUp} className="section min-h-screen md:h-screen snap-start flex flex-col justify-center items-center">
          <div className="w-full max-w-6xl">
            <SeoSection />
          </div>
        </motion.section>
        {/* Slide 5: FAQ & Footer */}
        <motion.section {...fadeUp} className="section min-h-screen md:h-screen snap-start flex flex-col justify-center items-center">
          <div className="w-full max-w-4xl">
            <FAQAccordion />
            <div className="mt-6">
              <Footer />
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
