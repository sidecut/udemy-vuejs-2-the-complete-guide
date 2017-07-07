<template>
    <div>
        <div v-if="visible" class="col-xs-12 col-sm-6" :class="{hidden: !visible,
            'status-good': status == 'Normal',
            'status-unknown': status == 'Unknown',
            'status-critical': status == 'Critical'}">
            <p>Server # {{ id }}</p>
            <p>Status: {{ status }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["server"],
        computed: {
            visible() {
                // console.log("visible of server:", this.server);
                let isVisible = !!this.server && this.server.id;
                // console.log("Computing visible of ServerDetails", isVisible);
                return isVisible;
            },
            id() {
                return !!this.server ? this.server.id : void 0;
            },
            status() {
                return !!this.server ? this.server.status : void 0;
            },
        },
    }
</script>

<style scoped>
    .hidden {
        visibility: hidden;
    }
    div {
        padding: 1em 1em 0.5em 1em;
    }
</style>
