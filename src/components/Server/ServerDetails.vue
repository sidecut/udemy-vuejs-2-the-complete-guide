<template>
    <div class="col-xs-12 col-sm-6" :class="{hidden: !visible}">
        <p>Server #: {{ id }}</p>
        <p>Status: {{ status }}</p>
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
</style>
