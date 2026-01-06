<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📋 pdfmake - 声明式PDF生成</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>pdfmake</strong></p>
          <p>npm install pdfmake</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 60+</li>
            <li>✅ Firefox 55+</li>
            <li>✅ Safari 11+</li>
            <li>✅ Edge 79+</li>
            <li>✅ Node.js</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (85%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 客户端/服务端</li>
            <li>✅ 高效渲染</li>
            <li>⚠️ 首次加载较慢</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ 完全可控</li>
            <li>✅ pageBreak</li>
            <li>✅ 自动分页</li>
            <li>✅ 页眉页脚</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~600 KB</p>
          <p>(包含字体)</p>
        </div>

        <div class="info-section">
          <h3>✨ 核心功能</h3>
          <ul>
            <li>✅ 声明式 API</li>
            <li>✅ 表格布局</li>
            <li>✅ 列表样式</li>
            <li>✅ 图片嵌入</li>
            <li>✅ 多语言支持</li>
            <li>✅ 水印背景</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>API 非常友好</li>
            <li>功能强大完整</li>
            <li>文档详尽</li>
            <li>社区活跃</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>文件体积较大</li>
            <li>首次加载慢</li>
            <li>中文字体需配置</li>
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
            <!-- 示例1: 创建基础文档 -->
            <div v-if="currentExample === 0">
              <h3>示例 1: 创建基础文档</h3>
              <p>使用pdfmake的声明式API创建简单的PDF文档，包含文本和基础样式。</p>

              <div class="controls">
                <button @click="example1Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📄 生成基础PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>import pdfMake from 'pdfmake/build/pdfmake'

const docDefinition = {
  content: [
    'Hello World!',
    '这是使用 pdfmake 生成的 PDF 文档',
    '生成时间: ' + new Date().toLocaleDateString('zh-CN')
  ]
}

pdfMake.createPdf(docDefinition).download('basic.pdf')</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p><strong>预览内容:</strong></p>
                  <p>Hello World!</p>
                  <p>这是使用 pdfmake 生成的 PDF 文档</p>
                  <p>生成时间: {{ currentDate }}</p>
                </div>
              </div>
            </div>

            <!-- 示例2: 文本样式 -->
            <div v-else-if="currentExample === 1">
              <h3>示例 2: 文本样式</h3>
              <p>使用styles定义可复用的样式，并应用到不同的文本元素上。</p>

              <div class="controls">
                <button @click="example2Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '🎨 生成样式PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    { text: '标题文本', style: 'header' },
    { text: '副标题', style: 'subheader' },
    { text: '普通正文内容', fontSize: 12 },
    { text: '加粗文本', bold: true },
    { text: '斜体文本', italics: true },
    { text: '彩色文本', color: '#667eea' },
    { text: '带背景色的文本', background: '#fef3c7' }
  ],
  styles: {
    header: { fontSize: 22, bold: true, color: '#667eea' },
    subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] }
  }
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p style="font-size: 1.5rem; font-weight: bold; color: #667eea">标题文本</p>
                  <p style="font-size: 1.2rem; font-weight: bold">副标题</p>
                  <p>普通正文内容</p>
                  <p style="font-weight: bold">加粗文本</p>
                  <p style="font-style: italic">斜体文本</p>
                  <p style="color: #667eea">彩色文本</p>
                  <p style="background: #fef3c7; display: inline-block; padding: 0.25rem">
                    带背景色的文本
                  </p>
                </div>
              </div>
            </div>

            <!-- 示例3: 列表 -->
            <div v-else-if="currentExample === 2">
              <h3>示例 3: 列表</h3>
              <p>pdfmake支持有序列表(ol)和无序列表(ul)，可以嵌套使用。</p>

              <div class="controls">
                <button @click="example3Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📋 生成列表PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    { text: '无序列表', style: 'header' },
    {
      ul: [
        '第一项',
        '第二项',
        '第三项'
      ]
    },
    { text: '有序列表', style: 'header', margin: [0, 15, 0, 5] },
    {
      ol: [
        '步骤一',
        '步骤二',
        '步骤三'
      ]
    }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p style="font-weight: bold; margin-bottom: 0.5rem">无序列表</p>
                  <ul style="margin-left: 1.5rem">
                    <li>第一项</li>
                    <li>第二项</li>
                    <li>第三项</li>
                  </ul>
                  <p style="font-weight: bold; margin: 1rem 0 0.5rem 0">有序列表</p>
                  <ol style="margin-left: 1.5rem">
                    <li>步骤一</li>
                    <li>步骤二</li>
                    <li>步骤三</li>
                  </ol>
                </div>
              </div>
            </div>

            <!-- 示例4: 多列布局 -->
            <div v-else-if="currentExample === 3">
              <h3>示例 4: 多列布局</h3>
              <p>使用columns创建多列布局，支持灵活的宽度设置。</p>

              <div class="controls">
                <button @click="example4Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📐 生成多列PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    { text: '两列布局', style: 'header' },
    {
      columns: [
        { width: '50%', text: '左侧列内容\n这是左侧的内容区域' },
        { width: '50%', text: '右侧列内容\n这是右侧的内容区域' }
      ]
    },
    { text: '三列布局', style: 'header', margin: [0, 20, 0, 5] },
    {
      columns: [
        { width: '*', text: '列1' },
        { width: '*', text: '列2' },
        { width: '*', text: '列3' }
      ],
      columnGap: 10
    }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p style="font-weight: bold; margin-bottom: 0.5rem">两列布局</p>
                  <div style="display: flex; gap: 1rem; margin-bottom: 1rem">
                    <div style="flex: 1; background: #f7fafc; padding: 0.75rem; border-radius: 4px">
                      <p>左侧列内容</p>
                      <p>这是左侧的内容区域</p>
                    </div>
                    <div style="flex: 1; background: #f7fafc; padding: 0.75rem; border-radius: 4px">
                      <p>右侧列内容</p>
                      <p>这是右侧的内容区域</p>
                    </div>
                  </div>
                  <p style="font-weight: bold; margin-bottom: 0.5rem">三列布局</p>
                  <div style="display: flex; gap: 0.5rem">
                    <div
                      style="
                        flex: 1;
                        background: #e2e8f0;
                        padding: 0.5rem;
                        text-align: center;
                        border-radius: 4px;
                      "
                    >
                      列1
                    </div>
                    <div
                      style="
                        flex: 1;
                        background: #e2e8f0;
                        padding: 0.5rem;
                        text-align: center;
                        border-radius: 4px;
                      "
                    >
                      列2
                    </div>
                    <div
                      style="
                        flex: 1;
                        background: #e2e8f0;
                        padding: 0.5rem;
                        text-align: center;
                        border-radius: 4px;
                      "
                    >
                      列3
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 示例5: 页眉页脚 -->
            <div v-else-if="currentExample === 4">
              <h3>示例 5: 页眉和页脚</h3>
              <p>为每一页添加页眉和页脚，支持动态页码显示。</p>

              <div class="controls">
                <button @click="example5Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📄 生成带页眉页脚PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  header: {
    text: '公司机密文件',
    alignment: 'center',
    margin: [0, 10, 0, 0]
  },
  footer: (currentPage, pageCount) => ({
    text: `第 ${currentPage} / ${pageCount} 页`,
    alignment: 'center',
    margin: [0, 0, 0, 10]
  }),
  content: [
    { text: '文档内容', style: 'header' },
    { text: '这是文档的主体内容...' }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box" style="position: relative">
                  <div style="border: 1px solid #e2e8f0; padding: 1rem">
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
                    <div style="min-height: 100px; padding: 1rem 0">
                      <p style="font-weight: bold">文档内容</p>
                      <p>这是文档的主体内容...</p>
                    </div>
                    <p
                      style="
                        text-align: center;
                        color: #718096;
                        font-size: 0.9rem;
                        border-top: 1px solid #e2e8f0;
                        padding-top: 0.5rem;
                      "
                    >
                      第 1 / 1 页
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 示例6: 分页控制 -->
            <div v-else-if="currentExample === 5">
              <h3>示例 6: 分页控制</h3>
              <p>使用pageBreak控制强制分页，或pageBreakBefore进行条件分页。</p>

              <div class="controls">
                <button @click="example6Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📑 生成多页PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    { text: '第一页内容', style: 'header' },
    { text: '这是第一页的内容...' },
    { text: '第二页内容', style: 'header', pageBreak: 'before' },
    { text: '这是第二页的内容...' },
    { text: '第三页内容', style: 'header', pageBreak: 'before' },
    { text: '这是第三页的内容...' }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
                    <div
                      style="
                        width: 120px;
                        border: 1px solid #e2e8f0;
                        padding: 0.5rem;
                        border-radius: 4px;
                      "
                    >
                      <p style="font-size: 0.8rem; font-weight: bold">第一页</p>
                      <p style="font-size: 0.75rem; color: #718096">第一页内容...</p>
                    </div>
                    <div
                      style="
                        width: 120px;
                        border: 1px solid #e2e8f0;
                        padding: 0.5rem;
                        border-radius: 4px;
                      "
                    >
                      <p style="font-size: 0.8rem; font-weight: bold">第二页</p>
                      <p style="font-size: 0.75rem; color: #718096">第二页内容...</p>
                    </div>
                    <div
                      style="
                        width: 120px;
                        border: 1px solid #e2e8f0;
                        padding: 0.5rem;
                        border-radius: 4px;
                      "
                    >
                      <p style="font-size: 0.8rem; font-weight: bold">第三页</p>
                      <p style="font-size: 0.75rem; color: #718096">第三页内容...</p>
                    </div>
                  </div>
                  <p class="note">pageBreak: 'before' 会在元素前强制分页</p>
                </div>
              </div>
            </div>

            <!-- 示例7: ECharts图表 -->
            <div v-else-if="currentExample === 6">
              <h3>示例 7: ECharts图表集成</h3>
              <p>
                <strong>✨ pdfmake优势：</strong
                >利用<strong>声明式布局</strong>和<strong>columns自动对齐</strong>，轻松实现图表的响应式排版。
              </p>

              <div class="controls">
                <button @click="example7Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📊 生成图表PDF' }}
                </button>
              </div>

              <div class="demo-content">
                <div
                  style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0"
                >
                  <div ref="pdfmakePieRef" style="height: 200px; border: 1px solid #e2e8f0"></div>
                  <div ref="pdfmakeBarRef" style="height: 200px; border: 1px solid #e2e8f0"></div>
                </div>
                <p class="note">pdfmake用columns数组实现图表并排，无需手动计算坐标</p>
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
            <!-- 高级1: 表格 -->
            <div v-if="currentAdvanced === 0">
              <h3>高级 1: 表格生成</h3>
              <p>pdfmake的表格功能非常强大，支持表头、合并单元格、边框样式等。</p>

              <div class="controls">
                <button @click="advanced1Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📊 生成表格PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    {
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 100, '*'],
        body: [
          [
            { text: '姓名', style: 'tableHeader' },
            { text: '部门', style: 'tableHeader' },
            { text: '职位', style: 'tableHeader' },
            { text: '工资', style: 'tableHeader' }
          ],
          ['张三', '技术部', '前端工程师', '¥15,000'],
          ['李四', '产品部', '产品经理', '¥18,000']
        ]
      },
      layout: 'lightHorizontalLines'
    }
  ]
}</code></pre>
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
                      <td>¥{{ (12000 + i * 1000).toLocaleString() }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 高级2: 图片嵌入 -->
            <div v-else-if="currentAdvanced === 1">
              <h3>高级 2: 图片嵌入</h3>
              <p>支持Base64图片、URL图片和SVG图片的嵌入，可以控制尺寸和对齐方式。</p>

              <div class="controls">
                <button @click="advanced2Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '🖼️ 生成图片PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    { text: 'PDF中的图片', style: 'header' },
    {
      image: 'data:image/png;base64,...',
      width: 200,
      height: 150
    },
    // 或者使用图片对齐
    {
      image: 'data:image/png;base64,...',
      width: 150,
      alignment: 'center'
    },
    // 圆角图片效果 (使用SVG)
    {
      svg: '&lt;svg&gt;...&lt;/svg&gt;',
      width: 100
    }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p><strong>图片预览:</strong></p>
                  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center">
                    <div
                      style="
                        width: 150px;
                        height: 100px;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                      "
                    >
                      示例图片
                    </div>
                    <p class="note">实际PDF中会嵌入Base64格式的图片数据</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 高级3: 水印和背景 -->
            <div v-else-if="currentAdvanced === 2">
              <h3>高级 3: 水印和背景</h3>
              <p>为整个文档添加背景水印，支持文字水印和图片水印。</p>

              <div class="controls">
                <button @click="advanced3Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '💧 生成带水印PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  background: (currentPage, pageSize) => ({
    text: '机密文件',
    color: '#cccccc',
    opacity: 0.3,
    bold: true,
    fontSize: 60,
    alignment: 'center',
    margin: [0, pageSize.height / 2 - 30]
  }),
  content: [
    { text: '带水印的文档', style: 'header' },
    { text: '这是文档内容...' }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box" style="position: relative; min-height: 150px">
                  <div
                    style="
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%) rotate(-30deg);
                      font-size: 2.5rem;
                      color: rgba(200, 200, 200, 0.4);
                      pointer-events: none;
                      white-space: nowrap;
                    "
                  >
                    机密文件
                  </div>
                  <p style="position: relative; z-index: 1"><strong>带水印的文档</strong></p>
                  <p style="position: relative; z-index: 1">这是文档内容，水印显示在背景中...</p>
                </div>
              </div>
            </div>

            <!-- 高级4: 复杂表格 -->
            <div v-else-if="currentAdvanced === 3">
              <h3>高级 4: 复杂表格布局</h3>
              <p>支持单元格合并、嵌套表格、自定义边框等高级表格功能。</p>

              <div class="controls">
                <button @click="advanced4Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📋 生成复杂表格PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    {
      table: {
        body: [
          // 合并列
          [{ text: '合并两列', colSpan: 2 }, {}, '第三列'],
          // 合并行
          [{ text: '合并两行', rowSpan: 2 }, 'B1', 'C1'],
          [{}, 'B2', 'C2']
        ]
      }
    }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <table class="data-table" style="width: 100%">
                    <tr>
                      <td colspan="2" style="text-align: center; background: #f0f0f0">合并两列</td>
                      <td>第三列</td>
                    </tr>
                    <tr>
                      <td rowspan="2" style="text-align: center; background: #f0f0f0">合并两行</td>
                      <td>B1</td>
                      <td>C1</td>
                    </tr>
                    <tr>
                      <td>B2</td>
                      <td>C2</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <!-- 高级5: 链接和书签 -->
            <div v-else-if="currentAdvanced === 4">
              <h3>高级 5: 链接和目录</h3>
              <p>添加可点击的超链接和文档内部跳转链接，支持自动生成目录。</p>

              <div class="controls">
                <button @click="advanced5Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '🔗 生成带链接PDF' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  content: [
    // 外部链接
    {
      text: '访问 pdfmake 官网',
      link: 'https://pdfmake.github.io/docs/',
      color: 'blue',
      decoration: 'underline'
    },
    // 内部链接 (跳转到锚点)
    {
      text: '跳转到第二章',
      linkToDestination: 'chapter2'
    },
    // 定义锚点
    { text: '第二章', id: 'chapter2', pageBreak: 'before' }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p>
                    <a
                      href="https://pdfmake.github.io/docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style="color: #667eea; text-decoration: underline"
                      >访问 pdfmake 官网</a
                    >
                    (外部链接)
                  </p>
                  <p>
                    <a href="#" style="color: #667eea; text-decoration: underline">跳转到第二章</a>
                    (内部链接)
                  </p>
                  <p class="note">PDF中的链接可以点击跳转</p>
                </div>
              </div>
            </div>

            <!-- 高级6: 完整报告 -->
            <div v-else-if="currentAdvanced === 5">
              <h3>高级 6: 完整报告生成</h3>
              <p>综合运用所有功能，生成包含封面、目录、正文、表格的完整报告。</p>

              <div class="controls">
                <button @click="advanced6Generate" class="btn btn-primary" :disabled="loading">
                  {{ loading ? '⏳ 生成中...' : '📈 生成完整报告' }}
                </button>
              </div>

              <div class="code-display">
                <h4>代码示例:</h4>
                <pre v-pre><code>const docDefinition = {
  info: {
    title: '年度报告',
    author: '公司名称',
    subject: '2024年度工作总结'
  },
  header: (currentPage, pageCount) =&gt; ({...}),
  footer: (currentPage, pageCount) =&gt; ({...}),
  content: [
    // 封面
    { text: '2024年度报告', style: 'title' },
    // 目录
    { toc: { title: { text: '目录', style: 'header' } } },
    // 正文章节
    { text: '第一章 概述', style: 'header', tocItem: true },
    // 数据表格
    { table: {...} },
    // 图表区域
    { image: '...' }
  ]
}</code></pre>
              </div>

              <div class="demo-content">
                <div class="preview-box">
                  <p
                    style="font-size: 1.5rem; font-weight: bold; text-align: center; color: #667eea"
                  >
                    2024年度报告
                  </p>
                  <div
                    style="margin-top: 1rem; padding: 1rem; background: #f7fafc; border-radius: 4px"
                  >
                    <p style="font-weight: bold">目录</p>
                    <p>1. 概述 ................ 2</p>
                    <p>2. 业绩总结 ............ 3</p>
                    <p>3. 数据分析 ............ 5</p>
                    <p>4. 未来规划 ............ 8</p>
                  </div>
                  <p class="note">完整报告包含：封面、目录、正文、表格、图表等</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 保留原有快捷按钮 -->
        <div class="divider"></div>

        <div class="controls">
          <button @click="generateSimplePDF" class="btn btn-primary" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📄 生成简单PDF' }}
          </button>
          <button @click="generateTablePDF" class="btn btn-secondary" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📊 生成表格PDF' }}
          </button>
          <button @click="generateComplexPDF" class="btn btn-info" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📑 生成复杂文档' }}
          </button>
          <button @click="generateReportPDF" class="btn btn-warning" :disabled="loading">
            {{ loading ? '⏳ 生成中...' : '📈 生成完整报告' }}
          </button>
        </div>

        <div
          v-if="statusMessage"
          class="status-message"
          :class="{ error: statusMessage.includes('❌') }"
        >
          {{ statusMessage }}
        </div>

        <div class="preview-hint">
          <p>💡 点击按钮生成并下载中文 PDF 文档</p>
          <p v-if="!fontsReady" class="loading-fonts">⏳ 正在初始化中文字体...</p>
          <p v-else class="fonts-ready">✅ 中文字体已就绪</p>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装和导入</h4>
            <pre><code>npm install pdfmake

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 基础文档</h4>
            <pre><code>const docDefinition = {
  content: [
    'First paragraph',
    'Second paragraph'
  ]
};

