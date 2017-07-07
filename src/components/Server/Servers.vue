<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                <app-server :server="server" :is-current="isSelected(server)"></app-server>
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
        props: ["currentServer"],
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
        methods: {
            isSelected(server) {
                return this.currentServer && server.id == this.currentServer.id;
            }
        }
    }
</script>

<style>

</style>
