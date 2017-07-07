import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        selectServer(server, evt) {
            this.$emit("selectServer", server, evt);
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
