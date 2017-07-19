export default {
    bind(el, binding, vnode) {
        // debugger;
        var type = binding.arg;
        var listener = binding.value;
        if (typeof listener === 'function')
        {
            el.addEventListener(type, listener);
        } else {
            console.warn(`Can't bind to a non-function: ${binding.expression}`);
        }
    },
    unbind(el, binding, vnode, oldVnode) {
        // debugger;
        var type = binding.arg;
        var listener = binding.value;
        if (typeof listener === 'function')
        {
            el.removeEventListener(type, listener);
        }
    }
}
