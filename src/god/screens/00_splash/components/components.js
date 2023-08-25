class LoadingItem extends HTMLElement {
    constructor() {
        super()
        this.name = ''
    }
    static get observedAttributes() {
        return ['name', 'path']
    }

    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return
        this[property] = newValuel
    }

    connectedCallback() {}
}

// register component
customElements.define('loading-item', LoadingItem)
