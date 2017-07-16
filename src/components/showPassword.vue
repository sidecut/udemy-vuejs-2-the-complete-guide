<template>
    <span>
        <span class="glyphicon" title="Click to see password"
              :class="{'glyphicon-eye-open': !showPassword, 'glyphicon-eye-close': showPassword}"
              @mousedown="showPassword = true"
              @mouseout="showPassword = false"
              @mouseup="showPassword = false"
              role="button"></span>
        <span v-show="showPassword">{{ password }}</span>
    </span>
</template>

<script>
export default {
    props: ['password'],
    data() {
        return {
            showPassword: false,
        }
    }
}
</script>

<<style>
    .glyphicon {
         padding-left: 0.5em;
         padding-right: 0.5em;
    }
    /* .glyphicon:hover {
                background-color: #FFFAE3;
    } */
</style>
