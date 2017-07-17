class privateHighlightFunctions {
    static highlightIt() {
        // debugger;
        this.style.backgroundColor = '#fffae3';
    }
    static unHighlightIt() {
        // debugger;
        this.style.backgroundColor = '';
    }
}

export default {
    bind(el, binding, vNode) {
        // debugger;
        el.style.cursor = 'pointer';
        el.addEventListener('mouseover', privateHighlightFunctions.highlightIt);
        el.addEventListener('mouseout', privateHighlightFunctions.unHighlightIt);
    },
    unbind(el, binding, vNode) {
        // console.log("unbind", el, binding, vNode);
        // debugger;
        el.removeEventListener('mouseover', privateHighlightFunctions.highlightIt);
        el.removeEventListener('mouseout', privateHighlightFunctions.unHighlightIt);
        // console.log("unbound");
    }
}
