<template>
    <div class="row">
        <form @keydown.enter.prevent="createNew">
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="createNew" :disabled="!canAdd">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        quote: ""
    }),
    methods: {
        createNew() {
            if (this.canAdd) {
                this.$emit('quoteAdded', this.quote);
            }
            this.quote = "";
        }
    },
    computed: {
        canAdd() {
            return this.quote.trim()
        }
    }
}
</script>

<style>

</style>
