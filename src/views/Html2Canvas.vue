<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🖼️ html2canvas - HTML转Canvas</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>html2canvas</strong></p>
          <p>npm install html2canvas</p>
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
            <li>⚠️ 需遍历DOM</li>
            <li>⚠️ 渲染较慢</li>
            <li>⚠️ 内存占用大</li>
          </ul>
          <p class="rating">评分: ⭐⭐ (40%)</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>⚠️ 手动计算</li>
            <li>⚠️ 需要额外处理</li>
          </ul>
          <p class="rating">评分: ⭐⭐ (40%)</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~180 KB</p>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>所见即所得</li>
            <li>样式完美还原</li>
            <li>支持复杂布局</li>
            <li>可生成图片</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>性能开销大</li>
            <li>生成图片型PDF</li>
            <li>文字不可选</li>
            <li>文件体积大</li>
            <li>跨域限制</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button @click="captureToImage" class="btn btn-primary">📸 截图转图片</button>
          <button @click="captureToPDF" class="btn btn-secondary">📄 截图转PDF</button>
          <button @click="captureWithOptions" class="btn btn-info">⚙️ 高质量截图</button>
        </div>

        <div id="capture-area" class="capture-content">
          <div class="demo-card">
            <div class="card-header">
              <h2>🎨 html2canvas 演示</h2>
              <span class="badge">高质量</span>
            </div>

            <div class="card-body">
              <p class="intro">
                html2canvas 可以将 HTML 元素渲染为 Canvas， 实现所见即所得的截图效果。
              </p>

              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon">✅</div>
                  <h4>样式还原</h4>
                  <p>完美保留CSS样式</p>
                </div>
                <div class="feature-item">
                  <div class="icon">🎯</div>
                  <h4>精确渲染</h4>
                  <p>准确捕获DOM结构</p>
                </div>
                <div class="feature-item">
                  <div class="icon">🖼️</div>
                  <h4>图片导出</h4>
                  <p>支持PNG/JPEG格式</p>
                </div>
                <div class="feature-item">
                  <div class="icon">📊</div>
                  <h4>图表支持</h4>
                  <p>适合截取可视化内容</p>
                </div>
              </div>

              <div class="chart-demo">
                <h3>📈 数据图表示例</h3>
                <div class="bar-chart">
                  <div class="bar" style="width: 80%; background: #667eea">
                    <span>性能 80%</span>
                  </div>
                  <div class="bar" style="width: 95%; background: #48bb78">
                    <span>质量 95%</span>
                  </div>
                  <div class="bar" style="width: 65%; background: #ed8936">
                    <span>速度 65%</span>
                  </div>
                  <div class="bar" style="width: 90%; background: #4299e1">
                    <span>易用性 90%</span>
                  </div>
                </div>
              </div>

              <div class="gradient-box">
                <h3>🎨 渐变和阴影测试</h3>
                <p>这个区域有渐变背景、阴影、圆角等CSS效果</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="capturedImage" class="result-area">
          <h3>📸 捕获结果</h3>
          <img :src="capturedImage" alt="Captured" class="captured-img" />
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 基础用法</h4>
            <pre><code>import html2canvas from 'html2canvas';

// 截取元素
const element = document.getElementById('capture');
html2canvas(element).then(canvas => {
  document.body.appendChild(canvas);

  // 或转为图片
  const img = canvas.toDataURL('image/png');
});</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 配置选项</h4>
            <pre><code>html2canvas(element, {
  backgroundColor: '#ffffff',
  scale: 2,              // 提高清晰度
  useCORS: true,         // 允许跨域图片
  logging: false,        // 关闭日志
  width: 800,
  height: 600,
  x: 0,
  y: 0
}).then(canvas => {
  // 处理 canvas
});</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 保存为图片</h4>
            <pre><code>html2canvas(element).then(canvas => {
  // 转为 blob
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'screenshot.png';
    a.click();
  });
});</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 结合 jsPDF 生成PDF</h4>
            <pre><code>import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

html2canvas(element).then(canvas => {
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF();

  const imgWidth = 210; // A4宽度(mm)
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  pdf.save('document.pdf');
});</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 处理多页</h4>
            <pre><code>async function captureLongPage(element) {
  const canvas = await html2canvas(element);
  const pdf = new jsPDF();
  const imgData = canvas.toDataURL('image/png');

  const pageHeight = 295; // A4高度(mm)
  const imgWidth = 210;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save('long-page.pdf');
}</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 过滤特定元素</h4>
            <pre><code>html2canvas(element, {
  ignoreElements: (element) => {
    // 忽略特定类的元素
    return element.classList.contains('no-capture');
  }
}).then(canvas => {
  // ...
});</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const capturedImage = ref('')

const captureToImage = async () => {
  const element = document.getElementById('capture-area')
  if (!element) return

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
    })

    capturedImage.value = canvas.toDataURL('image/png')

    // 下载图片
    const a = document.createElement('a')
    a.href = capturedImage.value
    a.download = 'html2canvas-capture.png'
    a.click()
  } catch (error) {
    console.error('截图失败:', error)
  }
}

const captureToPDF = async () => {
  const element = document.getElementById('capture-area')
  if (!element) return

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()

    const imgWidth = 210
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
    pdf.save('html2canvas-capture.pdf')

    capturedImage.value = imgData
  } catch (error) {
    console.error('生成PDF失败:', error)
  }
}

const captureWithOptions = async () => {
  const element = document.getElementById('capture-area')
  if (!element) return

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 3, // 更高清晰度
      useCORS: true,
      logging: false,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    })

    capturedImage.value = canvas.toDataURL('image/jpeg', 0.95)

    // 下载
    const a = document.createElement('a')
    a.href = capturedImage.value
    a.download = 'high-quality-capture.jpg'
    a.click()
  } catch (error) {
    console.error('高质量截图失败:', error)
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
  color: #4299e1;
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

.capture-content {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.demo-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.badge {
  background: rgba(255, 255, 255, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
}

.card-body {
  padding: 2rem;
}

.intro {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-item {
  text-align: center;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: translateY(-4px);
}

.feature-item .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.feature-item h4 {
  color: #2d3748;
  margin: 0.5rem 0;
}

.feature-item p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.chart-demo {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.chart-demo h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.bar-chart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bar {
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: width 0.3s;
}

.gradient-box {
  background: linear-gradient(135deg, #667eea15, #764ba215);
  border: 2px solid #667eea;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.gradient-box h3 {
  color: #667eea;
  margin-bottom: 0.75rem;
}

.gradient-box p {
  color: #4a5568;
  margin: 0;
}

.result-area {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.result-area h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.captured-img {
  max-width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
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
