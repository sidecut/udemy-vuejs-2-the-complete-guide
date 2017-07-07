<template>
    <div @click="selectServer"
        :class="{'is-current': isCurrent,
        'status-good': server.status == 'Normal',
        'status-unknown': server.status == 'Unknown',
        'status-critical': server.status == 'Critical'}">Server #{{ server.id }} - {{ server.status }}</div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        props: [ "server", "isCurrent" ],
        methods: {
            selectServer(evt) {
                console.log("clicked server", this.server, evt);

                eventBus.selectServer(this.server, evt);
            }
        }
    }
</script>

<style scoped>
    div {
        cursor: pointer;
        padding: 1em;
    }
    div:hover {
        background-color: #eee;
    }
    /*.is-current {
        background-color: lightgoldenrodyellow;
    }*/
</style>