<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>🔄 html2pdf.js - 一站式方案</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="content-grid">
      <aside class="info-panel">
        <h2>技术详情</h2>
        <div class="info-section">
          <h3>📦 依赖</h3>
          <p><strong>html2pdf.js</strong></p>
          <p>集成 html2canvas + jsPDF</p>
        </div>

        <div class="info-section">
          <h3>🎯 兼容性</h3>
          <ul>
            <li>✅ Chrome 60+</li>
            <li>✅ Firefox 55+</li>
            <li>✅ Safari 11.1+</li>
            <li>✅ Edge 79+</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐ (80%)</p>
        </div>

        <div class="info-section">
          <h3>⚡ 性能</h3>
          <ul>
            <li>⚠️ 组合开销</li>
            <li>⚠️ 渲染较慢</li>
          </ul>
          <p class="rating">评分: ⭐⭐ (40%)</p>
        </div>

        <div class="info-section">
          <h3>📑 分页控制</h3>
          <ul>
            <li>✅ 自动分页</li>
            <li>✅ page-break支持</li>
          </ul>
          <p class="rating">评分: ⭐⭐⭐⭐</p>
        </div>

        <div class="info-section">
          <h3>📏 文件大小</h3>
          <p class="highlight">~330 KB</p>
        </div>

        <div class="info-section">
          <h3>✨ 优势</h3>
          <ul>
            <li>一站式解决方案</li>
            <li>配置简单</li>
            <li>自动处理分页</li>
            <li>所见即所得</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>⚠️ 劣势</h3>
          <ul>
            <li>性能开销大</li>
            <li>文件体积大</li>
            <li>图片型PDF</li>
            <li>文字不可选</li>
          </ul>
        </div>
      </aside>

      <main class="demo-panel">
        <div class="controls">
          <button @click="simplePDF" class="btn btn-primary">📄 简单生成</button>
          <button @click="configuredPDF" class="btn btn-secondary">⚙️ 配置生成</button>
          <button @click="multiPagePDF" class="btn btn-info">📑 多页文档</button>
        </div>

        <div id="pdf-content" class="pdf-content">
          <div class="document">
            <h1>html2pdf.js 使用文档</h1>
            <p class="date">{{ currentDate }}</p>

            <section>
              <h2>一、简介</h2>
              <p>
                html2pdf.js 是一个将 HTML 元素转换为 PDF 的库，它整合了 html2canvas 和 jsPDF
                的功能，提供了一站式的解决方案。
              </p>
            </section>

            <section>
              <h2>二、主要特性</h2>
              <div class="features">
                <div class="feature-box">
                  <h3>🎯 简单易用</h3>
                  <p>一行代码即可生成PDF</p>
                </div>
                <div class="feature-box">
                  <h3>📱 响应式</h3>
                  <p>自动适配页面大小</p>
                </div>
                <div class="feature-box">
                  <h3>🔧 可配置</h3>
                  <p>支持多种配置选项</p>
                </div>
                <div class="feature-box">
                  <h3>📑 自动分页</h3>
                  <p>智能处理多页内容</p>
                </div>
              </div>
            </section>

            <section class="page-break">
              <h2>三、使用场景</h2>
              <ul>
                <li>报告生成：将网页报告导出为PDF</li>
                <li>发票打印：生成PDF格式发票</li>
                <li>证书导出：制作PDF证书</li>
                <li>文档归档：保存网页内容</li>
              </ul>
            </section>

            <section>
              <h2>四、性能对比</h2>
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>方案</th>
                    <th>初始化</th>
                    <th>渲染</th>
                    <th>文件大小</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>window.print()</td>
                    <td>0ms</td>
                    <td>45ms</td>
                    <td>0 KB</td>
                  </tr>
                  <tr>
                    <td>jsPDF</td>
                    <td>125ms</td>
                    <td>234ms</td>
                    <td>150 KB</td>
                  </tr>
                  <tr>
                    <td>html2pdf.js</td>
                    <td>156ms</td>
                    <td>1456ms</td>
                    <td>330 KB</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>

        <div class="code-examples">
          <h3>💻 代码示例</h3>

          <div class="code-block">
            <h4>1. 安装</h4>
            <pre><code>npm install html2pdf.js</code></pre>
          </div>

          <div class="code-block">
            <h4>2. 最简用法</h4>
            <pre><code>import html2pdf from 'html2pdf.js';

