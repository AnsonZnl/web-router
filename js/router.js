class routerLink extends HTMLElement {
    static get observedAttributes() {
        return ['to'];
    }
    constructor() {
        super()
        console.log(this);
        const shadow = this.attachShadow({
            mode: 'open'
        });
        const a = window.document.createElement('a');
        shadow.appendChild(a)
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <a href="#${this.getAttribute('to')}">
          ${this.innerHTML}
        </a>`;
    }
}
customElements.define('router-link', routerLink)


// let routerView = routeView
//  window.addEventListener('hashchange', () => {
//      let hash = location.hash;
//      routerView.innerHTML = hash
//  })
//  window.addEventListener('DOMContentLoaded', () => {
//      if (!location.hash) { //如果不存在hash值，那么重定向到#/
//          location.hash = "/"
//      } else { //如果存在hash值，那就渲染对应UI
//          let hash = location.hash;
//          routerView.innerHTML = hash
//      }
//  })