<template>
  <div class="architecture-page">
    <header class="page-header">
      <h1>🏗️ 底层架构分析对比</h1>
      <p class="subtitle">深入理解9种打印框架的技术原理与选型依据</p>
    </header>

    <!-- 选项卡切换 -->
    <div class="tabs">
      <button
        v-for="(tab, index) in architectureTabs"
        :key="index"
        :class="['tab-button', { active: currentArchTab === index }]"
        @click="currentArchTab = index"
      >
        {{ tab }}
      </button>
    </div>

    <!-- 选项卡内容 -->
    <div class="tab-content">
      <!-- Tab 0: 三层架构图 -->
      <div v-if="currentArchTab === 0" class="arch-overview">
        <div class="arch-diagram">
          <div class="arch-layer layer-browser">
            <h3>🌐 浏览器原生能力层</h3>
            <div class="arch-boxes">
              <div class="arch-box">
                <strong>1️⃣ 原生打印</strong>
                <code>window.print()</code>
                <p class="arch-explain">
                  浏览器内置的打印API，直接调用系统打印对话框。无需任何第三方库，通过CSS @media
                  print控制打印样式，是最轻量的方案。
                </p>
              </div>
              <div class="arch-box">
                <strong>2️⃣ Canvas API</strong>
                <code>canvas.toDataURL()</code>
                <p class="arch-explain">
                  将HTML元素渲染为Canvas画布，再导出为PNG/JPEG图片。核心是html2canvas库，能够将DOM结构和CSS样式转换为像素数据，实现"所见即所得"的截图效果。
                </p>
              </div>
              <div class="arch-box">
                <strong>3️⃣ DOM/CSS渲染</strong>
                <code>document.write()</code>
                <p class="arch-explain">
                  通过动态创建iframe或新窗口，将HTML内容写入其中并触发打印。保留完整的DOM结构和交互能力，常用于打印指定区域内容。
                </p>
              </div>
            </div>
          </div>

          <div class="arch-arrow">⬇️ 封装与抽象 ⬇️</div>

          <div class="arch-layer layer-frameworks">
            <h3>📦 框架封装层</h3>
            <div class="framework-groups">
              <div class="fw-group">
                <h4>基于原生打印</h4>
                <ul>
                  <li>Print.js</li>
                  <li>print-html-element</li>
                  <li>vue3-print-nb</li>
                </ul>
                <span class="tech-badge">window.print()</span>
              </div>
              <div class="fw-group">
                <h4>基于Canvas转图</h4>
                <ul>
                  <li>html2canvas</li>
                  <li>html2pdf.js</li>
                  <li>jsPDF (部分)</li>
                  <li>pdfmake (部分)</li>
                </ul>
                <span class="tech-badge">Canvas → PNG</span>
              </div>
              <div class="fw-group">
                <h4>原生PDF生成</h4>
                <ul>
                  <li>jsPDF</li>
                  <li>pdfmake</li>
                  <li>PDF-LIB</li>
                </ul>
                <span class="tech-badge">PDF字节流</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 打印流程详解 -->
        <div class="print-flow-explanation">
          <h3>🔄 三类框架的完整打印流程</h3>
          <div class="flow-comparison-container">
            <!-- 原生打印方案 -->
            <div class="flow-path">
              <h4>⚡ 原生打印方案</h4>
              <p class="flow-description">Print.js、vue3-print-nb、print-html-element</p>
              <div class="flow-diagram">
                <div class="flow-item">原始HTML</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">document.write()</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">iframe/新窗口</div>
                <div class="flow-connector">→</div>
                <div class="flow-item highlight-success">window.print()</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">浏览器打印引擎</div>
              </div>
              <div class="flow-code-sample">
                <pre><code>const printWindow = window.open('', '_blank')
printWindow.document.write(htmlContent)  // ← 写入HTML
printWindow.print()                      // ← 触发打印</code></pre>
              </div>
              <div class="flow-feature">
                <span class="feature-badge success">最快</span>
                <span class="feature-badge success">极轻</span>
                <span class="feature-badge warning">只能打印</span>
              </div>
            </div>

            <!-- Canvas转图方案 -->
            <div class="flow-path">
              <h4>🟢 Canvas转图方案</h4>
              <p class="flow-description">html2canvas、html2pdf.js</p>
              <div class="flow-diagram">
                <div class="flow-item">DOM元素</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">html2canvas</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">Canvas绘制</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">toDataURL()</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">PNG图片</div>
                <div class="flow-connector">→</div>
                <div class="flow-item highlight-info">&lt;img&gt;标签</div>
                <div class="flow-connector">→</div>
                <div class="flow-item highlight-success">window.print()</div>
              </div>
              <div class="flow-code-sample">
                <pre><code>const canvas = await html2canvas(element)
const imgData = canvas.toDataURL('image/png')
const printWindow = window.open('', '_blank')
printWindow.document.write(`&lt;img src="${imgData}"&gt;`)
printWindow.print()  // ← 打印PNG图片</code></pre>
              </div>
              <div class="flow-feature">
                <span class="feature-badge">所见即所得</span>
                <span class="feature-badge warning">转换耗时</span>
                <span class="feature-badge warning">文件大</span>
              </div>
            </div>

            <!-- PDF生成方案 -->
            <div class="flow-path">
              <h4>🟣 PDF生成方案</h4>
              <p class="flow-description">jsPDF、pdfmake、PDF-LIB</p>
              <div class="flow-diagram">
                <div class="flow-item">代码描述</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">API调用</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">PDF字节流</div>
                <div class="flow-connector">→</div>
                <div class="flow-item">Blob对象</div>
                <div class="flow-connector">→</div>
                <div class="flow-item highlight-info">PDF文件</div>
                <div class="flow-connector">→</div>
                <div class="flow-item highlight-success">download()或打印</div>
              </div>
              <div class="flow-code-sample">
                <pre><code>const doc = new jsPDF()
doc.text('Hello', 10, 10)
doc.save('file.pdf')  // ← 生成PDF文件
// 或用iframe打印PDF</code></pre>
              </div>
              <div class="flow-feature">
                <span class="feature-badge success">可下载</span>
                <span class="feature-badge success">矢量</span>
                <span class="feature-badge">控制复杂</span>
              </div>
            </div>
          </div>

          <!-- 关键理解 -->
          <div class="flow-key-insight">
            <h4>💡 关键理解</h4>
            <div class="insight-boxes">
              <div class="insight-box">
                <strong>window.print() 是所有打印的终点</strong>
                <p>
                  无论用哪个框架，最后都要调用浏览器的打印API。框架的区别只是"打印什么内容"和"转换方式"。
                </p>
              </div>
              <div class="insight-box">
                <strong>转换成本决定框架选择</strong>
                <p>
                  原生方案→直接用DOM；Canvas方案→需要计算布局；PDF方案→需要代码描述。转换成本越低，性能越好。
                </p>
              </div>
              <div class="insight-box">
                <strong>三类方案各有妥协</strong>
                <p>
                  原生方案快但功能弱；Canvas方案所见即所得但有布局问题；PDF方案功能强但用法复杂。
                </p>
              </div>
            </div>
          </div>

          <!-- 实际打印效果对比演示 -->
          <div
            class="detailed-comparison"
            style="margin-top: 2rem; border-top: 2px solid #e2e8f0; padding-top: 2rem"
          >
            <h4>🎯 实际打印效果对比演示</h4>
            <p style="color: #4a5568; margin-bottom: 1.5rem">
              点击下方按钮，真实触发打印预览，亲自体验三种方案的差异！
            </p>

            <!-- 交互式演示区域 -->
            <div class="interactive-demo">
              <!-- 演示卡片 -->
              <div class="demo-section">
                <h5>演示卡片（复杂样式）</h5>
                <div id="print-demo-card" ref="printDemoCard" class="demo-card actual">
                  <div class="card-header">产品销售报告</div>
                  <div class="card-content">
                    <div class="stat-item">
                      <span class="stat-label">Q1销售额</span>
                      <span class="stat-value">￥ 1,234,567</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">增长率</span>
                      <span class="stat-value highlight">+28.5%</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-label">市场占有率</span>
                      <span class="stat-value">42.3%</span>
                    </div>
                  </div>
                  <div class="card-footer">
                    <span class="badge">优秀</span>
                    <span class="time">2025-06-01</span>
                  </div>
                </div>
                <div class="effect-labels">
                  <span class="label-tag">✨ 蓝紫渐变</span>
                  <span class="label-tag">🌫️ 阴影效果</span>
                  <span class="label-tag">🔵 圆角边框</span>
                </div>
              </div>

              <!-- 打印按钮 -->
              <div class="demo-actions">
                <button class="print-button native" @click="printWithNative">
                  <span class="button-icon">⚡</span>
                  <div class="button-content">
                    <strong>原生打印</strong>
                    <span>Print.js等方案</span>
                  </div>
                </button>
                <button class="print-button canvas" @click="printWithCanvas">
                  <span class="button-icon">🟢</span>
                  <div class="button-content">
                    <strong>Canvas转图打印</strong>
                    <span>html2canvas方案</span>
                  </div>
                </button>
                <button class="print-button pdf" @click="printWithPDF">
                  <span class="button-icon">🟣</span>
                  <div class="button-content">
                    <strong>PDF生成方案</strong>
                    <span>jsPDF等方案</span>
                  </div>
                </button>
              </div>

              <!-- 预期结果说明 -->
              <div class="expected-results">
                <div class="result-item">
                  <h6>❌ 原生打印</h6>
                  <p>直接打印HTML，渐变和阴影可能丢失（取决于浏览器打印引擎）</p>
                </div>
                <div class="result-item">
                  <h6>✅ Canvas转图</h6>
                  <p>截图后打印PNG，所有样式完全保留，但文件较大</p>
                </div>
                <div class="result-item result-pdf">
                  <h6>⚙️ PDF生成</h6>
                  <p>
                    用代码手动绘制每个元素（渐变用50个矩形模拟、阴影用半透明矩形、文字需指定坐标），可生成矢量PDF
                  </p>
                </div>
              </div>
            </div>

            <!-- 新增：布局错误实际案例 -->
            <div
              class="layout-error-demo"
              style="margin-top: 3rem; padding-top: 2rem; border-top: 3px dashed #e2e8f0"
            >
              <h4>🔬 实际案例：布局计算错误演示</h4>
              <p style="color: #4a5568; margin-bottom: 1.5rem">
                下方是一个复杂的Flexbox布局卡片。观察原生打印与Canvas转图在布局上的差异！
              </p>

              <!-- 复杂布局演示卡片 -->
              <div class="demo-section">
                <h5>复杂Flexbox布局卡片</h5>
                <div id="layout-demo-card" ref="layoutDemoCard" class="layout-test-card">
                  <div class="layout-header">
                    <span class="header-tag">Dashboard</span>
                    <span class="header-time">2026-01-06</span>
                  </div>
                  <div class="layout-content">
                    <div class="metric-row">
                      <div class="metric-box">
                        <div class="metric-icon">👥</div>
                        <div class="metric-info">
                          <span class="metric-label">用户数</span>
                          <span class="metric-value">12,345</span>
                        </div>
                      </div>
                      <div class="metric-box">
                        <div class="metric-icon">💰</div>
                        <div class="metric-info">
                          <span class="metric-label">收入</span>
                          <span class="metric-value">￥89.2万</span>
                        </div>
                      </div>
                      <div class="metric-box">
                        <div class="metric-icon">📈</div>
                        <div class="metric-info">
                          <span class="metric-label">增长率</span>
                          <span class="metric-value">+42%</span>
                        </div>
                      </div>
                    </div>
                    <div class="progress-section">
                      <div class="progress-label-row">
                        <span>项目进度</span>
                        <span>75%</span>
                      </div>
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layout-features">
                  <span class="feature-tag">✨ display: flex</span>
                  <span class="feature-tag">📏 justify-content: space-between</span>
                  <span class="feature-tag">🔄 align-items: center</span>
                  <span class="feature-tag">📐 flex-grow</span>
                </div>
              </div>

              <!-- 对比打印按钮 -->
              <div class="demo-actions">
                <button class="print-button native" @click="printLayoutNative">
                  <span class="button-icon">✅</span>
                  <div class="button-content">
                    <strong>原生打印</strong>
                    <span>布局100%准确</span>
                  </div>
                </button>
                <button class="print-button canvas" @click="printLayoutCanvas">
                  <span class="button-icon">⚠️</span>
                  <div class="button-content">
                    <strong>Canvas转图</strong>
                    <span>可能有布局偏差</span>
                  </div>
                </button>
              </div>

              <!-- 问题说明 -->
              <div class="layout-explanation">
                <div class="explanation-card native-card">
                  <h6>✅ 原生打印的优势</h6>
                  <ul>
                    <li><strong>布局引擎：</strong>使用浏览器原生的布局引擎（与网页显示相同）</li>
                    <li><strong>Flex计算：</strong>space-between、align-items等属性完美支持</li>
                    <li><strong>元素间距：</strong>所有元素间距、对齐方式100%准确</li>
                    <li><strong>响应式：</strong>自动适配打印纸张大小</li>
                  </ul>
                  <div class="result-badge success">结果：布局完全精确</div>
                </div>
                <div class="explanation-card canvas-card">
                  <h6>⚠️ Canvas转图的问题</h6>
                  <ul>
                    <li><strong>布局引擎：</strong>html2canvas自己实现的布局计算逻辑</li>
                    <li><strong>Flex计算：</strong>可能无法完全还原复杂flex布局</li>
                    <li><strong>元素间距：</strong>间距、对齐可能有1-3px的偏差</li>
                    <li><strong>边缘情况：</strong>嵌套flex、grid等复杂布局容易出错</li>
                  </ul>
                  <div class="result-badge warning">结果：可能出现细微偏差</div>
                </div>
              </div>

              <!-- 核心理解 -->
              <div class="key-understanding">
                <h6>💡 为什么会有布局差异？</h6>
                <div class="understanding-content">
                  <div class="point">
                    <strong>原生打印：</strong>
                    <p>
                      直接用浏览器的<code>布局引擎（Layout Engine）</code
                      >，这是经过多年优化、支持所有CSS特性的成熟系统。就像你在Chrome中看到的布局，打印出来也是一样的。
                    </p>
                  </div>
                  <div class="point">
                    <strong>Canvas转图：</strong>
                    <p>
                      html2canvas库需要<code>重新实现一套布局计算</code>，它要读取DOM、解析CSS、计算每个元素的位置和大小。由于现代CSS布局（flex、grid、position等）非常复杂，html2canvas无法100%还原所有情况。
                    </p>
                  </div>
                  <div class="conclusion">
                    <strong>结论：</strong>如果你的内容是<span class="highlight"
                      >复杂表格、数据仪表板、精确布局的表单</span
                    >，推荐使用<strong>原生打印方案</strong>以确保布局精确！
                  </div>
                </div>
              </div>
            </div>

            <h4 style="margin-top: 2rem">📋 原生打印 vs Canvas转图：本质区别</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>对比维度</th>
                    <th class="col-native">原生打印方案</th>
                    <th class="col-canvas">Canvas转图方案</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>打印的是什么</strong></td>
                    <td class="col-native">HTML + CSS（向量格式）</td>
                    <td class="col-canvas">PNG图片（光栅格式）</td>
                  </tr>
                  <tr>
                    <td><strong>浏览器做什么</strong></td>
                    <td class="col-native">解析HTML、应用CSS、排版</td>
                    <td class="col-canvas">直接打印图片（无需排版）</td>
                  </tr>
                  <tr>
                    <td><strong>样式处理</strong></td>
                    <td class="col-native">
                      只支持CSS打印样式<br />（@media print、color-adjust等）
                    </td>
                    <td class="col-canvas">完全还原网页样式<br />（因为是截图）</td>
                  </tr>
                  <tr>
                    <td><strong>问题来源</strong></td>
                    <td class="col-native">
                      某些CSS打印中不支持<br />（浏览器打印引擎限制，如渐变、阴影）
                    </td>
                    <td class="col-canvas">
                      布局计算错误<br />（html2canvas需要重新计算布局，可能不准确）
                    </td>
                  </tr>
                  <tr>
                    <td><strong>布局是否准确</strong></td>
                    <td class="col-native">✅ 布局100%准确<br />（浏览器自己的布局引擎）</td>
                    <td class="col-canvas">
                      ⚠️ 布局可能有偏差<br />（html2canvas重新计算，非浏览器原生）
                    </td>
                  </tr>
                  <tr>
                    <td><strong>是否"所见即所得"</strong></td>
                    <td class="col-native">❌ 不是<br />（看到的 ≠ 打印的）</td>
                    <td class="col-canvas">✅ 是<br />（打印的 = 截图的）</td>
                  </tr>
                  <tr>
                    <td><strong>文件大小</strong></td>
                    <td class="col-native">极小（HTML+CSS文本）</td>
                    <td class="col-canvas">很大（PNG图片）</td>
                  </tr>
                  <tr>
                    <td><strong>转换耗时</strong></td>
                    <td class="col-native">很快（直接写入）</td>
                    <td class="col-canvas">很慢（计算布局+绘制）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style="margin-top: 2rem">🎯 何时选择哪个方案</h4>
            <div class="selection-boxes">
              <div class="selection-box native-selection">
                <h5>选择 👉 原生打印</h5>
                <ul>
                  <li>📄 简单的表格、表单、文本</li>
                  <li>⚡ 追求极快的打印速度</li>
                  <li>💾 文件大小要小</li>
                  <li>👍 样式都是浏览器支持的</li>
                </ul>
              </div>

              <div class="selection-box canvas-selection">
                <h5>选择 👉 Canvas转图</h5>
                <ul>
                  <li>🔵 复杂的样式（渐变、阴影、滤镜）</li>
                  <li>📊 图表、可视化（ECharts等）</li>
                  <li>🖼️ 需要"所见即所得"</li>
                  <li>📱 跨浏览器一致性要求高</li>
                </ul>
              </div>

              <div class="selection-box pdf-selection">
                <h5>选择 👉 PDF生成</h5>
                <ul>
                  <li>📁 需要生成可下载的文件</li>
                  <li>🔍 需要矢量清晰度</li>
                  <li>📑 多页分页控制</li>
                  <li>🏢 企业级报表、合同</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 1: 详细分类 -->
      <div v-if="currentArchTab === 1" class="arch-classification">
        <div class="class-category">
          <h3>🔵 第1类：原生打印封装</h3>
          <div class="class-content">
            <div class="class-info">
              <p><strong>核心技术：</strong>直接使用 <code>window.print()</code></p>
              <p><strong>包含框架：</strong>Print.js, vue3-print-nb, print-html-element</p>
            </div>
            <div class="class-workflow">
              <h4>底层流程：</h4>
              <div class="workflow-steps">
                <div class="step">1️⃣ 获取DOM元素</div>
                <div class="step-arrow">→</div>
                <div class="step">2️⃣ 通过iframe/window.open打开</div>
                <div class="step-arrow">→</div>
                <div class="step">3️⃣ 调用window.print()</div>
                <div class="step-arrow">→</div>
                <div class="step">4️⃣ 浏览器打印引擎渲染</div>
              </div>
            </div>
            <div class="class-code">
              <h4>核心代码示例：</h4>
              <pre><code>const iframe = document.createElement('iframe')
