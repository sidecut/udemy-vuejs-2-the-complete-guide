<template>
    <div class="container">
        <header>
            <h1><slot name="title"></slot></h1>
        </header>
        <slot name="photo"></slot>
        <div class="content">
            <slot></slot>
        </div>
        <footer>
            <hr>
            <slot name="photo-info"></slot>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>
    div.container {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center;
    }
    h1 {
        padding-bottom: 0.5em;
    }
    .content {
        margin-top: 1em;
        margin-bottom: 1em;
        font-size: 150%;
    }
    footer > div {
        font-size: 75%;
    }
    img {
        width: 90%;
    }
</style>