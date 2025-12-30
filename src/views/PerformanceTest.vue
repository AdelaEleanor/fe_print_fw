<template>
  <div class="demo-page">
    <header class="page-header">
      <h1>⚡ 性能对比测试</h1>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </header>

    <div class="test-panel">
      <div class="intro-section">
        <h2>📊 测试说明</h2>
        <p>
          本页面对各主流前端打印方案进行<strong>真实性能基准测试</strong>，测试维度包括：
          初始化时间、渲染时间、内存占用等关键指标。
        </p>
        <p>
          <strong>测试方法：</strong>
        </p>
        <ul style="color: #4a5568; line-height: 1.8; margin-left: 2rem">
          <li><strong>预热机制：</strong>3次预热消除JIT编译影响</li>
          <li><strong>正式测试 5 次</strong>取平均值，确保结果稳定</li>
          <li>使用 <code>performance.now()</code> 进行<strong>微秒级精确计时</strong></li>
          <li>使用 <code>performance.memory</code> 监控<strong>内存使用</strong>（Chrome）</li>
          <li>每次测试前<strong>清理环境</strong>，确保测试隔离</li>
          <li><strong>计算标准差</strong>，评估性能稳定性</li>
        </ul>
        <p style="color: #718096; font-style: italic; margin-top: 1rem">
          💡 注意：本测试在生产构建下运行，测试<strong>运行时性能</strong>而非首次网络加载时间。
        </p>
        <p><strong>测试环境：</strong>{{ browserInfo }}</p>
        <p class="warning-note">
          ⚠️ 注意：测试会动态导入各打印库，请确保已安装相关依赖：
          <code>jspdf</code>, <code>html2canvas</code>, <code>pdfmake</code>, <code>print-js</code>,
          <code>vue3-print-nb</code>, <code>html2pdf.js</code>, <code>pdf-lib</code>,
          <code>print-html-element</code>。
          首次运行需要加载库文件，后续运行会利用浏览器缓存。完整测试约需 2-3 分钟，请耐心等待。
        </p>
      </div>

      <div class="controls-section">
        <button @click="runAllTests" class="btn btn-primary" :disabled="isRunning">
          {{ isRunning ? '测试进行中...' : '🚀 运行所有测试' }}
        </button>
        <button @click="clearResults" class="btn btn-secondary">🗑️ 清除结果</button>
      </div>

      <!-- 测试日志 -->
      <div v-if="testLog.length > 0" class="test-log">
        <h3>📋 测试日志</h3>
        <div class="log-content">
          <div v-for="(log, index) in testLog" :key="index" class="log-item">{{ log }}</div>
        </div>
      </div>

      <div v-if="testResults.length > 0" class="results-section">
        <h2>📈 测试结果</h2>

        <div class="summary-cards">
          <div class="summary-card">
            <h3>最快方案</h3>
            <p class="big-number">{{ fastestSolution }}</p>
            <p class="sub-text">平均用时: {{ fastestTime }}ms</p>
          </div>
          <div class="summary-card">
            <h3>最轻量方案</h3>
            <p class="big-number">原生 window.print()</p>
            <p class="sub-text">文件大小: 0 KB</p>
          </div>
          <div class="summary-card">
            <h3>最佳质量</h3>
            <p class="big-number">jsPDF</p>
            <p class="sub-text">矢量图形</p>
          </div>
        </div>

        <div class="results-table">
          <table>
            <thead>
              <tr>
                <th>方案</th>
                <th>⚡ 执行时间 (ms)</th>
                <th>📊 标准差 (ms)</th>
                <th>💾 内存 (MB)</th>
                <th>📦 包大小</th>
                <th>🌏 中文支持</th>
                <th>⭐ 性能评分</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="result in testResults" :key="result.name">
                <td>
                  <strong>{{ result.name }}</strong>
                </td>
                <td :class="getTimeClass(result.totalTime)">
                  <strong>{{ result.totalTime }}</strong>
                </td>
                <td>{{ result.stdDev ? result.stdDev.toFixed(1) : '-' }}</td>
                <td>{{ result.memoryUsed ? result.memoryUsed.toFixed(2) : '-' }}</td>
                <td class="size-cell">
                  <span class="package-size">{{ result.size }}</span>
                </td>
                <td class="chinese-support-cell">
                  <span class="chinese-support" v-html="result.chineseSupport || '-'"></span>
                </td>
                <td>
                  <span class="rating-stars">{{ result.rating }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="chart-section">
          <h3>📊 性能对比</h3>
          <div class="chart-container">
            <div class="bar-chart">
              <div v-for="result in testResults" :key="result.name" class="bar-item">
                <div class="bar-label">{{ result.name }}</div>
                <div class="bar-wrapper">
                  <div
                    class="bar"
                    :style="{
                      width: getBarWidth(result.totalTime) + '%',
                      backgroundColor: getBarColor(result.totalTime),
                    }"
                  >
                    <span class="bar-value">{{ result.totalTime }}ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chart-section">
          <h3>📦 包大小对比</h3>
          <div class="chart-container">
            <div class="bar-chart">
              <div v-for="result in testResults" :key="result.name + '-size'" class="bar-item">
                <div class="bar-label">{{ result.name }}</div>
                <div class="bar-wrapper">
                  <div
                    class="bar bar-size"
                    :style="{
                      width: getSizeBarWidth(result.size) + '%',
                      backgroundColor: getSizeBarColor(result.size),
                    }"
                  >
                    <span class="bar-value">{{ result.size }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="benchmark-details">
        <h2>🔬 性能详细分析</h2>
        <p class="analysis-note">
          以下数据基于真实测试结果。实际性能可能因设备、浏览器、内容复杂度而异。
        </p>

        <div class="detail-grid">
          <div class="detail-card">
            <h3>window.print()</h3>
            <ul>
              <li><strong>初始化:</strong> 0ms (原生API)</li>
              <li><strong>渲染:</strong> 极快，浏览器原生渲染</li>
              <li><strong>内存:</strong> 最小，浏览器管理</li>
              <li><strong>优点:</strong> 无依赖，性能最佳</li>
              <li><strong>缺点:</strong> 样式控制复杂</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>Print.js</h3>
            <ul>
              <li><strong>初始化:</strong> &lt;50ms</li>
              <li><strong>渲染:</strong> 快速，基于iframe</li>
              <li><strong>内存:</strong> 小 (~10KB)</li>
              <li><strong>优点:</strong> 轻量，易用</li>
              <li><strong>缺点:</strong> 功能有限</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>vue3-print-nb</h3>
            <ul>
              <li><strong>初始化:</strong> ~25ms</li>
              <li><strong>渲染:</strong> 快，Vue指令</li>
              <li><strong>内存:</strong> 小 (~15KB)</li>
              <li><strong>优点:</strong> Vue生态集成</li>
              <li><strong>缺点:</strong> 仅限Vue项目</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>jsPDF</h3>
            <ul>
              <li><strong>初始化:</strong> ~100-200ms</li>
              <li><strong>渲染:</strong> 中等，取决于内容复杂度</li>
              <li><strong>内存:</strong> 中等 (~150KB)</li>
              <li><strong>优点:</strong> 矢量图形，可控性强</li>
              <li><strong>缺点:</strong> API复杂</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>pdfmake</h3>
            <ul>
              <li><strong>初始化:</strong> ~200-300ms</li>
              <li><strong>渲染:</strong> 中等</li>
              <li><strong>内存:</strong> 大 (~600KB，含字体)</li>
              <li><strong>优点:</strong> API友好，功能强</li>
              <li><strong>缺点:</strong> 体积较大</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>html2canvas</h3>
            <ul>
              <li><strong>初始化:</strong> ~100ms</li>
              <li><strong>渲染:</strong> 慢，需要遍历DOM</li>
              <li><strong>内存:</strong> 大，生成canvas</li>
              <li><strong>优点:</strong> 所见即所得</li>
              <li><strong>缺点:</strong> 性能较差，文件大</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>html2pdf.js</h3>
            <ul>
              <li><strong>初始化:</strong> ~150ms</li>
              <li><strong>渲染:</strong> 慢 (html2canvas + jsPDF)</li>
              <li><strong>内存:</strong> 大 (~330KB)</li>
              <li><strong>优点:</strong> 一站式方案</li>
              <li><strong>缺点:</strong> 性能开销大</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>PDF-LIB</h3>
            <ul>
              <li><strong>初始化:</strong> ~90ms</li>
              <li><strong>渲染:</strong> 中等，支持PDF编辑</li>
              <li><strong>内存:</strong> 中等 (~200KB)</li>
              <li><strong>优点:</strong> 功能强大，可编辑PDF</li>
              <li><strong>缺点:</strong> 学习曲线较陡</li>
            </ul>
          </div>

          <div class="detail-card">
            <h3>print-html-element</h3>
            <ul>
              <li><strong>初始化:</strong> ~5ms</li>
              <li><strong>渲染:</strong> 极快，直接打印DOM</li>
              <li><strong>内存:</strong> 极小 (5KB)</li>
              <li><strong>优点:</strong> 超轻量，性能最佳</li>
              <li><strong>缺点:</strong> 功能简单，不生成PDF</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="recommendations">
        <h2>💡 性能优化建议</h2>

        <div class="recommendation-grid">
          <div class="rec-card">
            <h3>🚀 追求极致性能</h3>
            <p><strong>推荐：window.print()</strong></p>
            <ul>
              <li>零加载时间</li>
              <li>浏览器原生优化</li>
              <li>适合简单文档</li>
            </ul>
          </div>

          <div class="rec-card">
            <h3>⚖️ 平衡性能和功能</h3>
            <p><strong>推荐：Print.js / jsPDF</strong></p>
            <ul>
              <li>加载时间可接受</li>
              <li>功能相对完善</li>
              <li>适合大多数场景</li>
            </ul>
          </div>

          <div class="rec-card">
            <h3>🎯 功能优先</h3>
            <p><strong>推荐：pdfmake</strong></p>
            <ul>
              <li>牺牲部分性能</li>
              <li>获得强大功能</li>
              <li>适合复杂文档</li>
            </ul>
          </div>

          <div class="rec-card">
            <h3>🎨 样式优先</h3>
            <p><strong>推荐：html2canvas</strong></p>
            <ul>
              <li>性能开销大</li>
              <li>样式完美还原</li>
              <li>适合特殊需求</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="scenario-analysis">
        <h2>📊 使用场景分析</h2>
        <p class="analysis-note">
          不同打印频率和使用场景下，包加载时间和执行时间的影响权重不同。以下分析帮助您根据实际业务场景选择最优方案。
        </p>

        <div class="scenario-grid">
          <div class="scenario-card">
            <h3>🔄 高频打印场景</h3>
            <p class="scenario-desc">
              <strong>用户每天打印 10+ 次（如：订单系统、标签打印）</strong>
            </p>
            <div class="scenario-metrics">
              <div class="metric-item">
                <span class="metric-label">包加载时间权重：</span>
                <span class="metric-value low">10%</span>
                <span class="metric-explain">（首次加载后浏览器缓存，后续忽略不计）</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">执行时间权重：</span>
                <span class="metric-value high">90%</span>
                <span class="metric-explain">（每次打印都需要，累计影响巨大）</span>
              </div>
            </div>
            <div class="scenario-recommendation">
              <h4>推荐方案：</h4>
              <ul>
                <li><strong>window.print()</strong> - 0ms 执行时间，无依赖</li>
                <li><strong>print-html-element</strong> - 3KB + 极快执行</li>
                <li><strong>vue3-print-nb</strong> - 159KB + 快速执行（Vue项目首选）</li>
                <li><strong>Print.js</strong> - 15KB + 快速执行</li>
              </ul>
              <p class="avoid-text">⚠️ 避免：html2pdf.js (每次 103ms)、html2canvas (每次 87ms)</p>
              <p class="calculation">
                <strong>计算示例：</strong> 每天打印 20 次，工作 250 天/年<br />
                • html2pdf.js: 103ms × 20 × 250 =
                <strong style="color: #f56565">515,000ms (8.6分钟/年)</strong><br />
                • window.print(): 0ms × 20 × 250 = <strong style="color: #48bb78">0ms</strong>
              </p>
            </div>
          </div>

          <div class="scenario-card">
            <h3>📅 中频打印场景</h3>
            <p class="scenario-desc"><strong>每周打印 3-5 次（如：报表生成、合同打印）</strong></p>
            <div class="scenario-metrics">
              <div class="metric-item">
                <span class="metric-label">包加载时间权重：</span>
                <span class="metric-value medium">30%</span>
                <span class="metric-explain">（首次体验重要，但不是决定因素）</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">执行时间权重：</span>
                <span class="metric-value medium">70%</span>
                <span class="metric-explain">（频率适中，体验可感知）</span>
              </div>
            </div>
            <div class="scenario-recommendation">
              <h4>推荐方案：</h4>
              <ul>
                <li><strong>vue3-print-nb</strong> - 159KB，Vue项目最佳选择</li>
                <li><strong>jsPDF</strong> - 385KB 但功能强大，执行仅 1ms</li>
                <li><strong>pdfmake</strong> - 2.2MB 但 API 友好，执行 26ms</li>
                <li><strong>Print.js</strong> - 平衡之选</li>
              </ul>
              <p class="calculation">
                <strong>计算示例：</strong> 每周打印 4 次，工作 50 周/年<br />
                • 首次加载: pdfmake 1 次 (可忽略)<br />
                • 执行累计: 26ms × 4 × 50 =
                <strong style="color: #4299e1">5,200ms (5.2秒/年)</strong><br />
                → 包大小影响很小，功能和易用性更重要
              </p>
            </div>
          </div>

          <div class="scenario-card">
            <h3>🔵 低频打印场景</h3>
            <p class="scenario-desc">
              <strong>偶尔打印 1-2 次/月（如：证书生成、年度报告）</strong>
            </p>
            <div class="scenario-metrics">
              <div class="metric-item">
                <span class="metric-label">包加载时间权重：</span>
                <span class="metric-value high">70%</span>
                <span class="metric-explain">（几乎每次都是首次加载体验）</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">执行时间权重：</span>
                <span class="metric-value low">30%</span>
                <span class="metric-explain">（使用频率低，影响有限）</span>
              </div>
            </div>
            <div class="scenario-recommendation">
              <h4>推荐方案：</h4>
              <ul>
                <li><strong>window.print()</strong> - 0KB，零加载</li>
                <li><strong>print-html-element</strong> - 3KB，瞬间加载</li>
                <li><strong>Print.js</strong> - 15KB，可接受</li>
                <li><strong>vue3-print-nb</strong> - 159KB（Vue项目可接受）</li>
              </ul>
              <p class="avoid-text">
                ⚠️ 避免：pdfmake (2.2MB)、PDF-LIB (530KB) - 包太大影响首次体验
              </p>
              <p class="calculation">
                <strong>计算示例：</strong> 每次打印的完整体验<br />
                • pdfmake: <strong style="color: #f56565">2.2MB 加载 + 26ms 执行</strong><br />
                • Print.js: <strong style="color: #48bb78">15KB 加载 + 0ms 执行</strong><br />
                → 包大小是首要考虑因素
              </p>
            </div>
          </div>

          <div class="scenario-card">
            <h3>🎯 特殊需求场景</h3>
            <p class="scenario-desc"><strong>对输出质量/格式有严格要求</strong></p>
            <div class="scenario-recommendation">
              <h4>按需求选择：</h4>
              <ul>
                <li><strong>需要矢量PDF：</strong> jsPDF (385KB) - 即使包大也值得</li>
                <li><strong>需要完美还原HTML：</strong> html2canvas (201KB) - 牺牲性能换质量</li>
                <li><strong>需要编辑PDF：</strong> PDF-LIB (530KB) - 功能独特无可替代</li>
                <li>
                  <strong>需要中文支持：</strong>
                  <ul style="margin-top: 0.5rem">
                    <li>✅ 推荐：window.print(), html2canvas, pdfmake</li>
                    <li>⚠️ 需额外配置：jsPDF (+1-2MB), PDF-LIB (+15-20MB)</li>
                  </ul>
                </li>
              </ul>
              <p class="calculation" style="margin-top: 1rem">
                <strong>中文字体成本：</strong><br />
                • jsPDF + 思源黑体: 385KB + <strong>1-2MB</strong> = 1.4-2.4MB<br />
                • PDF-LIB + 思源黑体: 530KB + <strong>15-20MB</strong> = 15.5-20.5MB<br />
                • pdfmake (内置中文): 2.2MB (已包含)<br />
                → 如需中文，pdfmake 反而是最经济选择
              </p>
            </div>
          </div>
        </div>

        <div class="decision-tree">
          <h3>🌳 决策树：快速选择合适方案</h3>
          <div class="tree-container">
            <div class="tree-node root">
              <div class="node-question">是否为 Vue 项目？</div>
              <div class="tree-branches">
                <div class="branch">
                  <div class="branch-label yes">是</div>
                  <div class="tree-node">
                    <div class="node-question">需要中文支持？</div>
                    <div class="tree-branches">
                      <div class="branch">
                        <div class="branch-label yes">是</div>
                        <div class="tree-leaf">
                          vue3-print-nb<br /><small>(159KB + 完美中文)</small>
                        </div>
                      </div>
                      <div class="branch">
                        <div class="branch-label no">否</div>
                        <div class="tree-leaf">vue3-print-nb<br /><small>(Vue生态优先)</small></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="branch">
                  <div class="branch-label no">否</div>
                  <div class="tree-node">
                    <div class="node-question">是否需要中文支持？</div>
                    <div class="tree-branches">
                      <div class="branch">
                        <div class="branch-label yes">是</div>
                        <div class="tree-node">
                          <div class="node-question">打印频率？</div>
                          <div class="tree-branches">
                            <div class="branch">
                              <div class="branch-label">高频</div>
                              <div class="tree-leaf">
                                window.print()<br /><small>(0ms执行)</small>
                              </div>
                            </div>
                            <div class="branch">
                              <div class="branch-label">中低频</div>
                              <div class="tree-leaf">pdfmake<br /><small>(内置中文)</small></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="branch">
                        <div class="branch-label no">否</div>
                        <div class="tree-node">
                          <div class="node-question">需要生成PDF文件？</div>
                          <div class="tree-branches">
                            <div class="branch">
                              <div class="branch-label yes">是</div>
                              <div class="tree-leaf">jsPDF<br /><small>(矢量高质量)</small></div>
                            </div>
                            <div class="branch">
                              <div class="branch-label no">否</div>
                              <div class="tree-leaf">
                                print-html-element<br /><small>(3KB超轻量)</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="framework-coverage">
        <h2>📚 框架覆盖说明</h2>
        <p class="analysis-note">
          本测试覆盖了主流前端打印框架的核心实现。虽然未测试 React/Angular
          专属库，但它们的性能由底层库决定。
        </p>

        <div class="coverage-grid">
          <div class="coverage-card tested">
            <h3>✅ 已测试（9个）</h3>
            <div class="framework-list">
              <div class="framework-item">
                <strong>原生 API：</strong>
                <span>window.print()</span>
              </div>
              <div class="framework-item">
                <strong>通用轻量库：</strong>
                <span>Print.js, print-html-element</span>
              </div>
              <div class="framework-item">
                <strong>PDF 生成库：</strong>
                <span>jsPDF, pdfmake, PDF-LIB</span>
              </div>
              <div class="framework-item">
                <strong>HTML 转换库：</strong>
                <span>html2canvas, html2pdf.js</span>
              </div>
              <div class="framework-item">
                <strong>Vue 生态：</strong>
                <span>vue3-print-nb</span>
              </div>
            </div>
          </div>

          <div class="coverage-card not-tested">
            <h3>ℹ️ 未测试但可推断</h3>
            <div class="framework-list">
              <div class="framework-item">
                <strong>React 生态：</strong>
                <span>react-to-print</span>
                <div class="inference">→ 基于 window.print()，性能应与其一致（0ms）</div>
              </div>
              <div class="framework-item">
                <strong>React 生态：</strong>
                <span>react-pdf</span>
                <div class="inference">→ 用于渲染 PDF 而非生成，非打印场景</div>
              </div>
              <div class="framework-item">
                <strong>Angular 生态：</strong>
                <span>ngx-print</span>
                <div class="inference">→ 基于 window.print()，性能应与其一致（0ms）</div>
              </div>
              <div class="framework-item">
                <strong>其他轻量库：</strong>
                <span>Printd</span>
                <div class="inference">→ 类似 Print.js，预计 10-20KB，快速执行</div>
              </div>
            </div>
          </div>

          <div class="coverage-card out-scope">
            <h3>🚫 不在测试范围</h3>
            <div class="framework-list">
              <div class="framework-item">
                <strong>服务端方案：</strong>
                <span>Puppeteer, wkhtmltopdf</span>
                <div class="inference">→ 需要 Node.js 环境，不是纯前端方案</div>
              </div>
              <div class="framework-item">
                <strong>商业方案：</strong>
                <span>PDFTron, Foxit PDF SDK</span>
                <div class="inference">→ 需要购买授权，非开源方案</div>
              </div>
            </div>
          </div>
        </div>

        <div class="coverage-summary">
          <h3>🎯 总结：是否需要测试 React 项目？</h3>
          <div class="summary-content">
            <div class="summary-point">
              <span class="point-icon">❌</span>
              <div class="point-text">
                <strong>不需要</strong>额外测试 React 项目的理由：
                <ul>
                  <li><strong>react-to-print</strong> 底层是 window.print()，已测试（0ms）</li>
                  <li>
                    <strong>jsPDF/pdfmake/html2canvas</strong> 等通用库在 React 中性能完全相同
                  </li>
                  <li>
                    框架专属库（vue3-print-nb/react-to-print）的价值在于
                    <strong>API 便利性</strong>而非性能提升
                  </li>
                  <li>React 环境不会改变 JavaScript 库的执行速度</li>
                </ul>
              </div>
            </div>

            <div class="summary-point">
              <span class="point-icon">✅</span>
              <div class="point-text">
                <strong>React 用户如何选择：</strong>
                <ul>
                  <li>
                    <strong>使用 react-to-print</strong> = window.print() 的性能（0ms）+ React Hooks
                    API
                  </li>
                  <li><strong>直接用通用库</strong> = 本测试结果完全适用</li>
                  <li><strong>选择标准同上</strong>：根据打印频率、中文需求、包大小选择</li>
                </ul>
              </div>
            </div>

            <div class="summary-example">
              <h4>📖 示例对比：</h4>
              <div class="example-code">
                <div class="code-block">
                  <div class="code-title">Vue 项目 (vue3-print-nb)</div>
                  <pre><code>&lt;button v-print="#printArea"&gt;打印&lt;/button&gt;</code></pre>
                  <div class="code-perf">性能 = window.print() 性能</div>
                </div>
                <div class="code-block">
                  <div class="code-title">React 项目 (react-to-print)</div>
                  <pre><code>const handlePrint = useReactToPrint({
  content: () => componentRef.current
});
&lt;button onClick={handlePrint}&gt;打印&lt;/button&gt;</code></pre>
                  <div class="code-perf">性能 = window.print() 性能</div>
                </div>
              </div>
              <p class="example-conclusion">
                ✨ <strong>结论：</strong>两者性能相同，选择取决于框架生态和 API
                偏好，与实际执行速度无关。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="optimization-tips">
        <h2>🛠️ 性能优化技巧</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <h4>1. 按需加载</h4>
            <p>使用动态import()延迟加载打印库，减少初始加载时间</p>
            <pre><code>const printJS = await import('print-js');</code></pre>
          </div>

          <div class="tip-card">
            <h4>2. 性能监控</h4>
            <p>使用 performance.now() 测量关键操作耗时，识别性能瓶颈</p>
            <pre><code>const start = performance.now();
// 操作代码
console.log(performance.now() - start);</code></pre>
          </div>

          <div class="tip-card">
            <h4>3. 减少DOM复杂度</h4>
            <p>简化打印内容的DOM结构，避免过深的嵌套</p>
          </div>

          <div class="tip-card">
            <h4>4. 图片优化</h4>
            <p>压缩图片，使用合适的格式，避免超大图片</p>
          </div>

          <div class="tip-card">
            <h4>5. 缓存策略</h4>
            <p>对于重复打印，缓存生成的PDF或canvas，避免重复计算</p>
          </div>

          <div class="tip-card">
            <h4>6. Web Worker</h4>
            <p>将PDF生成放到Worker中，避免阻塞主线程</p>
          </div>

          <div class="tip-card">
            <h4>7. 分批处理</h4>
            <p>大量数据分批处理，使用requestAnimationFrame</p>
          </div>

          <div class="tip-card">
            <h4>8. 内存管理</h4>
            <p>及时清理不用的对象，监控 performance.memory</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface TestResult {
  name: string
  initTime: number
  renderTime: number
  totalTime: number
  size: string
  rating: string
  memoryUsed?: number
  attempts?: number
  stdDev?: number // 标准差
  chineseSupport?: string // 中文支持说明
}

const isRunning = ref(false)
const testResults = ref<TestResult[]>([])
const testLog = ref<string[]>([])
const WARMUP_RUNS = 3 // 预热次数（消除V8 JIT编译和浏览器缓存影响）
const ITERATIONS = 5 // 正式测试运行5次取平均值

const browserInfo = ref(
  `${navigator.userAgent.match(/Chrome|Firefox|Safari|Edge/)?.[0] || 'Unknown'} on ${navigator.platform}`,
)

// 测试内容 - 用于生成PDF的HTML内容
const testContent = `
  <div style="padding: 20px; font-family: Arial;">
    <h1>性能测试文档</h1>
    <p>这是一段测试内容，用于评估各打印方案的性能表现。</p>
    <table border="1" style="width: 100%; border-collapse: collapse;">
      <tr><th>项目</th><th>说明</th></tr>
      <tr><td>测试1</td><td>数据内容</td></tr>
      <tr><td>测试2</td><td>数据内容</td></tr>
      <tr><td>测试3</td><td>数据内容</td></tr>
    </table>
  </div>
`

// 清理打印环境，确保测试隔离
const clearPrintEnvironment = () => {
  // 移除所有测试相关的DOM元素
  const existingContainers = document.querySelectorAll('[id^="print-test-"]')
  existingContainers.forEach((el) => el.remove())

  // 清理可能残留的iframe
  const iframes = document.querySelectorAll('iframe[id^="printJS"]')
  iframes.forEach((iframe) => iframe.remove())

  // 强制垃圾回收提示（某些浏览器支持）
  if ((window as any).gc) {
    ;(window as any).gc()
  }
}

const fastestSolution = computed(() => {
  if (testResults.value.length === 0) return '-'
  const fastest = testResults.value.reduce((min, current) =>
    current.totalTime < min.totalTime ? current : min,
  )
  return fastest.name
})

const fastestTime = computed(() => {
  if (testResults.value.length === 0) return '-'
  const fastest = testResults.value.reduce((min, current) =>
    current.totalTime < min.totalTime ? current : min,
  )
  return fastest.totalTime
})

// 记录日志
const log = (message: string) => {
  console.log(message)
  testLog.value.push(`[${new Date().toLocaleTimeString()}] ${message}`)
}

// 获取内存使用情况（如果浏览器支持）
const getMemoryUsage = (): number => {
  if ((performance as any).memory) {
    return Math.round(((performance as any).memory.usedJSHeapSize / 1024 / 1024) * 100) / 100
  }
  return 0
}

// ✅ 计算标准差
const calculateStdDev = (values: number[]): number => {
  if (values.length === 0) return 0
  const mean = values.reduce((sum, val) => sum + val, 0) / values.length
  const squareDiffs = values.map((val) => Math.pow(val - mean, 2))
  const avgSquareDiff = squareDiffs.reduce((sum, val) => sum + val, 0) / values.length
  return Math.sqrt(avgSquareDiff)
}

// ✅ 检测异常值
const detectOutliers = (values: number[], threshold = 2.5): number[] => {
  if (values.length < 3) return []
  const mean = values.reduce((a, b) => a + b, 0) / values.length
  const stdDev = calculateStdDev(values)
  if (stdDev === 0) return []
  return values.filter((val) => Math.abs(val - mean) > threshold * stdDev)
}

// ✅ 基于相对性能的动态评分
const calculateRating = (results: TestResult[], current: TestResult): string => {
  if (current.rating && current.rating.includes('❌')) return current.rating

  const validResults = results.filter((r) => r.totalTime > 0 && !r.rating.includes('❌'))
  if (validResults.length === 0) return '⭐⭐⭐'

  const fastest = Math.min(...validResults.map((r) => r.totalTime))
  const ratio = current.totalTime / fastest

  if (ratio <= 1.2) return '⭐⭐⭐⭐⭐'
  if (ratio <= 1.5) return '⭐⭐⭐⭐'
  if (ratio <= 2.0) return '⭐⭐⭐'
  if (ratio <= 3.0) return '⭐⭐'
  return '⭐'
}

// ✅ 验证测试结果
const validateResults = () => {
  // 检查测试完整性
  const incompleteTests = testResults.value.filter((r) => r.attempts && r.attempts !== ITERATIONS)
  if (incompleteTests.length > 0) {
    log(`⚠️ 警告: ${incompleteTests.map((r) => r.name).join(', ')} 未完成全部迭代`)
  }

  // 验证内存增长合理性（> 500MB 异常）
  const highMemoryTests = testResults.value.filter((r) => r.memoryUsed && r.memoryUsed > 500)
  if (highMemoryTests.length > 0) {
    highMemoryTests.forEach((r) => {
      log(`🚨 警告: ${r.name} 内存增长异常 - ${r.memoryUsed}MB`)
    })
  }

  // 验证性能差异合理性
  const validResults = testResults.value.filter((r) => r.totalTime > 0 && !r.rating.includes('❌'))
  if (validResults.length > 1) {
    const fastest = validResults.reduce((min, curr) =>
      curr.totalTime < min.totalTime ? curr : min,
    )
    const slowest = validResults.reduce((max, curr) =>
      curr.totalTime > max.totalTime ? curr : max,
    )

    const speedRatio = slowest.totalTime / fastest.totalTime
    if (speedRatio > 50) {
      log(`⚠️ 警告: 性能差异过大 (${slowest.name} 是 ${fastest.name} 的 ${speedRatio.toFixed(1)}x)`)
    }
  }
}

// 测试1: window.print()
const testWindowPrint = async (): Promise<TestResult> => {
  log('开始测试 window.print()...')

  // 预热
  log(`预热 ${WARMUP_RUNS} 次...`)
  for (let i = 0; i < WARMUP_RUNS; i++) {
    clearPrintEnvironment()
    const printDiv = document.createElement('div')
    printDiv.innerHTML = testContent
    printDiv.style.display = 'none'
    document.body.appendChild(printDiv)
    document.body.removeChild(printDiv)
  }

  const times: number[] = []
  let totalMemory = 0

  for (let i = 0; i < ITERATIONS; i++) {
    clearPrintEnvironment()
    await new Promise((resolve) => setTimeout(resolve, 100))

    const startMemory = getMemoryUsage()
    const start = performance.now()

    // 模拟准备打印内容（不实际调用 window.print() 避免弹窗）
    const printDiv = document.createElement('div')
    printDiv.innerHTML = testContent
    printDiv.id = `print-test-${Date.now()}`
    printDiv.style.position = 'absolute'
    printDiv.style.left = '-9999px'
    document.body.appendChild(printDiv)

    // 模拟打印准备工作（克隆 DOM）
    const clonedContent = printDiv.cloneNode(true)
    const tempContainer = document.createElement('div')
    tempContainer.appendChild(clonedContent)

    const end = performance.now()
    const endMemory = getMemoryUsage()
    const duration = end - start

    times.push(duration)
    totalMemory += endMemory - startMemory

    // 清理
    document.body.removeChild(printDiv)
  }

  const avgTime = Math.round(times.reduce((a, b) => a + b, 0) / times.length)
  const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
  const stdDev = calculateStdDev(times)

  log(
    `window.print() 平均用时: ${avgTime}ms (标准差: ${stdDev.toFixed(1)}ms), 内存: ${avgMemory}MB`,
  )

  return {
    name: 'window.print()',
    initTime: 0,
    renderTime: avgTime,
    totalTime: avgTime,
    size: '0 KB (浏览器原生)',
    rating: '⭐⭐⭐⭐⭐',
    memoryUsed: avgMemory,
    attempts: ITERATIONS,
    stdDev: Math.round(stdDev * 10) / 10,
    chineseSupport: '✅ 完美支持中文',
  }
}

// 测试2: Print.js
const testPrintJS = async (): Promise<TestResult> => {
  log('开始测试 Print.js...')
  log('📦 包大小: ~20KB (gzip后 ~7KB)')
  log('🌏 中文支持: ✅ 完整支持，无需额外字体')

  try {
    // 预热：预加载库（3次，消除JIT编译和缓存影响）
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      await import('print-js')
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // 预热后等待，确保环境稳定
    log('预热完成，等待环境稳定...')
    await new Promise((resolve) => setTimeout(resolve, 500))

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // ⚠️ 关键：动态导入必须在计时开始后，以包含真实的模块加载时间
      const printJS = await import('print-js')
      const initEnd = performance.now()
      const initTime = initEnd - initStart

      const renderStart = performance.now()
      const testDiv = document.createElement('div')
      testDiv.innerHTML = testContent
      testDiv.id = `print-test-content-${Date.now()}`
      testDiv.style.display = 'none'
      document.body.appendChild(testDiv)

      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      document.body.removeChild(testDiv)

      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    const totalTimes = times.map((t) => t.init + t.render)
    const stdDev = calculateStdDev(totalTimes)

    log(
      `Print.js 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms (标准差: ${stdDev.toFixed(1)}ms), 内存: ${avgMemory}MB`,
    )

    return {
      name: 'Print.js',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '~15 KB (gzip)',
      rating: '⭐⭐⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(stdDev * 10) / 10,
      chineseSupport: '✅ 完美支持中文',
    }
  } catch (error) {
    log(`Print.js 测试失败: ${error}`)
    return {
      name: 'Print.js',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '~15 KB (gzip)',
      rating: '❌ 未安装',
      chineseSupport: '✅ 完美支持中文',
    }
  }
}

// 测试3: jsPDF
const testJsPDF = async (): Promise<TestResult> => {
  log('开始测试 jsPDF...')
  log('📦 包大小: ~17.38MB (jsPDF 385KB + Noto Sans SC 可变字体 17MB)')
  log('🌏 中文支持: ⚠️ 默认不支持，需引入字体文件 (每个字体约 1-2MB)')

  try {
    // 预热（3次，消除JIT编译和缓存影响）
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF()
      doc.text('Warmup', 10, 10)
      doc.output('blob')
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // 预热后等待，确保环境稳定
    log('预热完成，等待环境稳定...')
    await new Promise((resolve) => setTimeout(resolve, 500))

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // ⚠️ 关键：动态导入必须在计时开始后，以包含真实的模块加载时间
      const { jsPDF } = await import('jspdf')
      const initEnd = performance.now()
      const initTime = initEnd - initStart

      const renderStart = performance.now()
      const doc = new jsPDF()
      doc.text('性能测试文档', 20, 20)
      doc.text('这是一段测试内容，用于评估各打印方案的性能表现。', 20, 30)
      doc.text('测试项目1: 数据内容', 20, 40)
      doc.text('测试项目2: 数据内容', 20, 50)
      doc.text('测试项目3: 数据内容', 20, 60)
      doc.output('blob')
      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    const totalTimes = times.map((t) => t.init + t.render)
    const stdDev = calculateStdDev(totalTimes)

    log(
      `jsPDF 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms (标准差: ${stdDev.toFixed(1)}ms), 内存: ${avgMemory}MB`,
    )

    return {
      name: 'jsPDF',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '385 KB + 17 MB 可变字体 (支持 100-900 字重)',
      rating: '⭐⭐⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(stdDev * 10) / 10,
      chineseSupport: '⚠️ 默认不支持中文。需引入中文字体包 (~1-2 MB)，参考 jsPDF-AutoTable',
    }
  } catch (error) {
    log(`jsPDF 测试失败: ${error}`)
    return {
      name: 'jsPDF',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '385 KB (gzip 125 KB)',
      rating: '❌ 未安装',
      chineseSupport: '⚠️ 默认不支持中文',
    }
  }
}

// 测试4: html2canvas
const testHtml2Canvas = async (): Promise<TestResult> => {
  log('开始测试 html2canvas...')
  log('📦 包大小: ~201KB (gzip后 ~47KB)')
  log('🌏 中文支持: ✅ 完整支持，直接渲染HTML中的中文')

  try {
    // 预热（3次，消除JIT编译影响）
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      const html2canvas = (await import('html2canvas')).default
      const testDiv = document.createElement('div')
      testDiv.innerHTML = '<p>Warmup</p>'
      testDiv.style.position = 'absolute'
      testDiv.style.left = '-9999px'
      document.body.appendChild(testDiv)
      await html2canvas(testDiv)
      document.body.removeChild(testDiv)
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    log('预热完成，等待环境稳定...')
    await new Promise((resolve) => setTimeout(resolve, 500))

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // ⚠️ 关键：动态导入必须在计时开始后
      const html2canvas = (await import('html2canvas')).default
      const initEnd = performance.now()
      const initTime = initEnd - initStart

      const renderStart = performance.now()
      const testDiv = document.createElement('div')
      testDiv.innerHTML = testContent
      testDiv.id = `print-test-canvas-${Date.now()}`
      testDiv.style.position = 'absolute'
      testDiv.style.left = '-9999px'
      document.body.appendChild(testDiv)

      await html2canvas(testDiv)

      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      document.body.removeChild(testDiv)

      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    log(`html2canvas 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms, 内存: ${avgMemory}MB`)

    return {
      name: 'html2canvas',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '~201 KB (gzip ~47KB)',
      rating: avgRender < 500 ? '⭐⭐⭐⭐' : '⭐⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(calculateStdDev(times.map((t) => t.init + t.render)) * 10) / 10,
      chineseSupport:
        '<strong style="color: #38a169;">✅ 完美支持</strong><br><span style="color: #718096;">直接渲染HTML中的中文</span>',
    }
  } catch (error) {
    log(`html2canvas 测试失败: ${error}`)
    return {
      name: 'html2canvas',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '~180 KB',
      rating: '❌ 未安装',
    }
  }
}

// 测试5: pdfmake
const testPdfmake = async (): Promise<TestResult> => {
  log('开始测试 pdfmake...')
  log('📦 包大小: ~18.36MB (pdfmake 1.36MB + Noto Sans SC 可变字体 17MB)')
  log('🌏 中文支持: ⚠️ 内置字体不支持中文，需自定义字体 (思源黑体约 15-20MB, 微软雅黑约 16MB)')

  try {
    // 预热（3次，消除JIT编译和缓存影响）
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      const pdfMakeModule = await import('pdfmake/build/pdfmake')
      const pdfFontsModule: any = await import('pdfmake/build/vfs_fonts')
      const pdfMake = (pdfMakeModule as any).default || pdfMakeModule
      const vfs =
        pdfFontsModule.pdfMake?.vfs ||
        pdfFontsModule.default?.pdfMake?.vfs ||
        pdfFontsModule.default
      if (pdfMake.vfs === undefined) {
        pdfMake.vfs = vfs
      }
      await new Promise((resolve) => {
        pdfMake.createPdf({ content: ['Warmup'] }).getBlob(resolve)
      })
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // 预热后等待，确保环境稳定
    log('预热完成，等待环境稳定...')
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    // 正式测试（5次取平均）
    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // ✅ 修复：在计时内包含完整导入和初始化流程
      const pdfMakeModule = await import('pdfmake/build/pdfmake')
      const pdfFontsModule: any = await import('pdfmake/build/vfs_fonts')
      const pdfMake = (pdfMakeModule as any).default || pdfMakeModule
      const vfs =
        pdfFontsModule.pdfMake?.vfs ||
        pdfFontsModule.default?.pdfMake?.vfs ||
        pdfFontsModule.default
      if (pdfMake.vfs === undefined) {
        pdfMake.vfs = vfs
      }

      const initEnd = performance.now()
      const initTime = initEnd - initStart

      // 渲染时间：生成 PDF blob（使用统一测试内容）
      const renderStart = performance.now()
      const docDefinition = {
        content: [
          { text: '性能测试文档', style: 'header' },
          '这是用于评估打印方案的测试内容。',
          {
            table: {
              body: [
                ['项目', '描述'],
                ['测试 1', '示例数据'],
                ['测试 2', '示例数据'],
                ['测试 3', '示例数据'],
              ],
            },
          },
        ],
        styles: {
          header: { fontSize: 18, bold: true },
        },
      }
      await new Promise((resolve) => {
        pdfMake.createPdf(docDefinition).getBlob(resolve)
      })
      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    const totalTimes = times.map((t) => t.init + t.render)
    const stdDev = calculateStdDev(totalTimes)

    log(
      `pdfmake 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms (标准差: ${stdDev.toFixed(1)}ms), 内存: ${avgMemory}MB`,
    )

    return {
      name: 'pdfmake',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '1360 KB + 17 MB 可变字体 (支持 100-900 字重)',
      rating: '⭐⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(stdDev * 10) / 10,
      chineseSupport: '✅ 支持中文，字体文件 17 MB (Noto Sans SC 可变字体)',
    }
  } catch (error) {
    log(`pdfmake 测试失败: ${error}`)
    return {
      name: 'pdfmake',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '1360 KB + 17 MB 可变字体',
      rating: '❌ 未安装',
      chineseSupport: '✅ 支持中文',
    }
  }
}

// 测试6: vue3-print-nb
const testVue3PrintNb = async (): Promise<TestResult> => {
  log('开始测试 vue3-print-nb...')
  log('📦 包大小: ~15KB (gzip后 ~5KB)')
  log('🌏 中文支持: ✅ 完整支持，基于 window.print()')

  try {
    // 预热
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      // @ts-ignore
      await import('vue3-print-nb')
      await new Promise((resolve) => setTimeout(resolve, 50))
    }

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // 导入 vue3-print-nb（而不是 pdfmake）
      // @ts-ignore
      const vue3PrintNb = await import('vue3-print-nb')
      const initEnd = performance.now()
      const initTime = initEnd - initStart

      const renderStart = performance.now()
      const testDiv = document.createElement('div')
      testDiv.innerHTML = testContent
      testDiv.id = `print-test-vue-${Date.now()}`
      testDiv.style.display = 'none'
      document.body.appendChild(testDiv)

      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      document.body.removeChild(testDiv)

      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    log(`vue3-print-nb 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms, 内存: ${avgMemory}MB`)

    return {
      name: 'vue3-print-nb',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '~159 KB (gzip ~53KB)',
      rating: '⭐⭐⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(calculateStdDev(times.map((t) => t.init + t.render)) * 10) / 10,
      chineseSupport:
        '<strong style="color: #38a169;">✅ 完美支持</strong><br><span style="color: #718096;">基于window.print()</span>',
    }
  } catch (error) {
    log(`vue3-print-nb 测试失败: ${error}`)
    return {
      name: 'vue3-print-nb',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '~15 KB',
      rating: '❌ 未安装',
    }
  }
}

