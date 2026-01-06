<template>
  <div class="home-page">
    <header class="header">
      <h1>🖨️ 前端现代打印框架调研报告</h1>
      <p class="subtitle">全面的打印方案选型与实践对比</p>
      <div class="meta">
        <span>调研日期：2025年12月</span>
        <span>技术栈：Vue 3 + TypeScript + Vite</span>
      </div>
    </header>

    <nav class="nav-grid">
      <router-link v-for="demo in demos" :key="demo.path" :to="demo.path" class="nav-card">
        <div class="nav-card-icon">{{ demo.icon }}</div>
        <h3>{{ demo.title }}</h3>
        <p>{{ demo.description }}</p>
        <div class="tags">
          <span v-for="tag in demo.tags" :key="tag" :class="`tag tag-${tag.toLowerCase()}`">
            {{ tag }}
          </span>
        </div>
      </router-link>
    </nav>

    <section class="summary">
      <h2>📊 调研总览 - 共计10+种方案</h2>
      <div class="summary-grid">
        <div class="summary-card">
          <h3>超轻量级方案</h3>
          <ul>
            <li><strong>print-html-element</strong> - 仅5KB！</li>
            <li><strong>Print.js</strong> - 简单易用，18KB</li>
            <li><strong>vue3-print-nb</strong> - Vue生态集成</li>
          </ul>
        </div>
        <div class="summary-card">
          <h3>PDF生成方案</h3>
          <ul>
            <li><strong>jsPDF</strong> - 功能强大，矢量图形</li>
            <li><strong>pdfmake</strong> - 声明式API，易用</li>
            <li><strong>PDF-LIB</strong> - 现代化，可编辑PDF</li>
          </ul>
        </div>
        <div class="summary-card">
          <h3>HTML转换方案</h3>
          <ul>
            <li><strong>html2canvas</strong> - 所见即所得</li>
            <li><strong>html2pdf.js</strong> - 一站式方案</li>
          </ul>
        </div>
        <div class="summary-card">
          <h3>原生方案</h3>
          <ul>
            <li><strong>window.print()</strong> - 无需依赖</li>
            <li><strong>CSS @media print</strong> - 精细控制</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="comparison">
      <h2>🎯 核心对比维度</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>方案</th>
              <th>兼容性</th>
              <th>性能</th>
              <th>分页控制</th>
              <th>文件大小</th>
              <th>学习曲线</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>window.print()</strong></td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>⭐⭐⭐</td>
              <td>0KB</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>Print.js</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐</td>
              <td>10KB</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>vue3-print-nb</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐</td>
              <td>15KB</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>jsPDF</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>~150KB</td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>pdfmake</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>~600KB</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>html2canvas</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐</td>
              <td>⭐⭐⭐</td>
              <td>~180KB</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>html2pdf.js</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐</td>
              <td>⭐⭐⭐</td>
              <td>~330KB</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>print-html-element</strong></td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>⭐⭐</td>
              <td>5KB</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td><strong>PDF-LIB</strong></td>
              <td>⭐⭐⭐⭐</td>
              <td>⭐⭐⭐</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>~200KB</td>
              <td>⭐⭐⭐</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="architecture">
      <h2>🏗️ 底层架构分析对比</h2>

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

              <!-- 打印流程详解 -->
              <div class="print-flow-explanation">
                <h3>🔄 三类框架的完整打印流程</h3>
                <div class="flow-comparison-container">
                  <!-- 原生打印方案 -->
                  <div class="flow-path">
                    <h4>🔵 原生打印方案</h4>
                    <p class="flow-description">Print.js、vue3-print-nb、print-html-element</p>
                    <div class="flow-diagram">
                      <div class="flow-item">原始HTML</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">document.write()</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">iframe/新窗口</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item highlight-success">window.print()</div>
                      <div class="flow-connector">↓</div>
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
                    <p class="flow-description">html2canvas、html2pdf.js、ChartComparison</p>
                    <div class="flow-diagram">
                      <div class="flow-item">DOM元素</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">html2canvas</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">Canvas绘制</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">toDataURL()</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">PNG图片</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item highlight-info">&lt;img&gt;标签</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item highlight-success">window.print()</div>
                    </div>
                    <div class="flow-code-sample">
                      <pre><code>const canvas = await html2canvas(element)
const imgData = canvas.toDataURL('image/png')
const printWindow = window.open('', '_blank')
printWindow.document.write(\`&lt;img src="\${imgData}"&gt;\`)
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
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">API调用</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">PDF字节流</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item">Blob对象</div>
                      <div class="flow-connector">↓</div>
                      <div class="flow-item highlight-info">PDF文件</div>
                      <div class="flow-connector">↓</div>
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

                  <!-- 原生 vs Canvas 对比 -->
                  <div
                    class="detailed-comparison"
                    style="margin-top: 2rem; border-top: 2px solid #e2e8f0; padding-top: 2rem"
                  >
                    <h4>🔍 原生打印 vs Canvas转图：本质区别</h4>
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
                              某些CSS打印不支持<br />（浏览器打印引擎限制）
                            </td>
                            <td class="col-canvas">
                              布局计算错误<br />（html2canvas自己计算的布局可能不准）
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

                    <h4 style="margin-top: 2rem">📌 实际打印效果对比演示</h4>
                    <p style="color: #4a5568; margin-bottom: 1.5rem">
                      点击下方按钮，真实触发打印预览，亲自体验两种方案的差异！
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
                              <span class="stat-value">¥ 1,234,567</span>
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
                            <span class="time">2026-01-06</span>
                          </div>
                        </div>
                        <div class="effect-labels">
                          <span class="label-tag">✨ 蓝紫渐变</span>
                          <span class="label-tag">🌑 阴影效果</span>
                          <span class="label-tag">💎 圆角边框</span>
                        </div>
                      </div>

                      <!-- 打印按钮 -->
                      <div class="demo-actions">
                        <button class="print-button native" @click="printWithNative">
                          <span class="button-icon">🔵</span>
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
                      </div>

                      <!-- 预期结果说明 -->
                      <div class="expected-results">
                        <div class="result-item">
                          <h6>❌ 原生打印预期</h6>
                          <p>渐变可能变成纯色，阴影可能消失（取决于浏览器打印引擎）</p>
                        </div>
                        <div class="result-item">
                          <h6>✅ Canvas打印预期</h6>
                          <p>所有样式完全保留，与网页显示完全一致</p>
                        </div>
                      </div>
                    </div>

                    <h4 style="margin-top: 2rem">📋 对比说明</h4>
                    <div class="example-boxes">
                      <div class="example-box">
                        <h5>❌ 原生打印的限制</h5>
                        <div class="example-content">
                          <p><strong>你的网页CSS：</strong></p>
                          <div class="code-sample">
                            <pre><code>.box {
  background: linear-gradient(45deg, #667eea, #764ba2);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}</code></pre>
                          </div>
                          <p><strong>网页显示：</strong>💎 漂亮的蓝紫渐变 + 阴影</p>
                          <p><strong>打印结果：</strong>❌ 可能只有单色背景，没有阴影</p>
                          <p style="color: #718096; font-size: 0.85rem">
                            <em>原因：浏览器打印引擎不支持或限制了这些复杂样式</em>
                          </p>
                        </div>
                      </div>

                      <div class="example-box">
                        <h5>✅ Canvas转图的优势</h5>
                        <div class="example-content">
                          <p><strong>同样的网页CSS：</strong></p>
                          <div class="code-sample">
                            <pre><code>.box {
  background: linear-gradient(45deg, #667eea, #764ba2);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}</code></pre>
                          </div>
                          <p><strong>html2canvas做的：</strong>把网页整个截图，像素级保存</p>
                          <p><strong>打印结果：</strong>✅ 完全一样的蓝紫渐变 + 阴影</p>
                          <p style="color: #718096; font-size: 0.85rem">
                            <em>原因：打印的是图片，不依赖浏览器引擎的支持</em>
                          </p>
                        </div>
                      </div>
                    </div>

                    <h4 style="margin-top: 2rem">🎯 何时选择哪个方案</h4>
                    <div class="selection-boxes">
                      <div class="selection-box native-selection">
                        <h5>选择 👉 原生打印</h5>
                        <ul>
                          <li>📄 简单的表格、表单、文本</li>
                          <li>⚡ 追求极快的打印速度</li>
                          <li>💾 文件大小要小</li>
                          <li>🎨 样式都是浏览器支持的</li>
                        </ul>
                      </div>

                      <div class="selection-box canvas-selection">
                        <h5>选择 👉 Canvas转图</h5>
                        <ul>
                          <li>💎 复杂的样式（渐变、阴影、滤镜）</li>
                          <li>📊 图表、可视化（ECharts等）</li>
                          <li>🎨 必须"所见即所得"</li>
                          <li>⏱️ 转换时间不是瓶颈</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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

              <div class="framework-roles">
                <h4>各框架在此流程中的角色：</h4>
                <div class="role-grid">
                  <div class="role-item">
                    <strong>html2canvas</strong>
                    <p>专门做第1步（DOM→Canvas）</p>
                    <span class="role-badge">转换引擎</span>
                  </div>
                  <div class="role-item">
                    <strong>html2pdf.js</strong>
                    <p>组合使用：html2canvas + jsPDF</p>
                    <span class="role-badge">一站式方案</span>
                  </div>
                  <div class="role-item">
                    <strong>jsPDF</strong>
                    <p>自己做第1步：Canvas 2D API手动绘制</p>
                    <span class="role-badge">轻量但功能有限</span>
                  </div>
                  <div class="role-item">
                    <strong>pdfmake</strong>
                    <p>声明式API构建文档</p>
                    <span class="role-badge">高级易用</span>
                  </div>
                  <div class="role-item">
                    <strong>PDF-LIB</strong>
                    <p>专门编辑现有PDF</p>
                    <span class="role-badge">PDF操作</span>
                  </div>
                </div>
              </div>

              <div class="perf-table-wrapper">
                <h4>性能对比（转8个图表）：</h4>
                <table class="perf-table">
                  <thead>
                    <tr>
                      <th>框架</th>
                      <th>导出时间</th>
                      <th>PDF体积</th>
                      <th>文件总大小</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>html2canvas</td>
                      <td>500ms</td>
                      <td>+800KB</td>
                      <td>1.2MB</td>
                    </tr>
                    <tr>
                      <td>html2pdf.js</td>
                      <td>600ms</td>
                      <td>+900KB</td>
                      <td>1.3MB</td>
                    </tr>
                    <tr>
                      <td>jsPDF(转图片)</td>
                      <td>400ms</td>
                      <td>+700KB</td>
                      <td>1.1MB</td>
                    </tr>
                    <tr>
                      <td>pdfmake(转图片)</td>
                      <td>350ms</td>
                      <td>+600KB</td>
                      <td>1MB</td>
                    </tr>
                    <tr>
                      <td>PDF-LIB(转图片)</td>
                      <td>400ms</td>
                      <td>+700KB</td>
                      <td>1.1MB</td>
                    </tr>
                  </tbody>
                </table>
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
                <div class="code-comparison">
                  <div class="code-block">
                    <h5>jsPDF（命令式）</h5>
                    <pre><code>const doc = new jsPDF()
doc.text('Hello', 10, 10)    // ← 直接写
doc.rect(10, 20, 50, 50)     // ← 直接画
doc.save()</code></pre>
                  </div>
                  <div class="code-block">
                    <h5>pdfmake（声明式）</h5>
                    <pre><code>const docDef = {
  content: [
    { text: 'Hello' },  // ← 声明式
    { text: 'World' }
  ]
}
pdfMake.createPdf(docDef).download()</code></pre>
                  </div>
                </div>
              </div>

              <div class="framework-features">
                <h4>各框架特点：</h4>
                <div class="feature-grid">
                  <div class="feature-card">
                    <h5>jsPDF</h5>
                    <p><strong>底层：</strong>直接操作PDF字节流</p>
                    <p><strong>优势：</strong>极致精确控制、体积最小(150KB)</p>
                    <p><strong>劣势：</strong>API复杂、需手动定位</p>
                  </div>
                  <div class="feature-card">
                    <h5>pdfmake</h5>
                    <p><strong>底层：</strong>声明式API + 自动布局引擎</p>
                    <p><strong>优势：</strong>易用、自动排版(600KB)</p>
                    <p><strong>劣势：</strong>精度不如jsPDF</p>
                  </div>
                  <div class="feature-card">
                    <h5>PDF-LIB</h5>
                    <p><strong>底层：</strong>编辑现有PDF二进制</p>
                    <p><strong>优势：</strong>唯一能编辑的(200KB)</p>
                    <p><strong>劣势：</strong>创建新文档复杂、不支持中文</p>
                  </div>
                </div>
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
                选A还是B <strong>不在于"哪个更强"</strong>，<br />
                而在于 <strong>"你的转换成本多高"</strong>
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
            <p class="practice-conclusion">
              <strong>这是最优的平衡点！</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="recommendations">
      <h2>💡 选型建议</h2>
      <div class="recommendation-grid">
        <div class="recommendation-card">
          <h3>🎯 简单文档打印</h3>
          <p><strong>推荐：window.print() + CSS</strong></p>
          <p>优势：无依赖、高性能、用户可控</p>
          <p>适用：文章、订单、简单报表</p>
        </div>
        <div class="recommendation-card">
          <h3>⚡ 轻量级快速打印</h3>
          <p><strong>推荐：print-html-element / Print.js</strong></p>
          <p>优势：超轻量、极速、简单</p>
          <p>适用：快速打印、对体积敏感项目</p>
        </div>
        <div class="recommendation-card">
          <h3>💚 Vue项目集成</h3>
          <p><strong>推荐：vue3-print-nb</strong></p>
          <p>优势：Vue指令、开箱即用、API简单</p>
          <p>适用：Vue 3项目的快速打印需求</p>
        </div>
        <div class="recommendation-card">
          <h3>📝 复杂PDF生成</h3>
          <p><strong>推荐：pdfmake / jsPDF</strong></p>
          <p>优势：API友好、支持复杂布局、矢量输出</p>
          <p>适用：发票、合同、正式文档</p>
        </div>
        <div class="recommendation-card">
          <h3>📚 PDF编辑操作</h3>
          <p><strong>推荐：PDF-LIB</strong></p>
          <p>优势：可编辑现有PDF、合并、表单填充</p>
          <p>适用：PDF修改、批量处理、文档合并</p>
        </div>
        <div class="recommendation-card">
          <h3>🎨 所见即所得</h3>
          <p><strong>推荐：html2pdf.js / html2canvas</strong></p>
          <p>优势：样式完美还原、一站式方案</p>
          <p>适用：图表、可视化、复杂样式</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2canvas from 'html2canvas'

// 架构分析选项卡
const architectureTabs = ref(['架构层次图', '详细分类', '完整对比表', '性能深度分析', '核心理解'])
const currentArchTab = ref(0)

// 打印演示卡片引用
const printDemoCard = ref<HTMLElement | null>(null)

// 原生打印方法
const printWithNative = () => {
  if (!printDemoCard.value) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('请允许弹出窗口')
    return
  }

  // 获取原始HTML和样式
  const cardHTML = printDemoCard.value.outerHTML

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>原生打印演示</title>
      <style>
        body {
          margin: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .demo-card {
          width: 400px;
          border-radius: 12px;
          padding: 1.5rem;
          /* 注意：这里使用了原生打印，渐变和阴影可能不会显示 */
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
          color: white;
        }
        .card-header {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        }
        .card-content {
          margin-bottom: 1rem;
        }
        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
        }
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .stat-value {
          font-size: 1.2rem;
          font-weight: 700;
        }
        .stat-value.highlight {
          color: #48bb78;
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 2px solid rgba(255, 255, 255, 0.3);
        }
        .badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .time {
          font-size: 0.85rem;
          opacity: 0.8;
        }
        @media print {
          body {
            margin: 0;
          }
        }
      </style>
    </head>
    <body>
      ${cardHTML}
    </body>
    </html>
  `)

  printWindow.document.close()
  setTimeout(() => {
    printWindow.print()
  }, 250)
}

