<template>
    <div class="container">
        <div class="content">
            <div></div>
            <h1><slot name="title"></slot></h1>
            <div><slot></slot></div>
            <div>
                <slot name="photo"></slot>
            </div>
            <div></div>
            <footer><slot name="photo-info"></slot></footer>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    div.container {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center;
    }
    h1 {
        padding-bottom: 0.5em;
    }
    .content {
        display: grid;
        grid-template-columns: 25% 75%;
        /*margin-top: 1em;
        margin-bottom: 1em;*/
        font-size: 150%;
    }
    footer {
        margin-top: 1em;
        font-size: 50%;
    }
    img {
        width: 90%;
    }
</style>