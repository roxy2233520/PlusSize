import { SIZE_STANDARDS } from '../lib/standards.js'
import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'

function mapByWaist(w) {
  const find = list => {
    const i = list.findIndex(s => w >= s.lowWaist && w <= s.highWaist)
    return list[i === -1 ? list.length - 1 : i].label
  }
  return {
    shein: find(SIZE_STANDARDS.shein),
    standard: find(SIZE_STANDARDS.standard),
    torrid: find(SIZE_STANDARDS.torrid)
  }
}

export default function CompareViz() {
  const { t } = useLanguage()
  const waist = 40
  const labels = mapByWaist(waist)
  const items = [
    { brand: 'Shein Curve', label: labels.shein, display: '4XL（Size 24-26）', tone: 'bg-burgundy text-white', width: 'w-4/5', tag: t('compare.tag.shein') },
    { brand: 'Standard US', label: labels.standard, display: '2XL（Size 20-22）', tone: 'bg-white text-burgundy', width: 'w-3/5', tag: t('compare.tag.standard') },
    { brand: 'Torrid', label: labels.torrid, display: '1XL（Size 14-16）', tone: 'bg-burgundy/80 text-white', width: 'w-2/5', tag: t('compare.tag.torrid') }
  ]
  return (
    <div id="compare" className="text-center scroll-mt-32 md:scroll-mt-36">
      <h2 className="text-2xl sm:text-3xl font-bold text-burgundy">{t('compare.title')}</h2>
      <p className="mt-3 text-lg text-burgundy/80">{t('compare.subtitle')}</p>
      <div className="mt-6 text-burgundy/70">{t('compare.fixed')}</div>
      <div className="mt-8 max-w-3xl mx-auto">
        <div className="space-y-4">
          {items.map((it, idx) => (
            <motion.div key={it.brand} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx*0.06 }}>
              <div className="flex items-center justify-between">
                <div className="text-burgundy font-semibold">{it.brand}</div>
                <div className="text-burgundy/70 text-sm">{it.tag}</div>
              </div>
              <div className="w-full bg-white/50 rounded-xl overflow-hidden">
                <div className={`h-12 ${it.tone} ${it.width} flex items-center justify-between px-4`}>
                  <span className="font-bold">{it.display ?? it.label}</span>
                  <span className="text-xs opacity-80">{it.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#calc" className="btn-primary inline-block">{t('compare.cta')}</a>
        </div>
        <div className="mt-3 text-burgundy/60 text-sm">{t('compare.badge')}</div>
      </div>
    </div>
  )
}