// Canvas转图打印方法
const printWithCanvas = async () => {
  if (!printDemoCard.value) return

  try {
    // 使用html2canvas截图
    const canvas = await html2canvas(printDemoCard.value, {
      scale: 2, // 提高清晰度
      backgroundColor: null,
      logging: false,
    })

    // 转换为图片
    const imgData = canvas.toDataURL('image/png')

    // 创建新窗口打印
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('请允许弹出窗口')
      return
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Canvas转图打印演示</title>
        <style>
          body {
            margin: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          @media print {
            body {
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        <img src="${imgData}" alt="打印内容" />
      </body>
      </html>
    `)

    printWindow.document.close()
    setTimeout(() => {
      printWindow.print()
    }, 250)
  } catch (error) {
    console.error('Canvas转换失败:', error)
    alert('转换失败，请查看控制台')
  }
}

const demos = [
  {
    path: '/native-print',
    icon: '🌐',
    title: '浏览器原生打印',
    description: 'window.print() + CSS @media print',
    tags: ['高性能', '零依赖', '兼容性好'],
  },
  {
    path: '/printjs',
    icon: '⚡',
    title: 'Print.js',
    description: '轻量级打印库，支持多种数据类型',
    tags: ['轻量', '易用', '多类型'],
  },
  {
    path: '/vue-print',
    icon: '🎯',
    title: 'vue3-print-nb',
    description: 'Vue 3 专用打印指令插件',
    tags: ['Vue生态', '指令式', '简单'],
  },
  {
    path: '/jspdf',
    icon: '📄',
    title: 'jsPDF',
    description: '强大的客户端PDF生成库',
    tags: ['PDF', '矢量图', '可扩展'],
  },
  {
    path: '/pdfmake',
    icon: '📋',
    title: 'pdfmake',
    description: '声明式PDF生成，API友好',
    tags: ['PDF', '声明式', '易用'],
  },
  {
    path: '/html2canvas',
    icon: '🖼️',
    title: 'html2canvas',
    description: 'HTML转Canvas，所见即所得',
    tags: ['截图', '样式还原', '图片'],
  },
  {
    path: '/html2pdf',
    icon: '🔄',
    title: 'html2pdf.js',
    description: '集成方案，HTML直接转PDF',
    tags: ['一站式', 'HTML转PDF', '便捷'],
  },
  {
    path: '/pdf-lib',
    icon: '📚',
    title: 'PDF-LIB',
    description: '现代化PDF操作库，支持编辑',
    tags: ['PDF编辑', '合并', '表单'],
  },
  {
    path: '/print-html-element',
    icon: '🎯',
    title: 'print-html-element',
    description: '超轻量级DOM元素打印（5KB）',
    tags: ['轻量', '简单', '快速'],
  },
  {
    path: '/performance',
    icon: '⚡',
    title: '性能对比测试',
    description: '各方案性能基准测试',
    tags: ['性能', '对比', '基准'],
  },
  {
    path: '/compatibility',
    icon: '🔍',
    title: '兼容性测试',
    description: '浏览器兼容性检测',
    tags: ['兼容性', '浏览器', '检测'],
  },
  {
    path: '/pagination',
    icon: '📑',
    title: '自定义分页',
    description: '分页控制方案对比',
    tags: ['分页', '控制', '自定义'],
  },
  {
    path: '/chart-comparison',
    icon: '📊',
    title: '图表打印对比',
    description: '9种框架图表打印效果实时对比',
    tags: ['图表', 'ECharts', '对比测试'],
  },
]
</script>

<style scoped>
.home-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  gap: 2rem;
  justify-content: center;
  font-size: 0.9rem;
  opacity: 0.8;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.nav-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
}

.nav-card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.nav-card h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.nav-card p {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tag-高性能,
.tag-性能 {
  background: #d1fae5;
  color: #065f46;
}

.tag-零依赖,
.tag-兼容性好,
.tag-兼容性 {
  background: #dbeafe;
  color: #1e40af;
}

.tag-轻量,
.tag-易用,
.tag-简单 {
  background: #fef3c7;
  color: #92400e;
}

.tag-vue生态,
.tag-指令式 {
  background: #d1fae5;
  color: #065f46;
}

.tag-pdf {
  background: #fee2e2;
  color: #991b1b;
}

.tag-矢量图,
.tag-可扩展,
.tag-声明式 {
  background: #e0e7ff;
  color: #3730a3;
}

.tag-截图,
.tag-样式还原,
.tag-图片 {
  background: #fce7f3;
  color: #831843;
}

.tag-一站式,
.tag-便捷,
.tag-html转pdf {
  background: #fef3c7;
  color: #92400e;
}

.tag-对比,
.tag-基准,
.tag-检测,
.tag-浏览器 {
  background: #f3e8ff;
  color: #6b21a8;
}

.tag-分页,
.tag-控制,
.tag-自定义,
.tag-多类型 {
  background: #dbeafe;
  color: #1e40af;
}

.tag-图表,
.tag-echarts,
.tag-对比测试 {
  background: #fef3c7;
  color: #92400e;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #2d3748;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.summary-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.summary-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.summary-card ul {
  list-style: none;
  padding: 0;
}

.summary-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f7fafc;
}

.summary-card li:last-child {
  border-bottom: none;
}

.comparison-table {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
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

tr:hover {
  background: #f7fafc;
}

.recommendation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.recommendation-card {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border: 2px solid #667eea;
  border-radius: 8px;
  padding: 1.5rem;
}

.recommendation-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.recommendation-card p {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.recommendation-card p strong {
  color: #2d3748;
}

/* 底层架构分析样式 */
.architecture {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
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
  background: #1a202c;
  color: #68d391;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
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

.arch-box strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.arch-box code {
  background: #f7fafc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #667eea;
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

.framework-roles h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.role-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.role-item {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.role-item strong {
  display: block;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.role-item p {
  font-size: 0.85rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.role-badge {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
}

.perf-table-wrapper {
  margin-top: 1rem;
}

.perf-table-wrapper h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.perf-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.perf-table th,
.perf-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.perf-table th {
  background: #f7fafc;
  color: #2d3748;
  font-weight: 600;
}

.perf-table tr:hover {
  background: #f7fafc;
}

.code-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.code-block {
  background: #1a202c;
  padding: 1rem;
  border-radius: 8px;
}

.code-block h5 {
  color: white;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  color: #68d391;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
}

.framework-features h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.feature-card {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #667eea;
}

.feature-card h5 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.feature-card p {
  margin: 0.5rem 0;
  color: #4a5568;
  font-size: 0.9rem;
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
  position: relative;
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

/* 打印流程详解 */
.print-flow-explanation {
  margin-top: 2rem;
  border-top: 2px solid #e2e8f0;
  padding-top: 2rem;
}

.print-flow-explanation h3 {
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

.flow-comparison-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.flow-path {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.flow-path:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.flow-path h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.flow-description {
  color: #718096;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.flow-diagram {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.flow-item {
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 2px solid #e2e8f0;
  text-align: center;
  font-weight: 500;
  color: #2d3748;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.flow-item.highlight-success {
  background: #d1fae5;
  border-color: #48bb78;
  color: #065f46;
  font-weight: 600;
}

.flow-item.highlight-info {
  background: #dbeafe;
  border-color: #3b82f6;
  color: #1e40af;
  font-weight: 600;
}

.flow-connector {
  text-align: center;
  color: #667eea;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.flow-code-sample {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
}

.flow-code-sample pre {
  margin: 0;
}

.flow-code-sample code {
  color: #1e293b;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
  line-height: 1.8;
  display: block;
  overflow-x: auto;
}

.flow-feature {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.feature-badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #f7fafc;
  color: #2d3748;
  border: 1px solid #e2e8f0;
}

.feature-badge.success {
  background: #d1fae5;
  color: #065f46;
  border-color: #48bb78;
}

.feature-badge.warning {
  background: #fed7d7;
  color: #742a2a;
  border-color: #e53e3e;
}

/* 关键理解 */
.flow-key-insight {
  margin-top: 2rem;
  border-top: 2px solid #e2e8f0;
  padding-top: 2rem;
}

.flow-key-insight h4 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.insight-boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.insight-box {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.insight-box strong {
  display: block;
  color: #667eea;
  margin-bottom: 0.75rem;
}

.insight-box p {
  margin: 0;
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* 交互式演示区域 */
.interactive-demo {
  background: white;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  padding: 2rem;
  margin-bottom: 2rem;
}

.demo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.demo-section h5 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1rem;
}

/* 演示卡片样式 */
.demo-card {
  width: 100%;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.demo-card.actual {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  color: white;
}

#print-demo-card {
  max-width: 400px;
}

.card-header {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.card-content {
  margin-bottom: 1rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 700;
}

.stat-value.highlight {
  color: #48bb78;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.time {
  font-size: 0.85rem;
  opacity: 0.8;
}

/* 效果标签 */
.effect-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.label-tag {
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #f7fafc;
  color: #4a5568;
  border: 1px solid #e2e8f0;
}

/* 打印按钮 */
.demo-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.print-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.print-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.print-button.native {
  border-color: #1565c0;
}

.print-button.native:hover {
  background: #e3f2fd;
}

.print-button.canvas {
  border-color: #6a1b9a;
}

.print-button.canvas:hover {
  background: #f3e5f5;
}

.button-icon {
  font-size: 2rem;
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.button-content strong {
  color: #2d3748;
  font-size: 1rem;
}

.button-content span {
  color: #718096;
  font-size: 0.85rem;
}

/* 预期结果 */
.expected-results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.result-item {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #cbd5e0;
}

.result-item h6 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.result-item p {
  margin: 0;
  color: #4a5568;
  font-size: 0.85rem;
  line-height: 1.6;
}

/* 详细对比表 */
.detailed-comparison {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.detailed-comparison h4 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

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

.comparison-table thead {
  background: #2d3748;
}

.comparison-table th {
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
  font-size: 0.9rem;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table .col-native {
  background: #e3f2fd;
  border-right: 2px solid #90caf9;
}

.comparison-table .col-canvas {
  background: #f3e5f5;
  border-left: 2px solid #ce93d8;
}

.comparison-table th.col-native {
  background: #1565c0;
}

.comparison-table th.col-canvas {
  background: #6a1b9a;
}

/* 例子框 */
.example-boxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.example-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.example-box h5 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.example-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.example-content p {
  margin: 0;
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.6;
}

.example-content .code-sample {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.example-content .code-sample pre {
  margin: 0;
}

.example-content .code-sample code {
  color: #1e293b;
  font-size: 0.8rem;
  line-height: 1.6;
}

/* 实际案例可视化对比 */
.visual-comparison {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.comparison-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.comparison-item h5 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
}

.comparison-desc {
  color: #718096;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* 演示卡片 */
.demo-card {
  width: 100%;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.demo-card.actual {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  color: white;
}

.demo-card.print-native {
  background: #e2e8f0;
  box-shadow: none;
  color: #2d3748;
  border: 2px dashed #cbd5e0;
}

.card-header {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.demo-card.print-native .card-header {
  border-bottom-color: #cbd5e0;
}

.card-content {
  margin-bottom: 1rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 700;
}

.stat-value.highlight {
  color: #48bb78;
}

.demo-card.print-native .stat-value.highlight {
  color: #38a169;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
}

.demo-card.print-native .card-footer {
  border-top-color: #cbd5e0;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.demo-card.print-native .badge {
  background: #cbd5e0;
  color: #2d3748;
}

.time {
  font-size: 0.85rem;
  opacity: 0.8;
}

/* 效果标签 */
.effect-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.label-tag {
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #f7fafc;
  color: #4a5568;
  border: 1px solid #e2e8f0;
}

.label-tag.loss {
  background: #fed7d7;
  color: #742a2a;
  border-color: #fc8181;
}

.label-tag.success {
  background: #d1fae5;
  color: #065f46;
  border-color: #48bb78;
}

.note {
  background: #f7fafc;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  border: 1px solid #e2e8f0;
}

/* 选择框 */
.selection-boxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.selection-box {
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.selection-box.native-selection {
  background: #e3f2fd;
  border-left-color: #1565c0;
}

.selection-box.canvas-selection {
  background: #f3e5f5;
  border-left-color: #6a1b9a;
}

.selection-box h5 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
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

@media (max-width: 768px) {
  .tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .class-pros-cons,
  .code-comparison,
  .code-comparison-box,
  .cost-levels,
  .demo-actions,
  .expected-results {
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

  .demo-card {
    font-size: 0.9rem;
  }

  .print-button {
    padding: 1rem;
  }
}
</style>