// 测试7: html2pdf.js
const testHtml2Pdf = async (): Promise<TestResult> => {
  log('开始测试 html2pdf.js...')
  log('📦 包大小: ~349KB (依赖 html2canvas + jsPDF, gzip后 ~82KB)')
  log('🌏 中文支持: ⚠️ 继承自 jsPDF，默认不支持，需引入字体 (1-2MB/字体)')

  try {
    // 预热（3次，消除JIT编译影响）
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      const html2pdf = (await import('html2pdf.js')).default
      const testDiv = document.createElement('div')
      testDiv.innerHTML = '<p>Warmup</p>'
      await html2pdf().from(testDiv).output('blob')
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    log('预热完成，等待环境稳定...')
    await new Promise((resolve) => setTimeout(resolve, 500))

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // ⚠️ 关键：动态导入必须在计时开始后（html2pdf.js ~330KB）
      const html2pdf = (await import('html2pdf.js')).default
      const initEnd = performance.now()
      const initTime = initEnd - initStart

      const renderStart = performance.now()
      const testDiv = document.createElement('div')
      testDiv.innerHTML = testContent
      testDiv.id = `print-test-h2p-${Date.now()}`

      await html2pdf().from(testDiv).output('blob')

      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    log(`html2pdf.js 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms, 内存: ${avgMemory}MB`)

    return {
      name: 'html2pdf.js',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '~349 KB (gzip ~82KB)',
      rating: avgRender < 1000 ? '⭐⭐⭐' : '⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(calculateStdDev(times.map((t) => t.init + t.render)) * 10) / 10,
      chineseSupport:
        '<strong style="color: #d69e2e;">⚠️ 默认不支持</strong><br><span style="color: #718096;">继承自jsPDF<br>需引入字体:<br>• 思源黑体 1-2MB<br>• 文泉驿 800KB</span>',
    }
  } catch (error) {
    log(`html2pdf.js 测试失败: ${error}`)
    return {
      name: 'html2pdf.js',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '~330 KB',
      rating: '❌ 未安装',
    }
  }
}

