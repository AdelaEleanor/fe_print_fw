<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📚 PDF-LIB - 现代化PDF操作库</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>pdf-lib</strong></p>
          <p>npm install pdf-lib</p>
        </div>

        <div class="info-section">
          <h3>💾 文件大小</h3>
          <p><strong>~200KB</strong> (压缩后)</p>
          <p>现代化、功能全面</p>
        </div>

        <div class="info-section">
          <h3>🌐 浏览器支持</h3>
          <div class="browser-badges">
            <span class="badge badge-success">Chrome ✓</span>
            <span class="badge badge-success">Firefox ✓</span>
            <span class="badge badge-success">Safari ✓</span>
            <span class="badge badge-success">Edge ✓</span>
            <span class="badge badge-error">IE11 ✗</span>
          </div>
        </div>

        <div class="info-section">
          <h3>⚡ 性能表现</h3>
          <p>初始化: <strong>~50ms</strong></p>
          <p>创建PDF: <strong>~100ms</strong></p>
          <p>编辑PDF: <strong>~150ms</strong></p>
        </div>

        <div class="info-section">
          <h3>✅ 优点</h3>
          <ul>
            <li>现代ES6+ API</li>
            <li>支持创建和编辑</li>
            <li>可填写PDF表单</li>
            <li>支持嵌入字体</li>
            <li>无外部依赖</li>
            <li>TypeScript支持好</li>
            <li>可操作现有PDF</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>❌ 缺点</h3>
          <ul>
            <li>包体积较大</li>
            <li>学习曲线陡峭</li>
            <li>文档相对较少</li>
            <li>不支持IE11</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>🎯 适用场景</h3>
          <ul>
            <li>PDF表单填写</li>
            <li>PDF合并拆分</li>
            <li>PDF编辑修改</li>
            <li>添加水印签名</li>
            <li>文档加密保护</li>
            <li>复杂PDF操作</li>
          </ul>
        </div>
      </aside>

      <main class="demo-content">
        <div class="section">
          <h2>1. 创建基础PDF</h2>
          <button @click="createBasicPDF" class="btn btn-primary">📄 创建基础PDF文档</button>

          <div class="code-block">
            <h4>安装</h4>
            <pre><code>npm install pdf-lib</code></pre>
          </div>

          <div class="code-block">
            <h4>创建PDF</h4>
            <pre><code>import { PDFDocument, rgb } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();
const page = pdfDoc.addPage([600, 400]);

page.drawText('Hello, PDF-LIB!', {
  x: 50,
  y: 350,
  size: 30,
  color: rgb(0, 0.53, 0.71),
});

const pdfBytes = await pdfDoc.save();
download(pdfBytes, 'basic.pdf');</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>2. 修改现有PDF</h2>
          <button @click="modifyExistingPDF" class="btn btn-success">✏️ 编辑PDF文档</button>

          <div class="code-block">
            <h4>加载并修改PDF</h4>
            <pre><code>// 先创建一个PDF，然后修改它
const existingPdfBytes = await createSamplePDF();

// 加载现有PDF
const pdfDoc = await PDFDocument.load(existingPdfBytes);

// Get first page
const pages = pdfDoc.getPages();
const firstPage = pages[0];

// Add text
firstPage.drawText('EDITED', {
  x: 50,
  y: 50,
  size: 20,
  color: rgb(0.95, 0.1, 0.1),
});

const modifiedPdfBytes = await pdfDoc.save();
download(modifiedPdfBytes, 'modified.pdf');</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>3. 合并多个PDF</h2>
          <button @click="mergePDFs" class="btn btn-info">🔗 合并PDF文档</button>

          <div class="code-block">
            <h4>PDF合并</h4>
            <pre><code>import { PDFDocument } from 'pdf-lib';

// 创建新文档
const mergedPdf = await PDFDocument.create();

// 加载源文档
const pdf1 = await PDFDocument.load(pdfBytes1);
const pdf2 = await PDFDocument.load(pdfBytes2);

// 复制页面
const copiedPages1 = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
const copiedPages2 = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());

// 添加到新文档
copiedPages1.forEach((page) =&gt; mergedPdf.addPage(page));
copiedPages2.forEach((page) =&gt; mergedPdf.addPage(page));

const mergedPdfBytes = await mergedPdf.save();
download(mergedPdfBytes, 'merged.pdf');</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>4. 嵌入图片</h2>
          <button @click="embedImages" class="btn btn-warning">🖼️ 嵌入图片到PDF</button>

          <div class="code-block">
            <h4>图片嵌入</h4>
            <pre><code>import { PDFDocument } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();
const page = pdfDoc.addPage([600, 800]);

