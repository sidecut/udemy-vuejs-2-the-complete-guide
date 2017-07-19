export default {
    bind(el, binding, vnode) {
        var arg = binding.arg;
        var expression = binding.expression;
        var func = vnode.context[expression];

        el.addEventListener(arg, func);
    },
    unbind(el, binding, vnode, oldVnode) {
        var arg = binding.arg;
        var expression = binding.expression;
        var func = vnode.context[expression];

        el.removeEventListener(arg, func);
    }
}
