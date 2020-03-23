<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as type from '../../store/types'
    import Stock from './Stock';

    export default {
        computed: {
            ...mapGetters({
                stocks: type.STOCK_PORTFOLIO
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>