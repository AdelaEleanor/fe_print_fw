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

        <!-- ==================== 基础示例区域 ==================== -->
        <div class="examples-section">
          <h3 class="section-title">📘 创建与编辑示例</h3>

          <div class="example-tabs">
            <button
              v-for="(example, index) in examples"
              :key="index"
              :class="['tab-button', { active: currentExample === index }]"
              @click="currentExample = index"
            >
              {{ example.name }}
            </button>
          </div>

          <!-- 示例1: 创建空白PDF -->
          <div v-if="currentExample === 0" class="example-content">
            <h4>1. 创建空白PDF</h4>
            <p>使用PDFDocument.create()创建空白文档并添加页面。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  页面宽度:
                  <input type="number" v-model="pageWidth" min="200" max="1000" />
                </label>
                <label>
                  页面高度:
                  <input type="number" v-model="pageHeight" min="200" max="1200" />
                </label>
                <label>
                  页数:
                  <input type="number" v-model="pageCount" min="1" max="10" />
                </label>
              </div>
              <div class="preview-box">
                <div class="page-preview" :style="pagePreviewStyle">
                  <span>{{ pageWidth }} × {{ pageHeight }}</span>
                </div>
                <p>将创建 {{ pageCount }} 页空白PDF</p>
              </div>
              <button @click="example1Generate" class="btn btn-primary">创建空白PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import { PDFDocument } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();

// 添加页面，参数为 [宽度, 高度]
const page = pdfDoc.addPage([600, 800]);

const pdfBytes = await pdfDoc.save();
download(pdfBytes, 'blank.pdf');</code></pre>
            </div>
          </div>

          <!-- 示例2: 添加文本 -->
          <div v-if="currentExample === 1" class="example-content">
            <h4>2. 添加文本</h4>
            <p>使用drawText方法在PDF中绘制文本。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  文本内容:
                  <input type="text" v-model="textContent" placeholder="Hello PDF-LIB" />
                </label>
                <label>
                  字体大小:
                  <input type="number" v-model="textSize" min="8" max="72" />
                </label>
                <label>
                  文本颜色:
                  <input type="color" v-model="textColor" />
                </label>
              </div>
              <div
                class="preview-box text-preview"
                :style="{ color: textColor, fontSize: textSize + 'px' }"
              >
                {{ textContent || 'Hello PDF-LIB' }}
              </div>
              <button @click="example2Generate" class="btn btn-primary">生成文本PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import { PDFDocument, rgb } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();
const page = pdfDoc.addPage([600, 400]);

page.drawText('Hello PDF-LIB', {
  x: 50,
  y: 350,
  size: 30,
  color: rgb(0, 0.53, 0.71), // RGB值范围0-1
});

const pdfBytes = await pdfDoc.save();</code></pre>
            </div>
          </div>

          <!-- 示例3: 绘制图形 -->
          <div v-if="currentExample === 2" class="example-content">
            <h4>3. 绘制图形</h4>
            <p>绘制矩形、圆形、线条等基本图形。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  图形类型:
                  <select v-model="shapeType">
                    <option value="rectangle">矩形</option>
                    <option value="circle">圆形</option>
                    <option value="line">线条</option>
                  </select>
                </label>
                <label>
                  边框颜色:
                  <input type="color" v-model="borderColor" />
                </label>
                <label>
                  填充颜色:
                  <input type="color" v-model="fillColor" />
                </label>
              </div>
              <div class="preview-box shape-preview">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <rect
                    v-if="shapeType === 'rectangle'"
                    x="30"
                    y="25"
                    width="140"
                    height="100"
                    :stroke="borderColor"
                    :fill="fillColor"
                    stroke-width="2"
                  />
                  <circle
                    v-if="shapeType === 'circle'"
                    cx="100"
                    cy="75"
                    r="50"
                    :stroke="borderColor"
                    :fill="fillColor"
                    stroke-width="2"
                  />
                  <line
                    v-if="shapeType === 'line'"
                    x1="30"
                    y1="25"
                    x2="170"
                    y2="125"
                    :stroke="borderColor"
                    stroke-width="3"
                  />
                </svg>
              </div>
              <button @click="example3Generate" class="btn btn-primary">生成图形PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import { PDFDocument, rgb } from 'pdf-lib';

const page = pdfDoc.addPage();

// 绘制矩形
page.drawRectangle({
  x: 50, y: 500,
  width: 200, height: 100,
  borderColor: rgb(0, 0, 0),
  color: rgb(0.9, 0.9, 0.9),
  borderWidth: 2,
});

// 绘制圆形
page.drawCircle({
  x: 400, y: 550,
  size: 50,
  borderColor: rgb(0, 0.5, 0),
  borderWidth: 2,
});

// 绘制线条
page.drawLine({
  start: { x: 50, y: 300 },
  end: { x: 550, y: 300 },
  thickness: 2,
  color: rgb(0, 0, 1),
});</code></pre>
            </div>
          </div>

          <!-- 示例4: 使用标准字体 -->
          <div v-if="currentExample === 3" class="example-content">
            <h4>4. 使用标准字体</h4>
            <p>PDF-LIB支持14种PDF标准字体，无需额外嵌入。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  选择字体:
                  <select v-model="selectedFont">
                    <option v-for="font in standardFonts" :key="font" :value="font">
                      {{ font }}
                    </option>
                  </select>
                </label>
              </div>
              <div class="preview-box">
                <div class="font-list">
                  <div
                    v-for="font in standardFonts"
                    :key="font"
                    :class="['font-item', { active: selectedFont === font }]"
                  >
                    {{ font }}
                  </div>
                </div>
              </div>
              <button @click="example4Generate" class="btn btn-primary">生成字体示例PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import { PDFDocument, StandardFonts } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();

