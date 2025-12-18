<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📑 自定义分页控制</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>分页方案对比</h2>
        <div class="info-section">
          <h3>CSS 分页</h3>
          <p class="rating">⭐⭐⭐⭐</p>
          <ul>
            <li>✅ page-break-before</li>
            <li>✅ page-break-after</li>
            <li>✅ page-break-inside</li>
            <li>⚠️ 浏览器依赖</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>jsPDF 分页</h3>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <ul>
            <li>✅ 完全可控</li>
            <li>✅ addPage()</li>
            <li>✅ 精确定位</li>
            <li>✅ 自动计算</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>pdfmake 分页</h3>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <ul>
            <li>✅ pageBreak 属性</li>
            <li>✅ 自动分页</li>
            <li>✅ 页眉页脚</li>
            <li>✅ 动态页码</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>html2pdf 分页</h3>
          <p class="rating">⭐⭐⭐⭐</p>
          <ul>
            <li>✅ CSS 分页支持</li>
            <li>✅ 自动分页</li>
            <li>⚠️ 准确性依赖内容</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="section">
          <h2>1. CSS 分页（浏览器原生）</h2>
          <button @click="printCSSPaging" class="btn btn-primary">🖨️ 测试 CSS 分页</button>

          <div id="css-paging" class="demo-content">
            <div class="page">
              <h2>第一页</h2>
              <p>这是第一页的内容。使用 CSS page-break-after: always 强制分页。</p>
            </div>

            <div class="page page-break-after">
              <h2>第二页</h2>
              <p>这是第二页的内容。</p>
            </div>

            <div class="page">
              <h2>第三页</h2>
              <p>这是第三页的内容，不会被分页打断。</p>
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
          <h2>4. 分页最佳实践</h2>

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
          <h2>5. 常见分页问题及解决方案</h2>

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
          <h2>6. 分页控制对比总结</h2>

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
  window.print()
}

const generateJsPDFPaging = () => {
  const doc = new jsPDF()
  const pageHeight = doc.internal.pageSize.height
  let yPosition = 20

  // 标题
  doc.setFontSize(18)
  doc.text('jsPDF 自动分页示例', 105, yPosition, { align: 'center' })
  yPosition += 15

  // 添加大量内容，自动分页
  doc.setFontSize(11)
  for (let i = 0; i < 80; i++) {
    if (yPosition > pageHeight - 30) {
      doc.addPage()
      yPosition = 20
    }

    doc.text(`第 ${i + 1} 行：这是自动分页的示例内容。`, 20, yPosition)
    yPosition += 7
  }

  // 添加页码
  // @ts-ignore - getNumberOfPages exists but type definition is incomplete
  const totalPages = doc.internal.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(9)
    doc.text(`第 ${i} 页 / 共 ${totalPages} 页`, 105, pageHeight - 10, {
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
      text: 'pdfmake 分页示例',
      alignment: 'center',
      margin: [0, 20, 0, 0],
    }),
    footer: (currentPage: number, pageCount: number) => ({
      text: `第 ${currentPage} 页 / 共 ${pageCount} 页`,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    }),
    content: [
      { text: '第一部分内容', style: 'header' },
      { text: '这是第一页的内容，展示 pdfmake 的分页功能。' },

      { text: '第二部分内容', style: 'header', pageBreak: 'before' },
      { text: '这是第二页的内容，使用 pageBreak: "before" 强制分页。' },

      { text: '第三部分：表格示例', style: 'header', pageBreak: 'before' },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto'],
          body: [
            ['名称', '数量', '金额'],
            ...Array.from({ length: 50 }, (_, i) => [
              `商品 ${i + 1}`,
              `${i + 1}`,
              `¥${(i + 1) * 10}`,
            ]),
          ],
        },
      },

      {
        text: '结尾内容',
        style: 'header',
        pageBreak: 'before',
      },
      { text: '感谢阅读本文档。' },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  }

  pdfMake.createPdf(docDefinition).download('pdfmake-paging.pdf')
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