const element = document.getElementById('content');
html2pdf().from(element).save();</code></pre>
          </div>

          <div class="code-block">
            <h4>3. 配置选项</h4>
            <pre><code>const options = {
  margin: 10,
  filename: 'document.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

html2pdf().set(options).from(element).save();</code></pre>
          </div>

          <div class="code-block">
            <h4>4. Promise 链式调用</h4>
            <pre><code>html2pdf()
  .from(element)
  .set({
    margin: 1,
    filename: 'report.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
  })
  .toPdf()
  .get('pdf')
  .then((pdf) => {
    // 可以进一步处理 PDF
    window.open(pdf.output('bloburl'));
  });</code></pre>
          </div>

          <div class="code-block">
            <h4>5. 分页控制</h4>
            <pre><code>// HTML 中添加分页类
&lt;div class="page-break"&gt;&lt;/div&gt;

// CSS
.page-break {
  page-break-after: always;
  break-after: page;
}

// JavaScript
html2pdf()
  .from(element)
  .set({
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  })
  .save();</code></pre>
          </div>

          <div class="code-block">
            <h4>6. 处理大内容</h4>
            <pre><code>html2pdf()
  .from(element)
  .set({
    margin: [10, 10, 10, 10],
    filename: 'long-document.pdf',
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.page-break-before',
      after: '.page-break-after',
      avoid: '.no-break'
    }
  })
  .save();</code></pre>
          </div>

          <div class="code-block">
            <h4>7. 生成 Blob</h4>
            <pre><code>html2pdf()
  .from(element)
  .output('blob')
  .then((blob) => {
    // 上传到服务器或其他处理
    const formData = new FormData();
    formData.append('pdf', blob, 'document.pdf');

    fetch('/upload', {
      method: 'POST',
      body: formData
    });
  });</code></pre>
          </div>

          <div class="code-block">
            <h4>8. 在新窗口打开</h4>
            <pre><code>html2pdf()
  .from(element)
  .output('dataurlnewwindow');</code></pre>
          </div>
        </div>

        <!-- ==================== 基础示例区域 ==================== -->
        <div class="examples-section">
          <h3 class="section-title">📘 基础转换示例</h3>

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

          <!-- 示例1: 基础HTML转PDF -->
          <div v-if="currentExample === 0" class="example-content">
            <h4>1. 基础HTML转PDF</h4>
            <p>最简单的用法，一行代码将HTML元素转换为PDF并下载。</p>
            <div class="demo-box">
              <div id="basic-content-1" class="preview-box">
                <h3>简单文档</h3>
                <p>这是一个基础的HTML转PDF示例。</p>
                <p>html2pdf.js会自动处理渲染和下载。</p>
              </div>
              <button @click="example1Generate" class="btn btn-primary">生成PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>import html2pdf from 'html2pdf.js';

// 获取要转换的元素
const element = document.getElementById('content');

// 一行代码生成PDF
html2pdf().from(element).save();</code></pre>
            </div>
          </div>

          <!-- 示例2: 配置选项 -->
          <div v-if="currentExample === 1" class="example-content">
            <h4>2. 配置选项</h4>
            <p>通过set()方法配置PDF生成选项。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  边距 (mm):
                  <input type="number" v-model="marginValue" min="0" max="50" />
                </label>
                <label>
                  纸张方向:
                  <select v-model="orientation">
                    <option value="portrait">纵向</option>
                    <option value="landscape">横向</option>
                  </select>
                </label>
                <label>
                  纸张尺寸:
                  <select v-model="pageFormat">
                    <option value="a4">A4</option>
                    <option value="a3">A3</option>
                    <option value="letter">Letter</option>
                  </select>
                </label>
              </div>
              <div id="basic-content-2" class="preview-box">
                <h3>配置文档</h3>
                <p>边距: {{ marginValue }}mm</p>
                <p>方向: {{ orientation === 'portrait' ? '纵向' : '横向' }}</p>
                <p>尺寸: {{ pageFormat.toUpperCase() }}</p>
              </div>
              <button @click="example2Generate" class="btn btn-primary">应用配置生成</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>const options = {
  margin: 10,           // 边距(mm)
  filename: 'doc.pdf',  // 文件名
  jsPDF: {
    unit: 'mm',
    format: 'a4',       // 纸张尺寸
    orientation: 'portrait' // 纸张方向
  }
};