// 嵌入标准字体
const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
const courier = await pdfDoc.embedFont(StandardFonts.Courier);

const page = pdfDoc.addPage();
page.drawText('Helvetica Font', {
  x: 50, y: 700,
  font: helvetica,
  size: 20,
});</code></pre>
            </div>
          </div>

          <!-- 示例5: 页面旋转 -->
          <div v-if="currentExample === 4" class="example-content">
            <h4>5. 页面旋转与尺寸</h4>
            <p>获取和设置页面旋转角度和尺寸。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  旋转角度:
                  <select v-model="rotationAngle">
                    <option :value="0">0°</option>
                    <option :value="90">90°</option>
                    <option :value="180">180°</option>
                    <option :value="270">270°</option>
                  </select>
                </label>
              </div>
              <div class="preview-box">
                <div class="rotation-preview" :style="{ transform: `rotate(${rotationAngle}deg)` }">
                  <div class="page-indicator">
                    <span>↑ 顶部</span>
                  </div>
                </div>
              </div>
              <button @click="example5Generate" class="btn btn-primary">生成旋转页面PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import { PDFDocument, degrees } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();
const page = pdfDoc.addPage([600, 800]);

// 设置页面旋转
page.setRotation(degrees(90));

// 获取页面尺寸
const { width, height } = page.getSize();
console.log(`Page size: ${width} x ${height}`);

// 设置新尺寸
page.setSize(800, 600);</code></pre>
            </div>
          </div>

          <!-- 示例6: 元数据设置 -->
          <div v-if="currentExample === 5" class="example-content">
            <h4>6. 文档元数据</h4>
            <p>设置PDF的标题、作者、主题等元数据信息。</p>
            <div class="demo-box">
              <div class="config-controls metadata-form">
                <label>
                  标题:
                  <input type="text" v-model="docTitle" placeholder="文档标题" />
                </label>
                <label>
                  作者:
                  <input type="text" v-model="docAuthor" placeholder="作者名" />
                </label>
                <label>
                  主题:
                  <input type="text" v-model="docSubject" placeholder="文档主题" />
                </label>
                <label>
                  关键词:
                  <input type="text" v-model="docKeywords" placeholder="关键词1, 关键词2" />
                </label>
              </div>
              <div class="preview-box metadata-preview">
                <h5>文档属性预览</h5>
                <p><strong>标题:</strong> {{ docTitle || '(未设置)' }}</p>
                <p><strong>作者:</strong> {{ docAuthor || '(未设置)' }}</p>
                <p><strong>主题:</strong> {{ docSubject || '(未设置)' }}</p>
                <p><strong>关键词:</strong> {{ docKeywords || '(未设置)' }}</p>
              </div>
              <button @click="example6Generate" class="btn btn-primary">生成带元数据PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>const pdfDoc = await PDFDocument.create();

// 设置元数据
pdfDoc.setTitle('My Document Title');
pdfDoc.setAuthor('Author Name');
pdfDoc.setSubject('Document Subject');
pdfDoc.setKeywords(['pdf', 'lib', 'example']);
pdfDoc.setProducer('PDF-LIB Demo');
pdfDoc.setCreator('Vue.js Application');
pdfDoc.setCreationDate(new Date());
pdfDoc.setModificationDate(new Date());</code></pre>
            </div>
          </div>

          <!-- 示例7: ECharts图表 -->
          <div v-if="currentExample === 6" class="example-content">
            <h4>7. ECharts图表嵌入PDF</h4>
            <p class="framework-highlight">
              📝 <strong>PDF-LIB特点：</strong>唯一可编辑现有PDF的库，支持插入、删除、重排页面<br />
              <span class="advantage">✅ 优势：</span
              >可在现有PDF插入图表；支持合并/拆分PDF；可修改已有文档<br />
              <span class="disadvantage">❌ 劣势：</span
              >体积较大(200KB)；API复杂度高；需手动坐标定位；中文需额外字体<br />
              <span class="comparison">🔄 对比jsPDF：</span
              >jsPDF更轻量(120KB)，API更简单，适合生成新PDF<br />
              <span class="comparison">🔄 对比pdfmake：</span
              >pdfmake声明式布局更简单，自动排版，适合报表生成
            </p>

            <div class="demo-box">
              <div class="preview-box" style="padding: 20px; background: #fff">
                <div ref="pdflibChartRef" style="width: 100%; height: 300px"></div>
              </div>
              <button @click="example7Generate" class="btn btn-primary">导出图表到PDF</button>
            </div>

            <div class="code-display">
              <pre v-pre><code>// 1. 将ECharts导出为图片
const chart = echarts.init(chartRef.value)
const imageDataUrl = chart.getDataURL({
  type: 'png',
  pixelRatio: 2,
  backgroundColor: '#fff'
})

// 2. 加载图片到PDF-LIB
const pdfDoc = await PDFDocument.create()
const page = pdfDoc.addPage([600, 400])
const pngImage = await pdfDoc.embedPng(imageDataUrl)

// 3. 在PDF中插入图片
const { width, height } = pngImage.scale(0.5)
page.drawImage(pngImage, {
  x: 50,
  y: 50,
  width,
  height
})