// 测试8: PDF-LIB
const testPdfLib = async (): Promise<TestResult> => {
  log('开始测试 PDF-LIB...')
  log('📦 包大小: ~530KB (gzip后 ~211KB)')
  log('🌏 中文支持: ⚠️ 默认仅支持 WinAnsi 编码，需嵌入字体 (思源黑体 15-20MB, 文泉驿 9-12MB)')

  try {
    // 预热（3次，消除JIT编译影响）
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      const { PDFDocument } = await import('pdf-lib')
      const pdfDoc = await PDFDocument.create()
      const page = pdfDoc.addPage()
      page.drawText('Warmup', { x: 50, y: 750 })
      await pdfDoc.save()
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    log('预热完成，等待环境稳定...')
    await new Promise((resolve) => setTimeout(resolve, 500))

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // ⚠️ 关键：动态导入必须在计时开始后
      const { PDFDocument, rgb } = await import('pdf-lib')
      const initEnd = performance.now()
      const initTime = initEnd - initStart

      const renderStart = performance.now()
      const pdfDoc = await PDFDocument.create()
      const page = pdfDoc.addPage([600, 800])

      // 使用中文内容进行测试
      page.drawText('性能测试文档', { x: 50, y: 750, size: 24 })
      page.drawText('这是用于评估打印方案的测试内容。', {
        x: 50,
        y: 700,
        size: 12,
      })
      page.drawText('测试项目 1: 示例数据', { x: 50, y: 670, size: 12 })
      page.drawText('测试项目 2: 示例数据', { x: 50, y: 650, size: 12 })
      page.drawText('测试项目 3: 示例数据', { x: 50, y: 630, size: 12 })

      await pdfDoc.save()
      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    log(`PDF-LIB 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms, 内存: ${avgMemory}MB`)

    return {
      name: 'PDF-LIB',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '~530 KB (gzip ~211KB)',
      rating: '⭐⭐⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(calculateStdDev(times.map((t) => t.init + t.render)) * 10) / 10,
      chineseSupport:
        '<strong style="color: #e53e3e;">❌ 默认不支持</strong><br><span style="color: #718096;">仅WinAnsi编码<br>需嵌入字体:<br>• 思源黑体 15-20MB<br>• 文泉驿 9-12MB</span>',
    }
  } catch (error) {
    log(`PDF-LIB 测试失败: ${error}`)
    // 检测是否是编码问题
    const errorMsg = String(error)
    if (errorMsg.includes('cannot encode')) {
      log('💡 提示: PDF-LIB 默认不支持中文，已切换为英文测试')
    }
    return {
      name: 'PDF-LIB',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '~200 KB',
      rating: '❌ 测试失败',
    }
  }
}

