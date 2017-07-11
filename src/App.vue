<template>
    <div class="container">
        <app-new-quote @quoteAdded="onQuoteAdded"></app-new-quote>
        <app-quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';

export default {
    data: () => ({
        quotes: ["A stitch in time saves nine."],
        maxQuotes: 10,
    }),
    components:
    {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote
    },
    methods: {
        onQuoteAdded(quote) {
            this.quotes.push(quote);
        },
        deleteQuote(index) {
            // console.log("Deleting", index);
            this.quotes.splice(index, 1);
        }
    }
}
</script>

<style>

</style>
