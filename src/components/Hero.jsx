import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import CalculatorCard from './calculator/CalculatorCard.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <div id="calc" className="text-center pt-24 md:pt-0 scroll-mt-32 md:scroll-mt-36">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-burgundy">{t('hero.title')}</h1>
      <p className="mt-3 text-lg sm:text-xl text-burgundy/80">{t('hero.subtitle')}</p>
      <div className="mt-8 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <CalculatorCard />
        </motion.div>
      </div>
    </div>
  )
}
