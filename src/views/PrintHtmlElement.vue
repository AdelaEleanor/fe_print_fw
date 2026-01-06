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

        <!-- ==================== 基础示例区域 ==================== -->
        <div class="examples-section">
          <h3 class="section-title">📘 基础打印示例</h3>

          <div class="example-tabs">
            <button
              v-for="(example, index) in examples"
              :key="index"
              :class="['tab-button', { active: currentExample === index }]"
              @click="currentExample = index"
            >
              {{ example.name }}
            </button>
          </div>

          <!-- 示例1: 简单打印 -->
          <div v-if="currentExample === 0" class="example-content">
            <h4>1. 简单打印</h4>
            <p>最基础的用法，直接打印指定DOM元素。</p>
            <div class="demo-box">
              <div id="example-print-1" class="preview-box">
                <h3>简单文档</h3>
                <p>这是一个简单的打印示例。</p>
                <p>print-html-element 会复制此元素并打印。</p>
              </div>
              <button @click="example1Print" class="btn btn-primary">打印此内容</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import printElement from 'print-html-element';

const element = document.getElementById('content');
printElement(element);</code></pre>
            </div>
          </div>

          <!-- 示例2: 打印表格 -->
          <div v-if="currentExample === 1" class="example-content">
            <h4>2. 打印表格</h4>
            <p>打印包含表格的内容，保持表格样式。</p>
            <div class="demo-box">
              <div id="example-print-2" class="preview-box">
                <h3>销售报表</h3>
                <table class="demo-table">
                  <thead>
                    <tr>
                      <th>产品</th>
                      <th>销量</th>
                      <th>金额</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>产品A</td>
                      <td>150</td>
                      <td>¥15,000</td>
                    </tr>
                    <tr>
                      <td>产品B</td>
                      <td>200</td>
                      <td>¥20,000</td>
                    </tr>
                    <tr>
                      <td>产品C</td>
                      <td>100</td>
                      <td>¥10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button @click="example2Print" class="btn btn-primary">打印表格</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 表格样式会自动保留
const tableElement = document.getElementById('table-content');
printElement(tableElement);

// CSS样式示例
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}</code></pre>
            </div>
          </div>

          <!-- 示例3: 打印卡片 -->
          <div v-if="currentExample === 2" class="example-content">
            <h4>3. 打印卡片</h4>
            <p>打印带有样式的卡片布局。</p>
            <div class="demo-box">
              <div id="example-print-3" class="preview-box card-layout">
                <div class="user-card">
                  <div class="avatar">👤</div>
                  <h3>张三</h3>
                  <p class="title">前端工程师</p>
                  <p class="info">邮箱: zhangsan@example.com</p>
                  <p class="info">电话: 138-0000-0000</p>
                </div>
              </div>
              <button @click="example3Print" class="btn btn-primary">打印名片</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 卡片样式会完整保留
.user-card {
  text-align: center;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 8px;
}

const card = document.getElementById('user-card');
printElement(card);</code></pre>
            </div>
          </div>

          <!-- 示例4: 打印图文混排 -->
          <div v-if="currentExample === 3" class="example-content">
            <h4>4. 图文混排</h4>
            <p>打印包含图片和文字的复杂内容。</p>
            <div class="demo-box">
              <div id="example-print-4" class="preview-box article-layout">
                <h3>技术文章</h3>
                <div class="article-content">
                  <div class="article-image">📷</div>
                  <p>
                    print-html-element 是一个轻量级的打印库， 仅需5KB即可实现DOM元素的精确打印。
                    它保持了原始样式，无需额外配置。
                  </p>
                </div>
                <div class="article-footer">
                  发布日期: {{ new Date().toLocaleDateString('zh-CN') }}
                </div>
              </div>
              <button @click="example4Print" class="btn btn-primary">打印文章</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 图片和布局样式都会保留
.article-content {
  display: flex;
  gap: 20px;
}

.article-image {
  width: 100px;
  height: 100px;
  background: #f0f0f0;
}

printElement(document.getElementById('article'));</code></pre>
            </div>
          </div>

          <!-- 示例5: 打印列表 -->
          <div v-if="currentExample === 4" class="example-content">
            <h4>5. 打印列表</h4>
            <p>打印有序或无序列表内容。</p>
            <div class="demo-box">
              <div id="example-print-5" class="preview-box">
                <h3>待办事项</h3>
                <ul class="todo-list">
                  <li class="completed">✅ 完成项目文档</li>
                  <li class="completed">✅ 代码审查</li>
                  <li>⬜ 单元测试</li>
                  <li>⬜ 部署上线</li>
                </ul>
              </div>
              <button @click="example5Print" class="btn btn-primary">打印清单</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 列表样式保持
