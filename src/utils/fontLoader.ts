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
 * 为 jsPDF 加载中文字体 (可变字体，支持 100-900 全部字重)
 * @param doc jsPDF 实例
 */
export async function loadJsPDFChineseFont(doc: jsPDF) {
  const fontPath = '/Noto_Sans_SC/NotoSansSC-VariableFont_wght.ttf'
  // 使用 SourceHanSansSC 作为字体名称，与 JsPDF.vue 中使用的名称保持一致
  const fontName = 'SourceHanSansSC'

  try {
    const base64 = await loadFontAsBase64(fontPath)
    doc.addFileToVFS('SourceHanSansSC-VF.ttf', base64)
    // 注册 normal 和 bold 两种字重（可变字体可以模拟粗体）
    doc.addFont('SourceHanSansSC-VF.ttf', fontName, 'normal')
    doc.addFont('SourceHanSansSC-VF.ttf', fontName, 'bold')
    doc.setFont(fontName, 'normal')
    return true
  } catch (error) {
    console.error('❌ jsPDF 中文字体加载失败:', error)
    throw error
  }
}

/**
 * 为 pdfmake 配置中文字体 (可变字体)
 */
export async function configurePdfMakeChinese() {
  if (fontsLoaded) return

  const fontPath = '/Noto_Sans_SC/NotoSansSC-VariableFont_wght.ttf'

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
      normal: window.location.origin + fontPath,
      bold: window.location.origin + fontPath,
      italics: window.location.origin + fontPath,
      bolditalics: window.location.origin + fontPath,
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
