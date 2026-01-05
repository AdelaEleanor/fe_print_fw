<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>📊 图表打印效果对比</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-wrapper">
      <aside class="info-panel">
        <h2>测试说明</h2>

        <div class="info-section warning">
          <h3>⚠️ 已知问题</h3>
          <ul>
            <li><strong>vue3-print-nb</strong>: 图表右侧可能被裁剪</li>
            <li><strong>html2pdf.js</strong>: Grid布局支持差</li>
            <li><strong>html2canvas</strong>: Canvas处理可能重叠</li>
          </ul>
        </div>

        <div class="info-section success">
          <h3>✅ 推荐方案</h3>
          <ul>
            <li><strong>jsPDF</strong>: 精确坐标控制</li>
            <li><strong>pdfmake</strong>: 声明式布局</li>
            <li><strong>原生打印</strong>: 效果稳定</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>📋 测试图表</h3>
          <p>本页包含8个测试图表：</p>
          <ul>
            <li>折线图、柱状图、饼图</li>
            <li>面积图、堆叠柱状图</li>
            <li>散点图、雷达图、混合图</li>
          </ul>
          <p style="margin-top: 10px; font-weight: bold">打印布局：每行2个图表</p>
        </div>
      </aside>

      <main class="demo-panel">
        <!-- 测试图表预览区 -->
        <section class="chart-preview-section">
          <h2>📈 测试图表预览（8个图表 - 打印时每行2个）</h2>
          <div class="chart-grid">
            <div class="chart-item">
              <div ref="chart1Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[0]?.title }}</p>
            </div>
            <div class="chart-item">
              <div ref="chart2Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[1]?.title }}</p>
            </div>
            <div class="chart-item">
              <div ref="chart3Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[2]?.title }}</p>
            </div>
            <div class="chart-item">
              <div ref="chart4Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[3]?.title }}</p>
            </div>
            <div class="chart-item">
              <div ref="chart5Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[4]?.title }}</p>
            </div>
            <div class="chart-item">
              <div ref="chart6Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[5]?.title }}</p>
            </div>
            <div class="chart-item">
              <div ref="chart7Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[6]?.title }}</p>
            </div>
            <div class="chart-item">
              <div ref="chart8Ref" class="chart-container"></div>
              <p class="chart-label">{{ chartOptions[7]?.title }}</p>
            </div>
          </div>
        </section>

        <!-- 框架打印按钮区 -->
        <section class="framework-buttons">
          <h2>🖨️ 选择框架打印测试</h2>
          <p class="button-desc">
            点击下方按钮，使用对应框架打印8个图表（每行2列网格布局）- 查看哪个框架能正确显示
          </p>

          <div class="button-grid">
            <button @click="printWithNative" class="fw-btn native" :disabled="loading">
              <span class="fw-icon">🌐</span>
              <span class="fw-name">原生打印</span>
              <span class="fw-size">0KB</span>
            </button>
            <button @click="printWithPrintJs" class="fw-btn printjs" :disabled="loading">
              <span class="fw-icon">⚡</span>
              <span class="fw-name">Print.js</span>
              <span class="fw-size">~18KB</span>
            </button>
            <button @click="printWithVuePrint" class="fw-btn vueprint" :disabled="loading">
              <span class="fw-icon">💚</span>
              <span class="fw-name">vue3-print-nb</span>
              <span class="fw-size">~15KB</span>
            </button>
            <button @click="printWithJsPDF" class="fw-btn jspdf" :disabled="loading">
              <span class="fw-icon">📄</span>
              <span class="fw-name">jsPDF</span>
              <span class="fw-size">~150KB</span>
            </button>
            <button @click="printWithPdfmake" class="fw-btn pdfmake" :disabled="loading">
              <span class="fw-icon">📋</span>
              <span class="fw-name">pdfmake</span>
              <span class="fw-size">~600KB</span>
            </button>
            <button @click="printWithHtml2Canvas" class="fw-btn html2canvas" :disabled="loading">
              <span class="fw-icon">🖼️</span>
              <span class="fw-name">html2canvas</span>
              <span class="fw-size">~180KB</span>
            </button>
            <button @click="printWithHtml2Pdf" class="fw-btn html2pdf" :disabled="loading">
              <span class="fw-icon">🔄</span>
              <span class="fw-name">html2pdf.js</span>
              <span class="fw-size">~330KB</span>
            </button>
            <button @click="printWithPdfLib" class="fw-btn pdflib" :disabled="loading">
              <span class="fw-icon">📚</span>
              <span class="fw-name">PDF-LIB</span>
              <span class="fw-size">~200KB</span>
            </button>
            <button
              @click="printWithPrintHtmlElement"
              class="fw-btn printhtmlelement"
              :disabled="loading"
            >
              <span class="fw-icon">🎯</span>
              <span class="fw-name">print-html-element</span>
              <span class="fw-size">~5KB</span>
            </button>
          </div>

          <div v-if="loading" class="loading-status">⏳ {{ loadingMessage }}</div>
        </section>

        <!-- 隐藏的打印内容区（供Print.js使用） -->
        <div id="print-content-area" ref="printContentRef" class="print-content-hidden">
          <div class="print-header">
            <h1>图表打印效果测试报告（2列布局）</h1>
            <p>测试时间：{{ currentDate }} | 测试框架：{{ currentFramework }}</p>
          </div>
          <div class="chart-grid">
            <div v-for="(chart, index) in chartOptions" :key="index" class="chart-item">
              <h4>{{ index + 1 }}. {{ chart.title }}</h4>
              <img v-if="chartImages[index]" :src="chartImages[index]" :alt="chart.title" />
            </div>
          </div>
          <div class="print-footer">
            <p>
              前端打印框架调研报告 - 图表对比测试 |
              测试重点：检查每行2个图表的网格布局是否正确，有无重叠或换行错误
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'
import printJS from 'print-js'
import html2canvas from 'html2canvas'
import html2pdf from 'html2pdf.js'
import { printElement } from 'print-html-element'
import { createChineseJsPDF } from '../utils/fontLoader'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { PDFDocument } from 'pdf-lib'
// @ts-ignore
pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs

