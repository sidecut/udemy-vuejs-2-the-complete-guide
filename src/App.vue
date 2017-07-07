<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers :currentServerId="currentServerId"></servers>
            <app-server-details :id="currentServerId" :status="currentServerStatus"></app-server-details>
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
            var self = this;
            eventBus.$on("selectServer", (id, status, evt) => {
                if (self.currentServerId == id && evt.ctrlKey) {
                    // If we're already selected and they hit the control key, clear the selection
                    self.currentServerId = void 0;
                    selt.currentServerStatus = void 0;
                } else {
                    self.currentServerId = id;
                    self.currentServerStatus = status;
                }
                console.log("Selected new server", id);
            });
            eventBus.$on("deselectServer", () => {
                console.log("Deselect");
                self.currentServerId = void 0;
            });
            eventBus.$on("setStatus", (id, status) => {
                if (self.currentServerId === id) {
                    self.currentServerStatus = status;
                }
            });
        },
        data() {
            return {
                currentServerId: void 0, //{id: 10},
                currentServerStatus: void 0 //{id: 10},
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
