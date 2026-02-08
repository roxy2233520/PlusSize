import { useMemo, useState } from 'react'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import { Ruler, Heart } from 'lucide-react'
import { SIZE_STANDARDS } from '../../lib/standards.js'
import { useLanguage } from '../../lib/i18n.jsx'

 

export default function CalculatorCard() {
  const { t } = useLanguage()
  const [unit, setUnit] = useState('in')
  const [bust, setBust] = useState('')
  const [waist, setWaist] = useState('')
  const [hips, setHips] = useState('')
  const [brand, setBrand] = useState('shein')
  const [result, setResult] = useState(null)
  const [hipUpgrade, setHipUpgrade] = useState(false)

  const normalized = useMemo(() => {
    const toIn = v => {
      const n = parseFloat(v)
      if (Number.isNaN(n)) return null
      return unit === 'cm' ? n / 2.54 : n
    }
    return { bust: toIn(bust), waist: toIn(waist), hips: toIn(hips) }
  }, [unit, bust, waist, hips])

  const compute = () => {
    if (!normalized.waist || !normalized.hips) return
    const list = SIZE_STANDARDS[brand]
    let matchIndex = list.findIndex(s => normalized.waist >= s.lowWaist && normalized.waist <= s.highWaist)
    if (matchIndex === -1) {
      if (normalized.waist < list[0].lowWaist) matchIndex = 0
      else matchIndex = list.length - 1
    }
    let finalIndex = matchIndex
    const matched = list[matchIndex]
    let upgrade = false
    if (normalized.hips > matched.highHip) {
      upgrade = true
      finalIndex = Math.min(matchIndex + 1, list.length - 1)
    }
    setHipUpgrade(upgrade)
    setResult(list[finalIndex].label)
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="glass rounded-3xl p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-burgundy">
          <Ruler size={22} />
          <span className="font-semibold text-lg">{t('calc.title')}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setUnit('in')} className={`px-4 py-2 rounded-full text-sm sm:text-base ${unit==='in'?'bg-burgundy text-white':'bg-white/60 text-burgundy'}`}>IN</button>
          <button onClick={() => setUnit('cm')} className={`px-4 py-2 rounded-full text-sm sm:text-base ${unit==='cm'?'bg-burgundy text-white':'bg-white/60 text-burgundy'}`}>CM</button>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input value={bust} onChange={e=>setBust(e.target.value)} inputMode="decimal" placeholder={`${t('calc.input.bust')} (${unit.toUpperCase()})`} className="w-full rounded-xl bg-white/60 px-5 py-4 text-base outline-none" />
        <input value={waist} onChange={e=>setWaist(e.target.value)} inputMode="decimal" placeholder={`${t('calc.input.waist')} (${unit.toUpperCase()})`} className="w-full rounded-xl bg-white/60 px-5 py-4 text-base outline-none" />
        <input value={hips} onChange={e=>setHips(e.target.value)} inputMode="decimal" placeholder={`${t('calc.input.hips')} (${unit.toUpperCase()})`} className="w-full rounded-xl bg-white/60 px-5 py-4 text-base outline-none" />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select value={brand} onChange={e=>setBrand(e.target.value)} className="w-full rounded-xl bg-white/60 px-5 py-4 text-base outline-none">
          <option value="shein">{t('calc.brand.shein')}</option>
          <option value="torrid">{t('calc.brand.torrid')}</option>
          <option value="standard">{t('calc.brand.standard')}</option>
          <option value="oldnavy" disabled>Old Navy</option>
        </select>
        <motion.button whileHover={{ scale: 1.02 }} onClick={compute} className="btn-primary text-base py-4">
          {t('calc.find')}
        </motion.button>
        <a id="buy" href="#" className="btn-primary text-center text-base py-4 scroll-mt-32 md:scroll-mt-36">{t('calc.buy')} {brand==='shein'?'Shein':brand==='torrid'?'Torrid':'Standard US'}</a>
      </div>
      {result && (
        <div className="mt-5 glass rounded-2xl p-5">
          <div className="text-burgundy font-bold text-lg">{t('calc.result')}{result}</div>
          {hipUpgrade && (
            <div className="mt-2 flex items-center gap-2 text-burgundy/80">
              <Heart size={18} />
              <span>{t('calc.hipUpgrade')}</span>
            </div>
          )}
        </div>
      )}
      <div className="mt-3 text-sm text-burgundy/60">{t('calc.note')}</div>
    </div>
  )
}
