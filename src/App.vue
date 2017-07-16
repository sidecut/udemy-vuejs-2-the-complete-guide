<template>
    <div class="container">
        <div class="row">
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
                            <div class="form-group">
                                <label :for="`fname_${_uid}`">First Name:</label>
                                <input type="text" v-model="firstName" class="form-control" :id="`fname_${_uid}`">
                            </div>
                            <div class="form-group">
                                <label :for="`lname_${_uid}`">Last Name:</label>
                                <input type="text" v-model="lastName" class="form-control" :id="`lname_${_uid}`">
                            </div>
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
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ this.email }}</p>
                        <p>Password: <app-show-password :password="password"></app-show-password></p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShowPassword from "./components/showPassword.vue";

export default {
    components: {
        appShowPassword: ShowPassword,
    },
    data: function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            storeData: false,
            showPassword: false,
        }
    },
    computed: {
        fullName() { return this.firstName + " " + this.lastName; },
    },
    methods: {
        submit() {

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
        this.firstName = "Fred";
        this.lastName = "Smith";
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
</style>
