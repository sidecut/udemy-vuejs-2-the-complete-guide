<template>
    <div @click="selectServer" class="parent" :class="{'is-current': isCurrent,
            'status-good': status == 'Normal',
            'status-unknown': status == 'Unknown',
            'status-critical': status == 'Critical'}">
        <div class="child" style="width: 24px">
            <div v-show="isCurrent" class="glyphicon glyphicon-play" style="font-size: 23px"
                @click.stop="deselectServer"></div>
        </div>
        <div class="child server-name-and-status">Server #{{ id }} - {{ status }}</div>
    </div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        props: [ "id", "status", "isCurrent" ],
        methods: {
            selectServer(evt) {
                console.log("clicked server", this.id, this.status, evt);

                eventBus.selectServer(this.id, this.status, evt);
            },
            deselectServer() {
                console.log("Deselect");
                eventBus.deselectServer();
            }
        }
    }
</script>

<style scoped>
    div.parent {
        display: grid;
        grid-template-columns: 24px 1fr;
        -ms-grid-columns: 24px 20em;
        -ms-grid-rows: 1fr;
        grid-gap: 0.5em;
        /*-ms-grid-gap: 0.5em;*/
        padding: 1em;
    }
    div.child {
        display: inline-block;
    }
    div {
        cursor: pointer;
        /*padding: 1em;*/
    }
    div.parent:hover {
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