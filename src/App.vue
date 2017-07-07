<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers :currentServer="currentServer"></servers>
            <app-server-details :server="currentServer"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import { eventBus } from "./main";

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        created() {
            eventBus.$on("selectServer", (server, evt) => {
                if (this.currentServer == server && evt.ctrlKey) {
                    // If we're already selected and they hit the control key, clear the selection
                    this.currentServer = void 0;
                } else {
                    this.currentServer = server;
                }
                console.log("Selected new server", server);
            });
        },
        mounted() {
            console.log("mounted.  currentServer:", this.currentServer);
        },
        data() {
            return {
                currentServer: void 0 //{id: 10}
            }
        }
    }
</script>

<style lang="less">
    .status-good {
        background-color: lighten(desaturate(lightgreen, 25%), 20%);
    }

    .status-unknown {
        background-color: lighten(lightgray, 10%);
    }

    .status-critical {
        background-color: lighten(desaturate(pink, 25%), 7.5%);
    }
</style>
