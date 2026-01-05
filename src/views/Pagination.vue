<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📑 自定义分页控制</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>📖 分页控制深度讲解</h2>

        <div class="info-section highlight-section">
          <h3>🎯 什么是分页控制？</h3>
          <p>分页控制是指在生成或打印文档时，精确决定内容如何分布在多个页面上的能力。</p>
          <p><strong>核心问题：</strong></p>
          <ul>
            <li>在哪里分页？</li>
            <li>如何避免内容被截断？</li>
            <li>如何添加页眉页脚？</li>
            <li>如何显示页码？</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>🔍 关键对比维度</h3>
          <div class="comparison-mini">
            <div class="compare-item">
              <strong>精确度</strong>
              <p>🥇 jsPDF/PDF-LIB - 像素级控制</p>
              <p>🥈 pdfmake - 元素级控制</p>
              <p>🥉 CSS - 依赖浏览器</p>
            </div>
            <div class="compare-item">
              <strong>易用性</strong>
              <p>🥇 CSS - 最简单</p>
              <p>🥈 pdfmake - 声明式</p>
              <p>🥉 jsPDF - 需计算</p>
            </div>
            <div class="compare-item">
              <strong>功能性</strong>
              <p>🥇 PDF-LIB - 可编辑PDF</p>
              <p>🥈 pdfmake - 自动分页</p>
              <p>🥉 CSS - 基础功能</p>
            </div>
          </div>
        </div>

        <h2>各方案特点</h2>

        <div class="info-section">
          <h3>1️⃣ CSS 分页</h3>
          <p class="rating">⭐⭐⭐⭐</p>
          <p><strong>优势：</strong></p>
          <ul>
            <li>✅ 无需依赖，原生支持</li>
            <li>✅ 语法简单，page-break-*</li>
            <li>✅ 性能最佳</li>
          </ul>
          <p><strong>劣势：</strong></p>
          <ul>
            <li>❌ 不同浏览器表现不一</li>
            <li>❌ 无法精确控制位置</li>
            <li>❌ 不能生成PDF文件</li>
          </ul>
          <p><strong>适用场景：</strong>简单打印、快速开发</p>
        </div>

        <div class="info-section">
          <h3>2️⃣ jsPDF 分页</h3>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <p><strong>优势：</strong></p>
          <ul>
            <li>✅ 完全可控，像素级精度</li>
            <li>✅ addPage()手动控制</li>
            <li>✅ 可计算页面高度</li>
            <li>✅ 矢量图形，文件小</li>
          </ul>
          <p><strong>劣势：</strong></p>
          <ul>
            <li>❌ 需要手动计算Y坐标</li>
            <li>❌ 代码量较多</li>
            <li>❌ 中文需额外字体</li>
          </ul>
          <p><strong>适用场景：</strong>需要精确控制的报表、表格</p>
        </div>

        <div class="info-section">
          <h3>3️⃣ pdfmake 分页</h3>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <p><strong>优势：</strong></p>
          <ul>
            <li>✅ 声明式，pageBreak属性</li>
            <li>✅ 自动分页，无需计算</li>
            <li>✅ 内置页眉页脚支持</li>
            <li>✅ 表格自动跨页</li>
          </ul>
          <p><strong>劣势：</strong></p>
          <ul>
            <li>❌ 库体积大(~600KB)</li>
            <li>❌ 需学习特定语法</li>
          </ul>
          <p><strong>适用场景：</strong>复杂文档、合同、发票</p>
        </div>

        <div class="info-section">
          <h3>4️⃣ PDF-LIB 分页</h3>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <p><strong>优势：</strong></p>
          <ul>
            <li>✅ 可编辑现有PDF</li>
            <li>✅ 支持页面插入、删除</li>
            <li>✅ 合并多个PDF</li>
            <li>✅ 现代化API</li>
          </ul>
          <p><strong>劣势：</strong></p>
          <ul>
            <li>❌ 学习曲线较陡</li>
            <li>❌ 不适合从零创建复杂布局</li>
          </ul>
          <p><strong>适用场景：</strong>PDF修改、批量处理</p>
        </div>

        <div class="info-section">
          <h3>5️⃣ 其他方案</h3>
          <p class="rating">⭐⭐⭐</p>
          <p><strong>Print.js / vue3-print-nb / print-html-element</strong></p>
          <ul>
            <li>⚠️ 依赖CSS分页</li>
            <li>⚠️ 依赖浏览器打印</li>
            <li>✅ 轻量级，易使用</li>
          </ul>
          <p><strong>适用场景：</strong>快速打印，对分页要求不高</p>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="section">
          <h2>1. CSS 分页（浏览器原生）</h2>
          <button @click="printCSSPaging" class="btn btn-primary">🖨️ 测试 CSS 分页</button>

          <div id="css-paging" class="demo-content">
            <div class="page page-break-after">
              <h2>第一页 - CSS分页的优势</h2>
              <p>✅ <strong>无需依赖：</strong>使用浏览器原生支持，不需要任何第三方库</p>
              <p>✅ <strong>语法简单：</strong>只需要添加 CSS 类即可</p>
              <p>✅ <strong>性能最佳：</strong>直接使用浏览器渲染引擎</p>
              <p style="margin-top: 20px">下面这段文字距离标题 20px，但打印时位置可能会变化...</p>
            </div>

            <div class="page page-break-after">
              <h2>第二页 - CSS分页的劣势演示</h2>
              <p>❌ <strong>无法精确控制位置：</strong></p>
              <p style="margin-top: 50px">这段文字设置了 margin-top: 50px</p>
              <p style="margin-top: 100px">这段文字设置了 margin-top: 100px</p>
              <p>
                <strong>问题：</strong>打印时，浏览器可能会调整这些间距，导致实际打印位置与预期不符
              </p>
              <p><strong>无法知道：</strong>这段文字在PDF中的精确Y坐标是多少</p>
            </div>

            <div class="page">
              <h2>第三页 - 不同浏览器表现差异</h2>
              <p>❌ <strong>兼容性问题：</strong></p>
              <p>• Chrome 可能在 280mm 处分页</p>
              <p>• Firefox 可能在 275mm 处分页</p>
              <p>• Safari 可能在 285mm 处分页</p>
              <p style="margin-top: 30px">
                <strong>结论：</strong>CSS分页适合对精确度要求不高的快速打印场景
              </p>
            </div>
          </div>

          <div class="code-block">
            <h4>CSS 分页代码</h4>
            <pre><code>/* 在元素后强制分页 */
.page-break-after {
  page-break-after: always;
}

/* 避免元素内部分页 */
.page-break-inside-avoid {
  page-break-inside: avoid;
}

/* 新标准 (推荐) */
.break-after-page {
  break-after: page;
}

.break-inside-avoid {
  break-inside: avoid;
}

@media print {
  .page-break-after {
    page-break-after: always;
    break-after: page;
  }
}</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>2. jsPDF 精确分页</h2>
          <button @click="generateJsPDFPaging" class="btn btn-secondary">📄 生成多页 PDF</button>

          <div
            class="info-box"
            style="
              background: #f0f7ff;
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
              border-left: 4px solid #667eea;
            "
          >
            <h4 style="margin-top: 0; color: #667eea">💡 jsPDF 分页原理详解</h4>
            <p><strong>核心思想：</strong>通过计算 Y 轴位置判断是否需要新页</p>
            <ul>
              <li>
                <strong>页面高度：</strong
                ><code>doc.internal.pageSize.height</code> 获取PDF页面的总高度
              </li>
              <li><strong>位置追踪：</strong>使用 <code>yPosition</code> 变量追踪当前绘制位置</li>
              <li>
                <strong>分页判断：</strong>当
                <code>yPosition > pageHeight - margin</code> 时需要新页
              </li>
              <li>
                <strong>添加新页：</strong>调用 <code>doc.addPage()</code> 并重置
                <code>yPosition</code>
              </li>
              <li>
                <strong>页码控制：</strong>遍历所有页面，使用
                <code>doc.setPage(i)</code> 切换页面添加页码
              </li>
            </ul>
            <p>
              <strong>优势：</strong>可以精确控制每个元素的位置和分页逻辑，适合需要精确布局的场景。
            </p>
            <p>
              <strong>注意：</strong>jsPDF
              默认字体不支持中文，需要自行导入中文字体文件。本示例使用英文和数字演示分页功能。
            </p>
          </div>

          <div class="code-block">
            <h4>jsPDF 分页代码</h4>
            <pre><code>import { jsPDF } from 'jspdf';

