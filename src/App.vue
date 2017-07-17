<template>
    <div class="container">
        <div class="row" v-if="!isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <!-- Exercise 1 -->
                <!-- Create a Signup Form where you retrieve the following Information -->
                <!-- Full Name (First Name + Last Name) -->
                <!-- Mail -->
                <!-- Password -->
                <!-- Store Data? Yes/No -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Signup Form</h4>
                    </div>
                    <div class="panel-body">
                        <form @submit.prevent="submit">
                            <app-full-name v-model="fullName"></app-full-name>
                            <div class="form-group">
                                <label :for="`email_${_uid}`">Email:</label>
                                <input type="email" v-model="email" class="form-control" :id="`email_${_uid}`">
                            </div>
                            <div class="form-group">
                                <label :for="`password_${_uid}`">Password:</label>
                                <input type="password" v-model="password" class="form-control" :id="`password_${_uid}`">
                            </div>
                            <div class="form-group">
                                <label>Store data:</label>
                                <br>
                                <!--<label :for="`storeData_${_uid}`">Store data:</label>-->
                                <div>
                                    <label class="mouse-pointer-wide">
                                        <input type="radio" v-model="storeData" :value="true">
                                        Yes</label>
                                </div>
                                <div>
                                    <label class="mouse-pointer-wide">
                                        <input type="radio" v-model="storeData" :value="false">
                                        No</label>
                                </div>
                            </div>
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Exercise 2 -->
                <!-- Only display the Form if it has NOT been submitted -->
                <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                <!-- Exercise 3 -->
                <!-- Edit the Example from above and create a custom "Full Name" Control -->
                <!-- which still holds the First Name and Last Name Input Field -->
            </div>
        </div>
        <hr v-if="!isSubmitted">
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <div>Thank you for your submission!  Here is the data you submitted:</div>
                        <hr>
                        <div class="submission-grid">
                            <div>Full Name:</div><div>{{ fullName }}</div>
                            <div>Mail:</div><div>{{ email }}</div>
                            <div>Password:</div><div><app-show-password :password="password"></app-show-password></div>
                            <div>Store in Database?</div><div>{{ storeData }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShowPassword from "./components/showPassword.vue";
    import FullName from "./components/FullName.vue";

export default {
    components: {
        appShowPassword: ShowPassword,
        appFullName: FullName,
    },
    data: function () {
        return {
            isSubmitted: false,
            fullName: "",
            email: "",
            password: "",
            storeData: false,
            showPassword: false,
        }
    },
    computed: {
    },
    methods: {
        submit() {
            this.isSubmitted = true;
        },
        passwordMouseDown() {
            this.showPassword = true;
        },
        passwordMouseUp() {
            this.showPassword = false;
        }
    },
    mounted() {
        // * TEMPORARY *
        this.email = "fred@smith.com";
        this.password = "blahdeblah";
        this.storeData = true;
    }
}
</script>

<style>
    .mouse-pointer-wide {
        cursor: pointer;
        width: 100%;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    .mouse-pointer-wide:hover {
        background-color: #FFFAE3;
    }

    .submission-grid {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 25% 75%;
    }
    .submission-grid > div {

    }
</style>
