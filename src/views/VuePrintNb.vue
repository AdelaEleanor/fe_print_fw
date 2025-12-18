<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🎯 vue3-print-nb - Vue 3 打印插件</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>vue3-print-nb</strong></p>
          <p>npm install vue3-print-nb</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Vue 3 专用</li>
            <li>✅ Chrome 60+</li>
            <li>✅ Firefox 55+</li>
            <li>✅ Safari 11+</li>
            <li>✅ Edge 79+</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (85%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 轻量级</li>
            <li>✅ 指令式调用</li>
            <li>✅ Vue 集成好</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ CSS 分页</li>
            <li>⚠️ 依赖浏览器</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~8 KB</p>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>Vue 生态集成</li>
            <li>指令式使用简单</li>
            <li>支持组件打印</li>
            <li>轻量级</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>仅限 Vue 3</li>
            <li>功能相对简单</li>
            <li>依赖浏览器打印</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button v-print="printConfig1" class="btn btn-primary">🖨️ 使用指令打印</button>
          <button @click="handlePrint" class="btn btn-secondary">📄 编程式打印</button>
          <button v-print="printConfigCustom" class="btn btn-info">🎨 自定义样式打印</button>
        </div>

        <div id="print-area" class="print-content">
          <div class="document">
            <h1>vue3-print-nb 使用指南</h1>
            <p class="meta">{{ currentDate }}</p>

            <h2>一、简介</h2>
            <p>
              vue3-print-nb 是一个专为 Vue 3 设计的打印插件，提供了简单易用的指令式 API，
              可以轻松实现页面内容的打印功能。
            </p>

            <h2>二、核心特性</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <h3>🎯 指令式调用</h3>
                <p>使用 v-print 指令即可实现打印</p>
              </div>
              <div class="feature-card">
                <h3>⚙️ 灵活配置</h3>
                <p>支持多种配置选项</p>
              </div>
              <div class="feature-card">
                <h3>🔧 编程式 API</h3>
                <p>也支持函数调用方式</p>
              </div>
              <div class="feature-card">
                <h3>🎨 样式控制</h3>
                <p>可自定义打印样式</p>
              </div>
            </div>

            <h2>三、使用场景</h2>
            <ul>
              <li>订单打印</li>
              <li>报表打印</li>
              <li>凭证打印</li>
              <li>表单打印</li>
            </ul>

            <h2>四、优势分析</h2>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>方面</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vue 集成</td>
                  <td>与 Vue 3 无缝集成</td>
                </tr>
                <tr>
                  <td>易用性</td>
                  <td>指令式使用非常简单</td>
                </tr>
                <tr>
                  <td>体积</td>
                  <td>轻量级，约 8KB</td>
                </tr>
                <tr>
                  <td>性能</td>
                  <td>快速，无额外开销</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装</h4>
            <pre><code>npm install vue3-print-nb</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 全局注册</h4>
            <pre><code>import { createApp } from 'vue'
import print from 'vue3-print-nb'
import App from './App.vue'

const app = createApp(App)
app.use(print)
app.mount('#app')</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 指令式使用</h4>
            <pre><code>&lt;template&gt;
  &lt;div id="print-content"&gt;
    要打印的内容
  &lt;/div&gt;

  &lt;button v-print="'#print-content'"&gt;
    打印
  &lt;/button&gt;
&lt;/template&gt;</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 配置选项</h4>
            <pre><code>&lt;script setup&gt;
const printConfig = {
  id: 'print-content',      // 要打印的元素 ID
  popTitle: '打印标题',      // 打印页面标题
  extraHead: '&lt;style&gt;...&lt;/style&gt;', // 额外的 head 内容
  preview: false,           // 是否显示预览
  previewTitle: '打印预览',  // 预览标题
  previewPrintBtnLabel: '打印', // 预览按钮文字
  zIndex: 20002,            // z-index
  previewBeforeOpenCallback() {}, // 预览打开前回调
  previewOpenCallback() {},       // 预览打开后回调
  beforeOpenCallback() {},        // 打印前回调
  openCallback() {},              // 打印后回调
  closeCallback() {}              // 关闭回调
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button v-print="printConfig"&gt;打印&lt;/button&gt;
&lt;/template&gt;</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 编程式调用</h4>
            <pre><code>&lt;script setup&gt;
import { useCurrentInstance } from 'vue'

const { proxy } = useCurrentInstance()

const handlePrint = () => {
  proxy.$print({
    id: 'print-content',
    popTitle: '打印文档'
  })
}
&lt;/script&gt;</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 自定义样式</h4>
            <pre><code>const printConfig = {
  id: 'print-content',
  extraHead: \`
    &lt;style&gt;
      @media print {
        body { font-size: 14px; }
        .no-print { display: none !important; }
        .page-break { page-break-after: always; }
      }
    &lt;/style&gt;
  \`
}</code></pre>
          </div>

          <div class="code-block">
            <h4>7. 打印前预览</h4>
            <pre><code>const printConfig = {
  id: 'print-content',
  preview: true,
  previewTitle: '打印预览',
  previewPrintBtnLabel: '确认打印'
}</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))

const printConfig1 = {
  id: 'print-area',
  popTitle: 'vue3-print-nb 打印示例',
}

const printConfigCustom = {
  id: 'print-area',
  popTitle: '自定义样式打印',
  extraHead: `
    <style>
      @media print {
        body {
          font-family: Arial, sans-serif;
          color: #2d3748;
        }
        h1 {
          color: #667eea;
          border-bottom: 3px solid #667eea;
          padding-bottom: 10px;
        }
        h2 {
          color: #4a5568;
          margin-top: 2rem;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          page-break-inside: avoid;
        }
        .feature-card {
          border: 2px solid #e2e8f0;
          padding: 1rem;
          border-radius: 8px;
        }
        .comparison-table {
          border-collapse: collapse;
          width: 100%;
        }
        .comparison-table th,
        .comparison-table td {
          border: 1px solid #e2e8f0;
          padding: 0.75rem;
        }
        .comparison-table th {
          background: #f7fafc;
        }
      }
    </style>
  `,
}

const handlePrint = () => {
  const instance = getCurrentInstance()
  if (instance?.proxy?.$print) {
    instance.proxy.$print({
      id: 'print-area',
      popTitle: '编程式打印',
    })
  } else {
    // 如果插件未注册，使用原生打印
    window.print()
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
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.document h1 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.meta {
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
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

.feature-card {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  background: #f7fafc;
}

.feature-card h3 {
  color: #667eea;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
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
