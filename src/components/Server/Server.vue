<template>
    <div @click="selectServer" class="parent" :class="{'is-current': isCurrent,
            'status-good': server.status == 'Normal',
            'status-unknown': server.status == 'Unknown',
            'status-critical': server.status == 'Critical'}">
        <div>
            <div v-show="isCurrent" class="glyphicon glyphicon-play" style="font-size: 24px"
                @click.stop="deselectServer"></div>
        </div>
        <div class="child server-name-and-status">Server #{{ server.id }} - {{ server.status }}</div>
    </div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        props: [ "server", "isCurrent" ],
        methods: {
            selectServer(evt) {
                console.log("clicked server", this.server, evt);

                eventBus.selectServer(this.server, evt);
            },
            deselectServer() {
                console.log("Deselect");
                eventBus.deselectServer();
            }
        }
    }
</script>

<style scoped>
    .parent {
        display: grid;
        grid-template-columns: 24px 1fr;
        grid-gap: 0.5em;
        padding: 1em;
    }
    div {
        cursor: pointer;
        /*padding: 1em;*/
    }
    div:hover {
        background-color: lightgoldenrodyellow;
    }
    .glyphicon:hover {
        color: gray;
    }
    .server-name-and-status {
        position: relative;
        top: .35em;
        height: 29px;
    }
</style>