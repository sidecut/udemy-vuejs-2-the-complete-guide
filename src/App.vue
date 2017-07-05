<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <server-status-header></server-status-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item" v-for="index in 5">
                        <server-status></server-status>
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-status-details></server-status-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <server-status-footer></server-status-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import ServerStatusHeader from './ServerStatusHeader.vue';
    import ServerStatus from './ServerStatus.vue';
    import ServerStatusDetails from './ServerStatusDetails.vue';
    import ServerStatusFooter from './ServerStatusFooter.vue';

    export default {
        components: {
            'server-status-header': ServerStatusHeader,
            'server-status': ServerStatus,
            'server-status-details': ServerStatusDetails,
            'server-status-footer': ServerStatusFooter
        }
    }
</script>

<style>

</style>
