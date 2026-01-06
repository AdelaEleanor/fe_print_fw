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
        <!-- 基础功能演示 -->
        <div class="examples-section">
          <h2 class="section-title">📚 基础功能演示</h2>

          <div class="example-tabs">
            <button
              v-for="(example, index) in examples"
              :key="index"
              :class="['tab-button', { active: currentExample === index }]"
              @click="currentExample = index"
            >
              {{ example }}
            </button>
          </div>

          <div class="example-content">
            <!-- 示例1: 基础截图 -->
            <div v-if="currentExample === 0">
              <h3>示例 1: 基础截图</h3>
              <p>将HTML元素转换为Canvas，然后导出为PNG图片。</p>

              <div class="controls">
                <button @click="example1Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '📸 基础截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>import html2canvas from 'html2canvas'

const element = document.getElementById('capture-area')
const canvas = await html2canvas(element)

// 转为图片
const imgData = canvas.toDataURL('image/png')

// 下载图片
const link = document.createElement('a')
link.href = imgData
link.download = 'screenshot.png'
link.click()</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 截图预览区域:</h4>
                <div id="example1-area" class="capture-preview">
                  <div class="preview-card">
                    <h4>🎨 示例内容</h4>
                    <p>这个区域的内容将被截图</p>
                    <div class="preview-badge">html2canvas</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 示例2: 高清截图 -->
            <div v-else-if="currentExample === 1">
              <h3>示例 2: 高清截图 (scale)</h3>
              <p>通过设置scale参数提高截图清晰度，适合需要高分辨率的场景。</p>

              <div class="controls">
                <label>
                  缩放倍数:
                  <select v-model="scaleValue" class="select-input">
                    <option :value="1">1x (标准)</option>
                    <option :value="2">2x (高清)</option>
                    <option :value="3">3x (超清)</option>
                    <option :value="4">4x (极清)</option>
                  </select>
                </label>
                <button @click="example2Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '🔍 高清截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  scale: 2,  // 2倍清晰度
  backgroundColor: '#ffffff'
})

// scale 值说明:
// 1: 标准清晰度 (默认)
// 2: 2倍清晰度，适合Retina屏幕
// 3-4: 超高清晰度，文件较大</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 高清截图区域:</h4>
                <div
                  id="example2-area"
                  class="capture-preview"
                  style="background: linear-gradient(135deg, #667eea, #764ba2)"
                >
                  <div class="preview-card" style="color: white; background: transparent">
                    <h4>🔍 高清演示</h4>
                    <p>当前缩放: {{ scaleValue }}x</p>
                    <p style="font-size: 0.8rem">渐变背景测试</p>
                  </div>
                </div>
                <p class="note">scale越大，图片越清晰，但文件也越大</p>
              </div>
            </div>

            <!-- 示例3: 截图转PDF -->
            <div v-else-if="currentExample === 2">
              <h3>示例 3: 截图转PDF</h3>
              <p>将html2canvas截取的内容通过jsPDF转换为PDF文件。</p>

              <div class="controls">
                <button @click="example3Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📄 截图转PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const canvas = await html2canvas(element, { scale: 2 })
const imgData = canvas.toDataURL('image/png')

const pdf = new jsPDF()
const imgWidth = 210 // A4宽度(mm)
const imgHeight = (canvas.height * imgWidth) / canvas.width

pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
pdf.save('screenshot.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 PDF截图区域:</h4>
                <div id="example3-area" class="capture-preview">
                  <div class="preview-card">
                    <h4>📄 PDF内容</h4>
                    <p>这个区域将被截图并转为PDF</p>
                    <table class="mini-table">
                      <tr>
                        <th>项目</th>
                        <th>数值</th>
                      </tr>
                      <tr>
                        <td>性能</td>
                        <td>85%</td>
                      </tr>
                      <tr>
                        <td>质量</td>
                        <td>95%</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- 示例4: 自定义背景色 -->
            <div v-else-if="currentExample === 3">
              <h3>示例 4: 自定义背景色</h3>
              <p>设置截图的背景颜色，适合处理透明背景的元素。</p>

              <div class="controls">
                <label>
                  背景色:
                  <input v-model="bgColor" type="color" class="color-input" />
                </label>
                <button @click="example4Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '🎨 自定义背景截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  backgroundColor: '#ffffff',  // 白色背景
  // backgroundColor: null,    // 透明背景
  // backgroundColor: '#f0f0f0' // 灰色背景
})</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 背景色预览:</h4>
                <div
                  id="example4-area"
                  class="capture-preview"
                  :style="{ backgroundColor: bgColor }"
                >
                  <div class="preview-card" style="background: rgba(255, 255, 255, 0.9)">
                    <h4>🎨 自定义背景</h4>
                    <p>当前背景色: {{ bgColor }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 示例5: 过滤元素 -->
            <div v-else-if="currentExample === 4">
              <h3>示例 5: 过滤特定元素</h3>
              <p>使用ignoreElements选项排除不需要截图的元素。</p>

              <div class="controls">
                <button @click="example5Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '🚫 过滤元素截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  ignoreElements: (el) =&gt; {
    // 忽略带有 'no-capture' 类的元素
    return el.classList.contains('no-capture')
  }
})</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 过滤演示区域:</h4>
                <div id="example5-area" class="capture-preview">
                  <div class="preview-card">
                    <h4>📸 会被截图</h4>
                    <p>这段文字会出现在截图中</p>
                    <div
                      class="no-capture"
                      style="
                        background: #fed7d7;
                        padding: 0.5rem;
                        border-radius: 4px;
                        margin-top: 0.5rem;
                      "
                    >
                      🚫 这段不会被截图 (no-capture)
                    </div>
                    <p style="margin-top: 0.5rem">这段也会被截图</p>
                  </div>
                </div>
                <p class="note">带有 no-capture 类的元素将被忽略</p>
              </div>
            </div>

            <!-- 示例6: 获取Blob -->
            <div v-else-if="currentExample === 5">
              <h3>示例 6: 获取Blob对象</h3>
              <p>将截图转换为Blob对象，适合上传服务器或进一步处理。</p>

              <div class="controls">
                <label>
                  图片格式:
                  <select v-model="imageFormat" class="select-input">
                    <option value="image/png">PNG</option>
                    <option value="image/jpeg">JPEG</option>
                    <option value="image/webp">WebP</option>
                  </select>
                </label>
                <button @click="example6Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '💾 获取Blob' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element)

canvas.toBlob((blob) =&gt; {
  // 创建 URL
  const url = URL.createObjectURL(blob)

  // 下载文件
  const a = document.createElement('a')
  a.href = url
  a.download = 'screenshot.png'
  a.click()

  // 或上传到服务器
  const formData = new FormData()
  formData.append('image', blob, 'screenshot.png')
  // fetch('/upload', { method: 'POST', body: formData })
}, 'image/png', 0.9)</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 Blob演示区域:</h4>
                <div id="example6-area" class="capture-preview">
                  <div class="preview-card">
                    <h4>💾 Blob格式</h4>
                    <p>当前格式: {{ imageFormat }}</p>
                    <p style="font-size: 0.8rem; color: #718096">适合上传或进一步处理</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 示例7: ECharts图表 -->
            <div v-else-if="currentExample === 6">
              <h3>示例 7: ECharts图表截图</h3>
              <p class="framework-highlight">
                📸 <strong>html2canvas特点：</strong>像素级精准截图，完美捕捉复杂CSS效果<br />
                <span class="advantage">✅ 优势：</span
                >无需转换，直接截取视觉外观；支持复杂CSS（渐变、阴影、动画）；高还原度<br />
                <span class="disadvantage">⚠️ 对比：</span>vs jsPDF/pdfmake -
                无需导出图片即可打印；vs html2pdf - 提供Canvas便于后处理
              </p>

              <div class="controls">
                <button @click="example7Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '📸 截图保存' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>// 1. 初始化ECharts
const chart = echarts.init(chartRef.value)
chart.setOption({
  title: { text: '销售数据' },
  series: [{ type: 'pie', data: [...] }]
})

// 2. 截图ECharts
const canvas = await html2canvas(chartRef.value, {
  scale: 2,  // 高清截图
  backgroundColor: '#fff',
  useCORS: true
})