// 图表refs
const chart1Ref = ref<HTMLDivElement>()
const chart2Ref = ref<HTMLDivElement>()
const chart3Ref = ref<HTMLDivElement>()
const chart4Ref = ref<HTMLDivElement>()
const chart5Ref = ref<HTMLDivElement>()
const chart6Ref = ref<HTMLDivElement>()
const chart7Ref = ref<HTMLDivElement>()
const chart8Ref = ref<HTMLDivElement>()

// 打印区域ref
const printContentRef = ref<HTMLDivElement>()

// 图表实例
const chartInstances: (ECharts | null)[] = [null, null, null, null, null, null, null, null]

// 状态
const loading = ref(false)
const loadingMessage = ref('')
const currentDate = ref(new Date().toLocaleDateString('zh-CN'))
const currentFramework = ref('未选择')

// 图表图片数据
const chartImages = ref<string[]>(['', '', '', '', '', '', '', ''])

// 8个测试图表配置
const chartOptions = [
  {
    title: '折线图-销售趋势',
    option: {
      title: { text: '月度销售趋势', left: 'center', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'axis' },
      grid: { left: '12%', right: '8%', bottom: '15%', top: '25%' },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisLabel: { fontSize: 10 },
      },
      yAxis: { type: 'value', name: '万元', axisLabel: { fontSize: 10 } },
      series: [
        {
          data: [120, 200, 150, 80, 170, 210],
          type: 'line',
          smooth: true,
          itemStyle: { color: '#667eea' },
          areaStyle: { color: 'rgba(102, 126, 234, 0.2)' },
        },
      ],
    },
  },
  {
    title: '柱状图-产品销量',
    option: {
      title: { text: '产品销量对比', left: 'center', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'axis' },
      grid: { left: '12%', right: '8%', bottom: '15%', top: '25%' },
      xAxis: { type: 'category', data: ['产品A', 'B', 'C', 'D', 'E'], axisLabel: { fontSize: 10 } },
      yAxis: { type: 'value', name: '件', axisLabel: { fontSize: 10 } },
      series: [
        {
          data: [320, 280, 450, 380, 520],
          type: 'bar',
          itemStyle: { color: '#764ba2' },
          barWidth: '45%',
        },
      ],
    },
  },
  {
    title: '饼图-区域占比',
    option: {
      title: { text: '区域销售占比', left: 'center', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'item', formatter: '{b}: {d}%' },
      legend: { orient: 'vertical', right: '5%', top: 'center', textStyle: { fontSize: 10 } },
      series: [
        {
          type: 'pie',
          radius: ['35%', '60%'],
          center: ['35%', '55%'],
          data: [
            { value: 335, name: '华东' },
            { value: 310, name: '华南' },
            { value: 234, name: '华北' },
            { value: 135, name: '西南' },
          ],
          label: { fontSize: 10 },
          itemStyle: {
            color: (p: any) => ['#667eea', '#764ba2', '#f093fb', '#f5576c'][p.dataIndex],
          },
        },
      ],
    },
  },
  {
    title: '面积图-访问量',
    option: {
      title: { text: '网站访问量', left: 'center', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'axis' },
      grid: { left: '12%', right: '8%', bottom: '15%', top: '25%' },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五'],
        axisLabel: { fontSize: 10 },
      },
      yAxis: { type: 'value', name: 'PV', axisLabel: { fontSize: 10 } },
      series: [
        {
          data: [1200, 1500, 1800, 2100, 2400],
          type: 'line',
          smooth: true,
          areaStyle: { color: 'rgba(72, 187, 120, 0.3)' },
          itemStyle: { color: '#48bb78' },
        },
      ],
    },
  },
  {
    title: '堆叠柱状图-对比',
    option: {
      title: { text: '季度对比', left: 'center', top: '2%', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'axis' },
      legend: { data: ['Q1', 'Q2'], top: '12%', textStyle: { fontSize: 10 } },
      grid: { left: '12%', right: '8%', bottom: '15%', top: '32%' },
      xAxis: { type: 'category', data: ['团队A', 'B', 'C'], axisLabel: { fontSize: 10 } },
      yAxis: { type: 'value', axisLabel: { fontSize: 10 } },
      series: [
        { name: 'Q1', type: 'bar', data: [120, 132, 101], itemStyle: { color: '#f5576c' } },
        { name: 'Q2', type: 'bar', data: [220, 182, 191], itemStyle: { color: '#4facfe' } },
      ],
    },
  },
  {
    title: '散点图-分布',
    option: {
      title: { text: '数据分布', left: 'center', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'item' },
      grid: { left: '12%', right: '8%', bottom: '15%', top: '25%' },
      xAxis: { type: 'value', axisLabel: { fontSize: 10 } },
      yAxis: { type: 'value', axisLabel: { fontSize: 10 } },
      series: [
        {
          type: 'scatter',
          data: [
            [10, 20],
            [15, 30],
            [20, 25],
            [25, 40],
            [30, 35],
            [35, 50],
            [40, 45],
          ],
          itemStyle: { color: '#667eea' },
          symbolSize: 12,
        },
      ],
    },
  },
  {
    title: '雷达图-能力',
    option: {
      title: { text: '能力评估', left: 'center', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'item' },
      radar: {
        indicator: [
          { name: '速度', max: 100 },
          { name: '质量', max: 100 },
          { name: '成本', max: 100 },
          { name: '体验', max: 100 },
        ],
        center: ['50%', '60%'],
        radius: '55%',
        axisName: { fontSize: 10 },
      },
      series: [
        {
          type: 'radar',
          data: [{ value: [80, 90, 70, 85], name: '产品A', itemStyle: { color: '#764ba2' } }],
        },
      ],
    },
  },
  {
    title: '混合图表-综合',
    option: {
      title: { text: '销量与利润', left: 'center', top: '2%', textStyle: { fontSize: 13 } },
      tooltip: { trigger: 'axis' },
      legend: { data: ['销量', '利润'], top: '12%', textStyle: { fontSize: 10 } },
      grid: { left: '12%', right: '12%', bottom: '15%', top: '32%' },
      xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月'], axisLabel: { fontSize: 10 } },
      yAxis: [
        { type: 'value', name: '销量', axisLabel: { fontSize: 10 } },
        { type: 'value', name: '利润率', axisLabel: { fontSize: 10, formatter: '{value}%' } },
      ],
      series: [
        { name: '销量', type: 'bar', data: [200, 230, 210, 250], itemStyle: { color: '#667eea' } },
        {
          name: '利润',
          type: 'line',
          yAxisIndex: 1,
          data: [15, 18, 16, 20],
          itemStyle: { color: '#f5576c' },
        },
      ],
    },
  },
]

