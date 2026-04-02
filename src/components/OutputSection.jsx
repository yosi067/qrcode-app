import { useState } from 'react'
import { t } from '../i18n'

function OutputSection({ canvasRef, hasContent, onDownload, onCopy, size }) {
  const [feedback, setFeedback] = useState(null) // 'copied' | 'shared' | null

  const handleCopy = async () => {
    const result = await onCopy()
    if (result === 'copied' || result === 'shared') {
      setFeedback(result)
      setTimeout(() => setFeedback(null), 2000)
    }
  }

  return (
    <div className="lg:sticky lg:top-24">
      <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm p-5 sm:p-6 transition-all duration-300">
        {/* Preview Label */}
        <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-4">
          {t('preview')}
        </label>

        {/* Canvas Container */}
        <div className="flex items-center justify-center rounded-xl bg-white p-6 sm:p-8 min-h-[200px] transition-colors duration-300">
          {hasContent ? (
            <canvas
              ref={canvasRef}
              className="max-w-full h-auto transition-opacity duration-300"
              style={{ imageRendering: 'pixelated', maxWidth: Math.min(size, 320) }}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 py-8">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14" y="14" width="3" height="3" stroke="currentColor" strokeWidth="1.5" />
                <rect x="18" y="14" width="3" height="3" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14" y="18" width="3" height="3" stroke="currentColor" strokeWidth="1.5" />
                <rect x="18" y="18" width="3" height="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p className="text-sm text-gray-400">
                {t('emptyHint')}
              </p>
            </div>
          )}
          {/* Hidden canvas for when there's no content but we still need the ref */}
          {!hasContent && (
            <canvas ref={canvasRef} className="hidden" />
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          {/* Primary: Download */}
          <button
            onClick={onDownload}
            disabled={!hasContent}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white bg-apple-blue transition-all duration-200 hover:bg-apple-blue-hover active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t('downloadPng')}
          </button>

          {/* Secondary: Copy */}
          <button
            onClick={handleCopy}
            disabled={!hasContent}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-apple-blue bg-apple-blue/10 transition-all duration-200 hover:bg-apple-blue/15 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none"
          >
            {feedback ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feedback === 'shared' ? t('shared') : t('copied')}
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {t('copyImage')}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutputSection
