<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🌐 浏览器原生打印</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>无需任何第三方库</strong></p>
          <p>纯浏览器原生API</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 1+</li>
            <li>✅ Firefox 1+</li>
            <li>✅ Safari 1+</li>
            <li>✅ Edge All</li>
            <li>✅ IE 5+</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐ (100%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>✅ 零加载时间</li>
            <li>✅ 无内存开销</li>
            <li>✅ 矢量输出</li>
            <li>✅ 原生渲染</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ page-break-before</li>
            <li>✅ page-break-after</li>
            <li>✅ page-break-inside</li>
            <li>✅ break-before (新)</li>
            <li>✅ break-after (新)</li>
            <li>⚠️ 依赖浏览器实现</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">0 KB</p>
          <p>无需引入任何库</p>
        </div>

        <div class="info-section">
          <h3>📚 学习曲线</h3>
          <p class="rating">⭐⭐⭐⭐</p>
          <p>需要掌握 CSS 打印样式</p>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>无依赖，轻量级</li>
            <li>浏览器原生支持</li>
            <li>用户可预览和配置</li>
            <li>矢量输出，质量高</li>
            <li>适合简单文档</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>样式调试复杂</li>
            <li>跨浏览器差异</li>
            <li>用户可能取消打印</li>
            <li>无法直接生成PDF</li>
            <li>分页控制有限</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <!-- 示例导航 -->
        <div class="example-tabs">
          <button
            v-for="(example, index) in examples"
            :key="index"
            @click="currentExample = index"
            :class="['tab-button', { active: currentExample === index }]"
          >
            {{ example.title }}
          </button>
        </div>

        <!-- 示例内容 -->
        <div class="example-content">
          <!-- 示例 1: 基础打印 -->
          <div v-show="currentExample === 0" class="example-section">
            <h3>示例 1：基础打印 - 整页打印</h3>
            <p>最简单的打印方式，打印当前页面的全部内容。</p>
            <div class="controls">
              <button @click="example1Print" class="btn btn-primary">🖨️ 打印整页</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>function example1Print() {
  window.print();
}</code></pre>
            </div>
            <div id="example1-content" class="demo-content">
              <h2>这是示例1的内容</h2>
              <p>点击"打印整页"按钮，会打印整个页面（包括侧边栏、按钮等所有内容）</p>
              <p>日期：{{ currentDate }}</p>
            </div>
          </div>

          <!-- 示例 2: 隐藏元素打印 -->
          <div v-show="currentExample === 1" class="example-section">
            <h3>示例 2：隐藏不需要打印的元素</h3>
            <p>使用CSS @media print 隐藏页面中不需要打印的部分。</p>
            <div class="controls">
              <button @click="example2Print" class="btn btn-primary">🖨️ 打印（隐藏按钮）</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>// CSS
@media print {
  .no-print {
    display: none !important;
  }
}

// JavaScript
function example2Print() {
  window.print();
}</code></pre>
            </div>
            <div class="demo-content">
              <h2>发票</h2>
              <p><strong>订单号：</strong> INV-2025-001</p>
              <p><strong>客户：</strong> 张三</p>
              <p><strong>金额：</strong> ¥1,299.00</p>
              <div class="no-print" style="background: #fff3cd; padding: 10px; margin-top: 10px">
                ⚠️ 这个黄色区域在打印时会被隐藏（使用了 .no-print 类）
              </div>
            </div>
          </div>

          <!-- 示例 3: 分页控制 -->
          <div v-show="currentExample === 2" class="example-section">
            <h3>示例 3：分页控制</h3>
            <p>使用 page-break-* 属性控制打印时的分页行为。</p>
            <div class="controls">
              <button @click="example3Print" class="btn btn-primary">🖨️ 打印（查看分页）</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>// CSS
.page-break {
  page-break-after: always;
}

.keep-together {
  page-break-inside: avoid;
}</code></pre>
            </div>
            <div id="example3-content" class="demo-content">
              <div class="page-section">
                <h2>第一页内容</h2>
                <p>这是第一页的内容...</p>
                <div
                  style="
                    height: 200px;
                    background: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  页面内容区域
                </div>
              </div>
              <div class="page-break"></div>
              <div class="page-section">
                <h2>第二页内容</h2>
                <p>由于使用了 page-break，这部分会在新页面开始。</p>
                <div
                  style="
                    height: 200px;
                    background: #f0f0f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  页面内容区域
                </div>
              </div>
            </div>
          </div>

          <!-- 示例 4: 只打印指定区域 -->
          <div v-show="currentExample === 3" class="example-section">
            <h3>示例 4：只打印指定区域</h3>
            <p>使用CSS选择器，只打印页面中的特定内容。</p>
            <div class="controls">
              <button @click="example4Print" class="btn btn-primary">🖨️ 只打印蓝色区域</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>@media print {
  body > *:not(#print-area) {
    display: none !important;
  }
}</code></pre>
            </div>
            <div class="demo-content">
              <div style="background: #fee; padding: 15px; margin-bottom: 15px">
                ❌ 这个红色区域不会被打印
              </div>
              <div
                id="print-area-example4"
                style="background: #e3f2fd; padding: 15px; border: 2px solid #2196f3"
              >
                ✅ 只有这个蓝色区域会被打印<br />
                <strong>订单详情</strong><br />
                订单号：#12345<br />
                金额：¥299.00
              </div>
              <div style="background: #fee; padding: 15px; margin-top: 15px">
                ❌ 这个红色区域也不会被打印
              </div>
            </div>
          </div>

          <!-- 示例 5: 表格打印优化 -->
          <div v-show="currentExample === 4" class="example-section">
            <h3>示例 5：表格打印优化</h3>
            <p>优化表格在打印时的显示效果，包括表头重复和避免截断。</p>
            <div class="controls">
              <button @click="example5Print" class="btn btn-primary">🖨️ 打印表格</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>@media print {
  table { page-break-inside: auto; }
  tr { page-break-inside: avoid; }
  thead { display: table-header-group; }
  tfoot { display: table-footer-group; }
}</code></pre>
            </div>
            <div class="demo-content">
              <table class="print-table">
                <thead>
                  <tr>
                    <th>商品名称</th>
                    <th>规格</th>
                    <th>数量</th>
                    <th>单价</th>
                    <th>金额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 10" :key="i">
                    <td>商品 {{ i }}</td>
                    <td>标准版</td>
                    <td>{{ i }}</td>
                    <td>¥{{ (i * 100).toFixed(2) }}</td>
                    <td>¥{{ (i * i * 100).toFixed(2) }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="4"><strong>总计</strong></td>
                    <td><strong>¥38,500.00</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <!-- 示例 6: 页眉页脚 -->
          <div v-show="currentExample === 5" class="example-section">
            <h3>示例 6：添加页眉和页脚</h3>
            <p>使用 @page 规则为打印添加页眉、页脚和页码。</p>
            <div class="controls">
              <button @click="example6Print" class="btn btn-primary">🖨️ 打印（含页眉页脚）</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>@media print {
  @page {
    margin: 2.5cm;
    @top-center { content: "公司机密文件"; }
    @bottom-right { content: counter(page); }
  }
}</code></pre>
            </div>
            <div class="demo-content">
              <div class="with-page-header">
                <h2>年度报告</h2>
                <p>这是一份包含页眉和页脚的文档示例。</p>
                <p>内容会自动添加页码和标题。</p>
                <div style="height: 300px; background: #f5f5f5; padding: 20px">
                  <h3>内容区域</h3>
                  <p>这里是主要内容...</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 示例 7: 新窗口打印 -->
          <div v-show="currentExample === 6" class="example-section">
            <h3>示例 7：在新窗口中打印</h3>
            <p>打开新窗口显示打印内容，适合打印特定格式的报表。</p>
            <div class="controls">
              <button @click="example7Print" class="btn btn-primary">🖨️ 新窗口打印</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>function example7Print() {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 250);
}</code></pre>
            </div>
            <div id="example7-content" class="demo-content">
              <div style="border: 2px solid #4caf50; padding: 20px">
                <h2>📄 独立打印文档</h2>
                <p><strong>文档编号：</strong> DOC-2025-001</p>
                <p><strong>生成时间：</strong> {{ currentDate }}</p>
                <hr />
                <p>这个内容会在新窗口中打开并打印，不影响当前页面。</p>
              </div>
            </div>
          </div>

          <!-- 示例 8: 打印前后钩子 -->
          <div v-show="currentExample === 7" class="example-section">
            <h3>示例 8：打印前后事件监听</h3>
            <p>监听打印对话框的打开和关闭事件，可以在打印前后执行自定义逻辑。</p>
            <div class="controls">
              <button @click="example8Print" class="btn btn-primary">🖨️ 打印（查看控制台）</button>
            </div>
            <div class="code-display">
              <h4>代码：</h4>
              <pre><code>window.addEventListener('beforeprint', () => {
  console.log('打印对话框即将打开');
  // 可以在这里修改页面内容
});

window.addEventListener('afterprint', () => {
  console.log('打印对话框已关闭');
  // 恢复页面状态
});</code></pre>
            </div>
            <div class="demo-content">
              <div
                :class="{ 'print-active': isPrinting }"
                style="padding: 20px; transition: all 0.3s"
              >
                <h2>打印状态监听演示</h2>
                <p v-if="!isPrinting">当前状态：<span style="color: #4caf50">● 正常</span></p>
                <p v-else>当前状态：<span style="color: #ff9800">● 打印中</span></p>
                <p>打开控制台查看打印前后的事件日志。</p>
                <p>打印次数：{{ printCount }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 原有的完整文档示例 -->
        <div class="divider"></div>
        <h3 style="margin: 2rem 0 1rem">完整文档示例</h3>
        <div class="controls">
          <button @click="handlePrint" class="btn btn-primary">🖨️ 打印完整文档</button>
          <button @click="handlePrintSelected" class="btn btn-info">📄 新窗口打印</button>
        </div>

        <div id="print-content" class="print-content">
          <div class="document">
            <header class="doc-header">
              <h1>前端打印技术调研报告</h1>
              <p class="doc-meta">报告日期: {{ currentDate }}</p>
            </header>

            <section class="doc-section">
              <h2>一、概述</h2>
              <p>本报告旨在全面调研和对比当前主流的前端打印技术方案，为项目选型提供参考依据。</p>
              <p>
                随着Web应用的普及，前端打印需求日益增长，包括但不限于：订单打印、报表生成、
                合同打印、发票打印等场景。
              </p>
            </section>

            <section class="doc-section page-break">
              <h2>二、浏览器原生打印</h2>
              <h3>2.1 基本原理</h3>
              <p>
                浏览器原生打印基于 <code>window.print()</code> API 和 CSS
                <code>@media print</code> 媒体查询实现。
              </p>

              <h3>2.2 核心技术</h3>
              <ul>
                <li><strong>window.print()</strong>: 触发浏览器打印对话框</li>
                <li><strong>@media print</strong>: 定义打印专用样式</li>
                <li><strong>page-break-*</strong>: 控制分页行为</li>
              </ul>

              <h3>2.3 代码示例</h3>
              <pre><code>// JavaScript
window.print();

// CSS
@media print {
  .no-print { display: none; }
  .page-break { page-break-after: always; }
}</code></pre>
            </section>

            <section class="doc-section page-break">
              <h2>三、性能数据</h2>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>指标</th>
                    <th>数值</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>库体积</td>
                    <td>0 KB</td>
                    <td>无需引入</td>
                  </tr>
                  <tr>
                    <td>初始化时间</td>
                    <td>0 ms</td>
                    <td>原生API</td>
                  </tr>
                  <tr>
                    <td>渲染时间</td>
                    <td>&lt; 100ms</td>
                    <td>取决于内容</td>
                  </tr>
                  <tr>
                    <td>内存占用</td>
                    <td>最小</td>
                    <td>浏览器管理</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section class="doc-section page-break">
              <h2>四、兼容性说明</h2>
              <p>
                <code>window.print()</code> 是最古老、最稳定的Web API之一，几乎所有浏览器都支持。
              </p>
              <ul>
                <li>✅ 桌面浏览器：全部支持</li>
                <li>✅ 移动浏览器：大部分支持</li>
                <li>⚠️ 微信内置浏览器：部分限制</li>
              </ul>
            </section>

            <section class="doc-section">
              <h2>五、最佳实践</h2>
              <ol>
                <li>使用 <code>@media print</code> 隐藏不必要元素</li>
                <li>合理使用 <code>page-break-*</code> 控制分页</li>
                <li>设置合适的页边距和字体大小</li>
                <li>测试不同浏览器的打印效果</li>
                <li>提供打印预览功能提升用户体验</li>
              </ol>
            </section>

            <footer class="doc-footer no-print">
              <p>此区域不会被打印（使用了 .no-print 类）</p>
            </footer>
          </div>
        </div>

        <!-- 高级功能示例 -->
        <div class="advanced-section">
          <h2 style="color: #667eea; margin: 3rem 0 1.5rem">🚀 高级功能演示</h2>

          <!-- 高级示例标签 -->
          <div class="example-tabs">
            <button
              v-for="(example, index) in advancedExamples"
              :key="'adv-' + index"
              @click="currentAdvanced = index"
              :class="['tab-button', { active: currentAdvanced === index }]"
            >
              {{ example.title }}
            </button>
          </div>

          <!-- 高级示例内容 -->
          <div class="example-content">
            <!-- 高级示例 1: CSS变量控制 -->
            <div v-show="currentAdvanced === 0" class="example-section">
              <h3>高级1：使用CSS变量控制打印样式</h3>
              <p>动态调整打印时的字体大小、页边距等。</p>
              <div class="controls">
                <label>
                  字体大小: <input type="range" min="10" max="20" v-model="printFontSize" />
                  {{ printFontSize }}pt
                </label>
                <label>
                  页边距: <input type="range" min="10" max="30" v-model="printMargin" />
                  {{ printMargin }}mm
                </label>
                <button @click="advanced1Print" class="btn btn-primary">🖨️ 打印（查看效果）</button>
              </div>
              <div class="code-display">
                <h4>代码：</h4>
                <pre><code>/* CSS变量 */
:root {
  --print-font-size: 12pt;
  --print-margin: 20mm;
}

@media print {
  @page {
    margin: var(--print-margin);
  }
  body {
    font-size: var(--print-font-size);
  }
}

// 动态修改
document.documentElement.style.setProperty('--print-font-size', size + 'pt');</code></pre>
              </div>
              <div
                class="demo-content"
                data-advanced="1"
                :style="{
                  '--print-font-size': printFontSize + 'pt',
                  '--print-margin': printMargin + 'mm',
                }"
              >
                <h2>可调节样式的文档</h2>
                <p>这个文档的打印样式可以通过滑块动态调整。</p>
                <p>当前字体大小: {{ printFontSize }}pt，页边距: {{ printMargin }}mm</p>
              </div>
            </div>

            <!-- 高级示例 2: 横向/纵向打印 -->
            <div v-show="currentAdvanced === 1" class="example-section">
              <h3>高级2：横向/纵向打印切换</h3>
              <p>根据内容自动选择打印方向。</p>
              <div class="controls">
                <button @click="advanced2PrintPortrait" class="btn btn-primary">🖨️ 纵向打印</button>
                <button @click="advanced2PrintLandscape" class="btn btn-success">
                  🖨️ 横向打印
                </button>
              </div>
              <div class="code-display">
                <h4>代码：</h4>
                <pre><code>@media print {
  @page { size: portrait; }  /* 纵向 */
  @page { size: landscape; } /* 横向 */
  @page { size: A4 portrait; }
  @page { size: A4 landscape; }
}</code></pre>
              </div>
              <div id="orientation-content" class="demo-content">
                <table style="width: 100%">
                  <thead>
                    <tr>
                      <th v-for="i in 8" :key="i">列{{ i }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="j in 5" :key="j">
                      <td v-for="i in 8" :key="i">数据{{ j }}-{{ i }}</td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin-top: 1rem">宽表格建议使用横向打印</p>
              </div>
            </div>

            <!-- 高级示例 3: 打印质量优化 -->
            <div v-show="currentAdvanced === 2" class="example-section">
              <h3>高级3：图片打印质量优化</h3>
              <p>确保图片在打印时清晰度最佳。</p>
              <div class="controls">
                <button @click="advanced3Print" class="btn btn-primary">🖨️ 打印高清图片</button>
              </div>
              <div class="code-display">
                <h4>代码：</h4>
                <pre><code>@media print {
  img {
    /* 确保高分辨率打印 */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* 防止缩放 */
    max-width: 100%;
    page-break-inside: avoid;
  }
}</code></pre>
              </div>
              <div class="demo-content" data-advanced="3">
                <div style="text-align: center">
                  <img
                    src="https://via.placeholder.com/600x400/667eea/ffffff?text=High+Quality+Image"
                    alt="示例图片"
                    style="max-width: 100%; height: auto"
                  />
                  <p style="margin-top: 1rem">这张图片在打印时会保持高清晰度</p>
                </div>
              </div>
            </div>

            <!-- 高级示例 4: 背景色打印 -->
            <div v-show="currentAdvanced === 3" class="example-section">
              <h3>高级4：强制打印背景色和图片</h3>
              <p>确保重要的背景色和图片能被打印出来。</p>
              <div class="controls">
                <button @click="advanced4Print" class="btn btn-primary">🖨️ 打印（含背景）</button>
              </div>
              <div class="code-display">
                <h4>代码：</h4>
                <pre><code>@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
}</code></pre>
              </div>
              <div class="demo-content force-background">
                <div
                  style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                  "
                >
                  <h3>带背景的重要信息</h3>
                  <p>这个渐变背景在打印时也会显示</p>
                </div>
                <div
                  style="
                    background: #fff3cd;
                    padding: 15px;
                    margin-top: 15px;
                    border-left: 4px solid #ffc107;
                  "
                >
                  ⚠️ 警告信息 - 背景色会被保留
                </div>
              </div>
            </div>

            <!-- 高级示例 5: 自动目录和书签 -->
            <div v-show="currentAdvanced === 4" class="example-section">
              <h3>高级5：多页文档带目录</h3>
              <p>为长文档添加目录，方便打印后查阅。</p>
              <div class="controls">
                <button @click="advanced5Print" class="btn btn-primary">🖨️ 打印（含目录）</button>
              </div>
              <div class="code-display">
                <h4>代码：</h4>
                <pre><code>@media print {
  .toc { page-break-after: always; }
  h2 { page-break-before: always; }
  h2::before { content: counter(chapter) ". "; }
}</code></pre>
              </div>
              <div id="toc-content" class="demo-content">
                <div class="toc">
                  <h2>目录</h2>
                  <ul>
                    <li>第一章：前言 ..................... 2</li>
                    <li>第二章：方法 ..................... 3</li>
                    <li>第三章：结论 ..................... 4</li>
                  </ul>
                </div>
                <h2>第一章：前言</h2>
                <p>这是第一章的内容...</p>
                <h2>第二章：方法</h2>
                <p>这是第二章的内容...</p>
                <h2>第三章：结论</h2>
                <p>这是第三章的内容...</p>
              </div>
            </div>

            <!-- 高级示例 6: 打印性能优化 -->
            <div v-show="currentAdvanced === 5" class="example-section">
              <h3>高级6：性能优化 - 减少重排和重绘</h3>
              <p>优化大量内容的打印性能。</p>
              <div class="controls">
                <button @click="advanced6Print" class="btn btn-primary">🖨️ 打印（性能优化）</button>
                <button @click="generateLargeContent" class="btn btn-secondary">
                  生成大量内容
                </button>
              </div>
              <div class="code-display">
                <h4>代码：</h4>
                <pre v-pre><code>// 使用DocumentFragment减少DOM操作
const fragment = document.createDocumentFragment();
for (let i = 0; i &lt; 1000; i++) {
  const p = document.createElement('p');
  p.textContent = `内容 ${i}`;
  fragment.appendChild(p);
}
container.appendChild(fragment);

// CSS优化
@media print {
  * { box-shadow: none !important; }
}</code></pre>
              </div>
              <div id="performance-content" class="demo-content">
                <p>点击"生成大量内容"按钮测试性能优化效果</p>
                <p>生成的内容数: {{ largeContentCount }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CSS打印优化技巧 -->
        <div class="tips-section">
          <h2 style="color: #667eea; margin: 3rem 0 1.5rem">💡 CSS打印优化技巧</h2>
          <div class="tips-grid">
            <div class="tip-card">
              <h4>1. 隐藏不必要元素</h4>
              <pre><code>@media print {
  nav, .sidebar, .ads {
    display: none !important;
  }
}</code></pre>
            </div>
            <div class="tip-card">
              <h4>2. 优化链接显示</h4>
              <pre><code>@media print {
  a[href]:after {
    content: " (" attr(href) ")";
  }
}</code></pre>
            </div>
            <div class="tip-card">
              <h4>3. 孤行/寡行控制</h4>
              <pre><code>@media print {
  p {
    orphans: 3;  /* 页底最少3行 */
    widows: 3;   /* 页顶最少3行 */
  }
}</code></pre>
            </div>
            <div class="tip-card">
              <h4>4. 表格行保持完整</h4>
              <pre><code>@media print {
  tr {
    page-break-inside: avoid;
  }
}</code></pre>
            </div>
            <div class="tip-card">
              <h4>5. 标题与内容不分离</h4>
              <pre><code>@media print {
  h1, h2, h3 {
    page-break-after: avoid;
  }
}</code></pre>
            </div>
            <div class="tip-card">
              <h4>6. 自定义页面尺寸</h4>
              <pre><code>@media print {
  @page {
    size: A4;
    margin: 2cm;
  }
}</code></pre>
            </div>
          </div>
        </div>

        <div class="code-examples">
          <h3>💻 完整代码参考</h3>

          <div class="code-block">
            <h4>基础用法</h4>
            <pre><code>// 直接触发打印
window.print();</code></pre>
          </div>

          <div class="code-block">
            <h4>打印指定区域</h4>
            <pre><code>// 方法1: 使用 CSS 隐藏其他内容
@media print {
  body > *:not(#print-area) {
    display: none !important;
  }
}

// 方法2: 打开新窗口打印
const printWindow = window.open('', '_blank');
printWindow.document.write(content);
printWindow.print();</code></pre>
          </div>

          <div class="code-block">
            <h4>分页控制</h4>
            <pre><code>/* 在元素后强制分页 */
.page-break {
  page-break-after: always;
}

/* 避免元素被分页截断 */
.keep-together {
  page-break-inside: avoid;
}

/* 新标准 (推荐) */
.page-break-new {
  break-after: page;
  break-inside: avoid;
}</code></pre>
          </div>

          <div class="code-block">
            <h4>完整示例 (Vue 3)</h4>
            <pre><code>import { ref } from 'vue';

const handlePrint = () => {
  window.print();
};

const handlePrintArea = () => {
  const printContent = document.getElementById('print-area');
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent.innerHTML;
  window.print();
  document.body.innerHTML = originalContent;

  // 重新绑定Vue (不推荐，仅演示)
  // 推荐使用 CSS 方式
};</code></pre>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))
const currentExample = ref(0)
const currentAdvanced = ref(0)
const isPrinting = ref(false)
const printCount = ref(0)
const printFontSize = ref(12)
const printMargin = ref(20)
const largeContentCount = ref(0)

// 示例列表
const examples = [
  { title: '示例1: 基础打印' },
  { title: '示例2: 隐藏元素' },
  { title: '示例3: 分页控制' },
  { title: '示例4: 指定区域' },
  { title: '示例5: 表格优化' },
  { title: '示例6: 页眉页脚' },
  { title: '示例7: 新窗口' },
  { title: '示例8: 事件监听' },
]

// 高级示例列表
const advancedExamples = [
  { title: '高级1: CSS变量' },
  { title: '高级2: 横向/纵向' },
  { title: '高级3: 图片质量' },
  { title: '高级4: 背景色' },
  { title: '高级5: 目录' },
  { title: '高级6: 性能优化' },
]

// 示例 1: 基础打印
const example1Print = () => {
  window.print()
}

// 示例 2: 隐藏元素打印
const example2Print = () => {
  window.print()
}

// 示例 3: 分页控制
const example3Print = () => {
  window.print()
}

// 示例 4: 只打印指定区域
const example4Print = () => {
  // 临时隐藏其他内容
  const printArea = document.getElementById('print-area-example4')
  if (!printArea) return

  const originalContents = document.body.innerHTML
  const printContents = printArea.innerHTML

  // 创建临时样式
  const style = document.createElement('style')
  style.textContent = `
    @media print {
      body * {
        visibility: hidden;
      }
      #print-area-example4, #print-area-example4 * {
        visibility: visible;
      }
      #print-area-example4 {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  `
  document.head.appendChild(style)

  window.print()

  // 移除临时样式
  document.head.removeChild(style)
}