// 4. 保存PDF
const pdfBytes = await pdfDoc.save()
download(pdfBytes, 'chart.pdf', 'application/pdf')</code></pre>
            </div>
          </div>
        </div>

        <!-- ==================== 高级示例区域 ==================== -->
        <div class="advanced-section">
          <h3 class="section-title">📕 合并/表单/水印示例</h3>

          <div class="example-tabs">
            <button
              v-for="(example, index) in advancedExamples"
              :key="index"
              :class="['tab-button advanced', { active: currentAdvanced === index }]"
              @click="currentAdvanced = index"
            >
              {{ example.name }}
            </button>
          </div>

          <!-- 高级示例1: PDF合并 -->
          <div v-if="currentAdvanced === 0" class="example-content">
            <h4>1. PDF合并</h4>
            <p>将多个PDF文档合并为一个。</p>
            <div class="demo-box">
              <div class="merge-preview">
                <div class="pdf-thumb">PDF 1</div>
                <div class="merge-arrow">+</div>
                <div class="pdf-thumb">PDF 2</div>
                <div class="merge-arrow">+</div>
                <div class="pdf-thumb">PDF 3</div>
                <div class="merge-arrow">=</div>
                <div class="pdf-thumb merged">合并PDF</div>
              </div>
              <button @click="advanced1Generate" class="btn btn-advanced">执行合并</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import { PDFDocument } from 'pdf-lib';

const mergedPdf = await PDFDocument.create();

// 加载源PDF
const pdf1 = await PDFDocument.load(pdf1Bytes);
const pdf2 = await PDFDocument.load(pdf2Bytes);

// 复制页面到新文档
const pages1 = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
const pages2 = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());

// 添加页面
pages1.forEach(page =&gt; mergedPdf.addPage(page));
pages2.forEach(page =&gt; mergedPdf.addPage(page));

const mergedBytes = await mergedPdf.save();</code></pre>
            </div>
          </div>

          <!-- 高级示例2: PDF拆分 -->
          <div v-if="currentAdvanced === 1" class="example-content">
            <h4>2. PDF拆分</h4>
            <p>从PDF中提取指定页面。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  起始页:
                  <input type="number" v-model="splitStart" min="1" max="5" />
                </label>
                <label>
                  结束页:
                  <input type="number" v-model="splitEnd" min="1" max="5" />
                </label>
              </div>
              <div class="preview-box">
                <div class="page-range-preview">
                  <div
                    v-for="i in 5"
                    :key="i"
                    :class="['page-box', { selected: i >= splitStart && i <= splitEnd }]"
                  >
                    {{ i }}
                  </div>
                </div>
                <p>将提取第 {{ splitStart }} - {{ splitEnd }} 页</p>
              </div>
              <button @click="advanced2Generate" class="btn btn-advanced">拆分PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 从源PDF提取指定页面
const sourcePdf = await PDFDocument.load(sourceBytes);
const newPdf = await PDFDocument.create();

// 获取要提取的页面索引 (0-based)
const pageIndices = [0, 1, 2]; // 提取第1-3页

// 复制指定页面
const copiedPages = await newPdf.copyPages(sourcePdf, pageIndices);

// 添加到新文档
copiedPages.forEach(page =&gt; newPdf.addPage(page));

const splitBytes = await newPdf.save();</code></pre>
            </div>
          </div>

          <!-- 高级示例3: 表单创建 -->
          <div v-if="currentAdvanced === 2" class="example-content">
            <h4>3. 创建表单</h4>
            <p>创建可填写的PDF表单字段。</p>
            <div class="demo-box">
              <div class="form-preview">
                <div class="form-field">
                  <label>姓名:</label>
                  <input type="text" v-model="formName" placeholder="输入姓名" />
                </div>
                <div class="form-field">
                  <label>邮箱:</label>
                  <input type="email" v-model="formEmail" placeholder="输入邮箱" />
                </div>
                <div class="form-field checkbox-field">
                  <input type="checkbox" v-model="formAgree" />
                  <label>同意条款</label>
                </div>
              </div>
              <button @click="advanced3Generate" class="btn btn-advanced">生成表单PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>const pdfDoc = await PDFDocument.create();
const page = pdfDoc.addPage();
const form = pdfDoc.getForm();

// 创建文本字段
const nameField = form.createTextField('name');
nameField.setText('默认值');
nameField.addToPage(page, { x: 100, y: 700, width: 200, height: 25 });

// 创建复选框
const checkbox = form.createCheckBox('agree');
checkbox.addToPage(page, { x: 100, y: 650, width: 20, height: 20 });

// 创建下拉框
const dropdown = form.createDropdown('options');
dropdown.addOptions(['选项1', '选项2', '选项3']);
dropdown.addToPage(page, { x: 100, y: 600, width: 150, height: 25 });</code></pre>
            </div>
          </div>

          <!-- 高级示例4: 添加水印 -->
          <div v-if="currentAdvanced === 3" class="example-content">
            <h4>4. 添加水印</h4>
            <p>在每页添加半透明文字水印。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  水印文字:
                  <input type="text" v-model="watermarkText" placeholder="CONFIDENTIAL" />
                </label>
                <label>
                  透明度:
                  <input type="number" v-model="watermarkOpacity" min="0.1" max="0.5" step="0.1" />
                </label>
                <label>
                  旋转角度:
                  <input type="number" v-model="watermarkAngle" min="-90" max="0" />
                </label>
              </div>
              <div class="preview-box watermark-preview">
                <div
                  class="watermark-text"
                  :style="{ opacity: watermarkOpacity, transform: `rotate(${watermarkAngle}deg)` }"
                >
                  {{ watermarkText || 'CONFIDENTIAL' }}
                </div>
              </div>
              <button @click="advanced4Generate" class="btn btn-advanced">生成带水印PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import { degrees } from 'pdf-lib';

const pages = pdfDoc.getPages();

pages.forEach(page =&gt; {
  const { width, height } = page.getSize();

  page.drawText('CONFIDENTIAL', {
    x: width / 2 - 100,
    y: height / 2,
    size: 60,
    color: rgb(0.9, 0.1, 0.1),
    opacity: 0.2,
    rotate: degrees(-45),
  });
});</code></pre>
            </div>
          </div>

          <!-- 高级示例5: 嵌入图片 -->
          <div v-if="currentAdvanced === 4" class="example-content">
            <h4>5. 嵌入图片</h4>
            <p>在PDF中嵌入PNG或JPG图片。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  图片宽度:
                  <input type="number" v-model="imageWidth" min="50" max="500" />
                </label>
                <label>
                  图片高度:
                  <input type="number" v-model="imageHeight" min="50" max="500" />
                </label>
                <label>
                  透明度:
                  <input type="number" v-model="imageOpacity" min="0.1" max="1" step="0.1" />
                </label>
              </div>
              <div class="preview-box">
                <div
                  class="image-placeholder"
                  :style="{
                    width: imageWidth + 'px',
                    height: imageHeight + 'px',
                    opacity: imageOpacity,
                  }"
                >
                  示例图片
                </div>
              </div>
              <button @click="advanced5Generate" class="btn btn-advanced">生成图片PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 嵌入PNG
const pngBytes = await fetch('image.png').then(r =&gt; r.arrayBuffer());
const pngImage = await pdfDoc.embedPng(pngBytes);

// 嵌入JPG
const jpgBytes = await fetch('photo.jpg').then(r =&gt; r.arrayBuffer());
const jpgImage = await pdfDoc.embedJpg(jpgBytes);

// 绘制图片
page.drawImage(pngImage, {
  x: 50,
  y: 500,
  width: 200,
  height: 150,
  opacity: 0.8,
});</code></pre>
            </div>
          </div>

          <!-- 高级示例6: 复制页面 -->
          <div v-if="currentAdvanced === 5" class="example-content">
            <h4>6. 复制与插入页面</h4>
            <p>复制页面并插入到指定位置。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  复制次数:
                  <input type="number" v-model="copyCount" min="1" max="5" />
                </label>
                <label>
                  插入位置:
                  <select v-model="insertPosition">
                    <option value="start">开头</option>
                    <option value="end">末尾</option>
                  </select>
                </label>
              </div>
              <div class="preview-box">
                <div class="copy-preview">
                  <div class="source-page">源页面</div>
                  <div class="arrow">→</div>
                  <div class="copies">
                    <div v-for="i in copyCount" :key="i" class="copy-page">副本 {{ i }}</div>
                  </div>
                </div>
              </div>
              <button @click="advanced6Generate" class="btn btn-advanced">执行复制</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 复制页面
const [copiedPage] = await pdfDoc.copyPages(sourcePdf, [0]);

// 在指定位置插入
pdfDoc.insertPage(0, copiedPage); // 插入到开头

// 或添加到末尾
pdfDoc.addPage(copiedPage);

// 移除页面
pdfDoc.removePage(2); // 移除第3页

// 获取页面数量
const pageCount = pdfDoc.getPageCount();</code></pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'

// ==================== 基础示例状态 ====================
const currentExample = ref(0)
const examples = [
  { name: '创建空白' },
  { name: '添加文本' },
  { name: '绘制图形' },
  { name: '标准字体' },
  { name: '页面旋转' },
  { name: '元数据' },
  { name: 'ECharts图表' },
]

// ECharts refs
const pdflibChartRef = ref<HTMLDivElement>()
let pdflibChart: ECharts | null = null

// 示例1: 创建空白PDF
const pageWidth = ref(600)
const pageHeight = ref(800)
const pageCount = ref(1)

// 示例2: 添加文本
const textContent = ref('Hello PDF-LIB')
const textSize = ref(30)
const textColor = ref('#0087b5')

// 示例3: 绘制图形
const shapeType = ref<'rectangle' | 'circle' | 'line'>('rectangle')
const borderColor = ref('#000000')
const fillColor = ref('#e6e6e6')

// 示例4: 标准字体
const standardFonts = [
  'Helvetica',
  'HelveticaBold',
  'HelveticaOblique',
  'HelveticaBoldOblique',
  'TimesRoman',
  'TimesRomanBold',
  'TimesRomanItalic',
  'TimesRomanBoldItalic',
  'Courier',
  'CourierBold',
  'CourierOblique',
  'CourierBoldOblique',
  'Symbol',
  'ZapfDingbats',
]
const selectedFont = ref('Helvetica')

// 示例5: 页面旋转
const rotationAngle = ref(0)

// 示例6: 元数据
const docTitle = ref('My Document')
const docAuthor = ref('Author Name')
const docSubject = ref('Document Subject')
const docKeywords = ref('pdf, lib, example')

// ==================== 高级示例状态 ====================
const currentAdvanced = ref(0)
const advancedExamples = [
  { name: 'PDF合并' },
  { name: 'PDF拆分' },
  { name: '创建表单' },
  { name: '添加水印' },
  { name: '嵌入图片' },
  { name: '复制页面' },
]

// 高级示例2: PDF拆分
const splitStart = ref(1)
const splitEnd = ref(3)

// 高级示例3: 表单
const formName = ref('')
const formEmail = ref('')
const formAgree = ref(false)

// 高级示例4: 水印
const watermarkText = ref('CONFIDENTIAL')
const watermarkOpacity = ref(0.2)
const watermarkAngle = ref(-45)

// 高级示例5: 图片
const imageWidth = ref(200)
const imageHeight = ref(150)
const imageOpacity = ref(1)

// 高级示例6: 复制页面
const copyCount = ref(2)
const insertPosition = ref<'start' | 'end'>('end')

// 计算属性
const pagePreviewStyle = computed(() => ({
  width: `${pageWidth.value * 0.15}px`,
  height: `${pageHeight.value * 0.15}px`,
}))