// 初始化图表
const initCharts = () => {
  const refs = [
    chart1Ref,
    chart2Ref,
    chart3Ref,
    chart4Ref,
    chart5Ref,
    chart6Ref,
    chart7Ref,
    chart8Ref,
  ]
  refs.forEach((ref, index) => {
    if (ref.value && chartOptions[index]) {
      chartInstances[index] = echarts.init(ref.value)
      // @ts-ignore
      chartInstances[index]!.setOption(chartOptions[index].option)
    }
  })
}

// 导出图表为图片
const exportChartImages = () => {
  chartInstances.forEach((chart, index) => {
    if (chart) {
      chartImages.value[index] = chart.getDataURL({ type: 'png', pixelRatio: 2 })
    }
  })
}

onMounted(() => {
  initCharts()
})

// ==================== 打印辅助函数 ====================

// 打开打印预览窗口
const openPrintPreview = (blob: Blob) => {
  const url = URL.createObjectURL(blob)
  const printWindow = window.open(url, '_blank')
  if (printWindow) {
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
      }, 500)
    }
  }
}

// 打开iframe打印预览
const openIframePrint = (blob: Blob) => {
  const url = URL.createObjectURL(blob)
  const iframe = document.createElement('iframe')
  iframe.style.position = 'fixed'
  iframe.style.right = '0'
  iframe.style.bottom = '0'
  iframe.style.width = '0'
  iframe.style.height = '0'
  iframe.style.border = 'none'
  iframe.src = url
  document.body.appendChild(iframe)

  iframe.onload = () => {
    setTimeout(() => {
      iframe.contentWindow?.print()
    }, 500)

    const cleanup = () => {
      setTimeout(() => {
        document.body.removeChild(iframe)
        URL.revokeObjectURL(url)
      }, 1000)
    }

    iframe.contentWindow?.addEventListener('afterprint', cleanup)
    // 5分钟后自动清理
    setTimeout(cleanup, 300000)
  }
}

