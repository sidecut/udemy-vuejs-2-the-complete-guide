<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="chosenComponent='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="chosenComponent='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="chosenComponent='appRed'">Load Red Template</button>
                <hr>
                <component :is="chosenComponent">
                    <div slot="title">Here's a cool photo</div>
                    <img slot="photo" src="http://chromecastbg.alexmeub.com/images/1080_AF1QipNSGlIyQnKXjJjAjELwUb60Ji58mfCGUo0nwxPR.jpg">
                    <p>This is an amazing vista in New Zealand.<br>Visit New Zealand today!</p>
                    <div slot="photo-info">
                        <p>Pekapeka Swamp, Hawke's Bay, New Zealand</p>
                        <p>By Andrew Caldwell</p></div>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                chosenComponent: ""
            }
        }
    }
</script>

<style>
</style>
