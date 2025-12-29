<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📋 pdfmake - 声明式PDF生成</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>pdfmake</strong></p>
          <p>npm install pdfmake</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 60+</li>
            <li>✅ Firefox 55+</li>
            <li>✅ Safari 11+</li>
            <li>✅ Edge 79+</li>
            <li>✅ Node.js</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (85%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 客户端/服务端</li>
            <li>✅ 高效渲染</li>
            <li>⚠️ 首次加载较慢</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ 完全可控</li>
            <li>✅ pageBreak</li>
            <li>✅ 自动分页</li>
            <li>✅ 页眉页脚</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~600 KB</p>
          <p>(包含字体)</p>
        </div>

        <div class="info-section">
          <h3>✨ 核心功能</h3>
          <ul>
            <li>✅ 声明式 API</li>
            <li>✅ 表格布局</li>
            <li>✅ 列表样式</li>
            <li>✅ 图片嵌入</li>
            <li>✅ 多语言支持</li>
            <li>✅ 水印背景</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>API 非常友好</li>
            <li>功能强大完整</li>
            <li>文档详尽</li>
            <li>社区活跃</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>文件体积较大</li>
            <li>首次加载慢</li>
            <li>中文字体需配置</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button @click="generateSimplePDF" class="btn btn-primary" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📄 生成简单PDF' }}
          </button>
          <button @click="generateTablePDF" class="btn btn-secondary" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📊 生成表格PDF' }}
          </button>
          <button @click="generateComplexPDF" class="btn btn-info" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📑 生成复杂文档' }}
          </button>
          <button @click="generateReportPDF" class="btn btn-warning" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📈 生成完整报告' }}
          </button>
        </div>

        <div
          v-if="statusMessage"
          class="status-message"
          :class="{ error: statusMessage.includes('❌') }"
        >
          {{ statusMessage }}
        </div>

        <div class="preview-hint">
          <p>💡 点击按钮生成并下载中文 PDF 文档</p>
          <p v-if="!fontsReady" class="loading-fonts">⏳ 正在初始化中文字体...</p>
          <p v-else class="fonts-ready">✅ 中文字体已就绪</p>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装和导入</h4>
            <pre><code>npm install pdfmake

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 基础文档</h4>
            <pre><code>const docDefinition = {
  content: [
    'First paragraph',
    'Second paragraph'
  ]
};

pdfMake.createPdf(docDefinition).download('document.pdf');
// 或在浏览器中打开
pdfMake.createPdf(docDefinition).open();</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 文本样式</h4>
            <pre><code>const docDefinition = {
  content: [
    { text: '标题', style: 'header' },
    { text: '副标题', style: 'subheader' },
    { text: '正文内容', fontSize: 12 },
    { text: '加粗文本', bold: true },
    { text: '斜体文本', italics: true }
  ],
  styles: {
    header: {
      fontSize: 22,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5]
    }
  }
};</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 表格生成</h4>
            <pre><code>const docDefinition = {
  content: [
    {
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 100, '*'],
        body: [
          ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
          ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3', 'Row 1, Cell 4'],
          ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3', 'Row 2, Cell 4']
        ]
      }
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 列表样式</h4>
            <pre><code>const docDefinition = {
  content: [
    // 无序列表
    {
      ul: [
        'Item 1',
        'Item 2',
        'Item 3'
      ]
    },
    // 有序列表
    {
      ol: [
        'First item',
        'Second item',
        'Third item'
      ]
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 分页控制</h4>
            <pre><code>const docDefinition = {
  content: [
    { text: 'Page 1 content' },
    { text: 'Page 2 content', pageBreak: 'before' },
    { text: 'This stays on page 2', pageBreakBefore: (currentNode) => {
      return currentNode.headlineLevel === 1;
    }}
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>7. 页眉和页脚</h4>
            <pre><code>const docDefinition = {
  header: 'Simple header text',
  footer: (currentPage, pageCount) => {
    return {
      text: \`Page \${currentPage} of \${pageCount}\`,
      alignment: 'center'
    };
  },
  content: [
    'Content goes here'
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>8. 图片嵌入</h4>
            <pre><code>const docDefinition = {
  content: [
    {
      image: 'data:image/jpeg;base64,...',
      width: 150,
      height: 150
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>9. 多列布局</h4>
            <pre><code>const docDefinition = {
  content: [
    {
      columns: [
        {
          width: '50%',
          text: 'Left column content'
        },
        {
          width: '50%',
          text: 'Right column content'
        }
      ]
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>10. 背景和水印</h4>
            <pre><code>const docDefinition = {
  background: {
    text: 'WATERMARK',
    color: 'blue',
    opacity: 0.3,
    bold: true,
    fontSize: 60
  },
  content: [
    'Your content here'
  ]
};</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import pdfMake from 'pdfmake/build/pdfmake'
import { configurePdfMakeChinese, getChinesePdfMakeStyles } from '@/utils/fontLoader'

const loading = ref(false)
const statusMessage = ref('')
const fontsReady = ref(false)

// 在组件挂载时配置中文字体
onMounted(async () => {
  try {
    await configurePdfMakeChinese()
    fontsReady.value = true
    console.log('✅ pdfmake 中文字体配置完成')
  } catch (error) {
    console.error('❌ pdfmake 字体配置失败:', error)
  }
})

const generateSimplePDF = async () => {
  if (!fontsReady.value) {
    statusMessage.value = '⏳ 正在初始化中文字体...'
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成 PDF...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: 'pdfmake 中文示例文档', style: 'header' },
        { text: '声明式 PDF 生成演示', style: 'subheader' },
        {
          text: '这是一个使用 pdfmake 生成的中文 PDF 文档。pdfmake 提供了非常友好的声明式 API，可以轻松创建结构化的 PDF 文档。',
          margin: [0, 10, 0, 10],
        },
        { text: '主要特点：', style: 'subheader' },
        {
          ul: [
            'API 简单易用，支持中文',
            '支持复杂的文档布局',
            '自动分页处理',
            '丰富的样式选项',
            '客户端和服务端通用',
          ],
        },
      ],
      ...chineseStyles,
    }

    pdfMake.createPdf(docDefinition).download('pdfmake-chinese-simple.pdf')

    statusMessage.value = '✅ PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('PDF 生成失败:', error)
    statusMessage.value = '❌ PDF 生成失败'
  } finally {
    loading.value = false
  }
}

const generateTablePDF = async () => {
  if (!fontsReady.value) {
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成表格 PDF...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '前端打印框架对比表', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 100],
            body: [
              [
                { text: 'Framework', style: 'tableHeader' },
                { text: 'Size', style: 'tableHeader' },
                { text: 'Performance', style: 'tableHeader' },
                { text: 'Rating', style: 'tableHeader' },
              ],
              ['window.print()', '0 KB', 'Excellent', '★★★★★'],
              ['Print.js', '10 KB', 'Good', '★★★★'],
              ['jsPDF', '150 KB', 'Good', '★★★★'],
              ['pdfmake', '600 KB', 'Good', '★★★★★'],
              ['html2canvas', '180 KB', 'Medium', '★★★'],
            ],
          },
          layout: {
            fillColor: (rowIndex: number) => {
              return rowIndex === 0 ? '#667eea' : rowIndex % 2 === 0 ? '#f7fafc' : null
            },
            hLineColor: () => '#e2e8f0',
            vLineColor: () => '#e2e8f0',
          },
        },
      ],
      ...chineseStyles,
    }

    pdfMake.createPdf(docDefinition).download('pdfmake-chinese-table.pdf')

    statusMessage.value = '✅ 表格 PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('表格 PDF 生成失败:', error)
    statusMessage.value = '❌ 表格 PDF 生成失败'
  } finally {
    loading.value = false
  }
}

const generateComplexPDF = async () => {
  if (!fontsReady.value) {
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成复杂 PDF...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      pageSize: 'A4',
      pageMargins: [40, 60, 40, 60],
      header: (currentPage: number, pageCount: number) => {
        return {
          text: 'pdfmake 复杂文档示例',
          alignment: 'center',
          margin: [0, 20, 0, 0],
          fontSize: 10,
          color: '#718096',
        }
      },
      footer: (currentPage: number, pageCount: number) => {
        return {
          text: `第 ${currentPage} 页 / 共 ${pageCount} 页`,
          alignment: 'center',
          margin: [0, 0, 0, 20],
          fontSize: 9,
          color: '#a0aec0',
        }
      },
      content: [
        { text: '技术调研报告', style: 'title' },
        { text: '前端打印方案选型分析', style: 'subtitle' },
        { text: `生成日期：${new Date().toLocaleDateString('zh-CN')}`, style: 'date' },

        { text: '一、背景', style: 'sectionHeader' },
        {
          text: '随着 Web 应用的普及，前端打印需求日益增长。本报告对主流前端打印方案进行全面调研和对比分析。',
          margin: [0, 0, 0, 10],
        },

        { text: '二、方案对比', style: 'sectionHeader' },
        {
          columns: [
            {
              width: '50%',
              stack: [
                { text: '轻量级方案', style: 'columnHeader' },
                { ul: ['window.print()', 'Print.js', 'vue3-print-nb'] },
              ],
            },
            {
              width: '50%',
              stack: [
                { text: 'PDF 生成方案', style: 'columnHeader' },
                { ul: ['jsPDF', 'pdfmake', 'pdf-lib'] },
              ],
            },
          ],
          columnGap: 20,
          margin: [0, 0, 0, 15],
        },

        { text: '三、性能数据', style: 'sectionHeader', pageBreak: 'before' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 80, 80, 80],
            body: [
              ['方案', '初始化', '渲染', '总时间'],
              ['window.print()', '0ms', '45ms', '45ms'],
              ['Print.js', '35ms', '68ms', '103ms'],
              ['jsPDF', '125ms', '234ms', '359ms'],
            ],
          },
        },

        { text: '四、结论', style: 'sectionHeader', margin: [0, 20, 0, 10] },
        {
          text: '根据项目需求选择合适的打印方案，平衡性能、功能和易用性。',
        },
      ],
      styles: {
        title: {
          fontSize: 28,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
        subtitle: {
          fontSize: 18,
          alignment: 'center',
          margin: [0, 0, 0, 5],
        },
        date: {
          fontSize: 10,
          alignment: 'center',
          color: '#718096',
          margin: [0, 0, 0, 30],
        },
        sectionHeader: {
          fontSize: 16,
          bold: true,
          margin: [0, 15, 0, 10],
          color: '#667eea',
        },
        columnHeader: {
          fontSize: 13,
          bold: true,
          margin: [0, 0, 0, 5],
        },
      },
      ...chineseStyles,
    }

    pdfMake.createPdf(docDefinition).download('pdfmake-chinese-complex.pdf')

    statusMessage.value = '✅ 复杂 PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('复杂 PDF 生成失败:', error)
    statusMessage.value = '❌ 复杂 PDF 生成失败'
  } finally {
    loading.value = false
  }
}

const generateReportPDF = async () => {
  if (!fontsReady.value) {
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成完整报告...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [40, 80, 40, 60],
      header: (currentPage: number) => {
        return {
          columns: [
            { text: '前端打印技术调研报告', fontSize: 10, margin: [40, 30, 0, 0] },
            {
              text: new Date().toLocaleDateString(),
              fontSize: 10,
              alignment: 'right',
              margin: [0, 30, 40, 0],
            },
          ],
          margin: [0, 20, 0, 20],
        }
      },
      footer: (currentPage: number, pageCount: number) => {
        return {
          columns: [
            { text: 'Confidential', fontSize: 8, margin: [40, 0, 0, 0], color: '#a0aec0' },
            {
              text: `第 ${currentPage} 页 / 共 ${pageCount} 页`,
              alignment: 'right',
              fontSize: 8,
              margin: [0, 0, 40, 0],
              color: '#a0aec0',
            },
          ],
        }
      },
      background: (currentPage: number) => {
        return {
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 595.28,
              h: 60,
              color: '#667eea',
            },
          ],
        }
      },
      content: [
        { text: '前端打印技术', style: 'title', color: 'white', margin: [0, -60, 0, 10] },
        { text: '全面调研报告', style: 'subtitle', color: 'white', margin: [0, 0, 0, 40] },

        { text: '目录', style: 'tocHeader' },
        {
          toc: {
            title: { text: '', style: 'tocTitle' },
          },
          ul: ['第一章：概述', '第二章：方案对比', '第三章：性能分析', '第四章：选型建议'],
          margin: [0, 0, 0, 30],
        },

        { text: '第一章：概述', style: 'chapter', tocItem: true, pageBreak: 'before' },
        {
          text: '本报告旨在全面调研和对比当前主流的前端打印技术方案，为项目选型提供科学依据。',
          margin: [0, 0, 0, 20],
        },

        { text: '第二章：方案对比', style: 'chapter', tocItem: true, pageBreak: 'before' },
        {
          table: {
            headerRows: 1,
            widths: [120, '*', 80, 80],
            body: [
              [
                { text: '方案名称', style: 'tableHeader' },
                { text: '核心特点', style: 'tableHeader' },
                { text: '文件大小', style: 'tableHeader' },
                { text: '评分', style: 'tableHeader' },
              ],
              ['window.print()', '浏览器原生，零依赖', '0 KB', '★★★★★'],
              ['Print.js', '轻量级，易用', '10 KB', '★★★★'],
              ['jsPDF', '强大，矢量图形', '150 KB', '★★★★'],
              ['pdfmake', '声明式，功能完整', '600 KB', '★★★★★'],
            ],
          },
          layout: {
            fillColor: (rowIndex: number) => {
              return rowIndex === 0 ? '#667eea' : rowIndex % 2 === 0 ? '#f7fafc' : null
            },
          },
        },

        { text: '第三章：性能分析', style: 'chapter', tocItem: true, pageBreak: 'before' },
        { text: '3.1 测试方法', style: 'section' },
        {
          text: '采用统一的测试环境和数据集，对各方案进行基准测试。',
          margin: [0, 0, 0, 15],
        },
        { text: '3.2 测试结果', style: 'section' },
        {
          ul: [
            'window.print() 性能最优，适合简单场景',
            'Print.js 性能良好，体积小',
            'jsPDF 和 pdfmake 功能强大，性能可接受',
          ],
        },

        { text: '第四章：选型建议', style: 'chapter', tocItem: true, pageBreak: 'before' },
        {
          text: '根据不同场景选择合适的方案：',
          margin: [0, 0, 0, 10],
        },
        {
          ol: [
            { text: '简单文档打印：window.print() + CSS', bold: true },
            { text: '中等复杂度：Print.js 或 jsPDF', bold: true },
            { text: '复杂文档生成：pdfmake', bold: true },
            { text: '所见即所得：html2canvas + jsPDF', bold: true },
          ],
        },
      ],
      styles: {
        title: {
          fontSize: 32,
          bold: true,
          alignment: 'center',
        },
        subtitle: {
          fontSize: 18,
          alignment: 'center',
        },
        tocHeader: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 15],
        },
        chapter: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 15],
          color: '#667eea',
        },
        section: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 8],
        },
        tableHeader: {
          bold: true,
          color: 'white',
        },
      },
      ...chineseStyles,
    }

    pdfMake.createPdf(docDefinition).download('前端打印完整调研报告.pdf')

    statusMessage.value = '✅ 完整报告生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('报告生成失败:', error)
    statusMessage.value = '❌ 报告生成失败'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.demo-page {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.page-header h1 {
  color: #2d3748;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

.content-grid {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2rem;
}

.info-panel {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.info-panel h2 {
  color: #667eea;
  margin-bottom: 1.5rem;
}

.info-section {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.info-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.info-section h3 {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.info-section ul {
  list-style: none;
  padding: 0;
}

.info-section li {
  padding: 0.25rem 0;
  font-size: 0.9rem;
}

.info-section p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.rating {
  color: #667eea;
  font-weight: 600;
}

.highlight {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ed8936;
}

.demo-panel {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5568d3;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status-message {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 6px;
  background: #e6f4ea;
  color: #1e7e34;
  font-weight: 500;
  text-align: center;
}

.status-message.error {
  background: #fce8e6;
  color: #c5221f;
}

.loading-fonts {
  color: #ed8936;
  font-weight: 500;
  margin-top: 0.5rem;
}

.fonts-ready {
  color: #48bb78;
  font-weight: 500;
  margin-top: 0.5rem;
}

.btn-secondary {
  background: #48bb78;
  color: white;
}

.btn-secondary:hover {
  background: #38a169;
}

.btn-info {
  background: #4299e1;
  color: white;
}

.btn-info:hover {
  background: #3182ce;
}

.btn-warning {
  background: #ed8936;
  color: white;
}

.btn-warning:hover {
  background: #dd6b20;
}

.preview-hint {
  background: #edf2f7;
  border-left: 4px solid #667eea;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 4px;
}

.preview-hint p {
  margin: 0;
  color: #4a5568;
}

.code-examples {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.code-examples h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.code-block {
  margin-bottom: 1.5rem;
}

.code-block h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.code-block pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0;
}

.code-block code {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>