const doc = new jsPDF();
const pageHeight = doc.internal.pageSize.height;
let yPosition = 20;

// 添加内容，自动分页
for (let i = 0; i &lt; 100; i++) {
  // 检查是否需要新页
  if (yPosition &gt; pageHeight - 20) {
    doc.addPage();
    yPosition = 20;
  }

  doc.text(\`Line \${i + 1}\`, 10, yPosition);
  yPosition += 10;
}

// 添加页码
const totalPages = doc.internal.getNumberOfPages();
for (let i = 1; i &lt;= totalPages; i++) {
  doc.setPage(i);
  doc.text(\`Page \${i} of \${totalPages}\`,
    105, pageHeight - 10, { align: 'center' });
}

doc.save('paged-document.pdf');</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>3. pdfmake 声明式分页</h2>
          <button @click="generatePdfmakePaging" class="btn btn-info">📋 生成 pdfmake 分页</button>

          <div
            class="info-box"
            style="
              background: #f0f9ff;
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
              border-left: 4px solid #4299e1;
            "
          >
            <h4 style="margin-top: 0; color: #4299e1">💡 pdfmake 分页核心优势</h4>
            <p><strong>声明式分页，零计算负担！</strong></p>

            <div style="background: white; padding: 12px; border-radius: 6px; margin: 10px 0">
              <h5 style="color: #2d3748; margin-top: 0">🎯 vs jsPDF 的核心区别</h5>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem">
                <tr>
                  <td style="padding: 8px; border: 1px solid #e2e8f0"><strong>特性</strong></td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0"><strong>jsPDF</strong></td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0"><strong>pdfmake</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">分页方式</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">❌ 手动计算Y坐标</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">✅ 自动分页</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">页眉页脚</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">❌ 需遍历所有页添加</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">✅ header/footer函数</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">表格跨页</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">❌ 需手动切割数据</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">✅ 自动跨页+表头重复</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">代码复杂度</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">⚠️ 高（100+ 行）</td>
                  <td style="padding: 8px; border: 1px solid #e2e8f0">✅ 低（10-20 行）</td>
                </tr>
              </table>
            </div>

            <h5 style="color: #2d3748">✅ 核心优势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li>
                <strong>零分页计算：</strong>添加 <code>pageBreak: 'before'</code> 或
                <code>pageBreak: 'after'</code> 即可
              </li>
              <li><strong>自动布局引擎：</strong>内容超出页面自动创建新页，无需判断Y坐标</li>
              <li><strong>表格智能分页：</strong>大表格自动跨页，表头自动在每页重复显示</li>
              <li>
                <strong>内置页眉页脚：</strong>通过 <code>header()</code> 和
                <code>footer()</code> 函数定义一次，所有页自动应用
              </li>
              <li>
                <strong>条件分页：</strong>支持 <code>pageBreakBefore</code> 函数动态判断是否分页
              </li>
            </ul>

            <h5 style="color: #2d3748">⚠️ 相比 jsPDF 的劣势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li>
                <strong>精确度：</strong>无法控制元素精确到像素的位置（jsPDF 可以
                <code>text(x, y)</code>）
              </li>
              <li><strong>自由度：</strong>布局由引擎控制，复杂自定义布局不如 jsPDF 灵活</li>
              <li><strong>体积：</strong>库体积约 600KB，比 jsPDF (200KB) 大 3 倍</li>
            </ul>

            <h5 style="color: #2d3748">🎯 最佳应用场景</h5>
            <div
              style="
                background: #fffbeb;
                padding: 10px;
                border-radius: 4px;
                border-left: 3px solid #f59e0b;
              "
            >
              <p style="margin: 0"><strong>推荐场景：</strong></p>
              <ul style="margin: 5px 0">
                <li>📄 合同文档、发票、报告（内容为主，无复杂图形）</li>
                <li>📊 大型数据表格（需要自动跨页）</li>
                <li>📝 多页文档（10+ 页，需页眉页脚）</li>
                <li>⚡ 快速开发（不想手动计算分页逻辑）</li>
              </ul>
              <p style="margin: 5px 0 0 0"><strong>不推荐：</strong></p>
              <ul style="margin: 5px 0">
                <li>❌ 需要精确像素控制的设计稿（用 jsPDF）</li>
                <li>❌ 复杂图形、图表（用 jsPDF + Canvas）</li>
                <li>❌ 对文件体积极度敏感（用 jsPDF）</li>
              </ul>
            </div>
          </div>

          <div class="code-block">
            <h4>pdfmake 分页代码</h4>
            <pre><code>import pdfMake from 'pdfmake/build/pdfmake';

const docDefinition = {
  content: [
    { text: '第一页内容' },
    { text: '第二页内容', pageBreak: 'before' },  // ✅ 只需一个属性！
    {
      text: '第三页内容',
      // ✅ 支持条件分页
      pageBreakBefore: (currentNode, followingNodesOnPage) => {
        return currentNode.headlineLevel === 1;
      }
    },
    // ✅ 大表格自动分页 + 表头重复
    {
      table: {
        headerRows: 1,  // 表头在每页重复
        body: largeDataArray
      },
      layout: 'lightHorizontalLines'
    }
  ],
  // ✅ 页眉：定义一次，所有页自动应用
  header: (currentPage, pageCount) => ({
    text: '文档标题',
    alignment: 'center',
    margin: [0, 10]
  }),
  // ✅ 页脚：自动获取当前页码和总页数
  footer: (currentPage, pageCount) => ({
    text: \`第 \${currentPage} 页 / 共 \${pageCount} 页\`,
    alignment: 'center'
  })
};

pdfMake.createPdf(docDefinition).download();</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>4. html2canvas + html2pdf 分页</h2>
          <button @click="generateHtml2PdfPaging" class="btn btn-warning">🖼️ HTML转PDF分页</button>

          <div
            class="info-box"
            style="
              background: #fffbeb;
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
              border-left: 4px solid #f59e0b;
            "
          >
            <h4 style="margin-top: 0; color: #f59e0b">💡 html2pdf 分页特点</h4>

            <h5 style="color: #2d3748">✅ 核心优势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>HTML原样转换：</strong>复杂的 HTML/CSS 布局可以直接转 PDF</li>
              <li><strong>样式完美保留：</strong>Flexbox、Grid、动画效果等都能转换</li>
              <li><strong>中文支持好：</strong>使用浏览器渲染，无需字体文件</li>
              <li><strong>易于使用：</strong>几行代码即可完成转换</li>
            </ul>

            <h5 style="color: #2d3748">⚠️ 分页劣势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>精度问题：</strong>分页位置依赖CSS，不同浏览器可能有差异</li>
              <li><strong>性能较差：</strong>先截图再转PDF，大页面耗时长</li>
              <li><strong>文件较大：</strong>转换后的PDF实际上是图片，文字无法选中</li>
              <li><strong>表格截断：</strong>表格可能被分页截断，需要手动调整</li>
            </ul>

            <h5 style="color: #2d3748">🎯 最佳应用场景</h5>
            <div
              style="
                background: white;
                padding: 10px;
                border-radius: 4px;
                border: 1px solid #f59e0b;
              "
            >
              <p style="margin: 0"><strong>✅ 推荐：</strong>已有复杂 HTML 页面需要导出为 PDF</p>
              <p style="margin: 5px 0">
                <strong>✅ 推荐：</strong>设计稿还原（需要完全保留原样式）
              </p>
              <p style="margin: 5px 0"><strong>❌ 不推荐：</strong>大量文字文档（PDF 文件太大）</p>
              <p style="margin: 5px 0"><strong>❌ 不推荐：</strong>需要文字可选中和复制的场景</p>
            </div>
          </div>

          <div class="code-block">
            <h4>html2pdf 分页代码</h4>
            <pre><code>import html2pdf from 'html2pdf.js';

const element = document.getElementById('content');

const options = {
  margin: 10,
  filename: 'document.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait'
  },
  pagebreak: {
    mode: ['avoid-all', 'css', 'legacy'],  // 分页模式
    before: '.page-break-before',           // 在此类前分页
    after: '.page-break-after'              // 在此类后分页
  }
};

html2pdf().set(options).from(element).save();</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>5. PDF-LIB 高级分页</h2>
          <button @click="generatePdfLibPaging" class="btn btn-success">📚 PDF-LIB 分页示例</button>

          <div
            class="info-box"
            style="
              background: #f0fdf4;
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
              border-left: 4px solid #10b981;
            "
          >
            <h4 style="margin-top: 0; color: #10b981">💡 PDF-LIB 分页特点</h4>

            <h5 style="color: #2d3748">✅ 独特优势（其他库做不到的）</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>编辑现有PDF：</strong>可以打开并修改已有PDF文件</li>
              <li><strong>页面操作：</strong>插入、删除、复制、旋转页面</li>
              <li><strong>合并PDF：</strong>将多个PDF合并为一个</li>
              <li><strong>拆分PDF：</strong>从大PDF提取特定页面</li>
              <li><strong>表单填充：</strong>可编程方式填写PDF表单</li>
            </ul>

            <h5 style="color: #2d3748">⚠️ vs jsPDF/pdfmake 的劣势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>从零创建复杂：</strong>不如 pdfmake 方便（需手动计算坐标）</li>
              <li><strong>学习曲线陡：</strong>API 较底层，需要了解 PDF 规范</li>
              <li><strong>布局引擎弱：</strong>没有自动分页、表格跨页等功能</li>
              <li><strong>中文支持：</strong>需要手动嵌入字体，增加文件大小</li>
            </ul>

            <h5 style="color: #2d3748">🎯 最佳应用场景</h5>
            <div
              style="
                background: white;
                padding: 10px;
                border-radius: 4px;
                border: 1px solid #10b981;
              "
            >
              <p style="margin: 0"><strong>✅ 推荐场景：</strong></p>
              <ul style="margin: 5px 0">
                <li>📝 修改现有PDF（添加水印、签名、页码）</li>
                <li>🔗 合并多个PDF文档</li>
                <li>📋 批量填写PDF表单</li>
                <li>✂️ 从大文件提取特定页面</li>
              </ul>
              <p style="margin: 10px 0 0 0"><strong>❌ 不推荐场景：</strong></p>
              <ul style="margin: 5px 0">
                <li>从零创建复杂文档（用 pdfmake）</li>
                <li>需要快速开发（用 pdfmake 或 html2pdf）</li>
                <li>大量文字排版（用 pdfmake）</li>
              </ul>
            </div>
          </div>

          <div class="code-block">
            <h4>PDF-LIB 分页代码</h4>
            <pre><code>import { PDFDocument, rgb } from 'pdf-lib';

const pdfDoc = await PDFDocument.create();

// 创建多页文档
for (let i = 0; i &lt; 5; i++) {
  const page = pdfDoc.addPage([600, 800]);

  page.drawText(\`Page \${i + 1}\`, {
    x: 50,
    y: 750,
    size: 24,
    color: rgb(0, 0, 0)
  });

  // 添加页脚
  page.drawText(\`Page \${i + 1} of 5\`, {
    x: 270,
    y: 30,
    size: 12,
    color: rgb(0.5, 0.5, 0.5)
  });
}

// ✅ 高级操作：合并其他PDF
const existingPdf = await PDFDocument.load(pdfBytes);
const [copiedPage] = await pdfDoc.copyPages(existingPdf, [0]);
pdfDoc.addPage(copiedPage);

const pdfBytes = await pdfDoc.save();
// 下载PDF</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>6. Print.js 和 vue3-print-nb CSS分页</h2>
          <button @click="printWithCSS" class="btn btn-info">⚡ CSS分页打印</button>

          <div
            class="info-box"
            style="
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
              border-left: 4px solid #64748b;
            "
          >
            <h4 style="margin-top: 0; color: #64748b">💡 Print.js / vue3-print-nb 分页特点</h4>

            <h5 style="color: #2d3748">✅ 核心优势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>极致轻量：</strong>Print.js 仅 ~10KB，vue3-print-nb ~15KB</li>
              <li><strong>快速打印：</strong>直接触发浏览器打印对话框，无需转换</li>
              <li><strong>Vue集成：</strong>vue3-print-nb 提供 v-print 指令，开发效率高</li>
              <li><strong>多种资源：</strong>支持 HTML、图片、PDF、JSON 等多种格式</li>
            </ul>

            <h5 style="color: #2d3748">⚠️ 分页劣势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>完全依赖CSS：</strong>分页控制能力 = CSS 分页能力（有限）</li>
              <li><strong>无法生成PDF：</strong>只能打印，不能导出为PDF文件</li>
              <li><strong>浏览器差异：</strong>不同浏览器打印效果可能不同</li>
              <li><strong>精度低：</strong>无法精确控制分页位置</li>
            </ul>

            <h5 style="color: #2d3748">🎯 最佳应用场景</h5>
            <div
              style="
                background: white;
                padding: 10px;
                border-radius: 4px;
                border: 1px solid #64748b;
              "
            >
              <p style="margin: 0"><strong>✅ 完美适配：</strong></p>
              <ul style="margin: 5px 0">
                <li>🖨️ 快速打印功能（用户直接打印，不需要PDF文件）</li>
                <li>🎯 简单页面打印（订单、收据、标签）</li>
                <li>⚡ 对文件大小敏感的项目（需要极小体积）</li>
                <li>📱 移动端打印（浏览器原生支持）</li>
              </ul>
              <p style="margin: 10px 0 0 0"><strong>❌ 不推荐：</strong></p>
              <ul style="margin: 5px 0">
                <li>需要生成PDF文件（用 jsPDF/pdfmake）</li>
                <li>精确分页控制（用 jsPDF）</li>
                <li>复杂文档布局（用 pdfmake）</li>
              </ul>
            </div>
          </div>

          <div id="print-css-content" class="demo-content print-demo">
            <div class="print-page">
              <h3>第 1 页 - Print.js 轻量级打印</h3>
              <p>Print.js 是最轻量的打印库，仅需 CSS 控制分页。</p>
              <p>适合快速开发简单打印功能。</p>
              <p>分页通过 CSS @media print 实现：</p>
              <ul>
                <li>无需复杂 API</li>
                <li>体积极小 (~10KB)</li>
                <li>浏览器兼容性好</li>
              </ul>
            </div>

            <div class="print-page page-break-before">
              <h3>第 2 页 - CSS 分页控制</h3>
              <p>本页使用 .page-break-before 类强制分页。</p>
              <p>CSS 代码：</p>
              <pre><code>.page-break-before &lbrace;
  page-break-before: always;
  break-before: page;
&rbrace;</code></pre>
            </div>

            <div class="print-page page-break-before">
              <h3>第 3 页 - Vue 指令集成</h3>
              <p>vue3-print-nb 为 Vue 3 提供打印指令：</p>
              <pre><code>&lt;div v-print="printConfig"&gt;
  打印内容
&lt;/div&gt;</code></pre>
              <p>分页控制同样依赖 CSS。</p>
            </div>
          </div>

          <div class="code-block">
            <h4>Print.js CSS分页</h4>
            <pre><code>import printJS from 'print-js';

// Print.js 使用CSS控制分页
printJS({
  printable: 'printable-content',
  type: 'html',
  targetStyles: ['*'],
  style: \`
    @media print {
      .page-break {
        page-break-after: always;
        break-after: page;
      }
    }
  \`
});</code></pre>
          </div>

          <div class="code-block">
            <h4>vue3-print-nb 指令分页</h4>
            <pre><code>// Vue模板中
&lt;div v-print="printObj"&gt;
  &lt;div class="page"&gt;第一页&lt;/div&gt;
  &lt;div class="page-break"&gt;&lt;/div&gt;
  &lt;div class="page"&gt;第二页&lt;/div&gt;
&lt;/div&gt;

// CSS
&lt;style&gt;
@media print {
  .page-break {
    page-break-after: always;
  }
}
&lt;/style&gt;</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>7. print-html-element 简单分页</h2>
          <button @click="printElementPaging" class="btn btn-secondary">🎯 元素打印分页</button>

          <div
            class="info-box"
            style="
              background: #faf5ff;
              padding: 15px;
              border-radius: 8px;
              margin: 15px 0;
              border-left: 4px solid #a855f7;
            "
          >
            <h4 style="margin-top: 0; color: #a855f7">💡 print-html-element 分页特点</h4>

            <h5 style="color: #2d3748">✅ 核心优势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>体积最小：</strong>仅 5KB！所有打印库中最轻量</li>
              <li><strong>API最简：</strong>只需一个函数 <code>printElement(element)</code></li>
              <li><strong>零配置：</strong>无需任何配置，开箱即用</li>
              <li><strong>DOM直接打印：</strong>无转换损耗，速度最快</li>
            </ul>

            <h5 style="color: #2d3748">⚠️ 劣势</h5>
            <ul style="margin: 10px 0; line-height: 1.8">
              <li><strong>功能最少：</strong>仅支持打印，无其他功能</li>
              <li><strong>分页=CSS：</strong>分页能力完全依赖CSS</li>
              <li><strong>无PDF导出：</strong>只能触发浏览器打印对话框</li>
            </ul>

            <h5 style="color: #2d3748">🎯 应用场景</h5>
            <div
              style="
                background: white;
                padding: 10px;
                border-radius: 4px;
                border: 1px solid #a855f7;
              "
            >
              <p style="margin: 0"><strong>✅ 最适合：</strong>对体积极度敏感的项目</p>
              <p style="margin: 5px 0"><strong>✅ 推荐：</strong>只需要简单打印功能，不需要配置</p>
              <p style="margin: 5px 0"><strong>⚖️ 对比：</strong>比 Print.js (10KB) 还小一半</p>
              <p style="margin: 5px 0">
                <strong>❌ 不推荐：</strong>需要复杂配置或PDF导出（用其他库）
              </p>
            </div>
          </div>

          <div id="print-element-content" class="demo-content print-demo">
            <div class="print-section">
              <h3>第1页 - 超轻量级</h3>
              <p>print-html-element 是最小的打印库，仅有 5KB！</p>
              <p>它直接打印 DOM 元素，无需任何转换。</p>
              <div class="highlight-box">
                <strong>核心特点：</strong>
                <ul>
                  <li>体积最小 (5KB)</li>
                  <li>性能最快</li>
                  <li>直接 DOM 打印</li>
                  <li>支持 CSS 分页</li>
                </ul>
              </div>
              <p style="margin-top: 20px">下面是一些填充内容，用于演示分页效果。</p>
              <p>当内容超过一页时，CSS 会自动处理分页。</p>
              <p>这里展示了如何使用浏览器原生的打印功能。</p>
            </div>

            <div class="print-section page-break-before">
              <h3>第2页 - CSS 分页控制</h3>
              <p>这个库利用浏览器的原生打印对话框。</p>
              <p>分页完全由 CSS 控制：</p>
              <div class="code-sample">
                <code> .page-break-before { page-break-before: always; break-before: page; } </code>
              </div>
              <p style="margin-top: 15px">
                使用 <code>.page-break-before</code> 类强制在此元素前分页。
              </p>
              <div style="background: #f0f7ff; padding: 15px; border-radius: 8px; margin-top: 15px">
                <strong>优势：</strong>
                <ul>
                  <li>无需配置，开箱即用</li>
                  <li>体积极小，加载快</li>
                  <li>兼容所有浏览器</li>
                </ul>
              </div>
            </div>

            <div class="print-section page-break-before">
              <h3>第3页 - 简单使用</h3>
              <p>只需一行代码即可打印任意元素：</p>
              <div class="code-sample">
                <code>printElement(document.getElementById('myElement'));</code>
              </div>
              <p style="margin-top: 15px">非常适合简单的打印需求，无需生成PDF。</p>
              <div
                style="
                  background: #fef3c7;
                  padding: 15px;
                  border-radius: 8px;
                  margin-top: 15px;
                  border-left: 4px solid #f59e0b;
                "
              >
                <strong>⚠️ 注意：</strong>
                <p style="margin: 5px 0 0 0">分页精度取决于浏览器，不同浏览器可能有细微差异。</p>
              </div>
            </div>

            <div class="print-section page-break-before">
              <h3>第4页 - 对比总结</h3>
              <table style="width: 100%; border-collapse: collapse; margin: 15px 0">
                <thead>
                  <tr style="background: #a855f7; color: white">
                    <th style="padding: 10px; border: 1px solid #ddd">特性</th>
                    <th style="padding: 10px; border: 1px solid #ddd">print-html-element</th>
                    <th style="padding: 10px; border: 1px solid #ddd">Print.js</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #ddd">体积</td>
                    <td style="padding: 8px; border: 1px solid #ddd; background: #dcfce7">
                      ✅ 5KB
                    </td>
                    <td style="padding: 8px; border: 1px solid #ddd">⚠️ 10KB</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #ddd">API复杂度</td>
                    <td style="padding: 8px; border: 1px solid #ddd; background: #dcfce7">
                      ✅ 极简
                    </td>
                    <td style="padding: 8px; border: 1px solid #ddd">⚠️ 需要配置</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border: 1px solid #ddd">分页控制</td>
                    <td style="padding: 8px; border: 1px solid #ddd">CSS</td>
                    <td style="padding: 8px; border: 1px solid #ddd">CSS</td>
                  </tr>
                </tbody>
              </table>
              <p style="margin-top: 20px; font-weight: bold; color: #a855f7">
                最适合：对体积极度敏感的项目，只需简单打印功能。
              </p>
            </div>
          </div>

          <div class="code-block">
            <h4>print-html-element 分页说明</h4>
            <pre><code>import printElement from 'print-html-element';

// print-html-element 依赖浏览器原生打印和CSS
// 分页控制通过 CSS 实现
const element = document.getElementById('content');
printElement(element);  // ✅ 就这么简单！

// CSS 分页样式
/*
.page {
  page-break-after: always;
  break-after: page;
}

.avoid-break {
  page-break-inside: avoid;
  break-inside: avoid;
}
*/</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>8. 分页最佳实践</h2>

          <div class="best-practices">
            <div class="practice-card">
              <h3>🎯 避免孤行</h3>
              <p>使用 page-break-inside: avoid 防止元素被分页打断</p>
              <pre><code>.keep-together {
  page-break-inside: avoid;
  break-inside: avoid;
}</code></pre>
            </div>

            <div class="practice-card">
              <h3>📏 计算页面高度</h3>
              <p>精确控制内容，避免溢出</p>
              <pre><code>const pageHeight = 297; // A4 高度 (mm)
const margin = 20;
const usableHeight = pageHeight - 2 * margin;</code></pre>
            </div>

            <div class="practice-card">
              <h3>📑 页眉页脚</h3>
              <p>为每页添加固定的页眉和页脚</p>
              <pre><code>@media print {
  @page {
    margin-top: 2cm;
    margin-bottom: 2cm;
  }

  .page-header {
    position: fixed;
    top: 0;
  }

  .page-footer {
    position: fixed;
    bottom: 0;
  }
}</code></pre>
            </div>

            <div class="practice-card">
              <h3>🔢 动态页码</h3>
              <p>使用 CSS 计数器或 JavaScript 添加页码</p>
              <pre><code>@media print {
  @page {
    @bottom-center {
      content: "Page " counter(page) " of " counter(pages);
    }
  }
}</code></pre>
            </div>

            <div class="practice-card">
              <h3>📊 表格分页</h3>
              <p>确保表头在每页重复显示</p>
              <pre><code>table {
  page-break-inside: auto;
}

thead {
  display: table-header-group;
}

tbody {
  display: table-row-group;
}

tfoot {
  display: table-footer-group;
}</code></pre>
            </div>

            <div class="practice-card">
              <h3>🖼️ 图片处理</h3>
              <p>避免图片被分页打断</p>
              <pre><code>img {
  page-break-inside: avoid;
  break-inside: avoid;
  max-width: 100%;
}</code></pre>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>9. 常见分页问题及解决方案</h2>

          <div class="problems-grid">
            <div class="problem-card">
              <h3>❓ 问题：内容被意外截断</h3>
              <p><strong>解决：</strong></p>
              <ul>
                <li>使用 page-break-inside: avoid</li>
                <li>检查元素高度是否超过页面高度</li>
                <li>调整边距和字体大小</li>
              </ul>
            </div>

            <div class="problem-card">
              <h3>❓ 问题：分页位置不准确</h3>
              <p><strong>解决：</strong></p>
              <ul>
                <li>使用绝对定位可能导致问题</li>
                <li>避免使用浮动布局</li>
                <li>测试不同浏览器的表现</li>
              </ul>
            </div>

            <div class="problem-card">
              <h3>❓ 问题：页眉页脚不显示</h3>
              <p><strong>解决：</strong></p>
              <ul>
                <li>检查 @page 规则兼容性</li>
                <li>使用固定定位替代方案</li>
                <li>考虑使用 PDF 库直接生成</li>
              </ul>
            </div>

            <div class="problem-card">
              <h3>❓ 问题：跨浏览器差异</h3>
              <p><strong>解决：</strong></p>
              <ul>
                <li>测试主流浏览器</li>
                <li>使用标准 CSS 属性</li>
                <li>提供 PDF 下载备选方案</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>10. 分页控制对比总结</h2>

          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>方案</th>
                  <th>精确度</th>
                  <th>灵活性</th>
                  <th>易用性</th>
                  <th>兼容性</th>
                  <th>推荐度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CSS 分页</strong></td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>jsPDF</strong></td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>pdfmake</strong></td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>html2pdf</strong></td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>PDF-LIB</strong></td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>vue3-print-nb</strong></td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>Print.js</strong></td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐⭐</td>
                </tr>
                <tr>
                  <td><strong>print-html-element</strong></td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>⭐⭐</td>
                  <td>⭐⭐⭐</td>
                  <td>⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { jsPDF } from 'jspdf'
import pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { loadJsPDFChineseFont, configurePdfMakeChinese } from '@/utils/fontLoader'

// @ts-ignore
pdfMake.vfs = pdfFonts.pdfMake?.vfs || pdfFonts

// 统一的打印辅助函数
function openBlobInPrintWindow(blob: Blob) {
  const url = URL.createObjectURL(blob)
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  document.body.appendChild(iframe)

  const cleanup = () => {
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe)
    }
    URL.revokeObjectURL(url)
  }

  iframe.onload = () => {
    setTimeout(() => {
      try {
        iframe.contentWindow?.print()
      } catch (e) {
        console.error('打印失败:', e)
      }
    }, 500)
  }

  // 监听打印完成事件
  if (iframe.contentWindow) {
    iframe.contentWindow.addEventListener('afterprint', cleanup)
  }

  // 5分钟后强制清理
  setTimeout(cleanup, 300000)
}

// 加载字体
onMounted(async () => {
  try {
    await configurePdfMakeChinese()
  } catch (error) {
    console.error('字体加载失败:', error)
  }
})

const printCSSPaging = () => {
  const element = document.getElementById('css-paging')
  if (element) {
    const printWindow = window.open('', '', 'width=800,height=600')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>CSS分页演示</title>
            <style>
              body {
                font-family: 'Microsoft YaHei', Arial, sans-serif;
                padding: 20px;
              }
              .page {
                background: white;
                padding: 2rem;
                margin-bottom: 1rem;
                border: 1px solid #e2e8f0;
                border-radius: 4px;
              }
              .page-break-after {
                page-break-after: always;
                break-after: page;
              }
              @media print {
                body {
                  padding: 0;
                }
                .page {
                  border: none;
                  margin: 0;
                  padding: 2rem;
                }
                .page-break-after {
                  page-break-after: always;
                  break-after: page;
                }
              }
            </style>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.focus()
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)
    }
  }
}

const generateJsPDFPaging = async () => {
  const doc = new jsPDF()

  // 加载中文字体
  try {
    await loadJsPDFChineseFont(doc)
  } catch (error) {
    console.error('字体加载失败:', error)
    alert('字体加载失败，请刷新页面重试')
    return
  }

  const pageHeight = doc.internal.pageSize.height
  const pageWidth = doc.internal.pageSize.width
  let yPosition = 20

  // ========== 第1页：展示精确Y坐标控制 ==========
  doc.setFontSize(20)
  doc.setTextColor(102, 126, 234)
  doc.text('jsPDF: 像素级精确控制', pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 15

  doc.setFontSize(12)
  doc.setTextColor(0, 128, 0)
  doc.text('✓ 优势1：精确位置控制', 20, yPosition)
  yPosition += 10

  doc.setTextColor(0, 0, 0)
  doc.setFontSize(10)
  doc.text(`当前Y坐标: ${yPosition.toFixed(2)}mm - 我们精确知道这个位置`, 20, yPosition)
  yPosition += 8

  doc.text(`当前Y坐标: ${yPosition.toFixed(2)}mm - 每个像素都在掌控之中`, 20, yPosition)
  yPosition += 8

  doc.text(`当前Y坐标: ${yPosition.toFixed(2)}mm - 无CSS干扰，无浏览器差异！`, 20, yPosition)
  yPosition += 15

  // 精确绘制图形
  doc.setDrawColor(102, 126, 234)
  doc.setLineWidth(0.5)
  doc.rect(20, yPosition, 50, 30) // 精确矩形
  doc.circle(100, yPosition + 15, 15) // 精确圆形
  doc.line(130, yPosition, 180, yPosition + 30) // 精确斜线
  yPosition += 40

  doc.setFontSize(12)
  doc.setTextColor(0, 128, 0)
  doc.text('✓ 优势2：精确表格布局', 20, yPosition)
  yPosition += 10

  // 表格 - 像素级对齐
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.line(20, yPosition, 190, yPosition)
  yPosition += 5
  doc.text('产品', 25, yPosition)
  doc.text('数量', 100, yPosition)
  doc.text('价格', 150, yPosition)
  yPosition += 3
  doc.line(20, yPosition, 190, yPosition)
  yPosition += 5

  for (let i = 1; i <= 8; i++) {
    doc.text(`商品 ${i}`, 25, yPosition)
    doc.text(`${i * 2}`, 105, yPosition)
    doc.text(`¥${i * 10}.00`, 150, yPosition)
    yPosition += 6
  }
  doc.line(20, yPosition, 190, yPosition)
  yPosition += 15

  // ========== 手动分页逻辑演示 ==========
  doc.setFontSize(12)
  doc.setTextColor(255, 140, 0)
  doc.text('⚠ 关键点：手动分页逻辑', 20, yPosition)
  yPosition += 10

  doc.setFontSize(9)
  doc.setTextColor(100, 100, 100)
  doc.text(
    '代码: if (yPosition > pageHeight - 30) { doc.addPage(); yPosition = 20; }',
    20,
    yPosition,
  )
  yPosition += 10

  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)

  // 添加大量内容演示手动分页
  for (let i = 0; i < 50; i++) {
    // ⚠️ 关键：手动判断是否需要新页
    if (yPosition > pageHeight - 30) {
      doc.addPage()
      yPosition = 20

      doc.setFontSize(10)
      doc.setTextColor(128, 128, 128)
      doc.text('>>> 触发分页（手动检查）', 20, yPosition)
      yPosition += 8
      doc.setTextColor(0, 0, 0)
    }

    doc.text(`第 ${i + 1} 行 | Y=${yPosition.toFixed(1)}mm | 需要手动计算`, 20, yPosition)
    yPosition += 6
  }

  // 手动添加页码到所有页
  // @ts-ignore
  const totalPages = doc.internal.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(128, 128, 128)
    doc.text(`第 ${i}/${totalPages} 页 | 手动添加页码`, pageWidth / 2, pageHeight - 8, {
      align: 'center',
    })
  }

  // ✅ 改为打印预览
  const blob = doc.output('blob')
  openBlobInPrintWindow(blob)
}

const generatePdfmakePaging = () => {
  const docDefinition: any = {
    pageSize: 'A4',
    pageMargins: [40, 60, 40, 60],
    // ✅ Advantage 1: Built-in header (NO manual loop needed!)
    header: (currentPage: number, pageCount: number) => ({
      columns: [
        { text: 'pdfmake Demo', alignment: 'left', margin: [40, 20, 0, 0], fontSize: 9 },
        {
          text: `Auto Header (Page ${currentPage}/${pageCount})`,
          alignment: 'right',
          margin: [0, 20, 40, 0],
          fontSize: 9,
          color: '#666',
        },
      ],
    }),
    // ✅ Advantage 2: Built-in footer (NO manual loop needed!)
    footer: (currentPage: number, pageCount: number) => ({
      text: `Page ${currentPage} of ${pageCount} | Auto-generated by pdfmake`,
      alignment: 'center',
      margin: [0, 0, 0, 20],
      fontSize: 8,
      color: '#999',
    }),
    defaultStyle: {
      font: 'NotoSansSC',
    },
    content: [
      // ========== Page 1 ==========
      { text: 'pdfmake: 零计算分页', style: 'title', color: '#4299e1' },
      { text: '✓ 优势1：声明式分页', style: 'header' },
      {
        text: '无需Y坐标追踪！只需添加 pageBreak 属性：',
        margin: [0, 0, 0, 5],
      },
      {
        text: '{ text: "内容", pageBreak: "before" } ← 就这么简单！',
        bold: true,
        color: '#008800',
        background: '#f0f9ff',
        margin: [20, 5, 20, 15],
      },
      {
        text: '对比 jsPDF: if (yPosition > pageHeight - 30) { doc.addPage(); yPosition = 20; }',
        fontSize: 9,
        color: '#dc2626',
        margin: [20, 0, 20, 20],
      },

      // ========== Page 2 (Declarative break!) ==========
      {
        text: '✓ 优势2：自动页眉页脚',
        style: 'header',
        pageBreak: 'before', // ← 只需一个属性！
      },
      {
        text: '定义 header() 和 footer() 一次 → 自动应用到所有页面！',
        margin: [0, 0, 0, 10],
      },
      {
        text: '无需像 jsPDF 那样手动遍历所有页面！',
        bold: true,
        color: '#008800',
        margin: [0, 0, 0, 20],
      },
      {
        ul: ['页眉自动显示当前页码', '页脚自动显示总页数', 'pdfmake 为你计算一切', '零手动追踪'],
      },

      // ========== Page 3: Smart Table ==========
      {
        text: '✓ 优势3：智能表格分页',
        style: 'header',
        pageBreak: 'before',
      },
      {
        text: '表格自动跨页分割。表头在每页自动重复！',
        margin: [0, 0, 0, 10],
        bold: true,
        color: '#4299e1',
      },
      // Large table (will auto-paginate)
      {
        table: {
          headerRows: 1, // ← 每页自动重复！
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            [
              { text: '产品名称（自动重复表头）', style: 'tableHeader' },
              { text: '数量', style: 'tableHeader' },
              { text: '单价', style: 'tableHeader' },
              { text: '小计', style: 'tableHeader' },
            ],
            ...Array.from({ length: 60 }, (_, i) => [
              `产品项目 #${i + 1}`,
              `${i + 1}`,
              `¥${(i + 1) * 12}.00`,
              `¥${(i + 1) * (i + 1) * 12}.00`,
            ]),
          ],
        },
        layout: {
          fillColor: (rowIndex: number) =>
            rowIndex === 0 ? '#4299e1' : rowIndex % 2 === 0 ? '#f0f9ff' : null,
          hLineWidth: () => 0.5,
          vLineWidth: () => 0.5,
          hLineColor: () => '#cbd5e0',
          vLineColor: () => '#cbd5e0',
        },
      },

      // ========== Summary Page ==========
      {
        text: '总结：为什么 pdfmake 适合多页文档',
        style: 'header',
        pageBreak: 'before',
        color: '#10b981',
      },
      {
        ol: [
          { text: '零Y坐标计算', bold: true },
          { text: '一行代码实现分页（pageBreak 属性）', bold: true },
          { text: '所有页面自动添加页眉页脚', bold: true },
          { text: '智能表格分页，表头自动重复', bold: true },
          { text: '声明式、可读性强的代码', bold: true },
        ],
        margin: [0, 10, 0, 20],
      },
      {
        text: '最适合：发票、合同、报告、大型表格',
        fontSize: 12,
        color: '#10b981',
        bold: true,
        alignment: 'center',
      },
    ],
    styles: {
      title: {
        fontSize: 20,
        bold: true,
        margin: [0, 0, 0, 20],
        alignment: 'center',
      },
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 10],
        color: '#4299e1',
      },
      tableHeader: {
        bold: true,
        fontSize: 10,
        color: '#ffffff',
        fillColor: '#4299e1',
      },
    },
  }

  // ✅ 改为打印预览
  try {
    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => {
      openBlobInPrintWindow(blob)
    })
  } catch (error) {
    console.error('PDF生成失败:', error)
    alert('PDF生成失败，请查看控制台错误信息')
  }
}