.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.completed {
  text-decoration: line-through;
  color: #999;
}</code></pre>
            </div>
          </div>

          <!-- 示例6: 打印表单 -->
          <div v-if="currentExample === 5" class="example-content">
            <h4>6. 打印表单</h4>
            <p>打印表单内容（包括填写的值）。</p>
            <div class="demo-box">
              <div class="form-inputs">
                <label>
                  姓名:
                  <input type="text" v-model="formData.name" placeholder="输入姓名" />
                </label>
                <label>
                  地址:
                  <input type="text" v-model="formData.address" placeholder="输入地址" />
                </label>
              </div>
              <div id="example-print-6" class="preview-box form-preview">
                <h3>订单信息</h3>
                <p><strong>收件人:</strong> {{ formData.name || '(未填写)' }}</p>
                <p><strong>地址:</strong> {{ formData.address || '(未填写)' }}</p>
                <p><strong>订单号:</strong> ORD-{{ Date.now().toString().slice(-8) }}</p>
              </div>
              <button @click="example6Print" class="btn btn-primary">打印订单</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 表单值会显示在打印内容中
// 建议将表单值渲染到专门的打印区域

const printContent = document.getElementById('form-display');
printElement(printContent);</code></pre>
            </div>
          </div>

          <!-- 示例7: ECharts图表 -->
          <div v-if="currentExample === 6" class="example-content">
            <h4>7. ECharts图表打印</h4>
            <p class="framework-highlight">
              🎯 <strong>print-html-element特点：</strong>超轻量（5KB），最简单的API，零配置<br />
              <span class="advantage">✅ 优势：</span
              >体积最小（Print.js的一半）；API最简洁；零依赖<br />
              <span class="disadvantage">⚠️ 对比：</span>vs Print.js - 更轻量；vs html2pdf -
              直接打印不生成PDF；vs所有其他 - 最简实现
            </p>

            <div class="demo-box">
              <div class="preview-box" style="padding: 20px; background: #fff">
                <div
                  id="example-print-7"
                  ref="printElementChartRef"
                  style="width: 100%; height: 300px"
                ></div>
              </div>
              <button @click="example7Print" class="btn btn-primary">打印图表</button>
            </div>

            <div class="code-display">
              <pre v-pre><code>// 1. 初始化ECharts
const chart = echarts.init(chartRef.value)
chart.setOption({
  title: { text: '数据统计' },
  series: [{ type: 'bar', data: [...] }]
})

// 2. 一行代码打印
printElement(chartRef.value)

// 就这么简单！无需配置任何参数</code></pre>
            </div>
          </div>
        </div>

        <!-- ==================== 高级示例区域 ==================== -->
        <div class="advanced-section">
          <h3 class="section-title">📕 样式与多元素示例</h3>

          <div class="example-tabs">
            <button
              v-for="(example, index) in advancedExamples"
              :key="index"
              :class="['tab-button advanced', { active: currentAdvanced === index }]"
              @click="currentAdvanced = index"
            >
              {{ example.name }}
            </button>
          </div>

          <!-- 高级示例1: 自定义打印样式 -->
          <div v-if="currentAdvanced === 0" class="example-content">
            <h4>1. 自定义打印样式</h4>
            <p>使用@media print媒体查询控制打印样式。</p>
            <div class="demo-box">
              <div class="style-options">
                <label>
                  <input type="checkbox" v-model="printStyles.hideBorder" />
                  打印时隐藏边框
                </label>
                <label>
                  <input type="checkbox" v-model="printStyles.blackWhite" />
                  黑白打印
                </label>
              </div>
              <div
                id="advanced-print-1"
                class="preview-box styled-print"
                :class="{ 'no-border': printStyles.hideBorder, bw: printStyles.blackWhite }"
              >
                <h3 style="color: #667eea">彩色标题</h3>
                <p>这是正文内容，边框和颜色可以在打印时自定义。</p>
                <div class="color-bar"></div>
              </div>
              <button @click="advanced1Print" class="btn btn-advanced">应用样式打印</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>@media print {
  /* 隐藏边框 */
  .no-border {
    border: none !important;
  }

  /* 黑白打印 */
  .bw {
    filter: grayscale(100%);
  }

  /* 隐藏不打印的元素 */
  .no-print {
    display: none !important;
  }
}</code></pre>
            </div>
          </div>

          <!-- 高级示例2: 合并多个元素 -->
          <div v-if="currentAdvanced === 1" class="example-content">
            <h4>2. 合并多个元素</h4>
            <p>将多个DOM元素合并后一起打印。</p>
            <div class="demo-box">
              <div class="multi-select">
                <label>
                  <input type="checkbox" v-model="selectedSections.header" />
                  包含页眉
                </label>
                <label>
                  <input type="checkbox" v-model="selectedSections.content" />
                  包含内容
                </label>
                <label>
                  <input type="checkbox" v-model="selectedSections.footer" />
                  包含页脚
                </label>
              </div>
              <div class="preview-sections">
                <div
                  id="merge-header"
                  class="section-preview"
                  :class="{ selected: selectedSections.header }"
                >
                  <strong>页眉区域</strong>
                </div>
                <div
                  id="merge-content"
                  class="section-preview content"
                  :class="{ selected: selectedSections.content }"
                >
                  <strong>主要内容区域</strong>
                  <p>这里是文档的主要内容...</p>
                </div>
                <div
                  id="merge-footer"
                  class="section-preview"
                  :class="{ selected: selectedSections.footer }"
                >
                  <strong>页脚区域</strong>
                </div>
              </div>
              <button @click="advanced2Print" class="btn btn-advanced">合并打印所选</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 创建临时容器合并元素
