import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'

const reviewNames = [
  'Mia', 'Lily', 'Zoey', 'Rae', 'Amber', 'Nova',
  'Skye', 'Harper', 'Sasha', 'Lexi', 'Jade', 'Quinn'
]

const faqKeys = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' }
]

export function Reviews() {
  const { t } = useLanguage()
  return (
    <div id="reviews" className="glass rounded-2xl p-6 scroll-mt-32 md:scroll-mt-36">
      <div className="text-burgundy font-semibold text-lg">{t('reviews.title')}</div>
      <div className="mt-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 snap-x snap-mandatory">
          {reviewNames.map((name, i) => (
            <motion.div key={name + i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} className="snap-start min-w-[280px]">
              <div className="rounded-xl bg-white/60 p-5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-burgundy/20 flex items-center justify-center text-burgundy font-bold">{name[0]}</div>
                <div className="text-burgundy font-bold">{name}</div>
                <div className="text-burgundy/80 mt-1">{t(`reviews.text${i+1}`)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FAQAccordion() {
  const [open, setOpen] = useState(null)
  const { t } = useLanguage()
  return (
    <div id="faq" className="scroll-mt-32 md:scroll-mt-36">
      <div className="text-burgundy font-semibold mb-3 text-lg">{t('faq.title')}</div>
      <div className="space-y-3">
        {faqKeys.map((f, i)=>(
          <div key={f.q} className="glass rounded-xl">
            <button onClick={()=>setOpen(open===i?null:i)} className="w-full text-left px-5 py-4 text-burgundy font-medium text-base">{t(f.q)}</button>
            {open===i && <div className="px-5 pb-5 text-burgundy/80 text-base">{t(f.a)}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
