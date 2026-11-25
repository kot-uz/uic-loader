import { html } from './core.js';

const ATTRS = ['size', 'color', 'duration', 'label'];
const Base = typeof HTMLElement === 'undefined' ? class {} : HTMLElement;

export class UzLoaderElement extends Base {
  static get observedAttributes() {
    return ATTRS;
  }
  connectedCallback() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this.render();
  }
  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }
  render() {
    const opts = {};
    for (const a of ATTRS) if (this.hasAttribute(a)) opts[a] = this.getAttribute(a);
    this.shadowRoot.innerHTML = `<style>:host{display:inline-block;line-height:0}</style>${html(opts)}`;
  }
}

export function defineUzLoader(tag = 'uz-loader') {
  if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
    customElements.define(tag, UzLoaderElement);
  }
}

defineUzLoader();
