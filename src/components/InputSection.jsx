import { useState } from 'react'
import { t } from '../i18n'

const ERROR_LEVELS = [
  { value: 'L', label: 'L', desc: '7%' },
  { value: 'M', label: 'M', desc: '15%' },
  { value: 'Q', label: 'Q', desc: '25%' },
  { value: 'H', label: 'H', desc: '30%' },
]

function InputSection({
  text,
  setText,
  errorLevel,
  setErrorLevel,
  size,
  setSize,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
}) {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="space-y-5">
      {/* Text Input Card */}
      <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm p-5 sm:p-6 transition-all duration-300">
        <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-3">
          {t('inputLabel')}
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('inputPlaceholder')}
          rows={5}
          className="w-full resize-none rounded-xl bg-apple-gray/60 border border-black/5 px-4 py-3.5 text-base text-apple-dark placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-apple-blue/40 focus:border-apple-blue/40"
        />
        <div className="mt-2 text-right">
          <span className="text-xs text-gray-400">
            {text.length} {t('characters')}
          </span>
        </div>
      </div>

      {/* Settings Card */}
      <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm transition-all duration-300 overflow-hidden">
        <button
          onClick={() => setSettingsOpen(!settingsOpen)}
          className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left transition-colors duration-200 hover:bg-black/[0.02]"
        >
          <span className="text-sm font-medium text-apple-dark">
            {t('advancedSettings')}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-400 transition-transform duration-300 ${settingsOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          className="transition-all duration-300 ease-in-out overflow-hidden"
          style={{
            maxHeight: settingsOpen ? '500px' : '0px',
            opacity: settingsOpen ? 1 : 0,
          }}
        >
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-6">
            {/* Error Correction Level */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-3">
                {t('errorLevel')}
              </label>
              <div className="segmented-control w-full flex">
                {ERROR_LEVELS.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setErrorLevel(level.value)}
                    className={`flex-1 text-center ${errorLevel === level.value ? 'active' : ''}`}
                  >
                    <span className="block text-sm font-semibold">{level.label}</span>
                    <span className="block text-[10px] opacity-60">{level.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  {t('size')}
                </label>
                <span className="text-xs font-medium text-gray-500 tabular-nums">
                  {size} × {size} px
                </span>
              </div>
              <input
                type="range"
                min={128}
                max={512}
                step={16}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
              />
            </div>

            {/* Colors */}
            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                />
                <div>
                  <span className="block text-xs font-medium text-gray-400">{t('foregroundColor')}</span>
                  <span className="block text-xs text-gray-400 uppercase tabular-nums">{fgColor}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
                <div>
                  <span className="block text-xs font-medium text-gray-400">{t('backgroundColor')}</span>
                  <span className="block text-xs text-gray-400 uppercase tabular-nums">{bgColor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputSection
