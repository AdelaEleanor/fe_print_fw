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
        <h2 class="section-title">📝 指令功能演示</h2>

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
          <!-- 示例1: 基础指令打印 -->
          <div v-if="currentExample === 0">
            <h3>示例 1: v-print 指令基础用法</h3>
            <p>最简单的使用方式，直接使用 v-print 指令绑定配置对象。</p>

            <div class="controls">
              <button v-print="example1Config" class="btn btn-primary">🖨️ 指令打印</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>&lt;template&gt;
  &lt;button v-print="printConfig"&gt;打印&lt;/button&gt;
  &lt;div id="print-content"&gt;...&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const printConfig = {
  id: 'print-content',
  popTitle: '打印标题'
}
&lt;/script&gt;</code></pre>
            </div>

            <div class="demo-content" id="example1-content">
              <h2>vue3-print-nb 指令演示</h2>
              <p><strong>日期:</strong> {{ currentDate }}</p>
              <p>vue3-print-nb 是专为 Vue 3 设计的打印插件，提供了简洁的指令式 API。</p>
              <ul>
                <li>✅ 使用 v-print 指令即可实现打印</li>
                <li>✅ 支持灵活的配置选项</li>
                <li>✅ 完美集成 Vue 3 生态</li>
                <li>✅ 轻量级，只有 8KB</li>
              </ul>
            </div>
          </div>

          <!-- 示例2: 编程式调用 -->
          <div v-else-if="currentExample === 1">
            <h3>示例 2: 编程式调用打印</h3>
            <p>通过新窗口打印方式实现编程式打印，适用于需要在代码逻辑中触发打印的场景。</p>

            <div class="controls">
              <button @click="example2Print" class="btn btn-primary">📄 编程式打印</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>&lt;script setup&gt;
