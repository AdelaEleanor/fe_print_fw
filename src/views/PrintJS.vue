<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>⚡ Print.js - 轻量级打印库</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>print-js</strong></p>
          <p>npm install print-js</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 49+</li>
            <li>✅ Firefox 52+</li>
            <li>✅ Safari 10+</li>
            <li>✅ Edge 14+</li>
            <li>⚠️ IE 11 (部分支持)</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (85%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 轻量级库</li>
            <li>✅ 快速初始化</li>
            <li>⚠️ 依赖iframe</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ CSS分页</li>
            <li>⚠️ 依赖浏览器</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~10 KB</p>
          <p>(gzipped)</p>
        </div>

        <div class="info-section">
          <h3>✨ 支持类型</h3>
          <ul>
            <li>✅ PDF 文件</li>
            <li>✅ HTML 元素</li>
            <li>✅ 图片 (PNG/JPG)</li>
            <li>✅ JSON 数据</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>简单易用</li>
            <li>支持多种类型</li>
            <li>配置灵活</li>
            <li>轻量级</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>功能相对简单</li>
            <li>复杂布局支持有限</li>
            <li>依赖iframe</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button @click="printHtml" class="btn btn-primary">🖨️ 打印HTML</button>
          <button @click="printImage" class="btn btn-secondary">🖼️ 打印图片</button>
          <button @click="printJson" class="btn btn-info">📊 打印JSON表格</button>
          <button @click="printWithCustomStyle" class="btn btn-warning">🎨 自定义样式打印</button>
        </div>

        <div id="print-html-content" class="print-content">
          <div class="document">
            <h1>Print.js 示例文档</h1>
            <p class="doc-date">日期: {{ currentDate }}</p>

            <h2>一、关于 Print.js</h2>
            <p>
              Print.js 是一个轻量级的 JavaScript
              库，用于简化网页打印操作。它支持多种数据类型的打印， 包括 PDF、HTML、图片和 JSON
              数据。
            </p>

            <h2>二、核心特性</h2>
            <ul>
              <li>支持打印 PDF 文件（通过 URL）</li>
              <li>支持打印 HTML 元素</li>
              <li>支持打印图片（PNG、JPG 等）</li>
              <li>支持打印 JSON 数据为表格</li>
              <li>可自定义打印样式</li>
              <li>支持打印前回调和打印后回调</li>
            </ul>

            <h2>三、使用场景</h2>
            <div class="grid-2">
              <div class="card">
                <h3>📄 文档打印</h3>
                <p>适合打印简单的HTML文档、报告、订单等</p>
              </div>
              <div class="card">
                <h3>📊 数据打印</h3>
                <p>可以将JSON数据直接打印为表格</p>
              </div>
              <div class="card">
                <h3>🖼️ 图片打印</h3>
                <p>支持直接打印图片文件</p>
              </div>
              <div class="card">
                <h3>📋 快速打印</h3>
                <p>无需复杂配置即可实现打印功能</p>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-image" id="print-image">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23667eea' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPrint.js 演示图片%3C/text%3E%3C/svg%3E"
            alt="演示图片"
          />
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装</h4>
            <pre><code>npm install print-js
# 或
yarn add print-js</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 打印 HTML 元素</h4>
            <pre><code>import printJS from 'print-js';

// 基础用法
printJS({
  printable: 'element-id',
  type: 'html',
  header: '打印标题'
});

// 带样式
printJS({
  printable: 'element-id',
  type: 'html',
  style: '.custom { color: red; }',
  scanStyles: false
});</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 打印图片</h4>
            <pre><code>// 单张图片
printJS('image-url.jpg', 'image');

// 多张图片
printJS({
  printable: ['img1.jpg', 'img2.jpg'],
  type: 'image',
  header: '图片集合'
});</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 打印 JSON 数据</h4>
            <pre><code>const data = [
  { name: '张三', age: 25, city: '北京' },
  { name: '李四', age: 30, city: '上海' }
];

printJS({
  printable: data,
  type: 'json',
  properties: ['name', 'age', 'city'],
  header: '用户列表',
  gridHeaderStyle: 'color: red; border: 2px solid #3971A5;',
  gridStyle: 'border: 2px solid #3971A5;'
});</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 完整配置选项</h4>
            <pre><code>printJS({
  printable: 'element-id',      // 要打印的内容
  type: 'html',                  // pdf, html, image, json
  header: '页眉文字',             // 页眉
  headerStyle: 'font-size: 20px;', // 页眉样式
  maxWidth: 800,                 // 最大宽度
  css: 'custom.css',             // 外部CSS
  style: '.class { }',           // 内联样式
  scanStyles: true,              // 是否扫描现有样式
  targetStyles: ['*'],           // 目标样式
  ignoreElements: [],            // 忽略的元素
  onPrintDialogClose: () => {},  // 打印对话框关闭回调
  onError: (error) => {}         // 错误回调
});</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import printJS from 'print-js'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))

