import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        selectServer(id, status, evt) {
            this.$emit("selectServer", id, status, evt);
            // console.log("selectServer", server);
        },
        deselectServer() {
            this.$emit("deselectServer");
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
