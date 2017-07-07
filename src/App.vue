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
            eventBus.$on("selectServer", server => {
                if (this.currentServer == server) {
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

<style>

</style>