const generateHtml2PdfPaging = async () => {
  const html2pdf = (await import('html2pdf.js')).default

  // 创建复杂HTML演示（展示html2pdf的优势）
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = `
    <div style="padding: 20px; font-family: 'Microsoft YaHei', Arial, sans-serif;">
      <h1 style="text-align: center; color: #f59e0b; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">
        html2pdf.js: 复杂HTML → PDF
      </h1>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
        <h2 style="margin: 0 0 10px 0;">✓ 核心优势：保留复杂CSS样式</h2>
        <p style="margin: 0;">渐变、阴影、圆角等样式完美转换！</p>
      </div>

      <div style="display: flex; gap: 15px; margin: 20px 0;">
        <div style="flex: 1; background: #fef3c7; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #f59e0b; margin-top: 0;">Flexbox 布局</h3>
          <p>html2pdf 能捕获现代 CSS 布局！</p>
        </div>
        <div style="flex: 1; background: #dbeafe; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #3b82f6; margin-top: 0;">盒阴影效果</h3>
          <p>阴影和特效都能保留下来！</p>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f59e0b; color: white;">
          <th style="padding: 10px; border: 1px solid #ddd;">特性</th>
          <th style="padding: 10px; border: 1px solid #ddd;">jsPDF</th>
          <th style="padding: 10px; border: 1px solid #ddd;">html2pdf</th>
        </tr>
        <tr style="background: #fffbeb;">
          <td style="padding: 8px; border: 1px solid #ddd;">复杂CSS</td>
          <td style="padding: 8px; border: 1px solid #ddd;">❌ 手动</td>
          <td style="padding: 8px; border: 1px solid #ddd;">✅ 自动</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">HTML渲染</td>
          <td style="padding: 8px; border: 1px solid #ddd;">❌ 否</td>
          <td style="padding: 8px; border: 1px solid #ddd;">✅ 是</td>
        </tr>
      </table>

      <div class="html2canvas-break"></div>

      <h2 style="color: #f59e0b;">Page 2: CSS-Based Pagination</h2>
      <p>html2pdf uses <strong>CSS page-break</strong> properties:</p>
      <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; font-family: monospace; margin: 15px 0;">
        .page-break { page-break-after: always; }
      </div>

      <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ef4444;">
        <h3 style="color: #dc2626; margin-top: 0;">⚠ 局限性</h3>
        <p>与 jsPDF 的像素级精确控制不同，html2pdf 依赖浏览器渲染。</p>
        <p>不同浏览器的分页位置可能略有差异。</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
        <div style="background: #dbeafe; padding: 15px; text-align: center; border-radius: 8px;">网格 1</div>
        <div style="background: #fef3c7; padding: 15px; text-align: center; border-radius: 8px;">网格 2</div>
        <div style="background: #dcfce7; padding: 15px; text-align: center; border-radius: 8px;">网格 3</div>
      </div>

      <div class="html2canvas-break"></div>

      <h2 style="color: #f59e0b;">第3页：最佳使用场景</h2>
      <ul style="line-height: 2;">
        <li>✅ <strong>现有HTML页面</strong>需要导出为PDF</li>
        <li>✅ <strong>复杂CSS布局</strong>（Flexbox、Grid、渐变）</li>
        <li>✅ <strong>设计稿</strong>或带样式的报表</li>
        <li>❌ <strong>不适合：</strong>大量文本文档（文件体积大）</li>
        <li>❌ <strong>不适合：</strong>需要文本选择（基于图片的PDF）</li>
      </ul>

      <div style="background: #f0fdf4; padding: 20px; border-radius: 12px; text-align: center; border: 2px dashed #10b981;">
        <h3 style="color: #10b981; margin-top: 0;">总结</h3>
        <p style="margin: 0; font-size: 18px;">html2pdf = HTML/CSS → 截图 → PDF</p>
        <p style="margin: 10px 0 0 0; color: #666;">适合设计类内容，不适合文本密集型文档</p>
      </div>
    </div>
  `
  document.body.appendChild(tempDiv)

  const options = {
    margin: 10,
    filename: 'html2pdf-demo.pdf',
    image: { type: 'jpeg' as const, quality: 0.95 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
    pagebreak: {
      mode: ['css', 'legacy'] as ('css' | 'legacy')[],
      before: '.html2canvas-break',
    },
  }

  // ✅ 改为打印预览
  try {
    const worker = html2pdf().set(options).from(tempDiv)
    // 正确的方式：使用 toPdf() 然后 output('blob')
    const pdf = await worker.toPdf().get('pdf')
    const blob = pdf.output('blob')

    document.body.removeChild(tempDiv)
    openBlobInPrintWindow(blob)
  } catch (error) {
    console.error('HTML转PDF失败:', error)
    if (document.body.contains(tempDiv)) {
      document.body.removeChild(tempDiv)
    }
    alert('HTML转PDF失败，请查看控制台错误信息')
  }
}

const generatePdfLibPaging = async () => {
  const { PDFDocument, rgb } = await import('pdf-lib')
  const fontkit = await import('@pdf-lib/fontkit')

  const pdfDoc = await PDFDocument.create()

  // 注册fontkit（必须在embedFont之前）
  pdfDoc.registerFontkit(fontkit.default)

  // 加载中文字体
  let chineseFont: any
  let chineseBoldFont: any
  try {
    const fontPath = '/Noto_Sans_SC/static/NotoSansSC-Regular.ttf'
    const boldFontPath = '/Noto_Sans_SC/static/NotoSansSC-Bold.ttf'

    console.log('开始加载字体...')
    const fontResponse = await fetch(fontPath)
    if (!fontResponse.ok) {
      throw new Error(`字体加载失败: ${fontPath} (${fontResponse.status})`)
    }
    const fontBytes = await fontResponse.arrayBuffer()
    console.log('Regular字体加载成功，大小:', fontBytes.byteLength)

    const boldFontResponse = await fetch(boldFontPath)
    if (!boldFontResponse.ok) {
      throw new Error(`粗体字体加载失败: ${boldFontPath} (${boldFontResponse.status})`)
    }
    const boldFontBytes = await boldFontResponse.arrayBuffer()
    console.log('Bold字体加载成功，大小:', boldFontBytes.byteLength)

    console.log('开始嵌入字体到PDF...')
    chineseFont = await pdfDoc.embedFont(new Uint8Array(fontBytes))
    console.log('Regular字体嵌入成功')
    chineseBoldFont = await pdfDoc.embedFont(new Uint8Array(boldFontBytes))
    console.log('Bold字体嵌入成功')
  } catch (error) {
    console.error('字体加载失败:', error)
    alert(`字体加载失败: ${error instanceof Error ? error.message : '未知错误'}`)
    return
  }

  // ========== Page 1: 页面操作演示 ==========
  const page1 = pdfDoc.addPage([600, 800])
  page1.drawText('PDF-LIB: 高级页面操作', {
    x: 50,
    y: 750,
    size: 22,
    font: chineseBoldFont,
    color: rgb(0.06, 0.72, 0.51),
  })

  page1.drawText('✓ 独特优势：插入/删除/重排页面', {
    x: 50,
    y: 710,
    size: 14,
    font: chineseBoldFont,
    color: rgb(0, 0.5, 0),
  })

  page1.drawText('不同于 jsPDF/pdfmake，PDF-LIB 可以：', {
    x: 50,
    y: 680,
    size: 12,
    font: chineseFont,
  })

  const features = [
    '• addPage() - 在任意位置插入页面',
    '• removePage(index) - 删除特定页面',
    '• insertPage(index) - 在指定索引插入',
    '• getPages() - 获取所有页面数组',
  ]

  let yPos = 660
  features.forEach((text) => {
    page1.drawText(text, { x: 70, y: yPos, size: 11, font: chineseFont })
    yPos -= 20
  })

  page1.drawText('✓ 页面操作演示：', {
    x: 50,
    y: yPos - 20,
    size: 14,
    font: chineseBoldFont,
    color: rgb(0, 0.5, 0),
  })

  page1.drawText('此文档将在第2页后插入一个页面...', {
    x: 50,
    y: yPos - 45,
    size: 11,
    font: chineseFont,
    color: rgb(0.5, 0, 0),
  })

  // ========== Page 2 ==========
  const page2 = pdfDoc.addPage([600, 800])
  page2.drawText('第2页：合并 & 复制页面', {
    x: 50,
    y: 750,
    size: 18,
    font: chineseBoldFont,
    color: rgb(0.06, 0.72, 0.51),
  })

  page2.drawText('✓ 优势：合并多个PDF', {
    x: 50,
    y: 710,
    size: 14,
    font: chineseBoldFont,
    color: rgb(0, 0.5, 0),
  })

  const mergeSteps = [
    '1. const existingPdf = await PDFDocument.load(bytes)',
    '2. const [page] = await doc.copyPages(existingPdf, [0])',
    '3. doc.addPage(page) // 合并完成！',
  ]

  yPos = 680
  mergeSteps.forEach((text) => {
    page2.drawText(text, { x: 70, y: yPos, size: 10, font: chineseFont, color: rgb(0.2, 0.2, 0.2) })
    yPos -= 18
  })

  page2.drawText('vs jsPDF/pdfmake: 无法合并现有PDF', {
    x: 70,
    y: yPos - 20,
    size: 11,
    font: chineseFont,
    color: rgb(0.7, 0, 0),
  })

  // ========== 插入一个新页面（演示插入功能）==========
  const insertedPage = pdfDoc.insertPage(2, [600, 800]) // 在索引2插入
  insertedPage.drawText('🎉 插入的页面（索引2）', {
    x: 50,
    y: 750,
    size: 20,
    font: chineseBoldFont,
    color: rgb(1, 0, 0),
  })

  insertedPage.drawText('✓ 此页面在创建后被插入！', {
    x: 50,
    y: 710,
    size: 14,
    font: chineseBoldFont,
    color: rgb(0, 0.5, 0),
  })

  insertedPage.drawText('代码：', { x: 50, y: 680, size: 12, font: chineseBoldFont })
  insertedPage.drawText('pdfDoc.insertPage(2, [600, 800])', {
    x: 70,
    y: 660,
    size: 11,
    font: chineseFont,
    color: rgb(0.2, 0.2, 0.7),
  })

  insertedPage.drawText('jsPDF/pdfmake 无法做到！', {
    x: 70,
    y: 640,
    size: 11,
    font: chineseFont,
    color: rgb(0.7, 0, 0),
  })

  // ========== Page 3 (原本的Page 2之后) ==========
  const page3 = pdfDoc.addPage([600, 800])
  page3.drawText('第3页：编辑现有PDF', {
    x: 50,
    y: 750,
    size: 18,
    font: chineseBoldFont,
    color: rgb(0.06, 0.72, 0.51),
  })

  page3.drawText('✓ 加载并修改现有PDF：', {
    x: 50,
    y: 710,
    size: 14,
    font: chineseBoldFont,
    color: rgb(0, 0.5, 0),
  })

  const editExamples = [
    '• 添加水印到现有文档',
    '• 添加签名或印章',
    '• 修改表单字段',
    '• 提取特定页面',
    '• 旋转页面',
  ]

  yPos = 680
  editExamples.forEach((text) => {
    page3.drawText(text, { x: 70, y: yPos, size: 11, font: chineseFont })
    yPos -= 20
  })

  page3.drawText('jsPDF/pdfmake: 只能创建新PDF', {
    x: 70,
    y: yPos - 20,
    size: 11,
    font: chineseFont,
    color: rgb(0.7, 0, 0),
  })

  // ========== 手动添加页码（因为PDF-LIB没有自动页眉页脚）==========
  const pages = pdfDoc.getPages()
  pages.forEach((page, index) => {
    page.drawText(`第 ${index + 1}/${pages.length} 页 | 需要手动编号`, {
      x: 180,
      y: 20,
      size: 9,
      font: chineseFont,
      color: rgb(0.5, 0.5, 0.5),
    })
  })

  const pdfBytes = await pdfDoc.save()

  // ✅ 改为打印预览
  try {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    openBlobInPrintWindow(blob)
  } catch (error) {
    console.error('PDF-LIB打印失败:', error)
    alert('PDF打印失败，请查看控制台错误信息')
  }
}

const printWithCSS = () => {
  // 使用Print.js打印特定元素
  const element = document.getElementById('print-css-content')
  if (element) {
    // 创建临时窗口打印
    const printWindow = window.open('', '', 'width=800,height=600')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print.js CSS Pagination</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 20px;
              }
              .print-page {
                padding: 20px;
                min-height: 400px;
              }
              .page-break-before {
                page-break-before: always;
                break-before: page;
              }
              h3 {
                color: #667eea;
                border-bottom: 2px solid #667eea;
                padding-bottom: 10px;
              }
              pre {
                background: #f4f4f4;
                padding: 10px;
                border-radius: 4px;
              }
              @media print {
                .page-break-before {
                  page-break-before: always;
                  break-before: page;
                }
              }
            </style>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.focus()
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)
    }
  }
}

