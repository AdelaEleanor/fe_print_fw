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

          <div class="code-block">
            <h4>pdfmake 分页代码</h4>
            <pre><code>import pdfMake from 'pdfmake/build/pdfmake';

const docDefinition = {
  content: [
    { text: '第一页内容' },
    { text: '第二页内容', pageBreak: 'before' },
    {
      text: '第三页内容',
      pageBreakBefore: (currentNode, followingNodesOnPage) => {
        return currentNode.headlineLevel === 1;
      }
    },
    // 大表格自动分页
    {
      table: {
        headerRows: 1,
        body: largeDataArray
      },
      layout: 'lightHorizontalLines'
    }
  ],
  // 页眉
  header: (currentPage, pageCount) => ({
    text: '文档标题',
    alignment: 'center',
    margin: [0, 10]
  }),
  // 页脚
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
    mode: ['avoid-all', 'css', 'legacy'],
    before: '.page-break-before',
    after: '.page-break-after'
  }
};

html2pdf().set(options).from(element).save();</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>5. PDF-LIB 高级分页</h2>
          <button @click="generatePdfLibPaging" class="btn btn-success">📚 PDF-LIB 分页示例</button>

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

const pdfBytes = await pdfDoc.save();
// 下载PDF</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>6. Print.js 和 vue3-print-nb CSS分页</h2>
          <button @click="printWithCSS" class="btn btn-info">⚡ CSS分页打印</button>

          <div id="print-css-content" class="demo-content print-demo">
            <div class="print-page">
              <h3>1 - Print.js CSS</h3>
              <p>Print.jsCSS。</p>
              <p>Print.js。</p>
              <p>CSS @media print：</p>
              <ul>
                <li>API</li>
                <li>(~10KB)</li>
                <li></li>
              </ul>
            </div>

            <div class="print-page page-break-before">
              <h3>2 - CSS</h3>
              <p>.page-break-before。</p>
              <p>CSS：</p>
              <pre><code>.page-break-before &lbrace;
  page-break-before: always;
  break-before: page;
&rbrace;</code></pre>
            </div>

            <div class="print-page page-break-before">
              <h3>3 - Vue</h3>
              <p>vue3-print-nbVue：</p>
              <pre><code>&lt;div v-print="printConfig"&gt;

&lt;/div&gt;</code></pre>
              <p>CSS。</p>
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

          <div id="print-element-content" class="demo-content print-demo">
            <div class="print-section">
              <h3>第1节 - 超轻量级</h3>
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
            </div>

            <div class="print-section page-break-before">
              <h3>第2节 - 浏览器原生</h3>
              <p>这个库利用浏览器的原生打印对话框。</p>
              <p>分页完全由 CSS 控制：</p>
              <div class="code-sample">
                <code> .page-break-before &lbrace; page-break-before: always; &rbrace; </code>
              </div>
            </div>

            <div class="print-section page-break-before">
              <h3>第3节 - 简单使用</h3>
              <p>只需一行代码即可打印任意元素：</p>
              <div class="code-sample">
                <code>printElement(document.getElementById('myElement'));</code>
              </div>
              <p>非常适合简单的打印需求，无需生成PDF。</p>
            </div>
          </div>

          <div class="code-block">
            <h4>print-html-element 分页说明</h4>
            <pre><code>import printElement from 'print-html-element';

// print-html-element 依赖浏览器原生打印和CSS
// 分页控制通过 CSS 实现
const element = document.getElementById('content');
printElement(element);

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
import { jsPDF } from 'jspdf'
import pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'

