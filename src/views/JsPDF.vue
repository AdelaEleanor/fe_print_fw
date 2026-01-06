<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📄 jsPDF - 强大的PDF生成库</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>jsPDF</strong></p>
          <p>npm install jspdf</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 60+</li>
            <li>✅ Firefox 55+</li>
            <li>✅ Safari 11+</li>
            <li>✅ Edge 79+</li>
            <li>❌ IE 不支持</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (80%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 客户端生成</li>
            <li>✅ 矢量图形</li>
            <li>⚠️ 大文件较慢</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ 完全可控</li>
            <li>✅ addPage()</li>
            <li>✅ 精确定位</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~150 KB</p>
          <p>(压缩后)</p>
        </div>

        <div class="info-section">
          <h3>✨ 核心功能</h3>
          <ul>
            <li>✅ 文本绘制</li>
            <li>✅ 图形绘制</li>
            <li>✅ 图片嵌入</li>
            <li>✅ 自定义字体</li>
            <li>✅ 表格生成</li>
            <li>✅ 多页文档</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>功能强大</li>
            <li>精确控制</li>
            <li>矢量输出</li>
            <li>插件丰富</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>中文需配置字体</li>
            <li>学习曲线较陡</li>
            <li>API相对底层</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <h2 class="section-title">📝 基础PDF生成</h2>

        <!-- 示例选择标签 -->
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

        <!-- 示例内容区 -->
        <div class="example-content">
          <!-- 示例1: 创建基础PDF -->
          <div v-if="currentExample === 0">
            <h3>示例 1: 创建基础PDF文档</h3>
            <p>最简单的PDF生成方式，创建一个包含文本的PDF文档。</p>

            <div class="controls">
              <button @click="example1Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '📄 生成基础PDF' }}
              </button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>import { jsPDF } from 'jspdf'

const doc = new jsPDF()

// 添加文本
doc.text('Hello World!', 10, 10)
doc.text('这是使用 jsPDF 生成的 PDF 文档', 10, 20)

// 保存PDF
doc.save('basic.pdf')</code></pre>
            </div>

            <div class="demo-content">
              <h4>📋 PDF内容预览:</h4>
              <div class="preview-box">
                <p><strong>标题:</strong> Hello World!</p>
                <p><strong>内容:</strong> 这是使用 jsPDF 生成的 PDF 文档</p>
                <p><strong>生成时间:</strong> {{ currentDate }}</p>
                <p class="note">点击按钮将生成并下载PDF文件</p>
              </div>
            </div>
          </div>

          <!-- 示例2: 文本样式 -->
          <div v-else-if="currentExample === 1">
            <h3>示例 2: 文本样式和格式</h3>
            <p>设置字体大小、样式、颜色等属性，创建格式丰富的PDF。</p>

            <div class="controls">
              <button @click="example2Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '🎨 生成样式PDF' }}
              </button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const doc = new jsPDF()

// 设置字体大小和样式
doc.setFontSize(24)
doc.setFont('helvetica', 'bold')
doc.text('PDF标题', 10, 20)

// 设置颜色
doc.setTextColor(102, 126, 234)
doc.setFontSize(16)
doc.text('带颜色的文本', 10, 35)

// 普通文本
doc.setTextColor(0, 0, 0)
doc.setFontSize(12)
doc.text('这是正常大小的文本', 10, 50)

doc.save('styled.pdf')</code></pre>
            </div>

            <div class="demo-content">
              <h4>📋 样式示例:</h4>
              <div class="preview-box">
                <p style="font-size: 24px; font-weight: bold">PDF标题</p>
                <p style="font-size: 16px; color: #667eea">带颜色的文本</p>
                <p style="font-size: 12px">这是正常大小的文本</p>
                <p class="note">PDF中将应用这些样式</p>
              </div>
            </div>
          </div>

          <!-- 示例3: 绘制图形 -->
          <div v-else-if="currentExample === 2">
            <h3>示例 3: 绘制图形和线条</h3>
            <p>使用jsPDF的图形API绘制矩形、圆形、线条等基本图形。</p>

            <div class="controls">
              <button @click="example3Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '🎨 生成图形PDF' }}
              </button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const doc = new jsPDF()

// 绘制矩形（边框）
doc.rect(10, 10, 50, 30)

// 绘制填充矩形
doc.setFillColor(102, 126, 234)
doc.rect(70, 10, 50, 30, 'F')

// 绘制圆形
doc.circle(35, 70, 20)

// 绘制线条
doc.line(10, 110, 100, 110)

// 设置线条粗细和颜色
doc.setLineWidth(2)
doc.setDrawColor(255, 0, 0)
doc.line(10, 120, 100, 120)

doc.save('shapes.pdf')</code></pre>
            </div>

            <div class="demo-content">
              <h4>📋 图形预览:</h4>
              <div class="preview-box">
                <svg width="200" height="150" style="border: 1px solid #e2e8f0">
                  <rect x="10" y="10" width="50" height="30" fill="none" stroke="black" />
                  <rect x="70" y="10" width="50" height="30" fill="#667eea" />
                  <circle cx="35" cy="70" r="20" fill="none" stroke="black" />
                  <line x1="10" y1="110" x2="100" y2="110" stroke="black" />
                  <line x1="10" y1="120" x2="100" y2="120" stroke="red" stroke-width="2" />
                </svg>
                <p class="note">PDF中将包含这些图形</p>
              </div>
            </div>
          </div>

          <!-- 示例4: 多页文档 -->
          <div v-else-if="currentExample === 3">
            <h3>示例 4: 创建多页PDF文档</h3>
            <p>使用addPage()方法创建多页PDF文档，适合长内容分页。</p>

            <div class="controls">
              <button @click="example4Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '📑 生成多页PDF' }}
              </button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const doc = new jsPDF()

// 第一页
doc.setFontSize(20)
doc.text('第一页', 10, 20)
doc.setFontSize(12)
doc.text('这是第一页的内容', 10, 40)

// 添加新页面
doc.addPage()

// 第二页
doc.setFontSize(20)
doc.text('第二页', 10, 20)
doc.setFontSize(12)
doc.text('这是第二页的内容', 10, 40)

// 添加第三页
doc.addPage()
doc.text('第三页', 10, 20)

doc.save('multi-page.pdf')</code></pre>
            </div>

            <div class="demo-content">
              <h4>📋 页面预览:</h4>
              <div class="preview-box">
                <div class="page-preview"><strong>第1页:</strong> 封面和介绍</div>
                <div class="page-preview"><strong>第2页:</strong> 主要内容</div>
                <div class="page-preview"><strong>第3页:</strong> 总结</div>
                <p class="note">生成的PDF将包含3页内容</p>
              </div>
            </div>
          </div>

          <!-- 示例5: 页面配置 -->
          <div v-else-if="currentExample === 4">
            <h3>示例 5: 自定义页面配置</h3>
            <p>配置页面方向、尺寸、单位等参数，创建符合需求的PDF。</p>

            <div class="controls">
              <label>
                页面方向:
                <select v-model="pageOrientation" class="select-input">
                  <option value="portrait">纵向</option>
                  <option value="landscape">横向</option>
                </select>
              </label>
              <button @click="example5Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '📐 生成自定义PDF' }}
              </button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>// 纵向A4
const doc = new jsPDF('portrait', 'mm', 'a4')

// 横向A4
const doc = new jsPDF('landscape', 'mm', 'a4')

// 完整配置
const doc = new jsPDF({
  orientation: '{{ pageOrientation }}',
  unit: 'mm',
  format: 'a4'
})

doc.text('自定义页面配置', 10, 10)
doc.save('custom.pdf')</code></pre>
            </div>

            <div class="demo-content">
              <h4>📋 配置说明:</h4>
              <div class="preview-box">
                <p>
                  <strong>当前方向:</strong> {{ pageOrientation === 'portrait' ? '纵向' : '横向' }}
                </p>
                <p><strong>页面格式:</strong> A4 (210mm × 297mm)</p>
                <p><strong>单位:</strong> 毫米 (mm)</p>
                <p class="note">可选格式: a4, a3, letter, legal等</p>
              </div>
            </div>
          </div>

          <!-- 示例6: 嵌入图片 -->
          <div v-else-if="currentExample === 5">
            <h3>示例 6: 在PDF中嵌入图片</h3>
            <p>使用addImage方法将图片嵌入到PDF文档中。</p>

            <div class="controls">
              <button @click="example6Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '🖼️ 生成图片PDF' }}
              </button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const doc = new jsPDF()

// 图片数据（base64或DataURL）
const imgData = 'data:image/png;base64,...'

// 添加图片
// addImage(imageData, format, x, y, width, height)
doc.addImage(imgData, 'PNG', 10, 10, 100, 80)

doc.text('PDF中的图片示例', 10, 100)

doc.save('image.pdf')</code></pre>
            </div>

            <div class="demo-content">
              <h4>📋 图片预览:</h4>
              <div class="preview-box">
                <img
                  :src="sampleImage"
                  alt="示例图片"
                  style="max-width: 200px; border: 1px solid #e2e8f0; border-radius: 4px"
                />
                <p class="note">此图片将被嵌入到PDF中</p>
              </div>
            </div>
          </div>

          <!-- 示例7: ECharts图表转PDF -->
          <div v-else-if="currentExample === 6">
            <h3>示例 7: ECharts图表转PDF</h3>
            <p>
              <strong>✨ jsPDF优势体现：</strong
              >将ECharts渲染为图片后，利用jsPDF的<strong>精确坐标控制</strong>和<strong>高质量图片嵌入</strong>能力，实现完美的图表布局。
            </p>

            <div class="controls">
              <button @click="example7Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '📊 生成图表PDF' }}
              </button>
            </div>

            <div class="info-box" style="background: #f0f7ff; border-left: 4px solid #667eea">
              <h4 style="color: #667eea; margin-top: 0">💡 jsPDF处理图表的独特优势</h4>
              <ul style="margin: 10px 0; line-height: 1.8">
                <li>
                  <strong>像素级精确定位：</strong>通过x、y坐标精确控制每个图表的位置，避免布局错乱
                </li>
                <li><strong>高质量图片输出：</strong>支持高DPI设置，图表清晰度远超HTML渲染</li>
                <li>
                  <strong>灵活的尺寸控制：</strong
                  >可以精确指定每个图表的宽高，轻松实现复杂的混合布局
                </li>
                <li>
                  <strong>分页可控：</strong>可以计算内容高度，在需要的位置精确换页，不会截断图表
                </li>
              </ul>
              <p style="margin: 10px 0; color: #4a5568">
                <strong>对比其他方案：</strong>
              </p>
              <ul style="margin: 0; line-height: 1.8; color: #718096">
                <li>html2pdf：依赖浏览器渲染，图表质量不稳定，分页位置难控制</li>
                <li>Print.js：只能打印不能导出PDF，且无法精确控制图表位置</li>
              </ul>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>import * as echarts from 'echarts'
import { jsPDF } from 'jspdf'

// 1. 初始化ECharts实例
const chartDom = document.getElementById('myChart')
const myChart = echarts.init(chartDom)

// 2. 配置图表
myChart.setOption({
  title: { text: '月度销售数据' },
  xAxis: { data: ['1月', '2月', '3月', '4月', '5月', '6月'] },
  yAxis: {},
  series: [{
    type: 'bar',
    data: [120, 200, 150, 80, 70, 110]
  }]
})

// 3. 将ECharts转为图片（高质量）
const chartImage = myChart.getDataURL({
  type: 'png',
  pixelRatio: 2, // 高清输出
  backgroundColor: '#fff'
})

// 4. jsPDF精确控制图表位置和尺寸
const doc = new jsPDF()
doc.setFontSize(18)
doc.text('销售数据分析报告', 105, 20, { align: 'center' })

// 精确定位：x=15, y=30, 宽度=180, 高度=100
doc.addImage(chartImage, 'PNG', 15, 30, 180, 100)

// 可以继续添加更多内容，精确控制位置
doc.setFontSize(12)
doc.text('图表说明：上半年销售趋势', 15, 140)

doc.save('chart-report.pdf')</code></pre>
            </div>

            <div class="demo-content">
              <h4>📊 实时图表预览:</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0">
                <!-- 饼图 -->
                <div>
                  <div
                    ref="pieChartRef"
                    style="
                      width: 100%;
                      height: 250px;
                      border: 1px solid #e2e8f0;
                      border-radius: 8px;
                    "
                  ></div>
                  <p style="text-align: center; color: #718096; margin-top: 8px">销售占比分析</p>
                </div>

                <!-- 折线图 -->
                <div>
                  <div
                    ref="lineChartRef"
                    style="
                      width: 100%;
                      height: 250px;
                      border: 1px solid #e2e8f0;
                      border-radius: 8px;
                    "
                  ></div>
                  <p style="text-align: center; color: #718096; margin-top: 8px">月度销售趋势</p>
                </div>

                <!-- 柱状图 -->
                <div>
                  <div
                    ref="barChartRef"
                    style="
                      width: 100%;
                      height: 250px;
                      border: 1px solid #e2e8f0;
                      border-radius: 8px;
                    "
                  ></div>
                  <p style="text-align: center; color: #718096; margin-top: 8px">产品销量对比</p>
                </div>

                <!-- 雷达图 -->
                <div>
                  <div
                    ref="radarChartRef"
                    style="
                      width: 100%;
                      height: 250px;
                      border: 1px solid #e2e8f0;
                      border-radius: 8px;
                    "
                  ></div>
                  <p style="text-align: center; color: #718096; margin-top: 8px">综合能力评估</p>
                </div>
              </div>
              <p class="note">
                点击按钮将生成包含这4个图表的PDF文档，每个图表都经过精确定位和尺寸控制
              </p>
            </div>
          </div>

          <!-- 示例8: 对比测试（与VuePrintNb相同的图表） -->
          <div v-else-if="currentExample === 7">
            <h3>示例 8: 🔍 对比测试 - 与VuePrintNb相同配置</h3>
            <p style="color: #3182ce; font-weight: 500">
              <strong>📊 测试目的：</strong
              >使用与VuePrintNb示例8完全相同的ECharts配置，对比jsPDF的输出效果。
            </p>

            <div class="controls">
              <button @click="example8Generate" class="btn btn-primary" :disabled="loading">
                {{ loading ? '⏳ 生成中...' : '📄 生成对比PDF' }}
              </button>
            </div>

            <div class="info-box" style="background: #edf2f7; border-left: 4px solid #3182ce">
              <h4 style="color: #3182ce; margin-top: 0">🔍 对比说明</h4>
              <p style="margin: 10px 0; line-height: 1.8">
                此示例使用与 <strong>VuePrintNb 示例8</strong> 完全相同的ECharts配置：
              </p>
              <ul style="margin: 10px 0; line-height: 1.8">
                <li><strong>相同的grid配置：</strong>left: '8%', right: '8%'</li>
                <li><strong>相同的数据：</strong>[120, 200, 150, 80, 170, 210]</li>
                <li><strong>相同的样式：</strong>折线图 + 面积填充</li>
              </ul>
              <p style="margin: 10px 0; color: #4a5568">
                <strong>预期对比结果：</strong>
              </p>
              <ul style="margin: 0; line-height: 1.8; color: #718096">
                <li>✅ jsPDF: 精确坐标定位，图表完整显示，不受页面边距影响</li>
                <li>⚠️ VuePrintNb: 受浏览器打印引擎限制，可能出现右侧裁剪</li>
              </ul>
            </div>

            <div class="demo-content">
              <h4>📊 实时图表预览:</h4>
              <div style="max-width: 600px; margin: 0 auto">
                <div
                  ref="compareChartRef"
                  style="
                    width: 100%;
                    height: 280px;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    background: white;
                    padding: 0;
                  "
                ></div>
                <p style="text-align: center; color: #718096; margin-top: 8px">
                  月度销售趋势（与VuePrintNb相同配置）
                </p>
              </div>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>// 与VuePrintNb完全相同的ECharts配置
const option = {
  title: {
    text: '月度销售趋势',
    left: 'center',
    textStyle: { fontSize: 16, fontWeight: 'bold' }
  },
  tooltip: { trigger: 'axis' },
  grid: {
    left: '8%',   // 与VuePrintNb相同
    right: '8%',  // 与VuePrintNb相同
    bottom: '18%',
    top: '22%'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    axisLabel: { fontSize: 13 }
  },
  yAxis: {
    type: 'value',
    name: '销售额(万)',
    axisLabel: { fontSize: 13 }
  },
  series: [{
    data: [120, 200, 150, 80, 170, 210],
    type: 'line',
    smooth: true,
    itemStyle: { color: '#667eea' },
    areaStyle: { color: 'rgba(102, 126, 234, 0.2)' },
    lineStyle: { width: 3 },
    symbol: 'circle',
    symbolSize: 8
  }]
}

// jsPDF输出（高质量PNG，精确定位）
const chartImage = myChart.getDataURL({
  type: 'png',
  pixelRatio: 3,  // 高清输出
  backgroundColor: '#fff'
})
const doc = new jsPDF()
doc.addImage(chartImage, 'PNG', 15, 30, 180, 100)
doc.save('compare.pdf')</code></pre>
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
            <!-- 高级1: 表格生成 (autoTable) -->
            <div v-if="currentAdvanced === 0">
              <h3>高级 1: 表格生成 (autoTable插件)</h3>
              <p>使用jsPDF-autoTable插件快速生成专业的表格，支持自动分页和样式定制。</p>

              <div class="controls">
                <button @click="advanced1Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📊 生成表格PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>import 'jspdf-autotable'

const doc = new jsPDF()

doc.autoTable({
  head: [['姓名', '部门', '职位', '工资']],
  body: [
    ['张三', '技术部', '工程师', '¥15,000'],
    ['李四', '产品部', '产品经理', '¥18,000'],
    // ... 更多数据
  ],
  startY: 20,
  theme: 'grid',
  headStyles: {
    fillColor: [102, 126, 234],
    textColor: 255,
    fontStyle: 'bold'
  },
  styles: {
    font: 'helvetica',
    fontSize: 10
  }
})

doc.save('table.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <h4>📋 表格数据预览:</h4>
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>姓名</th>
                      <th>部门</th>
                      <th>职位</th>
                      <th>工资</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 5" :key="i">
                      <td>员工{{ i }}</td>
                      <td>{{ ['技术部', '产品部', '设计部', '运营部', '市场部'][i - 1] }}</td>
                      <td>{{ ['工程师', '产品经理', '设计师', '运营专员', '市场专员'][i - 1] }}</td>
                      <td>¥{{ 12000 + i * 1000 }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 高级2: 自动分页 -->
            <div v-else-if="currentAdvanced === 1">
              <h3>高级 2: 自动分页处理</h3>
              <p>当内容超过一页时，自动添加新页面并继续渲染内容。</p>

              <div class="controls">
                <label>
                  生成行数:
                  <input
                    v-model.number="autoPageLines"
                    type="number"
                    min="10"
                    max="200"
                    class="number-input"
                  />
                </label>
                <button @click="advanced2Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📑 生成自动分页PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const doc = new jsPDF()
const pageHeight = doc.internal.pageSize.height
let yPosition = 20

for (let i = 0; i &lt; totalLines; i++) {
  // 检查是否需要换页
  if (yPosition &gt; pageHeight - 20) {
    doc.addPage()
    yPosition = 20
  }

  doc.text(`第 ${i + 1} 行内容`, 10, yPosition)
  yPosition += 10
}

doc.save('auto-page.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p><strong>当前设置:</strong> 生成 {{ autoPageLines }} 行内容</p>
                  <p><strong>预计页数:</strong> 约 {{ Math.ceil(autoPageLines / 25) }} 页</p>
                  <p class="note">内容超出当前页面高度时将自动添加新页</p>
                </div>
              </div>
            </div>

            <!-- 高级3: 添加页眉页脚 -->
            <div v-else-if="currentAdvanced === 2">
              <h3>高级 3: 页眉和页脚</h3>
              <p>为每一页添加页眉、页脚和页码，增强文档专业性。</p>

              <div class="controls">
                <button @click="advanced3Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📄 生成带页眉页脚PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const doc = new jsPDF()
const pageCount = 3

for (let i = 1; i &lt;= pageCount; i++) {
  if (i &gt; 1) doc.addPage()

  // 页眉
  doc.setFontSize(10)
  doc.setTextColor(100)
  doc.text('公司机密文件', 105, 10, { align: 'center' })
  doc.line(10, 12, 200, 12)

  // 内容
  doc.setFontSize(14)
  doc.setTextColor(0)
  doc.text(`第 ${i} 页内容`, 10, 30)

  // 页脚
  doc.setFontSize(10)
  doc.setTextColor(100)
  doc.line(10, 285, 200, 285)
  doc.text(`第 ${i}/${pageCount} 页`, 105, 290, { align: 'center' })
}

doc.save('header-footer.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <div style="border: 1px solid #e2e8f0; padding: 1rem; margin: 0.5rem 0">
                    <p
                      style="
                        text-align: center;
                        color: #718096;
                        font-size: 0.9rem;
                        border-bottom: 1px solid #e2e8f0;
                        padding-bottom: 0.5rem;
                      "
                    >
                      公司机密文件
                    </p>
                    <p style="margin: 1rem 0"><strong>页面内容区域</strong></p>
                    <p
                      style="
                        text-align: center;
                        color: #718096;
                        font-size: 0.9rem;
                        border-top: 1px solid #e2e8f0;
                        padding-top: 0.5rem;
                      "
                    >
                      第 1/3 页
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 高级4: 文本换行和对齐 -->
            <div v-else-if="currentAdvanced === 3">
              <h3>高级 4: 文本换行和对齐</h3>
              <p>使用splitTextToSize实现文本自动换行，支持多种对齐方式。</p>

              <div class="controls">
                <button @click="advanced4Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📝 生成文本换行PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>const doc = new jsPDF()
const longText = '这是一段很长的文本...'

// 自动换行
const maxWidth = 180
const lines = doc.splitTextToSize(longText, maxWidth)
doc.text(lines, 10, 20)

// 左对齐
doc.text('左对齐文本', 10, 60)

// 居中对齐
doc.text('居中对齐文本', 105, 80, { align: 'center' })

// 右对齐
doc.text('右对齐文本', 200, 100, { align: 'right' })

doc.save('text-align.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p style="text-align: left">← 左对齐文本</p>
                  <p style="text-align: center">居中对齐文本</p>
                  <p style="text-align: right">右对齐文本 →</p>
                  <p style="margin-top: 1rem; border-top: 1px solid #e2e8f0; padding-top: 1rem">
                    这是一段很长的文本，当文本超过指定宽度时，jsPDF的splitTextToSize方法会自动将其分割成多行，确保内容不会超出页面边界。这个功能对于处理动态内容非常有用。
                  </p>
                </div>
              </div>
            </div>

            <!-- 高级5: 链接和书签 -->
            <div v-else-if="currentAdvanced === 4">
              <h3>高级 5: 添加链接和书签</h3>
              <p>在PDF中添加可点击的超链接和内部跳转链接。</p>

              <div class="controls">
                <button @click="advanced5Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '🔗 生成带链接PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>const doc = new jsPDF()

// 添加外部链接
doc.text('访问 jsPDF 官网', 10, 20)
doc.link(10, 15, 50, 10, { url: 'https://github.com/parallax/jsPDF' })

// 添加内部链接
doc.text('点击跳转到第二页', 10, 40)
doc.link(10, 35, 60, 10, { pageNumber: 2 })

// 第二页
doc.addPage()
doc.text('这是第二页', 10, 20)

doc.save('links.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p>
                    <a href="#" style="color: #667eea; text-decoration: underline"
                      >访问 jsPDF 官网</a
                    >
                    (外部链接)
                  </p>
                  <p>
                    <a href="#" style="color: #667eea; text-decoration: underline"
                      >点击跳转到第二页</a
                    >
                    (内部链接)
                  </p>
                  <p class="note">PDF中的链接区域可以点击跳转</p>
                </div>
              </div>
            </div>

            <!-- 高级6: 水印和背景 -->
            <div v-else-if="currentAdvanced === 5">
              <h3>高级 6: 添加水印和背景</h3>
              <p>为PDF添加半透明水印或背景图片，增强文档安全性。</p>

              <div class="controls">
                <button @click="advanced6Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '💧 生成带水印PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>const doc = new jsPDF()

// 设置透明度
doc.setGState(new doc.GState({ opacity: 0.2 }))

// 添加旋转的水印文字
doc.setFontSize(60)
doc.setTextColor(200, 200, 200)
doc.text('机密文件', 105, 150, {
  align: 'center',
  angle: 45
})

// 恢复正常透明度
doc.setGState(new doc.GState({ opacity: 1 }))

// 添加正常内容
doc.setFontSize(14)
doc.setTextColor(0, 0, 0)
doc.text('这是带水印的文档内容', 10, 20)

doc.save('watermark.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box" style="position: relative">
                  <div
                    style="
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%) rotate(45deg);
                      font-size: 3rem;
                      color: rgba(200, 200, 200, 0.3);
                      pointer-events: none;
                    "
                  >
                    机密文件
                  </div>
                  <p><strong>这是带水印的文档内容</strong></p>
                  <p>水印以半透明形式显示在背景中</p>
                  <p class="note">水印不会影响正常内容的阅读</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 保留原有文档 -->
        <div class="divider"></div>

        <div class="controls">
          <button @click="generateBasicPDF" class="btn btn-primary" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📄 生成基础PDF' }}
          </button>
          <button @click="generateTablePDF" class="btn btn-secondary" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📊 生成表格PDF' }}
          </button>
          <button @click="generateMultiPagePDF" class="btn btn-info" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📑 生成多页PDF' }}
          </button>
          <button @click="generateAdvancedPDF" class="btn btn-warning" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '🎨 高级PDF示例' }}
          </button>
        </div>

        <div
          v-if="statusMessage"
          class="status-message"
          :class="{ error: statusMessage.includes('❌') }"
        >
          {{ statusMessage }}
        </div>

        <div class="preview-area">
          <h3>📋 PDF预览区域</h3>
          <p>点击上方按钮生成并预览PDF文档</p>
          <div id="pdf-preview" class="pdf-canvas"></div>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装和导入</h4>
            <pre><code>npm install jspdf

import { jsPDF } from 'jspdf';</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 基础PDF生成</h4>
            <pre><code>const doc = new jsPDF();

// 添加文本
doc.text('Hello World!', 10, 10);

// 保存PDF
doc.save('document.pdf');

// 或在浏览器中打开
window.open(doc.output('bloburl'));</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 多页文档</h4>
            <pre><code>const doc = new jsPDF();

// 第一页
doc.text('第一页内容', 10, 10);

// 添加新页
doc.addPage();

// 第二页
doc.text('第二页内容', 10, 10);

doc.save('multi-page.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 绘制图形</h4>
            <pre><code>const doc = new jsPDF();

// 矩形
doc.rect(10, 10, 50, 50);

// 圆形
doc.circle(100, 35, 25);

// 线条
doc.line(10, 80, 100, 80);

// 填充矩形
doc.setFillColor(102, 126, 234);
doc.rect(10, 100, 50, 30, 'F');

doc.save('shapes.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 表格生成 (使用插件)</h4>
            <pre><code>import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const doc = new jsPDF();

doc.autoTable({
  head: [['姓名', '年龄', '城市']],
  body: [
    ['张三', 28, '北京'],
    ['李四', 32, '上海'],
    ['王五', 25, '广州']
  ],
  startY: 20,
  theme: 'grid',
  styles: { fontSize: 10 }
});

doc.save('table.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 添加图片</h4>
            <pre><code>const doc = new jsPDF();

// 添加图片 (需要base64或dataURL)
const imgData = 'data:image/jpeg;base64,...';
doc.addImage(imgData, 'JPEG', 10, 10, 100, 100);

doc.save('image.pdf');</code></pre>
          </div>

          <div class="code-block">
            <h4>7. 自定义页面大小和方向</h4>
            <pre><code>// A4 横向
const doc = new jsPDF('landscape', 'mm', 'a4');

// 自定义尺寸
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: [210, 297] // A4
});

// 常用格式: a4, a3, letter</code></pre>
          </div>

          <div class="code-block">
            <h4>8. 分页控制</h4>
            <pre><code>const doc = new jsPDF();
const pageHeight = doc.internal.pageSize.height;
let yPosition = 20;

for (let i = 0; i &lt; 100; i++) {
  if (yPosition &gt; pageHeight - 20) {
    doc.addPage();
    yPosition = 20;
  }

  doc.text(\`第 \${i + 1} 行\`, 10, yPosition);
  yPosition += 10;
}

doc.save('paginated.pdf');</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { jsPDF } from 'jspdf'
import { createChineseJsPDF } from '@/utils/fontLoader'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'

const loading = ref(false)
const statusMessage = ref('')
const currentExample = ref(0)
const currentDate = ref(new Date().toLocaleDateString('zh-CN'))
const pageOrientation = ref<'portrait' | 'landscape'>('portrait')

// ECharts refs
const pieChartRef = ref<HTMLDivElement>()
const lineChartRef = ref<HTMLDivElement>()
const barChartRef = ref<HTMLDivElement>()
const radarChartRef = ref<HTMLDivElement>()
const compareChartRef = ref<HTMLDivElement>()

let pieChart: ECharts | null = null
let lineChart: ECharts | null = null
let barChart: ECharts | null = null
let radarChart: ECharts | null = null
let compareChart: ECharts | null = null

// 示例标签
const examples = [
  '基础PDF',
  '文本样式',
  '绘制图形',
  '多页文档',
  '页面配置',
  '嵌入图片',
  'ECharts图表',
  '对比测试',
]

// 将PDF Blob在新窗口/iframe中打开并触发打印（复用pdfmake页面的实现思路）
const openBlobInPrintWindow = async (blob: Blob) => {
  const url = URL.createObjectURL(blob)
  const iframe = document.createElement('iframe')
  iframe.style.position = 'fixed'
  iframe.style.right = '0'
  iframe.style.bottom = '0'
  iframe.style.width = '0'
  iframe.style.height = '0'
  iframe.style.border = '0'
  iframe.src = url
  document.body.appendChild(iframe)

  await new Promise<void>((resolve) => {
    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.focus()
          iframe.contentWindow?.print()

          // 监听打印完成事件（打印对话框关闭后清理）
          const cleanup = () => {
            setTimeout(() => {
              try {
                document.body.removeChild(iframe)
              } catch (e) {}
              URL.revokeObjectURL(url)
            }, 100)
          }

          // 尝试监听 afterprint 事件
          if (iframe.contentWindow) {
            iframe.contentWindow.addEventListener('afterprint', cleanup, { once: true })
            // 备用：如果5分钟后还没清理，强制清理
            setTimeout(cleanup, 300000)
          } else {
            cleanup()
          }
        } catch (e) {
          window.open(url)
          setTimeout(() => URL.revokeObjectURL(url), 5000)
        }
        resolve()
      }, 200)
    }
  })
}

// 高级功能标签
const currentAdvanced = ref(0)
const advancedExamples = ['表格生成', '自动分页', '页眉页脚', '文本换行', '链接书签', '水印背景']

const autoPageLines = ref(50)

// 示例图片 - 使用本地logo
const sampleImage = ref('')

// 在组件挂载时加载logo图片
onMounted(async () => {
  try {
    const response = await fetch('/imgs/logo.jpg')
    const blob = await response.blob()
    const reader = new FileReader()
    reader.onloadend = () => {
      sampleImage.value = reader.result as string
    }
    reader.readAsDataURL(blob)
  } catch (error) {
    console.error('加载logo失败:', error)
  }
})

// 监听示例切换，当切换到ECharts示例时初始化图表
watch(currentExample, async (newVal) => {
  if (newVal === 6) {
    // 等待DOM更新
    await nextTick()
    initCharts()
  } else if (newVal === 7) {
    // 示例8: 对比测试
    await nextTick()
    initCompareChart()
  }
})

// 初始化ECharts图表
const initCharts = () => {
  // 饼图 - 销售占比
  if (pieChartRef.value) {
    // 如果图表已存在，先销毁
    if (pieChart) {
      pieChart.dispose()
      pieChart = null
    }

    pieChart = echarts.init(pieChartRef.value)
    pieChart.setOption({
      title: { text: '产品销售占比', left: 'center', textStyle: { fontSize: 14 } },
      tooltip: { trigger: 'item', formatter: '{b}: {c}万元 ({d}%)' },
      legend: { orient: 'vertical', right: 10, top: 'center' },
      series: [
        {
          type: 'pie',
          radius: '60%',
          data: [
            { value: 335, name: '产品A' },
            { value: 310, name: '产品B' },
            { value: 234, name: '产品C' },
            { value: 135, name: '产品D' },
            { value: 156, name: '产品E' },
          ],
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' },
          },
        },
      ],
    })
  }

  // 折线图 - 月度趋势
  if (lineChartRef.value) {
    // 如果图表已存在，先销毁
    if (lineChart) {
      lineChart.dispose()
      lineChart = null
    }

    lineChart = echarts.init(lineChartRef.value)
    lineChart.setOption({
      title: { text: '月度销售趋势', left: 'center', textStyle: { fontSize: 14 } },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月'] },
      yAxis: { type: 'value', name: '销售额(万)' },
      series: [
        {
          data: [120, 200, 150, 80, 170, 210],
          type: 'line',
          smooth: true,
          itemStyle: { color: '#667eea' },
          areaStyle: { color: 'rgba(102, 126, 234, 0.2)' },
        },
      ],
    })
  }

  // 柱状图 - 产品对比
  if (barChartRef.value) {
    // 如果图表已存在，先销毁
    if (barChart) {
      barChart.dispose()
      barChart = null
    }

    barChart = echarts.init(barChartRef.value)
    barChart.setOption({
      title: { text: '产品销量对比', left: 'center', textStyle: { fontSize: 14 } },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['产品A', '产品B', '产品C', '产品D', '产品E'] },
      yAxis: { type: 'value', name: '销量' },
      series: [
        {
          data: [820, 932, 901, 934, 1290],
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#667eea' },
              { offset: 1, color: '#764ba2' },
            ]),
          },
        },
      ],
    })
  }

  // 雷达图 - 综合评估
  if (radarChartRef.value) {
    // 如果图表已存在，先销毁
    if (radarChart) {
      radarChart.dispose()
      radarChart = null
    }

    radarChart = echarts.init(radarChartRef.value)
    radarChart.setOption({
      title: { text: '产品综合评估', left: 'center', textStyle: { fontSize: 14 } },
      tooltip: {},
      radar: {
        indicator: [
          { name: '销量', max: 100 },
          { name: '质量', max: 100 },
          { name: '成本', max: 100 },
          { name: '服务', max: 100 },
          { name: '创新', max: 100 },
        ],
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [85, 90, 75, 88, 92],
              name: '产品A',
              itemStyle: { color: '#667eea' },
              areaStyle: { color: 'rgba(102, 126, 234, 0.3)' },
            },
          ],
        },
      ],
    })
  }
}

// 初始化对比测试图表（与VuePrintNb示例8完全相同的配置）
const initCompareChart = () => {
  if (compareChartRef.value) {
    // 如果图表已存在，先销毁
    if (compareChart) {
      compareChart.dispose()
      compareChart = null
    }

    compareChart = echarts.init(compareChartRef.value)
    compareChart.setOption({
      title: {
        text: '月度销售趋势',
        left: 'center',
        textStyle: { fontSize: 16, fontWeight: 'bold' },
      },
      tooltip: { trigger: 'axis' },
      grid: { left: '8%', right: '8%', bottom: '18%', top: '22%' },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisLabel: { fontSize: 13 },
      },
      yAxis: {
        type: 'value',
        name: '销售额(万)',
        axisLabel: { fontSize: 13 },
      },
      series: [
        {
          data: [120, 200, 150, 80, 170, 210],
          type: 'line',
          smooth: true,
          itemStyle: { color: '#667eea' },
          areaStyle: { color: 'rgba(102, 126, 234, 0.2)' },
          lineStyle: { width: 3 },
          symbol: 'circle',
          symbolSize: 8,
        },
      ],
    })
  }
}

// 示例1: 创建基础PDF
const example1Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    const doc = await createChineseJsPDF()

    doc.text('Hello World!', 10, 10)
    doc.text('这是使用 jsPDF 生成的 PDF 文档', 10, 20)
    doc.text('生成时间: ' + currentDate.value, 10, 30)

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('basic-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例2: 文本样式
const example2Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    const doc = await createChineseJsPDF()

    // 大标题
    doc.setFontSize(24)
    doc.setFont('SourceHanSansSC', 'bold', 700) // 明确设置weight
    doc.text('PDF文档标题', 10, 20)

    // 带颜色的副标题
    doc.setTextColor(102, 126, 234)
    doc.setFontSize(16)
    doc.setFont('SourceHanSansSC', 'normal')
    doc.text('带颜色的文本示例', 10, 35)

    // 普通文本
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(12)
    doc.setFont('SourceHanSansSC', 'normal', 400)
    doc.text('这是正常大小的文本', 10, 50)

    // 粗体 - 使用更粗的字重
    doc.setFont('SourceHanSansSC', 'bold', 700)
    doc.text('这是粗体文本（字重700）', 10, 65)

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('styled-text.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例3: 绘制图形
const example3Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text('Shapes and Graphics', 10, 10)

    // 矩形（边框）
    doc.rect(10, 20, 50, 30)

    // 填充矩形
    doc.setFillColor(102, 126, 234)
    doc.rect(70, 20, 50, 30, 'F')

    // 边框+填充矩形
    doc.setFillColor(72, 187, 120)
    doc.rect(130, 20, 50, 30, 'FD')

    // 圆形
    doc.circle(35, 80, 20)

    // 填充圆形
    doc.setFillColor(237, 137, 54)
    doc.circle(95, 80, 20, 'F')

    // 线条
    doc.line(10, 120, 100, 120)

    // 粗线条
    doc.setLineWidth(2)
    doc.setDrawColor(255, 0, 0)
    doc.line(10, 130, 100, 130)

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('shapes.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例4: 多页文档
const example4Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    const doc = await createChineseJsPDF()

    // 第一页
    doc.setFontSize(20)
    doc.text('第一页', 10, 20)
    doc.setFontSize(12)
    doc.text('这是第一页的内容。', 10, 40)
    doc.text('我们将添加更多页面到这个文档中。', 10, 50)

    // 添加第二页
    doc.addPage()
    doc.setFontSize(20)
    doc.text('第二页', 10, 20)
    doc.setFontSize(12)
    doc.text('这是第二页的内容。', 10, 40)
    doc.text('你可以根据需要添加任意数量的页面。', 10, 50)

    // 添加第三页
    doc.addPage()
    doc.setFontSize(20)
    doc.text('第三页', 10, 20)
    doc.setFontSize(12)
    doc.text('这是最后一页。', 10, 40)
    doc.text('生成时间: ' + currentDate.value, 10, 50)

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('multi-page.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例5: 页面配置
const example5Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    const doc = await createChineseJsPDF({
      orientation: pageOrientation.value,
      unit: 'mm',
      format: 'a4',
    })

    doc.setFontSize(16)
    doc.text('自定义页面配置', 10, 20)
    doc.setFontSize(12)
    doc.text('方向: ' + (pageOrientation.value === 'portrait' ? '纵向' : '横向'), 10, 35)
    doc.text('格式: A4', 10, 45)
    doc.text('单位: mm', 10, 55)

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('custom-config.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例6: 嵌入图片
const example6Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    const doc = await createChineseJsPDF()

    doc.setFontSize(16)
    doc.text('PDF中的图片', 10, 10)

    // 添加图片
    if (sampleImage.value) {
      doc.addImage(sampleImage.value, 'JPEG', 10, 20, 100, 80)
    }

    doc.setFontSize(12)
    doc.text('这个PDF包含一张嵌入的图片。', 10, 110)

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('image-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例7: ECharts图表转PDF
const example7Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成图表PDF...'

  try {
    const doc = await createChineseJsPDF()

    // 标题
    doc.setFontSize(20)
    doc.text('数据分析报告', 105, 15, { align: 'center' })

    doc.setFontSize(10)
    doc.setTextColor(128, 128, 128)
    doc.text('生成时间: ' + currentDate.value, 105, 22, { align: 'center' })
    doc.setTextColor(0, 0, 0)

    let yPosition = 30

    // 获取图表图片 - 高质量输出
    const getChartImage = (chart: ECharts | null) => {
      if (!chart) return null
      return chart.getDataURL({
        type: 'png',
        pixelRatio: 2, // 高清输出
        backgroundColor: '#fff',
      })
    }

    // 1. 饼图 - 左上
    const pieImage = getChartImage(pieChart)
    if (pieImage) {
      doc.setFontSize(12)
      doc.text('1. 产品销售占比分析', 15, yPosition)
      doc.addImage(pieImage, 'PNG', 15, yPosition + 5, 85, 60)
    }

    // 2. 折线图 - 右上
    const lineImage = getChartImage(lineChart)
    if (lineImage) {
      doc.setFontSize(12)
      doc.text('2. 月度销售趋势', 110, yPosition)
      doc.addImage(lineImage, 'PNG', 110, yPosition + 5, 85, 60)
    }

    yPosition += 75

    // 添加分析说明
    doc.setFontSize(10)
    doc.text('• 产品A和产品B占据市场主要份额，合计约53%', 15, yPosition)
    doc.text('• 6月销售额达到最高点210万元，增长显著', 15, yPosition + 5)
    yPosition += 15

    // 3. 柱状图 - 左下
    const barImage = getChartImage(barChart)
    if (barImage) {
      doc.setFontSize(12)
      doc.text('3. 产品销量对比', 15, yPosition)
      doc.addImage(barImage, 'PNG', 15, yPosition + 5, 85, 60)
    }

    // 4. 雷达图 - 右下
    const radarImage = getChartImage(radarChart)
    if (radarImage) {
      doc.setFontSize(12)
      doc.text('4. 产品综合评估', 110, yPosition)
      doc.addImage(radarImage, 'PNG', 110, yPosition + 5, 85, 60)
    }

    yPosition += 75

    // 底部总结
    doc.setFontSize(10)
    doc.text('• 产品E销量最高，达到1290件', 15, yPosition)
    doc.text('• 产品A综合评估得分最高，各项指标均衡', 15, yPosition + 5)

    // 页脚
    doc.setFontSize(8)
    doc.setTextColor(128, 128, 128)
    doc.text('jsPDF优势: 精确的坐标控制 + 高质量图片输出 + 灵活的布局能力', 105, 285, {
      align: 'center',
    })

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('echarts-report.pdf')

    statusMessage.value = '图表PDF生成成功！'
    setTimeout(() => (statusMessage.value = ''), 3000)
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 示例8: 对比测试 - 生成与VuePrintNb相同配置的图表PDF
const example8Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成对比测试PDF...'

  try {
    if (!compareChart) {
      throw new Error('图表未初始化')
    }

    const doc = await createChineseJsPDF()

    // 标题
    doc.setFontSize(18)
    doc.setFont('SourceHanSansSC', 'normal', 400)
    doc.text('框架对比测试报告', 105, 20, { align: 'center' })

    // 副标题
    doc.setFontSize(10)
    doc.setFont('SourceHanSansSC', 'normal')
    doc.setTextColor(50, 130, 206)
    doc.text('jsPDF vs VuePrintNb - 相同ECharts配置输出对比', 105, 28, { align: 'center' })
    doc.setTextColor(0, 0, 0)

    // 获取图表图片 - 高质量输出
    const chartImage = compareChart.getDataURL({
      type: 'png',
      pixelRatio: 3, // 超高清输出
      backgroundColor: '#fff',
    })

    // 添加图表说明
    doc.setFontSize(12)
    doc.setFont('SourceHanSansSC', 'normal')
    doc.text('测试配置说明：', 15, 40)

    doc.setFontSize(10)
    doc.text('• Grid配置: left: 8%, right: 8%, bottom: 18%, top: 22%', 20, 48)
    doc.text('• 数据点: [120, 200, 150, 80, 170, 210] (1月-6月)', 20, 55)
    doc.text('• 图表类型: 折线图 + 面积填充', 20, 62)
    doc.text('• 输出方式: jsPDF精确坐标定位 + 高清PNG嵌入', 20, 69)

    // 添加图表 - 精确定位
    doc.addImage(chartImage, 'PNG', 15, 75, 180, 100)

    // 添加分析结论
    doc.setFontSize(12)
    doc.setFont('SourceHanSansSC', 'normal', 400)
    doc.text('对比结论：', 15, 185)

    doc.setFontSize(10)
    doc.setFont('SourceHanSansSC', 'normal')
    doc.setTextColor(34, 197, 94) // 绿色
    doc.text('jsPDF优势：', 20, 195)
    doc.setTextColor(0, 0, 0)
    doc.text('   1. 图表完整显示，6月数据点和标签不会被裁剪', 25, 202)
    doc.text('   2. 精确的坐标控制，不受浏览器打印引擎限制', 25, 209)
    doc.text('   3. 高质量PNG输出（pixelRatio: 3），图表清晰度高', 25, 216)
    doc.text('   4. 可控的页面边距和布局，适合复杂文档', 25, 223)

    doc.setTextColor(245, 158, 11) // 橙色
    doc.text('VuePrintNb局限：', 20, 233)
    doc.setTextColor(0, 0, 0)
    doc.text('   1. 依赖浏览器打印引擎，图表右侧可能被裁剪', 25, 240)
    doc.text('   2. Canvas与文字布局可能重叠，需要额外优化', 25, 247)
    doc.text('   3. 打印预览效果受浏览器和打印机驱动影响', 25, 254)

    // 页脚
    doc.setFontSize(8)
    doc.setTextColor(128, 128, 128)
    doc.text('测试时间: ' + currentDate.value + ' | 框架版本: jsPDF 2.5.1, ECharts 5.x', 105, 285, {
      align: 'center',
    })

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)

    statusMessage.value = '✅ 对比测试PDF已生成，请查看打印预览'
  } catch (err) {
    statusMessage.value = '生成失败: ' + (err as Error).message
  } finally {
    loading.value = false
  }
}

// ==================== 高级功能函数 ====================

// 高级1: 表格生成 (autoTable)
const advanced1Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成表格PDF...'

  try {
    const doc = await createChineseJsPDF()

    doc.setFontSize(16)
    doc.text('员工信息表', 105, 15, { align: 'center' })

    // 注意: jsPDF-autoTable 需要单独安装
    // 这里使用模拟的表格绘制
    const headers = ['姓名', '部门', '职位', '工资']
    const data = [
      ['张三', '技术部', '前端工程师', '¥15,000'],
      ['李四', '产品部', '产品经理', '¥18,000'],
      ['王五', '设计部', 'UI设计师', '¥14,000'],
      ['赵六', '运营部', '运营专员', '¥13,000'],
      ['孙七', '市场部', '市场专员', '¥13,000'],
    ]

    let y = 30
    const cellWidth = 45
    const cellHeight = 10

    // 绘制表头
    doc.setFillColor(102, 126, 234)
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    headers.forEach((header, i) => {
      doc.rect(10 + i * cellWidth, y, cellWidth, cellHeight, 'F')
      doc.text(header, 10 + i * cellWidth + cellWidth / 2, y + 7, { align: 'center' })
    })

    // 绘制数据行
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    data.forEach((row, rowIndex) => {
      y += cellHeight
      row.forEach((cell, cellIndex) => {
        doc.rect(10 + cellIndex * cellWidth, y, cellWidth, cellHeight)
        doc.text(cell, 10 + cellIndex * cellWidth + cellWidth / 2, y + 7, { align: 'center' })
      })
    })

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('table-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
    statusMessage.value = ''
  } finally {
    loading.value = false
  }
}

// 高级2: 自动分页处理
const advanced2Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成多页PDF...'

  try {
    const doc = await createChineseJsPDF()
    const pageHeight = doc.internal.pageSize.height
    const margin = 20
    let yPosition = margin

    doc.setFontSize(14)
    doc.text('自动分页演示', 105, yPosition, { align: 'center' })
    yPosition += 15

    doc.setFontSize(10)
    const lineHeight = 8

    for (let i = 0; i < autoPageLines.value; i++) {
      // 检查是否需要换页
      if (yPosition > pageHeight - margin) {
        doc.addPage()
        yPosition = margin
      }

      doc.text(`第 ${i + 1} 行内容 - 这是自动分页的演示文本`, 10, yPosition)
      yPosition += lineHeight
    }

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('auto-page-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
    statusMessage.value = ''
  } finally {
    loading.value = false
  }
}

// 高级3: 页眉和页脚
const advanced3Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成带页眉页脚的PDF...'

  try {
    const doc = await createChineseJsPDF()
    const pageCount = 3
    const pageWidth = doc.internal.pageSize.width
    const pageHeight = doc.internal.pageSize.height

    for (let i = 1; i <= pageCount; i++) {
      if (i > 1) doc.addPage()

      // 页眉
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text('公司机密文件', pageWidth / 2, 10, { align: 'center' })
      doc.line(10, 12, pageWidth - 10, 12)

      // 内容
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text(`第 ${i} 页内容`, 10, 30)

      doc.setFontSize(12)
      doc.text('这是文档的主要内容区域。', 10, 45)
      doc.text('页眉显示文档标题，页脚显示页码。', 10, 55)

      // 页脚
      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.line(10, pageHeight - 15, pageWidth - 10, pageHeight - 15)
      doc.text(`第 ${i}/${pageCount} 页`, pageWidth / 2, pageHeight - 10, { align: 'center' })
      doc.text(currentDate.value, pageWidth - 10, pageHeight - 10, { align: 'right' })
    }

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('header-footer-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
    statusMessage.value = ''
  } finally {
    loading.value = false
  }
}

// 高级4: 文本换行和对齐
const advanced4Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成文本对齐PDF...'

  try {
    const doc = await createChineseJsPDF()
    const pageWidth = doc.internal.pageSize.width

    doc.setFontSize(16)
    doc.text('文本换行和对齐演示', pageWidth / 2, 20, { align: 'center' })

    // 长文本自动换行
    const longText =
      '这是一段很长的文本内容，用于演示jsPDF的文本自动换行功能。当文本超过指定宽度时，splitTextToSize方法会自动将其分割成多行，确保内容不会超出页面边界。这个功能对于处理动态内容非常有用，可以避免文本溢出页面。'

    doc.setFontSize(12)
    const maxWidth = 180
    const lines = doc.splitTextToSize(longText, maxWidth)
    doc.text(lines, 10, 40)

    // 对齐演示
    const demoY = 90
    doc.setFontSize(14)

    // 左对齐
    doc.text('← 左对齐文本 (align: left)', 10, demoY)

    // 居中对齐
    doc.text('居中对齐文本 (align: center)', pageWidth / 2, demoY + 15, { align: 'center' })

    // 右对齐
    doc.text('右对齐文本 (align: right) →', pageWidth - 10, demoY + 30, { align: 'right' })

    // 两端对齐演示
    doc.setFontSize(10)
    doc.text('注意: jsPDF 支持 left、center、right 三种对齐方式。', 10, demoY + 50)

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('text-align-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
    statusMessage.value = ''
  } finally {
    loading.value = false
  }
}

// 高级5: 链接和书签
const advanced5Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成带链接的PDF...'

  try {
    const doc = await createChineseJsPDF()

    doc.setFontSize(16)
    doc.text('PDF链接演示', 10, 20)

    // 外部链接
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 255)
    doc.textWithLink('访问 jsPDF GitHub 仓库', 10, 40, { url: 'https://github.com/parallax/jsPDF' })

    doc.setTextColor(0, 0, 0)
    doc.text('(点击上方蓝色文字访问外部链接)', 10, 50)

    // 内部链接
    doc.setTextColor(0, 0, 255)
    doc.textWithLink('点击跳转到第二页', 10, 70, { pageNumber: 2 })

    doc.setTextColor(0, 0, 0)
    doc.text('(点击上方蓝色文字跳转到第二页)', 10, 80)

    // 第二页
    doc.addPage()
    doc.setFontSize(16)
    doc.text('第二页内容', 10, 20)

    doc.setFontSize(12)
    doc.text('您已经通过内部链接跳转到这里！', 10, 40)

    doc.setTextColor(0, 0, 255)
    doc.textWithLink('返回第一页', 10, 60, { pageNumber: 1 })

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('links-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
    statusMessage.value = ''
  } finally {
    loading.value = false
  }
}

// 高级6: 水印和背景
const advanced6Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成带水印的PDF...'

  try {
    const doc = await createChineseJsPDF()
    const pageWidth = doc.internal.pageSize.width
    const pageHeight = doc.internal.pageSize.height

    // 添加水印
    doc.saveGraphicsState()
    const GState = (doc as any).GState
    doc.setGState(new GState({ opacity: 0.2 }))
    doc.setFontSize(60)
    doc.setTextColor(200, 200, 200)

    // 旋转文字作为水印
    const watermarkText = '机密文件'
    doc.text(watermarkText, pageWidth / 2, pageHeight / 2, {
      align: 'center',
      angle: 45,
    })

    doc.restoreGraphicsState()

    // 添加正常内容
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.text('带水印的文档', 10, 20)

    doc.setFontSize(12)
    doc.text('这是一个包含水印的PDF文档示例。', 10, 40)
    doc.text('水印以半透明形式显示在背景中，', 10, 50)
    doc.text('不会影响正常内容的阅读。', 10, 60)

    // 添加更多内容
    const content = [
      '水印通常用于：',
      '1. 标识文档的机密性或所有权',
      '2. 防止未经授权的复制和分发',
      '3. 标记文档的状态（如草稿、审核中等）',
      '4. 增强文档的品牌识别度',
    ]

    let y = 80
    content.forEach((line) => {
      doc.text(line, 10, y)
      y += 10
    })

    const blob = (doc as any).output ? (doc as any).output('blob') : null
    if (blob) await openBlobInPrintWindow(blob)
    else doc.save('watermark-example.pdf')
    statusMessage.value = ''
  } catch (error) {
    console.error('PDF生成错误:', error)
    alert('PDF生成失败: ' + error)
    statusMessage.value = ''
  } finally {
    loading.value = false
  }
}

const generateBasicPDF = async () => {
  loading.value = true
  statusMessage.value = '正在加载中文字体...'

  try {
    // 创建支持中文的 PDF
    const doc = await createChineseJsPDF()

    statusMessage.value = '正在生成 PDF...'
    // 标题 - 中文
    doc.setFontSize(24)
    doc.text('jsPDF 中文示例文档', 105, 20, { align: 'center' })

    // 副标题
    doc.setFontSize(14)
    doc.setFont('SourceHanSansSC', 'bold')
    doc.text('基础 PDF 生成演示', 105, 35, { align: 'center' })

    // 正文
    doc.setFont('SourceHanSansSC', 'normal')
    doc.setFontSize(12)
    doc.text('这是一个使用 jsPDF 生成的中文 PDF 文档。', 20, 55)
    doc.text('jsPDF 是一个强大的客户端 PDF 生成库，支持中文显示。', 20, 65)
    doc.text('通过加载思源黑体字体，我们可以完美显示中文内容。', 20, 75)

    // 绘制一些图形
    doc.setDrawColor(102, 126, 234)
    doc.rect(20, 90, 170, 50)

    doc.setFillColor(102, 126, 234)
    doc.circle(105, 165, 20, 'F')

    // 添加更多中文内容
    doc.setFontSize(10)
    doc.text('✅ 支持中文字符', 30, 105)
    doc.text('✅ 支持粗体和常规字体', 30, 115)
    doc.text('✅ 完美渲染中文标点符号', 30, 125)

    // 保存
    doc.save('jspdf-chinese-basic.pdf')

    statusMessage.value = '✅ PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('PDF 生成失败:', error)
    statusMessage.value = '❌ PDF 生成失败'
  } finally {
    loading.value = false
  }
}

const generateTablePDF = async () => {
  loading.value = true
  statusMessage.value = '正在加载中文字体...'

  try {
    const doc = await createChineseJsPDF()

    statusMessage.value = '正在生成表格 PDF...'

    doc.setFontSize(18)
    doc.text('前端打印框架对比', 105, 15, { align: 'center' })

    // 手动创建中文表格
    const headers = ['框架名称', '包大小', '性能', '评分']
    const data = [
      ['Print.js', '10KB', '快速', '⭐⭐⭐⭐'],
      ['jsPDF', '150KB', '良好', '⭐⭐⭐⭐'],
      ['pdfmake', '600KB', '良好', '⭐⭐⭐⭐⭐'],
      ['html2canvas', '180KB', '中等', '⭐⭐⭐⭐'],
    ]

    let y = 30
    const colWidth = 45
    const rowHeight = 10

    // 表头
    doc.setFillColor(102, 126, 234)
    doc.setTextColor(255, 255, 255)
    doc.setFont('SourceHanSansSC', 'bold')
    doc.rect(20, y, colWidth * 4, rowHeight, 'F')

    doc.setFontSize(11)
    headers.forEach((header, i) => {
      doc.text(header, 22 + i * colWidth, y + 7)
    })

    // 数据行
    doc.setTextColor(0, 0, 0)
    doc.setFont('SourceHanSansSC', 'normal')
    y += rowHeight

    data.forEach((row, rowIndex) => {
      if (rowIndex % 2 === 0) {
        doc.setFillColor(247, 250, 252)
        doc.rect(20, y, colWidth * 4, rowHeight, 'F')
      }

      row.forEach((cell, colIndex) => {
        doc.text(cell, 22 + colIndex * colWidth, y + 7)
      })

      y += rowHeight
    })

    doc.save('jspdf-chinese-table.pdf')
    statusMessage.value = '✅ 表格 PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('表格 PDF 生成失败:', error)
    statusMessage.value = '❌ 表格 PDF 生成失败'
  } finally {
    loading.value = false
  }
}

const generateMultiPagePDF = async () => {
  loading.value = true
  statusMessage.value = '正在加载中文字体...'

  try {
    const doc = await createChineseJsPDF()
    const pageHeight = doc.internal.pageSize.height

    statusMessage.value = '正在生成多页 PDF...'

    // 第一页
    doc.setFontSize(20)
    doc.setFont('SourceHanSansSC', 'bold')
    doc.text('多页 PDF 文档示例', 105, 20, { align: 'center' })

    doc.setFontSize(12)
    doc.setFont('SourceHanSansSC', 'normal')
    doc.text('这是第 1 页', 20, 40)
    doc.text('本示例演示了如何使用 jsPDF 创建多页中文文档。', 20, 50)

    let y = 60
    for (let i = 0; i < 20; i++) {
      if (y > pageHeight - 20) {
        doc.addPage()
        y = 20
        doc.setFont('SourceHanSansSC', 'bold')
        doc.text(`第 ${(doc.internal as any).getNumberOfPages()} 页`, 105, 10, { align: 'center' })
        doc.setFont('SourceHanSansSC', 'normal')
      }
      doc.text(`第 ${i + 1} 行：这是多页文档的示例内容，用于演示自动分页功能。`, 20, y)
      y += 10
    }

    // 最后一页添加页码
    const totalPages = (doc.internal as any).getNumberOfPages()
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)
      doc.setFontSize(10)
      doc.setFont('SourceHanSansSC', 'normal')
      doc.text(`第 ${i} 页 / 共 ${totalPages} 页`, 105, pageHeight - 10, { align: 'center' })
    }

    doc.save('jspdf-chinese-multipage.pdf')
    statusMessage.value = '✅ 多页 PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('多页 PDF 生成失败:', error)
    statusMessage.value = '❌ 多页 PDF 生成失败'
  } finally {
    loading.value = false
  }
}

const generateAdvancedPDF = async () => {
  loading.value = true
  statusMessage.value = '正在加载中文字体...'

  try {
    const doc = await createChineseJsPDF()

    statusMessage.value = '正在生成高级 PDF...'

    // 背景色
    doc.setFillColor(102, 126, 234)
    doc.rect(0, 0, 210, 40, 'F')

    // 白色文字标题
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont('SourceHanSansSC', 'bold')
    doc.text('高级 PDF 报告', 105, 25, { align: 'center' })

    // 重置文字颜色
    doc.setTextColor(0, 0, 0)

    // 日期
    doc.setFontSize(10)
    doc.setFont('SourceHanSansSC', 'normal')
    doc.text(`生成日期: ${new Date().toLocaleDateString('zh-CN')}`, 20, 50)

    // 分节
    doc.setFontSize(16)
    doc.setTextColor(102, 126, 234)
    doc.setFont('SourceHanSansSC', 'bold')
    doc.text('1. 项目简介', 20, 65)

    doc.setFontSize(11)
    doc.setTextColor(74, 85, 104)
    doc.setFont('SourceHanSansSC', 'normal')
    const introText =
      '本文档展示了 jsPDF 的高级 PDF 生成能力，包括自定义样式、颜色、布局和中文支持。'
    doc.text(introText, 20, 75, { maxWidth: 170 })

    // 卡片样式框
    doc.setDrawColor(226, 232, 240)
    doc.setFillColor(247, 250, 252)
    doc.roundedRect(20, 90, 170, 30, 3, 3, 'FD')

    doc.setFontSize(14)
    doc.setTextColor(45, 55, 72)
    doc.setFont('SourceHanSansSC', 'bold')
    doc.text('核心功能', 25, 100)

    doc.setFontSize(10)
    doc.setTextColor(74, 85, 104)
    doc.setFont('SourceHanSansSC', 'normal')
    doc.text('• 支持矢量图形', 25, 108)
    doc.text('• 自定义字体和颜色', 25, 115)

    // 图表模拟
    doc.setFontSize(16)
    doc.setTextColor(102, 126, 234)
    // 绘制柱状图
    const barData = [80, 65, 90, 75]
    const barColors: [number, number, number][] = [
      [102, 126, 234],
      [72, 187, 120],
      [66, 153, 225],
      [237, 137, 54],
    ]
    const barLabels = ['速度', '质量', '功能', '易用性']

    let xPos = 30
    barData.forEach((value, index) => {
      const barHeight = value * 0.5
      const color = barColors[index] ?? [0, 0, 0]
      doc.setFillColor(color[0], color[1], color[2])
      doc.rect(xPos, 185 - barHeight, 30, barHeight, 'F')

      doc.setFontSize(9)
      doc.setTextColor(0, 0, 0)
      doc.setFont('SourceHanSansSC', 'normal')
      const label = barLabels[index] ?? ''
      doc.text(label, xPos + 15, 192, { align: 'center' })
      doc.text(`${value}%`, xPos + 15, 180 - barHeight, { align: 'center' })

      xPos += 40
    })

    // 页脚
    doc.setFontSize(8)
    doc.setTextColor(160, 174, 192)
    doc.text('由 jsPDF 生成 | 第 1 页', 105, 285, { align: 'center' })

    doc.save('jspdf-chinese-advanced.pdf')
    statusMessage.value = '✅ 高级 PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('高级 PDF 生成失败:', error)
    statusMessage.value = '❌ 高级 PDF 生成失败'
  } finally {
    loading.value = false
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

.section-title {
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

/* 示例标签样式 */
.example-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #718096;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: #f7fafc;
  color: #2d3748;
}

.tab-button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 6px 6px 0 0;
  border-bottom-color: transparent;
}

/* 示例内容区 */
.example-content {
  min-height: 400px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.example-content h3 {
  color: #2d3748;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.example-content > div > p {
  color: #718096;
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* 代码显示区 */
.code-display {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}

.code-display h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.code-display pre {
  margin: 0;
  overflow-x: auto;
}

.code-display code {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #2d3748;
}

/* 演示内容区 */
.demo-content {
  background: white;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.demo-content h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

/* 预览框 */
.preview-box {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.preview-box p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.preview-box .note {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  color: #718096;
  font-style: italic;
}

/* 页面预览 */
.page-preview {
  padding: 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin: 0.5rem 0;
}

/* 选择输入框 */
.select-input {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0 0.5rem;
}

/* 分隔线 */
.divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 3rem 0;
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

.btn:hover {
  background: #5568d3;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status-message {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 6px;
  background: #e6f4ea;
  color: #1e7e34;
  font-weight: 500;
  text-align: center;
}

.status-message.error {
  background: #fce8e6;
  color: #c5221f;
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

.preview-area {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  min-height: 300px;
}

.preview-area h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.pdf-canvas {
  background: white;
  min-height: 200px;
  border-radius: 4px;
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

/* 高级功能样式 */
.advanced-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.data-table th,
.data-table td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: center;
}

.data-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.data-table tr:nth-child(even) {
  background: #f7fafc;
}

.number-input {
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  margin: 0 0.5rem;
  width: 100px;
  text-align: center;
}

.preview-box {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.preview-box p {
  margin: 0.5rem 0;
}

.preview-box .note {
  color: #718096;
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 1rem;
}
</style>
