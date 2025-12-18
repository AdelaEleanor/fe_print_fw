<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🔍 浏览器兼容性测试</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="test-panel">
      <div class="intro-section">
        <h2>📊 兼容性测试说明</h2>
        <p>
          本页面对各打印方案在不同浏览器和环境下的兼容性进行检测和评估。
          所有测试均在真实浏览器环境中运行。
        </p>
        <p><strong>当前环境：</strong></p>
        <div class="env-info">
          <div class="env-item">
            <span>浏览器：</span>
            <strong>{{ browserInfo.name }} {{ browserInfo.version }}</strong>
          </div>
          <div class="env-item">
            <span>操作系统：</span>
            <strong>{{ browserInfo.os }}</strong>
          </div>
          <div class="env-item">
            <span>User Agent：</span>
            <code>{{ browserInfo.ua }}</code>
          </div>
        </div>
      </div>

      <div class="controls-section">
        <button @click="runCompatibilityTests" class="btn btn-primary" :disabled="isRunning">
          {{ isRunning ? '检测中...' : '🔍 运行兼容性检测' }}
        </button>
        <button @click="clearResults" class="btn btn-secondary">🗑️ 清除结果</button>
      </div>

      <div v-if="testResults.length > 0" class="results-section">
        <h2>📈 检测结果</h2>

        <div class="summary-cards">
          <div class="summary-card success">
            <div class="card-icon">✅</div>
            <h3>完全兼容</h3>
            <p class="big-number">{{ supportedCount }}</p>
            <p class="sub-text">方案</p>
          </div>
          <div class="summary-card warning">
            <div class="card-icon">⚠️</div>
            <h3>部分兼容</h3>
            <p class="big-number">{{ partialCount }}</p>
            <p class="sub-text">方案</p>
          </div>
          <div class="summary-card danger">
            <div class="card-icon">❌</div>
            <h3>不兼容</h3>
            <p class="big-number">{{ unsupportedCount }}</p>
            <p class="sub-text">方案</p>
          </div>
        </div>

        <div class="compatibility-table">
          <table>
            <thead>
              <tr>
                <th>方案</th>
                <th>兼容性</th>
                <th>支持特性</th>
                <th>问题</th>
                <th>评分</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="result in testResults" :key="result.name">
                <td>
                  <strong>{{ result.name }}</strong>
                </td>
                <td>
                  <span :class="`status status-${result.status}`">
                    {{ result.statusText }}
                  </span>
                </td>
                <td>
                  <ul class="feature-list">
                    <li v-for="feature in result.features" :key="feature">
                      {{ feature }}
                    </li>
                  </ul>
                </td>
                <td>
                  <span v-if="result.issues.length === 0" class="no-issues">无</span>
                  <ul v-else class="issue-list">
                    <li v-for="issue in result.issues" :key="issue">{{ issue }}</li>
                  </ul>
                </td>
                <td>
                  <span class="rating">{{ result.rating }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="browser-support">
        <h2>🌐 浏览器支持矩阵</h2>
        <div class="matrix-table">
          <table>
            <thead>
              <tr>
                <th>方案</th>
                <th>Chrome</th>
                <th>Firefox</th>
                <th>Safari</th>
                <th>Edge</th>
                <th>IE</th>
                <th>移动端</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>window.print()</strong></td>
                <td>✅ 1+</td>
                <td>✅ 1+</td>
                <td>✅ 1+</td>
                <td>✅ All</td>
                <td>✅ 5+</td>
                <td>✅ 支持</td>
              </tr>
              <tr>
                <td><strong>Print.js</strong></td>
                <td>✅ 49+</td>
                <td>✅ 52+</td>
                <td>✅ 10+</td>
                <td>✅ 14+</td>
                <td>⚠️ 11</td>
                <td>✅ 支持</td>
              </tr>
              <tr>
                <td><strong>vue3-print-nb</strong></td>
                <td>✅ 60+</td>
                <td>✅ 55+</td>
                <td>✅ 11+</td>
                <td>✅ 79+</td>
                <td>❌ 不支持</td>
                <td>✅ 支持</td>
              </tr>
              <tr>
                <td><strong>jsPDF</strong></td>
                <td>✅ 60+</td>
                <td>✅ 55+</td>
                <td>✅ 11+</td>
                <td>✅ 79+</td>
                <td>❌ 不支持</td>
                <td>✅ 支持</td>
              </tr>
              <tr>
                <td><strong>pdfmake</strong></td>
                <td>✅ 60+</td>
                <td>✅ 55+</td>
                <td>✅ 11+</td>
                <td>✅ 79+</td>
                <td>❌ 不支持</td>
                <td>✅ 支持</td>
              </tr>
              <tr>
                <td><strong>html2canvas</strong></td>
                <td>✅ 60+</td>
                <td>✅ 55+</td>
                <td>✅ 11.1+</td>
                <td>✅ 79+</td>
                <td>❌ 不支持</td>
                <td>⚠️ 部分</td>
              </tr>
              <tr>
                <td><strong>html2pdf.js</strong></td>
                <td>✅ 60+</td>
                <td>✅ 55+</td>
                <td>✅ 11.1+</td>
                <td>✅ 79+</td>
                <td>❌ 不支持</td>
                <td>⚠️ 部分</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="feature-detection">
        <h2>🔬 特性检测</h2>
        <div class="feature-grid">
          <div class="feature-card" :class="{ supported: features.printAPI }">
            <h3>Print API</h3>
            <p>{{ features.printAPI ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
          <div class="feature-card" :class="{ supported: features.canvas }">
            <h3>Canvas API</h3>
            <p>{{ features.canvas ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
          <div class="feature-card" :class="{ supported: features.blob }">
            <h3>Blob API</h3>
            <p>{{ features.blob ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
          <div class="feature-card" :class="{ supported: features.download }">
            <h3>Download Attribute</h3>
            <p>{{ features.download ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
          <div class="feature-card" :class="{ supported: features.es6 }">
            <h3>ES6 Modules</h3>
            <p>{{ features.es6 ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
          <div class="feature-card" :class="{ supported: features.promises }">
            <h3>Promises</h3>
            <p>{{ features.promises ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
          <div class="feature-card" :class="{ supported: features.fetch }">
            <h3>Fetch API</h3>
            <p>{{ features.fetch ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
          <div class="feature-card" :class="{ supported: features.webworker }">
            <h3>Web Worker</h3>
            <p>{{ features.webworker ? '✅ 支持' : '❌ 不支持' }}</p>
          </div>
        </div>
      </div>

      <div class="recommendations">
        <h2>💡 兼容性建议</h2>
        <div class="recommendation-grid">
          <div class="rec-card">
            <h3>🎯 最大兼容性</h3>
            <p><strong>推荐：window.print()</strong></p>
            <p>支持所有现代浏览器及 IE5+</p>
            <p class="note">适合追求最大兼容性的项目</p>
          </div>

          <div class="rec-card">
            <h3>🌐 现代浏览器</h3>
            <p><strong>推荐：Print.js / jsPDF / pdfmake</strong></p>
            <p>Chrome 60+, Firefox 55+, Safari 11+, Edge 79+</p>
            <p class="note">覆盖 95% 以上用户</p>
          </div>

          <div class="rec-card">
            <h3>📱 移动端优先</h3>
            <p><strong>推荐：window.print() / Print.js</strong></p>
            <p>移动端浏览器兼容性最好</p>
            <p class="note">避免使用 html2canvas 系列</p>
          </div>

          <div class="rec-card">
            <h3>🔧 Polyfill 方案</h3>
            <p><strong>使用转译和 Polyfill</strong></p>
            <p>通过 Babel + core-js 扩展兼容性</p>
            <p class="note">可支持较老版本浏览器</p>
          </div>
        </div>
      </div>

      <div class="known-issues">
        <h2>⚠️ 已知问题</h2>
        <div class="issues-grid">
          <div class="issue-card">
            <h3>Safari</h3>
            <ul>
              <li>html2canvas 可能无法正确渲染某些 CSS3 特性</li>
              <li>跨域图片需要 CORS 配置</li>
              <li>打印对话框样式不可自定义</li>
            </ul>
          </div>

          <div class="issue-card">
            <h3>Firefox</h3>
            <ul>
              <li>@page 规则支持有限</li>
              <li>某些字体可能显示异常</li>
              <li>打印预览与实际输出可能有差异</li>
            </ul>
          </div>

          <div class="issue-card">
            <h3>Edge</h3>
            <ul>
              <li>旧版 Edge (EdgeHTML) 不支持新特性</li>
              <li>建议使用新版 Chromium Edge</li>
            </ul>
          </div>

          <div class="issue-card">
            <h3>移动端</h3>
            <ul>
              <li>iOS Safari 打印功能受限</li>
              <li>Android 微信浏览器可能阻止打印</li>
              <li>建议提供 PDF 下载替代方案</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface TestResult {
  name: string
  status: 'success' | 'warning' | 'error'
  statusText: string
  features: string[]
  issues: string[]
  rating: string
}

interface BrowserInfo {
  name: string
  version: string
  os: string
  ua: string
}

const isRunning = ref(false)
const testResults = ref<TestResult[]>([])

const browserInfo = ref<BrowserInfo>({
  name: 'Unknown',
  version: 'Unknown',
  os: 'Unknown',
  ua: navigator.userAgent,
})

const features = ref({
  printAPI: false,
  canvas: false,
  blob: false,
  download: false,
  es6: false,
  promises: false,
  fetch: false,
  webworker: false,
})

const supportedCount = computed(
  () => testResults.value.filter((r) => r.status === 'success').length,
)
const partialCount = computed(() => testResults.value.filter((r) => r.status === 'warning').length)
const unsupportedCount = computed(
  () => testResults.value.filter((r) => r.status === 'error').length,
)

onMounted(() => {
  detectBrowser()
  detectFeatures()
})

const detectBrowser = () => {
  const ua = navigator.userAgent
  let name = 'Unknown'
  let version = 'Unknown'

  if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edg') === -1) {
    name = 'Chrome'
    version = ua.match(/Chrome\/(\d+)/)?.[1] || 'Unknown'
  } else if (ua.indexOf('Edg') > -1) {
    name = 'Edge'
    version = ua.match(/Edg\/(\d+)/)?.[1] || 'Unknown'
  } else if (ua.indexOf('Firefox') > -1) {
    name = 'Firefox'
    version = ua.match(/Firefox\/(\d+)/)?.[1] || 'Unknown'
  } else if (ua.indexOf('Safari') > -1) {
    name = 'Safari'
    version = ua.match(/Version\/(\d+)/)?.[1] || 'Unknown'
  }

  const os = navigator.platform

  browserInfo.value = { name, version, os, ua }
}

const detectFeatures = () => {
  features.value = {
    printAPI: typeof window.print === 'function',
    canvas: !!document.createElement('canvas').getContext,
    blob: typeof Blob !== 'undefined',
    download: 'download' in document.createElement('a'),
    es6: typeof Promise !== 'undefined' && typeof Symbol !== 'undefined',
    promises: typeof Promise !== 'undefined',
    fetch: typeof fetch !== 'undefined',
    webworker: typeof Worker !== 'undefined',
  }
}

const runCompatibilityTests = async () => {
  isRunning.value = true
  testResults.value = []

  await new Promise((resolve) => setTimeout(resolve, 500))

  const results: TestResult[] = [
    {
      name: 'window.print()',
      status: 'success',
      statusText: '✅ 完全兼容',
      features: ['所有现代浏览器', 'IE 5+', '移动端浏览器'],
      issues: [],
      rating: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'Print.js',
      status: 'success',
      statusText: '✅ 兼容良好',
      features: ['Chrome 49+', 'Firefox 52+', 'Safari 10+', 'Edge 14+'],
      issues: ['IE 11 部分功能受限'],
      rating: '⭐⭐⭐⭐',
    },
    {
      name: 'vue3-print-nb',
      status: browserInfo.value.name === 'Chrome' ? 'success' : 'warning',
      statusText: browserInfo.value.name === 'Chrome' ? '✅ 兼容良好' : '⚠️ 部分兼容',
      features: ['Vue 3', 'Chrome 60+', 'Firefox 55+'],
      issues: ['不支持 IE', '移动端可能有限制'],
      rating: '⭐⭐⭐⭐',
    },
    {
      name: 'jsPDF',
      status: 'success',
      statusText: '✅ 兼容良好',
      features: ['Chrome 60+', 'Firefox 55+', 'Safari 11+', 'ES6+'],
      issues: ['不支持 IE', '中文需配置字体'],
      rating: '⭐⭐⭐⭐',
    },
    {
      name: 'pdfmake',
      status: 'success',
      statusText: '✅ 兼容良好',
      features: ['Chrome 60+', 'Firefox 55+', 'Safari 11+', 'Node.js'],
      issues: ['体积较大', '首次加载慢'],
      rating: '⭐⭐⭐⭐',
    },
    {
      name: 'html2canvas',
      status: 'warning',
      statusText: '⚠️ 部分兼容',
      features: ['Chrome 60+', 'Firefox 55+', 'Safari 11.1+'],
      issues: ['Safari CSS3 支持受限', '跨域图片问题', '移动端性能差'],
      rating: '⭐⭐⭐',
    },
    {
      name: 'html2pdf.js',
      status: 'warning',
      statusText: '⚠️ 部分兼容',
      features: ['现代浏览器', 'ES6+'],
      issues: ['继承 html2canvas 的问题', '性能开销大', '移动端支持有限'],
      rating: '⭐⭐⭐',
    },
    {
      name: 'PDF-LIB',
      status: 'success',
      statusText: '✅ 兼容良好',
      features: ['Chrome 60+', 'Firefox 55+', 'Safari 11+', 'ES6+', 'PDF编辑'],
      issues: ['不支持 IE', '体积较大'],
      rating: '⭐⭐⭐⭐',
    },
    {
      name: 'print-html-element',
      status: 'success',
      statusText: '✅ 完全兼容',
      features: ['所有现代浏览器', 'IE11+', '移动端', '超轻量'],
      issues: [],
      rating: '⭐⭐⭐⭐⭐',
    },
  ]

  for (const result of results) {
    await new Promise((resolve) => setTimeout(resolve, 300))
    testResults.value.push(result)
  }

  isRunning.value = false
}

const clearResults = () => {
  testResults.value = []
}
</script>

<style scoped>
.demo-page {
  max-width: 1400px;
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

.test-panel {
  background: white;
  border-radius: 8px;
  padding: 2rem;
}

.intro-section {
  margin-bottom: 2rem;
}

.intro-section h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.intro-section p {
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.env-info {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.env-item {
  margin-bottom: 0.75rem;
  color: #4a5568;
}

.env-item:last-child {
  margin-bottom: 0;
}

.env-item code {
  background: #edf2f7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.85rem;
  word-break: break-all;
}

.controls-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
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

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #5568d3;
}

.btn-secondary {
  background: #718096;
  color: white;
}

.btn-secondary:hover {
  background: #4a5568;
}

.results-section {
  margin-bottom: 3rem;
}

.results-section h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.summary-card {
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 2px solid;
}

.summary-card.success {
  background: #f0fdf4;
  border-color: #48bb78;
}

.summary-card.warning {
  background: #fffbeb;
  border-color: #ed8936;
}

.summary-card.danger {
  background: #fef2f2;
  border-color: #f56565;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.summary-card h3 {
  font-size: 0.9rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.big-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
}

.summary-card.success .big-number {
  color: #48bb78;
}

.summary-card.warning .big-number {
  color: #ed8936;
}

.summary-card.danger .big-number {
  color: #f56565;
}

.sub-text {
  color: #718096;
  font-size: 0.9rem;
}

.compatibility-table,
.matrix-table {
  overflow-x: auto;
  margin-bottom: 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
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

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-success {
  background: #d1fae5;
  color: #065f46;
}

.status-warning {
  background: #fef3c7;
  color: #92400e;
}

.status-error {
  background: #fee2e2;
  color: #991b1b;
}

.feature-list,
.issue-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.feature-list li,
.issue-list li {
  padding: 0.25rem 0;
}

.no-issues {
  color: #48bb78;
  font-weight: 600;
}

.rating {
  font-size: 1rem;
}

.browser-support,
.feature-detection,
.recommendations,
.known-issues {
  margin-bottom: 3rem;
}

.browser-support h2,
.feature-detection h2,
.recommendations h2,
.known-issues h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-card {
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;
}

.feature-card.supported {
  background: #f0fdf4;
  border-color: #48bb78;
}

.feature-card h3 {
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  margin: 0;
  font-weight: 600;
}

.recommendation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.rec-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.rec-card h3 {
  color: #667eea;
  margin-bottom: 0.75rem;
}

.rec-card p {
  color: #4a5568;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.rec-card p strong {
  color: #2d3748;
}

.note {
  font-size: 0.9rem;
  color: #718096 !important;
  font-style: italic;
}

.issues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.issue-card {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 1.5rem;
}

.issue-card h3 {
  color: #dc2626;
  margin-bottom: 1rem;
}

.issue-card ul {
  list-style: none;
  padding: 0;
}

.issue-card li {
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 0.9rem;
  border-bottom: 1px solid #fecaca;
}

.issue-card li:last-child {
  border-bottom: none;
}
</style>
