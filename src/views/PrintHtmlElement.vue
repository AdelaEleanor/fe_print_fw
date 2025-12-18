<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🎯 print-html-element - 轻量级DOM打印</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>print-html-element</strong></p>
          <p>npm install print-html-element</p>
        </div>

        <div class="info-section">
          <h3>💾 文件大小</h3>
          <p><strong>~5KB</strong> (压缩后)</p>
          <p>超轻量级方案</p>
        </div>

        <div class="info-section">
          <h3>🌐 浏览器支持</h3>
          <div class="browser-badges">
            <span class="badge badge-success">Chrome ✓</span>
            <span class="badge badge-success">Firefox ✓</span>
            <span class="badge badge-success">Safari ✓</span>
            <span class="badge badge-success">Edge ✓</span>
            <span class="badge badge-success">IE11 ✓</span>
          </div>
        </div>

        <div class="info-section">
          <h3>⚡ 性能表现</h3>
          <p>初始化: <strong>~5ms</strong></p>
          <p>打印准备: <strong>~20ms</strong></p>
        </div>

        <div class="info-section">
          <h3>✅ 优点</h3>
          <ul>
            <li>极其轻量（5KB）</li>
            <li>API超级简单</li>
            <li>保留DOM样式</li>
            <li>支持IE11</li>
            <li>零配置使用</li>
            <li>性能优秀</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>❌ 缺点</h3>
          <ul>
            <li>功能相对简单</li>
            <li>仅支持打印</li>
            <li>不生成PDF文件</li>
            <li>依赖浏览器打印</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>🎯 适用场景</h3>
          <ul>
            <li>简单网页打印</li>
            <li>DOM元素打印</li>
            <li>发票订单打印</li>
            <li>报表快速打印</li>
            <li>对包体积敏感</li>
          </ul>
        </div>
      </aside>

      <main class="demo-content">
        <div class="section">
          <h2>1. 基础DOM打印</h2>
          <div id="print-content-1" class="print-sample">
            <h3>发票</h3>
            <p><strong>订单号：</strong> INV-2025-001</p>
            <p><strong>日期：</strong> {{ new Date().toLocaleDateString('zh-CN') }}</p>
            <p><strong>客户：</strong> 张三</p>
            <hr />
            <table class="invoice-table">
              <thead>
                <tr>
                  <th>商品</th>
                  <th>数量</th>
                  <th>单价</th>
                  <th>金额</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MacBook Pro</td>
                  <td>1</td>
                  <td>¥14,999</td>
                  <td>¥14,999</td>
                </tr>
                <tr>
                  <td>AirPods Pro</td>
                  <td>2</td>
                  <td>¥1,899</td>
                  <td>¥3,798</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3"><strong>总计</strong></td>
                  <td><strong>¥18,797</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <button @click="printElement1" class="btn btn-primary">🖨️ 打印发票</button>

          <div class="code-block">
            <h4>安装</h4>
            <pre><code>npm install print-html-element</code></pre>
          </div>

          <div class="code-block">
            <h4>基础用法</h4>
            <pre><code>import printElement from 'print-html-element';

const element = document.getElementById('print-content');
printElement(element);</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>2. 自定义样式打印</h2>
          <div id="print-content-2" class="print-sample styled">
            <div class="header-section">
              <h2>技术报告</h2>
              <p class="subtitle">2025年度前端打印框架调研</p>
            </div>
            <div class="content-section">
              <h3>摘要</h3>
              <p>本报告对当前主流的前端打印解决方案进行了全面调研和对比分析。</p>
              <h3>关键发现</h3>
              <ul>
                <li>print-html-element 是最轻量的选择（5KB）</li>
                <li>PDF-LIB 提供最强大的PDF编辑能力</li>
                <li>jsPDF-AutoTable 专注于表格打印</li>
              </ul>
            </div>
          </div>
          <button @click="printElement2" class="btn btn-success">🎨 打印样式化内容</button>

          <div class="code-block">
            <h4>自定义样式</h4>
            <pre><code>// CSS样式会自动应用到打印内容
.print-sample {
  padding: 20px;
  border: 2px solid #333;
}

@media print {
  .print-sample {
    border: none;
  }
}</code></pre>
          </div>
        </div>

        <div class="section">
          <h2>3. 多个元素打印</h2>
          <div class="multi-print-demo">
            <div id="section-1" class="print-section">
              <h4>第一部分</h4>
              <p>这是第一部分的内容...</p>
            </div>
            <div id="section-2" class="print-section">
              <h4>第二部分</h4>
              <p>这是第二部分的内容...</p>
            </div>
            <div id="section-3" class="print-section">
              <h4>第三部分</h4>
              <p>这是第三部分的内容...</p>
            </div>
          </div>
          <button @click="printMultiple" class="btn btn-info">📋 打印多个部分</button>

          <div class="code-block">
            <h4>打印多个元素</h4>
            <pre><code>// 创建容器并合并元素
const container = document.createElement('div');
const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');

container.appendChild(section1.cloneNode(true));
container.appendChild(section2.cloneNode(true));

