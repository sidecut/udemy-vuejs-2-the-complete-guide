<template>
    <div>
        <div class="form-group">
            <label :for="`fname_${_uid}`">First Name:</label>
            <input type="text" v-model="firstName" class="form-control" :id="`fname_${_uid}`" @input="setFirstName($event)">
        </div>
        <div class="form-group">
            <label :for="`lname_${_uid}`">Last Name:</label>
            <input type="text" v-model="lastName" class="form-control" :id="`lname_${_uid}`" @input="setLastName($event)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
        }
    },
    computed: {
        firstName() {
            return this.value.split(' ')[0];
        },
        lastName() {
            return this.value.split(' ')[1];
        }
    },
    methods: {
        setFirstName($event) {
            this.$emit('input', event.target.value + ' ' + this.lastName);
        },
        setLastName($event) {
            this.$emit('input', this.firstName + ' ' + event.target.value);
        },
    }
}
</script>