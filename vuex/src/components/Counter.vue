<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                increment: types.COUNTER_INCREMENT,
                decrement: types.COUNTER_DECREMENT
            }),
            // increment(by) {
            //     this.$store.dispatch('increment', by)
            // },
            // decrement(by) {
            //     this.$store.dispatch('decrement', by)
            // }
            // increment() {
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     this.$store.state.counter--;
            // }
        }
    }
</script>