// 嵌入PNG图片
const pngImageBytes = await fetch('/image.png').then(res =&gt; res.arrayBuffer());
const pngImage = await pdfDoc.embedPng(pngImageBytes);

// 嵌入JPG图片
const jpgImageBytes = await fetch('/photo.jpg').then(res =&gt; res.arrayBuffer());
const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);

// 绘制图片
page.drawImage(pngImage, {
  x: 50,
  y: 500,
  width: 200,
  height: 150,
});

page.drawImage(jpgImage, {
  x: 300,
  y: 500,
  width: 200,
  height: 150,
});</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>5. 添加水印</h2>
          <button @click="addWatermark" class="btn btn-secondary">💧 添加文字水印</button>

          <div class="code-block">
            <h4>水印功能</h4>
            <pre><code>import { PDFDocument, rgb, degrees } from 'pdf-lib';

const pdfDoc = await PDFDocument.load(existingPdfBytes);
const pages = pdfDoc.getPages();

// 给每一页添加水印
pages.forEach((page) =&gt; {
  const { width, height } = page.getSize();

  page.drawText('机密文件', {
    x: width / 2 - 100,
    y: height / 2,
    size: 80,
    color: rgb(0.95, 0.1, 0.1),
    opacity: 0.2,
    rotate: degrees(-45),
  });
});

const watermarkedPdf = await pdfDoc.save();
download(watermarkedPdf, 'watermarked.pdf');</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>6. PDF表单填写</h2>
          <button @click="fillForm" class="btn btn-danger">📝 填写PDF表单</button>

          <div class="code-block">
            <h4>表单操作</h4>
            <pre><code>import { PDFDocument } from 'pdf-lib';

// 加载包含表单的PDF
const pdfDoc = await PDFDocument.load(formPdfBytes);
const form = pdfDoc.getForm();

// 获取表单字段
const nameField = form.getTextField('name');
const emailField = form.getTextField('email');
const checkBox = form.getCheckBox('agree');

// 填写表单
nameField.setText('张三');
emailField.setText('zhang@example.com');
checkBox.check();

// 可选：使表单不可编辑
form.flatten();

const filledPdfBytes = await pdfDoc.save();
download(filledPdfBytes, 'filled-form.pdf');</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>7. 多页复杂文档</h2>
          <button @click="createComplexDoc" class="btn btn-primary">📋 创建复杂文档</button>

          <div class="code-block">
            <h4>复杂布局</h4>
            <pre><code>import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();
const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

// 第一页 - 封面
const coverPage = pdfDoc.addPage([600, 800]);
coverPage.drawText('技术报告', {
  x: 200,
  y: 400,
  size: 50,
  font: helveticaFont,
  color: rgb(0, 0.25, 0.5),
});

// 第二页 - 内容
const contentPage = pdfDoc.addPage([600, 800]);
contentPage.drawText('第一章：概述', {
  x: 50,
  y: 750,
  size: 24,
  font: timesRomanFont,
  color: rgb(0, 0, 0),
});

contentPage.drawText('这是正文内容...', {
  x: 50,
  y: 700,
  size: 14,
  font: timesRomanFont,
  color: rgb(0.2, 0.2, 0.2),
  maxWidth: 500,
  lineHeight: 20,
});

