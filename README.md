# Frontend Printing Framework Research Report

> A comprehensive, interactive demo showcasing 7+ modern frontend printing solutions with performance benchmarks, compatibility analysis, and custom pagination examples.

## 🎯 Project Overview

This project is a detailed research report on frontend printing frameworks, designed for **leadership presentation**. It includes executable examples, performance comparisons, browser compatibility matrices, and best practices for each solution.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open your browser and visit: **http://localhost:5173/**

## 📋 Framework Coverage

### 1. Browser Native Print

- ✅ `window.print()` with CSS `@media print`
- ✅ Zero dependencies, best performance
- ✅ Page break control
- ✅ Print-specific styling

### 2. Print.js (~18KB)

- ✅ HTML content printing
- ✅ Image printing
- ✅ JSON data table printing
- ✅ Custom style injection

### 3. vue3-print-nb (~25KB)

- ✅ Vue 3 directive-based printing
- ✅ `v-print` directive
- ✅ Programmatic API
- ✅ Global plugin integration

### 4. jsPDF (~280KB)

- ✅ Powerful PDF generation
- ✅ Drawing API (text, shapes, images)
- ✅ Table generation
- ✅ Multi-page documents
- ✅ Precise layout control

### 5. pdfmake (~650KB)

- ✅ Declarative PDF generation
- ✅ JSON-based configuration
- ✅ Auto-pagination
- ✅ Headers/footers
- ✅ Table of contents

### 6. html2canvas (~170KB)

- ✅ DOM to Canvas conversion
- ✅ Screenshot functionality
- ✅ Image export
- ✅ High-quality rendering

### 7. html2pdf.js (~100KB + deps)

- ✅ HTML to PDF conversion
- ✅ Style preservation
- ✅ Automatic pagination
- ✅ Flexible configuration

## 📊 Key Features

### 🏠 Homepage

- Framework navigation cards
- Comprehensive comparison table
- Selection matrix by use case
- Quick start guides

### ⚡ Performance Testing

- Initialization time comparison
- Rendering time benchmarks
- Visual charts
- Optimization recommendations

### 🌐 Compatibility Matrix

- Chrome, Firefox, Safari, Edge, IE11
- Feature detection APIs
- Known issues documentation
- Polyfill recommendations

### 📄 Custom Pagination

- CSS page-break examples
- jsPDF precise paging
- pdfmake declarative paging
- Best practices
- Common problems & solutions

## 🎨 Tech Stack

- **Vue 3.5.25** - Progressive framework
- **TypeScript 5.9.0** - Type safety
- **Vite 7.3.0** - Fast build tool
- **Vue Router 4.6.3** - Routing
- **Printing Libraries**:
  - print-js
  - vue3-print-nb
  - jspdf
  - pdfmake
  - html2canvas
  - html2pdf.js

## 📂 Project Structure

```
src/
├── views/
│   ├── HomePage.vue           # Main landing page
│   ├── NativePrint.vue        # window.print() examples
│   ├── PrintJS.vue            # Print.js demos
│   ├── VuePrintNb.vue         # vue3-print-nb examples
│   ├── JsPDF.vue              # jsPDF demonstrations
│   ├── Pdfmake.vue            # pdfmake examples
│   ├── Html2Canvas.vue        # html2canvas demos
│   ├── Html2Pdf.vue           # html2pdf.js examples
│   ├── PerformanceTest.vue    # Benchmark testing
│   ├── Compatibility.vue      # Browser support matrix
│   └── Pagination.vue         # Pagination control guide
├── router/index.ts            # Route configuration
├── App.vue                    # Root component
└── main.ts                    # Application entry
```

## 🎯 Framework Comparison

| Framework      | Bundle Size | Performance | Compatibility | Learning Curve | Use Case        |
| -------------- | ----------- | ----------- | ------------- | -------------- | --------------- |
| window.print() | 0KB         | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐     | Simple HTML     |
| Print.js       | 18KB        | ⭐⭐⭐⭐    | ⭐⭐⭐⭐      | ⭐⭐⭐⭐       | HTML/Image/JSON |
| vue3-print-nb  | 25KB        | ⭐⭐⭐⭐    | ⭐⭐⭐⭐      | ⭐⭐⭐⭐⭐     | Vue Projects    |
| jsPDF          | 280KB       | ⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐    | ⭐⭐⭐         | Complex PDF     |
| pdfmake        | 650KB       | ⭐⭐⭐      | ⭐⭐⭐⭐⭐    | ⭐⭐⭐⭐       | Declarative PDF |
| html2canvas    | 170KB       | ⭐⭐⭐      | ⭐⭐⭐⭐      | ⭐⭐⭐⭐       | Screenshots     |
| html2pdf.js    | ~100KB      | ⭐⭐⭐      | ⭐⭐⭐⭐      | ⭐⭐⭐⭐       | HTML to PDF     |

## 💡 Usage Recommendations

### Scenario 1: Simple Web Page Printing

**Recommended**: `window.print()` + CSS `@media print`

- Zero cost, best performance
- Excellent compatibility

### Scenario 2: Vue Project Printing

**Recommended**: `vue3-print-nb`

- Vue ecosystem integration
- Directive-based usage
- Lightweight

### Scenario 3: Complex PDF Reports

**Recommended**: `jsPDF` or `pdfmake`

- jsPDF: Precise layout control
- pdfmake: Fast development, declarative

### Scenario 4: HTML to PDF with Style Preservation

**Recommended**: `html2pdf.js`

- High style fidelity
- Automatic pagination

### Scenario 5: Page Screenshots

**Recommended**: `html2canvas`

- High-quality captures
- Image export

## 🔧 Build & Deploy

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ⚠️ Notes

### TypeScript Type Issues

Some libraries have incomplete type definitions, but **this doesn't affect runtime**:

- jsPDF's `getNumberOfPages()` type hints
- pdfmake font file imports
- html2pdf.js configuration options

### Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge - Full support
- **IE11**: Partial support, requires polyfills
- **Mobile**: iOS Safari printing needs special handling

### Print Pagination

- CSS pagination: May vary across browsers
- PDF pagination: Use jsPDF or pdfmake for precise control

## 📚 Resources

### Official Documentation

- [Print.js](https://printjs.crabbly.com/)
- [vue3-print-nb](https://github.com/Power-kxLee/vue3-print-nb)
- [jsPDF](https://github.com/parallax/jsPDF)
- [pdfmake](http://pdfmake.org/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)

### MDN Documentation

- [CSS Print Media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#print)
- [window.print()](https://developer.mozilla.org/en-US/docs/Web/API/Window/print)

## 📄 License

MIT License

---

**For detailed Chinese documentation, see [使用说明.md](./使用说明.md)**

**Created with ❤️ for Frontend Developers**

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
