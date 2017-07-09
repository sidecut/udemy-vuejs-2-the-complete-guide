<template>
    <div class="container">
        <header>
            <h1><slot name="title"></slot></h1>
        </header>
        <div class="content">
            <slot></slot>
        </div>
        <slot name="photo"></slot>
        <footer>
            <slot name="photo-info"></slot>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>
    div.container {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center;
        font-family: "Franklin Gothic Book";
    }
    h1 {
        /*margin-bottom: 1em;*/
    }
    .content {
        margin-top: 1em;
        margin-bottom: 1em;
        font-size: 150%;
    }
    footer > div {
        margin-top: 1em;
        font-size: 75%;
    }
    img {
        width: 90%;
    }
</style>