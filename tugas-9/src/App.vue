<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <!-- Exercise 1 -->
            <!-- Create a Signup Form where you retrieve the following Information -->
            <!-- Full Name (First Name + Last Name) -->
            <!-- Mail -->
            <!-- Password -->
            <!-- Store Data? Yes/No -->
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Sign Up</h1>
                    <hr>
                    <div class="form-group">
                        <app-name v-model="userData.fullName"></app-name>
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email = $event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.trim="userData.password">
                    </div>

                    <div class="form-group">
                        <label for="">Store Data</label>
                        <app-store-data v-model="dataStore"></app-store-data>
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
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name:  {{ userData.fullName }} </p>
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }} </p>
                        <p>Store in Database?: {{ dataStore }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from './components/StoreData'
    import FullName from './components/AppName'

    export default {
        data() {
            return {
                userData: {
                    fullName: 'Ibrahim Abdul Majid',
                    email: '',
                    password: ''
                },
                dataStore: false,
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true
            }
        },
        components: {
            appStoreData: Store,
            appName: FullName
        }
    }
</script>

<style>
</style>