iframe.srcdoc = htmlContent          // ← HTML字符串
document.body.appendChild(iframe)
iframe.contentWindow.print()         // ← 原生打印</code></pre>
            </div>
            <div class="class-pros-cons">
              <div class="pros">
                <h4>✅ 优势</h4>
                <ul>
                  <li>极轻量（5-18KB）</li>
                  <li>零性能开销</li>
                  <li>100%原生支持</li>
                  <li>最快（无转换步骤）</li>
                </ul>
              </div>
              <div class="cons">
                <h4>❌ 劣势</h4>
                <ul>
                  <li>无法生成PDF文件</li>
                  <li>依赖浏览器打印引擎</li>
                  <li>无法精确控制布局</li>
                  <li>Canvas支持差</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="class-category">
          <h3>🟢 第2类：Canvas截图 + PDF生成</h3>
          <div class="class-content">
            <div class="class-info">
              <p>
                <strong>核心技术：</strong><code>html2canvas</code> /
                <code>canvas.toDataURL()</code>
              </p>
              <p>
                <strong>包含框架：</strong>html2canvas, html2pdf.js, jsPDF(部分), pdfmake(部分),
                PDF-LIB
              </p>
            </div>
            <div class="class-workflow">
              <h4>底层流程：</h4>
              <div class="workflow-steps">
                <div class="step">1️⃣ DOM渲染到Canvas</div>
                <div class="step-arrow">→</div>
                <div class="step">2️⃣ Canvas导出PNG</div>
                <div class="step-arrow">→</div>
                <div class="step">3️⃣ 嵌入到PDF文档</div>
                <div class="step-arrow">→</div>
                <div class="step">4️⃣ 生成PDF文件</div>
              </div>
            </div>
            <div class="class-code">
              <h4>核心代码示例：</h4>
              <pre><code>const canvas = await html2canvas(dom)    // ← DOM→Canvas