html2pdf().set(options).from(element).save();</code></pre>
            </div>
          </div>

          <!-- 示例3: 图片质量 -->
          <div v-if="currentExample === 2" class="example-content">
            <h4>3. 图片质量设置</h4>
            <p>控制PDF中图片的格式和质量。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  图片格式:
                  <select v-model="imageType">
                    <option value="jpeg">JPEG</option>
                    <option value="png">PNG</option>
                    <option value="webp">WebP</option>
                  </select>
                </label>
                <label>
                  质量 (0.1-1.0):
                  <input type="number" v-model="imageQuality" min="0.1" max="1" step="0.1" />
                </label>
                <label>
                  缩放比例:
                  <input type="number" v-model="scaleValue" min="1" max="4" />
                </label>
              </div>
              <div id="basic-content-3" class="preview-box">
                <h3>图片质量测试</h3>
                <div class="color-blocks">
                  <div class="color-block" style="background: #667eea"></div>
                  <div class="color-block" style="background: #48bb78"></div>
                  <div class="color-block" style="background: #ed8936"></div>
                </div>
                <p>格式: {{ imageType }} | 质量: {{ imageQuality }} | 缩放: {{ scaleValue }}x</p>
              </div>
              <button @click="example3Generate" class="btn btn-primary">生成高质量PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>const options = {
  image: {
    type: 'jpeg',      // 'jpeg' | 'png' | 'webp'
    quality: 0.98      // 0.1 到 1.0
  },
  html2canvas: {
    scale: 2           // 渲染缩放比例
  }
};

html2pdf().set(options).from(element).save();</code></pre>
            </div>
          </div>

          <!-- 示例4: 页面尺寸 -->
          <div v-if="currentExample === 3" class="example-content">
            <h4>4. 自定义页面尺寸</h4>
            <p>设置自定义的页面宽度和高度。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  宽度 (mm):
                  <input type="number" v-model="customWidth" min="50" max="400" />
                </label>
                <label>
                  高度 (mm):
                  <input type="number" v-model="customHeight" min="50" max="600" />
                </label>
              </div>
              <div id="basic-content-4" class="preview-box" :style="previewStyle">
                <h3>自定义尺寸</h3>
                <p>宽度: {{ customWidth }}mm</p>
                <p>高度: {{ customHeight }}mm</p>
              </div>
              <button @click="example4Generate" class="btn btn-primary">生成自定义尺寸PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>const options = {
  jsPDF: {
    unit: 'mm',
    format: [210, 297], // 自定义 [宽度, 高度]
    orientation: 'portrait'
  }
};

html2pdf().set(options).from(element).save();</code></pre>
            </div>
          </div>

          <!-- 示例5: 边距设置 -->
          <div v-if="currentExample === 4" class="example-content">
            <h4>5. 四边边距设置</h4>
            <p>分别设置上、左、下、右四个方向的边距。</p>
            <div class="demo-box">
              <div class="margin-controls">
                <div class="margin-row">
                  <label>
                    上:
                    <input type="number" v-model="marginTop" min="0" max="50" />
                  </label>
                </div>
                <div class="margin-middle">
                  <label>
                    左:
                    <input type="number" v-model="marginLeft" min="0" max="50" />
                  </label>
                  <div id="basic-content-5" class="preview-box margin-preview">
                    <h3>边距测试</h3>
                    <p>上: {{ marginTop }}mm</p>
                    <p>左: {{ marginLeft }}mm</p>
                    <p>下: {{ marginBottom }}mm</p>
                    <p>右: {{ marginRight }}mm</p>
                  </div>
                  <label>
                    右:
                    <input type="number" v-model="marginRight" min="0" max="50" />
                  </label>
                </div>
                <div class="margin-row">
                  <label>
                    下:
                    <input type="number" v-model="marginBottom" min="0" max="50" />
                  </label>
                </div>
              </div>
              <button @click="example5Generate" class="btn btn-primary">应用边距生成</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>const options = {
  // 四边边距: [上, 左, 下, 右]
  margin: [10, 15, 10, 15],
  filename: 'margins.pdf'
};