const printElementPaging = async () => {
  try {
    const module = await import('print-html-element')
    const printFn =
      (module as any).printElement || (module as any).default?.printElement || module.printElement

    const element = document.getElementById('print-element-content')
    if (element && typeof printFn === 'function') {
      printFn(element)
    } else {
      // 降级方案：使用临时窗口
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow && element) {
        printWindow.document.write(`
          <html>
            <head>
              <title>print-html-element Pagination</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                }
                .print-section {
                  padding: 20px;
                  min-height: 350px;
                }
                .page-break-before {
                  page-break-before: always;
                  break-before: page;
                }
                h3 {
                  color: #f093fb;
                  border-bottom: 2px solid #f093fb;
                  padding-bottom: 10px;
                }
                .highlight-box {
                  background: #f0f7ff;
                  padding: 15px;
                  border-radius: 8px;
                  margin: 10px 0;
                }
                .code-sample {
                  background: #2d3748;
                  color: #fff;
                  padding: 15px;
                  border-radius: 4px;
                  margin: 10px 0;
                }
                @media print {
                  .page-break-before {
                    page-break-before: always;
                    break-before: page;
                  }
                }
              </style>
            </head>
            <body>
              ${element.innerHTML}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  } catch (error) {
    console.error('Failed to load print-html-element:', error)
    alert('Failed to load print-html-element library. Using fallback print method.')
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
  grid-template-columns: 300px 1fr;
  gap: 2rem;
}

.info-panel {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
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
  margin-bottom: 0.5rem;
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
}

.info-section li {
  padding: 0.25rem 0;
  font-size: 0.9rem;
}

.rating {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
}

.demo-panel {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
}

.section {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid #f7fafc;
}

.section:last-child {
  border-bottom: none;
}

.section h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
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

.demo-content {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.print-demo {
  background: white;
  border: 2px solid #667eea;
  padding: 0;
}

.print-page,
.print-section {
  background: white;
  padding: 2rem;
  margin: 0;
  border-bottom: 2px dashed #e2e8f0;
  min-height: 300px;
}

.print-page:last-child,
.print-section:last-child {
  border-bottom: none;
}

.print-page h3,
.print-section h3 {
  color: #667eea;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
  margin-top: 0;
}

.highlight-box {
  background: #f0f7ff;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #667eea;
}

.code-sample {
  background: #2d3748;
  color: #48bb78;
  padding: 15px;
  border-radius: 4px;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
}

.code-sample code {
  color: #48bb78;
  white-space: pre;
}

.page {
  background: white;
  padding: 2rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

.page h2 {
  color: #667eea;
  margin-bottom: 0.75rem;
}

.code-block {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.code-block h4 {
  color: #4a5568;
  margin-bottom: 0.75rem;
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

.best-practices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.practice-card {
  background: #f7fafc;
  border-left: 4px solid #667eea;
  border-radius: 4px;
  padding: 1.5rem;
}

.practice-card h3 {
  color: #667eea;
  margin-bottom: 0.75rem;
}

.practice-card p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.practice-card pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.85rem;
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.problem-card {
  background: #fffbeb;
  border: 1px solid #fbbf24;
  border-radius: 8px;
  padding: 1.5rem;
}

.problem-card h3 {
  color: #92400e;
  margin-bottom: 0.75rem;
}

.problem-card p {
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.problem-card ul {
  list-style: none;
  padding: 0;
}

.problem-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  font-size: 0.9rem;
}

.comparison-table {
  overflow-x: auto;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-top: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background: #f7fafc;
  color: #2d3748;
  font-weight: 600;
}

tbody tr:hover {
  background: #f7fafc;
}

/* 打印样式 */
@media print {
  .page-header,
  .info-panel,
  .btn,
  .code-block {
    display: none !important;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .page-break-after {
    page-break-after: always;
    break-after: page;
  }

  .page-break-before {
    page-break-before: always;
    break-before: page;
  }
}
</style>