const pdfBytes = await pdfDoc.save();
download(pdfBytes, 'complex-doc.pdf');</code></pre>
          </div>
        </div>

        <div class="comparison-section">
          <h2>🆚 与其他库对比</h2>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>特性</th>
                <th>PDF-LIB</th>
                <th>jsPDF</th>
                <th>pdfmake</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>创建PDF</td>
                <td class="success">✓ 支持</td>
                <td class="success">✓ 支持</td>
                <td class="success">✓ 支持</td>
              </tr>
              <tr>
                <td>编辑现有PDF</td>
                <td class="success">✓ 强大</td>
                <td class="error">✗ 不支持</td>
                <td class="error">✗ 不支持</td>
              </tr>
              <tr>
                <td>PDF合并</td>
                <td class="success">✓ 原生支持</td>
                <td class="error">✗ 不支持</td>
                <td class="error">✗ 不支持</td>
              </tr>
              <tr>
                <td>表单填写</td>
                <td class="success">✓ 完整支持</td>
                <td class="error">✗ 不支持</td>
                <td class="error">✗ 不支持</td>
              </tr>
              <tr>
                <td>API设计</td>
                <td class="success">✓ 现代化</td>
                <td class="warning">△ 传统</td>
                <td class="success">✓ 声明式</td>
              </tr>
              <tr>
                <td>文件大小</td>
                <td class="warning">△ ~200KB</td>
                <td class="success">✓ ~150KB</td>
                <td class="error">✗ ~650KB</td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td class="success">✓ 原生</td>
                <td class="warning">△ 社区</td>
                <td class="success">✓ 原生</td>
              </tr>
              <tr>
                <td>学习曲线</td>
                <td class="warning">△ 中等</td>
                <td class="warning">△ 中等</td>
                <td class="success">✓ 简单</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="best-practices">
          <h2>💡 最佳实践</h2>
          <div class="practice-grid">
            <div class="practice-card">
              <h3>🎯 选择合适场景</h3>
              <p>需要编辑现有PDF时首选PDF-LIB，创建新PDF可考虑jsPDF或pdfmake</p>
            </div>
            <div class="practice-card">
              <h3>⚡ 异步处理</h3>
              <p>所有PDF操作都是异步的，使用async/await确保操作完成</p>
            </div>
            <div class="practice-card">
              <h3>📦 按需加载</h3>
              <p>包体积较大，建议动态导入或代码分割减少初始加载</p>
            </div>
            <div class="practice-card">
              <h3>🔒 安全性</h3>
              <p>处理用户上传的PDF时注意安全验证，避免恶意文件</p>
            </div>
          </div>
        </div>

        <div class="features-highlight">
          <h2>🌟 独特优势</h2>
          <div class="feature-cards">
            <div class="feature-card">
              <div class="feature-icon">🔧</div>
              <h3>PDF编辑能力</h3>
              <p>唯一能原生编辑现有PDF的纯JS库，支持页面操作、内容修改、表单填写等</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔗</div>
              <h3>文档合并拆分</h3>
              <p>轻松合并多个PDF或提取特定页面，适用于文档管理系统</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📝</div>
              <h3>表单操作</h3>
              <p>支持创建、填写、验证PDF表单，适合电子签名和审批流程</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">💾</div>
              <h3>无依赖设计</h3>
              <p>纯JavaScript实现，不依赖任何外部库，更安全可控</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib'

// 辅助函数：下载PDF
const download = (pdfBytes: Uint8Array, fileName: string) => {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

const createBasicPDF = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 400])

  const { width, height } = page.getSize()

  // Note: PDF-LIB default fonts don't support Chinese
  // Use StandardFonts or embed custom fonts for Chinese

  page.drawText('Hello, PDF-LIB!', {
    x: 50,
    y: height - 50,
    size: 30,
    color: rgb(0, 0.53, 0.71),
  })

  page.drawText('Created with PDF-LIB - Basic Document Example', {
    x: 50,
    y: height - 100,
    size: 16,
    color: rgb(0.2, 0.2, 0.2),
  })

  // Draw a rectangle
  page.drawRectangle({
    x: 50,
    y: height - 250,
    width: 500,
    height: 100,
    borderColor: rgb(0, 0.53, 0.71),
    borderWidth: 2,
  })

  page.drawText('Text inside rectangle box', {
    x: 70,
    y: height - 190,
    size: 14,
    color: rgb(0, 0, 0),
  })

  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, 'basic-pdf-lib.pdf')
}

const modifyExistingPDF = async () => {
  // Create an original PDF first
  const existingPdf = await PDFDocument.create()
  const page = existingPdf.addPage([600, 400])
  page.drawText('Original PDF Document', {
    x: 50,
    y: 350,
    size: 24,
    color: rgb(0, 0, 0),
  })
  const existingPdfBytes = await existingPdf.save()

  // Load and modify
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  if (firstPage) {
    firstPage.drawText('EDITED', {
      x: 50,
      y: 300,
      size: 20,
      color: rgb(0.95, 0.1, 0.1),
    })

    firstPage.drawText(`Edit time: ${new Date().toLocaleString('en-US')}`, {
      x: 50,
      y: 270,
      size: 12,
      color: rgb(0.5, 0.5, 0.5),
    })
  }

  const modifiedPdfBytes = await pdfDoc.save()
  download(modifiedPdfBytes, 'modified-pdf.pdf')
}

const mergePDFs = async () => {
  // Create two PDFs
  const pdf1 = await PDFDocument.create()
  const page1 = pdf1.addPage([600, 400])
  page1.drawText('First PDF Document', {
    x: 50,
    y: 350,
    size: 24,
    color: rgb(0.2, 0.4, 0.8),
  })
  const pdf1Bytes = await pdf1.save()

  const pdf2 = await PDFDocument.create()
  const page2 = pdf2.addPage([600, 400])
  page2.drawText('Second PDF Document', {
    x: 50,
    y: 350,
    size: 24,
    color: rgb(0.8, 0.2, 0.4),
  })
  const pdf2Bytes = await pdf2.save()

  // 合并
  const mergedPdf = await PDFDocument.create()

  const pdfA = await PDFDocument.load(pdf1Bytes)
  const pdfB = await PDFDocument.load(pdf2Bytes)

  const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices())
  const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices())

  copiedPagesA.forEach((page) => mergedPdf.addPage(page))
  copiedPagesB.forEach((page) => mergedPdf.addPage(page))

  const mergedPdfBytes = await mergedPdf.save()
  download(mergedPdfBytes, 'merged-pdf.pdf')
}