html2pdf().set(options).from(element).save();</code></pre>
            </div>
          </div>

          <!-- 示例6: 文件名和输出 -->
          <div v-if="currentExample === 5" class="example-content">
            <h4>6. 文件名和输出方式</h4>
            <p>设置PDF文件名和多种输出方式。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  文件名:
                  <input type="text" v-model="fileName" placeholder="document" />
                </label>
                <label>
                  输出方式:
                  <select v-model="outputType">
                    <option value="save">下载文件</option>
                    <option value="blob">获取Blob</option>
                    <option value="dataurlnewwindow">新窗口打开</option>
                    <option value="datauristring">Base64字符串</option>
                  </select>
                </label>
              </div>
              <div id="basic-content-6" class="preview-box">
                <h3>输出测试</h3>
                <p>文件名: {{ fileName }}.pdf</p>
                <p>输出方式: {{ outputType }}</p>
              </div>
              <button @click="example6Generate" class="btn btn-primary">执行输出</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 下载文件
html2pdf().from(element).save('document.pdf');

// 获取Blob对象
html2pdf().from(element).output('blob')
  .then(blob =&gt; console.log(blob));

// 在新窗口打开
html2pdf().from(element).output('dataurlnewwindow');

// 获取Base64字符串
html2pdf().from(element).output('datauristring')
  .then(str =&gt; console.log(str));</code></pre>
            </div>
          </div>
        </div>

        <!-- ==================== 高级示例区域 ==================== -->
        <div class="advanced-section">
          <h3 class="section-title">📕 分页控制示例</h3>

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

          <!-- 高级示例1: 自动分页 -->
          <div v-if="currentAdvanced === 0" class="example-content">
            <h4>1. 自动分页</h4>
            <p>html2pdf.js会自动处理长内容的分页。</p>
            <div class="demo-box">
              <div id="advanced-content-1" class="preview-box long-content">
                <h3>长文档示例</h3>
                <p v-for="i in 15" :key="i">
                  这是第
                  {{ i }}
                  段内容。html2pdf.js会自动计算页面高度，当内容超出时自动分页。无需手动处理分页逻辑。
                </p>
              </div>
              <button @click="advanced1Generate" class="btn btn-advanced">生成多页PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 自动分页 - 无需特殊配置
html2pdf()
  .from(element)
  .set({
    jsPDF: { format: 'a4' }
  })
  .save();</code></pre>
            </div>
          </div>

          <!-- 高级示例2: 分页符控制 -->
          <div v-if="currentAdvanced === 1" class="example-content">
            <h4>2. 分页符控制</h4>
            <p>使用CSS类和pagebreak配置控制分页位置。</p>
            <div class="demo-box">
              <div id="advanced-content-2" class="preview-box">
                <div class="page-section">
                  <h3>第一页内容</h3>
                  <p>这是第一页的内容。</p>
                </div>
                <div class="page-break-marker">--- 分页符 ---</div>
                <div class="page-section break-before">
                  <h3>第二页内容</h3>
                  <p>这是第二页的内容，通过CSS类强制分页。</p>
                </div>
                <div class="page-break-marker">--- 分页符 ---</div>
                <div class="page-section break-before">
                  <h3>第三页内容</h3>
                  <p>这是第三页的内容。</p>
                </div>
              </div>
              <button @click="advanced2Generate" class="btn btn-advanced">生成分页PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// CSS
.break-before {
  page-break-before: always;
  break-before: page;
}

// JavaScript
html2pdf()
  .from(element)
  .set({
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.break-before'
    }
  })
  .save();</code></pre>
            </div>
          </div>

          <!-- 高级示例3: 页眉页脚 -->
          <div v-if="currentAdvanced === 2" class="example-content">
            <h4>3. 页眉页脚</h4>
            <p>在每页添加页眉和页脚信息。</p>
            <div class="demo-box">
              <div class="config-controls">
                <label>
                  页眉文字:
                  <input type="text" v-model="headerText" placeholder="页眉" />
                </label>
                <label>
                  页脚文字:
                  <input type="text" v-model="footerText" placeholder="页脚" />
                </label>
              </div>
              <div id="advanced-content-3" class="preview-box">
                <div class="pdf-header">{{ headerText }}</div>
                <div class="pdf-body">
                  <h3>文档内容</h3>
                  <p>这是文档的主要内容区域。</p>
                  <p>页眉和页脚将显示在每一页。</p>
                </div>
                <div class="pdf-footer">{{ footerText }}</div>
              </div>
              <button @click="advanced3Generate" class="btn btn-advanced">生成带页眉页脚PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 使用 get('pdf') 获取jsPDF实例添加页眉页脚