// 辅助函数：下载PDF
const download = (pdfBytes: Uint8Array, fileName: string) => {
  const blob = new Blob([pdfBytes as unknown as ArrayBuffer], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

// 在新窗口/隐藏 iframe 中打开 PDF 并触发打印
const printPdfBytes = async (pdfBytes: Uint8Array) => {
  const blob = new Blob([pdfBytes as unknown as ArrayBuffer], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const iframe = document.createElement('iframe')
  iframe.style.position = 'fixed'
  iframe.style.right = '0'
  iframe.style.bottom = '0'
  iframe.style.width = '0'
  iframe.style.height = '0'
  iframe.style.border = '0'
  iframe.src = url
  document.body.appendChild(iframe)

  await new Promise<void>((resolve) => {
    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.focus()
          iframe.contentWindow?.print()

          // 监听打印完成事件（打印对话框关闭后清理）
          const cleanup = () => {
            setTimeout(() => {
              try {
                document.body.removeChild(iframe)
              } catch (e) {}
              URL.revokeObjectURL(url)
            }, 100)
          }

          // 尝试监听 afterprint 事件
          if (iframe.contentWindow) {
            iframe.contentWindow.addEventListener('afterprint', cleanup, { once: true })
            // 备用：如果5分钟后还没清理，强制清理
            setTimeout(cleanup, 300000)
          } else {
            cleanup()
          }
        } catch (e) {
          window.open(url)
          setTimeout(() => URL.revokeObjectURL(url), 5000)
        }
        resolve()
      }, 200)
    }
  })
}

// 辅助函数：颜色转换
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1] ?? '0', 16) / 255,
        g: parseInt(result[2] ?? '0', 16) / 255,
        b: parseInt(result[3] ?? '0', 16) / 255,
      }
    : { r: 0, g: 0, b: 0 }
}

// ==================== 基础示例函数 ====================
const example1Generate = async () => {
  const pdfDoc = await PDFDocument.create()

  for (let i = 0; i < pageCount.value; i++) {
    const page = pdfDoc.addPage([pageWidth.value, pageHeight.value])
    page.drawText(`Page ${i + 1}`, {
      x: 50,
      y: pageHeight.value - 50,
      size: 20,
    })
  }

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const example2Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 400])
  const { r, g, b } = hexToRgb(textColor.value)

  page.drawText(textContent.value || 'Hello PDF-LIB', {
    x: 50,
    y: 350,
    size: textSize.value,
    color: rgb(r, g, b),
  })

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const example3Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 400])
  const border = hexToRgb(borderColor.value)
  const fill = hexToRgb(fillColor.value)

  if (shapeType.value === 'rectangle') {
    page.drawRectangle({
      x: 100,
      y: 100,
      width: 400,
      height: 200,
      borderColor: rgb(border.r, border.g, border.b),
      color: rgb(fill.r, fill.g, fill.b),
      borderWidth: 2,
    })
  } else if (shapeType.value === 'circle') {
    page.drawCircle({
      x: 300,
      y: 200,
      size: 100,
      borderColor: rgb(border.r, border.g, border.b),
      color: rgb(fill.r, fill.g, fill.b),
      borderWidth: 2,
    })
  } else if (shapeType.value === 'line') {
    page.drawLine({
      start: { x: 50, y: 50 },
      end: { x: 550, y: 350 },
      thickness: 3,
      color: rgb(border.r, border.g, border.b),
    })
  }

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const example4Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])

  let yPos = 750
  for (const fontName of standardFonts.slice(0, 8)) {
    const fontKey = fontName as keyof typeof StandardFonts
    const font = await pdfDoc.embedFont(StandardFonts[fontKey])
    page.drawText(`${fontName}: The quick brown fox`, {
      x: 50,
      y: yPos,
      size: 16,
      font,
    })
    yPos -= 40
  }

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const example5Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])

  page.setRotation(degrees(rotationAngle.value))

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  page.drawText('This page is rotated!', {
    x: 200,
    y: 400,
    size: 24,
    font,
  })

  page.drawText(`Rotation: ${rotationAngle.value} degrees`, {
    x: 200,
    y: 360,
    size: 16,
    font,
  })

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const example6Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 400])

  // 设置元数据
  pdfDoc.setTitle(docTitle.value || 'Untitled')
  pdfDoc.setAuthor(docAuthor.value || 'Unknown')
  pdfDoc.setSubject(docSubject.value || '')
  pdfDoc.setKeywords(docKeywords.value.split(',').map((k) => k.trim()))
  pdfDoc.setProducer('PDF-LIB Demo')
  pdfDoc.setCreator('Vue.js Application')
  pdfDoc.setCreationDate(new Date())
  pdfDoc.setModificationDate(new Date())

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  page.drawText('Document with Metadata', {
    x: 50,
    y: 350,
    size: 24,
    font,
  })
  page.drawText(`Title: ${docTitle.value}`, { x: 50, y: 300, size: 14, font })
  page.drawText(`Author: ${docAuthor.value}`, { x: 50, y: 275, size: 14, font })
  page.drawText(`Subject: ${docSubject.value}`, { x: 50, y: 250, size: 14, font })

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

// 示例7: ECharts生成PDF
const initPdflibChart = () => {
  if (pdflibChartRef.value && !pdflibChart) {
    pdflibChart = echarts.init(pdflibChartRef.value)
    pdflibChart.setOption({
      title: {
        text: '月度销售趋势',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '销售额',
          type: 'line',
          data: [120, 200, 150, 180, 220, 250],
          smooth: true,
          itemStyle: {
            color: '#5470c6',
          },
          areaStyle: {
            color: 'rgba(84, 112, 198, 0.3)',
          },
        },
      ],
    })
  }
}