const embedImages = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])

  // 创建简单的PNG数据（1x1透明像素）
  const pngDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
  const pngBytes = await fetch(pngDataUrl).then((res) => res.arrayBuffer())
  const pngImage = await pdfDoc.embedPng(pngBytes)

  const { width, height } = page.getSize()

  page.drawText('Image Embedding Example', {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0, 0),
  })

  // Draw multiple images with different opacity
  for (let i = 0; i < 3; i++) {
    page.drawImage(pngImage, {
      x: 50 + i * 150,
      y: height - 200,
      width: 100,
      height: 100,
      opacity: 0.3 + i * 0.3,
    })

    page.drawText(`Opacity: ${((0.3 + i * 0.3) * 100).toFixed(0)}%`, {
      x: 50 + i * 150,
      y: height - 220,
      size: 10,
      color: rgb(0, 0, 0),
    })
  }

  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, 'images-embedded.pdf')
}

const addWatermark = async () => {
  // 创建一个示例PDF
  const pdfDoc = await PDFDocument.create()
  const page1 = pdfDoc.addPage([600, 800])
  const page2 = pdfDoc.addPage([600, 800])

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  // Add content
  page1.drawText('Page 1 Content', { x: 50, y: 750, size: 20, font })
  page2.drawText('Page 2 Content', { x: 50, y: 750, size: 20, font })

  // Add watermark to each page
  const pages = pdfDoc.getPages()
  pages.forEach((page) => {
    const { width, height } = page.getSize()

    page.drawText('CONFIDENTIAL', {
      x: width / 2 - 80,
      y: height / 2,
      size: 80,
      font,
      color: rgb(0.95, 0.1, 0.1),
      opacity: 0.2,
      rotate: degrees(-45),
    })

    page.drawText('CONFIDENTIAL', {
      x: width / 2 - 100,
      y: height / 2 - 60,
      size: 40,
      font,
      color: rgb(0.95, 0.1, 0.1),
      opacity: 0.15,
      rotate: degrees(-45),
    })
  })

  const watermarkedPdf = await pdfDoc.save()
  download(watermarkedPdf, 'watermarked.pdf')
}

const fillForm = async () => {
  // 创建包含表单的PDF
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])
  const form = pdfDoc.getForm()

  const { height } = page.getSize()

  // Title
  page.drawText('User Information Form', {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0, 0),
  })

  // Create text fields
  const nameField = form.createTextField('name')
  nameField.setText('John Doe')
  nameField.addToPage(page, { x: 150, y: height - 120, width: 200, height: 25 })

  page.drawText('Name:', { x: 50, y: height - 110, size: 14 })

  const emailField = form.createTextField('email')
  emailField.setText('john@example.com')
  emailField.addToPage(page, { x: 150, y: height - 170, width: 200, height: 25 })

  page.drawText('Email:', { x: 50, y: height - 160, size: 14 })

  // Create checkbox
  const agreeCheckBox = form.createCheckBox('agree')
  agreeCheckBox.check()
  agreeCheckBox.addToPage(page, { x: 50, y: height - 220, width: 20, height: 20 })

  page.drawText('I agree to terms and conditions', { x: 80, y: height - 215, size: 12 })

  page.drawText('(Form auto-filled)', {
    x: 50,
    y: height - 270,
    size: 10,
    color: rgb(0.5, 0.5, 0.5),
  })

  const filledPdfBytes = await pdfDoc.save()
  download(filledPdfBytes, 'filled-form.pdf')
}

