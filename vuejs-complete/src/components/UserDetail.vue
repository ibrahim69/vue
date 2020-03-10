<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>
            User Name: 
            <!-- this code work because switchName() using method in this.myName -->
            {{ switchName() }} 
        </p>
        <p>User Age: {{ userAge }} </p>
        <button @click="resetName()">Reset Name</button>
        <button @click="resetFn()">Reset Function</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        // props: ['myName'],
        // validate props
        props: {
            myName: {
                type: String
                // required: true
                // https://vuejs.org/v2/api/#props
                // type: Object | Array | Int
                // default() {
                //     return {
                //         name : 'Max'
                //     }
                // }
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('')
            },
            resetName() {
                this.myName = 'Max'
                this.$emit('nameWasReset', this.myName)
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>