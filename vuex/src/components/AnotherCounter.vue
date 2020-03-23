<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 50, duration: 1000 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 100, duration: 500 }) ">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import * as types from '../store/types'

    export default {
        methods: {
            // short code
            ...mapActions({
                asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
                asyncDecrement: types.COUNTER_DECREMENT_ASYNC
            }),
            // increment(by) {
            //     this.$store.dispatch(increment)
            // },
            // decrement(by) {
            //     this.$store.dispatch(decrement)
            // }
            // long code
            // increment() {
            //     this.$store.commit('increment')
            // },
            // decrement() {
            //     this.$store.commit('decrement')
            // }
        }
    }
</script>