printElement(container);</code></pre>
          </div>
        </div>

        <div class="comparison-section">
          <h2>🆚 与其他打印方案对比</h2>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>特性</th>
                <th>print-html-element</th>
                <th>window.print()</th>
                <th>Print.js</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>文件大小</td>
                <td class="success">✓ 5KB</td>
                <td class="success">✓ 0KB</td>
                <td class="warning">△ 18KB</td>
              </tr>
              <tr>
                <td>局部打印</td>
                <td class="success">✓ 支持</td>
                <td class="error">✗ 不支持</td>
                <td class="success">✓ 支持</td>
              </tr>
              <tr>
                <td>API复杂度</td>
                <td class="success">✓ 极简</td>
                <td class="success">✓ 极简</td>
                <td class="warning">△ 中等</td>
              </tr>
              <tr>
                <td>样式保留</td>
                <td class="success">✓ 完整</td>
                <td class="success">✓ 完整</td>
                <td class="warning">△ 需配置</td>
              </tr>
              <tr>
                <td>IE11支持</td>
                <td class="success">✓ 支持</td>
                <td class="success">✓ 支持</td>
                <td class="warning">△ 部分</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="best-practices">
          <h2>💡 最佳实践</h2>
          <div class="practice-grid">
            <div class="practice-card">
              <h3>🎯 适合简单场景</h3>
              <p>对于不需要生成PDF文件、只需浏览器打印的场景，这是最佳选择</p>
            </div>
            <div class="practice-card">
              <h3>📐 使用@media print</h3>
              <p>配合CSS媒体查询，可以精确控制打印样式</p>
            </div>
            <div class="practice-card">
              <h3>⚡ 性能优先</h3>
              <p>仅5KB的体积，对性能几乎无影响，适合注重加载速度的项目</p>
            </div>
            <div class="practice-card">
              <h3>🔧 组合使用</h3>
              <p>可与其他库配合：先用html2canvas截图，再打印图片</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// @ts-ignore
const printElement = ref<any>(null)

onMounted(async () => {
  try {
    // 动态导入 print-html-element
    const module = await import('print-html-element')
    console.log('print-html-element module:', module)

    // 尝试多种导入方式
    if (typeof module.default === 'function') {
      printElement.value = module.default
    } else if (typeof module === 'function') {
      printElement.value = module
    } else if (module.printElement && typeof module.printElement === 'function') {
      printElement.value = module.printElement
    } else {
      console.warn('print-html-element not loaded, using fallback')
    }
  } catch (error) {
    console.error('Failed to load print-html-element:', error)
  }
})

const printElement1 = () => {
  const element = document.getElementById('print-content-1')
  if (element && printElement.value && typeof printElement.value === 'function') {
    printElement.value(element)
  } else {
    // 降级方案：使用原生打印
    console.log('Using fallback: window.print()')
    window.print()
  }
}

const printElement2 = () => {
  const element = document.getElementById('print-content-2')
  if (element && printElement.value && typeof printElement.value === 'function') {
    printElement.value(element)
  } else {
    window.print()
  }
}

const printMultiple = () => {
  const container = document.createElement('div')
  const section1 = document.getElementById('section-1')
  const section2 = document.getElementById('section-2')
  const section3 = document.getElementById('section-3')

  if (section1 && section2 && section3) {
    container.appendChild(section1.cloneNode(true))
    container.appendChild(document.createElement('hr'))
    container.appendChild(section2.cloneNode(true))
    container.appendChild(document.createElement('hr'))
    container.appendChild(section3.cloneNode(true))

    if (printElement.value && typeof printElement.value === 'function') {
      printElement.value(container)
    } else {
      window.print()
    }
  }
}
</script>

<style scoped>
/* 基础样式 - 复用之前的样式 */
.demo-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
  background: #f093fb;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s;
}

.back-link:hover {
  background: #f5576c;
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
  color: #f093fb;
  border-bottom: 2px solid #f093fb;
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

.info-section p,
.info-section li {
  margin: 5px 0;
  font-size: 13px;
  color: #666;
}

.info-section ul {
  margin: 8px 0;
  padding-left: 20px;
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

.section h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.print-sample {
  background: #f8f9fa;
  padding: 30px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  margin: 20px 0;
}

.print-sample h3 {
  color: #2c3e50;
  margin-top: 0;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.invoice-table th,
.invoice-table td {
  padding: 10px;
  border: 1px solid #dee2e6;
  text-align: left;
}

.invoice-table th {
  background: #f8f9fa;
  font-weight: 600;
}

.invoice-table tfoot td {
  background: #f8f9fa;
  font-weight: 600;
}

.styled .header-section {
  text-align: center;
  border-bottom: 3px solid #f093fb;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.styled .subtitle {
  color: #666;
  font-size: 14px;
}

.multi-print-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.print-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
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
  background: #f093fb;
  color: white;
}
.btn-primary:hover {
  background: #e67ee9;
  transform: translateY(-2px);
}

.btn-success {
  background: #48bb78;
  color: white;
}
.btn-success:hover {
  background: #38a169;
  transform: translateY(-2px);
}

.btn-info {
  background: #4299e1;
  color: white;
}
.btn-info:hover {
  background: #3182ce;
  transform: translateY(-2px);
}

.code-block {
  background: #f8f9fa;
  border-left: 4px solid #f093fb;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
}

.code-block h4 {
  margin-top: 0;
  color: #f093fb;
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
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .info-panel {
    position: relative;
    top: 0;
  }
}

@media print {
  .print-sample {
    border: none;
    box-shadow: none;
  }
}
</style>
