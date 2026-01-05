/**
 * 中文字体加载工具
 * 用于 jsPDF 和 pdfmake 的字体配置
 */

import { jsPDF } from 'jspdf'
import pdfMake from 'pdfmake/build/pdfmake'

// 字体加载状态
let fontsLoaded = false
let fontBase64Cache: { [key: string]: string } = {}

/**
 * 将字体文件转换为 Base64
 */
async function loadFontAsBase64(fontPath: string): Promise<string> {
  // 检查缓存
  if (fontBase64Cache[fontPath]) {
    return fontBase64Cache[fontPath]
  }

  const response = await fetch(fontPath)
  if (!response.ok) {
    throw new Error(`Failed to load font: ${fontPath} (${response.status})`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const bytes = new Uint8Array(arrayBuffer)
  let binary = ''
  const byteLength = bytes.byteLength
  for (let i = 0; i < byteLength; i++) {
    binary += String.fromCharCode(bytes[i]!)
  }
  const base64 = btoa(binary)

  // 缓存结果
  fontBase64Cache[fontPath] = base64
  return base64
}

/**
 * 为 jsPDF 加载中文字体（使用静态字体，确保粗体正确显示）
 * @param doc jsPDF 实例
 */
export async function loadJsPDFChineseFont(doc: jsPDF) {
  const regularPath = '/Noto_Sans_SC/static/NotoSansSC-Regular.ttf'
  const boldPath = '/Noto_Sans_SC/static/NotoSansSC-Bold.ttf'
  const fontName = 'SourceHanSansSC'

  try {
    // 加载常规字体 (weight 400)
    const regularBase64 = await loadFontAsBase64(regularPath)
    doc.addFileToVFS('SourceHanSansSC-Regular.ttf', regularBase64)
    doc.addFont('SourceHanSansSC-Regular.ttf', fontName, 'normal', 400)

    // 加载粗体字体 (weight 700) - 使用独立的Bold字体文件
    const boldBase64 = await loadFontAsBase64(boldPath)
    doc.addFileToVFS('SourceHanSansSC-Bold.ttf', boldBase64)
    doc.addFont('SourceHanSansSC-Bold.ttf', fontName, 'bold', 700)

    // 中文字体通常没有真正的italic，使用oblique模拟（浏览器会自动倾斜）
    // 斜体使用常规字体 + italic样式
    doc.addFont('SourceHanSansSC-Regular.ttf', fontName, 'italic', 400)
    // 粗斜体使用粗体字体 + italic样式
    doc.addFont('SourceHanSansSC-Bold.ttf', fontName, 'bolditalic', 700)

    doc.setFont(fontName, 'normal')
    return true
  } catch (error) {
    console.error('❌ jsPDF 中文字体加载失败:', error)
    throw error
  }
}

/**
 * 为 pdfmake 配置中文字体（使用静态字体，确保粗体正确显示）
 */
export async function configurePdfMakeChinese() {
  if (fontsLoaded) return

  const regularPath = '/Noto_Sans_SC/static/NotoSansSC-Regular.ttf'
  const boldPath = '/Noto_Sans_SC/static/NotoSansSC-Bold.ttf'

  pdfMake.fonts = {
    Roboto: {
      normal:
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf',
      bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf',
      italics:
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf',
      bolditalics:
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf',
    },
    NotoSansSC: {
      normal: window.location.origin + regularPath,
      bold: window.location.origin + boldPath,
      // 中文字体通常没有真正的italic，pdfmake会自动倾斜文字
      italics: window.location.origin + regularPath,
      bolditalics: window.location.origin + boldPath,
    },
  }

  fontsLoaded = true
}

/**
 * 创建支持中文的 jsPDF 文档
 * @param options PDF 选项
 */
export async function createChineseJsPDF(
  options: {
    orientation?: 'portrait' | 'landscape'
    unit?: 'mm' | 'pt' | 'px'
    format?: string | number[]
  } = {},
) {
  const { orientation = 'portrait', unit = 'mm', format = 'a4' } = options

  const doc = new jsPDF({
    orientation,
    unit,
    format,
  })

  // 加载中文字体（可变字体）
  await loadJsPDFChineseFont(doc)

  return doc
}

/**
 * 获取 pdfmake 中文文档定义的默认样式
 */
export function getChinesePdfMakeStyles() {
  return {
    defaultStyle: {
      font: 'NotoSansSC',
      fontSize: 12,
    },
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10] as [number, number, number, number],
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5] as [number, number, number, number],
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black',
        fillColor: '#eeeeee',
      },
    },
  }
}

/**
 * 预加载字体（可选，用于提升性能）
 */
export async function preloadFonts() {
  try {
    await loadFontAsBase64('/Noto_Sans_SC/NotoSansSC-VariableFont_wght.ttf')
    return true
  } catch (error) {
    console.error('❌ 字体预加载失败:', error)
    return false
  }
}

/**
 * 清除字体缓存
 */
export function clearFontCache() {
  fontBase64Cache = {}
  fontsLoaded = false
  console.log('🗑️ 字体缓存已清除')
}
