<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🌐 浏览器原生打印</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>无需任何第三方库</strong></p>
          <p>纯浏览器原生API</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 1+</li>
            <li>✅ Firefox 1+</li>
            <li>✅ Safari 1+</li>
            <li>✅ Edge All</li>
            <li>✅ IE 5+</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐ (100%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 零加载时间</li>
            <li>✅ 无内存开销</li>
            <li>✅ 矢量输出</li>
            <li>✅ 原生渲染</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ page-break-before</li>
            <li>✅ page-break-after</li>
            <li>✅ page-break-inside</li>
            <li>✅ break-before (新)</li>
            <li>✅ break-after (新)</li>
            <li>⚠️ 依赖浏览器实现</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">0 KB</p>
          <p>无需引入任何库</p>
        </div>

        <div class="info-section">
          <h3>📚 学习曲线</h3>
          <p class="rating">⭐⭐⭐⭐</p>
          <p>需要掌握 CSS 打印样式</p>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>无依赖，轻量级</li>
            <li>浏览器原生支持</li>
            <li>用户可预览和配置</li>
            <li>矢量输出，质量高</li>
            <li>适合简单文档</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>样式调试复杂</li>
            <li>跨浏览器差异</li>
            <li>用户可能取消打印</li>
            <li>无法直接生成PDF</li>
            <li>分页控制有限</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button @click="handlePrint" class="btn btn-primary">🖨️ 打印预览</button>
          <button @click="handlePrintDirect" class="btn btn-secondary">⚡ 直接打印</button>
          <button @click="handlePrintSelected" class="btn btn-info">📄 打印指定区域</button>
        </div>

        <div id="print-content" class="print-content">
          <div class="document">
            <header class="doc-header">
              <h1>前端打印技术调研报告</h1>
              <p class="doc-meta">报告日期: {{ currentDate }}</p>
            </header>

            <section class="doc-section">
              <h2>一、概述</h2>
              <p>本报告旨在全面调研和对比当前主流的前端打印技术方案，为项目选型提供参考依据。</p>
              <p>
                随着Web应用的普及，前端打印需求日益增长，包括但不限于：订单打印、报表生成、
                合同打印、发票打印等场景。
              </p>
            </section>

            <section class="doc-section page-break">
              <h2>二、浏览器原生打印</h2>
              <h3>2.1 基本原理</h3>
              <p>
                浏览器原生打印基于 <code>window.print()</code> API 和 CSS
                <code>@media print</code> 媒体查询实现。
              </p>

              <h3>2.2 核心技术</h3>
              <ul>
                <li><strong>window.print()</strong>: 触发浏览器打印对话框</li>
                <li><strong>@media print</strong>: 定义打印专用样式</li>
                <li><strong>page-break-*</strong>: 控制分页行为</li>
              </ul>

              <h3>2.3 代码示例</h3>
              <pre><code>// JavaScript
window.print();

// CSS
@media print {
  .no-print { display: none; }
  .page-break { page-break-after: always; }
}</code></pre>
            </section>

            <section class="doc-section page-break">
              <h2>三、性能数据</h2>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>指标</th>
                    <th>数值</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>库体积</td>
                    <td>0 KB</td>
                    <td>无需引入</td>
                  </tr>
                  <tr>
                    <td>初始化时间</td>
                    <td>0 ms</td>
                    <td>原生API</td>
                  </tr>
                  <tr>
                    <td>渲染时间</td>
                    <td>&lt; 100ms</td>
                    <td>取决于内容</td>
                  </tr>
                  <tr>
                    <td>内存占用</td>
                    <td>最小</td>
                    <td>浏览器管理</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section class="doc-section page-break">
              <h2>四、兼容性说明</h2>
              <p>
                <code>window.print()</code> 是最古老、最稳定的Web API之一，几乎所有浏览器都支持。
              </p>
              <ul>
                <li>✅ 桌面浏览器：全部支持</li>
                <li>✅ 移动浏览器：大部分支持</li>
                <li>⚠️ 微信内置浏览器：部分限制</li>
              </ul>
            </section>

            <section class="doc-section">
              <h2>五、最佳实践</h2>
              <ol>
                <li>使用 <code>@media print</code> 隐藏不必要元素</li>
                <li>合理使用 <code>page-break-*</code> 控制分页</li>
                <li>设置合适的页边距和字体大小</li>
                <li>测试不同浏览器的打印效果</li>
                <li>提供打印预览功能提升用户体验</li>
              </ol>
            </section>

            <footer class="doc-footer no-print">
              <p>此区域不会被打印（使用了 .no-print 类）</p>
            </footer>
          </div>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>基础用法</h4>
            <pre><code>// 直接触发打印
window.print();</code></pre>
          </div>

          <div class="code-block">
            <h4>打印指定区域</h4>
            <pre><code>// 方法1: 使用 CSS 隐藏其他内容
@media print {
  body > *:not(#print-area) {
    display: none !important;
  }
}

// 方法2: 打开新窗口打印
const printWindow = window.open('', '_blank');
printWindow.document.write(content);
printWindow.print();</code></pre>
          </div>

          <div class="code-block">
            <h4>分页控制</h4>
            <pre><code>/* 在元素后强制分页 */
.page-break {
  page-break-after: always;
}

/* 避免元素被分页截断 */
.keep-together {
  page-break-inside: avoid;
}

/* 新标准 (推荐) */
.page-break-new {
  break-after: page;
  break-inside: avoid;
}</code></pre>
          </div>

          <div class="code-block">
            <h4>完整示例 (Vue 3)</h4>
            <pre><code>import { ref } from 'vue';

const handlePrint = () => {
  window.print();
};

const handlePrintArea = () => {
  const printContent = document.getElementById('print-area');
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent.innerHTML;
  window.print();
  document.body.innerHTML = originalContent;

  // 重新绑定Vue (不推荐，仅演示)
  // 推荐使用 CSS 方式
};</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))

