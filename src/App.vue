<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1
                        v-app-on:mouseenter="showHelpFunc"
                        v-app-on:mouseleave="hideHelpFunc"
                >Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div v-show="showHelp">
                    <p>Directives in VueJS are really cool.</p>
                    <!-- <p>For more information, see <a href="https://vuejs.org/v2/guide/custom-directive.html">VueJS Directives reference</a>.</p> -->
                </div>
            </div>
        </div>
        <!-- Test  -->
    </div>
</template>

<script>
    import OnDirective from './directives/onDirective';

    export default {
        data() {
            return {
                showHelp: false
            }
        },
        methods: {
            toggleShowHelp() {
                this.showHelp = !this.showHelp;
            },
            showHelpFunc() {
                this.showHelp = true;
            },
            hideHelpFunc() {
                this.showHelp = false;
            }
        },
        directives: {
            appOn: OnDirective
        }
    }
</script>

<style>
</style>
