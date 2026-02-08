import { ShieldCheck, Sigma, Database } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import { useEffect, useRef, useState } from 'react'

const items = [
  { titleKey: 'vp.card1.title', descKey: 'vp.card1.desc', Icon: ShieldCheck },
  { titleKey: 'vp.card2.title', descKey: 'vp.card2.desc', Icon: Sigma },
  { titleKey: 'vp.card3.title', descKey: 'vp.card3.desc', Icon: Database, counter: true }
]

export default function ValueProps() {
  const { t } = useLanguage()
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
  }
  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 }
  }
  const Count = () => {
    const ref = useRef(null)
    const [val, setVal] = useState(0)
    const intervalRef = useRef(null)
    const inView = useInView(ref, { margin: '0px', amount: 0.2 })
    useEffect(() => {
      if (inView) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setVal(0)
        intervalRef.current = setInterval(() => {
          setVal(prev => {
            const next = prev + 1
            if (next >= 100) {
              clearInterval(intervalRef.current)
              intervalRef.current = null
              return 100
            }
            return next
          })
        }, 35)
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setVal(0)
      }
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, [inView])
    return (
      <span ref={ref} className="text-burgundy font-extrabold text-2xl">{val}+</span>
    )
  }
  return (
    <div className="relative w-full">
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute w-64 h-64 bg-pink-200 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(closest-side, #ffd9e8, transparent)' }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute right-10 top-10 w-72 h-72 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(closest-side, #80002022, transparent)' }}
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(closest-side, #fff0f5, transparent)' }}
          animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 9 }}
        />
      </motion.div>
      <div className="text-center mb-8">
        <div className="text-burgundy font-extrabold text-2xl sm:text-3xl">{t('vp.heading')}</div>
        <div className="text-burgundy/80 mt-2 text-base sm:text-lg">{t('vp.subheading')}</div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 auto-rows-fr justify-items-center"
      >
        {items.map((x, idx) => (
          <motion.div key={x.titleKey} variants={cardVariants} className="h-full">
            <div
              className="rounded-2xl p-8 backdrop-blur-xl border border-white/60 shadow-lg glass h-full flex flex-col"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(128,0,32,0.06) 0, transparent 50%), repeating-linear-gradient(90deg, rgba(128,0,32,0.06) 0, rgba(128,0,32,0.06) 1px, transparent 3px, transparent 16px)'
              }}
            >
              <div className="flex items-center justify-center gap-3 text-burgundy">
                <x.Icon size={30} />
                <div className="font-semibold text-xl">{t(x.titleKey)}</div>
              </div>
              <div className="mt-4 text-burgundy/80 text-base sm:text-lg">
                {t(x.descKey)}
              </div>
              {x.counter && (
                <div className="mt-4">
                  <Count />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