const handlePrint = () => {
  window.print()
}

const handlePrintDirect = () => {
  // 直接打印，不显示额外UI
  window.print()
}

const handlePrintSelected = () => {
  // 打印指定区域
  const printContent = document.getElementById('print-content')
  if (!printContent) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>打印内容</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .doc-header { text-align: center; margin-bottom: 2rem; }
        .doc-section { margin-bottom: 2rem; }
        .page-break { page-break-after: always; }
        .no-print { display: none; }
        .data-table { width: 100%; border-collapse: collapse; }
        .data-table th, .data-table td { border: 1px solid #ddd; padding: 8px; }
        .data-table th { background: #f5f5f5; }
        code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; }
        pre { background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; }
      </style>
    </head>
    <body>
      ${printContent.innerHTML}
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

.print-content {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.document {
  background: white;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.doc-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
}

.doc-header h1 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.doc-meta {
  color: #718096;
  font-style: italic;
}

.doc-section {
  margin-bottom: 2rem;
}

.doc-section h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.doc-section h3 {
  color: #4a5568;
  margin: 1rem 0 0.5rem;
}

.doc-section p {
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 0.75rem;
}

.doc-section ul,
.doc-section ol {
  line-height: 1.8;
  color: #4a5568;
  margin-left: 1.5rem;
}

.doc-section code {
  background: #edf2f7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.doc-section pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.doc-section pre code {
  background: transparent;
  padding: 0;
  color: inherit;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.data-table th,
.data-table td {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.data-table th {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.doc-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
  text-align: center;
  color: #718096;
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

/* 打印样式 */
@media print {
  .demo-page {
    padding: 0;
  }

  .page-header,
  .info-panel,
  .controls,
  .code-examples,
  .back-link {
    display: none !important;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .demo-panel {
    border: none;
    padding: 0;
  }

  .print-content {
    background: white;
    border: none;
    padding: 0;
  }

  .document {
    box-shadow: none;
    padding: 0;
  }

  .page-break {
    page-break-after: always;
    break-after: page;
  }

  .no-print {
    display: none !important;
  }

  .doc-section {
    page-break-inside: avoid;
    break-inside: avoid;
  }
}
</style>
