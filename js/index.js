class WebRouter {
    constructor({
        mode,
        routes
    }) {
        this.routerView = document.querySelector('router-view')
        window.addEventListener('hashchange', () => {
            let hash = location.hash;
            this.render(hash)
        })
        window.addEventListener('DOMContentLoaded', () => {
            if (!location.hash) { //如果不存在hash值，那么重定向到#/
                location.hash = "/"
            } else { //如果存在hash值，那就渲染对应UI
                let hash = location.hash;
                this.render(hash)
            }
        })
    }
    render(hash) {
        this.routerView.innerHTML = routes.find(e => e.path == hash.slice(1)).component.template
    }
}