pdfMake.createPdf(docDefinition).download('document.pdf');
// 或在浏览器中打开
pdfMake.createPdf(docDefinition).open();</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 文本样式</h4>
            <pre><code>const docDefinition = {
  content: [
    { text: '标题', style: 'header' },
    { text: '副标题', style: 'subheader' },
    { text: '正文内容', fontSize: 12 },
    { text: '加粗文本', bold: true },
    { text: '斜体文本', italics: true }
  ],
  styles: {
    header: {
      fontSize: 22,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5]
    }
  }
};</code></pre>
          </div>

          <div class="code-block">
            <h4>4. 表格生成</h4>
            <pre><code>const docDefinition = {
  content: [
    {
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 100, '*'],
        body: [
          ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
          ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3', 'Row 1, Cell 4'],
          ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3', 'Row 2, Cell 4']
        ]
      }
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 列表样式</h4>
            <pre><code>const docDefinition = {
  content: [
    // 无序列表
    {
      ul: [
        'Item 1',
        'Item 2',
        'Item 3'
      ]
    },
    // 有序列表
    {
      ol: [
        'First item',
        'Second item',
        'Third item'
      ]
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 分页控制</h4>
            <pre><code>const docDefinition = {
  content: [
    { text: 'Page 1 content' },
    { text: 'Page 2 content', pageBreak: 'before' },
    { text: 'This stays on page 2', pageBreakBefore: (currentNode) => {
      return currentNode.headlineLevel === 1;
    }}
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>7. 页眉和页脚</h4>
            <pre><code>const docDefinition = {
  header: 'Simple header text',
  footer: (currentPage, pageCount) => {
    return {
      text: \`Page \${currentPage} of \${pageCount}\`,
      alignment: 'center'
    };
  },
  content: [
    'Content goes here'
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>8. 图片嵌入</h4>
            <pre><code>const docDefinition = {
  content: [
    {
      image: 'data:image/jpeg;base64,...',
      width: 150,
      height: 150
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>9. 多列布局</h4>
            <pre><code>const docDefinition = {
  content: [
    {
      columns: [
        {
          width: '50%',
          text: 'Left column content'
        },
        {
          width: '50%',
          text: 'Right column content'
        }
      ]
    }
  ]
};</code></pre>
          </div>

          <div class="code-block">
            <h4>10. 背景和水印</h4>
            <pre><code>const docDefinition = {
  background: {
    text: 'WATERMARK',
    color: 'blue',
    opacity: 0.3,
    bold: true,
    fontSize: 60
  },
  content: [
    'Your content here'
  ]
};</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import pdfMake from 'pdfmake/build/pdfmake'
import { configurePdfMakeChinese, getChinesePdfMakeStyles } from '@/utils/fontLoader'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'

const loading = ref(false)
const statusMessage = ref('')
const fontsReady = ref(false)
const currentExample = ref(0)
const currentDate = ref(new Date().toLocaleDateString('zh-CN'))

// ECharts refs
const pdfmakePieRef = ref<HTMLDivElement>()
const pdfmakeBarRef = ref<HTMLDivElement>()
let pdfmakePieChart: ECharts | null = null
let pdfmakeBarChart: ECharts | null = null

// 示例标签
const examples = ['基础文档', '文本样式', '列表', '多列布局', '页眉页脚', '分页控制', 'ECharts图表']

// 在组件挂载时配置中文字体
onMounted(async () => {
  try {
    await configurePdfMakeChinese()
    fontsReady.value = true
    console.log('✅ pdfmake 中文字体配置完成')

    // 加载logo图片
    const response = await fetch('/imgs/logo.jpg')
    const blob = await response.blob()
    const reader = new FileReader()
    reader.onloadend = () => {
      sampleImage.value = reader.result as string
    }
    reader.readAsDataURL(blob)

    // ECharts图表会在用户切换到对应标签时初始化
  } catch (error) {
    console.error('❌ pdfmake 字体或图片配置失败:', error)
  }
})

// 监听示例切换，当切换到ECharts示例时初始化图表
watch(currentExample, async (newVal) => {
  if (newVal === 6) {
    await nextTick()
    initPdfmakeCharts()
  }
})

// 初始化pdfmake的ECharts
const initPdfmakeCharts = () => {
  if (pdfmakePieRef.value) {
    // 如果图表已存在，先销毁
    if (pdfmakePieChart) {
      pdfmakePieChart.dispose()
      pdfmakePieChart = null
    }

    pdfmakePieChart = echarts.init(pdfmakePieRef.value)
    pdfmakePieChart.setOption({
      title: { text: '销售占比', left: 'center', textStyle: { fontSize: 14 } },
      series: [
        {
          type: 'pie',
          radius: '65%',
          data: [
            { value: 335, name: '产品A' },
            { value: 310, name: '产品B' },
            { value: 234, name: '产品C' },
          ],
        },
      ],
    })
  }

  if (pdfmakeBarRef.value) {
    // 如果图表已存在，先销毁
    if (pdfmakeBarChart) {
      pdfmakeBarChart.dispose()
      pdfmakeBarChart = null
    }

    pdfmakeBarChart = echarts.init(pdfmakeBarRef.value)
    pdfmakeBarChart.setOption({
      title: { text: '销量对比', left: 'center', textStyle: { fontSize: 14 } },
      xAxis: { type: 'category', data: ['产品A', '产品B', '产品C'] },
      yAxis: { type: 'value' },
      series: [{ data: [820, 932, 901], type: 'bar', itemStyle: { color: '#48bb78' } }],
    })
  }
}

// 将PDF Blob在新窗口/iframe中打开并触发打印
const openBlobInPrintWindow = async (blob: Blob) => {
  try {
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
        try {
          // 有些浏览器需要稍微延迟再调用print
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
              console.warn('触发打印失败，尝试打开新标签页打印', e)
              window.open(url)
              setTimeout(() => URL.revokeObjectURL(url), 5000)
            }
            resolve()
          }, 200)
        } catch (e) {
          resolve()
        }
      }
    })
  } catch (err) {
    console.error('openBlobInPrintWindow 错误:', err)
    throw err
  }
}

// ==================== 基础功能示例函数 ====================

// 示例1: 创建基础文档
const example1Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        'Hello World!',
        '这是使用 pdfmake 生成的 PDF 文档',
        '生成时间: ' + currentDate.value,
      ],
      ...chineseStyles,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 示例2: 文本样式
const example2Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '标题文本', style: 'header' },
        { text: '副标题', style: 'subheader' },
        { text: '普通正文内容', fontSize: 12, margin: [0, 5, 0, 5] },
        { text: '加粗文本', bold: true, margin: [0, 5, 0, 5] },
        { text: '斜体文本', italics: true, margin: [0, 5, 0, 5] },
        { text: '彩色文本', color: '#667eea', margin: [0, 5, 0, 5] },
        { text: '带背景色的文本', background: '#fef3c7', margin: [0, 5, 0, 5] },
        { text: '大号文本', fontSize: 18, margin: [0, 5, 0, 5] },
        { text: '小号文本', fontSize: 8, margin: [0, 5, 0, 5] },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 22, bold: true, color: '#667eea', margin: [0, 0, 0, 10] },
        subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 示例3: 列表
const example3Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '列表演示', style: 'header' },
        { text: '无序列表:', style: 'subheader' },
        {
          ul: [
            '第一项 - 这是无序列表的第一项',
            '第二项 - 这是无序列表的第二项',
            '第三项 - 这是无序列表的第三项',
          ],
        },
        { text: '有序列表:', style: 'subheader', margin: [0, 15, 0, 5] },
        {
          ol: ['步骤一 - 准备工作', '步骤二 - 执行任务', '步骤三 - 验收结果'],
        },
        { text: '嵌套列表:', style: 'subheader', margin: [0, 15, 0, 5] },
        {
          ul: [
            '主项目一',
            {
              ul: ['子项目 1.1', '子项目 1.2'],
            },
            '主项目二',
            '主项目三',
          ],
        },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 示例4: 多列布局
const example4Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '多列布局演示', style: 'header' },
        { text: '两列布局:', style: 'subheader' },
        {
          columns: [
            {
              width: '50%',
              text: '左侧列内容\n\n这是左侧列的详细内容，可以包含多行文本。pdfmake的多列布局非常灵活。',
            },
            {
              width: '50%',
              text: '右侧列内容\n\n这是右侧列的详细内容，与左侧列并排显示。',
            },
          ],
          columnGap: 20,
        },
        { text: '三列布局:', style: 'subheader', margin: [0, 20, 0, 5] },
        {
          columns: [
            { width: '*', text: '第一列\n自适应宽度', fillColor: '#f0f0f0' },
            { width: '*', text: '第二列\n自适应宽度', fillColor: '#e0e0e0' },
            { width: '*', text: '第三列\n自适应宽度', fillColor: '#d0d0d0' },
          ],
          columnGap: 10,
        },
        { text: '混合宽度:', style: 'subheader', margin: [0, 20, 0, 5] },
        {
          columns: [
            { width: 100, text: '固定100px' },
            { width: '*', text: '自适应宽度' },
            { width: 'auto', text: '自动' },
          ],
          columnGap: 10,
        },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 示例5: 页眉页脚
const example5Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      header: {
        text: '公司机密文件',
        alignment: 'center',
        margin: [0, 10, 0, 0],
        fontSize: 10,
        color: '#718096',
      },
      footer: (currentPage: number, pageCount: number) => ({
        text: `第 ${currentPage} / ${pageCount} 页 | 生成日期: ${currentDate.value}`,
        alignment: 'center',
        margin: [0, 0, 0, 10],
        fontSize: 9,
        color: '#718096',
      }),
      content: [
        { text: '带页眉页脚的文档', style: 'header' },
        { text: '这是文档的主体内容。页眉和页脚会自动出现在每一页上。' },
        { text: '\n' },
        { text: '页眉通常用于显示文档标题、公司名称或机密标识。' },
        { text: '\n' },
        { text: '页脚通常用于显示页码、日期或版权信息。' },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 15] },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 示例6: 分页控制
const example6Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '第一页内容', style: 'header' },
        { text: '这是第一页的内容。' },
        { text: '可以添加更多内容...' },
        { text: '\n\n' },
        { text: '第一页的结束。' },
        { text: '第二页内容', style: 'header', pageBreak: 'before' },
        { text: '这是第二页的内容。通过 pageBreak: "before" 强制在此元素前分页。' },
        { text: '\n\n' },
        { text: '第二页继续...' },
        { text: '第三页内容', style: 'header', pageBreak: 'before' },
        { text: '这是第三页的内容。' },
        { text: '\n' },
        { text: '分页控制说明:', bold: true, margin: [0, 10, 0, 5] },
        {
          ul: [
            'pageBreak: "before" - 在元素前分页',
            'pageBreak: "after" - 在元素后分页',
            '自动分页 - 内容超出页面时自动分页',
          ],
        },
      ],
      footer: (currentPage: number, pageCount: number) => ({
        text: `第 ${currentPage} / ${pageCount} 页`,
        alignment: 'center',
        margin: [0, 0, 0, 10],
      }),
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10], color: '#667eea' },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 示例7: ECharts图表
const example7Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成图表PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    // 获取图表图片
    const pieImage = pdfmakePieChart?.getDataURL({
      type: 'png',
      pixelRatio: 2,
      backgroundColor: '#fff',
    })
    const barImage = pdfmakeBarChart?.getDataURL({
      type: 'png',
      pixelRatio: 2,
      backgroundColor: '#fff',
    })

    const docDefinition: any = {
      content: [
        { text: '数据分析报告', style: 'title', alignment: 'center' },
        { text: '\n' },
        {
          columns: [
            { image: pieImage, width: 250 },
            { image: barImage, width: 250 },
          ],
          columnGap: 10,
        },
        { text: '\n' },
        { text: '✨ pdfmake优势：使用columns轻松实现图表并排，无需手动计算坐标！', style: 'note' },
      ],
      styles: {
        title: { fontSize: 20, bold: true, color: '#48bb78' },
        note: { fontSize: 10, color: '#718096', italics: true },
      },
      defaultStyle: { font: 'NotoSansSC' },
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ 图表PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// ==================== 高级功能示例 ====================

const currentAdvanced = ref(0)
const advancedExamples = ['表格', '图片嵌入', '水印背景', '复杂表格', '链接目录', '完整报告']

// 示例图片
const sampleImage = ref('')

// 高级1: 表格生成
const advanced1Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成表格PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '员工信息表', style: 'header' },
        { text: '使用pdfmake生成的专业表格', style: 'subheader' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              [
                { text: '姓名', style: 'tableHeader', fillColor: '#667eea', color: 'white' },
                { text: '部门', style: 'tableHeader', fillColor: '#667eea', color: 'white' },
                { text: '职位', style: 'tableHeader', fillColor: '#667eea', color: 'white' },
                { text: '工资', style: 'tableHeader', fillColor: '#667eea', color: 'white' },
              ],
              ['张三', '技术部', '前端工程师', '¥15,000'],
              ['李四', '产品部', '产品经理', '¥18,000'],
              ['王五', '设计部', 'UI设计师', '¥14,000'],
              ['赵六', '运营部', '运营专员', '¥13,000'],
              ['孙七', '市场部', '市场专员', '¥13,500'],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => '#e2e8f0',
            vLineColor: () => '#e2e8f0',
          },
        },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 12, margin: [0, 0, 0, 15], color: '#718096' },
        tableHeader: { bold: true, fontSize: 11 },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ 表格PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 高级2: 图片嵌入
const advanced2Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成图片PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: 'PDF中的图片', style: 'header' },
        { text: '支持多种图片格式和对齐方式', style: 'subheader' },
        { text: '图片居左:', margin: [0, 10, 0, 5] },
        {
          image:
            sampleImage.value ||
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
          width: 150,
          alignment: 'left',
        },
        { text: '图片居中:', margin: [0, 20, 0, 5] },
        {
          image:
            sampleImage.value ||
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
          width: 150,
          alignment: 'center',
        },
        { text: '图片居右:', margin: [0, 20, 0, 5] },
        {
          image:
            sampleImage.value ||
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
          width: 150,
          alignment: 'right',
        },
        { text: '\n说明:', bold: true, margin: [0, 20, 0, 5] },
        {
          ul: [
            '支持 PNG、JPEG、SVG 等格式',
            '使用 Base64 编码嵌入图片',
            '可以设置宽度、高度、对齐方式',
            '支持图片链接功能',
          ],
        },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 12, margin: [0, 0, 0, 15], color: '#718096' },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ 图片PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 高级3: 水印和背景
const advanced3Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成带水印PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      background: (currentPage: number, pageSize: { width: number; height: number }) => [
        {
          text: '机密文件',
          color: '#cccccc',
          opacity: 0.2,
          bold: true,
          fontSize: 50,
          absolutePosition: { x: pageSize.width / 2 - 100, y: pageSize.height / 2 - 25 },
          angle: -30,
        },
      ],
      content: [
        { text: '带水印的机密文档', style: 'header' },
        { text: '此文档包含背景水印，用于标识文档的机密性。', margin: [0, 0, 0, 15] },
        { text: '水印的用途:', bold: true, margin: [0, 10, 0, 5] },
        {
          ul: [
            '标识文档的机密级别',
            '防止未经授权的复制和分发',
            '标记文档状态（如：草稿、审核中等）',
            '增强品牌识别度',
          ],
        },
        { text: '\n' },
        { text: '水印配置选项:', bold: true, margin: [0, 10, 0, 5] },
        {
          ul: [
            'text: 水印文字内容',
            'color: 水印颜色',
            'opacity: 透明度 (0-1)',
            'fontSize: 字体大小',
            'angle: 旋转角度',
          ],
        },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ 水印PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 高级4: 复杂表格布局
const advanced4Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成复杂表格PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '复杂表格布局演示', style: 'header' },
        { text: '单元格合并示例:', bold: true, margin: [0, 15, 0, 10] },
        {
          table: {
            widths: ['*', '*', '*'],
            body: [
              [
                {
                  text: '合并两列 (colSpan: 2)',
                  colSpan: 2,
                  fillColor: '#e2e8f0',
                  alignment: 'center',
                },
                {},
                { text: '第三列' },
              ],
              [
                {
                  text: '合并两行\n(rowSpan: 2)',
                  rowSpan: 2,
                  fillColor: '#e2e8f0',
                  alignment: 'center',
                },
                { text: 'B1' },
                { text: 'C1' },
              ],
              [{}, { text: 'B2' }, { text: 'C2' }],
            ],
          },
        },
        { text: '嵌套内容:', bold: true, margin: [0, 20, 0, 10] },
        {
          table: {
            widths: ['auto', '*'],
            body: [
              [
                { text: '项目', bold: true, fillColor: '#667eea', color: 'white' },
                { text: '详情', bold: true, fillColor: '#667eea', color: 'white' },
              ],
              [
                '列表项',
                {
                  ul: ['子项目 1', '子项目 2', '子项目 3'],
                },
              ],
              [
                '嵌套表格',
                {
                  table: {
                    body: [
                      ['A', 'B'],
                      ['C', 'D'],
                    ],
                  },
                },
              ],
            ],
          },
        },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ 复杂表格PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 高级5: 链接和目录
const advanced5Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成带链接PDF...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: 'PDF链接演示', style: 'header' },
        { text: '外部链接:', bold: true, margin: [0, 15, 0, 5] },
        {
          text: '访问 pdfmake 官方文档',
          link: 'https://pdfmake.github.io/docs/',
          color: '#667eea',
          decoration: 'underline',
          margin: [0, 0, 0, 10],
        },
        {
          text: '访问 GitHub 仓库',
          link: 'https://github.com/bpampuch/pdfmake',
          color: '#667eea',
          decoration: 'underline',
          margin: [0, 0, 0, 15],
        },
        { text: '内部链接:', bold: true, margin: [0, 10, 0, 5] },
        {
          text: '跳转到第二章',
          linkToDestination: 'chapter2',
          color: '#667eea',
          decoration: 'underline',
          margin: [0, 0, 0, 20],
        },
        { text: '第一章 - 概述', style: 'chapter' },
        {
          text: '这是第一章的内容。pdfmake 支持创建包含链接的 PDF 文档，可以链接到外部网址或文档内部的其他位置。',
        },
        { text: '第二章 - 详细说明', style: 'chapter', id: 'chapter2', pageBreak: 'before' },
        { text: '这是第二章的内容。您可以通过点击第一页的链接跳转到这里。' },
        { text: '\n' },
        { text: '链接类型:', bold: true, margin: [0, 10, 0, 5] },
        {
          ul: [
            'link: 外部 URL 链接',
            'linkToDestination: 内部锚点链接',
            'linkToPage: 跳转到指定页码',
          ],
        },
      ],
      styles: {
        ...chineseStyles.styles,
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        chapter: { fontSize: 16, bold: true, margin: [0, 20, 0, 10], color: '#2d3748' },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ 带链接PDF生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// 高级6: 完整报告生成
const advanced6Generate = async () => {
  loading.value = true
  statusMessage.value = '正在生成完整报告...'

  try {
    if (!fontsReady.value) {
      await configurePdfMakeChinese()
      fontsReady.value = true
    }

    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      info: {
        title: '2024年度工作报告',
        author: '示例公司',
        subject: '年度工作总结与规划',
      },
      header: (currentPage: number, pageCount: number) => {
        if (currentPage === 1) return null
        return {
          text: '2024年度工作报告',
          alignment: 'center',
          margin: [40, 20, 40, 0],
          fontSize: 9,
          color: '#718096',
        }
      },
      footer: (currentPage: number, pageCount: number) => ({
        text: `第 ${currentPage} / ${pageCount} 页`,
        alignment: 'center',
        margin: [0, 10, 0, 0],
        fontSize: 9,
        color: '#718096',
      }),
      content: [
        // 封面
        { text: '\n\n\n\n\n' },
        { text: '2024年度工作报告', style: 'title', alignment: 'center' },
        { text: '\n' },
        { text: '示例公司', style: 'subtitle', alignment: 'center' },
        { text: currentDate.value, alignment: 'center', margin: [0, 20, 0, 0], color: '#718096' },
        // 目录页
        { text: '目录', style: 'tocTitle', pageBreak: 'before' },
        {
          toc: {
            numberStyle: { bold: true },
          },
        },
        // 第一章
        { text: '第一章 年度概述', style: 'chapter', tocItem: true, pageBreak: 'before' },
        {
          text: '2024年是公司发展的重要一年。在全体员工的共同努力下，我们取得了显著的成绩。',
          margin: [0, 10, 0, 10],
        },
        // 第二章
        { text: '第二章 业绩数据', style: 'chapter', tocItem: true, pageBreak: 'before' },
        { text: '季度业绩表:', bold: true, margin: [0, 10, 0, 10] },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              [
                { text: '季度', fillColor: '#667eea', color: 'white', bold: true },
                { text: '收入', fillColor: '#667eea', color: 'white', bold: true },
                { text: '支出', fillColor: '#667eea', color: 'white', bold: true },
                { text: '利润', fillColor: '#667eea', color: 'white', bold: true },
              ],
              ['Q1', '¥120万', '¥80万', '¥40万'],
              ['Q2', '¥150万', '¥90万', '¥60万'],
              ['Q3', '¥180万', '¥100万', '¥80万'],
              ['Q4', '¥200万', '¥110万', '¥90万'],
              [
                { text: '合计', bold: true },
                { text: '¥650万', bold: true },
                { text: '¥380万', bold: true },
                { text: '¥270万', bold: true },
              ],
            ],
          },
        },
        // 第三章
        { text: '第三章 未来规划', style: 'chapter', tocItem: true, pageBreak: 'before' },
        { text: '2025年重点工作:', bold: true, margin: [0, 10, 0, 10] },
        {
          ol: ['持续优化产品质量', '拓展海外市场', '加强团队建设', '推进数字化转型'],
        },
      ],
      styles: {
        ...chineseStyles.styles,
        title: { fontSize: 28, bold: true, color: '#667eea' },
        subtitle: { fontSize: 16, color: '#4a5568' },
        tocTitle: { fontSize: 18, bold: true, margin: [0, 0, 0, 20] },
        chapter: { fontSize: 18, bold: true, margin: [0, 20, 0, 10], color: '#2d3748' },
      },
      defaultStyle: chineseStyles.defaultStyle,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))
    statusMessage.value = '✅ 完整报告生成成功！'
  } catch (error) {
    console.error('PDF生成错误:', error)
    statusMessage.value = '❌ PDF生成失败: ' + error
  } finally {
    loading.value = false
  }
}

// ==================== 原有快捷功能 ====================

const generateSimplePDF = async () => {
  if (!fontsReady.value) {
    statusMessage.value = '⏳ 正在初始化中文字体...'
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成 PDF...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: 'pdfmake 中文示例文档', style: 'header' },
        { text: '声明式 PDF 生成演示', style: 'subheader' },
        {
          text: '这是一个使用 pdfmake 生成的中文 PDF 文档。pdfmake 提供了非常友好的声明式 API，可以轻松创建结构化的 PDF 文档。',
          margin: [0, 10, 0, 10],
        },
        { text: '主要特点：', style: 'subheader' },
        {
          ul: [
            'API 简单易用，支持中文',
            '支持复杂的文档布局',
            '自动分页处理',
            '丰富的样式选项',
            '客户端和服务端通用',
          ],
        },
      ],
      ...chineseStyles,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))

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
  if (!fontsReady.value) {
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成表格 PDF...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      content: [
        { text: '前端打印框架对比表', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 100],
            body: [
              [
                { text: 'Framework', style: 'tableHeader' },
                { text: 'Size', style: 'tableHeader' },
                { text: 'Performance', style: 'tableHeader' },
                { text: 'Rating', style: 'tableHeader' },
              ],
              ['window.print()', '0 KB', 'Excellent', '★★★★★'],
              ['Print.js', '10 KB', 'Good', '★★★★'],
              ['jsPDF', '150 KB', 'Good', '★★★★'],
              ['pdfmake', '600 KB', 'Good', '★★★★★'],
              ['html2canvas', '180 KB', 'Medium', '★★★'],
            ],
          },
          layout: {
            fillColor: (rowIndex: number) => {
              return rowIndex === 0 ? '#667eea' : rowIndex % 2 === 0 ? '#f7fafc' : null
            },
            hLineColor: () => '#e2e8f0',
            vLineColor: () => '#e2e8f0',
          },
        },
      ],
      ...chineseStyles,
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))

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

const generateComplexPDF = async () => {
  if (!fontsReady.value) {
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成复杂 PDF...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      pageSize: 'A4',
      pageMargins: [40, 60, 40, 60],
      header: (currentPage: number, pageCount: number) => {
        return {
          text: 'pdfmake 复杂文档示例',
          alignment: 'center',
          margin: [0, 20, 0, 0],
          fontSize: 10,
          color: '#718096',
        }
      },
      footer: (currentPage: number, pageCount: number) => {
        return {
          text: `第 ${currentPage} 页 / 共 ${pageCount} 页`,
          alignment: 'center',
          margin: [0, 0, 0, 20],
          fontSize: 9,
          color: '#a0aec0',
        }
      },
      content: [
        { text: '技术调研报告', style: 'title' },
        { text: '前端打印方案选型分析', style: 'subtitle' },
        { text: `生成日期：${new Date().toLocaleDateString('zh-CN')}`, style: 'date' },

        { text: '一、背景', style: 'sectionHeader' },
        {
          text: '随着 Web 应用的普及，前端打印需求日益增长。本报告对主流前端打印方案进行全面调研和对比分析。',
          margin: [0, 0, 0, 10],
        },

        { text: '二、方案对比', style: 'sectionHeader' },
        {
          columns: [
            {
              width: '50%',
              stack: [
                { text: '轻量级方案', style: 'columnHeader' },
                { ul: ['window.print()', 'Print.js', 'vue3-print-nb'] },
              ],
            },
            {
              width: '50%',
              stack: [
                { text: 'PDF 生成方案', style: 'columnHeader' },
                { ul: ['jsPDF', 'pdfmake', 'pdf-lib'] },
              ],
            },
          ],
          columnGap: 20,
          margin: [0, 0, 0, 15],
        },

        { text: '三、性能数据', style: 'sectionHeader', pageBreak: 'before' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 80, 80, 80],
            body: [
              ['方案', '初始化', '渲染', '总时间'],
              ['window.print()', '0ms', '45ms', '45ms'],
              ['Print.js', '35ms', '68ms', '103ms'],
              ['jsPDF', '125ms', '234ms', '359ms'],
            ],
          },
        },

        { text: '四、结论', style: 'sectionHeader', margin: [0, 20, 0, 10] },
        {
          text: '根据项目需求选择合适的打印方案，平衡性能、功能和易用性。',
        },
      ],
      styles: {
        title: {
          fontSize: 28,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
        subtitle: {
          fontSize: 18,
          alignment: 'center',
          margin: [0, 0, 0, 5],
        },
        date: {
          fontSize: 10,
          alignment: 'center',
          color: '#718096',
          margin: [0, 0, 0, 30],
        },
        sectionHeader: {
          fontSize: 16,
          bold: true,
          margin: [0, 15, 0, 10],
          color: '#667eea',
        },
        columnHeader: {
          fontSize: 13,
          bold: true,
          margin: [0, 0, 0, 5],
        },
        ...chineseStyles.styles,
      },
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))

    statusMessage.value = '✅ 复杂 PDF 生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('复杂 PDF 生成失败:', error)
    statusMessage.value = '❌ 复杂 PDF 生成失败'
  } finally {
    loading.value = false
  }
}

const generateReportPDF = async () => {
  if (!fontsReady.value) {
    await configurePdfMakeChinese()
    fontsReady.value = true
  }

  loading.value = true
  statusMessage.value = '正在生成完整报告...'

  try {
    const chineseStyles = getChinesePdfMakeStyles()

    const docDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [40, 80, 40, 60],
      header: (currentPage: number) => {
        return {
          columns: [
            { text: '前端打印技术调研报告', fontSize: 10, margin: [40, 30, 0, 0] },
            {
              text: new Date().toLocaleDateString(),
              fontSize: 10,
              alignment: 'right',
              margin: [0, 30, 40, 0],
            },
          ],
          margin: [0, 20, 0, 20],
        }
      },
      footer: (currentPage: number, pageCount: number) => {
        return {
          columns: [
            { text: 'Confidential', fontSize: 8, margin: [40, 0, 0, 0], color: '#a0aec0' },
            {
              text: `第 ${currentPage} 页 / 共 ${pageCount} 页`,
              alignment: 'right',
              fontSize: 8,
              margin: [0, 0, 40, 0],
              color: '#a0aec0',
            },
          ],
        }
      },
      background: (currentPage: number) => {
        return {
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 595.28,
              h: 60,
              color: '#667eea',
            },
          ],
        }
      },
      content: [
        { text: '前端打印技术', style: 'title', color: 'white', margin: [0, -60, 0, 10] },
        { text: '全面调研报告', style: 'subtitle', color: 'white', margin: [0, 0, 0, 40] },

        { text: '目录', style: 'tocHeader' },
        {
          toc: {
            title: { text: '', style: 'tocTitle' },
          },
          ul: ['第一章：概述', '第二章：方案对比', '第三章：性能分析', '第四章：选型建议'],
          margin: [0, 0, 0, 30],
        },

        { text: '第一章：概述', style: 'chapter', tocItem: true, pageBreak: 'before' },
        {
          text: '本报告旨在全面调研和对比当前主流的前端打印技术方案，为项目选型提供科学依据。',
          margin: [0, 0, 0, 20],
        },

        { text: '第二章：方案对比', style: 'chapter', tocItem: true, pageBreak: 'before' },
        {
          table: {
            headerRows: 1,
            widths: [120, '*', 80, 80],
            body: [
              [
                { text: '方案名称', style: 'tableHeader' },
                { text: '核心特点', style: 'tableHeader' },
                { text: '文件大小', style: 'tableHeader' },
                { text: '评分', style: 'tableHeader' },
              ],
              ['window.print()', '浏览器原生，零依赖', '0 KB', '★★★★★'],
              ['Print.js', '轻量级，易用', '10 KB', '★★★★'],
              ['jsPDF', '强大，矢量图形', '150 KB', '★★★★'],
              ['pdfmake', '声明式，功能完整', '600 KB', '★★★★★'],
            ],
          },
          layout: {
            fillColor: (rowIndex: number) => {
              return rowIndex === 0 ? '#667eea' : rowIndex % 2 === 0 ? '#f7fafc' : null
            },
          },
        },

        { text: '第三章：性能分析', style: 'chapter', tocItem: true, pageBreak: 'before' },
        { text: '3.1 测试方法', style: 'section' },
        {
          text: '采用统一的测试环境和数据集，对各方案进行基准测试。',
          margin: [0, 0, 0, 15],
        },
        { text: '3.2 测试结果', style: 'section' },
        {
          ul: [
            'window.print() 性能最优，适合简单场景',
            'Print.js 性能良好，体积小',
            'jsPDF 和 pdfmake 功能强大，性能可接受',
          ],
        },

        { text: '第四章：选型建议', style: 'chapter', tocItem: true, pageBreak: 'before' },
        {
          text: '根据不同场景选择合适的方案：',
          margin: [0, 0, 0, 10],
        },
        {
          ol: [
            { text: '简单文档打印：window.print() + CSS', bold: true },
            { text: '中等复杂度：Print.js 或 jsPDF', bold: true },
            { text: '复杂文档生成：pdfmake', bold: true },
            { text: '所见即所得：html2canvas + jsPDF', bold: true },
          ],
        },
      ],
      styles: {
        title: {
          fontSize: 32,
          bold: true,
          alignment: 'center',
        },
        subtitle: {
          fontSize: 18,
          alignment: 'center',
        },
        tocHeader: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 15],
        },
        chapter: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 15],
          color: '#667eea',
        },
        section: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 8],
        },
        ...chineseStyles.styles,
      },
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => openBlobInPrintWindow(blob))

    statusMessage.value = '✅ 完整报告生成成功！'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('报告生成失败:', error)
    statusMessage.value = '❌ 报告生成失败'
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
  color: #ed8936;
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

.loading-fonts {
  color: #ed8936;
  font-weight: 500;
  margin-top: 0.5rem;
}

.fonts-ready {
  color: #48bb78;
  font-weight: 500;
  margin-top: 0.5rem;
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

.preview-hint {
  background: #edf2f7;
  border-left: 4px solid #667eea;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 4px;
}

.preview-hint p {
  margin: 0;
  color: #4a5568;
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

.example-content p {
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

.preview-box {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1.5rem;
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

.divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 2rem 0;
}

/* 高级功能区域样式 */
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
</style>
