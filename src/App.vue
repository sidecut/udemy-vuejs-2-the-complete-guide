<template>
    <div class="container">
        <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
        <app-new-quote @quoteAdded="onQuoteAdded"></app-new-quote>
        <app-quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Ctrl-click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
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
        appNewQuote: NewQuote,
        appHeader: Header
    },
    methods: {
        onQuoteAdded(quote) {
            if (this.quotes.length < this.maxQuotes) {
                this.quotes.push(quote);
            } else {
                alert("You have already reached the maximum number of quotes.  Please delete one before adding another.");
            }
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