const example7Generate = async () => {
  if (!pdflibChart) return

  try {
    // 等待图表完全渲染
    await new Promise((resolve) => setTimeout(resolve, 500))

    // 1. 从ECharts获取图片数据
    const imageDataUrl = pdflibChart.getDataURL({
      type: 'png',
      pixelRatio: 3,
      backgroundColor: '#fff',
    })

    // 2. 创建PDF（A4尺寸 595 x 842）
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([595, 842])

    // 3. 嵌入PNG图片
    const pngImage = await pdfDoc.embedPng(imageDataUrl)

    // 4. 计算合适的缩放比例，使图表占满大部分页面
    const maxWidth = 500
    const maxHeight = 400
    const imgDims = pngImage.scale(1)
    const scaleX = maxWidth / imgDims.width
    const scaleY = maxHeight / imgDims.height
    const scale = Math.min(scaleX, scaleY)
    const scaledDims = pngImage.scale(scale)

    // 5. 在PDF中绘制图表（居中）
    page.drawImage(pngImage, {
      x: (595 - scaledDims.width) / 2,
      y: (842 - scaledDims.height) / 2 + 100,
      width: scaledDims.width,
      height: scaledDims.height,
    })

    // 6. 添加文字说明
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    page.drawText('ECharts Chart Export via PDF-LIB', {
      x: 50,
      y: 780,
      size: 20,
      font,
      color: rgb(0.2, 0.2, 0.2),
    })

    const pdfBytes = await pdfDoc.save()
    await printPdfBytes(pdfBytes)
  } catch (error) {
    console.error('生成PDF失败:', error)
    alert('生成PDF失败: ' + error)
  }
}

// Watch currentExample to initialize chart
watch(currentExample, async (newVal) => {
  if (newVal === 6) {
    await nextTick()
    initPdflibChart()
  }
})

// ==================== 高级示例函数 ====================
const advanced1Generate = async () => {
  // 创建三个PDF
  const pdfs = []
  for (let i = 1; i <= 3; i++) {
    const doc = await PDFDocument.create()
    const page = doc.addPage([600, 400])
    const font = await doc.embedFont(StandardFonts.Helvetica)
    page.drawText(`PDF Document ${i}`, {
      x: 50,
      y: 350,
      size: 30,
      font,
      color: rgb(i * 0.2, 0.3, 0.7),
    })
    pdfs.push(await doc.save())
  }

  // 合并
  const mergedPdf = await PDFDocument.create()
  for (const pdfBytes of pdfs) {
    const pdf = await PDFDocument.load(pdfBytes)
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
    copiedPages.forEach((page) => mergedPdf.addPage(page))
  }

  const mergedBytes = await mergedPdf.save()
  await printPdfBytes(mergedBytes)
}

const advanced2Generate = async () => {
  // 创建一个5页的PDF
  const sourcePdf = await PDFDocument.create()
  const font = await sourcePdf.embedFont(StandardFonts.Helvetica)

  for (let i = 1; i <= 5; i++) {
    const page = sourcePdf.addPage([600, 400])
    page.drawText(`Page ${i}`, { x: 250, y: 200, size: 48, font })
  }
  const sourceBytes = await sourcePdf.save()

  // 拆分
  const loadedPdf = await PDFDocument.load(sourceBytes)
  const newPdf = await PDFDocument.create()

  const startIdx = splitStart.value - 1
  const endIdx = splitEnd.value - 1
  const indices = []
  for (let i = startIdx; i <= endIdx && i < 5; i++) {
    indices.push(i)
  }

  const copiedPages = await newPdf.copyPages(loadedPdf, indices)
  copiedPages.forEach((page) => newPdf.addPage(page))

  const splitBytes = await newPdf.save()
  await printPdfBytes(splitBytes)
}

const advanced3Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])
  const form = pdfDoc.getForm()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  page.drawText('User Information Form', {
    x: 180,
    y: 750,
    size: 24,
    font,
  })

  // 姓名字段
  page.drawText('Name:', { x: 50, y: 680, size: 14, font })
  const nameField = form.createTextField('name')
  nameField.setText(formName.value || '')
  nameField.addToPage(page, { x: 150, y: 670, width: 200, height: 25 })

  // 邮箱字段
  page.drawText('Email:', { x: 50, y: 630, size: 14, font })
  const emailField = form.createTextField('email')
  emailField.setText(formEmail.value || '')
  emailField.addToPage(page, { x: 150, y: 620, width: 200, height: 25 })

  // 复选框
  const checkbox = form.createCheckBox('agree')
  checkbox.addToPage(page, { x: 50, y: 570, width: 20, height: 20 })
  if (formAgree.value) checkbox.check()
  page.drawText('I agree to terms', { x: 80, y: 575, size: 12, font })

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const advanced4Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  // 创建两页内容
  for (let i = 1; i <= 2; i++) {
    const page = pdfDoc.addPage([600, 800])
    page.drawText(`Page ${i} Content`, { x: 50, y: 750, size: 20, font })
  }

  // 添加水印
  const pages = pdfDoc.getPages()
  pages.forEach((page) => {
    const { width, height } = page.getSize()
    page.drawText(watermarkText.value || 'CONFIDENTIAL', {
      x: width / 2 - 100,
      y: height / 2,
      size: 60,
      font,
      color: rgb(0.9, 0.1, 0.1),
      opacity: watermarkOpacity.value,
      rotate: degrees(watermarkAngle.value),
    })
  })

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const advanced5Generate = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  page.drawText('Image Embedding Example', { x: 50, y: 750, size: 24, font })

  // 创建示例PNG (1x1透明像素)
  const pngDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
  const pngBytes = await fetch(pngDataUrl).then((res) => res.arrayBuffer())
  const pngImage = await pdfDoc.embedPng(pngBytes)

  // 绘制多个图片
  for (let i = 0; i < 3; i++) {
    page.drawImage(pngImage, {
      x: 50 + i * (imageWidth.value + 20),
      y: 500,
      width: imageWidth.value,
      height: imageHeight.value,
      opacity: imageOpacity.value - i * 0.2,
    })
  }

  page.drawText('(Images with different opacity)', { x: 50, y: 450, size: 12, font })

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