const container = document.createElement('div');

if (includeHeader) {
  const header = document.getElementById('header');
  container.appendChild(header.cloneNode(true));
}

if (includeContent) {
  const content = document.getElementById('content');
  container.appendChild(content.cloneNode(true));
}

printElement(container);</code></pre>
            </div>
          </div>

          <!-- 高级示例3: 动态内容打印 -->
          <div v-if="currentAdvanced === 2" class="example-content">
            <h4>3. 动态内容打印</h4>
            <p>打印Vue响应式数据生成的内容。</p>
            <div class="demo-box">
              <div class="dynamic-controls">
                <label>
                  标题:
                  <input type="text" v-model="dynamicContent.title" />
                </label>
                <label>
                  内容:
                  <textarea v-model="dynamicContent.body" rows="3"></textarea>
                </label>
                <label>
                  作者:
                  <input type="text" v-model="dynamicContent.author" />
                </label>
              </div>
              <div id="advanced-print-3" class="preview-box dynamic-preview">
                <h3>{{ dynamicContent.title || '(标题)' }}</h3>
                <p>{{ dynamicContent.body || '(内容)' }}</p>
                <p class="author">—— {{ dynamicContent.author || '(作者)' }}</p>
              </div>
              <button @click="advanced3Print" class="btn btn-advanced">打印动态内容</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// Vue响应式数据会实时渲染
const dynamicContent = ref({
  title: '文章标题',
  body: '文章内容...',
  author: '作者名'
});

// 打印时会使用当前数据值
const element = document.getElementById('dynamic-content');
printElement(element);</code></pre>
            </div>
          </div>

          <!-- 高级示例4: 打印尺寸控制 -->
          <div v-if="currentAdvanced === 3" class="example-content">
            <h4>4. 打印尺寸控制</h4>
            <p>控制打印内容的尺寸和布局。</p>
            <div class="demo-box">
              <div class="size-options">
                <label>
                  纸张方向:
                  <select v-model="printSize.orientation">
                    <option value="portrait">纵向</option>
                    <option value="landscape">横向</option>
                  </select>
                </label>
                <label>
                  内容宽度:
                  <select v-model="printSize.width">
                    <option value="100%">全宽</option>
                    <option value="80%">80%</option>
                    <option value="60%">60%</option>
                  </select>
                </label>
              </div>
              <div
                id="advanced-print-4"
                class="preview-box size-preview"
                :style="{ width: printSize.width }"
              >
                <h3>尺寸测试</h3>
                <p>当前宽度: {{ printSize.width }}</p>
                <p>方向: {{ printSize.orientation === 'portrait' ? '纵向' : '横向' }}</p>
              </div>
              <button @click="advanced4Print" class="btn btn-advanced">打印指定尺寸</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>@media print {
  @page {
    size: A4 portrait; /* 或 landscape */
    margin: 20mm;
  }

  .print-content {
    width: 100%;
    max-width: none;
  }
}</code></pre>
            </div>
          </div>

          <!-- 高级示例5: 隐藏元素打印 -->
          <div v-if="currentAdvanced === 4" class="example-content">
            <h4>5. 隐藏元素打印</h4>
            <p>控制打印时显示/隐藏特定元素。</p>
            <div class="demo-box">
              <div id="advanced-print-5" class="preview-box">
                <h3>报告文档</h3>
                <p class="print-only" style="display: none">【仅打印时显示】</p>
                <p>这是正文内容，在屏幕和打印时都显示。</p>
                <p class="screen-only">【仅屏幕显示，打印时隐藏】</p>
                <button class="no-print">这个按钮打印时会隐藏</button>
              </div>
              <button @click="advanced5Print" class="btn btn-advanced">打印（查看差异）</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>@media print {
  /* 仅屏幕显示的元素 */
  .screen-only, .no-print {
    display: none !important;
  }

  /* 仅打印显示的元素 */
  .print-only {
    display: block !important;
  }
}

