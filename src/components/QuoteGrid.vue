<<template>
    <div class="row">
        <app-quote v-for="(quote, idx) in quotes" @clicked="onClicked(idx)">
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
        onClicked(idx) {
            console.log("Clicked ", idx, this.quotes[idx]);
            this.quotes.splice(idx, 1);
        }
    }
}
</script>

<style>

</style>
