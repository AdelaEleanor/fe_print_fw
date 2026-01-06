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
      <h2>📊 调研总览 - 共计9种方案</h2>
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
    path: '/architecture',
    icon: '🏗️',
    title: '底层架构分析',
    description: '深入理解9种框架的技术原理与选型依据',
    tags: ['架构', '原理', '对比'],
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
</style>