@media screen {
  .print-only {
    display: none;
  }
}</code></pre>
            </div>
          </div>

          <!-- 高级示例6: 回调处理 -->
          <div v-if="currentAdvanced === 5" class="example-content">
            <h4>6. 打印事件处理</h4>
            <p>监听打印前后的事件进行处理。</p>
            <div class="demo-box">
              <div class="event-log" v-if="printEvents.length">
                <div v-for="(event, index) in printEvents" :key="index" class="log-item">
                  {{ event }}
                </div>
              </div>
              <div id="advanced-print-6" class="preview-box">
                <h3>事件测试</h3>
                <p>打印时会记录事件日志。</p>
              </div>
              <div class="button-group">
                <button @click="advanced6Print" class="btn btn-advanced">打印（带事件）</button>
                <button @click="printEvents = []" class="btn btn-secondary">清除日志</button>
              </div>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 使用浏览器原生事件
window.addEventListener('beforeprint', () =&gt; {
  console.log('打印即将开始');
  // 可以在这里准备打印内容
});

window.addEventListener('afterprint', () =&gt; {
  console.log('打印已完成或取消');
  // 可以在这里恢复原始状态
});

// 执行打印
printElement(element);</code></pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'

// @ts-ignore
const printElement = ref<any>(null)

// ==================== 基础示例状态 ====================
const currentExample = ref(0)
const examples = [
  { name: '简单打印' },
  { name: '打印表格' },
  { name: '打印卡片' },
  { name: '图文混排' },
  { name: '打印列表' },
  { name: '打印表单' },
  { name: 'ECharts图表' },
]

// ECharts refs
const printElementChartRef = ref<HTMLDivElement>()
let printElementChart: ECharts | null = null

// 示例6: 表单数据
const formData = ref({
  name: '',
  address: '',
})

// ==================== 高级示例状态 ====================
const currentAdvanced = ref(0)
const advancedExamples = [
  { name: '自定义样式' },
  { name: '合并元素' },
  { name: '动态内容' },
  { name: '尺寸控制' },
  { name: '隐藏元素' },
  { name: '事件处理' },
]

// 高级示例1: 打印样式
const printStyles = ref({
  hideBorder: false,
  blackWhite: false,
})

// 高级示例2: 选择区域
const selectedSections = ref({
  header: true,
  content: true,
  footer: true,
})

// 高级示例3: 动态内容
const dynamicContent = ref({
  title: '文章标题',
  body: '这是文章的正文内容，可以自由编辑。',
  author: '作者',
})

// 高级示例4: 打印尺寸
const printSize = ref({
  orientation: 'portrait',
  width: '100%',
})

// 高级示例6: 事件日志
const printEvents = ref<string[]>([])