html2pdf()
  .from(element)
  .toPdf()
  .get('pdf')
  .then((pdf) =&gt; {
    const pageCount = pdf.internal.getNumberOfPages();
    for (let i = 1; i &lt;= pageCount; i++) {
      pdf.setPage(i);
      // 页眉
      pdf.setFontSize(10);
      pdf.text('页眉文字', 105, 10, { align: 'center' });
      // 页脚
      pdf.text(`第 ${i} 页 / 共 ${pageCount} 页`, 105, 287, { align: 'center' });
    }
  })
  .save();</code></pre>
            </div>
          </div>

          <!-- 高级示例4: 多元素合并 -->
          <div v-if="currentAdvanced === 3" class="example-content">
            <h4>4. 多元素合并</h4>
            <p>将多个HTML元素合并到一个PDF中。</p>
            <div class="demo-box">
              <div class="multi-elements">
                <div id="element-a" class="preview-box element-box">
                  <h4>元素 A</h4>
                  <p>第一部分内容</p>
                </div>
                <div id="element-b" class="preview-box element-box">
                  <h4>元素 B</h4>
                  <p>第二部分内容</p>
                </div>
                <div id="element-c" class="preview-box element-box">
                  <h4>元素 C</h4>
                  <p>第三部分内容</p>
                </div>
              </div>
              <button @click="advanced4Generate" class="btn btn-advanced">合并生成PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// 创建临时容器合并多个元素
const container = document.createElement('div');
const elements = ['element-a', 'element-b', 'element-c'];

elements.forEach(id =&gt; {
  const el = document.getElementById(id);
  const clone = el.cloneNode(true);
  container.appendChild(clone);
});

html2pdf()
  .from(container)
  .set({ pagebreak: { mode: 'css' } })
  .save();</code></pre>
            </div>
          </div>

          <!-- 高级示例5: 避免断裂 -->
          <div v-if="currentAdvanced === 4" class="example-content">
            <h4>5. 避免元素断裂</h4>
            <p>防止重要元素在分页时被截断。</p>
            <div class="demo-box">
              <div id="advanced-content-5" class="preview-box">
                <h3>避免断裂示例</h3>
                <div class="card no-break">
                  <h4>卡片 1</h4>
                  <p>这个卡片不会被分页截断。</p>
                  <p>使用 avoid 类防止断裂。</p>
                </div>
                <div class="card no-break">
                  <h4>卡片 2</h4>
                  <p>即使内容很长，整个卡片也会保持完整。</p>
                  <p>会自动移到下一页。</p>
                </div>
                <div class="card no-break">
                  <h4>卡片 3</h4>
                  <p>表格、图片等重要元素都可以使用此方法。</p>
                  <p>确保内容完整性。</p>
                </div>
              </div>
              <button @click="advanced5Generate" class="btn btn-advanced">生成无断裂PDF</button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// CSS
.no-break {
  page-break-inside: avoid;
  break-inside: avoid;
}

// JavaScript
html2pdf()
  .from(element)
  .set({
    pagebreak: {
      mode: ['avoid-all', 'css'],
      avoid: '.no-break'
    }
  })
  .save();</code></pre>
            </div>
          </div>

          <!-- 高级示例6: Worker模式 -->
          <div v-if="currentAdvanced === 5" class="example-content">
            <h4>6. Worker模式和进度监控</h4>
            <p>使用Worker模式执行异步操作并监控进度。</p>
            <div class="demo-box">
              <div class="progress-display" v-if="isGenerating">
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: progress + '%' }"></div>
                </div>
                <span>{{ progressText }}</span>
              </div>
              <div id="advanced-content-6" class="preview-box">
                <h3>Worker模式测试</h3>
                <p>Worker模式允许更好地控制PDF生成流程。</p>
                <p>可以在生成过程中执行其他操作。</p>
              </div>
              <button @click="advanced6Generate" class="btn btn-advanced" :disabled="isGenerating">
                {{ isGenerating ? '生成中...' : '使用Worker生成' }}
              </button>
            </div>
            <div class="code-display">
              <pre v-pre><code>// Worker模式 - 链式调用
const worker = html2pdf().from(element);

// 转换为Canvas
await worker.toCanvas();
console.log('Canvas完成');

// 转换为Image
await worker.toImg();
console.log('Image完成');

// 转换为PDF
await worker.toPdf();
console.log('PDF完成');

// 获取PDF实例
const pdf = await worker.get('pdf');
console.log('页数:', pdf.internal.getNumberOfPages());

