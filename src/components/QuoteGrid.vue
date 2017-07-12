<<template>
    <div class="row">
        <app-quote v-for="(quote, idx) in quotes" @click.native="deleteQuote($event, idx)">
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
        deleteQuote($event, idx) {
            console.log("Click", $event, idx);
            if ($event.ctrlKey) {
                console.log("Deleting", idx);
                this.$emit("deleteQuote", idx);
            }
        }
    }
}
</script>

<style>

</style>