onMounted(async () => {
  try {
    const module = await import('print-html-element')
    console.log('print-html-element module:', module)

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

  // 添加打印事件监听
  window.addEventListener('beforeprint', handleBeforePrint)
  window.addEventListener('afterprint', handleAfterPrint)
})

onUnmounted(() => {
  window.removeEventListener('beforeprint', handleBeforePrint)
  window.removeEventListener('afterprint', handleAfterPrint)
})

const handleBeforePrint = () => {
  printEvents.value.push(`[${new Date().toLocaleTimeString()}] beforeprint - 打印即将开始`)
}

const handleAfterPrint = () => {
  printEvents.value.push(`[${new Date().toLocaleTimeString()}] afterprint - 打印已完成/取消`)
}

// 通用打印函数
const doPrint = (element: HTMLElement | null) => {
  if (element && printElement.value && typeof printElement.value === 'function') {
    printElement.value(element)
  } else if (element) {
    // 降级方案
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>打印</title>
            <style>
              body { font-family: sans-serif; padding: 20px; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            </style>
          </head>
          <body>${element.innerHTML}</body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
      printWindow.close()
    }
  }
}

// ==================== 原有快捷功能 ====================
const printElement1 = () => {
  const element = document.getElementById('print-content-1')
  doPrint(element)
}

const printElement2 = () => {
  const element = document.getElementById('print-content-2')
  doPrint(element)
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
    doPrint(container)
  }
}

// ==================== 基础示例函数 ====================
const example1Print = () => {
  const element = document.getElementById('example-print-1')
  doPrint(element)
}

const example2Print = () => {
  const element = document.getElementById('example-print-2')
  doPrint(element)
}

const example3Print = () => {
  const element = document.getElementById('example-print-3')
  doPrint(element)
}

const example4Print = () => {
  const element = document.getElementById('example-print-4')
  doPrint(element)
}

const example5Print = () => {
  const element = document.getElementById('example-print-5')
  doPrint(element)
}

const example6Print = () => {
  const element = document.getElementById('example-print-6')
  doPrint(element)
}

// 示例7: ECharts打印
const initPrintElementChart = () => {
  if (printElementChartRef.value) {
    // 如果图表已存在，先销毁
    if (printElementChart) {
      printElementChart.dispose()
      printElementChart = null
    }

    printElementChart = echarts.init(printElementChartRef.value)
    printElementChart.setOption({
      title: {
        text: '部门销售对比',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['研发部', '销售部', '市场部', '运营部', '客服部'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '销售额',
          type: 'bar',
          data: [320, 450, 280, 390, 260],
          itemStyle: {
            color: '#409EFF',
          },
        },
      ],
    })
  }
}

const example7Print = () => {
  const element = document.getElementById('example-print-7')
  doPrint(element)
}

// Watch currentExample to initialize chart
watch(currentExample, async (newVal) => {
  if (newVal === 6) {
    await nextTick()
    initPrintElementChart()
  }
})

// ==================== 高级示例函数 ====================
const advanced1Print = () => {
  const element = document.getElementById('advanced-print-1')
  doPrint(element)
}

const advanced2Print = () => {
  const container = document.createElement('div')
  container.style.padding = '20px'

  if (selectedSections.value.header) {
    const header = document.getElementById('merge-header')
    if (header) container.appendChild(header.cloneNode(true))
  }

  if (selectedSections.value.content) {
    const content = document.getElementById('merge-content')
    if (content) container.appendChild(content.cloneNode(true))
  }

  if (selectedSections.value.footer) {
    const footer = document.getElementById('merge-footer')
    if (footer) container.appendChild(footer.cloneNode(true))
  }

  doPrint(container)
}

const advanced3Print = () => {
  const element = document.getElementById('advanced-print-3')
  doPrint(element)
}

const advanced4Print = () => {
  const element = document.getElementById('advanced-print-4')
  doPrint(element)
}

const advanced5Print = () => {
  const element = document.getElementById('advanced-print-5')
  if (element) {
    // 创建打印专用副本
    const clone = element.cloneNode(true) as HTMLElement
    // 显示 print-only 元素
    const printOnly = clone.querySelector('.print-only') as HTMLElement
    if (printOnly) printOnly.style.display = 'block'
    // 隐藏 screen-only 和 no-print 元素
    clone.querySelectorAll('.screen-only, .no-print').forEach((el) => {
      ;(el as HTMLElement).style.display = 'none'
    })
    doPrint(clone)
  }
}

