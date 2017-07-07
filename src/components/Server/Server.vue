<template>
    <div @click="selectServer" :class="{'is-current': isCurrent}">Server #{{ server.id }} - {{ server.status }}</div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        props: [ "server", "isCurrent" ],
        methods: {
            selectServer() {
                console.log("clicked server", this.server);

                eventBus.selectServer(this.server);
            }
        }
    }
</script>

<style scoped>
    div {
        cursor: pointer;
    }
    div:hover {
        background-color: #eee;
    }
    .is-current {
        background-color: rgba(43,192,255,0.11);
    }
</style>