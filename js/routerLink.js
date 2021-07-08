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
        this.innerHTML = ''
    }
}
customElements.define('router-link', routerLink)