// 生成打印HTML内容（每行2列网格布局）
const generatePrintHTML = (frameworkName: string) => {
  exportChartImages()

  // 生成图表HTML
  const chartsHTML = chartOptions
    .map(
      (chart, index) => `
    <div class="chart-item">
      <h4>${index + 1}. ${chart.title}</h4>
      <img src="${chartImages.value[index]}" alt="${chart.title}">
    </div>
  `,
    )
    .join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>图表打印测试 - ${frameworkName}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Microsoft YaHei', sans-serif;
          padding: 15mm;
          background: white;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #667eea;
        }
        .header h1 { font-size: 20px; color: #2d3748; margin-bottom: 6px; }
        .header p { font-size: 11px; color: #718096; }

        .chart-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15mm;
          margin-bottom: 15px;
        }

        .chart-item {
          page-break-inside: avoid;
          background: #f9fafb;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }

        .chart-item h4 {
          font-size: 12px;
          color: #2d3748;
          margin-bottom: 8px;
          text-align: center;
        }

        .chart-item img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          display: block;
        }

        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 12px;
          border-top: 1px solid #e2e8f0;
          font-size: 9px;
          color: #a0aec0;
        }

        @media print {
          body { padding: 10mm; }
          .chart-grid { gap: 10mm; }
          .chart-item {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>图表打印效果测试报告（2列布局）</h1>
        <p>测试时间：${currentDate.value} | 测试框架：${frameworkName}</p>
      </div>
      <div class="chart-grid">
        ${chartsHTML}
      </div>
      <div class="footer">
        <p>前端打印框架调研报告 - 图表对比测试 | 测试重点：检查每行2个图表的网格布局是否正确，有无重叠或换行错误</p>
      </div>
    </body>
    </html>
  `
}

// ==================== 9个框架的打印实现 ====================

// 1. 原生打印
const printWithNative = async () => {
  currentFramework.value = '原生打印 (window.print)'
  loading.value = true
  loadingMessage.value = '准备打印内容...'

  try {
    const html = generatePrintHTML('原生打印')
    const blob = new Blob([html], { type: 'text/html' })
    openIframePrint(blob)
  } finally {
    loading.value = false
  }
}

// 2. Print.js
const printWithPrintJs = async () => {
  currentFramework.value = 'Print.js'
  loading.value = true
  loadingMessage.value = '使用Print.js打印...'

  try {
    exportChartImages()
    await nextTick()

    // 更新打印区内容
    if (printContentRef.value) {
      printJS({
        printable: 'print-content-area',
        type: 'html',
        css: [],
        scanStyles: true,
        style: `
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Microsoft YaHei', sans-serif; padding: 15mm; }
          .print-header { text-align: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #667eea; }
          .print-header h1 { font-size: 20px; color: #2d3748; }
          .print-header p { font-size: 11px; color: #718096; }
          .chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15mm; margin-bottom: 15px; }
          .chart-item { page-break-inside: avoid; background: #f9fafb; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0; }
          .chart-item h4 { font-size: 12px; margin-bottom: 8px; text-align: center; }
          .chart-item img { max-width: 100%; height: auto; display: block; border-radius: 4px; }
          .print-footer { text-align: center; margin-top: 20px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 9px; color: #a0aec0; }
          @media print {
            body { padding: 10mm; }
            .chart-grid { gap: 10mm; }
            .chart-item { break-inside: avoid; }
          }
        `,
      })
    }
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 500)
  }
}

// 3. vue3-print-nb (使用原生方式模拟)
const printWithVuePrint = async () => {
  currentFramework.value = 'vue3-print-nb'
  loading.value = true
  loadingMessage.value = '使用vue3-print-nb打印...'

  try {
    const html = generatePrintHTML('vue3-print-nb')
    const blob = new Blob([html], { type: 'text/html' })
    openIframePrint(blob)
  } finally {
    loading.value = false
  }
}

// 4. jsPDF
const printWithJsPDF = async () => {
  currentFramework.value = 'jsPDF'
  loading.value = true
  loadingMessage.value = '使用jsPDF生成PDF...'

  try {
    exportChartImages()
    const doc = await createChineseJsPDF()

    doc.setFont('SourceHanSansSC', 'normal', 400)

    // 标题
    doc.setFontSize(16)
    doc.text('图表打印效果测试 (2列布局)', 105, 15, { align: 'center' })

    doc.setFontSize(9)
    doc.setTextColor(100)
    doc.text(`测试时间: ${currentDate.value} | 测试框架: jsPDF`, 105, 22, { align: 'center' })

    doc.setDrawColor(102, 126, 234)
    doc.setLineWidth(0.5)
    doc.line(15, 26, 195, 26)

    doc.setTextColor(0)
    let y = 35
    const imgWidth = 85
    const imgHeight = 60
    const leftX = 15
    const rightX = 110
    const gap = 20

    // 每行2个图表（每页最多3行=6个图表）
    for (let i = 0; i < chartImages.value.length; i += 2) {
      // 左侧图表
      doc.setFontSize(10)
      if (chartOptions[i]) {
        // @ts-ignore
        doc.text(`${i + 1}. ${chartOptions[i].title}`, leftX, y)
      }
      if (chartImages.value[i]) {
        doc.addImage(chartImages.value[i]!, 'PNG', leftX, y + 2, imgWidth, imgHeight)
      }

      // 右侧图表
      if (i + 1 < chartImages.value.length) {
        if (chartOptions[i + 1]) {
          // @ts-ignore
          doc.text(`${i + 2}. ${chartOptions[i + 1].title}`, rightX, y)
        }
        if (chartImages.value[i + 1]) {
          doc.addImage(chartImages.value[i + 1]!, 'PNG', rightX, y + 2, imgWidth, imgHeight)
        }
      }

      y += imgHeight + gap

      // 换页检查（y > 200表示已经放了3行，需要换页）
      if (y > 200 && i + 2 < chartImages.value.length) {
        doc.addPage()
        y = 20
      }
    }

    // 页脚
    doc.setFontSize(8)
    doc.text('前端打印框架调研报告 - 图表对比测试', 105, 285, { align: 'center' })

    const pdfBlob = doc.output('blob')
    openPrintPreview(pdfBlob)
  } catch (error) {
    console.error('jsPDF error:', error)
    alert('jsPDF生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 5. pdfmake
const printWithPdfmake = async () => {
  currentFramework.value = 'pdfmake'
  loading.value = true
  loadingMessage.value = '使用pdfmake生成PDF...'

  try {
    exportChartImages()

    // 生成2列布局的图表数组
    const chartRows: any[] = []
    for (let i = 0; i < chartImages.value.length; i += 2) {
      const row: any[] = [{ image: chartImages.value[i], width: 240, margin: [0, 0, 10, 0] }]
      if (i + 1 < chartImages.value.length) {
        row.push({ image: chartImages.value[i + 1], width: 240, margin: [10, 0, 0, 0] })
      }

      chartRows.push({
        columns: row,
        margin: [0, 5, 0, 15],
      })
    }

    const docDefinition: any = {
      content: [
        { text: '图表打印效果测试 (2列布局)', style: 'header', alignment: 'center' },
        {
          text: `测试时间: ${currentDate.value} | 测试框架: pdfmake`,
          style: 'subheader',
          alignment: 'center',
        },
        {
          canvas: [
            { type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 1, lineColor: '#667eea' },
          ],
        },
        { text: '\n' },
        ...chartRows,
      ],
      styles: {
        header: { fontSize: 16, bold: true, margin: [0, 0, 0, 5] },
        subheader: { fontSize: 9, color: '#718096', margin: [0, 0, 0, 10] },
      },
      footer: {
        text: '前端打印框架调研报告 - 图表对比测试 | 测试重点: 检查每行2图表的布局',
        alignment: 'center',
        fontSize: 8,
        color: '#a0aec0',
      },
      pageMargins: [30, 30, 30, 30],
    }

    pdfMake.createPdf(docDefinition).getBlob((blob: Blob) => {
      openPrintPreview(blob)
      loading.value = false
    })
  } catch (error) {
    console.error('pdfmake error:', error)
    alert('pdfmake生成失败: ' + error)
    loading.value = false
  }
}

// 6. html2canvas
const printWithHtml2Canvas = async () => {
  currentFramework.value = 'html2canvas'
  loading.value = true
  loadingMessage.value = '使用html2canvas截图...'

  try {
    exportChartImages()
    await nextTick()

    // 创建临时打印容器
    const container = document.createElement('div')
    container.innerHTML = generatePrintHTML('html2canvas')
    container.style.position = 'absolute'
    container.style.left = '-9999px'
    container.style.width = '800px'
    container.style.background = 'white'
    document.body.appendChild(container)

    await new Promise((resolve) => setTimeout(resolve, 300))

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    })

    document.body.removeChild(container)

    // 创建打印窗口
    const printHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>html2canvas打印</title>
        <style>
          * { margin: 0; padding: 0; }
          body { display: flex; justify-content: center; padding: 10mm; }
          img { max-width: 100%; height: auto; }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <img src="${canvas.toDataURL('image/png')}">
      </body>
      </html>
    `
    const blob = new Blob([printHtml], { type: 'text/html' })
    openIframePrint(blob)
  } catch (error) {
    console.error('html2canvas error:', error)
    alert('html2canvas生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 7. html2pdf.js
const printWithHtml2Pdf = async () => {
  currentFramework.value = 'html2pdf.js'
  loading.value = true
  loadingMessage.value = '使用html2pdf.js生成PDF...'

  try {
    const html = generatePrintHTML('html2pdf.js')
    const blob = new Blob([html], { type: 'text/html' })
    openIframePrint(blob)
  } catch (error) {
    console.error('html2pdf error:', error)
    alert('html2pdf生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 8. PDF-LIB
const printWithPdfLib = async () => {
  currentFramework.value = 'PDF-LIB'
  loading.value = true
  loadingMessage.value = '使用PDF-LIB生成PDF...'

  try {
    exportChartImages()

    const pdfDoc = await PDFDocument.create()
    let page = pdfDoc.addPage([595, 842]) // A4
    const { height } = page.getSize()

    // 嵌入所有图片
    const images = []
    for (const imgData of chartImages.value) {
      const imgBytes = await fetch(imgData).then((r) => r.arrayBuffer())
      const img = await pdfDoc.embedPng(imgBytes)
      images.push(img)
    }

    // 绘制图片（每行2个，每页最多3行=6个图表）
    let y = height - 50
    const imgWidth = 260
    const imgHeight = 180
    const leftX = 30
    const rightX = 305
    const gap = 30

    // @ts-ignore - PDFImage类型检查
    for (let i = 0; i < images.length; i += 2) {
      // 左侧图表
      if (images[i]) {
        page.drawImage(images[i]!, {
          x: leftX,
          y: y - imgHeight,
          width: imgWidth,
          height: imgHeight,
        })
      }

      // 右侧图表
      if (i + 1 < images.length && images[i + 1]) {
        page.drawImage(images[i + 1]!, {
          x: rightX,
          y: y - imgHeight,
          width: imgWidth,
          height: imgHeight,
        })
      }

      y -= imgHeight + gap

      // 换页（y < 250表示已经放了3行，需要换页）
      if (y < 250 && i + 2 < images.length) {
        page = pdfDoc.addPage([595, 842])
        y = height - 50
      }
    }

    const pdfBytes = await pdfDoc.save()
    // @ts-ignore - pdf-lib types issue
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    openPrintPreview(blob)
  } catch (error) {
    console.error('PDF-LIB error:', error)
    alert('PDF-LIB生成失败: ' + error)
  } finally {
    loading.value = false
  }
}

// 9. print-html-element
const printWithPrintHtmlElement = async () => {
  currentFramework.value = 'print-html-element'
  loading.value = true
  loadingMessage.value = '使用print-html-element打印...'

  try {
    const html = generatePrintHTML('print-html-element')
    const blob = new Blob([html], { type: 'text/html' })
    openIframePrint(blob)
  } catch (error) {
    console.error('print-html-element error:', error)
    alert('print-html-element打印失败: ' + error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* 页面基础布局（复用其他页面样式） */
.demo-page {
  min-height: 100vh;
  background: #f7fafc;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-header h1 {
  margin: 0;
  font-size: 1.8rem;
}

.back-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 4px;
  transition: all 0.3s;
}

.back-link:hover {
  background: white;
  color: #667eea;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* 侧边栏 */
.info-panel {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.info-panel h2 {
  margin: 0 0 1rem 0;
  color: #2d3748;
  font-size: 1.2rem;
}

.info-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  background: #f7fafc;
}

.info-section.warning {
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
}

.info-section.success {
  background: #ecfdf5;
  border-left: 4px solid #10b981;
}

.info-section h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: #2d3748;
}

.info-section ul {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.8;
}

.info-section p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #4a5568;
}

.info-section li {
  color: #4a5568;
  margin-bottom: 0.25rem;
}

/* 主内容区 */
.demo-panel {
  background: white;
  border-radius: 8px;
  padding: 2rem;
}

.chart-preview-section,
.framework-buttons {
  margin-bottom: 3rem;
}

.chart-preview-section h2,
.framework-buttons h2 {
  margin: 0 0 1rem 0;
  color: #2d3748;
  font-size: 1.5rem;
}

.button-desc {
  color: #718096;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.chart-item {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.chart-container {
  width: 100%;
  height: 240px;
  background: white;
  border-radius: 4px;
}

.chart-label {
  text-align: center;
  font-weight: 600;
  color: #2d3748;
  margin: 0.75rem 0 0.25rem 0;
  font-size: 0.95rem;
}

.chart-note {
  text-align: center;
  color: #718096;
  font-size: 0.85rem;
  margin: 0;
}

/* 按钮网格 */
.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.fw-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.fw-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.fw-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.fw-icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.fw-name {
  font-weight: 600;
  color: #2d3748;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.fw-size {
  font-size: 0.75rem;
  color: #a0aec0;
}

/* 各框架按钮颜色 */
.fw-btn.native {
  border-color: #3182ce;
}
.fw-btn.native:hover:not(:disabled) {
  background: #ebf8ff;
  border-color: #2b6cb0;
}

.fw-btn.printjs {
  border-color: #d69e2e;
}
.fw-btn.printjs:hover:not(:disabled) {
  background: #fffff0;
  border-color: #b7791f;
}

.fw-btn.vueprint {
  border-color: #48bb78;
}
.fw-btn.vueprint:hover:not(:disabled) {
  background: #f0fff4;
  border-color: #38a169;
}

.fw-btn.jspdf {
  border-color: #e53e3e;
}
.fw-btn.jspdf:hover:not(:disabled) {
  background: #fff5f5;
  border-color: #c53030;
}

.fw-btn.pdfmake {
  border-color: #805ad5;
}
.fw-btn.pdfmake:hover:not(:disabled) {
  background: #faf5ff;
  border-color: #6b46c1;
}

.fw-btn.html2canvas {
  border-color: #dd6b20;
}
.fw-btn.html2canvas:hover:not(:disabled) {
  background: #fffaf0;
  border-color: #c05621;
}

.fw-btn.html2pdf {
  border-color: #38b2ac;
}
.fw-btn.html2pdf:hover:not(:disabled) {
  background: #e6fffa;
  border-color: #319795;
}

.fw-btn.pdflib {
  border-color: #667eea;
}
.fw-btn.pdflib:hover:not(:disabled) {
  background: #ebf4ff;
  border-color: #5a67d8;
}

.fw-btn.printhtmlelement {
  border-color: #ed64a6;
}
.fw-btn.printhtmlelement:hover:not(:disabled) {
  background: #fff5f7;
  border-color: #d53f8c;
}

.loading-status {
  margin-top: 1rem;
  padding: 1rem;
  background: #edf2f7;
  border-radius: 6px;
  text-align: center;
  color: #4a5568;
  font-size: 0.95rem;
}

/* 隐藏的打印内容 */
.print-content-hidden {
  position: absolute;
  left: -9999px;
  top: -9999px;
  width: 210mm;
  background: white;
  padding: 20px;
}

.print-content-hidden .print-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #667eea;
}

.print-content-hidden .print-header h1 {
  font-size: 20px;
  color: #2d3748;
  margin: 0 0 6px 0;
}

.print-content-hidden .print-header p {
  font-size: 11px;
  color: #718096;
  margin: 0;
}

.print-content-hidden .chart-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15mm;
  margin-bottom: 15px;
}

.print-content-hidden .chart-item {
  page-break-inside: avoid;
  break-inside: avoid;
  background: #f9fafb;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.print-content-hidden .chart-item h4 {
  font-size: 12px;
  color: #2d3748;
  margin: 0 0 8px 0;
  text-align: center;
}

.print-content-hidden .chart-item img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
}

.print-content-hidden .print-footer {
  text-align: center;
  margin-top: 20px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
  font-size: 9px;
  color: #a0aec0;
}

/* 打印媒体查询已移除，改用iframe打印方式 */
</style>
