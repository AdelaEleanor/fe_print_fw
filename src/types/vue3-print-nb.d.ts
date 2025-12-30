declare module 'vue3-print-nb' {
  import type { App, Directive } from 'vue'

  interface PrintOptions {
    id?: string
    preview?: boolean
    previewTitle?: string
    previewPrintBtnLabel?: string
    popTitle?: string
    extraCss?: string
    extraHead?: string
    standard?: string
    zIndex?: number
    openCallback?: () => void
    closeCallback?: () => void
    beforeOpenCallback?: (el: HTMLElement) => boolean | void
    url?: string
    asyncUrl?: (resolve: (url: string) => void) => void
  }

  interface PrintPlugin {
    install(app: App): void
  }

  const print: PrintPlugin & Directive
  export default print
}

declare module 'print-html-element' {
  export interface PrintOptions {
    printMode?: 'iframe' | 'popup'
    pageTitle?: string
    templateString?: string
    popupProperties?: string
    stylesheets?: string | string[]
    styles?: string | string[]
  }

  export function printElement(element: HTMLElement, options?: PrintOptions): void
  export function printHtml(html: string, options?: PrintOptions): void
  export function printElements(elements: HTMLElement[], options?: PrintOptions): void
}