const imgData = canvas.toDataURL()       // ← Canvas→PNG
pdf.addImage(imgData, 'PNG', x, y, w, h) // ← PNG→PDF
pdf.download()                           // ← 保存/打印</code></pre>
            </div>
          </div>
        </div>

        <div class="class-category">
          <h3>🟣 第3类：原生API直接生成PDF</h3>
          <div class="class-content">
            <div class="class-info">
              <p><strong>核心技术：</strong>直接使用PDF二进制格式规范</p>
              <p><strong>包含框架：</strong>jsPDF, pdfmake, PDF-LIB</p>
            </div>
            <div class="class-workflow">
              <h4>底层流程：</h4>
              <div class="workflow-steps">
                <div class="step">1️⃣ 代码描述内容</div>
                <div class="step-arrow">→</div>
                <div class="step">2️⃣ 构建PDF字节流</div>
                <div class="step-arrow">→</div>
                <div class="step">3️⃣ 写入文本/图形</div>
                <div class="step-arrow">→</div>
                <div class="step">4️⃣ 输出PDF文件</div>
              </div>
            </div>
            <div class="class-code">
              <h4>核心代码示例：</h4>
              <pre><code>const doc = new jsPDF()
doc.text('Hello', 10, 10)    // ← 直接写
doc.rect(10, 20, 50, 50)     // ← 直接画
doc.save()</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 2: 完整对比表 -->
      <div v-if="currentArchTab === 2" class="arch-complete-table">
        <table class="complete-comparison">
          <thead>
            <tr>
              <th>框架</th>
              <th>底层技术</th>
              <th>依赖关系</th>
              <th>输出类型</th>
              <th>文件大小</th>
              <th>优势</th>
              <th>劣势</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>window.print()</strong></td>
              <td>浏览器原生</td>
              <td>无</td>
              <td>打印/预览</td>
              <td>0KB</td>
              <td>零依赖、最快</td>
              <td>无法生成文件</td>
            </tr>
            <tr>
              <td><strong>Print.js</strong></td>
              <td>window.print()</td>
              <td>极小包装</td>
              <td>打印</td>
              <td>18KB</td>
              <td>轻量、易用</td>
              <td>功能有限</td>
            </tr>
            <tr>
              <td><strong>vue3-print-nb</strong></td>
              <td>window.print()</td>
              <td>Vue指令</td>
              <td>打印</td>
              <td>15KB</td>
              <td>Vue生态、指令式</td>
              <td>仅限Vue 3</td>
            </tr>
            <tr>
              <td><strong>print-html-element</strong></td>
              <td>window.print()</td>
              <td>极小包装</td>
              <td>打印</td>
              <td>5KB</td>
              <td>超轻量</td>
              <td>功能极简</td>
            </tr>
            <tr class="table-divider">
              <td colspan="7"></td>
            </tr>
            <tr>
              <td><strong>html2canvas</strong></td>
              <td>Canvas绘制引擎</td>
              <td>独立库</td>
              <td>PNG图片</td>
              <td>180KB</td>
              <td>支持CSS、所见即所得</td>
              <td>布局问题、性能差</td>
            </tr>
            <tr>
              <td><strong>html2pdf.js</strong></td>
              <td>html2canvas + jsPDF</td>
              <td>组合库</td>
              <td>PDF</td>
              <td>330KB</td>
              <td>一站式方案</td>
              <td>体积大、性能差</td>
            </tr>
            <tr class="table-divider">
              <td colspan="7"></td>
            </tr>
            <tr>
              <td><strong>jsPDF</strong></td>
              <td>PDF字节流API</td>
              <td>独立库</td>
              <td>PDF</td>
              <td>150KB</td>
              <td>精确控制、矢量</td>
              <td>API复杂</td>
            </tr>
            <tr>
              <td><strong>pdfmake</strong></td>
              <td>PDF生成引擎</td>
              <td>独立库</td>
              <td>PDF</td>
              <td>600KB</td>
              <td>声明式、易用</td>
              <td>体积大</td>
            </tr>
            <tr>
              <td><strong>PDF-LIB</strong></td>
              <td>PDF编辑API</td>
              <td>独立库</td>
              <td>PDF</td>
              <td>200KB</td>
              <td>可编辑现有PDF</td>
              <td>创建复杂、无中文</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Tab 3: 性能深度分析 -->
      <div v-if="currentArchTab === 3" class="arch-performance">
        <div class="perf-analysis">
          <h3>⚡ 为什么Print.js比jsPDF快？</h3>
          <div class="perf-comparison-box">
            <div class="perf-flow">
              <h4>Print.js流程：</h4>
              <div class="flow-steps fast">
                <div class="flow-step">DOM</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">iframe</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">window.print()</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">打印机</div>
              </div>
              <p class="flow-result">速度：⚡ 极快（直接用已渲染的DOM）</p>
            </div>
            <div class="perf-flow">
              <h4>jsPDF流程：</h4>
              <div class="flow-steps slow">
                <div class="flow-step">DOM</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">代码定位</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">PDF字节</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">打印机</div>
              </div>
              <p class="flow-result">速度：🐢 慢（需要计算坐标、构建PDF）</p>
            </div>
          </div>
        </div>

        <div class="perf-analysis">
          <h3>🎨 为什么pdfmake比jsPDF易用？</h3>
          <div class="code-comparison-box">
            <div class="code-sample">
              <h4>jsPDF（命令式，手动定位）</h4>
              <pre><code>doc.setFont()