const advanced6Generate = async () => {
  // 创建源PDF
  const sourcePdf = await PDFDocument.create()
  const sourceFont = await sourcePdf.embedFont(StandardFonts.Helvetica)
  const sourcePage = sourcePdf.addPage([600, 400])
  sourcePage.drawText('Original Page', { x: 200, y: 200, size: 30, font: sourceFont })
  const sourceBytes = await sourcePdf.save()

  // 复制页面
  const pdfDoc = await PDFDocument.create()
  const loaded = await PDFDocument.load(sourceBytes)

  for (let i = 0; i < copyCount.value; i++) {
    const [copiedPage] = await pdfDoc.copyPages(loaded, [0])
    if (insertPosition.value === 'start') {
      pdfDoc.insertPage(i, copiedPage)
    } else {
      pdfDoc.addPage(copiedPage)
    }
  }

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
}

// ==================== 原有快捷功能 ====================
const createBasicPDF = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 400])

  const { width, height } = page.getSize()

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
  await printPdfBytes(pdfBytes)
}

const modifyExistingPDF = async () => {
  const existingPdf = await PDFDocument.create()
  const page = existingPdf.addPage([600, 400])
  page.drawText('Original PDF Document', {
    x: 50,
    y: 350,
    size: 24,
    color: rgb(0, 0, 0),
  })
  const existingPdfBytes = await existingPdf.save()

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
  await printPdfBytes(modifiedPdfBytes)
}

const mergePDFs = async () => {
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

  const mergedPdf = await PDFDocument.create()

  const pdfA = await PDFDocument.load(pdf1Bytes)
  const pdfB = await PDFDocument.load(pdf2Bytes)

  const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices())
  const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices())

  copiedPagesA.forEach((page) => mergedPdf.addPage(page))
  copiedPagesB.forEach((page) => mergedPdf.addPage(page))

  const mergedPdfBytes = await mergedPdf.save()
  await printPdfBytes(mergedPdfBytes)
}

const embedImages = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])

  const pngDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
  const pngBytes = await fetch(pngDataUrl).then((res) => res.arrayBuffer())
  const pngImage = await pdfDoc.embedPng(pngBytes)

  const { height } = page.getSize()

  page.drawText('Image Embedding Example', {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0, 0),
  })

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
  await printPdfBytes(pdfBytes)
}

const addWatermark = async () => {
  const pdfDoc = await PDFDocument.create()
  const page1 = pdfDoc.addPage([600, 800])
  const page2 = pdfDoc.addPage([600, 800])

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  page1.drawText('Page 1 Content', { x: 50, y: 750, size: 20, font })
  page2.drawText('Page 2 Content', { x: 50, y: 750, size: 20, font })

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
  await printPdfBytes(watermarkedPdf)
}

const fillForm = async () => {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])
  const form = pdfDoc.getForm()

  const { height } = page.getSize()

  page.drawText('User Information Form', {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0, 0),
  })

  const nameField = form.createTextField('name')
  nameField.setText('John Doe')
  nameField.addToPage(page, { x: 150, y: height - 120, width: 200, height: 25 })

  page.drawText('Name:', { x: 50, y: height - 110, size: 14 })

  const emailField = form.createTextField('email')
  emailField.setText('john@example.com')
  emailField.addToPage(page, { x: 150, y: height - 170, width: 200, height: 25 })

  page.drawText('Email:', { x: 50, y: height - 160, size: 14 })

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
  await printPdfBytes(filledPdfBytes)
}

const createComplexDoc = async () => {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  const coverPage = pdfDoc.addPage([600, 800])
  const { width: coverWidth, height: coverHeight } = coverPage.getSize()

  // 注: PDF-LIB不直接支持中文，显示拼音替代
  coverPage.drawText('Frontend Printing Report', {
    x: 120,
    y: coverHeight / 2 + 100,
    size: 32,
    font: helveticaBoldFont,
    color: rgb(0, 0.25, 0.5),
  })

  coverPage.drawText('(Qian Duan Da Yin Ji Shu Bao Gao)', {
    x: 150,
    y: coverHeight / 2 + 60,
    size: 14,
    font: timesRomanFont,
    color: rgb(0.4, 0.4, 0.4),
  })

  coverPage.drawText('Modern Web Printing Solutions', {
    x: 130,
    y: coverHeight / 2 + 20,
    size: 20,
    font: timesRomanFont,
    color: rgb(0.2, 0.2, 0.2),
  })

  coverPage.drawText(`Date: ${new Date().toLocaleDateString('en-US')}`, {
    x: 220,
    y: 100,
    size: 14,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5),
  })

  const contentPage = pdfDoc.addPage([600, 800])
  const { height: contentHeight } = contentPage.getSize()

  contentPage.drawText('Chapter 1: Technical Overview', {
    x: 30,
    y: contentHeight - 50,
    size: 22,
    font: helveticaBoldFont,
    color: rgb(0, 0, 0),
  })

  contentPage.drawText('(Di Yi Zhang: Ji Shu Gai Shu)', {
    x: 30,
    y: contentHeight - 75,
    size: 11,
    font: timesRomanFont,
    color: rgb(0.5, 0.5, 0.5),
  })

  const paragraphs = [
    'This report introduces modern frontend printing',
    'framework technology selection and implementation,',
    'including native browser APIs and third-party libs.',
    '',
    'PDF-LIB is a powerful modern PDF manipulation',
    'library supporting creation, editing, merging',
    'and form filling features.',
    '',
    'Key Features:',
    '- Pure JavaScript, no backend required',
    '- Modern ES6+ syntax support',
    '- Complete TypeScript type definitions',
    '- Can edit existing PDF documents',
  ]

  let yPosition = contentHeight - 110
  paragraphs.forEach((text) => {
    contentPage.drawText(text, {
      x: 30,
      y: yPosition,
      size: 12,
      font: timesRomanFont,
      color: rgb(0.2, 0.2, 0.2),
    })
    yPosition -= 20
  })

  const pdfBytes = await pdfDoc.save()
  await printPdfBytes(pdfBytes)
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