const createComplexDoc = async () => {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // 封面页
  const coverPage = pdfDoc.addPage([600, 800])
  const { width: coverWidth, height: coverHeight } = coverPage.getSize()

  coverPage.drawText('Technical Research Report', {
    x: coverWidth / 2 - 120,
    y: coverHeight / 2 + 100,
    size: 50,
    font: helveticaBoldFont,
    color: rgb(0, 0.25, 0.5),
  })

  coverPage.drawText('Modern Frontend Printing', {
    x: coverWidth / 2 - 90,
    y: coverHeight / 2 + 40,
    size: 24,
    font: timesRomanFont,
    color: rgb(0.2, 0.2, 0.2),
  })

  coverPage.drawText(`Date: ${new Date().toLocaleDateString('en-US')}`, {
    x: coverWidth / 2 - 60,
    y: 100,
    size: 14,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5),
  })

  // Content page
  const contentPage = pdfDoc.addPage([600, 800])
  const { width: contentWidth, height: contentHeight } = contentPage.getSize()

  contentPage.drawText('Chapter 1: Overview', {
    x: 50,
    y: contentHeight - 50,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  })

  const paragraphs = [
    'This report provides comprehensive research on modern',
    'frontend printing framework solutions, including native',
    'browser APIs and third-party libraries.',
    '',
    'PDF-LIB is a powerful modern PDF manipulation library',
    'supporting creation, editing, merging, and form filling.',
  ]

  let yPosition = contentHeight - 100
  paragraphs.forEach((text) => {
    contentPage.drawText(text, {
      x: 50,
      y: yPosition,
      size: 14,
      font: timesRomanFont,
      color: rgb(0.2, 0.2, 0.2),
    })
    yPosition -= 25
  })

  // Chapter 2
  contentPage.drawText('Chapter 2: Technology Selection', {
    x: 50,
    y: yPosition - 30,
    size: 24,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  })

  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, 'complex-document.pdf')
}
</script>

<style scoped>
/* 复用之前的样式 */
.demo-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.page-header {
  background: white;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-header h1 {
  margin: 0;
  color: #2c3e50;
  font-size: 28px;
}

.back-link {
  padding: 10px 20px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s;
}

.back-link:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

.content-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

.info-panel {
  background: white;
  border-radius: 12px;
  padding: 25px;
  height: fit-content;
  position: sticky;
  top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-panel h2 {
  margin-top: 0;
  color: #667eea;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.info-section {
  margin-bottom: 20px;
}

.info-section h3 {
  color: #2c3e50;
  font-size: 14px;
  margin-bottom: 8px;
}

.info-section p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}

.info-section ul {
  margin: 8px 0;
  padding-left: 20px;
}

.info-section li {
  margin: 5px 0;
  font-size: 13px;
  color: #666;
}

.browser-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.badge-success {
  background: #d4edda;
  color: #155724;
}

.badge-error {
  background: #f8d7da;
  color: #721c24;
}

.demo-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.section:last-child {
  border-bottom: none;
}

.section h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 22px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 10px;
  margin-bottom: 15px;
}

.btn-primary {
  background: #667eea;
  color: white;
}
.btn-primary:hover {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
}

.btn-success {
  background: #48bb78;
  color: white;
}
.btn-success:hover {
  background: #38a169;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(72, 187, 120, 0.4);
}

.btn-info {
  background: #4299e1;
  color: white;
}
.btn-info:hover {
  background: #3182ce;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(66, 153, 225, 0.4);
}

.btn-warning {
  background: #ed8936;
  color: white;
}
.btn-warning:hover {
  background: #dd6b20;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(237, 137, 54, 0.4);
}

.btn-secondary {
  background: #718096;
  color: white;
}
.btn-secondary:hover {
  background: #4a5568;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(113, 128, 150, 0.4);
}

.btn-danger {
  background: #f56565;
  color: white;
}
.btn-danger:hover {
  background: #e53e3e;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(245, 101, 101, 0.4);
}

.code-block {
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
}

.code-block h4 {
  margin-top: 0;
  color: #667eea;
  font-size: 14px;
}

.code-block pre {
  margin: 10px 0 0 0;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #2c3e50;
}

.comparison-section {
  margin: 40px 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.comparison-table th,
.comparison-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #e0e0e0;
}

.comparison-table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #2c3e50;
}

.comparison-table .success {
  color: #48bb78;
  font-weight: 500;
}

.comparison-table .warning {
  color: #ed8936;
  font-weight: 500;
}

.comparison-table .error {
  color: #f56565;
  font-weight: 500;
}

.best-practices {
  margin: 40px 0;
}

.best-practices h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.practice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.practice-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.practice-card h3 {
  margin-top: 0;
  font-size: 16px;
}

.practice-card p {
  margin: 10px 0 0 0;
  font-size: 14px;
  opacity: 0.95;
}

.features-highlight {
  margin: 40px 0;
}

.features-highlight h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.feature-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s;
}

.feature-card:hover {
  border-color: #667eea;
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.feature-card h3 {
  color: #2c3e50;
  font-size: 18px;
  margin: 10px 0;
}

.feature-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .info-panel {
    position: relative;
    top: 0;
  }
}
</style>