// @ts-ignore
pdfMake.vfs = pdfFonts.pdfMake?.vfs || pdfFonts

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
  const pageHeight = doc.internal.pageSize.height
  const pageWidth = doc.internal.pageSize.width
  let yPosition = 20

  // 第一页：展示精确控制的优势
  doc.setFontSize(18)
  doc.text('jsPDF: Pixel-Perfect Control', pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 15

  doc.setFontSize(12)
  doc.setTextColor(0, 128, 0)
  doc.text('Advantage Demo: Exact Position Control', 20, yPosition)
  yPosition += 10

  doc.setTextColor(0, 0, 0)
  doc.setFontSize(10)
  doc.text(
    `Y Position: ${yPosition.toFixed(1)}mm - This text is at EXACTLY this position`,
    20,
    yPosition,
  )
  yPosition += 15

  doc.text(`Y Position: ${yPosition.toFixed(1)}mm - We control every pixel`, 20, yPosition)
  yPosition += 15

  doc.text(`Y Position: ${yPosition.toFixed(1)}mm - No browser variance`, 20, yPosition)
  yPosition += 20

  // 绘制表格演示精确对齐
  doc.setFontSize(11)
  doc.text('Table with Exact Alignment:', 20, yPosition)
  yPosition += 8

  // 表格线条 - 精确定位
  doc.line(20, yPosition, 190, yPosition) // 顶部线
  yPosition += 5
  doc.text('Item', 25, yPosition)
  doc.text('Price', 150, yPosition)
  yPosition += 3
  doc.line(20, yPosition, 190, yPosition) // 分隔线
  yPosition += 5

  for (let i = 1; i <= 5; i++) {
    doc.text(`Product ${i}`, 25, yPosition)
    doc.text(`$${i * 10}.00`, 150, yPosition)
    yPosition += 6
  }
  doc.line(20, yPosition, 190, yPosition) // 底部线
  yPosition += 15

  // 展示自动分页功能
  doc.setFontSize(12)
  doc.setTextColor(0, 128, 0)
  doc.text('Advantage: Auto Page Break Control', 20, yPosition)
  yPosition += 10

  doc.setTextColor(0, 0, 0)
  doc.setFontSize(10)

  // 添加大量内容演示自动分页
  for (let i = 0; i < 60; i++) {
    // 检查是否需要新页（关键分页逻辑）
    if (yPosition > pageHeight - 30) {
      doc.addPage()
      yPosition = 20

      // 在新页面添加页眉
      doc.setFontSize(12)
      doc.setTextColor(128, 128, 128)
      doc.text(`Continued from previous page...`, 20, yPosition)
      yPosition += 10
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(10)
    }

    doc.text(
      `Line ${i + 1} at Y=${yPosition.toFixed(1)}mm - Precise control guaranteed`,
      20,
      yPosition,
    )
    yPosition += 7
  }

  // 添加页码到所有页面
  // @ts-ignore - getNumberOfPages exists but type definition is incomplete
  const totalPages = doc.internal.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(9)
    doc.text(`${i} / ${totalPages}`, pageWidth / 2, pageHeight - 10, {
      align: 'center',
    })
  }

  doc.save('jspdf-paging.pdf')
}

const generatePdfmakePaging = () => {
  const docDefinition: any = {
    pageSize: 'A4',
    pageMargins: [40, 60, 40, 60],
    header: (currentPage: number, pageCount: number) => ({
      text: 'pdfmake Declarative Pagination Demo',
      alignment: 'center',
      margin: [0, 20, 0, 0],
      fontSize: 10,
      color: '#666',
    }),
    footer: (currentPage: number, pageCount: number) => ({
      text: `Page ${currentPage} of ${pageCount}`,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    }),
    content: [
      { text: 'Advantage: Built-in Header & Footer', style: 'header' },
      {
        text: 'No manual calculation needed! pdfmake automatically adds header and footer to every page.',
      },
      { text: 'Just define them once in the document definition.', margin: [0, 5, 0, 20] },

      { text: 'Advantage: Declarative Page Breaks', style: 'header', pageBreak: 'before' },
      {
        text: 'Simply add pageBreak: "before" or "after" property. ',
      },
      {
        text: 'No Y-position calculation required!',
        bold: true,
        color: '#008800',
        margin: [0, 5, 0, 20],
      },

      { text: 'Advantage: Auto Table Pagination', style: 'header', pageBreak: 'before' },
      {
        text: 'Large tables automatically split across pages. Table headers repeat on each page!',
        margin: [0, 0, 0, 10],
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            [
              { text: 'Product Name', style: 'tableHeader' },
              { text: 'Qty', style: 'tableHeader' },
              { text: 'Price', style: 'tableHeader' },
              { text: 'Total', style: 'tableHeader' },
            ],
            ...Array.from({ length: 50 }, (_, i) => [
              `Product Item #${i + 1}`,
              `${i + 1}`,
              `$${(i + 1) * 10}.00`,
              `$${(i + 1) * (i + 1) * 10}.00`,
            ]),
          ],
        },
        layout: {
          fillColor: (rowIndex: number) =>
            rowIndex === 0 ? '#667eea' : rowIndex % 2 === 0 ? '#f7fafc' : null,
        },
      },

      {
        text: 'Summary',
        style: 'header',
        pageBreak: 'before',
      },
      {
        text: 'pdfmake Advantages Demonstrated:',
        bold: true,
        margin: [0, 0, 0, 10],
      },
      {
        ul: [
          'Automatic header/footer on all pages',
          'Simple pageBreak properties',
          'Table auto-pagination with header repetition',
          'No manual Y-position tracking needed',
          'Declarative, readable code',
        ],
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
        margin: [0, 0, 0, 10],
        color: '#667eea',
      },
      tableHeader: {
        bold: true,
        color: '#ffffff',
      },
    },
  }

  pdfMake.createPdf(docDefinition).download('pdfmake-paging.pdf')
}