// 3. 下载图片
const link = document.createElement('a')
link.download = 'chart.png'
link.href = canvas.toDataURL()
link.click()</code></pre>
              </div>

              <div class="demo-content">
                <h4>📊 ECharts演示区域:</h4>
                <div id="example7-area" style="padding: 20px; background: #fff; border-radius: 8px">
                  <div ref="html2canvasChartRef" style="width: 100%; height: 400px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 高级功能演示 -->
        <div class="advanced-section">
          <h2 class="section-title">🚀 高级功能演示</h2>

          <div class="example-tabs">
            <button
              v-for="(example, index) in advancedExamples"
              :key="index"
              :class="['tab-button', { active: currentAdvanced === index }]"
              @click="currentAdvanced = index"
            >
              {{ example }}
            </button>
          </div>

          <div class="example-content">
            <!-- 高级1: 长页面截图 -->
            <div v-if="currentAdvanced === 0">
              <h3>高级 1: 长页面分页截图</h3>
              <p>处理超长内容，自动分页生成多页PDF。</p>

              <div class="controls">
                <button @click="advanced1Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📑 长页面分页PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>async function captureLongPage(element) {
  const canvas = await html2canvas(element, { scale: 2 })
  const pdf = new jsPDF()
  const imgData = canvas.toDataURL('image/png')

  const pageHeight = 295 // A4高度(mm)
  const imgWidth = 210
  const imgHeight = (canvas.height * imgWidth) / canvas.width
  let heightLeft = imgHeight
  let position = 0

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
  heightLeft -= pageHeight

  while (heightLeft &gt; 0) {
    position = heightLeft - imgHeight
    pdf.addPage()
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight
  }

  pdf.save('long-page.pdf')
}</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 长内容预览:</h4>
                <div id="advanced1-area" class="long-content-preview">
                  <div v-for="i in 5" :key="i" class="preview-section">
                    <h5>第 {{ i }} 部分</h5>
                    <p>这是第 {{ i }} 部分的内容，用于演示长页面分页功能...</p>
                  </div>
                </div>
                <p class="note">内容过长时将自动分割成多页PDF</p>
              </div>
            </div>

            <!-- 高级2: 跨域图片处理 -->
            <div v-else-if="currentAdvanced === 1">
              <h3>高级 2: 跨域图片处理</h3>
              <p>使用useCORS和allowTaint选项处理跨域图片。</p>

              <div class="controls">
                <button @click="advanced2Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '🌐 跨域截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  useCORS: true,      // 允许跨域图片
  allowTaint: false,  // 不允许污染canvas
  proxy: 'your-proxy-url', // 代理服务器

  // 或使用 onclone 预处理
  onclone: (clonedDoc) =&gt; {
    // 可以在这里替换跨域图片
    const images = clonedDoc.querySelectorAll('img')
    images.forEach(img =&gt; {
      img.crossOrigin = 'anonymous'
    })
  }
})</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p><strong>跨域选项说明:</strong></p>
                  <ul style="text-align: left; margin-left: 1rem">
                    <li><code>useCORS: true</code> - 尝试使用CORS加载图片</li>
                    <li><code>allowTaint: true</code> - 允许污染canvas（不能导出）</li>
                    <li><code>proxy</code> - 通过代理服务器加载图片</li>
                  </ul>
                  <p class="note">跨域图片需要服务器设置正确的CORS头</p>
                </div>
              </div>
            </div>

            <!-- 高级3: 自定义渲染区域 -->
            <div v-else-if="currentAdvanced === 2">
              <h3>高级 3: 自定义渲染区域</h3>
              <p>使用x, y, width, height参数裁剪指定区域。</p>

              <div class="controls">
                <label>
                  X偏移: <input v-model.number="cropX" type="number" class="number-input" min="0" />
                </label>
                <label>
                  Y偏移: <input v-model.number="cropY" type="number" class="number-input" min="0" />
                </label>
                <button @click="advanced3Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '✂️ 裁剪截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  x: 50,      // 起始X坐标
  y: 50,      // 起始Y坐标
  width: 200, // 截取宽度
  height: 150, // 截取高度
  scrollX: 0,
  scrollY: 0
})</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 裁剪区域预览:</h4>
                <div id="advanced3-area" class="crop-preview">
                  <div class="crop-grid">
                    <div class="crop-cell" v-for="i in 9" :key="i">{{ i }}</div>
                  </div>
                  <div
                    class="crop-indicator"
                    :style="{ left: cropX + 'px', top: cropY + 'px' }"
                  ></div>
                </div>
                <p class="note">红框表示将要截取的区域 (从 x:{{ cropX }}, y:{{ cropY }} 开始)</p>
              </div>
            </div>

            <!-- 高级4: 日志和调试 -->
            <div v-else-if="currentAdvanced === 3">
              <h3>高级 4: 日志和调试</h3>
              <p>启用日志输出，方便调试截图问题。</p>

              <div class="controls">
                <label> <input v-model="enableLogging" type="checkbox" /> 启用日志 </label>
                <button @click="advanced4Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '🔍 调试截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  logging: true,  // 启用控制台日志

  // 自定义日志函数
  onclone: (clonedDoc, element) =&gt; {
    console.log('克隆的元素:', element)
    console.log('克隆的文档:', clonedDoc)
  }
})