doc.setFontSize(12)
doc.text('Title', 10, 20)     // ← 手动定位
doc.rect(10, 25, 100, 50)     // ← 手动绘制</code></pre>
            </div>
            <div class="code-sample">
              <h4>pdfmake（声明式，自动布局）</h4>
              <pre><code>{
  content: [
    { text: 'Title', fontSize: 12 },  // ← 声明式
    { columns: [...] }                 // ← 自动布局
  ]
}</code></pre>
            </div>
          </div>
          <p class="conclusion"><strong>结论：</strong>pdfmake有布局引擎，jsPDF没有</p>
        </div>

        <div class="perf-analysis">
          <h3>❌ 为什么html2canvas有布局问题？</h3>
          <div class="layout-problem">
            <h4>html2canvas流程：</h4>
            <div class="problem-steps">
              <div class="problem-step">
                <span class="step-num">1</span>
                <div class="step-content">
                  <strong>解析HTML/CSS</strong>
                  <p>→ DOM Tree</p>
                </div>
              </div>
              <div class="problem-step">
                <span class="step-num">2</span>
                <div class="step-content">
                  <strong>应用样式</strong>
                  <p>→ Style Tree</p>
                </div>
              </div>
              <div class="problem-step problem">
                <span class="step-num">3</span>
                <div class="step-content">
                  <strong>布局计算 ⚠️</strong>
                  <p>→ Layout Tree</p>
                  <p class="error">问题源于这里！</p>
                </div>
              </div>
              <div class="problem-step">
                <span class="step-num">4</span>
                <div class="step-content">
                  <strong>Canvas绘制</strong>
                  <p>→ Rasterization</p>
                </div>
              </div>
            </div>
            <div class="problem-reasons">
              <h4>问题原因：</h4>
              <ul>
                <li>❌ 浏览器的布局引擎很复杂（display, grid, flex等）</li>
                <li>❌ html2canvas需要自己实现布局逻辑</li>
                <li>❌ 无法100%还原浏览器的布局</li>
                <li>✅ jsPDF不用还原，直接用坐标定位，布局完全可控</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 4: 核心理解 -->
      <div v-if="currentArchTab === 4" class="arch-understanding">
        <div class="understanding-box">
          <h3>💡 核心理解：所有框架本质上都在做3件事</h3>
          <div class="three-things">
            <div class="thing-card">
              <div class="thing-num">1️⃣</div>
              <h4>获取内容</h4>
              <div class="thing-options">
                <div class="option">
                  <strong>Print.js</strong>
                  <p>取DOM本身</p>
                </div>
                <div class="option">
                  <strong>html2canvas</strong>
                  <p>DOM转Canvas</p>
                </div>
                <div class="option">
                  <strong>jsPDF</strong>
                  <p>代码描述内容</p>
                </div>
              </div>
            </div>
            <div class="thing-card">
              <div class="thing-num">2️⃣</div>
              <h4>转换格式</h4>
              <div class="thing-options">
                <div class="option">
                  <strong>Print.js</strong>
                  <p>HTML → 打印流</p>
                </div>
                <div class="option">
                  <strong>html2canvas</strong>
                  <p>Canvas → PNG</p>
                </div>
                <div class="option">
                  <strong>jsPDF</strong>
                  <p>代码 → PDF字节流</p>
                </div>
              </div>
            </div>
            <div class="thing-card">
              <div class="thing-num">3️⃣</div>
              <h4>输出</h4>
              <div class="thing-options">
                <div class="option">
                  <strong>Print.js</strong>
                  <p>发给打印机</p>
                </div>
                <div class="option">
                  <strong>html2canvas</strong>
                  <p>PNG blob</p>
                </div>
                <div class="option">
                  <strong>jsPDF</strong>
                  <p>PDF blob</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="selection-guide">
          <h3>🎯 选择框架的本质</h3>
          <div class="guide-content">
            <p class="guide-principle">
              选A还是B <strong>不在于"哪个更强"</strong>，<br />而在于
              <strong>"你的转换成本多高"</strong>
            </p>
            <div class="cost-levels">
              <div class="cost-card low">
                <h4>成本低 ✅</h4>
                <p><strong>Print.js</strong></p>
                <p>直接用DOM</p>
                <span class="cost-badge">最快</span>
              </div>
              <div class="cost-card medium">
                <h4>成本中 ⚠️</h4>
                <p><strong>html2canvas</strong></p>
                <p>DOM→Canvas</p>
                <span class="cost-badge">适中</span>
              </div>
              <div class="cost-card high">
                <h4>成本高但控制力强 🎯</h4>
                <p><strong>jsPDF</strong></p>
                <p>代码描述</p>
                <span class="cost-badge">精确</span>
              </div>
            </div>
          </div>
        </div>

        <div class="best-practice">
          <h3>🌟 最佳实践：为什么ChartComparison用"转图片"？</h3>
          <div class="practice-reasons">
            <div class="reason-item">
              <span class="reason-icon">✅</span>
              <p>避免浏览器布局差异（Print.js的问题）</p>
            </div>
            <div class="reason-item">
              <span class="reason-icon">✅</span>
              <p>避免DOM复杂性（html2canvas的问题）</p>
            </div>
            <div class="reason-item">
              <span class="reason-icon">✅</span>
              <p>保持极简API（不用像jsPDF那样手动定位）</p>
            </div>
          </div>
          <p class="practice-conclusion"><strong>这是最优的平衡点！</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { loadJsPDFChineseFont } from '../utils/fontLoader'

// 架构分析选项卡
const architectureTabs = ref(['架构层次图', '详细分类', '完整对比表', '性能深度分析', '核心理解'])
const currentArchTab = ref(0)

// 打印演示卡片引用
const printDemoCard = ref<HTMLElement | null>(null)

// 布局演示卡片引用
const layoutDemoCard = ref<HTMLElement | null>(null)

