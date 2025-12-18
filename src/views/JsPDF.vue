<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📄 jsPDF - 强大的PDF生成库</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>jsPDF</strong></p>
          <p>npm install jspdf</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 60+</li>
            <li>✅ Firefox 55+</li>
            <li>✅ Safari 11+</li>
            <li>✅ Edge 79+</li>
            <li>❌ IE 不支持</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (80%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 客户端生成</li>
            <li>✅ 矢量图形</li>
            <li>⚠️ 大文件较慢</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ 完全可控</li>
            <li>✅ addPage()</li>
            <li>✅ 精确定位</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~150 KB</p>
          <p>(压缩后)</p>
        </div>

        <div class="info-section">
          <h3>✨ 核心功能</h3>
          <ul>
            <li>✅ 文本绘制</li>
            <li>✅ 图形绘制</li>
            <li>✅ 图片嵌入</li>
            <li>✅ 自定义字体</li>
            <li>✅ 表格生成</li>
            <li>✅ 多页文档</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>功能强大</li>
            <li>精确控制</li>
            <li>矢量输出</li>
            <li>插件丰富</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>中文需配置字体</li>
            <li>学习曲线较陡</li>
            <li>API相对底层</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button @click="generateBasicPDF" class="btn btn-primary">📄 生成基础PDF</button>
          <button @click="generateTablePDF" class="btn btn-secondary">📊 生成表格PDF</button>
          <button @click="generateMultiPagePDF" class="btn btn-info">📑 生成多页PDF</button>
          <button @click="generateAdvancedPDF" class="btn btn-warning">🎨 高级PDF示例</button>
        </div>

        <div class="preview-area">
          <h3>📋 PDF预览区域</h3>
          <p>点击上方按钮生成并预览PDF文档</p>
          <div id="pdf-preview" class="pdf-canvas"></div>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装和导入</h4>
            <pre><code>npm install jspdf

import { jsPDF } from 'jspdf';</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 基础PDF生成</h4>
            <pre><code>const doc = new jsPDF();

// 添加文本
doc.text('Hello World!', 10, 10);

// 保存PDF
doc.save('document.pdf');

// 或在浏览器中打开
window.open(doc.output('bloburl'));</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 多页文档</h4>
            <pre><code>const doc = new jsPDF();

// 第一页
doc.text('第一页内容', 10, 10);

// 添加新页
doc.addPage();

// 第二页
doc.text('第二页内容', 10, 10);

doc.save('multi-page.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 绘制图形</h4>
            <pre><code>const doc = new jsPDF();

// 矩形
doc.rect(10, 10, 50, 50);

// 圆形
doc.circle(100, 35, 25);

// 线条
doc.line(10, 80, 100, 80);

// 填充矩形
doc.setFillColor(102, 126, 234);
doc.rect(10, 100, 50, 30, 'F');

doc.save('shapes.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 表格生成 (使用插件)</h4>
            <pre><code>import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const doc = new jsPDF();

doc.autoTable({
  head: [['姓名', '年龄', '城市']],
  body: [
    ['张三', 28, '北京'],
    ['李四', 32, '上海'],
    ['王五', 25, '广州']
  ],
  startY: 20,
  theme: 'grid',
  styles: { fontSize: 10 }
});

doc.save('table.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 添加图片</h4>
            <pre><code>const doc = new jsPDF();

// 添加图片 (需要base64或dataURL)
const imgData = 'data:image/jpeg;base64,...';
doc.addImage(imgData, 'JPEG', 10, 10, 100, 100);

doc.save('image.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>7. 自定义页面大小和方向</h4>
            <pre><code>// A4 横向
const doc = new jsPDF('landscape', 'mm', 'a4');

// 自定义尺寸
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: [210, 297] // A4
});

// 常用格式: a4, a3, letter</code></pre>
          </div>

          <div class="code-block">
            <h4>8. 分页控制</h4>
            <pre><code>const doc = new jsPDF();
const pageHeight = doc.internal.pageSize.height;
let yPosition = 20;

for (let i = 0; i &lt; 100; i++) {
  if (yPosition &gt; pageHeight - 20) {
    doc.addPage();
    yPosition = 20;
  }

  doc.text(\`第 \${i + 1} 行\`, 10, yPosition);
  yPosition += 10;
}

doc.save('paginated.pdf');</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { jsPDF } from 'jspdf'

const generateBasicPDF = () => {
  const doc = new jsPDF()

  // 标题
  doc.setFontSize(24)
  doc.text('jsPDF Example Document', 105, 20, { align: 'center' })

  // 副标题
  doc.setFontSize(14)
  doc.text('Basic PDF Generation', 105, 30, { align: 'center' })

  // 正文
  doc.setFontSize(12)
  doc.text('This is a simple PDF document generated using jsPDF.', 20, 50)
  doc.text('jsPDF is a powerful client-side PDF generation library.', 20, 60)

  // 绘制一些图形
  doc.setDrawColor(102, 126, 234)
  doc.rect(20, 80, 170, 50)

  doc.setFillColor(102, 126, 234)
  doc.circle(105, 150, 20, 'F')

  // 保存
  doc.save('basic-example.pdf')
}

const generateTablePDF = () => {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text('Print Framework Comparison', 105, 15, { align: 'center' })

  // 手动创建表格
  const headers = ['Framework', 'Size', 'Performance', 'Rating']
  const data = [
    ['Print.js', '10KB', 'Fast', '⭐⭐⭐⭐'],
    ['jsPDF', '150KB', 'Good', '⭐⭐⭐⭐'],
    ['pdfmake', '600KB', 'Good', '⭐⭐⭐⭐⭐'],
    ['html2canvas', '180KB', 'Medium', '⭐⭐⭐⭐'],
  ]

  let y = 30
  const colWidth = 45
  const rowHeight = 10

  // 表头
  doc.setFillColor(102, 126, 234)
  doc.setTextColor(255, 255, 255)
  doc.rect(20, y, colWidth * 4, rowHeight, 'F')

  doc.setFontSize(12)
  headers.forEach((header, i) => {
    doc.text(header, 22 + i * colWidth, y + 7)
  })

  // 数据行
  doc.setTextColor(0, 0, 0)
  y += rowHeight

  data.forEach((row, rowIndex) => {
    if (rowIndex % 2 === 0) {
      doc.setFillColor(247, 250, 252)
      doc.rect(20, y, colWidth * 4, rowHeight, 'F')
    }

    row.forEach((cell, colIndex) => {
      doc.text(cell, 22 + colIndex * colWidth, y + 7)
    })

    y += rowHeight
  })

  doc.save('table-example.pdf')
}

const generateMultiPagePDF = () => {
  const doc = new jsPDF()
  const pageHeight = doc.internal.pageSize.height

  // 第一页
  doc.setFontSize(20)
  doc.text('Multi-Page PDF Example', 105, 20, { align: 'center' })

  doc.setFontSize(12)
  doc.text('This is Page 1', 20, 40)
  doc.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20, 50)

  let y = 60
  for (let i = 0; i < 20; i++) {
    if (y > pageHeight - 20) {
      doc.addPage()
      y = 20
      doc.text(`Page ${doc.internal.getNumberOfPages()}`, 105, 10, { align: 'center' })
    }
    doc.text(`Line ${i + 1}: Sample content for multi-page document`, 20, y)
    y += 10
  }

  // 最后一页添加页码
  const totalPages = doc.internal.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(10)
    doc.text(`Page ${i} of ${totalPages}`, 105, pageHeight - 10, { align: 'center' })
  }

  doc.save('multi-page.pdf')
}

const generateAdvancedPDF = () => {
  const doc = new jsPDF()

  // 背景色
  doc.setFillColor(102, 126, 234)
  doc.rect(0, 0, 210, 40, 'F')

  // 白色文字标题
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.text('Advanced PDF Report', 105, 25, { align: 'center' })

  // 重置文字颜色
  doc.setTextColor(0, 0, 0)

  // 日期
  doc.setFontSize(10)
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 50)

  // 分节
  doc.setFontSize(16)
  doc.setTextColor(102, 126, 234)
  doc.text('1. Introduction', 20, 65)

  doc.setFontSize(11)
  doc.setTextColor(74, 85, 104)
  const introText =
    'This document demonstrates advanced PDF generation capabilities including custom styling, colors, and layouts.'
  doc.text(introText, 20, 75, { maxWidth: 170 })

  // 卡片样式框
  doc.setDrawColor(226, 232, 240)
  doc.setFillColor(247, 250, 252)
  doc.roundedRect(20, 90, 170, 30, 3, 3, 'FD')

  doc.setFontSize(14)
  doc.setTextColor(45, 55, 72)
  doc.text('Key Features', 25, 100)

  doc.setFontSize(10)
  doc.setTextColor(74, 85, 104)
  doc.text('• Vector graphics support', 25, 108)
  doc.text('• Custom fonts and colors', 25, 115)

  // 图表模拟
  doc.setFontSize(16)
  doc.setTextColor(102, 126, 234)
  doc.text('2. Performance Metrics', 20, 135)

  // 绘制柱状图
  const barData = [80, 65, 90, 75]
  const barColors = [
    [102, 126, 234],
    [72, 187, 120],
    [66, 153, 225],
    [237, 137, 54],
  ]
  const barLabels = ['Speed', 'Quality', 'Features', 'Ease']

  let xPos = 30
  barData.forEach((value, index) => {
    const barHeight = value * 0.5
    doc.setFillColor(...barColors[index])
    doc.rect(xPos, 185 - barHeight, 30, barHeight, 'F')

    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.text(barLabels[index], xPos + 15, 192, { align: 'center' })
    doc.text(`${value}%`, xPos + 15, 180 - barHeight, { align: 'center' })

    xPos += 40
  })

  // 页脚
  doc.setFontSize(8)
  doc.setTextColor(160, 174, 192)
  doc.text('Generated by jsPDF | Page 1', 105, 285, { align: 'center' })

  doc.save('advanced-report.pdf')
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
  color: #48bb78;
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

.preview-area {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  min-height: 300px;
}

.preview-area h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.pdf-canvas {
  background: white;
  min-height: 200px;
  border-radius: 4px;
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