// 常见调试问题:
// 1. 元素未渲染 - 检查元素是否可见
// 2. 样式丢失 - 检查CSS是否被正确应用
// 3. 图片空白 - 检查跨域设置</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p><strong>调试提示:</strong></p>
                  <ul style="text-align: left; margin-left: 1rem">
                    <li>打开浏览器控制台查看日志输出</li>
                    <li>logging: true 会输出详细的渲染过程</li>
                    <li>onclone 回调可用于检查克隆的DOM</li>
                  </ul>
                  <p>当前日志状态: {{ enableLogging ? '✅ 已启用' : '❌ 已禁用' }}</p>
                </div>
              </div>
            </div>

            <!-- 高级5: 窗口尺寸控制 -->
            <div v-else-if="currentAdvanced === 4">
              <h3>高级 5: 窗口尺寸控制</h3>
              <p>控制截图时的虚拟窗口尺寸，解决响应式布局问题。</p>

              <div class="controls">
                <label>
                  窗口宽度:
                  <select v-model.number="windowWidth" class="select-input">
                    <option :value="375">375px (手机)</option>
                    <option :value="768">768px (平板)</option>
                    <option :value="1024">1024px (笔记本)</option>
                    <option :value="1920">1920px (桌面)</option>
                  </select>
                </label>
                <button @click="advanced5Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '📱 响应式截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  windowWidth: 1920,   // 虚拟窗口宽度
  windowHeight: 1080,  // 虚拟窗口高度
  scrollX: 0,
  scrollY: -window.scrollY // 补偿滚动位置
})</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p><strong>当前设置:</strong> {{ windowWidth }}px 宽度</p>
                  <div class="responsive-demo" :style="{ maxWidth: windowWidth + 'px' }">
                    <p>这是响应式内容区域</p>
                    <p style="font-size: 0.8rem; color: #718096">宽度会根据设置调整</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 高级6: 性能优化 -->
            <div v-else-if="currentAdvanced === 5">
              <h3>高级 6: 性能优化技巧</h3>
              <p>优化html2canvas的性能，减少内存占用和渲染时间。</p>

              <div class="controls">
                <button @click="advanced6Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 截图中...' : '⚡ 优化截图' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const canvas = await html2canvas(element, {
  // 性能优化选项
  scale: 1,           // 降低scale减少内存
  logging: false,     // 关闭日志提升性能
  imageTimeout: 5000, // 图片加载超时
  removeContainer: true, // 渲染后移除克隆容器

  // 忽略不需要的元素
  ignoreElements: (el) =&gt; {
    return el.tagName === 'SCRIPT' ||
           el.tagName === 'NOSCRIPT' ||
           el.classList.contains('no-capture')
  }
})

// 优化建议:
// 1. 减小截图区域
// 2. 降低scale值
// 3. 使用JPEG格式（体积更小）
// 4. 过滤无关元素</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p><strong>性能优化建议:</strong></p>
                  <table class="mini-table">
                    <tr>
                      <th>优化项</th>
                      <th>效果</th>
                    </tr>
                    <tr>
                      <td>scale: 1</td>
                      <td>减少50%内存</td>
                    </tr>
                    <tr>
                      <td>logging: false</td>
                      <td>提升10%速度</td>
                    </tr>
                    <tr>
                      <td>过滤元素</td>
                      <td>减少渲染时间</td>
                    </tr>
                    <tr>
                      <td>JPEG格式</td>
                      <td>减少70%体积</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 原有快捷按钮 -->
        <div class="divider"></div>

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
import { ref, watch, nextTick } from 'vue'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'

const capturedImage = ref('')
const loading = ref(false)
const currentExample = ref(0)
const scaleValue = ref(2)
const bgColor = ref('#ffffff')
const imageFormat = ref('image/png')

// ECharts refs
const html2canvasChartRef = ref<HTMLDivElement>()
let html2canvasChart: ECharts | null = null

// 示例标签
const examples = [
  '基础截图',
  '高清截图',
  '截图转PDF',
  '自定义背景',
  '过滤元素',
  '获取Blob',
  'ECharts图表',
]

// ==================== 基础功能示例 ====================

