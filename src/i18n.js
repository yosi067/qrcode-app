const translations = {
  en: {
    appName: 'QR Code Generator',
    inputLabel: 'CONTENT',
    inputPlaceholder: 'Enter text or URL to generate QR Code instantly...',
    characters: 'characters',
    advancedSettings: 'Advanced Settings',
    errorLevel: 'ERROR CORRECTION',
    size: 'SIZE',
    foregroundColor: 'Foreground',
    backgroundColor: 'Background',
    preview: 'PREVIEW',
    emptyHint: 'Enter content to generate QR Code',
    downloadPng: 'Download PNG',
    copyImage: 'Copy Image',
    copied: 'Copied',
    shared: 'Shared',
  },
  'zh-TW': {
    appName: 'QR Code 產生器',
    inputLabel: '輸入內容',
    inputPlaceholder: '輸入文字或網址，即時產生 QR Code...',
    characters: '字元',
    advancedSettings: '進階設定',
    errorLevel: '糾錯等級',
    size: '尺寸',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    preview: '預覽',
    emptyHint: '輸入內容以產生 QR Code',
    downloadPng: '下載 PNG',
    copyImage: '複製圖片',
    copied: '已複製',
    shared: '已分享',
  },
  zh: {
    appName: 'QR Code 生成器',
    inputLabel: '输入内容',
    inputPlaceholder: '输入文字或网址，即时生成 QR Code...',
    characters: '字符',
    advancedSettings: '高级设置',
    errorLevel: '纠错等级',
    size: '尺寸',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    preview: '预览',
    emptyHint: '输入内容以生成 QR Code',
    downloadPng: '下载 PNG',
    copyImage: '复制图片',
    copied: '已复制',
    shared: '已分享',
  },
  es: {
    appName: 'Generador de QR Code',
    inputLabel: 'CONTENIDO',
    inputPlaceholder: 'Ingrese texto o URL para generar código QR...',
    characters: 'caracteres',
    advancedSettings: 'Configuración avanzada',
    errorLevel: 'CORRECCIÓN DE ERRORES',
    size: 'TAMAÑO',
    foregroundColor: 'Primer plano',
    backgroundColor: 'Fondo',
    preview: 'VISTA PREVIA',
    emptyHint: 'Ingrese contenido para generar código QR',
    downloadPng: 'Descargar PNG',
    copyImage: 'Copiar imagen',
    copied: 'Copiado',
    shared: 'Compartido',
  },
  ja: {
    appName: 'QR コードジェネレーター',
    inputLabel: '入力内容',
    inputPlaceholder: 'テキストまたはURLを入力してQRコードを生成...',
    characters: '文字',
    advancedSettings: '詳細設定',
    errorLevel: '誤り訂正レベル',
    size: 'サイズ',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    preview: 'プレビュー',
    emptyHint: 'コンテンツを入力してQRコードを生成',
    downloadPng: 'PNG ダウンロード',
    copyImage: '画像をコピー',
    copied: 'コピー済み',
    shared: '共有済み',
  },
  fr: {
    appName: 'Générateur de QR Code',
    inputLabel: 'CONTENU',
    inputPlaceholder: 'Entrez du texte ou une URL pour générer un QR Code...',
    characters: 'caractères',
    advancedSettings: 'Paramètres avancés',
    errorLevel: 'CORRECTION D\'ERREUR',
    size: 'TAILLE',
    foregroundColor: 'Premier plan',
    backgroundColor: 'Arrière-plan',
    preview: 'APERÇU',
    emptyHint: 'Entrez du contenu pour générer un QR Code',
    downloadPng: 'Télécharger PNG',
    copyImage: 'Copier l\'image',
    copied: 'Copié',
    shared: 'Partagé',
  },
}

function detectLocale() {
  const browserLangs = navigator.languages || [navigator.language]
  for (const lang of browserLangs) {
    const lower = lang.toLowerCase()
    // Check exact matches first (zh-tw, zh-hant)
    if (lower === 'zh-tw' || lower === 'zh-hant' || lower === 'zh-hant-tw') return 'zh-TW'
    if (lower.startsWith('zh')) return 'zh'
    if (lower.startsWith('en')) return 'en'
    if (lower.startsWith('es')) return 'es'
    if (lower.startsWith('ja')) return 'ja'
    if (lower.startsWith('fr')) return 'fr'
  }
  return 'en'
}

const currentLocale = detectLocale()

export function t(key) {
  return translations[currentLocale]?.[key] || translations.en[key] || key
}

export function getLocale() {
  return currentLocale
}