const printHtml = () => {
  printJS({
    printable: 'print-html-content',
    type: 'html',
    header: 'Print.js 打印示例',
    headerStyle: 'font-size: 24px; font-weight: bold; text-align: center;',
    style: `
      .document { padding: 20px; }
      h1 { color: #667eea; }
      h2 { color: #2d3748; margin-top: 2rem; }
      .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .card { border: 1px solid #e2e8f0; padding: 1rem; border-radius: 8px; }
    `,
    scanStyles: false,
  })
}

const printImage = () => {
  const imgElement = document.querySelector('#print-image img') as HTMLImageElement
  if (imgElement) {
    printJS({
      printable: imgElement.src,
      type: 'image',
      header: '图片打印示例',
      imageStyle: 'width: 100%; margin: 20px auto;',
    })
  }
}

const printJson = () => {
  const jsonData = [
    { 框架: 'Print.js', 类型: '轻量级', 大小: '10KB', 评分: '⭐⭐⭐⭐' },
    { 框架: 'jsPDF', 类型: 'PDF生成', 大小: '150KB', 评分: '⭐⭐⭐⭐' },
    { 框架: 'pdfmake', 类型: 'PDF生成', 大小: '600KB', 评分: '⭐⭐⭐⭐⭐' },
    { 框架: 'html2canvas', 类型: 'HTML转换', 大小: '180KB', 评分: '⭐⭐⭐⭐' },
  ]

  printJS({
    printable: jsonData,
    type: 'json',
    properties: ['框架', '类型', '大小', '评分'],
    header: '前端打印框架对比',
    gridHeaderStyle:
      'color: white; background: #667eea; padding: 10px; font-weight: bold; border: 1px solid #667eea;',
    gridStyle: 'border: 1px solid #e2e8f0; padding: 8px;',
  })
}

const printWithCustomStyle = () => {
  printJS({
    printable: 'print-html-content',
    type: 'html',
    header: '自定义样式打印',
    headerStyle:
      'font-size: 28px; font-weight: bold; text-align: center; color: #667eea; margin-bottom: 20px;',
    style: `
      @page { margin: 2cm; }
      body { font-family: 'Arial', sans-serif; }
      .document {
        padding: 30px;
        border: 2px solid #667eea;
        border-radius: 8px;
      }
      h1 {
        color: #667eea;
        font-size: 24px;
        border-bottom: 2px solid #667eea;
        padding-bottom: 10px;
      }
      h2 {
        color: #2d3748;
        margin-top: 2rem;
        font-size: 18px;
      }
      h3 { color: #667eea; }
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;
      }
      .card {
        border: 2px solid #e2e8f0;
        padding: 1rem;
        border-radius: 8px;
        background: #f7fafc;
      }
      .doc-date {
        color: #718096;
        font-style: italic;
        margin-bottom: 2rem;
      }
    `,
    scanStyles: false,
  })
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

.print-content {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.document {
  background: white;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.document h1 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.doc-date {
  color: #718096;
  font-style: italic;
  margin-bottom: 2rem;
}

.document h2 {
  color: #2d3748;
  margin-top: 2rem;
  margin-bottom: 1rem;
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
  margin-bottom: 1rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

.card {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  background: #f7fafc;
}

.card h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.card p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.demo-image {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: #f7fafc;
  border-radius: 8px;
}

.demo-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
