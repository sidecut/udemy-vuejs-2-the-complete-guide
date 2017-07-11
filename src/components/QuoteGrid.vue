<<template>
    <div class="row">
        <app-quote v-for="(quote, idx) in quotes" @click.native="deleteQuote(idx)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
    props: ['quotes'],
    components: {
        appQuote: Quote
    },
    methods: {
        deleteQuote(idx) {
            console.log("Deleting", idx);
            this.quotes.splice(idx, 1);
        }
    }
}
</script>

<style>

</style>