// 保存
await worker.save();</code></pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import html2pdf from 'html2pdf.js'

const currentDate = ref(new Date().toLocaleDateString('zh-CN'))

// ==================== 基础示例状态 ====================
const currentExample = ref(0)

const examples = [
  { name: '基础转换' },
  { name: '配置选项' },
  { name: '图片质量' },
  { name: '页面尺寸' },
  { name: '边距设置' },
  { name: '文件名输出' },
]

// 配置选项
const marginValue = ref(10)
const orientation = ref<'portrait' | 'landscape'>('portrait')
const pageFormat = ref<'a4' | 'a3' | 'letter'>('a4')
const imageType = ref<'jpeg' | 'png' | 'webp'>('jpeg')
const imageQuality = ref(0.98)
const scaleValue = ref(2)
const customWidth = ref(210)
const customHeight = ref(297)
const marginTop = ref(10)
const marginLeft = ref(15)
const marginBottom = ref(10)
const marginRight = ref(15)
const fileName = ref('document')
const outputType = ref<'save' | 'blob' | 'dataurlnewwindow' | 'datauristring'>('save')

// ==================== 高级示例状态 ====================
const currentAdvanced = ref(0)
const advancedExamples = [
  { name: '自动分页' },
  { name: '分页符控制' },
  { name: '页眉页脚' },
  { name: '多元素合并' },
  { name: '避免断裂' },
  { name: 'Worker模式' },
]

const headerText = ref('文档标题')
const footerText = ref('© 2024 版权所有')
const isGenerating = ref(false)
const progress = ref(0)
const progressText = ref('')

// 计算属性
const previewStyle = computed(() => ({
  width: `${customWidth.value * 0.5}px`,
  height: `${customHeight.value * 0.5}px`,
}))

// 通用打印预览函数
const printPdfBlob = (blob: Blob) => {
  const url = URL.createObjectURL(blob)
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  document.body.appendChild(iframe)

  iframe.onload = () => {
    setTimeout(() => {
      try {
        iframe.contentWindow?.print()

        // 监听打印完成事件
        const cleanup = () => {
          setTimeout(() => {
            try {
              document.body.removeChild(iframe)
              URL.revokeObjectURL(url)
            } catch (e) {
              console.error('Cleanup error:', e)
            }
          }, 500)
        }

        // 监听打印对话框关闭
        if (iframe.contentWindow) {
          iframe.contentWindow.addEventListener('afterprint', cleanup, { once: true })
          // 备用超时清理（5分钟）
          setTimeout(cleanup, 300000)
        } else {
          cleanup()
        }
      } catch (e) {
        console.error('Print error:', e)
      }
    }, 200)
  }
}