/* ==================== 基础示例样式 ==================== */
.examples-section {
  margin-top: 40px;
  padding: 25px;
  background: #f0fff4;
  border-radius: 12px;
  border: 1px solid #9ae6b4;
}

.section-title {
  color: #276749;
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.example-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #9ae6b4;
}

.tab-button {
  padding: 8px 16px;
  border: 1px solid #9ae6b4;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: #c6f6d5;
}

.tab-button.active {
  background: #48bb78;
  color: white;
  border-color: #48bb78;
}

.tab-button.advanced {
  border-color: #feb2b2;
}

.tab-button.advanced:hover {
  background: #fed7d7;
}

.tab-button.advanced.active {
  background: #f56565;
  border-color: #f56565;
}

.example-content {
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.example-content h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.example-content > p {
  color: #718096;
  margin-bottom: 15px;
}

.demo-box {
  margin: 15px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #cbd5e0;
}

.preview-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 15px;
  text-align: center;
}

.config-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
}

.config-controls label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: #4a5568;
}

.config-controls input,
.config-controls select {
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  min-width: 120px;
}

.code-display {
  margin-top: 15px;
}

.code-display pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.5;
}

.btn-advanced {
  background: #f56565;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-advanced:hover {
  background: #e53e3e;
  transform: translateY(-2px);
}

/* ==================== 高级示例样式 ==================== */
.advanced-section {
  margin-top: 40px;
  padding: 25px;
  background: #fff5f5;
  border-radius: 12px;
  border: 1px solid #feb2b2;
}

.advanced-section .section-title {
  color: #c53030;
}

/* 页面预览 */
.page-preview {
  background: #f7fafc;
  border: 2px solid #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 12px;
  color: #718096;
}

/* 文本预览 */
.text-preview {
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

/* 图形预览 */
.shape-preview {
  display: flex;
  justify-content: center;
  padding: 10px;
}

/* 字体列表 */
.font-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.font-item {
  padding: 4px 10px;
  background: #f7fafc;
  border-radius: 4px;
  font-size: 12px;
}

.font-item.active {
  background: #667eea;
  color: white;
}

/* 旋转预览 */
.rotation-preview {
  width: 100px;
  height: 140px;
  background: #f7fafc;
  border: 2px solid #667eea;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  transition: transform 0.3s ease;
}

.page-indicator span {
  font-size: 12px;
  color: #667eea;
}

/* 元数据表单 */
.metadata-form {
  flex-direction: column;
}

.metadata-form label {
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.metadata-form input {
  flex: 1;
}

.metadata-preview h5 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.metadata-preview p {
  margin: 5px 0;
  font-size: 14px;
  text-align: left;
}

/* 合并预览 */
.merge-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.pdf-thumb {
  width: 60px;
  height: 80px;
  background: #f7fafc;
  border: 2px solid #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 4px;
}

.pdf-thumb.merged {
  width: 80px;
  background: #c6f6d5;
  border-color: #48bb78;
}

.merge-arrow {
  font-size: 20px;
  color: #718096;
}

/* 页面范围预览 */
.page-range-preview {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
}

.page-box {
  width: 40px;
  height: 50px;
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

.page-box.selected {
  background: #c6f6d5;
  border-color: #48bb78;
}

/* 表单预览 */
.form-preview {
  padding: 15px;
  background: #f7fafc;
  border-radius: 6px;
  margin-bottom: 15px;
}

.form-field {
  margin-bottom: 15px;
}

.form-field label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-field input[type='text'],
.form-field input[type='email'] {
  width: 100%;
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

.checkbox-field {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox-field label {
  margin-bottom: 0;
}

/* 水印预览 */
.watermark-preview {
  position: relative;
  height: 150px;
  overflow: hidden;
}

.watermark-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 32px;
  font-weight: bold;
  color: #f56565;
  white-space: nowrap;
}

/* 图片占位符 */
.image-placeholder {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 4px;
  font-size: 14px;
}

/* 复制预览 */
.copy-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.source-page {
  width: 60px;
  height: 80px;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  border-radius: 4px;
}

.copies {
  display: flex;
  gap: 10px;
}

.copy-page {
  width: 50px;
  height: 70px;
  background: #c6f6d5;
  border: 2px solid #48bb78;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border-radius: 4px;
}

.arrow {
  font-size: 24px;
  color: #718096;
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

/* 框架特点说明样式 */
.framework-highlight {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #1a202c;
  padding: 1.2rem;
  border-radius: 8px;
  margin: 1rem 0;
  line-height: 2;
  border: 2px solid #4facfe;
}

.framework-highlight strong {
  font-weight: 700;
  color: #2d3748;
}

.framework-highlight .advantage {
  color: #22543d;
  font-weight: 700;
  background: rgba(154, 230, 180, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
}

.framework-highlight .disadvantage {
  color: #742a2a;
  font-weight: 700;
  background: rgba(254, 178, 178, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
}

.framework-highlight .comparison {
  color: #2c5282;
  font-weight: 600;
  background: rgba(190, 227, 248, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
