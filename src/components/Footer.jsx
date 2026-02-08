import { useLanguage } from '../lib/i18n.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer>
      <div className="glass rounded-2xl p-5 text-center">
        <div className="text-burgundy/80">{t('footer.disclaimer')}</div>
        <div className="mt-2 text-burgundy/60 text-sm">{t('footer.copyright')}</div>
      </div>
    </footer>
  )
}
