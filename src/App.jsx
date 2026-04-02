import { useState, useEffect, useCallback, useRef } from 'react'
import QRCode from 'qrcode'
import Header from './components/Header'
import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection'

function App() {
  const [text, setText] = useState('')
  const [errorLevel, setErrorLevel] = useState('M')
  const [size, setSize] = useState(256)
  const [fgColor, setFgColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const canvasRef = useRef(null)

  // Generate QR Code
  const generateQR = useCallback(async () => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (!text.trim()) {
      const ctx = canvas.getContext('2d')
      canvas.width = size
      canvas.height = size
      ctx.clearRect(0, 0, size, size)
      return
    }

    try {
      await QRCode.toCanvas(canvas, text, {
        width: size,
        margin: 2,
        errorCorrectionLevel: errorLevel,
        color: {
          dark: fgColor,
          light: bgColor,
        },
      })
    } catch (err) {
      console.error('QR Code generation failed:', err)
    }
  }, [text, errorLevel, size, fgColor, bgColor])

  useEffect(() => {
    const timer = setTimeout(generateQR, 50)
    return () => clearTimeout(timer)
  }, [generateQR])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas || !text.trim()) return
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const handleCopy = async () => {
    const canvas = canvasRef.current
    if (!canvas || !text.trim()) return
    try {
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, 'image/png')
      )
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ])
      return true
    } catch (err) {
      console.error('Copy failed:', err)
      return false
    }
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-apple-gray">
      <Header />

      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left / Top: Input & Settings */}
          <div className="w-full lg:w-[58%]">
            <InputSection
              text={text}
              setText={setText}
              errorLevel={errorLevel}
              setErrorLevel={setErrorLevel}
              size={size}
              setSize={setSize}
              fgColor={fgColor}
              setFgColor={setFgColor}
              bgColor={bgColor}
              setBgColor={setBgColor}
            />
          </div>

          {/* Right / Bottom: Preview & Actions */}
          <div className="w-full lg:w-[42%]">
            <OutputSection
              canvasRef={canvasRef}
              hasContent={!!text.trim()}
              onDownload={handleDownload}
              onCopy={handleCopy}
              size={size}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
