<template>
    <div>
        <div v-if="visible" class="col-xs-12 col-sm-6" :class="{hidden: !visible,
            'status-good': status == 'Normal',
            'status-unknown': status == 'Unknown',
            'status-critical': status == 'Critical'}">
            <p>Server # {{ id }}</p>
            <p>Status: {{ status }}</p>
            <p><button class="btn btn-default" :disabled="status == 'Normal'" @click="resetServer">Reset server status</button></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["id", "status"],
        computed: {
            visible() {
                // console.log("visible of server:", this.server);
                let isVisible = !!this.id;
                // console.log("Computing visible of ServerDetails", isVisible);
                return isVisible;
            },
        },
        methods: {
            resetServer() {
                this.status = "Normal";
            }
        }
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
