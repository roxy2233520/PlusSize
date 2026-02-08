import { ShoppingBag, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="section">
        <div className="glass mt-3 rounded-2xl px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gauge className="text-burgundy" size={28} />
            <span className="text-burgundy font-bold text-xl">{t('site.name')}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-burgundy">
            <a href="#calc" className="hover:underline text-lg">{t('nav.calc')}</a>
            <a href="#compare" className="hover:underline text-lg">{t('nav.compare')}</a>
            <a href="#blog" className="hover:underline text-lg">{t('nav.reviews')}</a>
            <a href="#faq" className="hover:underline text-lg">{t('nav.faq')}</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={()=>setLang(lang==='zh'?'en':'zh')} className="rounded-xl bg-white/60 text-burgundy px-3 py-2 text-sm">
              {lang==='zh'? t('nav.lang.en') : t('nav.lang.zh')}
            </button>
            <motion.a whileHover={{ scale: 1.03 }} href="#buy" className="btn-primary flex items-center gap-2">
              <ShoppingBag size={20} />
              {t('nav.buy')}
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