const advanced6Print = () => {
  printEvents.value.push(`[${new Date().toLocaleTimeString()}] 开始执行打印...`)
  const element = document.getElementById('advanced-print-6')
  doPrint(element)
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

/* ==================== 基础示例样式 ==================== */
.examples-section {
  margin-top: 40px;
  padding: 25px;
  background: #f0fff4;
  border-radius: 12px;
  border: 1px solid #9ae6b4;
}

.section-title {
  color: #276749;
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.example-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #9ae6b4;
}

.tab-button {
  padding: 8px 16px;
  border: 1px solid #9ae6b4;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: #c6f6d5;
}

.tab-button.active {
  background: #48bb78;
  color: white;
  border-color: #48bb78;
}

.tab-button.advanced {
  border-color: #feb2b2;
}

.tab-button.advanced:hover {
  background: #fed7d7;
}

.tab-button.advanced.active {
  background: #f56565;
  border-color: #f56565;
}

.example-content {
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.example-content h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.example-content > p {
  color: #718096;
  margin-bottom: 15px;
}

.demo-box {
  margin: 15px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #cbd5e0;
}

.preview-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 15px;
}

.preview-box h3 {
  margin-top: 0;
  color: #2c3e50;
}

.code-display {
  margin-top: 15px;
}

.code-display pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.5;
}

.btn-advanced {
  background: #f56565;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-advanced:hover {
  background: #e53e3e;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #718096;
  color: white;
}

.btn-secondary:hover {
  background: #4a5568;
}

/* ==================== 高级示例样式 ==================== */
.advanced-section {
  margin-top: 40px;
  padding: 25px;
  background: #fff5f5;
  border-radius: 12px;
  border: 1px solid #feb2b2;
}

.advanced-section .section-title {
  color: #c53030;
}

/* 表格样式 */
.demo-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.demo-table th,
.demo-table td {
  padding: 10px;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.demo-table th {
  background: #f7fafc;
  font-weight: 600;
}

/* 卡片布局 */
.card-layout {
  display: flex;
  justify-content: center;
}

.user-card {
  text-align: center;
  padding: 20px;
  border: 2px solid #667eea;
  border-radius: 12px;
  min-width: 200px;
}

.user-card .avatar {
  font-size: 48px;
  margin-bottom: 10px;
}

.user-card h3 {
  margin: 10px 0 5px;
}

.user-card .title {
  color: #667eea;
  font-weight: 500;
}

.user-card .info {
  font-size: 14px;
  color: #718096;
  margin: 5px 0;
}

/* 文章布局 */
.article-layout .article-content {
  display: flex;
  gap: 20px;
  margin: 15px 0;
}

.article-layout .article-image {
  width: 80px;
  height: 80px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 8px;
}

.article-layout .article-footer {
  text-align: right;
  color: #718096;
  font-size: 14px;
  border-top: 1px solid #e2e8f0;
  padding-top: 10px;
}

/* 待办列表 */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  padding: 10px;
  border-bottom: 1px solid #e2e8f0;
}

.todo-list .completed {
  color: #a0aec0;
}

/* 表单输入 */
.form-inputs {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
}

.form-inputs label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
}

.form-inputs input {
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  min-width: 150px;
}

.form-preview p {
  margin: 8px 0;
}

/* 样式选项 */
.style-options,
.multi-select,
.size-options {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
}

.style-options label,
.multi-select label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.size-options label {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.size-options select {
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

/* 样式化打印预览 */
.styled-print {
  border: 2px solid #667eea;
}

.styled-print.no-border {
  border: 2px dashed #ccc;
}

.styled-print.bw {
  filter: grayscale(100%);
}

.styled-print .color-bar {
  height: 10px;
  background: linear-gradient(90deg, #667eea, #f093fb, #48bb78, #ed8936);
  margin-top: 15px;
  border-radius: 5px;
}

/* 多区域预览 */
.preview-sections {
  margin-bottom: 15px;
}

.section-preview {
  padding: 15px;
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.section-preview.selected {
  border-color: #48bb78;
  background: #f0fff4;
}

.section-preview.content {
  min-height: 80px;
}

/* 动态内容 */
.dynamic-controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
}

.dynamic-controls label {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dynamic-controls input,
.dynamic-controls textarea {
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

.dynamic-preview .author {
  text-align: right;
  color: #718096;
  font-style: italic;
}

/* 尺寸预览 */
.size-preview {
  margin: 0 auto;
  transition: width 0.3s ease;
}

/* 事件日志 */
.event-log {
  background: #2d3748;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  max-height: 150px;
  overflow-y: auto;
}

.log-item {
  font-family: monospace;
  font-size: 13px;
  padding: 5px 0;
  border-bottom: 1px solid #4a5568;
}

.log-item:last-child {
  border-bottom: none;
}

.button-group {
  display: flex;
  gap: 10px;
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

  .screen-only,
  .no-print {
    display: none !important;
  }

  .print-only {
    display: block !important;
  }
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