// 编程式打印 - 使用新窗口方式
const handlePrint = () =&gt; {
  const element = document.getElementById('content-id')
  if (!element) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(\`
    &lt;html&gt;
    &lt;head&gt;&lt;title&gt;打印标题&lt;/title&gt;&lt;/head&gt;
    &lt;body&gt;\${element.outerHTML}&lt;/body&gt;
    &lt;/html&gt;
  \`)
  printWindow.document.close()

  setTimeout(() =&gt; {
    printWindow.print()
    printWindow.close()
  }, 300)
}
&lt;/script&gt;</code></pre>
            </div>

            <div class="demo-content" id="example2-content">
              <h2>编程式打印演示</h2>
              <p>编程式调用提供了更多的灵活性，可以在任何函数中触发打印。</p>
              <div class="info-box">
                <h4>适用场景：</h4>
                <ul>
                  <li>需要在异步操作后打印</li>
                  <li>需要在条件判断后打印</li>
                  <li>需要动态生成打印内容</li>
                  <li>需要在复杂逻辑中触发打印</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 示例3: 自定义样式 -->
          <div v-else-if="currentExample === 2">
            <h3>示例 3: 自定义打印样式</h3>
            <p>通过 extraHead 参数注入自定义 CSS 样式。</p>

            <div class="controls">
              <button v-print="example3Config" class="btn btn-primary">🎨 自定义样式打印</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const printConfig = {
  id: 'content-id',
  extraHead: `
    &lt;style&gt;
      @media print {
        body { font-size: 14px; }
        h2 { color: #667eea; }
        .highlight { background: yellow; }
      }
    &lt;/style&gt;
  `
}</code></pre>
            </div>

            <div class="demo-content" id="example3-content">
              <h2>自定义样式演示</h2>
              <p class="highlight" style="background: #fef3c7; padding: 0.5rem">
                这段文字在打印时会有高亮背景
              </p>
              <div
                style="border: 2px solid #667eea; padding: 1rem; border-radius: 8px; margin: 1rem 0"
              >
                <h3>样式测试区域</h3>
                <p>这个区域展示了自定义样式的效果。</p>
                <ul>
                  <li>字体大小: 14px</li>
                  <li>标题颜色: #667eea</li>
                  <li>边框: 2px solid</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 示例4: 隐藏元素 -->
          <div v-else-if="currentExample === 3">
            <h3>示例 4: 隐藏不需要打印的元素</h3>
            <p>使用 noPrint 配置隐藏指定的元素。</p>

            <div class="controls">
              <button v-print="example4Config" class="btn btn-primary">🖨️ 打印(隐藏元素)</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const printConfig = {
  id: 'content-id',
  noPrint: '.no-print, .hide-in-print'
}</code></pre>
            </div>

            <div class="demo-content" id="example4-content">
              <h2>隐藏元素演示</h2>
              <p>下面的红色警告框在打印时将被隐藏：</p>
              <div
                class="no-print"
                style="
                  background: #fed7d7;
                  border: 2px solid #fc8181;
                  padding: 1rem;
                  margin: 1rem 0;
                  border-radius: 8px;
                "
              >
                <strong>⚠️ 此内容不会被打印</strong>
                <p>这是一个带有 no-print 类的元素，打印时会自动隐藏。</p>
              </div>
              <p>而这段正常内容会被打印出来。</p>
              <ul>
                <li>正常内容 1</li>
                <li>正常内容 2</li>
                <li class="no-print" style="color: #e53e3e">❌ 这行不会打印</li>
                <li>正常内容 3</li>
              </ul>
            </div>
          </div>

          <!-- 示例5: 预览功能 -->
          <div v-else-if="currentExample === 4">
            <h3>示例 5: 打印前预览</h3>
            <p>启用 preview 选项，在打印前显示预览窗口。</p>

            <div class="controls">
              <button v-print="example5Config" class="btn btn-primary">👁️ 预览后打印</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const printConfig = {
  id: 'content-id',
  preview: true,
  previewTitle: '打印预览',
  previewPrintBtnLabel: '确认打印',
  previewBeforeOpenCallback: () => {
    console.log('预览窗口即将打开')
  },
  previewOpenCallback: () => {
    console.log('预览窗口已打开')
  }
}</code></pre>
            </div>

            <div class="demo-content" id="example5-content">
              <h2>打印预览演示</h2>
              <p>点击按钮后会先打开预览窗口，确认无误后再执行打印。</p>
              <div class="info-box">
                <h4>预览功能优势：</h4>
                <ul>
                  <li>✅ 打印前查看实际效果</li>
                  <li>✅ 避免浪费纸张</li>
                  <li>✅ 提供确认和取消选项</li>
                  <li>✅ 支持自定义预览窗口标题</li>
                  <li>✅ 支持预览前后回调函数</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 示例6: 打印标题和URL -->
          <div v-else-if="currentExample === 5">
            <h3>示例 6: 自定义打印标题</h3>
            <p>使用 popTitle 设置打印窗口的标题。</p>

            <div class="controls">
              <button v-print="example6Config" class="btn btn-primary">📄 自定义标题打印</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const printConfig = {
  id: 'content-id',
  popTitle: '公司年度报告 - 2024',
  // 也可以使用 extraCss 引入外部样式
  extraCss: 'https://example.com/print.css'
}</code></pre>
            </div>

            <div class="demo-content" id="example6-content">
              <h2>年度报告摘要</h2>
              <p><strong>报告期间:</strong> 2024年1月 - 2024年12月</p>
              <p><strong>报告编号:</strong> RPT-2024-001</p>

              <h3>关键指标</h3>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>指标</th>
                    <th>数值</th>
                    <th>增长率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>用户数</td>
                    <td>100,000</td>
                    <td>+25%</td>
                  </tr>
                  <tr>
                    <td>打印次数</td>
                    <td>500,000</td>
                    <td>+40%</td>
                  </tr>
                  <tr>
                    <td>满意度</td>
                    <td>98%</td>
                    <td>+5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 示例7: ECharts图表 -->
          <div v-else-if="currentExample === 6">
            <h3>示例 7: ECharts图表打印</h3>
            <p><strong>✨ vue3-print-nb优势：</strong>完美集成Vue 3生态，v-print指令一键打印。</p>
            <p style="color: #e53e3e; font-size: 0.9rem">
              <strong>⚠️ 注意：</strong>
              浏览器打印引擎对<strong>canvas元素的尺寸和间距处理</strong>可能不一致，需要额外调整样式。
            </p>

            <div class="controls">
              <button v-print="example7Config" class="btn btn-primary">📊 打印图表</button>
            </div>

            <div class="demo-content" id="example7-content">
              <h2 style="text-align: center; margin-bottom: 25px">销售数据看板</h2>
              <div style="padding: 10px 0">
                <div
                  ref="vueprintChartRef"
                  style="
                    height: 250px;
                    width: 100%;
                    border: 1px solid #e2e8f0;
                    margin-bottom: 20px;
                    display: block;
                  "
                ></div>
                <p style="text-align: center; color: #718096; margin: 0; padding-top: 10px">
                  月度销售数据
                </p>
              </div>
            </div>
          </div>

          <!-- 示例8: 优化后的ECharts图表 -->
          <div v-else-if="currentExample === 7">
            <h3>示例 8: ✅ 优化方案：解决打印问题</h3>
            <p style="color: #48bb78; font-weight: 500">
              <strong>✨ 终极方案：</strong>表格布局 + 空白占位 + 独立行，彻底解决重叠问题。
            </p>

            <div class="controls">
              <button v-print="example8Config" class="btn btn-primary" style="background: #48bb78">
                🎯 打印优化版
              </button>
            </div>

            <div class="demo-content" id="example8-content">
              <div style="background: #f7fafc; padding: 25px; border-radius: 8px">
                <h2
                  style="text-align: center; margin-bottom: 35px; color: #2d3748; font-size: 20px"
                >
                  📊 销售数据看板（优化版）
                </h2>

                <!-- 使用表格布局，图表和文字分别占一行 -->
                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    background: white;
                    border-radius: 8px;
                  "
                >
                  <tr>
                    <td style="padding: 25px 30px 0 -30px; vertical-align: top">
                      <!-- 图表容器 -->
                      <div
                        ref="vueprintChartOptimizedRef"
                        style="height: 280px; width: 100%; display: block"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 80px; padding: 0">
                      <!-- 空白占位行，确保图表和文字分离 -->
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 25px 25px 25px; border-top: 3px solid #e2e8f0">
                      <!-- 文字标题独立行 -->
                      <p
                        style="
                          text-align: center;
                          color: #2d3748;
                          margin: 0;
                          font-weight: 600;
                          font-size: 15px;
                        "
                      >
                        📈 月度销售数据分析
                      </p>
                    </td>
                  </tr>
                </table>

                <div
                  style="
                    margin-top: 25px;
                    padding: 15px;
                    background: white;
                    border-radius: 8px;
                    border-left: 4px solid #48bb78;
                  "
                >
                  <p style="margin: 0; color: #2d3748; font-size: 14px">
                    <strong>✅ 优化要点：</strong>
                    表格布局 + 图表独立行（减少左侧空白20px）+ 80px空白占位行 + 文字独立行 +
                    强化打印样式
                  </p>
                </div>
              </div>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>// ✅ 终极优化方案：使用表格分离图表和文字
&lt;table style="width: 100%; border-collapse: collapse;"&gt;
  &lt;tr&gt;
    &lt;td style="padding: 25px 30px 0 20px;"&gt;
      &lt;!-- 图表独占一行，减少左侧空白 --&gt;
      &lt;div ref="chart" style="height: 280px;"&gt;&lt;/div&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td style="height: 80px;"&gt;
      &lt;!-- 空白占位行：物理分隔，增加到80px --&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td style="padding: 20px 25px; border-top: 3px solid #000;"&gt;
      &lt;!-- 文字独占一行 --&gt;
      &lt;p&gt;月度销售数据分析&lt;/p&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;

const printConfig = {
  extraHead: `
    &lt;style&gt;
      @media print {
        /* 表格行固定高度 */
        #example8-content table tr:first-child td {
          height: 340px !important;  /* 图表行 */
          padding: 25px 30px 20px 20px !important;
        }
        #example8-content table tr:nth-child(2) td {
          height: 80px !important;   /* 空白占位行 */
        }
        /* Canvas禁止浮动和定位 */
        #example8-content canvas {
          position: static !important;
          float: none !important;
        }
      }
    &lt;/style&gt;
  `
};</code></pre>
            </div>
          </div>
        </div>

        <!-- 高级场景演示 -->
        <div class="advanced-section">
          <h2 class="section-title">🚀 复杂场景演示</h2>

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
            <!-- 高级1: 打印回调函数 -->
            <div v-if="currentAdvanced === 0">
              <h3>高级 1: 打印前后回调</h3>
              <p>使用回调函数在打印前后执行自定义逻辑，如数据准备、状态更新等。</p>

              <div class="controls">
                <button v-print="advanced1Config" class="btn btn-primary">🔄 打印(带回调)</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>const printConfig = {
  id: 'content-id',
  beforeOpenCallback: () => {
    console.log('打印窗口即将打开')
    // 打印前的准备工作
  },
  openCallback: () => {
    console.log('打印窗口已打开')
  },
  closeCallback: () => {
    console.log('打印窗口已关闭')
    // 清理工作或状态重置
  },
  clickMounted: () => {
    console.log('点击打印按钮')
  }
}</code></pre>
              </div>

              <div class="demo-content" id="advanced1-content">
                <div v-if="callbackStatus" class="status-box" :class="callbackStatus.type">
                  <p>
                    <strong>{{ callbackStatus.message }}</strong>
                  </p>
                  <p>
                    <small>{{ callbackStatus.time }}</small>
                  </p>
                </div>

                <h2>回调函数演示</h2>
                <p>点击打印按钮，观察控制台输出和下方的状态提示。</p>
                <ul>
                  <li>beforeOpenCallback: 打印窗口打开前</li>
                  <li>openCallback: 打印窗口打开后</li>
                  <li>closeCallback: 打印窗口关闭后</li>
                  <li>clickMounted: 点击打印按钮时</li>
                </ul>
              </div>
            </div>

            <!-- 高级2: 动态内容打印 -->
            <div v-else-if="currentAdvanced === 1">
              <h3>高级 2: 动态生成内容打印</h3>
              <p>根据数据动态生成内容，然后打印生成的结果。</p>

              <div class="controls">
                <button @click="generateContent" class="btn btn-secondary">📝 生成内容</button>
                <button v-print="advanced2Config" class="btn btn-primary">🖨️ 打印动态内容</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>const generateContent = () => {
  dynamicItems.value = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `项目 ${i + 1}`,
    status: Math.random() > 0.5 ? '完成' : '进行中'
  }))
}

const printConfig = {
  id: 'dynamic-content',
  popTitle: '动态内容打印'
}</code></pre>
              </div>

              <div class="demo-content" id="advanced2-content">
                <h2>动态内容列表</h2>
                <p>
                  当前项目数: <strong>{{ dynamicItems.length }}</strong>
                </p>
                <table v-if="dynamicItems.length > 0" class="data-table">
                  <thead>
                    <tr>
                      <th>编号</th>
                      <th>项目名称</th>
                      <th>状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in dynamicItems" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>
                        <span
                          :class="[
                            'badge',
                            item.status === '完成' ? 'badge-success' : 'badge-warning',
                          ]"
                        >
                          {{ item.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p v-else>暂无数据，请先生成内容</p>
              </div>
            </div>

            <!-- 高级3: 局部区域打印 -->
            <div v-else-if="currentAdvanced === 2">
              <h3>高级 3: 打印局部区域</h3>
              <p>精确控制打印区域，只打印页面的特定部分。</p>

              <div class="controls">
                <button v-print="advanced3ConfigArea1" class="btn btn-primary">🖨️ 打印区域1</button>
                <button v-print="advanced3ConfigArea2" class="btn btn-secondary">
                  🖨️ 打印区域2
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>// 打印区域1
const printArea1 = {
  id: 'area-1',
  popTitle: '区域1打印'
}

// 打印区域2
const printArea2 = {
  id: 'area-2',
  popTitle: '区域2打印'
}</code></pre>
              </div>

              <div
                style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem"
              >
                <div class="demo-content" id="advanced3-area1" style="margin: 0">
                  <h3>📊 区域 1</h3>
                  <p>这是第一个可打印区域</p>
                  <ul>
                    <li>销售额: ¥1,000,000</li>
                    <li>订单数: 5,000</li>
                    <li>增长率: +25%</li>
                  </ul>
                </div>

                <div class="demo-content" id="advanced3-area2" style="margin: 0">
                  <h3>📈 区域 2</h3>
                  <p>这是第二个可打印区域</p>
                  <ul>
                    <li>用户数: 50,000</li>
                    <li>活跃率: 85%</li>
                    <li>留存率: 92%</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 高级4: 表格打印优化 -->
            <div v-else-if="currentAdvanced === 3">
              <h3>高级 4: 大型表格打印</h3>
              <p>优化大型表格的打印效果，包含表头重复、分页控制等。</p>

              <div class="controls">
                <button v-print="advanced4Config" class="btn btn-primary">📋 打印表格</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const printConfig = {
  id: 'large-table',
  extraHead: `
    &lt;style&gt;
      @media print {
        table { page-break-inside: auto; }
        tr { page-break-inside: avoid; }
        thead { display: table-header-group; }
        tfoot { display: table-footer-group; }
      }
    &lt;/style&gt;
  `
}</code></pre>
              </div>

              <div class="demo-content" id="advanced4-content">
                <h2>员工信息表</h2>
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>工号</th>
                      <th>姓名</th>
                      <th>部门</th>
                      <th>职位</th>
                      <th>入职日期</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 20" :key="i">
                      <td>E{{ String(i).padStart(4, '0') }}</td>
                      <td>员工{{ i }}</td>
                      <td>{{ ['技术部', '产品部', '设计部', '运营部'][i % 4] }}</td>
                      <td>{{ ['工程师', '产品经理', '设计师', '运营专员'][i % 4] }}</td>
                      <td>2024-{{ String((i % 12) + 1).padStart(2, '0') }}-01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 高级5: 标签样式控制 -->
            <div v-else-if="currentAdvanced === 4">
              <h3>高级 5: 标签打印和样式控制</h3>
              <p>使用 standard 参数控制是否使用 iframe 打印，并自定义标签样式。</p>

              <div class="controls">
                <button v-print="advanced5ConfigStandard" class="btn btn-primary">
                  🏷️ 标准模式
                </button>
                <button v-print="advanced5ConfigIframe" class="btn btn-secondary">
                  🖼️ iframe模式
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>// 标准模式（不使用iframe）
const standardConfig = {
  id: 'content-id',
  standard: '',
  extraHead: '&lt;meta charset="utf-8"&gt;'
}

// iframe模式（默认）
const iframeConfig = {
  id: 'content-id',
  // standard 不设置或为空字符串外的值
}</code></pre>
              </div>

              <div class="demo-content" id="advanced5-content">
                <h2>标签打印示例</h2>
                <div
                  style="
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    margin-top: 1rem;
                  "
                >
                  <div v-for="i in 6" :key="i" class="label-card">
                    <div class="label-header">产品标签 #{{ i }}</div>
                    <div class="label-body">
                      <p><strong>名称:</strong> 产品{{ i }}</p>
                      <p><strong>编号:</strong> P{{ String(i).padStart(4, '0') }}</p>
                      <p><strong>规格:</strong> 标准版</p>
                      <div class="barcode">||||||||||||||</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 高级6: 打印URL和链接 -->
            <div v-else-if="currentAdvanced === 5">
              <h3>高级 6: URL 模式打印</h3>
              <p>直接打印指定 URL 的页面内容（需要同源或CORS支持）。</p>

              <div class="controls">
                <button @click="advanced6Print" class="btn btn-primary">🌐 URL打印(演示)</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>// 打印指定URL的页面
instance?.proxy?.$print({
  url: 'https://example.com/print-page',
  popTitle: 'URL页面打印'
})

// 或使用指令
const printConfig = {
  url: '/local-print-page',
  popTitle: '本地页面打印'
}</code></pre>
              </div>

              <div class="demo-content" id="advanced6-content">
                <div class="info-box">
                  <h4>📋 URL打印说明</h4>
                  <ul>
                    <li>适用于打印其他页面或iframe内容</li>
                    <li>需要目标页面支持CORS（跨域）</li>
                    <li>本地路径可直接使用相对路径</li>
                    <li>打印时会打开目标URL的新窗口</li>
                  </ul>
                  <p><strong>注意:</strong> 演示环境中，URL打印功能需要实际的可访问URL。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 保留原有的完整文档 -->
        <div class="divider"></div>

        <div id="print-area" class="print-content" style="display: none">
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
            <h4>5. 编程式调用 (新窗口方式)</h4>
            <pre><code>&lt;script setup&gt;
// vue3-print-nb 主要通过 v-print 指令使用
// 编程式调用可使用新窗口打印方式

const handlePrint = () =&gt; {
  const element = document.getElementById('print-content')
  if (!element) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(\`
    &lt;html&gt;
    &lt;head&gt;&lt;title&gt;打印文档&lt;/title&gt;&lt;/head&gt;
    &lt;body&gt;\${element.outerHTML}&lt;/body&gt;
    &lt;/html&gt;
  \`)
  printWindow.document.close()

  setTimeout(() =&gt; {
    printWindow.print()
    printWindow.close()
  }, 300)
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
import { ref, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))
const currentExample = ref(0)

// ECharts refs
const vueprintChartRef = ref<HTMLDivElement>()
const vueprintChartOptimizedRef = ref<HTMLDivElement>()
let vueprintChart: ECharts | null = null
let vueprintChartOptimized: ECharts | null = null

// 示例标签
const examples = [
  '基础指令',
  '编程式调用',
  '自定义样式',
  '隐藏元素',
  '预览功能',
  '自定义标题',
  'ECharts图表',
  '✅ 优化方案',
]

// 示例1: 基础指令配置
const example1Config = {
  id: 'example1-content',
  popTitle: 'vue3-print-nb 基础打印',
}

// 示例2: 编程式调用 - 使用新窗口打印方式
// 注意: vue3-print-nb 不提供 $print 方法，需要使用原生方式或新窗口打印
const example2Print = () => {
  const element = document.getElementById('example2-content')
  if (!element) {
    alert('未找到打印内容')
    return
  }

  // 使用新窗口打印方式
  const printWindow = window.open('', '_blank', 'width=800,height=600')
  if (!printWindow) {
    alert('无法打开打印窗口，请检查浏览器弹窗设置')
    return
  }

  const styles = Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules || [])
          .map((rule) => rule.cssText)
          .join('\n')
      } catch {
        return ''
      }
    })
    .join('\n')

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>编程式打印演示</title>
      <style>
        ${styles}
        body { font-family: Arial, sans-serif; padding: 20px; }
        .demo-content { border: none !important; }
        .info-box { background: #f0f0f0; padding: 15px; border-radius: 8px; margin: 10px 0; }
      </style>
    </head>
    <body>
      ${element.outerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()

  // 等待内容加载后打印
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 300)
}

// 示例3: 自定义样式配置
const example3Config = {
  id: 'example3-content',
  popTitle: '自定义样式打印',
  extraHead: `
    <style>
      @media print {
        body {
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }
        h2 {
          color: #667eea;
          font-size: 20px;
          border-bottom: 2px solid #667eea;
          padding-bottom: 8px;
        }
        h3 {
          color: #4a5568;
          font-size: 16px;
        }
        .highlight {
          background: yellow !important;
          padding: 0.5rem;
        }
        ul {
          margin-left: 20px;
        }
        li {
          margin: 5px 0;
        }
      }
    </style>
  `,
}

// 示例4: 隐藏元素配置
const example4Config = {
  id: 'example4-content',
  popTitle: '打印(隐藏指定元素)',
  noPrint: '.no-print',
}

// 示例5: 预览功能配置
const example5Config = {
  id: 'example5-content',
  popTitle: '打印预览',
  preview: true,
  previewTitle: '打印预览 - vue3-print-nb',
  previewPrintBtnLabel: '确认打印',
  previewBeforeOpenCallback: () => {
    console.log('[vue3-print-nb] 预览窗口即将打开')
  },
  previewOpenCallback: () => {
    console.log('[vue3-print-nb] 预览窗口已打开')
  },
}

// 示例6: 自定义标题配置
const example6Config = {
  id: 'example6-content',
  popTitle: '公司年度报告 - 2024',
}

// 示例7: ECharts图表配置
const example7Config = {
  id: 'example7-content',
  popTitle: 'ECharts数据看板',
  extraHead: `
    <style>
      @media print {
        @page {
          margin: 20mm;
        }
        body {
          margin: 0;
          padding: 0;
        }
        #example7-content {
          page-break-inside: avoid;
        }
        #example7-content h2 {
          margin-bottom: 25px !important;
        }
        #example7-content > div {
          padding: 10px 0 !important;
          min-height: 300px !important;
        }
        #example7-content canvas {
          display: block !important;
          margin-bottom: 20px !important;
          page-break-inside: avoid !important;
        }
        #example7-content p {
          margin-top: 20px !important;
          padding-top: 10px !important;
          page-break-before: avoid !important;
        }
      }
    </style>
  `,
}

// 监听示例切换
watch(currentExample, async (newVal) => {
  if (newVal === 6) {
    await nextTick()
    initVueprintChart()
  } else if (newVal === 7) {
    await nextTick()
    initVueprintChartOptimized()
  }
})

// 初始化vue3-print-nb的ECharts
const initVueprintChart = () => {
  if (vueprintChartRef.value && !vueprintChart) {
    vueprintChart = echarts.init(vueprintChartRef.value)
    vueprintChart.setOption({
      title: { text: '销售数据', left: 'center', textStyle: { fontSize: 14 } },
      xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月'] },
      yAxis: { type: 'value' },
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
}

// 初始化优化版ECharts
const initVueprintChartOptimized = () => {
  if (vueprintChartOptimizedRef.value && !vueprintChartOptimized) {
    vueprintChartOptimized = echarts.init(vueprintChartOptimizedRef.value)
    vueprintChartOptimized.setOption({
      title: {
        text: '月度销售趋势',
        left: 'center',
        textStyle: { fontSize: 16, fontWeight: 'bold' },
      },
      tooltip: { trigger: 'axis' },
      grid: { left: '0%', right: '8%', bottom: '18%', top: '22%' },
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

// 示例8: 优化版配置（终极方案）
const example8Config = {
  id: 'example8-content',
  popTitle: '优化版图表打印',
  extraHead: `
    <style>
      @media print {
        @page {
          margin: 15mm;
          size: A4;
        }

        body {
          margin: 0 !important;
          padding: 0 !important;
        }

        #example8-content {
          page-break-inside: avoid !important;
        }

        /* 表格布局强制 */
        #example8-content table {
          width: 100% !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
        }

        /* 第一行（图表行）固定高度 */
        #example8-content table tr:first-child td {
          height: 340px !important;
          padding: 25px 30px 20px 20px !important;
          vertical-align: top !important;
        }

        /* 第二行（空白占位行）固定高度 */
        #example8-content table tr:nth-child(2) td {
          height: 80px !important;
          padding: 0 !important;
        }

        /* 第三行（文字行）固定高度和样式 */
        #example8-content table tr:nth-child(3) td {
          height: 60px !important;
          padding: 20px 25px !important;
          border-top: 3px solid #000 !important;
          vertical-align: middle !important;
        }

        /* Canvas 强制静态定位，禁止浮动 */
        #example8-content canvas {
          display: block !important;
          position: static !important;
          float: none !important;
          clear: both !important;
          margin: 0 auto !important;
          page-break-inside: avoid !important;
        }

        /* 图表容器强制高度 */
        #example8-content [ref="vueprintChartOptimizedRef"],
        #example8-content div[style*="height: 280px"] {
          height: 280px !important;
          min-height: 280px !important;
          max-height: 280px !important;
          display: block !important;
        }

        /* 文字段落强制样式 */
        #example8-content table tr:last-child p {
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1.5 !important;
        }

        /* 提示框不打印 */
        #example8-content > div > div[style*="border-left: 4px"] {
          display: none !important;
        }
      }
    </style>
  `,
}

// 高级示例标签
const advancedExamples = ['回调函数', '动态内容', '局部打印', '表格优化', '标签打印', 'URL打印']

// 高级示例state
const currentAdvanced = ref(0)
const callbackStatus = ref<{ type: string; message: string; time: string } | null>(null)
const dynamicItems = ref<Array<{ id: number; name: string; status: string }>>([])

// 高级1: 回调函数配置
const advanced1Config = {
  id: 'advanced1-content',
  popTitle: '回调演示',
  clickMounted: () => {
    console.log('[vue3-print-nb] 点击打印按钮')
    callbackStatus.value = {
      type: 'info',
      message: '📋 已点击打印按钮',
      time: new Date().toLocaleTimeString(),
    }
  },
  beforeOpenCallback: () => {
    console.log('[vue3-print-nb] 打印窗口即将打开')
    callbackStatus.value = {
      type: 'info',
      message: '⏳ 打印窗口准备中...',
      time: new Date().toLocaleTimeString(),
    }
  },
  openCallback: () => {
    console.log('[vue3-print-nb] 打印窗口已打开')
    callbackStatus.value = {
      type: 'success',
      message: '✅ 打印窗口已打开',
      time: new Date().toLocaleTimeString(),
    }
  },
  closeCallback: () => {
    console.log('[vue3-print-nb] 打印窗口已关闭')
    callbackStatus.value = {
      type: 'success',
      message: '✅ 打印完成或已取消',
      time: new Date().toLocaleTimeString(),
    }
    // 3秒后清除状态
    setTimeout(() => {
      callbackStatus.value = null
    }, 3000)
  },
}

// 高级2: 动态内容生成
const generateContent = () => {
  dynamicItems.value = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `项目 ${i + 1}`,
    status: Math.random() > 0.5 ? '完成' : '进行中',
  }))
}

const advanced2Config = {
  id: 'advanced2-content',
  popTitle: '动态内容打印',
}

// 高级3: 局部打印配置
const advanced3ConfigArea1 = {
  id: 'advanced3-area1',
  popTitle: '打印区域1',
}

const advanced3ConfigArea2 = {
  id: 'advanced3-area2',
  popTitle: '打印区域2',
}

// 高级4: 表格打印配置
const advanced4Config = {
  id: 'advanced4-content',
  popTitle: '大型表格打印',
  extraHead: `
    <style>
      @media print {
        body {
          font-size: 12px;
        }
        table {
          page-break-inside: auto;
          width: 100%;
          border-collapse: collapse;
        }
        tr {
          page-break-inside: avoid;
          page-break-after: auto;
        }
        thead {
          display: table-header-group;
        }
        tfoot {
          display: table-footer-group;
        }
        th {
          background: #667eea !important;
          color: white !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    </style>
  `,
}

// 高级5: 标签打印配置
const advanced5ConfigStandard = {
  id: 'advanced5-content',
  popTitle: '标签打印 - 标准模式',
  standard: '',
  extraHead: '<meta charset="utf-8">',
}

const advanced5ConfigIframe = {
  id: 'advanced5-content',
  popTitle: '标签打印 - iframe模式',
}

// 高级6: URL打印
const advanced6Print = () => {
  alert(
    'URL打印演示\n\n实际使用时，可以打印指定URL的页面：\n\ninstance?.proxy?.$print({\n  url: "https://example.com/page",\n  popTitle: "URL页面打印"\n});\n\n注意：需要目标页面支持CORS或在同一域名下',
  )
}

// 原有的配置保留
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

// 编程式打印函数 - 使用新窗口方式
const handlePrint = () => {
  const element = document.getElementById('print-area')
  if (!element) {
    alert('未找到打印内容')
    return
  }

  const printWindow = window.open('', '_blank', 'width=800,height=600')
  if (!printWindow) {
    alert('无法打开打印窗口，请检查浏览器弹窗设置')
    return
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>编程式打印</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .document { background: white; }
        h1 { color: #667eea; }
        h2 { color: #4a5568; }
        .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .feature-card { border: 1px solid #e2e8f0; padding: 1rem; border-radius: 8px; }
        .comparison-table { width: 100%; border-collapse: collapse; }
        .comparison-table th, .comparison-table td { border: 1px solid #e2e8f0; padding: 0.75rem; }
        .comparison-table th { background: #f7fafc; }
      </style>
    </head>
    <body>
      ${element.innerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()

  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 300)
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

.demo-content h2,
.demo-content h3 {
  color: #2d3748;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.demo-content h2 {
  font-size: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

.demo-content ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.demo-content li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

/* 信息框 */
.info-box {
  background: #edf2f7;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  border-radius: 4px;
  margin: 1rem 0;
}

.info-box h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.info-box ul {
  margin-left: 1.5rem;
}

.info-box li {
  margin: 0.5rem 0;
}

/* 数据表格 */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.data-table th,
.data-table td {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.data-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.data-table tbody tr:hover {
  background: #f7fafc;
}

/* 分隔线 */
.divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 3rem 0;
}

/* 高级功能区 */
.advanced-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px dashed #e2e8f0;
}

/* 状态提示框 */
.status-box {
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid;
}

.status-box.success {
  background: #f0fdf4;
  border-color: #48bb78;
  color: #22543d;
}

.status-box.info {
  background: #ebf8ff;
  border-color: #4299e1;
  color: #2c5282;
}

.status-box p {
  margin: 0.25rem 0;
}

.status-box small {
  color: #718096;
}

/* 徽章 */
.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.badge-success {
  background: #c6f6d5;
  color: #22543d;
}

.badge-warning {
  background: #fef3c7;
  color: #92400e;
}

/* 标签卡片 */
.label-card {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.label-header {
  background: #667eea;
  color: white;
  padding: 0.75rem;
  font-weight: 600;
  text-align: center;
}

.label-body {
  padding: 1rem;
}

.label-body p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.barcode {
  margin-top: 0.75rem;
  padding: 0.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  text-align: center;
  font-family: monospace;
  letter-spacing: 2px;
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