// 示例1: 基础截图（打印预览）
const example1Generate = async () => {
  const element = document.getElementById('example1-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    // 创建打印窗口
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印截图</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例2: 高清截图
const example2Generate = async () => {
  const element = document.getElementById('example2-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      scale: scaleValue.value,
      backgroundColor: null, // 保留渐变
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印高清截图</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例3: 截图转PDF
const example3Generate = async () => {
  const element = document.getElementById('example3-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()

    const imgWidth = 190
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight)

    // 打印而非下载
    const blob = pdf.output('blob')
    const blobUrl = URL.createObjectURL(blob)
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = blobUrl
    document.body.appendChild(iframe)

    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.print()

          const cleanup = () => {
            setTimeout(() => {
              document.body.removeChild(iframe)
              URL.revokeObjectURL(blobUrl)
            }, 500)
          }

          iframe.contentWindow?.addEventListener('afterprint', cleanup, { once: true })
          setTimeout(cleanup, 300000)
        } catch (e) {
          console.error('打印失败:', e)
        }
      }, 200)
    }

    capturedImage.value = imgData
  } catch (error) {
    console.error('生成PDF失败:', error)
    alert('❌ 生成PDF失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例4: 自定义背景色（打印预览）
const example4Generate = async () => {
  const element = document.getElementById('example4-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      backgroundColor: bgColor.value,
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印自定义背景</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; background: ${bgColor.value}; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例5: 过滤元素
const example5Generate = async () => {
  const element = document.getElementById('example5-area')
  if (!element) return

  loading.value = true
  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      ignoreElements: (el) => {
        return el.classList.contains('no-capture')
      },
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const link = document.createElement('a')
    link.href = imgData
    link.download = 'filtered-screenshot.png'
    link.click()
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例6: 获取Blob
const example6Generate = async () => {
  const element = document.getElementById('example6-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL(imageFormat.value, 0.9)
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印Blob格式</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('生成失败:', error)
    alert('❌ 生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例7: ECharts截图
const initHtml2canvasChart = () => {
  if (html2canvasChartRef.value) {
    // 如果图表已存在，先销毁
    if (html2canvasChart) {
      html2canvasChart.dispose()
      html2canvasChart = null
    }

    // 重新初始化图表
    html2canvasChart = echarts.init(html2canvasChartRef.value)
    html2canvasChart.setOption({
      title: {
        text: '销售数据分析',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '销售额',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '手机' },
            { value: 735, name: '电脑' },
            { value: 580, name: '平板' },
            { value: 484, name: '手表' },
            { value: 300, name: '耳机' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    })
  }
}

const example7Generate = async () => {
  const element = document.getElementById('example7-area')
  if (!element) return

  loading.value = true
  try {
    // 等待ECharts完全渲染
    await new Promise((resolve) => setTimeout(resolve, 500))

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印ECharts图表</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// Watch currentExample to initialize chart
watch(currentExample, async (newVal) => {
  if (newVal === 6) {
    await nextTick()
    initHtml2canvasChart()
  }
})

// ==================== 高级功能示例 ====================

const currentAdvanced = ref(0)
const advancedExamples = ['长页面分页', '跨域图片', '裁剪区域', '日志调试', '窗口尺寸', '性能优化']

const cropX = ref(20)
const cropY = ref(20)
const enableLogging = ref(false)
const windowWidth = ref(1024)
const jpegQuality = ref(0.8)

// 高级1: 长页面分页截图
const advanced1Generate = async () => {
  const element = document.getElementById('advanced1-area')
  if (!element) return

  loading.value = true
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()

    const pageHeight = 295
    const imgWidth = 190
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    // 打印PDF而非下载
    const blob = pdf.output('blob')
    const blobUrl = URL.createObjectURL(blob)
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = blobUrl
    document.body.appendChild(iframe)

    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.print()
        } catch (e) {
          console.error('打印失败:', e)
        }
      }, 100)
    }

    // 清理
    setTimeout(() => {
      try {
        document.body.removeChild(iframe)
        URL.revokeObjectURL(blobUrl)
      } catch (e) {}
    }, 3000)

    capturedImage.value = imgData
  } catch (error) {
    console.error('生成失败:', error)
    alert('❌ 生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 高级2: 跨域图片处理
const advanced2Generate = async () => {
  const element = document.getElementById('capture-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印跨域图片</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 高级3: 自定义渲染区域（打印预览）
const advanced3Generate = async () => {
  const element = document.getElementById('advanced3-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      x: cropX.value,
      y: cropY.value,
      width: 150,
      height: 100,
      backgroundColor: '#ffffff',
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印裁剪截图</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 高级4: 日志和调试（打印预览）
const advanced4Generate = async () => {
  const element = document.getElementById('capture-area')
  if (!element) return

  loading.value = true
  try {
    console.log('开始调试截图...')
    // 等待DOM完全渨染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      logging: enableLogging.value,
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      allowTaint: false,
      onclone: (clonedDoc, el) => {
        if (enableLogging.value) {
          console.log('克隆的元素:', el)
          console.log('元素尺寸:', el.offsetWidth, 'x', el.offsetHeight)
        }
      },
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印调试截图</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 高级5: 窗口尺寸控制
const advanced5Generate = async () => {
  const element = document.getElementById('capture-area')
  if (!element) return

  loading.value = true
  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      windowWidth: windowWidth.value,
      windowHeight: 800,
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印响应式截图</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 高级6: 性能优化
const advanced6Generate = async () => {
  const element = document.getElementById('capture-area')
  if (!element) return

  loading.value = true
  const startTime = performance.now()

  try {
    // 等待DOM完全渲染
    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(element, {
      scale: 1,
      logging: false,
      imageTimeout: 5000,
      removeContainer: true,
      backgroundColor: '#ffffff',
      useCORS: true,
      allowTaint: false,
      ignoreElements: (el) => {
        return (
          el.tagName === 'SCRIPT' ||
          el.tagName === 'NOSCRIPT' ||
          el.classList.contains('no-capture')
        )
      },
    })

    const endTime = performance.now()
    const imgData = canvas.toDataURL('image/jpeg', jpegQuality.value)
    capturedImage.value = imgData

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印优化截图</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print()" />
          </body>
        </html>
      `)
      printWindow.document.close()
    }

    const fileSize = ((imgData.length * 0.75) / 1024).toFixed(2)
    console.log(
      `优化截图打印预览成功！耗时: ${(endTime - startTime).toFixed(0)}ms，文件大小: ~${fileSize}KB`,
    )
  } catch (error) {
    console.error('截图失败:', error)
    alert('❌ 截图失败: ' + error)
  } finally {
    loading.value = false
  }
}

// ==================== 原有快捷功能 ====================

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

/* 示例展示区域样式 */
.examples-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.section-title {
  color: #667eea;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
}

.example-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tab-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.tab-button:hover {
  background: #f7fafc;
  border-color: #667eea;
}

.tab-button.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.example-content {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
}

.example-content h3 {
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.example-content > p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.code-display {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}

.code-display h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.code-display pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.demo-content {
  margin-top: 1rem;
}

.demo-content h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.capture-preview {
  background: white;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  min-height: 120px;
}

.preview-card {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.preview-card h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.preview-badge {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.mini-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.mini-table th,
.mini-table td {
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
  text-align: center;
}

.mini-table th {
  background: #667eea;
  color: white;
}

.select-input {
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  margin: 0 0.5rem;
}

.color-input {
  padding: 0.25rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  margin: 0 0.5rem;
  width: 60px;
  height: 36px;
  cursor: pointer;
}

.note {
  color: #718096;
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 0.75rem;
}

.divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 2rem 0;
}

/* 高级功能样式 */
.advanced-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.long-content-preview {
  background: white;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
}

.preview-section {
  background: #f7fafc;
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
}

.preview-section h5 {
  color: #667eea;
  margin-bottom: 0.25rem;
}

.preview-box {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1.5rem;
}

.number-input {
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  margin: 0 0.5rem;
  width: 80px;
  text-align: center;
}

.crop-preview {
  background: white;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  min-height: 150px;
}

.crop-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.crop-cell {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}

.crop-indicator {
  position: absolute;
  width: 150px;
  height: 100px;
  border: 2px solid #e53e3e;
  background: rgba(229, 62, 62, 0.1);
  pointer-events: none;
}

.responsive-demo {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  transition: max-width 0.3s ease;
}

/* 框架特点说明样式 */
.framework-highlight {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #1a202c;
  padding: 1.2rem;
  border-radius: 8px;
  margin: 1rem 0;
  line-height: 2;
  border: 2px solid #4facfe;
}

.framework-highlight strong {
  font-weight: 700;
  color: #2d3748;
}

.framework-highlight .advantage {
  color: #22543d;
  font-weight: 700;
  background: rgba(154, 230, 180, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
}

.framework-highlight .disadvantage {
  color: #742a2a;
  font-weight: 700;
  background: rgba(254, 178, 178, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