const generateHtml2PdfPaging = async () => {
  // 动态导入 html2pdf
  const html2pdf = (await import('html2pdf.js')).default

  // 创建一个包含明确分页的临时元素
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = `
    <div style="padding: 20px; font-family: 'Microsoft YaHei', Arial, sans-serif;">
      <h1 style="text-align: center; color: #667eea;">html2pdf.js 分页演示</h1>
      <h2>第一页 - 简介</h2>
      <p>html2pdf.js 可以将 HTML 内容转换为 PDF 文档。</p>
      <p>它结合了 html2canvas 和 jsPDF 的功能。</p>
      <ul>
        <li>支持复杂的 HTML 布局</li>
        <li>保留 CSS 样式</li>
        <li>支持中文字符</li>
      </ul>
      <div class="html2canvas-break"></div>

      <h2>第二页 - 分页控制</h2>
      <p>html2pdf.js 通过 CSS 控制分页：</p>
      <ul>
        <li>使用 page-break-before/after 属性</li>
        <li>避免元素被截断：avoid-all</li>
        <li>配置分页模式：mode: ['css', 'legacy']</li>
      </ul>
      <div class="html2canvas-break"></div>

      <h2>第三页 - 使用方法</h2>
      <p>非常简单的 API 调用：</p>
      <pre style="background: #f4f4f4; padding: 10px; border-radius: 4px;">html2pdf()
  .set(options)
  .from(element)
  .save()</pre>
      <p>自动处理 HTML 元素的转换和分页。</p>
    </div>
  `
  document.body.appendChild(tempDiv)

  const options = {
    margin: 15,
    filename: 'html2pdf-paging.pdf',
    image: { type: 'jpeg', quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: {
      mode: ['css', 'legacy'],
      before: '.html2canvas-break',
    },
  }

  await html2pdf().set(options).from(tempDiv).save()

  // 清理临时元素
  document.body.removeChild(tempDiv)
}

const generatePdfLibPaging = async () => {
  const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib')

  const pdfDoc = await PDFDocument.create()

  // 使用标准字体
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  // 创建5页示例
  for (let i = 0; i < 5; i++) {
    const page = pdfDoc.addPage([600, 800])

    // 页面标题
    page.drawText(`Page ${i + 1}`, {
      x: 50,
      y: 750,
      size: 24,
      font: boldFont,
      color: rgb(0.4, 0.49, 0.92),
    })

    // 页面内容
    page.drawText(`This is page ${i + 1} content`, {
      x: 50,
      y: 700,
      size: 14,
      font: font,
      color: rgb(0, 0, 0),
    })

    page.drawText('PDF-LIB Advanced Features:', {
      x: 50,
      y: 670,
      size: 12,
      font: font,
      color: rgb(0.2, 0.2, 0.2),
    })

    page.drawText('- Add/Remove pages dynamically', {
      x: 70,
      y: 650,
      size: 11,
      font: font,
      color: rgb(0.3, 0.3, 0.3),
    })

    page.drawText('- Modify existing PDF files', {
      x: 70,
      y: 635,
      size: 11,
      font: font,
      color: rgb(0.3, 0.3, 0.3),
    })

    page.drawText('- Merge multiple PDFs', {
      x: 70,
      y: 620,
      size: 11,
      font: font,
      color: rgb(0.3, 0.3, 0.3),
    })

    page.drawText('- Fill PDF forms programmatically', {
      x: 70,
      y: 605,
      size: 11,
      font: font,
      color: rgb(0.3, 0.3, 0.3),
    })

    // 页脚
    page.drawText(`Page ${i + 1} of 5`, {
      x: 240,
      y: 30,
      size: 12,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    })
  }

  const pdfBytes = await pdfDoc.save()

  // 下载PDF
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'pdf-lib-paging.pdf'
  link.click()
  URL.revokeObjectURL(url)
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
    const printElement = module.default || module

    const element = document.getElementById('print-element-content')
    if (element && typeof printElement === 'function') {
      printElement(element)
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
}
</style>
