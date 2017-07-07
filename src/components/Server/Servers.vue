<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                <app-server :id="server.id" :status="server.status" :is-current="isSelected(server)"></app-server>
            </li>
        </ul>
    </div>
</template>

<script>
    import AppServer from "./Server.vue";
    import { eventBus } from "./../../main";

    export default {
        components: {
            AppServer
        },
        props: ["currentServerId"],
        data() {
            return {
                servers: [
                    { id: 1, status: "Normal" },
                    { id: 2, status: "Critical" },
                    { id: 3, status: "Unknown" },
                    { id: 4, status: "Normal" },
                ],
            };
        },
        created () {
            var self = this;
            eventBus.$on("setStatus", (id, status) => {
                var server = self.servers.find(s => s.id === id);
                if (!!server) {
                    server.status = status;
                }
            });
        },
        methods: {
            isSelected(server) {
                return server.id == this.currentServerId;
            }
        }
    }
</script>

<style>

</style>