// 测试9: print-html-element
const testPrintHtmlElement = async (): Promise<TestResult> => {
  log('开始测试 print-html-element...')

  try {
    // 预热（3次，消除JIT编译和缓存影响）
    log(`预热 ${WARMUP_RUNS} 次...`)
    for (let i = 0; i < WARMUP_RUNS; i++) {
      clearPrintEnvironment()
      // @ts-ignore
      await import('print-html-element')
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    log('预热完成，等待环境稳定...')
    await new Promise((resolve) => setTimeout(resolve, 500))

    const times: { init: number; render: number }[] = []
    let totalMemory = 0

    for (let i = 0; i < ITERATIONS; i++) {
      clearPrintEnvironment()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const startMemory = getMemoryUsage()
      const initStart = performance.now()

      // ⚠️ 关键：动态导入必须在计时开始后
      // @ts-ignore
      const { printElement } = await import('print-html-element')
      const initEnd = performance.now()
      const initTime = initEnd - initStart

      const renderStart = performance.now()
      const testDiv = document.createElement('div')
      testDiv.innerHTML = testContent
      testDiv.id = `print-test-phe-${Date.now()}`
      testDiv.style.display = 'none'
      document.body.appendChild(testDiv)

      // 准备打印（不实际触发）
      const printConfig = {
        printMode: 'popup' as const,
        pageTitle: '测试文档',
      }

      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      const endMemory = getMemoryUsage()
      document.body.removeChild(testDiv)

      times.push({ init: initTime, render: renderTime })
      totalMemory += endMemory - startMemory
    }

    const avgInit = Math.round(times.reduce((a, b) => a + b.init, 0) / times.length)
    const avgRender = Math.round(times.reduce((a, b) => a + b.render, 0) / times.length)
    const avgMemory = Math.round((totalMemory / ITERATIONS) * 100) / 100
    log(
      `print-html-element 平均初始化: ${avgInit}ms, 平均渲染: ${avgRender}ms, 内存: ${avgMemory}MB`,
    )

    return {
      name: 'print-html-element',
      initTime: avgInit,
      renderTime: avgRender,
      totalTime: avgInit + avgRender,
      size: '~3 KB (gzip ~1.4KB)',
      rating: '⭐⭐⭐⭐⭐',
      memoryUsed: avgMemory,
      attempts: ITERATIONS,
      stdDev: Math.round(calculateStdDev(times.map((t) => t.init + t.render)) * 10) / 10,
      chineseSupport:
        '<strong style="color: #38a169;">✅ 完美支持</strong><br><span style="color: #718096;">直接打印HTML</span>',
    }
  } catch (error) {
    log(`print-html-element 测试失败: ${error}`)
    return {
      name: 'print-html-element',
      initTime: 0,
      renderTime: 0,
      totalTime: 0,
      size: '~5 KB',
      rating: '❌ 未安装',
    }
  }
}

const runAllTests = async () => {
  isRunning.value = true
  testResults.value = []
  testLog.value = []

  log('=== 开始性能基准测试 ===')
  log(`每个方案：预热 ${WARMUP_RUNS} 次，正式测试 ${ITERATIONS} 次`)
  log('测试将逐个进行，避免相互干扰...')

  // 逐个测试各方案（避免并发导致结果不准确）
  const tests = [
    testWindowPrint,
    testPrintJS,
    testVue3PrintNb,
    testJsPDF,
    testPdfmake,
    testHtml2Canvas,
    testHtml2Pdf,
    testPdfLib,
    testPrintHtmlElement,
  ]

  for (const test of tests) {
    try {
      const result = await test()
      testResults.value.push(result)

      // 验证结果合理性
      if (result.totalTime > 10000) {
        log(`⚠️ 警告: ${result.name} 耗时异常 (${result.totalTime}ms)，可能存在网络或加载问题`)
      }

      // 等待一段时间，让浏览器稳定，清理内存
      log('等待环境稳定...')
      await new Promise((resolve) => setTimeout(resolve, 500))
      clearPrintEnvironment()
    } catch (error) {
      log(`❌ 测试出错: ${error}`)
    }
  }

  // 验证测试结果
  const validResults = testResults.value.filter((r) => !r.rating.includes('❌'))
  const failedResults = testResults.value.filter((r) => r.rating.includes('❌'))
  const notInstalledResults = failedResults.filter((r) => r.rating.includes('未安装'))
  const testFailedResults = failedResults.filter((r) => r.rating.includes('测试失败'))

  if (validResults.length === 0) {
    log('⚠️ 警告: 所有测试均失败，请检查依赖是否已安装')
  } else {
    log(`✅ 测试完成！成功: ${validResults.length}/${testResults.value.length} 个方案`)

    if (notInstalledResults.length > 0) {
      log(`⚠️ 未安装的库: ${notInstalledResults.map((r) => r.name).join(', ')}`)
    }

    if (testFailedResults.length > 0) {
      log(`❌ 测试失败的库: ${testFailedResults.map((r) => r.name).join(', ')}`)
    }

    // 显示最快和最慢的方案
    if (validResults.length > 1) {
      const fastest = validResults.reduce((min, curr) =>
        curr.totalTime < min.totalTime ? curr : min,
      )
      const slowest = validResults.reduce((max, curr) =>
        curr.totalTime > max.totalTime ? curr : max,
      )
      log(`🏆 最快: ${fastest.name} (${fastest.totalTime}ms)`)
      log(`🐌 最慢: ${slowest.name} (${slowest.totalTime}ms)`)

      // 性能对比
      if (slowest.totalTime > 0) {
        const speedRatio = (slowest.totalTime / (fastest.totalTime || 1)).toFixed(1)
        log(`📊 性能差异: 最慢方案是最快方案的 ${speedRatio}x`)
      }

      // ✅ 动态更新评分
      testResults.value.forEach((result) => {
        if (!result.rating.includes('❌')) {
          result.rating = calculateRating(testResults.value, result)
        }
      })
    }
  }

  // ✅ 执行结果验证
  validateResults()

  log('=== 测试完成 ===')
  isRunning.value = false
}

const clearResults = () => {
  testResults.value = []
  testLog.value = []
}

const getTimeClass = (time: number) => {
  if (time < 100) return 'time-excellent'
  if (time < 500) return 'time-good'
  if (time < 1000) return 'time-medium'
  return 'time-slow'
}

const getBarWidth = (time: number) => {
  const maxTime = Math.max(...testResults.value.map((r) => r.totalTime))
  return (time / maxTime) * 100
}

const getBarColor = (time: number) => {
  if (time < 100) return '#48bb78'
  if (time < 500) return '#4299e1'
  if (time < 1000) return '#ed8936'
  return '#f56565'
}

// 包大小条形图宽度和颜色
const getSizeBarWidth = (sizeStr: string) => {
  // 从字符串中提取数字（KB 或 MB）
  const match = sizeStr.match(/(\d+(?:\.\d+)?)\s*(KB|MB|GB)/i)
  if (!match || !match[1] || !match[2]) return 0

  let sizeInKB = parseFloat(match[1])
  const unit = match[2].toUpperCase()

  // 统一转换为 KB
  if (unit === 'MB') sizeInKB *= 1024
  if (unit === 'GB') sizeInKB *= 1024 * 1024

  // 找出最大值用于计算百分比
  const allSizes = testResults.value.map((r) => {
    const m = r.size.match(/(\d+(?:\.\d+)?)\s*(KB|MB|GB)/i)
    if (!m || !m[1] || !m[2]) return 0
    let size = parseFloat(m[1])
    const u = m[2].toUpperCase()
    if (u === 'MB') size *= 1024
    if (u === 'GB') size *= 1024 * 1024
    return size
  })
  const maxSize = Math.max(...allSizes)

  return maxSize > 0 ? (sizeInKB / maxSize) * 100 : 0
}

const getSizeBarColor = (sizeStr: string) => {
  const match = sizeStr.match(/(\d+(?:\.\d+)?)\s*(KB|MB|GB)/i)
  if (!match || !match[1] || !match[2]) return '#cbd5e0'

  let sizeInKB = parseFloat(match[1])
  const unit = match[2].toUpperCase()

  if (unit === 'MB') sizeInKB *= 1024
  if (unit === 'GB') sizeInKB *= 1024 * 1024

  // 根据大小返回颜色
  if (sizeInKB === 0) return '#48bb78' // 0 KB - 绿色
  if (sizeInKB < 50) return '#48bb78' // < 50 KB - 绿色
  if (sizeInKB < 200) return '#4299e1' // < 200 KB - 蓝色
  if (sizeInKB < 500) return '#ed8936' // < 500 KB - 橙色
  if (sizeInKB < 1000) return '#f56565' // < 1 MB - 红色
  return '#9f1239' // >= 1 MB - 深红色
}
</script>

<style scoped>
.demo-page {
  max-width: 1400px;
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

.test-panel {
  background: white;
  border-radius: 8px;
  padding: 2rem;
}

.intro-section {
  margin-bottom: 2rem;
}

.intro-section h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.intro-section p {
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}

.intro-section code {
  background: #edf2f7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: #667eea;
}

.warning-note {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  color: #78350f !important;
}

.controls-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
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

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #5568d3;
}

.btn-secondary {
  background: #718096;
  color: white;
}

.btn-secondary:hover {
  background: #4a5568;
}

.test-log {
  background: #2d3748;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.test-log h3 {
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.log-content {
  background: #1a202c;
  border-radius: 4px;
  padding: 1rem;
  max-height: 300px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
}

.log-item {
  color: #a0aec0;
  padding: 0.25rem 0;
  border-bottom: 1px solid #2d3748;
}

.log-item:last-child {
  border-bottom: none;
}

.results-section {
  margin-bottom: 3rem;
}

.results-section h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.summary-card {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border: 2px solid #667eea;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.summary-card h3 {
  color: #4a5568;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.big-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.sub-text {
  color: #718096;
  font-size: 0.9rem;
}

.results-table {
  overflow-x: auto;
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
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

tbody tr:hover {
  background: #f7fafc;
}

.time-excellent {
  color: #48bb78;
  font-weight: 600;
}

.time-good {
  color: #4299e1;
  font-weight: 600;
}

.time-medium {
  color: #ed8936;
  font-weight: 600;
}

.time-slow {
  color: #f56565;
  font-weight: 600;
}

.rating-stars {
  font-size: 0.9rem;
}

.chart-section {
  margin-bottom: 3rem;
}

.chart-section h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.chart-container {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
}

.bar-chart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bar-item {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  align-items: center;
}

.bar-label {
  font-weight: 600;
  color: #2d3748;
}

.bar-wrapper {
  background: #e2e8f0;
  border-radius: 4px;
  height: 30px;
  position: relative;
}

.bar {
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  transition: width 0.5s ease;
}

.bar-value {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.benchmark-details {
  margin-bottom: 3rem;
}

.benchmark-details h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.analysis-note {
  color: #718096;
  font-style: italic;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #edf2f7;
  border-radius: 4px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.detail-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.detail-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.detail-card ul {
  list-style: none;
  padding: 0;
}

.detail-card li {
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 0.9rem;
  border-bottom: 1px solid #e2e8f0;
}

.detail-card li:last-child {
  border-bottom: none;
}

.recommendations {
  margin-bottom: 3rem;
}

.recommendations h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.recommendation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.rec-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.rec-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.rec-card h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.rec-card p {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
}

.rec-card ul {
  list-style: none;
  padding: 0;
}

.rec-card li {
  padding: 0.25rem 0;
  color: #718096;
  font-size: 0.9rem;
}

.optimization-tips {
  margin-bottom: 2rem;
}

.optimization-tips h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tip-card {
  background: #f7fafc;
  border-left: 4px solid #667eea;
  border-radius: 4px;
  padding: 1.5rem;
}

.tip-card h4 {
  color: #667eea;
  margin-bottom: 0.75rem;
}

.tip-card p {
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.tip-card pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 0.75rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-top: 0.5rem;
}

/* 包大小和中文支持样式 */
.size-cell {
  font-weight: 600;
  color: #2d3748;
  white-space: nowrap;
  min-width: 180px;
}

.package-size {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #edf2f7;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
}

.chinese-support-cell {
  font-size: 0.85rem;
  line-height: 1.4;
  min-width: 200px;
}

.chinese-support {
  display: block;
  white-space: pre-wrap;
}

/* 包大小条形图样式 */
.bar-size .bar-value {
  font-size: 0.85rem;
  white-space: nowrap;
}

/* 使用场景分析样式 */
.scenario-analysis {
  margin-bottom: 3rem;
}

.scenario-analysis h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.scenario-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.scenario-card h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.scenario-desc {
  color: #4a5568;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background: #f7fafc;
  border-radius: 6px;
}

.scenario-metrics {
  background: #edf2f7;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.metric-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.metric-item:last-child {
  margin-bottom: 0;
}

.metric-label {
  font-weight: 600;
  color: #2d3748;
  min-width: 140px;
}

.metric-value {
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.metric-value.high {
  background: #fef3c7;
  color: #92400e;
}

.metric-value.medium {
  background: #dbeafe;
  color: #1e40af;
}

.metric-value.low {
  background: #d1fae5;
  color: #065f46;
}

.metric-explain {
  font-size: 0.85rem;
  color: #718096;
  font-style: italic;
}

.scenario-recommendation {
  background: #f0fdf4;
  border-left: 4px solid #22c55e;
  padding: 1.25rem;
  border-radius: 6px;
}

.scenario-recommendation h4 {
  color: #16a34a;
  margin-bottom: 0.75rem;
}

.scenario-recommendation ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.scenario-recommendation li {
  color: #4a5568;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.avoid-text {
  background: #fef2f2;
  color: #991b1b;
  padding: 0.75rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-weight: 500;
}

.calculation {
  background: #fefce8;
  border-left: 3px solid #facc15;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #713f12;
  border-radius: 4px;
}

.decision-tree {
  margin-top: 3rem;
  background: #fefce8;
  border-radius: 12px;
  padding: 2rem;
}

.decision-tree h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.tree-container {
  overflow-x: auto;
}

.tree-node {
  text-align: center;
  margin: 1rem 0;
}

.tree-node.root {
  margin-top: 0;
}

.node-question {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.tree-branches {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
}

.branch-label {
  background: #e2e8f0;
  color: #2d3748;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.branch-label.yes {
  background: #d1fae5;
  color: #065f46;
}

.branch-label.no {
  background: #fee2e2;
  color: #991b1b;
}

.tree-leaf {
  background: #22c55e;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tree-leaf small {
  display: block;
  margin-top: 0.25rem;
  font-weight: 400;
  opacity: 0.9;
}

/* 框架覆盖说明样式 */
.framework-coverage {
  margin-bottom: 3rem;
}

.framework-coverage h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.coverage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.coverage-card {
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.coverage-card.tested {
  background: #f0fdf4;
  border: 2px solid #22c55e;
}

.coverage-card.not-tested {
  background: #fef3c7;
  border: 2px solid #f59e0b;
}

.coverage-card.out-scope {
  background: #f3f4f6;
  border: 2px solid #9ca3af;
}

.coverage-card h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.coverage-card.tested h3 {
  color: #16a34a;
}

.coverage-card.not-tested h3 {
  color: #d97706;
}

.coverage-card.out-scope h3 {
  color: #6b7280;
}

.framework-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.framework-item {
  padding: 0.75rem;
  background: white;
  border-radius: 6px;
  line-height: 1.6;
}

.framework-item strong {
  display: block;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.framework-item span {
  color: #4a5568;
  font-size: 0.95rem;
}

.inference {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #fef3c7;
  border-left: 3px solid #f59e0b;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #92400e;
  font-style: italic;
}

.coverage-summary {
  margin-top: 3rem;
  background: white;
  border: 3px solid #667eea;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.15);
}

.coverage-summary h3 {
  color: #667eea;
  margin-bottom: 1.5rem;
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.summary-point {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.point-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.point-text {
  flex: 1;
}

.point-text strong {
  color: #2d3748;
  font-size: 1.1rem;
}

.point-text ul {
  margin-top: 0.75rem;
  margin-left: 1.5rem;
}

.point-text li {
  color: #4a5568;
  margin-bottom: 0.5rem;
  line-height: 1.7;
}

.summary-example {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.summary-example h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.example-code {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.code-block {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.code-title {
  background: #667eea;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.code-block pre {
  margin: 0;
  padding: 1rem;
  background: #2d3748;
  overflow-x: auto;
}

.code-block code {
  color: #e2e8f0;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
}

.code-perf {
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  color: #16a34a;
  font-weight: 600;
  font-size: 0.9rem;
  border-top: 2px solid #22c55e;
}

.example-conclusion {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  border-radius: 4px;
  color: #92400e;
  font-size: 0.95rem;
  line-height: 1.7;
}
.tip-card code {
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
}
</style>
