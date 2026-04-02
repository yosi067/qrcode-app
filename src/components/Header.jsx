import { t } from '../i18n'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-14 flex items-center">
        {/* Logo / Product Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-apple-blue flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="3" height="3" />
              <rect x="18" y="14" width="3" height="3" />
              <rect x="14" y="18" width="3" height="3" />
              <rect x="18" y="18" width="3" height="3" />
            </svg>
          </div>
          <span className="text-base font-semibold tracking-tight text-apple-dark">
            {t('appName')}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