// 原生打印方法（模拟Print.js等方案）
const printWithNative = () => {
  if (!printDemoCard.value) return

  const content = printDemoCard.value.outerHTML
  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('请允许弹窗以使用打印功能')
    return
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>原生打印演示</title>
      <style>
        body { font-family: system-ui, sans-serif; padding: 20px; }
        .demo-card.actual {
          width: 280px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .card-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem;
          font-weight: bold;
          text-align: center;
        }
        .card-content {
          padding: 1rem;
          background: white;
        }
        .stat-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .stat-label { color: #718096; }
        .stat-value { font-weight: bold; color: #2d3748; }
        .stat-value.highlight { color: #48bb78; }
        .card-footer {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #f7fafc;
          font-size: 0.85rem;
        }
        .badge {
          background: #48bb78;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }
        .time { color: #718096; }
        .print-info {
          margin-top: 20px;
          padding: 10px;
          background: #fff3cd;
          border-radius: 8px;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <h2>⚡ 原生打印方案演示</h2>
      <p>下方卡片通过 document.write() 写入HTML，由浏览器打印引擎渲染</p>
      ${content}
      <div class="print-info">
        <strong>注意观察：</strong>渐变背景和阴影可能会丢失或显示不同（取决于浏览器打印引擎的支持程度）
      </div>
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
}

// Canvas转图打印方法（模拟html2canvas方案）
const printWithCanvas = async () => {
  if (!printDemoCard.value) return

  try {
    // 强制触发重绘
    printDemoCard.value.offsetHeight

    // 等待DOM完全渲染（包括CSS渐变、动画等）
    await new Promise((resolve) => setTimeout(resolve, 500))

    const canvas = await html2canvas(printDemoCard.value, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      allowTaint: true,
    })

    const imgData = canvas.toDataURL('image/png')
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('请允许弹窗以使用打印功能')
      return
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Canvas转图打印演示</title>
        <style>
          body { font-family: system-ui, sans-serif; padding: 20px; }
          img { max-width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
          .print-info {
            margin-top: 20px;
            padding: 10px;
            background: #d4edda;
            border-radius: 8px;
            font-size: 0.9rem;
          }
        </style>
      </head>
      <body>
        <h2>🟢 Canvas转图方案演示</h2>
        <p>下方是通过 html2canvas 将DOM转为PNG图片后打印</p>
        <img src="${imgData}" alt="打印预览" />
        <div class="print-info">
          <strong>注意观察：</strong>所有样式（渐变、阴影、圆角）都完整保留，因为这是截图！但文件较大。
        </div>
      </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  } catch (error) {
    console.error('Canvas转换失败:', error)
    alert('Canvas转换失败，请查看控制台')
  }
}

// PDF生成打印方法（模拟jsPDF方案）
const printWithPDF = async () => {
  try {
    const doc = new jsPDF()

    // 加载中文字体
    await loadJsPDFChineseFont(doc)
    doc.setFont('SourceHanSansSC', 'normal')

    // 标题
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.text('🟣 PDF生成方案演示', 20, 20)

    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text('下方内容完全由代码手动绘制（非HTML转换）', 20, 30)

    // 绘制渐变背景（用多个矩形模拟）
    const gradientStartX = 20
    const gradientStartY = 45
    const cardWidth = 100
    const headerHeight = 20

    for (let i = 0; i < 50; i++) {
      const ratio = i / 50
      const r = Math.round(102 + (118 - 102) * ratio)
      const g = Math.round(126 + (75 - 126) * ratio)
      const b = Math.round(234 + (162 - 234) * ratio)
      doc.setFillColor(r, g, b)
      doc.rect(
        gradientStartX + (i * cardWidth) / 50,
        gradientStartY,
        cardWidth / 50 + 0.5,
        headerHeight,
        'F',
      )
    }

    // 卡片标题
    doc.setFontSize(12)
    doc.setTextColor(255, 255, 255)
    doc.text('产品销售报告', gradientStartX + cardWidth / 2, gradientStartY + 12, {
      align: 'center',
    })

    // 卡片内容区域
    const contentStartY = gradientStartY + headerHeight
    doc.setFillColor(255, 255, 255)
    doc.rect(gradientStartX, contentStartY, cardWidth, 50, 'F')

    // 绘制数据
    doc.setFontSize(10)
    doc.setTextColor(113, 128, 150)
    doc.text('Q1销售额', gradientStartX + 5, contentStartY + 12)
    doc.setTextColor(45, 55, 72)
    doc.text('￥ 1,234,567', gradientStartX + cardWidth - 5, contentStartY + 12, { align: 'right' })

    doc.setTextColor(113, 128, 150)
    doc.text('增长率', gradientStartX + 5, contentStartY + 26)
    doc.setTextColor(72, 187, 120)
    doc.text('+28.5%', gradientStartX + cardWidth - 5, contentStartY + 26, { align: 'right' })

    doc.setTextColor(113, 128, 150)
    doc.text('市场占有率', gradientStartX + 5, contentStartY + 40)
    doc.setTextColor(45, 55, 72)
    doc.text('42.3%', gradientStartX + cardWidth - 5, contentStartY + 40, { align: 'right' })

    // 卡片底部
    const footerStartY = contentStartY + 50
    doc.setFillColor(247, 250, 252)
    doc.rect(gradientStartX, footerStartY, cardWidth, 15, 'F')

    // 徽章
    doc.setFillColor(72, 187, 120)
    doc.roundedRect(gradientStartX + 5, footerStartY + 4, 18, 7, 2, 2, 'F')
    doc.setFontSize(8)
    doc.setTextColor(255, 255, 255)
    doc.text('优秀', gradientStartX + 14, footerStartY + 9, { align: 'center' })

    // 日期
    doc.setFontSize(9)
    doc.setTextColor(113, 128, 150)
    doc.text('2025-06-01', gradientStartX + cardWidth - 5, footerStartY + 10, { align: 'right' })

    // 边框（模拟阴影效果）
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(0.5)
    doc.rect(gradientStartX, gradientStartY, cardWidth, headerHeight + 50 + 15)

    // 说明文字
    doc.setFontSize(10)
    doc.setTextColor(0, 0, 0)
    doc.text('注意：这个"卡片"是用代码一行行画出来的！', 20, 140)
    doc.text('• 渐变背景：用50个矩形模拟', 25, 150)
    doc.text('• 文字位置：每个都要手动指定(x, y)坐标', 25, 158)
    doc.text('• 阴影效果：需要手动绘制半透明矩形', 25, 166)
    doc.text('• 但优势是：生成的是矢量PDF，可下载、可编辑', 25, 174)

    // 保存或打印
    doc.save('PDF生成演示.pdf')
  } catch (error) {
    console.error('PDF生成失败:', error)
    alert('PDF生成失败，请查看控制台')
  }
}

// 布局演示 - 原生打印
const printLayoutNative = () => {
  if (!layoutDemoCard.value) return

  const content = layoutDemoCard.value.outerHTML
  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('请允许弹窗以使用打印功能')
    return
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>原生打印 - 布局演示</title>
      <style>
        body { font-family: system-ui, sans-serif; padding: 20px; }
        .layout-test-card {
          max-width: 600px;
          margin: 0 auto;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          background: white;
        }
        .layout-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: #f7fafc;
          border-bottom: 2px solid #e2e8f0;
        }
        .header-tag {
          font-weight: bold;
          color: #667eea;
          font-size: 1.1rem;
        }
        .header-time {
          color: #718096;
          font-size: 0.9rem;
        }
        .layout-content {
          padding: 1.5rem;
        }
        .metric-row {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .metric-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        .metric-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        .metric-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex-grow: 1;
        }
        .metric-label {
          color: #718096;
          font-size: 0.85rem;
        }
        .metric-value {
          color: #2d3748;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .progress-section {
          background: #f7fafc;
          padding: 1rem;
          border-radius: 8px;
        }
        .progress-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          color: #4a5568;
        }
        .progress-bar {
          height: 12px;
          background: #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 6px;
        }
        .info-box {
          margin-top: 20px;
          padding: 15px;
          background: #d1fae5;
          border-radius: 8px;
          border-left: 4px solid #48bb78;
        }
      </style>
    </head>
    <body>
      <h2>✅ 原生打印 - Flexbox布局演示</h2>
      <p>下方卡片使用浏览器原生布局引擎渲染，所有flex布局100%准确</p>
      ${content}
      <div class="info-box">
        <strong>✅ 观察要点：</strong>
        <ul style="margin: 8px 0 0 20px;">
          <li>三个指标卡片间距完全一致（justify-content: space-between）</li>
          <li>图标和文字垂直居中对齐（align-items: center）</li>
          <li>进度条的百分比数值右对齐精确</li>
          <li>所有元素的布局与网页显示完全相同</li>
        </ul>
      </div>
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
}

// 布局演示 - Canvas转图
const printLayoutCanvas = async () => {
  if (!layoutDemoCard.value) return

  try {
    // 强制触发重绘
    layoutDemoCard.value.offsetHeight

    // 等待DOM完全渲染（包括CSS渐变、动画等）
    await new Promise((resolve) => setTimeout(resolve, 500))

    const canvas = await html2canvas(layoutDemoCard.value, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      allowTaint: true,
    })

    const imgData = canvas.toDataURL('image/png')
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('请允许弹窗以使用打印功能')
      return
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Canvas转图 - 布局演示</title>
        <style>
          body { font-family: system-ui, sans-serif; padding: 20px; }
          img {
            max-width: 100%;
            border-radius: 12px;
            border: 2px solid #e2e8f0;
            display: block;
            margin: 0 auto;
          }
          .info-box {
            margin-top: 20px;
            padding: 15px;
            background: #fef3c7;
            border-radius: 8px;
            border-left: 4px solid #f59e0b;
          }
        </style>
      </head>
      <body>
        <h2>⚠️ Canvas转图 - Flexbox布局演示</h2>
        <p>下方是通过 html2canvas 截图后转换的PNG图片</p>
        <img src="${imgData}" alt="布局演示" />
        <div class="info-box">
          <strong>⚠️ 观察要点：</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>仔细对比指标卡片之间的间距（可能略有偏差）</li>
            <li>检查图标和文字的对齐方式（可能不完全居中）</li>
            <li>进度条的位置和宽度（可能有1-2px偏差）</li>
            <li>html2canvas需要重新计算flex布局，可能不如浏览器精确</li>
          </ul>
          <p style="margin-top: 10px; font-size: 0.9rem; color: #92400e;">
            <strong>提示：</strong>在简单布局中差异不明显，但在复杂的嵌套flex、grid布局中容易出现偏差。
          </p>
        </div>
      </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  } catch (error) {
    console.error('Canvas转换失败:', error)
    alert('Canvas转换失败，请查看控制台')
  }
}
</script>

<style scoped>
.architecture-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.page-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
}

.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
  overflow-x: auto;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  color: #718096;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tab-button:hover {
  color: #667eea;
}

.tab-button.active {
  color: #667eea;
  border-bottom-color: #667eea;
}

.tab-content {
  min-height: 400px;
  background: white;
  border-radius: 12px;
  padding: 2rem;
}

/* 架构层次图 */
.arch-diagram {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.arch-layer {
  border-radius: 12px;
  padding: 2rem;
}

.layer-browser {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border: 2px solid #667eea;
}

.layer-frameworks {
  background: linear-gradient(135deg, #48bb7815 0%, #10b98115 100%);
  border: 2px solid #48bb78;
}

.arch-layer h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.arch-boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.arch-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.arch-box strong {
  display: block;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.arch-box code {
  display: block;
  background: #f7fafc;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
  color: #667eea;
  margin-bottom: 0.75rem;
}

.arch-explain {
  text-align: left;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0;
  padding-top: 0.5rem;
  border-top: 1px solid #e2e8f0;
}

.arch-arrow {
  text-align: center;
  font-size: 1.5rem;
  color: #718096;
  margin: 1rem 0;
}

.framework-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.fw-group {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fw-group h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.fw-group ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.fw-group li {
  padding: 0.5rem 0;
  color: #4a5568;
  border-bottom: 1px solid #f7fafc;
}

.fw-group li:last-child {
  border-bottom: none;
}

.tech-badge {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* 详细分类 */
.arch-classification {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.class-category {
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.class-category h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
}

.class-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.class-info p {
  margin: 0.5rem 0;
  color: #4a5568;
}

.class-info code {
  background: #f7fafc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #667eea;
  font-size: 0.9rem;
}

.class-workflow h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.workflow-steps {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.step {
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 2px solid #667eea;
  color: #2d3748;
  font-weight: 500;
  font-size: 0.9rem;
}

.step-arrow {
  color: #667eea;
  font-size: 1.2rem;
  font-weight: bold;
}

.class-code {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.class-code h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.class-code pre {
  margin: 0;
  overflow-x: auto;
}

.class-code code {
  color: #1e293b;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
}

.class-pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.pros,
.cons {
  padding: 1.5rem;
  border-radius: 8px;
}

.pros {
  background: #d1fae5;
  border: 2px solid #48bb78;
}

.cons {
  background: #fee2e2;
  border: 2px solid #e53e3e;
}

.pros h4,
.cons h4 {
  margin-bottom: 1rem;
}

.pros ul,
.cons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros li,
.cons li {
  padding: 0.5rem 0;
  color: #2d3748;
}

/* 完整对比表 */
.arch-complete-table {
  overflow-x: auto;
}

.complete-comparison {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.complete-comparison th,
.complete-comparison td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.9rem;
}

.complete-comparison th {
  background: #f7fafc;
  color: #2d3748;
  font-weight: 600;
  white-space: nowrap;
}

.complete-comparison tr:hover {
  background: #f7fafc;
}

.table-divider td {
  height: 0.5rem;
  padding: 0;
  background: #e2e8f0;
}

/* 性能深度分析 */
.arch-performance {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.perf-analysis {
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.perf-analysis h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.perf-comparison-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.perf-flow h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.flow-steps {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  flex-wrap: wrap;
}

.flow-steps.fast {
  background: #d1fae5;
}

.flow-steps.slow {
  background: #fed7d7;
}

.flow-step {
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flow-arrow {
  font-size: 1.2rem;
  font-weight: bold;
}

.flow-result {
  margin-top: 1rem;
  font-weight: 600;
  color: #2d3748;
}

.code-comparison-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.code-sample {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.code-sample h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.code-sample pre {
  margin: 0;
}

.code-sample code {
  color: #1e293b;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
  line-height: 1.8;
}

.conclusion {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
  color: #2d3748;
}

.layout-problem h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.problem-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.problem-step {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e2e8f0;
}

.problem-step.problem {
  background: #fed7d7;
  border-color: #e53e3e;
}

.step-num {
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background: #667eea;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  margin-bottom: 1rem;
}

.problem-step.problem .step-num {
  background: #e53e3e;
}

.step-content strong {
  display: block;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.step-content p {
  margin: 0.25rem 0;
  color: #718096;
  font-size: 0.85rem;
}

.error {
  color: #e53e3e !important;
  font-weight: 600;
}

.problem-reasons {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.problem-reasons h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.problem-reasons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.problem-reasons li {
  padding: 0.5rem 0;
  color: #4a5568;
}

/* 核心理解 */
.arch-understanding {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.understanding-box {
  border: 2px solid #667eea;
  border-radius: 12px;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea05 0%, #764ba205 100%);
}

.understanding-box h3 {
  color: #667eea;
  margin-bottom: 2rem;
  text-align: center;
}

.three-things {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.thing-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.thing-num {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.thing-card h4 {
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
}

.thing-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.option strong {
  display: block;
  color: #667eea;
  margin-bottom: 0.25rem;
}

.option p {
  margin: 0;
  color: #4a5568;
  font-size: 0.85rem;
}

.selection-guide {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.selection-guide h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.guide-content {
  text-align: center;
}

.guide-principle {
  font-size: 1.1rem;
  color: #2d3748;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.cost-levels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.cost-card {
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}

.cost-card.low {
  background: #d1fae5;
  border: 2px solid #48bb78;
}

.cost-card.medium {
  background: #fef3c7;
  border: 2px solid #f59e0b;
}

.cost-card.high {
  background: #dbeafe;
  border: 2px solid #3b82f6;
}

.cost-card h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.cost-card p {
  margin: 0.25rem 0;
  color: #4a5568;
}

.cost-badge {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background: white;
  color: #2d3748;
  font-size: 0.75rem;
  font-weight: 600;
}

.best-practice {
  background: linear-gradient(135deg, #48bb7815 0%, #10b98115 100%);
  border: 2px solid #48bb78;
  border-radius: 12px;
  padding: 2rem;
}

.best-practice h3 {
  color: #48bb78;
  margin-bottom: 1.5rem;
  text-align: center;
}

.practice-reasons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.reason-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
}

.reason-icon {
  font-size: 1.5rem;
}

.reason-item p {
  margin: 0;
  color: #2d3748;
}

.practice-conclusion {
  text-align: center;
  font-size: 1.2rem;
  color: #48bb78;
  margin: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .class-pros-cons,
  .code-comparison-box,
  .cost-levels {
    grid-template-columns: 1fr;
  }

  .workflow-steps,
  .flow-steps {
    flex-direction: column;
    align-items: stretch;
  }

  .step-arrow,
  .flow-arrow {
    transform: rotate(90deg);
  }
}

/* 打印流程详解样式 */
.print-flow-explanation {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
}

.print-flow-explanation h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.flow-comparison-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.flow-path {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.flow-path h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.flow-description {
  color: #718096;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.flow-diagram {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.flow-item {
  background: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid #e2e8f0;
  white-space: nowrap;
}

.flow-item.highlight-success {
  background: #d1fae5;
  border-color: #48bb78;
  color: #22543d;
  font-weight: 600;
}

.flow-item.highlight-info {
  background: #dbeafe;
  border-color: #3b82f6;
  color: #1e40af;
}

.flow-connector {
  color: #a0aec0;
  font-size: 0.9rem;
}

.flow-code-sample {
  background: #1e293b;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.flow-code-sample pre {
  margin: 0;
}

.flow-code-sample code {
  color: #e2e8f0;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.75rem;
  line-height: 1.6;
}

.flow-feature {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.feature-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  background: #e2e8f0;
  color: #4a5568;
}

.feature-badge.success {
  background: #d1fae5;
  color: #22543d;
}

.feature-badge.warning {
  background: #fef3c7;
  color: #92400e;
}

/* 关键理解卡片 */
.flow-key-insight {
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  border: 2px solid #667eea;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.flow-key-insight h4 {
  color: #667eea;
  margin-bottom: 1.5rem;
  text-align: center;
}

.insight-boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.insight-box {
  background: white;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.insight-box strong {
  display: block;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.insight-box p {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.6;
}

/* 交互演示区域 */
.interactive-demo {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.demo-section {
  text-align: center;
  margin-bottom: 2rem;
}

.demo-section h5 {
  color: #2d3748;
  margin-bottom: 1rem;
}

/* 演示卡片样式 */
.demo-card.actual {
  display: inline-block;
  width: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: left;
}

.demo-card .card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  font-weight: bold;
  text-align: center;
}

.demo-card .card-content {
  padding: 1rem;
  background: white;
}

.demo-card .stat-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.demo-card .stat-item:last-child {
  border-bottom: none;
}

.demo-card .stat-label {
  color: #718096;
}

.demo-card .stat-value {
  font-weight: bold;
  color: #2d3748;
}

.demo-card .stat-value.highlight {
  color: #48bb78;
}

.demo-card .card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f7fafc;
  font-size: 0.85rem;
}

.demo-card .badge {
  background: #48bb78;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.demo-card .time {
  color: #718096;
}

.effect-labels {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.label-tag {
  background: #edf2f7;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #4a5568;
}

/* 打印按钮 */
.demo-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.print-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.print-button.native {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
}

.print-button.canvas {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
}

.print-button.pdf {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.print-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.button-icon {
  font-size: 1.5rem;
}

.button-content strong {
  display: block;
  font-size: 1rem;
}

.button-content span {
  font-size: 0.8rem;
  opacity: 0.9;
}

/* 预期结果 */
.expected-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.result-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e53e3e;
}

.result-item:nth-child(2) {
  border-left-color: #48bb78;
}

.result-item.result-pdf {
  border-left-color: #667eea;
}

.result-item h6 {
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.result-item p {
  color: #4a5568;
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}

/* 对比表格 */
.comparison-table-wrapper {
  overflow-x: auto;
  margin-bottom: 2rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.9rem;
}

.comparison-table th {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.comparison-table .col-native {
  background: #fef3c720;
}

.comparison-table .col-canvas {
  background: #d1fae520;
}

/* 选择方案卡片 */
.selection-boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.selection-box {
  padding: 1.5rem;
  border-radius: 12px;
}

.selection-box h5 {
  margin: 0 0 1rem 0;
  color: #2d3748;
}

.selection-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.selection-box li {
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 0.9rem;
}

.native-selection {
  background: #fef3c7;
  border: 2px solid #f59e0b;
}

.canvas-selection {
  background: #d1fae5;
  border: 2px solid #48bb78;
}

.pdf-selection {
  background: #dbeafe;
  border: 2px solid #3b82f6;
}

.detailed-comparison h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

/* 布局错误演示样式 */
.layout-error-demo {
  background: linear-gradient(135deg, #fef3c710 0%, #fbbf2410 100%);
  border-radius: 12px;
  padding: 2rem;
}

.layout-error-demo h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

/* 布局测试卡片 */
.layout-test-card {
  max-width: 600px;
  margin: 1.5rem auto;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #f7fafc;
  border-bottom: 2px solid #e2e8f0;
}

.header-tag {
  font-weight: bold;
  color: #667eea;
  font-size: 1.1rem;
}

.header-time {
  color: #718096;
  font-size: 0.9rem;
}

.layout-content {
  padding: 1.5rem;
}

.metric-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.metric-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease;
}

.metric-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.metric-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.metric-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-grow: 1;
}

.metric-label {
  color: #718096;
  font-size: 0.85rem;
}

.metric-value {
  color: #2d3748;
  font-weight: bold;
  font-size: 1.1rem;
}

.progress-section {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
}

.progress-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: #4a5568;
}

.progress-bar {
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px;
  transition: width 0.3s ease;
}

.layout-features {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.feature-tag {
  background: #edf2f7;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #4a5568;
}

/* 布局说明卡片 */
.layout-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.explanation-card {
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid;
}

.native-card {
  background: #d1fae5;
  border-color: #48bb78;
}

.canvas-card {
  background: #fef3c7;
  border-color: #f59e0b;
}

.explanation-card h6 {
  color: #2d3748;
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.explanation-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.explanation-card li {
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.6;
}

.explanation-card li strong {
  color: #2d3748;
}

.result-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

.result-badge.success {
  background: white;
  color: #22543d;
  border: 2px solid #48bb78;
}

.result-badge.warning {
  background: white;
  color: #92400e;
  border: 2px solid #f59e0b;
}

/* 核心理解卡片 */
.key-understanding {
  margin-top: 2rem;
  background: white;
  border: 2px solid #667eea;
  border-radius: 12px;
  padding: 1.5rem;
}

.key-understanding h6 {
  color: #667eea;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.understanding-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.understanding-content .point {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.understanding-content .point strong {
  display: block;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.understanding-content .point p {
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

.understanding-content .point code {
  background: #e2e8f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #667eea;
}

.understanding-content .conclusion {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #667eea;
  color: #2d3748;
  font-size: 0.95rem;
  line-height: 1.6;
}

.understanding-content .conclusion strong {
  color: #667eea;
}

.understanding-content .highlight {
  background: #fef3c7;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #92400e;
  font-weight: 600;
}
</style>