// 示例 5: 表格打印
const example5Print = () => {
  window.print()
}

// 示例 6: 页眉页脚打印
const example6Print = () => {
  window.print()
}

// 示例 7: 新窗口打印
const example7Print = () => {
  const content = document.getElementById('example7-content')
  if (!content) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>打印内容</title>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        h2 { color: #2d3748; }
        p { line-height: 1.8; }
        hr { margin: 20px 0; border: none; border-top: 2px solid #e2e8f0; }
      </style>
    </head>
    <body>
      ${content.innerHTML}
    </body>
    </html>
  `)

  printWindow.document.close()
  printWindow.focus()

  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

// 示例 8: 打印事件监听
const example8Print = () => {
  window.print()
}

// 高级示例 1: CSS变量控制
const advanced1Print = () => {
  // 设置CSS变量到document根元素
  document.documentElement.style.setProperty('--print-font-size', printFontSize.value + 'pt')
  document.documentElement.style.setProperty('--print-margin', printMargin.value + 'mm')

  const content = document.querySelector('[data-advanced="1"]') as HTMLElement
  if (!content) {
    window.print()
    return
  }

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CSS变量打印示例</title>
      <meta charset="UTF-8">
      <style>
        :root {
          --print-font-size: ${printFontSize.value}pt;
          --print-margin: ${printMargin.value}mm;
        }
        @page {
          margin: var(--print-margin);
        }
        body {
          font-family: Arial, sans-serif;
          font-size: var(--print-font-size);
          padding: 20px;
        }
        h2 { color: #2d3748; margin-bottom: 1rem; }
        p { line-height: 1.8; margin-bottom: 0.5rem; }
      </style>
    </head>
    <body>
      ${content.innerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

// 高级示例 2: 横向/纵向打印
const advanced2PrintPortrait = () => {
  const content = document.getElementById('orientation-content')
  if (!content) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>纵向打印示例</title>
      <meta charset="UTF-8">
      <style>
        @page { size: A4 portrait; margin: 2cm; }
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
        th { background: #667eea; color: white; }
        tr:nth-child(even) { background: #f7fafc; }
        p { margin-top: 1rem; color: #4a5568; }
        .orientation-note { text-align: center; color: #667eea; font-weight: bold; margin-bottom: 1rem; }
      </style>
    </head>
    <body>
      <div class="orientation-note">📄 纵向打印 (Portrait)</div>
      ${content.innerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

const advanced2PrintLandscape = () => {
  const content = document.getElementById('orientation-content')
  if (!content) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>横向打印示例</title>
      <meta charset="UTF-8">
      <style>
        @page { size: A4 landscape; margin: 2cm; }
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
        th { background: #667eea; color: white; }
        tr:nth-child(even) { background: #f7fafc; }
        p { margin-top: 1rem; color: #4a5568; }
        .orientation-note { text-align: center; color: #48bb78; font-weight: bold; margin-bottom: 1rem; }
      </style>
    </head>
    <body>
      <div class="orientation-note">📄 横向打印 (Landscape) - 更适合宽表格</div>
      ${content.innerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

// 高级示例 3: 图片打印优化
const advanced3Print = () => {
  const content = document.querySelector('[data-advanced="3"]') as HTMLElement
  if (!content) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>高清图片打印</title>
      <meta charset="UTF-8">
      <style>
        @page { margin: 1.5cm; }
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        img {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          max-width: 100%;
          height: auto;
          page-break-inside: avoid;
        }
        p { margin-top: 1rem; color: #4a5568; }
        h3 { color: #2d3748; margin-bottom: 1rem; }
      </style>
    </head>
    <body>
      <h3>🖼️ 高清图片打印示例</h3>
      ${content.innerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

// 高级示例 4: 背景色打印
const advanced4Print = () => {
  const content = document.querySelector('.force-background') as HTMLElement
  if (!content) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>背景色打印示例</title>
      <meta charset="UTF-8">
      <style>
        @page { margin: 2cm; }
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        body { font-family: Arial, sans-serif; padding: 20px; }
        h3 { color: white; margin: 0 0 10px 0; }
        p { margin: 0; }
        .gradient-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .warning-box {
          background: #fff3cd;
          padding: 15px;
          border-left: 4px solid #ffc107;
        }
        .title { text-align: center; margin-bottom: 20px; color: #2d3748; }
      </style>
    </head>
    <body>
      <div class="title"><h2>🎨 背景色打印示例</h2><p>以下内容的背景色会被完整打印</p></div>
      <div class="gradient-box">
        <h3>带背景的重要信息</h3>
        <p>这个渐变背景在打印时也会显示</p>
      </div>
      <div class="warning-box">
        ⚠️ 警告信息 - 背景色会被保留
      </div>
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

// 高级示例 5: 目录打印
const advanced5Print = () => {
  const content = document.getElementById('toc-content')
  if (!content) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>带目录的文档</title>
      <meta charset="UTF-8">
      <style>
        @page { margin: 2.5cm; }
        body { font-family: Arial, sans-serif; line-height: 1.8; }
        .toc {
          page-break-after: always;
          padding: 20px;
          border: 2px solid #667eea;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .toc h2 {
          color: #667eea;
          text-align: center;
          border-bottom: 2px solid #667eea;
          padding-bottom: 10px;
        }
        .toc ul {
          list-style: none;
          padding: 0;
        }
        .toc li {
          padding: 8px 0;
          border-bottom: 1px dotted #ccc;
        }
        h2 {
          color: #2d3748;
          page-break-before: always;
          border-bottom: 2px solid #667eea;
          padding-bottom: 10px;
        }
        h2:first-of-type {
          page-break-before: auto;
        }
        .toc + h2 {
          page-break-before: auto;
        }
        p { color: #4a5568; text-indent: 2em; }
      </style>
    </head>
    <body>
      <div class="toc">
        <h2>📋 目录</h2>
        <ul>
          <li>第一章：前言 ..................... 2</li>
          <li>第二章：方法 ..................... 3</li>
          <li>第三章：结论 ..................... 4</li>
        </ul>
      </div>
      <h2>第一章：前言</h2>
      <p>这是第一章的内容。在实际文档中，这里会包含详细的前言说明，介绍文档的背景、目的和主要内容概述。</p>
      <p>前言部分通常会占据一整页或更多内容，为读者提供必要的背景信息。</p>
      <h2>第二章：方法</h2>
      <p>这是第二章的内容。方法章节详细描述了研究或工作所采用的具体方法和技术手段。</p>
      <p>包括数据收集方式、分析工具、实验设计等关键信息。</p>
      <h2>第三章：结论</h2>
      <p>这是第三章的内容。结论部分总结了整个文档的核心发现和建议。</p>
      <p>同时也会提出未来的研究方向或改进建议。</p>
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

// 高级示例 6: 性能优化
const advanced6Print = () => {
  const content = document.getElementById('performance-content')
  if (!content) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>性能优化打印</title>
      <meta charset="UTF-8">
      <style>
        @page { margin: 1.5cm; }
        body {
          font-family: Arial, sans-serif;
          font-size: 10pt;
          line-height: 1.4;
        }
        /* 性能优化：移除阴影和复杂效果 */
        * {
          box-shadow: none !important;
          text-shadow: none !important;
        }
        p {
          margin: 3px 0;
          orphans: 3;
          widows: 3;
        }
        h3 {
          color: #667eea;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        .stats {
          background: #f7fafc;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
        }
      </style>
    </head>
    <body>
      <h3>⚡ 性能优化打印示例</h3>
      <div class="stats">
        <strong>生成的内容数:</strong> ${largeContentCount.value} 条
      </div>
      ${content.innerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
}

const generateLargeContent = () => {
  const container = document.getElementById('performance-content')
  if (!container) return

  // 清空现有内容（保留说明文字）
  const fragment = document.createDocumentFragment()

  // 生成500条数据
  for (let i = 0; i < 500; i++) {
    const p = document.createElement('p')
    p.textContent = `这是第 ${i + 1} 条测试数据 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    p.style.margin = '5px 0'
    fragment.appendChild(p)
  }

  // 一次性添加到DOM
  const contentDiv = document.createElement('div')
  contentDiv.appendChild(fragment)
  container.appendChild(contentDiv)

  largeContentCount.value = 500
}

// 打印前后事件处理
const handleBeforePrint = () => {
  console.log('🖨️ 打印对话框即将打开')
  console.log('时间:', new Date().toLocaleTimeString())
  isPrinting.value = true
}

const handleAfterPrint = () => {
  console.log('✅ 打印对话框已关闭')
  console.log('时间:', new Date().toLocaleTimeString())
  isPrinting.value = false
  printCount.value++
  console.log('打印次数:', printCount.value)
}

// 生命周期
onMounted(() => {
  window.addEventListener('beforeprint', handleBeforePrint)
  window.addEventListener('afterprint', handleAfterPrint)
})

onUnmounted(() => {
  window.removeEventListener('beforeprint', handleBeforePrint)
  window.removeEventListener('afterprint', handleAfterPrint)
})

// 原有的完整文档打印功能
const handlePrint = () => {
  window.print()
}

const handlePrintSelected = () => {
  const printContent = document.getElementById('print-content')
  if (!printContent) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>打印内容</title>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .doc-header { text-align: center; margin-bottom: 2rem; }
        .doc-section { margin-bottom: 2rem; }
        .page-break { page-break-after: always; }
        .no-print { display: none; }
        .data-table { width: 100%; border-collapse: collapse; }
        .data-table th, .data-table td { border: 1px solid #ddd; padding: 8px; }
        .data-table th { background: #f5f5f5; }
        code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; }
        pre { background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; }
      </style>
    </head>
    <body>
      ${printContent.innerHTML}
    </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 250)
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

/* 示例标签页 */
.example-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

.tab-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: #4a5568;
}

.tab-button:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.tab-button.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
  font-weight: 500;
}

