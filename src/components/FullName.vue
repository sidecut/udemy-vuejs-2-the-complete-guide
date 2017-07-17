<template>
    <div>
        <div class="form-group">
            <label :for="`fname_${_uid}`">First Name:</label>
            <input type="text" v-model="firstName" class="form-control" :id="`fname_${_uid}`" @input="onInput">
        </div>
        <div class="form-group">
            <label :for="`lname_${_uid}`">Last Name:</label>
            <input type="text" v-model="lastName" class="form-control" :id="`lname_${_uid}`" @input="onInput">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        onInput() {
            this.$emit('input', this.firstName + ' ' + this.lastName);
        }
    }
}
</script>