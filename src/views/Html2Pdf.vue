<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🔄 html2pdf.js - 一站式方案</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>html2pdf.js</strong></p>
          <p>集成 html2canvas + jsPDF</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 60+</li>
            <li>✅ Firefox 55+</li>
            <li>✅ Safari 11.1+</li>
            <li>✅ Edge 79+</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (80%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>⚠️ 组合开销</li>
            <li>⚠️ 渲染较慢</li>
          </ul>
          <p class="rating">评分: ⭐⭐ (40%)</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ 自动分页</li>
            <li>✅ page-break支持</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~330 KB</p>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>一站式解决方案</li>
            <li>配置简单</li>
            <li>自动处理分页</li>
            <li>所见即所得</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>性能开销大</li>
            <li>文件体积大</li>
            <li>图片型PDF</li>
            <li>文字不可选</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button @click="simplePDF" class="btn btn-primary">📄 简单生成</button>
          <button @click="configuredPDF" class="btn btn-secondary">⚙️ 配置生成</button>
          <button @click="multiPagePDF" class="btn btn-info">📑 多页文档</button>
        </div>

        <div id="pdf-content" class="pdf-content">
          <div class="document">
            <h1>html2pdf.js 使用文档</h1>
            <p class="date">{{ currentDate }}</p>

            <section>
              <h2>一、简介</h2>
              <p>
                html2pdf.js 是一个将 HTML 元素转换为 PDF 的库，它整合了 html2canvas 和 jsPDF
                的功能，提供了一站式的解决方案。
              </p>
            </section>

            <section>
              <h2>二、主要特性</h2>
              <div class="features">
                <div class="feature-box">
                  <h3>🎯 简单易用</h3>
                  <p>一行代码即可生成PDF</p>
                </div>
                <div class="feature-box">
                  <h3>📱 响应式</h3>
                  <p>自动适配页面大小</p>
                </div>
                <div class="feature-box">
                  <h3>🔧 可配置</h3>
                  <p>支持多种配置选项</p>
                </div>
                <div class="feature-box">
                  <h3>📑 自动分页</h3>
                  <p>智能处理多页内容</p>
                </div>
              </div>
            </section>

            <section class="page-break">
              <h2>三、使用场景</h2>
              <ul>
                <li>报告生成：将网页报告导出为PDF</li>
                <li>发票打印：生成PDF格式发票</li>
                <li>证书导出：制作PDF证书</li>
                <li>文档归档：保存网页内容</li>
              </ul>
            </section>

            <section>
              <h2>四、性能对比</h2>
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>方案</th>
                    <th>初始化</th>
                    <th>渲染</th>
                    <th>文件大小</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>window.print()</td>
                    <td>0ms</td>
                    <td>45ms</td>
                    <td>0 KB</td>
                  </tr>
                  <tr>
                    <td>jsPDF</td>
                    <td>125ms</td>
                    <td>234ms</td>
                    <td>150 KB</td>
                  </tr>
                  <tr>
                    <td>html2pdf.js</td>
                    <td>156ms</td>
                    <td>1456ms</td>
                    <td>330 KB</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装</h4>
            <pre><code>npm install html2pdf.js</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 最简用法</h4>
            <pre><code>import html2pdf from 'html2pdf.js';

const element = document.getElementById('content');
html2pdf().from(element).save();</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 配置选项</h4>
            <pre><code>const options = {
  margin: 10,
  filename: 'document.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

html2pdf().set(options).from(element).save();</code></pre>
          </div>

          <div class="code-block">
            <h4>4. Promise 链式调用</h4>
            <pre><code>html2pdf()
  .from(element)
  .set({
    margin: 1,
    filename: 'report.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
  })
  .toPdf()
  .get('pdf')
  .then((pdf) => {
    // 可以进一步处理 PDF
    window.open(pdf.output('bloburl'));
  });</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 分页控制</h4>
            <pre><code>// HTML 中添加分页类
&lt;div class="page-break"&gt;&lt;/div&gt;

// CSS
.page-break {
  page-break-after: always;
  break-after: page;
}

// JavaScript
html2pdf()
  .from(element)
  .set({
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  })
  .save();</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 处理大内容</h4>
            <pre><code>html2pdf()
  .from(element)
  .set({
    margin: [10, 10, 10, 10],
    filename: 'long-document.pdf',
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.page-break-before',
      after: '.page-break-after',
      avoid: '.no-break'
    }
  })
  .save();</code></pre>
          </div>

          <div class="code-block">
            <h4>7. 生成 Blob</h4>
            <pre><code>html2pdf()
  .from(element)
  .output('blob')
  .then((blob) => {
    // 上传到服务器或其他处理
    const formData = new FormData();
    formData.append('pdf', blob, 'document.pdf');

    fetch('/upload', {
      method: 'POST',
      body: formData
    });
  });</code></pre>
          </div>

          <div class="code-block">
            <h4>8. 在新窗口打开</h4>
            <pre><code>html2pdf()
  .from(element)
  .output('dataurlnewwindow');</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))

const simplePDF = () => {
  const element = document.getElementById('pdf-content')
  html2pdf().from(element).save('html2pdf-simple.pdf')
}

const configuredPDF = () => {
  const element = document.getElementById('pdf-content')

  const options = {
    margin: 10,
    filename: 'html2pdf-configured.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  }

  html2pdf().set(options).from(element).save()
}

const multiPagePDF = () => {
  const element = document.getElementById('pdf-content')

  const options = {
    margin: [10, 10, 10, 10],
    filename: 'html2pdf-multipage.pdf',
    image: { type: 'jpeg', quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.page-break',
    },
  }

  html2pdf().set(options).from(element).save()
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

.pdf-content {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.document {
  background: white;
  padding: 2.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.document h1 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.date {
  color: #718096;
  font-style: italic;
  margin-bottom: 2rem;
}

.document section {
  margin-bottom: 2rem;
}

.document h2 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.document p {
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1rem;
}

.document ul {
  line-height: 1.8;
  color: #4a5568;
  margin-left: 1.5rem;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.feature-box {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
}

.feature-box h3 {
  color: #667eea;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.feature-box p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.comparison-table th,
.comparison-table td {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.comparison-table th {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.page-break {
  page-break-after: always;
  break-after: page;
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
