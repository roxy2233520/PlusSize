import { Image, Video } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'

export default function SeoSection() {
  const { t } = useLanguage()
  const cards = t('seo.cards') || []
  const reviews = t('reviews.items') || []
  return (
    <div id="blog" className="h-full flex flex-col justify-center items-center scroll-mt-32 md:scroll-mt-36">
      <div className="w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-burgundy text-center">{t('seo.title')}</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="glass rounded-2xl p-8 flex items-center gap-5">
              {idx === 0 ? <Image size={26} /> : idx === 1 ? <Video size={26} /> : <Image size={26} />}
              <div>
                <div className="font-semibold text-burgundy text-lg">{c.title}</div>
                <div className="text-burgundy/70 text-base">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div id="reviews" className="w-full scroll-mt-32 md:scroll-mt-36">
        <h3 className="mt-10 text-2xl sm:text-3xl font-bold text-burgundy text-center">{t('reviews.sectionTitle')}</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center auto-rows-fr">
          {reviews.slice(0, 9).map((r, i) => (
            <motion.div key={r.name + i} whileHover={{ y: -4 }} className="h-full">
              <div className="glass rounded-2xl p-5 h-full flex flex-col">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-burgundy/20 flex items-center justify-center text-burgundy font-bold">
                    {(r.name.match(/[A-Za-z\u4e00-\u9fa5]/)?.[0] ?? r.name[0]).replace('.', '').toUpperCase()}
                  </div>
                  <div className="text-burgundy font-bold">{r.name}</div>
                </div>
                <div className="text-burgundy/80 mt-2">{r.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
