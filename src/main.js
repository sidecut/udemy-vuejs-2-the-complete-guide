import Vue from 'vue'
import App from './App.vue'

import Highlight from './directives/highlight';

Vue.directive('highlight', Highlight);

new Vue({
    el: '#app',
    render: h => h(App),
});
