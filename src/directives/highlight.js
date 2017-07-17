export default {
    appSpecialProps: {
        highlightIt() {
            // debugger;
            this.style.backgroundColor = '#fffae3';
        },
        unHighlightIt() {
            // debugger;
            this.style.backgroundColor = '';
        }
    },
    bind(el, binding, vNode) {
        // debugger;
        el.style.cursor = 'pointer';
        let highlightIt = binding.def.appSpecialProps.highlightIt;
        let unHighlightIt = binding.def.appSpecialProps.unHighlightIt;
        el.addEventListener('mouseover', highlightIt);
        el.addEventListener('mouseout', unHighlightIt);

        // let elt = el;
        // window.setTimeout(function() {
        //     elt.removeEventListener('mouseover', highlightIt);
        // }, 2000);
    },
    unbind(el, binding, vNode) {
        console.log("unbind", el, binding, vNode);
        // debugger;
        // TODO: figure out how to remove the event listener
        let highlightIt = binding.def.appSpecialProps.highlightIt;
        let unHighlightIt = binding.def.appSpecialProps.unHighlightIt;
        el.removeEventListener('mouseover', highlightIt);
        el.removeEventListener('mouseout', unHighlightIt);
    }
}
