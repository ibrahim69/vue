<template>
    <div>
        <p>Another Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ clickCount }}</p>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import * as types from '../store/types'

    export default {
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                clickCount: types.CLICK_COUNTER
            })
        },
    }
    
</script>