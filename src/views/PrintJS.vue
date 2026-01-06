<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>⚡ Print.js - 轻量级打印库</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>print-js</strong></p>
          <p>npm install print-js</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 49+</li>
            <li>✅ Firefox 52+</li>
            <li>✅ Safari 10+</li>
            <li>✅ Edge 14+</li>
            <li>⚠️ IE 11 (部分支持)</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (85%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 轻量级库</li>
            <li>✅ 快速初始化</li>
            <li>⚠️ 依赖iframe</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ CSS分页</li>
            <li>⚠️ 依赖浏览器</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~10 KB</p>
          <p>(gzipped)</p>
        </div>

        <div class="info-section">
          <h3>✨ 支持类型</h3>
          <ul>
            <li>✅ PDF 文件</li>
            <li>✅ HTML 元素</li>
            <li>✅ 图片 (PNG/JPG)</li>
            <li>✅ JSON 数据</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>简单易用</li>
            <li>支持多种类型</li>
            <li>配置灵活</li>
            <li>轻量级</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>功能相对简单</li>
            <li>复杂布局支持有限</li>
            <li>依赖iframe</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <h2 class="section-title">📝 基础功能演示</h2>

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
          <!-- 示例1: 基础HTML打印 -->
          <div v-if="currentExample === 0">
            <h3>示例 1: 基础 HTML 打印</h3>
            <p>使用 Print.js 打印页面上的 HTML 元素内容，这是最常用的功能。</p>

            <div class="controls">
              <button @click="example1Print" class="btn btn-primary">🖨️ 打印HTML内容</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>import printJS from 'print-js';

printJS({
  printable: 'content-id',
  type: 'html',
  header: '打印标题'
});</code></pre>
            </div>

            <div class="demo-content" id="example1-content">
              <h2>Print.js 演示文档</h2>
              <p><strong>日期:</strong> {{ currentDate }}</p>
              <p>Print.js 是一个轻量级的 JavaScript 库，用于简化网页打印操作。</p>
              <ul>
                <li>支持打印 HTML 元素</li>
                <li>支持打印 PDF 文件</li>
                <li>支持打印图片</li>
                <li>支持打印 JSON 数据</li>
              </ul>
            </div>
          </div>

          <!-- 示例2: 带自定义样式的打印 -->
          <div v-else-if="currentExample === 1">
            <h3>示例 2: 自定义样式打印</h3>
            <p>通过 style 参数注入自定义 CSS 样式，控制打印输出的外观。</p>

            <div class="controls">
              <button @click="example2Print" class="btn btn-primary">🎨 打印(自定义样式)</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>printJS({
  printable: 'content-id',
  type: 'html',
  header: '自定义样式打印',
  style: \`
    h2 { color: #667eea; }
    .highlight { background: yellow; }
    .bordered { border: 2px solid #667eea; }
  \`,
  scanStyles: false
});</code></pre>
            </div>

            <div class="demo-content" id="example2-content">
              <h2>自定义样式演示</h2>
              <p class="highlight">这是一段<strong>高亮</strong>文本</p>
              <div
                class="bordered"
                style="border: 2px solid #667eea; padding: 1rem; border-radius: 8px"
              >
                <p>这是一个带边框的内容区域。</p>
                <ul>
                  <li>Print.js 支持自定义样式</li>
                  <li>可以通过 style 参数注入 CSS</li>
                  <li>也可以通过 css 参数引入外部样式表</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 示例3: 打印图片 -->
          <div v-else-if="currentExample === 2">
            <h3>示例 3: 打印图片</h3>
            <p>Print.js 支持直接打印图片文件，可以是单张或多张图片。</p>

            <div class="controls">
              <button @click="example3Print" class="btn btn-primary">🖼️ 打印图片</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>// 单张图片
printJS('image-url.jpg', 'image');

// 或配置方式
printJS({
  printable: imageUrl,
  type: 'image',
  header: '图片打印',
  imageStyle: 'width:100%; margin: auto;'
});</code></pre>
            </div>

            <div class="demo-content" id="example3-image">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='600' height='400'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial' font-size='32' fill='white' text-anchor='middle'%3EPrint.js%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3E图片打印演示%3C/text%3E%3C/svg%3E"
                alt="Print.js 演示图片"
                style="width: 100%; max-width: 600px; border-radius: 8px"
              />
            </div>
          </div>

          <!-- 示例4: JSON表格打印 -->
          <div v-else-if="currentExample === 3">
            <h3>示例 4: JSON 数据打印为表格</h3>
            <p>Print.js 可以将 JSON 数组数据直接打印为格式化的表格。</p>

            <div class="controls">
              <button @click="example4Print" class="btn btn-primary">📊 打印JSON表格</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>const data = [
  { 姓名: '张三', 年龄: 25, 城市: '北京' },
  { 姓名: '李四', 年龄: 30, 城市: '上海' }
];

printJS({
  printable: data,
  type: 'json',
  properties: ['姓名', '年龄', '城市'],
  header: '用户列表',
  gridHeaderStyle: 'color: white; background: #667eea;',
  gridStyle: 'border: 1px solid #e2e8f0;'
});</code></pre>
            </div>

            <div class="demo-content">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>框架名称</th>
                    <th>类型</th>
                    <th>大小</th>
                    <th>评分</th>
                    <th>推荐场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in jsonData" :key="item.框架">
                    <td>{{ item.框架 }}</td>
                    <td>{{ item.类型 }}</td>
                    <td>{{ item.大小 }}</td>
                    <td>{{ item.评分 }}</td>
                    <td>{{ item.场景 }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 示例5: 打印前后回调 -->
          <div v-else-if="currentExample === 4">
            <h3>示例 5: 打印回调函数</h3>
            <p>使用 onPrintDialogClose 和 onError 回调来处理打印事件。</p>

            <div class="controls">
              <button @click="example5Print" class="btn btn-primary">🔔 打印(带回调)</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>printJS({
  printable: 'content-id',
  type: 'html',
  onPrintDialogClose: () => {
    console.log('打印对话框已关闭');
    alert('打印完成或已取消');
  },
  onError: (error) => {
    console.error('打印错误:', error);
    alert('打印出错: ' + error);
  }
});</code></pre>
            </div>

            <div class="demo-content" id="example5-content">
              <div v-if="printStatus" :class="['status-box', printStatus.type]">
                <p>
                  <strong>{{ printStatus.message }}</strong>
                </p>
                <p>
                  <small>时间: {{ printStatus.time }}</small>
                </p>
              </div>
              <h3>回调演示内容</h3>
              <p>点击打印按钮后，关闭打印对话框会触发回调函数。</p>
              <ul>
                <li>onPrintDialogClose: 打印对话框关闭时触发</li>
                <li>onError: 打印出错时触发</li>
              </ul>
            </div>
          </div>

          <!-- 示例6: 打印页眉页脚 -->
          <div v-else-if="currentExample === 5">
            <h3>示例 6: 页眉和配置选项</h3>
            <p>使用 header 和 headerStyle 参数自定义打印页眉。</p>

            <div class="controls">
              <button @click="example6Print" class="btn btn-primary">📄 打印(带页眉)</button>
            </div>

            <div class="code-display">
              <h4>代码示例:</h4>
              <pre><code>printJS({
  printable: 'content-id',
  type: 'html',
  header: '公司内部文件 - 机密',
  headerStyle: \`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #667eea;
    margin-bottom: 20px;
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
  \`,
  maxWidth: 800
});</code></pre>
            </div>

            <div class="demo-content" id="example6-content">
              <h2>内部报告</h2>
              <p><strong>报告编号:</strong> RPT-2024-001</p>
              <p><strong>日期:</strong> {{ currentDate }}</p>

              <h3>一、概述</h3>
              <p>本报告展示了 Print.js 的页眉配置功能。打印时将在顶部显示自定义的页眉内容。</p>

              <h3>二、关键数据</h3>
              <ul>
                <li>打印库: Print.js</li>
                <li>版本: 1.6.0</li>
                <li>功能: 页眉配置</li>
                <li>兼容性: 优秀</li>
              </ul>
            </div>
          </div>

          <!-- 示例7: ECharts图表 -->
          <div v-else-if="currentExample === 6">
            <h3>示例 7: ECharts图表打印</h3>
            <p><strong>✨ Print.js优势：</strong>轻量级（10KB）+ 零配置，直接打印。</p>

            <div class="controls">
              <button @click="example7Print" class="btn btn-primary">📊 打印图表</button>
            </div>

            <div class="demo-content" id="example7-content">
              <h2 style="text-align: center">数据看板</h2>
              <div
                ref="printjsChartRef"
                style="height: 250px; border: 1px solid #e2e8f0; margin: 20px 0"
              ></div>
              <p style="text-align: center; color: #718096">月度销售趋势</p>
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
            <!-- 高级1: PDF文件打印 -->
            <div v-if="currentAdvanced === 0">
              <h3>高级 1: PDF 文件打印</h3>
              <p>Print.js 支持通过 URL 直接打印 PDF 文件（需要浏览器支持）。</p>

              <div class="controls">
                <button @click="advanced1Print" class="btn btn-primary">📄 打印PDF (演示)</button>
                <p class="note">注意: 此功能依赖浏览器的PDF支持，某些浏览器可能需要额外配置。</p>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>// 打印PDF文件（通过URL）
printJS('path/to/document.pdf');

// 或使用配置对象
printJS({
  printable: 'https://example.com/document.pdf',
  type: 'pdf',
  showModal: true,  // 显示加载提示
  modalMessage: '正在加载PDF...'
});

// 打印PDF的特定页面
printJS({
  printable: 'document.pdf',
  type: 'pdf',
  onLoadingStart: () => console.log('开始加载'),
  onLoadingEnd: () => console.log('加载完成')
});</code></pre>
              </div>

              <div class="demo-content">
                <div class="info-box">
                  <h4>📋 PDF打印说明</h4>
                  <ul>
                    <li>支持本地和远程PDF文件</li>
                    <li>需要浏览器原生支持PDF查看</li>
                    <li>可以显示加载进度提示</li>
                    <li>某些浏览器可能需要用户手动确认</li>
                    <li>跨域PDF需要配置CORS</li>
                  </ul>
                  <p><strong>兼容性:</strong> Chrome, Firefox, Safari (需启用PDF查看器)</p>
                </div>
              </div>
            </div>

            <!-- 高级2: 多图片打印 -->
            <div v-else-if="currentAdvanced === 1">
              <h3>高级 2: 批量图片打印</h3>
              <p>同时打印多张图片，Print.js 会自动排版每张图片独立一页。</p>

              <div class="controls">
                <button @click="advanced2Print" class="btn btn-primary">🖼️ 打印多张图片</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>// 打印多张图片
const images = [
  'image1.jpg',
  'image2.png',
  'image3.gif'
];

printJS({
  printable: images,
  type: 'image',
  header: '图片集合',
  imageStyle: 'width:50%; margin: 20px auto; display: block;'
});</code></pre>
              </div>

              <div class="demo-content">
                <div class="image-grid">
                  <img
                    v-for="(img, index) in multiImages"
                    :key="index"
                    :src="img"
                    alt="演示图片"
                    class="grid-image"
                  />
                </div>
              </div>
            </div>

            <!-- 高级3: 复杂JSON表格 -->
            <div v-else-if="currentAdvanced === 2">
              <h3>高级 3: 复杂 JSON 表格打印</h3>
              <p>打印带有自定义列名、样式和排序的 JSON 数据表格。</p>

              <div class="controls">
                <button @click="advanced3Print" class="btn btn-primary">📊 打印复杂表格</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>printJS({
  printable: complexData,
  type: 'json',
  properties: [
    { field: 'id', displayName: '编号' },
    { field: 'name', displayName: '姓名' },
    { field: 'department', displayName: '部门' },
    { field: 'salary', displayName: '薪资' },
    { field: 'status', displayName: '状态' }
  ],
  header: '员工信息表',
  gridHeaderStyle: 'color: white; background: #667eea; font-weight: bold;',
  gridStyle: 'border: 1px solid #e2e8f0;',
  repeatTableHeader: true  // 每页重复表头
});</code></pre>
              </div>

              <div class="demo-content">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>编号</th>
                      <th>姓名</th>
                      <th>部门</th>
                      <th>薪资</th>
                      <th>状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in complexJsonData" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.department }}</td>
                      <td>{{ item.salary }}</td>
                      <td>
                        <span
                          :class="['status-badge', item.status === '在职' ? 'active' : 'inactive']"
                        >
                          {{ item.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 高级4: 自定义页边距和页面设置 -->
            <div v-else-if="currentAdvanced === 3">
              <h3>高级 4: 自定义页面设置</h3>
              <p>通过 CSS 注入控制页边距、纸张大小等打印参数。</p>

              <div class="controls">
                <label>
                  页边距:
                  <input v-model.number="pageMargin" type="range" min="5" max="50" step="5" />
                  <span class="value-display">{{ pageMargin }}mm</span>
                </label>
                <button @click="advanced4Print" class="btn btn-primary">🖨️ 自定义页面打印</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>printJS({
  printable: 'content-id',
  type: 'html',
  style: \`
    @page {
      size: A4;
      margin: {{ pageMargin }}mm;
    }
    @media print {
      body { font-size: 12pt; }
      h1 { font-size: 18pt; }
    }
  \`
});</code></pre>
              </div>

              <div class="demo-content" id="advanced4-content">
                <h2>自定义页面设置演示</h2>
                <p>
                  当前页边距: <strong>{{ pageMargin }}mm</strong>
                </p>
                <p>本示例演示如何通过CSS的@page规则控制打印页面的各项参数。</p>
                <ul>
                  <li>页边距 (margin): {{ pageMargin }}mm</li>
                  <li>纸张大小 (size): A4</li>
                  <li>字体大小 (font-size): 12pt</li>
                  <li>标题大小 (h1): 18pt</li>
                </ul>
              </div>
            </div>

            <!-- 高级5: 打印样式隔离 -->
            <div v-else-if="currentAdvanced === 4">
              <h3>高级 5: 样式隔离打印</h3>
              <p>使用 scanStyles: false 完全控制打印样式，避免页面样式干扰。</p>

              <div class="controls">
                <button @click="advanced5PrintWithStyles" class="btn btn-primary">
                  🎨 带页面样式
                </button>
                <button @click="advanced5PrintWithoutStyles" class="btn btn-secondary">
                  🎯 隔离样式
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>// 不扫描页面样式，完全自定义
printJS({
  printable: 'content-id',
  type: 'html',
  scanStyles: false,  // 关键: 不继承页面样式
  style: \`
    /* 完全自定义的打印样式 */
    body {
      font-family: Arial, sans-serif;
      font-size: 12pt;
      line-height: 1.6;
      color: #000;
    }
    h2 {
      color: #667eea;
      font-size: 16pt;
    }
    .custom-box {
      border: 2px solid #667eea;
      padding: 15px;
      background: #f7fafc;
    }
  \`
});</code></pre>
              </div>

              <div class="demo-content" id="advanced5-content">
                <h2>样式隔离演示</h2>
                <p>这个内容区域在页面上有特定样式（边框、背景色等）。</p>
                <div
                  class="custom-box"
                  style="
                    border: 2px solid #667eea;
                    padding: 15px;
                    background: #f7fafc;
                    margin: 1rem 0;
                  "
                >
                  <h3>自定义样式框</h3>
                  <p>使用 scanStyles: false 时，打印将不会继承页面上的这些样式。</p>
                  <ul>
                    <li>页面样式: 渐变背景、圆角</li>
                    <li>打印样式: 纯色、直角（自定义）</li>
                  </ul>
                </div>
                <p><strong>对比:</strong> 带样式打印会保留页面效果，隔离打印则使用自定义样式。</p>
              </div>
            </div>

            <!-- 高级6: 错误处理和加载状态 -->
            <div v-else-if="currentAdvanced === 5">
              <h3>高级 6: 错误处理和加载提示</h3>
              <p>完善的错误处理和用户反馈机制。</p>

              <div class="controls">
                <button @click="advanced6Print" class="btn btn-primary">🔄 打印(带加载提示)</button>
                <button @click="advanced6PrintError" class="btn btn-warning">⚠️ 模拟错误</button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre><code>printJS({
  printable: 'content-id',
  type: 'html',
  showModal: true,
  modalMessage: '正在准备打印内容，请稍候...',
  onLoadingStart: () => {
    console.log('开始加载');
    // 显示加载动画
  },
  onLoadingEnd: () => {
    console.log('加载完成');
    // 隐藏加载动画
  },
  onPrintDialogClose: () => {
    console.log('打印对话框已关闭');
  },
  onError: (error) => {
    console.error('打印错误:', error);
    alert('打印失败: ' + error.message);
  }
});</code></pre>
              </div>

              <div class="demo-content" id="advanced6-content">
                <div v-if="loadingStatus" :class="['status-box', loadingStatus.type]">
                  <p>
                    <strong>{{ loadingStatus.message }}</strong>
                  </p>
                  <p v-if="loadingStatus.detail">
                    <small>{{ loadingStatus.detail }}</small>
                  </p>
                </div>

                <h3>错误处理演示</h3>
                <p>完善的错误处理可以提升用户体验：</p>
                <ul>
                  <li>✅ 显示加载提示（showModal）</li>
                  <li>✅ onLoadingStart - 加载开始回调</li>
                  <li>✅ onLoadingEnd - 加载完成回调</li>
                  <li>✅ onPrintDialogClose - 对话框关闭回调</li>
                  <li>✅ onError - 错误捕获回调</li>
                </ul>
                <p><strong>建议:</strong> 生产环境应该始终处理onError，提供用户友好的错误提示。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 完整的文档和代码示例保留在后面 -->
        <div class="divider"></div>

        <div id="print-html-content" class="print-content" style="display: none">
          <div class="document">
            <h1>Print.js 示例文档</h1>
            <p class="doc-date">日期: {{ currentDate }}</p>

            <h2>一、关于 Print.js</h2>
            <p>
              Print.js 是一个轻量级的 JavaScript
              库，用于简化网页打印操作。它支持多种数据类型的打印， 包括 PDF、HTML、图片和 JSON
              数据。
            </p>

            <h2>二、核心特性</h2>
            <ul>
              <li>支持打印 PDF 文件（通过 URL）</li>
              <li>支持打印 HTML 元素</li>
              <li>支持打印图片（PNG、JPG 等）</li>
              <li>支持打印 JSON 数据为表格</li>
              <li>可自定义打印样式</li>
              <li>支持打印前回调和打印后回调</li>
            </ul>

            <h2>三、使用场景</h2>
            <div class="grid-2">
              <div class="card">
                <h3>📄 文档打印</h3>
                <p>适合打印简单的HTML文档、报告、订单等</p>
              </div>
              <div class="card">
                <h3>📊 数据打印</h3>
                <p>可以将JSON数据直接打印为表格</p>
              </div>
              <div class="card">
                <h3>🖼️ 图片打印</h3>
                <p>支持直接打印图片文件</p>
              </div>
              <div class="card">
                <h3>📋 快速打印</h3>
                <p>无需复杂配置即可实现打印功能</p>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-image" id="print-image" style="display: none">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23667eea' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPrint.js 演示图片%3C/text%3E%3C/svg%3E"
            alt="演示图片"
          />
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装</h4>
            <pre><code>npm install print-js
# 或
yarn add print-js</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 打印 HTML 元素</h4>
            <pre><code>import printJS from 'print-js';

// 基础用法
printJS({
  printable: 'element-id',
  type: 'html',
  header: '打印标题'
});

// 带样式
printJS({
  printable: 'element-id',
  type: 'html',
  style: '.custom { color: red; }',
  scanStyles: false
});</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 打印图片</h4>
            <pre><code>// 单张图片
printJS('image-url.jpg', 'image');

// 多张图片
printJS({
  printable: ['img1.jpg', 'img2.jpg'],
  type: 'image',
  header: '图片集合'
});</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 打印 JSON 数据</h4>
            <pre><code>const data = [
  { name: '张三', age: 25, city: '北京' },
  { name: '李四', age: 30, city: '上海' }
];

printJS({
  printable: data,
  type: 'json',
  properties: ['name', 'age', 'city'],
  header: '用户列表',
  gridHeaderStyle: 'color: red; border: 2px solid #3971A5;',
  gridStyle: 'border: 2px solid #3971A5;'
});</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 完整配置选项</h4>
            <pre><code>printJS({
  printable: 'element-id',      // 要打印的内容
  type: 'html',                  // pdf, html, image, json
  header: '页眉文字',             // 页眉
  headerStyle: 'font-size: 20px;', // 页眉样式
  maxWidth: 800,                 // 最大宽度
  css: 'custom.css',             // 外部CSS
  style: '.class { }',           // 内联样式
  scanStyles: true,              // 是否扫描现有样式
  targetStyles: ['*'],           // 目标样式
  ignoreElements: [],            // 忽略的元素
  onPrintDialogClose: () => {},  // 打印对话框关闭回调
  onError: (error) => {}         // 错误回调
});</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import printJS from 'print-js'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))
const currentExample = ref(0)
const printStatus = ref<{ type: string; message: string; time: string } | null>(null)

// ECharts refs
const printjsChartRef = ref<HTMLDivElement>()
let printjsChart: ECharts | null = null

const examples = [
  '基础HTML',
  '自定义样式',
  '打印图片',
  'JSON表格',
  '回调函数',
  '页眉配置',
  'ECharts图表',
]

// 高级示例标签
const advancedExamples = ['PDF文件', '多图片', '复杂表格', '页面设置', '样式隔离', '错误处理']

// 高级功能的state
const currentAdvanced = ref(0)
const pageMargin = ref(20)
const loadingStatus = ref<{ type: string; message: string; detail?: string } | null>(null)

// 多图片数据
const multiImages = ref([
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2348bb78' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E图片 1%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234299e1' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E图片 2%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ed8936' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E图片 3%3C/text%3E%3C/svg%3E",
])

// 复杂JSON数据
const complexJsonData = ref([
  { id: 'E001', name: '张三', department: '技术部', salary: '¥15,000', status: '在职' },
  { id: 'E002', name: '李四', department: '产品部', salary: '¥12,000', status: '在职' },
  { id: 'E003', name: '王五', department: '设计部', salary: '¥13,000', status: '在职' },
  { id: 'E004', name: '赵六', department: '运营部', salary: '¥11,000', status: '离职' },
  { id: 'E005', name: '孙七', department: '技术部', salary: '¥16,000', status: '在职' },
  { id: 'E006', name: '周八', department: '市场部', salary: '¥14,000', status: '在职' },
])

// JSON数据
const jsonData = ref([
  { 框架: 'Print.js', 类型: '轻量级打印', 大小: '10KB', 评分: '⭐⭐⭐⭐', 场景: '快速打印' },
  { 框架: 'jsPDF', 类型: 'PDF生成', 大小: '150KB', 评分: '⭐⭐⭐⭐', 场景: 'PDF文档' },
  { 框架: 'pdfmake', 类型: '声明式PDF', 大小: '600KB', 评分: '⭐⭐⭐⭐⭐', 场景: '复杂文档' },
  { 框架: 'html2canvas', 类型: 'HTML截图', 大小: '180KB', 评分: '⭐⭐⭐⭐', 场景: '页面截图' },
  { 框架: 'html2pdf.js', 类型: 'HTML转PDF', 大小: '200KB', 评分: '⭐⭐⭐⭐', 场景: 'HTML文档' },
])

// 示例1: 基础HTML打印
const example1Print = () => {
  printJS({
    printable: 'example1-content',
    type: 'html',
    header: 'Print.js 基础打印示例',
  })
}

// 示例2: 自定义样式打印
const example2Print = () => {
  printJS({
    printable: 'example2-content',
    type: 'html',
    header: '自定义样式打印',
    headerStyle:
      'font-size: 24px; font-weight: bold; text-align: center; color: #667eea; margin-bottom: 20px;',
    style: `
      h2 { color: #667eea; font-size: 20px; }
      .highlight { background: yellow; padding: 2px 5px; }
      .bordered {
        border: 2px solid #667eea;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
      }
      ul { margin-left: 20px; }
      li { margin: 8px 0; }
    `,
    scanStyles: false,
  })
}

// 示例3: 打印图片
const example3Print = () => {
  const imgElement = document.querySelector('#example3-image img') as HTMLImageElement
  if (imgElement) {
    printJS({
      printable: imgElement.src,
      type: 'image',
      header: 'Print.js 图片打印',
      imageStyle: 'width: 100%; max-width: 600px; margin: 20px auto; display: block;',
    })
  }
}

// 示例4: JSON表格打印
const example4Print = () => {
  printJS({
    printable: jsonData.value,
    type: 'json',
    properties: ['框架', '类型', '大小', '评分', '场景'],
    header: '前端打印框架对比表',
    gridHeaderStyle:
      'color: white; background: #667eea; padding: 12px; font-weight: bold; border: 1px solid #667eea;',
    gridStyle: 'border: 1px solid #e2e8f0; padding: 10px; text-align: left;',
  })
}

// 示例5: 带回调的打印
const example5Print = () => {
  printJS({
    printable: 'example5-content',
    type: 'html',
    header: 'Print.js 回调演示',
    onPrintDialogClose: () => {
      printStatus.value = {
        type: 'success',
        message: '✅ 打印对话框已关闭（打印完成或用户取消）',
        time: new Date().toLocaleTimeString('zh-CN'),
      }
      // 3秒后清除状态
      setTimeout(() => {
        printStatus.value = null
      }, 3000)
    },
    onError: (error) => {
      printStatus.value = {
        type: 'error',
        message: '❌ 打印出错: ' + error,
        time: new Date().toLocaleTimeString('zh-CN'),
      }
    },
  })
}

// 示例6: 页眉配置打印
const example6Print = () => {
  printJS({
    printable: 'example6-content',
    type: 'html',
    header: '公司内部文件 - 机密',
    headerStyle: `
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: #667eea;
      margin-bottom: 20px;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    `,
    maxWidth: 800,
    style: `
      h2 { color: #2d3748; margin-top: 1rem; }
      h3 { color: #4a5568; margin-top: 1rem; }
      ul { margin-left: 20px; }
      li { margin: 5px 0; }
    `,
  })
}

// 示例7: ECharts图表打印
const example7Print = () => {
  printJS({
    printable: 'example7-content',
    type: 'html',
    targetStyles: ['*'],
  })
}

// 监听示例切换
watch(currentExample, async (newVal) => {
  if (newVal === 6) {
    await nextTick()
    initPrintjsChart()
  }
})

// 初始化Print.js的ECharts
const initPrintjsChart = () => {
  if (printjsChartRef.value) {
    // 如果图表已存在，先销毁
    if (printjsChart) {
      printjsChart.dispose()
      printjsChart = null
    }

    printjsChart = echarts.init(printjsChartRef.value)
    printjsChart.setOption({
      title: { text: '销售趋势', left: 'center', textStyle: { fontSize: 14 } },
      xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月'] },
      yAxis: { type: 'value' },
      series: [
        {
          data: [120, 200, 150, 80, 170, 210],
          type: 'bar',
          itemStyle: { color: '#48bb78' },
        },
      ],
    })
  }
}

// === 高级示例函数 ===

// 高级1: PDF打印（演示用，实际需要真实PDF文件）
const advanced1Print = () => {
  alert(
    'PDF打印功能演示\n\n实际使用时，请提供真实的PDF文件URL：\n\nprintJS({\n  printable: "document.pdf",\n  type: "pdf",\n  showModal: true\n});\n\n注意：需要浏览器支持PDF查看器',
  )

  // 实际代码示例（需要真实PDF）:
  // printJS({
  //   printable: '/path/to/document.pdf',
  //   type: 'pdf',
  //   showModal: true,
  //   modalMessage: '正在加载PDF...'
  // })
}

// 高级2: 多图片打印
const advanced2Print = () => {
  printJS({
    printable: multiImages.value,
    type: 'image',
    header: 'Print.js 图片集合',
    headerStyle: 'font-size: 24px; font-weight: bold; text-align: center; margin-bottom: 20px;',
    imageStyle:
      'width: 80%; max-width: 500px; margin: 20px auto; display: block; border: 2px solid #e2e8f0; border-radius: 8px; page-break-after: always; page-break-inside: avoid;',
    style: '@media print { img { page-break-after: always; page-break-inside: avoid; } }',
  })
}

// 高级3: 复杂JSON表格打印
const advanced3Print = () => {
  printJS({
    printable: complexJsonData.value,
    type: 'json',
    properties: [
      { field: 'id', displayName: '编号' },
      { field: 'name', displayName: '姓名' },
      { field: 'department', displayName: '部门' },
      { field: 'salary', displayName: '薪资' },
      { field: 'status', displayName: '状态' },
    ],
    header: '员工信息表 - 2024年度',
    headerStyle:
      'font-size: 22px; font-weight: bold; text-align: center; color: #667eea; margin-bottom: 20px;',
    gridHeaderStyle:
      'color: white; background: #667eea; padding: 12px; font-weight: bold; border: 1px solid #667eea; text-align: left;',
    gridStyle: 'border: 1px solid #e2e8f0; padding: 10px; text-align: left;',
    repeatTableHeader: true,
  })
}

// 高级4: 自定义页面设置
const advanced4Print = () => {
  printJS({
    printable: 'advanced4-content',
    type: 'html',
    header: '自定义页面设置',
    headerStyle: 'font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 15px;',
    style: `
      @page {
        size: A4;
        margin: ${pageMargin.value}mm;
      }
      @media print {
        body {
          font-family: Arial, sans-serif;
          font-size: 12pt;
          line-height: 1.6;
        }
        h2 {
          font-size: 18pt;
          color: #2d3748;
          border-bottom: 2px solid #667eea;
          padding-bottom: 5px;
          margin-bottom: 15px;
        }
        p, li {
          margin: 8px 0;
        }
        strong {
          color: #667eea;
        }
      }
    `,
    scanStyles: false,
  })
}

// 高级5: 带页面样式打印
const advanced5PrintWithStyles = () => {
  printJS({
    printable: 'advanced5-content',
    type: 'html',
    header: '打印 - 保留页面样式',
    scanStyles: true, // 扫描并应用页面样式
    targetStyles: ['*'], // 包含所有样式
  })
}

// 高级5: 隔离样式打印
const advanced5PrintWithoutStyles = () => {
  printJS({
    printable: 'advanced5-content',
    type: 'html',
    header: '打印 - 自定义样式（隔离）',
    scanStyles: false, // 不扫描页面样式
    style: `
      body {
        font-family: 'Times New Roman', serif;
        font-size: 12pt;
        line-height: 1.8;
        color: #000;
      }
      h2 {
        font-size: 16pt;
        color: #333;
        margin: 15px 0;
      }
      h3 {
        font-size: 14pt;
        color: #666;
        margin: 10px 0;
      }
      p, li {
        margin: 6px 0;
      }
      .custom-box {
        border: 1px solid #999;
        padding: 10px;
        background: #f9f9f9;
        margin: 10px 0;
      }
      strong {
        font-weight: bold;
        color: #000;
      }
    `,
  })
}

// 高级6: 带加载提示的打印
const advanced6Print = () => {
  loadingStatus.value = {
    type: 'info',
    message: '⏳ 正在准备打印内容...',
    detail: '请等待打印对话框',
  }

  printJS({
    printable: 'advanced6-content',
    type: 'html',
    header: 'Print.js 错误处理演示',
    showModal: true,
    modalMessage: '正在准备打印内容，请稍候...',
    onLoadingStart: () => {
      console.log('[Print.js] 开始加载')
    },
    onLoadingEnd: () => {
      console.log('[Print.js] 加载完成')
      loadingStatus.value = {
        type: 'success',
        message: '✅ 打印内容加载完成',
        detail: '打印对话框已打开',
      }
      setTimeout(() => {
        loadingStatus.value = null
      }, 3000)
    },
    onPrintDialogClose: () => {
      console.log('[Print.js] 打印对话框已关闭')
    },
    onError: (error) => {
      console.error('[Print.js] 错误:', error)
      loadingStatus.value = {
        type: 'error',
        message: '❌ 打印出错',
        detail: error.toString(),
      }
    },
  })
}

// 高级6: 模拟错误
const advanced6PrintError = () => {
  loadingStatus.value = {
    type: 'error',
    message: '❌ 打印错误演示',
    detail: '模拟：找不到要打印的元素 (element not found)',
  }

  // 尝试打印不存在的元素以触发错误
  try {
    printJS({
      printable: 'non-existent-element-id-12345',
      type: 'html',
      onError: (error) => {
        console.error('[Print.js] 捕获到错误:', error)
        loadingStatus.value = {
          type: 'error',
          message: '❌ 打印失败',
          detail: '原因: ' + error.toString(),
        }
      },
    })
  } catch (error) {
    loadingStatus.value = {
      type: 'error',
      message: '❌ JavaScript异常',
      detail: error instanceof Error ? error.message : String(error),
    }
  }

  // 3秒后清除错误提示
  setTimeout(() => {
    loadingStatus.value = null
  }, 5000)
}

// 旧的函数保留用于代码示例区
const printHtml = () => {
  printJS({
    printable: 'print-html-content',
    type: 'html',
    header: 'Print.js 打印示例',
    headerStyle: 'font-size: 24px; font-weight: bold; text-align: center;',
    style: `
      .document { padding: 20px; }
      h1 { color: #667eea; }
      h2 { color: #2d3748; margin-top: 2rem; }
      .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .card { border: 1px solid #e2e8f0; padding: 1rem; border-radius: 8px; }
    `,
    scanStyles: false,
  })
}

const printImage = () => {
  const imgElement = document.querySelector('#print-image img') as HTMLImageElement
  if (imgElement) {
    printJS({
      printable: imgElement.src,
      type: 'image',
      header: '图片打印示例',
      imageStyle: 'width: 100%; margin: 20px auto;',
    })
  }
}

const printJson = () => {
  const jsonData = [
    { 框架: 'Print.js', 类型: '轻量级', 大小: '10KB', 评分: '⭐⭐⭐⭐' },
    { 框架: 'jsPDF', 类型: 'PDF生成', 大小: '150KB', 评分: '⭐⭐⭐⭐' },
    { 框架: 'pdfmake', 类型: 'PDF生成', 大小: '600KB', 评分: '⭐⭐⭐⭐⭐' },
    { 框架: 'html2canvas', 类型: 'HTML转换', 大小: '180KB', 评分: '⭐⭐⭐⭐' },
  ]

  printJS({
    printable: jsonData,
    type: 'json',
    properties: ['框架', '类型', '大小', '评分'],
    header: '前端打印框架对比',
    gridHeaderStyle:
      'color: white; background: #667eea; padding: 10px; font-weight: bold; border: 1px solid #667eea;',
    gridStyle: 'border: 1px solid #e2e8f0; padding: 8px;',
  })
}

const printWithCustomStyle = () => {
  printJS({
    printable: 'print-html-content',
    type: 'html',
    header: '自定义样式打印',
    headerStyle:
      'font-size: 28px; font-weight: bold; text-align: center; color: #667eea; margin-bottom: 20px;',
    style: `
      @page { margin: 2cm; }
      body { font-family: 'Arial', sans-serif; }
      .document {
        padding: 30px;
        border: 2px solid #667eea;
        border-radius: 8px;
      }
      h1 {
        color: #667eea;
        font-size: 24px;
        border-bottom: 2px solid #667eea;
        padding-bottom: 10px;
      }
      h2 {
        color: #2d3748;
        margin-top: 2rem;
        font-size: 18px;
      }
      h3 { color: #667eea; }
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;
      }
      .card {
        border: 2px solid #e2e8f0;
        padding: 1rem;
        border-radius: 8px;
        background: #f7fafc;
      }
      .doc-date {
        color: #718096;
        font-style: italic;
        margin-bottom: 2rem;
      }
    `,
    scanStyles: false,
  })
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

.status-box.error {
  background: #fef2f2;
  border-color: #f56565;
  color: #742a2a;
}

.status-box p {
  margin: 0.25rem 0;
}

.status-box small {
  color: #718096;
}

/* 高级功能区 */
.advanced-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px dashed #e2e8f0;
}

/* 图片网格 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.grid-image {
  width: 100%;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
  transition: transform 0.2s;
}

.grid-image:hover {
  transform: scale(1.05);
  border-color: #667eea;
}

/* 状态徽章 */
.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-badge.active {
  background: #c6f6d5;
  color: #22543d;
}

.status-badge.inactive {
  background: #fed7d7;
  color: #742a2a;
}

/* 信息框 */
.info-box {
  background: #edf2f7;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  border-radius: 4px;
}

.info-box h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.info-box ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.info-box li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.info-box p {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #cbd5e0;
}

/* 加载状态框 */
.status-box.info {
  background: #ebf8ff;
  border-color: #4299e1;
  color: #2c5282;
}

/* 控件说明文字 */
.controls .note {
  color: #718096;
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
  padding: 0.5rem 0;
}

/* 值显示 */
.controls .value-display {
  display: inline-block;
  min-width: 60px;
  padding: 0.25rem 0.75rem;
  background: #edf2f7;
  border-radius: 4px;
  font-weight: 600;
  color: #667eea;
  margin-left: 1rem;
}

.controls input[type='range'] {
  width: 200px;
  margin: 0 1rem;
  vertical-align: middle;
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

.btn-warning {
  background: #ed8936;
  color: white;
}

.btn-warning:hover {
  background: #dd6b20;
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

.doc-date {
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
  margin-bottom: 1rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

.card {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  background: #f7fafc;
}

.card h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.card p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.demo-image {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: #f7fafc;
  border-radius: 8px;
}

.demo-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
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