// ==================== 原有快捷功能 ====================
const simplePDF = () => {
  const element = document.getElementById('pdf-content')
  if (!element) return
  html2pdf()
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

const configuredPDF = () => {
  const element = document.getElementById('pdf-content')
  if (!element) return

  const options = {
    margin: 10,
    filename: 'html2pdf-configured.pdf',
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
  }

  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

const multiPagePDF = () => {
  const element = document.getElementById('pdf-content')
  if (!element) return

  const options = {
    margin: [10, 10, 10, 10] as [number, number, number, number],
    filename: 'html2pdf-multipage.pdf',
    image: { type: 'jpeg' as const, quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
    },
    jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'] as ('avoid-all' | 'css' | 'legacy')[],
      before: '.page-break',
    },
  }

  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

// ==================== 基础示例函数 ====================
const example1Generate = () => {
  const element = document.getElementById('basic-content-1')
  if (!element) return
  html2pdf()
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

const example2Generate = () => {
  const element = document.getElementById('basic-content-2')
  if (!element) return
  const options = {
    margin: marginValue.value,
    filename: 'configured.pdf',
    jsPDF: {
      unit: 'mm' as const,
      format: pageFormat.value,
      orientation: orientation.value,
    },
  }
  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

const example3Generate = () => {
  const element = document.getElementById('basic-content-3')
  if (!element) return
  const options = {
    filename: 'quality.pdf',
    image: {
      type: imageType.value,
      quality: imageQuality.value,
    },
    html2canvas: {
      scale: scaleValue.value,
    },
  }
  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

const example4Generate = () => {
  const element = document.getElementById('basic-content-4')
  if (!element) return
  const options = {
    filename: 'custom-size.pdf',
    jsPDF: {
      unit: 'mm' as const,
      format: [customWidth.value, customHeight.value] as [number, number],
      orientation: 'portrait' as const,
    },
  }
  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

const example5Generate = () => {
  const element = document.getElementById('basic-content-5')
  if (!element) return
  const options = {
    margin: [marginTop.value, marginLeft.value, marginBottom.value, marginRight.value] as [
      number,
      number,
      number,
      number,
    ],
    filename: 'margins.pdf',
  }
  html2pdf()
    .set(options)
    .from(element)
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const blob = pdf.output('blob')
      printPdfBlob(blob)
    })
}

const example6Generate = async () => {
  const element = document.getElementById('basic-content-6')
  if (!element) return
  const fullFileName = `${fileName.value}.pdf`

  if (outputType.value === 'save') {
    html2pdf()
      .from(element)
      .toPdf()
      .get('pdf')
      .then((pdf: any) => {
        const blob = pdf.output('blob')
        printPdfBlob(blob)
      })
  } else if (outputType.value === 'blob') {
    const blob = await html2pdf().from(element).output('blob')
    console.log('Blob:', blob)
    alert(`Blob生成成功！大小: ${(blob.size / 1024).toFixed(2)} KB`)
  } else if (outputType.value === 'dataurlnewwindow') {
    html2pdf().from(element).output('dataurlnewwindow')
  } else if (outputType.value === 'datauristring') {
    const dataUri = await html2pdf().from(element).output('datauristring')
    console.log('DataURI:', dataUri.substring(0, 100) + '...')
    alert('Base64字符串已输出到控制台')
  }
}

// ==================== 高级示例函数 ====================
const advanced1Generate = () => {
  const element = document.getElementById('advanced-content-1')
  if (!element) return
  const options = {
    filename: 'auto-page.pdf',
    jsPDF: { unit: 'mm' as const, format: 'a4' as const },
  }
  html2pdf().set(options).from(element).save()
}

const advanced2Generate = () => {
  const element = document.getElementById('advanced-content-2')
  if (!element) return
  const options = {
    filename: 'page-break.pdf',
    pagebreak: {
      mode: ['css', 'legacy'] as ('css' | 'legacy')[],
      before: '.break-before',
    },
  }
  html2pdf().set(options).from(element).save()
}

const advanced3Generate = async () => {
  const element = document.getElementById('advanced-content-3')
  if (!element) return

  const worker = html2pdf()
    .from(element)
    .set({
      margin: [25, 10, 25, 10] as [number, number, number, number],
      filename: 'header-footer.pdf',
    })
    .toPdf()
    .get('pdf')
    .then((pdf: any) => {
      const pageCount = pdf.internal.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i)
        pdf.setFontSize(10)
        pdf.text(headerText.value, 105, 15, { align: 'center' })
        pdf.text(`${footerText.value} - 第 ${i} 页 / 共 ${pageCount} 页`, 105, 287, {
          align: 'center',
        })
      }
      pdf.save('header-footer.pdf')
    })

  await worker
}

const advanced4Generate = () => {
  // 创建临时容器合并多个元素
  const container = document.createElement('div')
  container.style.padding = '20px'

  const elements = ['element-a', 'element-b', 'element-c']
  elements.forEach((id, index) => {
    const el = document.getElementById(id)
    if (el) {
      const clone = el.cloneNode(true) as HTMLElement
      clone.style.marginBottom = '20px'
      if (index > 0) {
        const separator = document.createElement('hr')
        separator.style.margin = '20px 0'
        container.appendChild(separator)
      }
      container.appendChild(clone)
    }
  })

  html2pdf()
    .from(container)
    .set({
      filename: 'merged.pdf',
      margin: 10,
    })
    .save()
}

const advanced5Generate = () => {
  const element = document.getElementById('advanced-content-5')
  if (!element) return
  const options = {
    filename: 'no-break.pdf',
    pagebreak: {
      mode: ['avoid-all', 'css'] as ('avoid-all' | 'css')[],
      avoid: '.no-break',
    },
  }
  html2pdf().set(options).from(element).save()
}

const advanced6Generate = async () => {
  isGenerating.value = true
  progress.value = 0
  progressText.value = '初始化...'

  try {
    const element = document.getElementById('advanced-content-6')
    if (!element) {
      progressText.value = '元素未找到'
      return
    }
    const worker = html2pdf().from(element)

    progress.value = 20
    progressText.value = '转换为Canvas...'
    await worker.toCanvas()

    progress.value = 40
    progressText.value = '转换为图片...'
    await worker.toImg()

    progress.value = 60
    progressText.value = '生成PDF...'
    await worker.toPdf()

    progress.value = 80
    progressText.value = '获取PDF实例...'
    const pdf = await worker.get('pdf')
    console.log('PDF页数:', pdf.internal.getNumberOfPages())

    progress.value = 100
    progressText.value = '保存文件...'
    await worker.save('worker-mode.pdf')

    progressText.value = '完成！'
  } catch (error) {
    console.error('生成失败:', error)
    progressText.value = '生成失败'
  } finally {
    setTimeout(() => {
      isGenerating.value = false
    }, 1000)
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

.pdf-content {
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.document {
  background: white;
  padding: 2.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.document h1 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.date {
  color: #718096;
  font-style: italic;
  margin-bottom: 2rem;
}

.document section {
  margin-bottom: 2rem;
}

.document h2 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
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

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.feature-box {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
}

.feature-box h3 {
  color: #667eea;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.feature-box p {
  color: #718096;
  font-size: 0.9rem;
  margin: 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
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

.page-break {
  page-break-after: always;
  break-after: page;
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

/* ==================== 基础示例样式 ==================== */
.examples-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f0fff4;
  border-radius: 8px;
  border: 1px solid #9ae6b4;
}

.section-title {
  color: #276749;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.example-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #9ae6b4;
}

.tab-button {
  padding: 0.5rem 1rem;
  border: 1px solid #9ae6b4;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
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
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.example-content h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.example-content > p {
  color: #718096;
  margin-bottom: 1rem;
}

.demo-box {
  margin: 1rem 0;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 6px;
  border: 1px dashed #cbd5e0;
}

.preview-box {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1rem;
}

.preview-box h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.preview-box p {
  color: #4a5568;
  line-height: 1.6;
}

.config-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.config-controls label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: #4a5568;
}

.config-controls input,
.config-controls select {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  min-width: 120px;
}

.code-display {
  margin-top: 1rem;
}

.code-display pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.5;
}

.btn-advanced {
  background: #f56565;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-advanced:hover {
  background: #e53e3e;
}

.btn-advanced:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

/* ==================== 高级示例样式 ==================== */
.advanced-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fff5f5;
  border-radius: 8px;
  border: 1px solid #feb2b2;
}

.advanced-section .section-title {
  color: #c53030;
}

/* 颜色块 */
.color-blocks {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.color-block {
  width: 60px;
  height: 60px;
  border-radius: 4px;
}

/* 边距控制布局 */
.margin-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.margin-row {
  display: flex;
  justify-content: center;
}

.margin-middle {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.margin-preview {
  width: 200px;
  text-align: center;
}

.margin-controls input {
  width: 60px;
  padding: 0.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  text-align: center;
}

/* 长内容预览 */
.long-content {
  max-height: 300px;
  overflow-y: auto;
}

/* 分页标记 */
.page-section {
  padding: 1rem;
  background: #f7fafc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.page-break-marker {
  text-align: center;
  color: #a0aec0;
  padding: 0.5rem;
  border: 1px dashed #cbd5e0;
  margin: 0.5rem 0;
  font-size: 0.8rem;
}

.break-before {
  page-break-before: always;
  break-before: page;
}

/* PDF页眉页脚预览 */
.pdf-header {
  text-align: center;
  padding: 0.5rem;
  background: #e2e8f0;
  margin-bottom: 1rem;
  font-weight: 500;
}

.pdf-body {
  padding: 1rem;
  min-height: 100px;
}

.pdf-footer {
  text-align: center;
  padding: 0.5rem;
  background: #e2e8f0;
  margin-top: 1rem;
  font-size: 0.9rem;
}

/* 多元素布局 */
.multi-elements {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.element-box {
  text-align: center;
}

.element-box h4 {
  color: #667eea;
}

/* 卡片样式 */
.card {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  border-left: 4px solid #667eea;
}

.card h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.no-break {
  page-break-inside: avoid;
  break-inside: avoid;
}

/* 进度条 */
.progress-display {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f0fff4;
  border-radius: 6px;
}

.progress-bar {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #48bb78, #38a169);
  transition: width 0.3s ease;
}

.progress-display span {
  font-size: 0.9rem;
  color: #4a5568;
}
</style>