/* 示例内容 */
.example-content {
  min-height: 400px;
}

.example-section {
  animation: fadeIn 0.3s ease;
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

.example-section h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.example-section > p {
  color: #718096;
  margin-bottom: 1rem;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);
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

/* 代码显示 */
.code-display {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.code-display h4 {
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.code-display pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0;
}

.code-display code {
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
}

/* 演示内容 */
.demo-content {
  background: white;
  border: 2px dashed #cbd5e0;
  border-radius: 6px;
  padding: 1.5rem;
  min-height: 150px;
}

.demo-content h2 {
  color: #2d3748;
  margin-top: 0;
}

/* 表格样式 */
.print-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.print-table th,
.print-table td {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.print-table th {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.print-table tbody tr:hover {
  background: #f7fafc;
}

/* 打印状态 */
.print-active {
  background: #fff3cd !important;
  border: 2px solid #ffc107 !important;
}

/* 高级功能区 */
.advanced-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px dashed #e2e8f0;
}

/* 优化建议区 */
.tips-section {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.tips-section h3 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.tip-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  color: #2d3748;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.tip-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.tip-card h4 {
  margin-bottom: 0.75rem;
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 600;
}

.tip-card p {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #4a5568;
}

.tip-card pre {
  margin: 0;
  padding: 0.75rem;
  background: #2d3748;
  border-radius: 4px;
  overflow-x: auto;
}

.tip-card code {
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #a0aec0;
}

/* 高级示例控件样式 */
.controls label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a5568;
}

.controls input[type='range'] {
  width: 100%;
  margin: 0.5rem 0;
}

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

.wide-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.wide-table th,
.wide-table td {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.wide-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.wide-table tr:hover {
  background: #f7fafc;
}

/* 分隔线 */
.divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 3rem 0;
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
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.doc-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
}

.doc-header h1 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.doc-meta {
  color: #718096;
  font-style: italic;
}

.doc-section {
  margin-bottom: 2rem;
}

.doc-section h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.doc-section h3 {
  color: #4a5568;
  margin: 1rem 0 0.5rem;
}

.doc-section p {
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 0.75rem;
}

.doc-section ul,
.doc-section ol {
  line-height: 1.8;
  color: #4a5568;
  margin-left: 1.5rem;
}

.doc-section code {
  background: #edf2f7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.doc-section pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.doc-section pre code {
  background: transparent;
  padding: 0;
  color: inherit;
}

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
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.doc-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
  text-align: center;
  color: #718096;
}

.code-examples {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
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

/* 打印样式 */
@media print {
  .demo-page {
    padding: 0;
  }

  .page-header,
  .info-panel,
  .controls,
  .code-examples,
  .code-display,
  .example-tabs,
  .back-link,
  .divider {
    display: none !important;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .demo-panel {
    border: none;
    padding: 0;
  }

  .print-content,
  .demo-content {
    background: white;
    border: none;
    padding: 0;
  }

  .document {
    box-shadow: none;
    padding: 0;
  }

  .page-break {
    page-break-after: always;
    break-after: page;
  }

  .no-print {
    display: none !important;
  }

  .doc-section {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* 示例3的分页样式 */
  #example3-content .page-break {
    page-break-after: always;
  }

  /* 示例5的表格样式 */
  .print-table {
    page-break-inside: auto;
  }

  .print-table tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }

  .print-table thead {
    display: table-header-group;
  }

  .print-table tfoot {
    display: table-footer-group;
  }

  /* 示例6的页眉页脚 */
  @page {
    margin: 2.5cm;
  }

  .with-page-header::before {
    content: '公司机密文件';
    display: block;
    text-align: center;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
  }

  /* 高级示例的打印样式 */
  .advanced-section,
  .tips-section {
    display: none !important;
  }

  /* 高级1: CSS变量 */
  #advanced1-content {
    font-size: var(--print-font-size, 12pt);
  }

  @page {
    margin: var(--print-margin, 20mm);
  }

  /* 高级3: 图片优化 */
  #advanced3-content img {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    max-width: 100%;
    height: auto;
  }

  /* 高级4: 强制背景色 */
  .force-background,
  .force-background * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  /* 高级5: 目录样式 */
  .toc {
    page-break-after: always;
  }

  .toc-item {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  /* 高级6: 性能优化内容 */
  #performance-content p {
    margin: 3px 0;
  }
}
</style>
