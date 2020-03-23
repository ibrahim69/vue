<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(price: {{ stock.price }} | Quantity {{ stock.quantity }} )</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="quantity"
                        v-model="quantity"
                        :class="{ danger : fundsExceed } "
                        @focus="$event.target.select()">

                        <!--
                            to Set user can't input a decimal number
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                        -->

                    <br>

                    <!-- <p> {{ quantity }} </p> -->
                </div>

                <div class="pull-right">
                    <button 
                        class="btn btn-success"
                        @click="sellStock"
                        :disabled="quantity <= 0 || fundsExceed">
                        {{ fundsExceed ? 'Not Enough' : 'Sell'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border-color: red;
    }
</style>

<script>
    import * as type from '../../store/types';
    import {mapActions} from 'vuex'

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0,
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: type.ACTION_SELL_STOCKS
            }),
            sellStock() {
                const order = {
                    stockId     :   this.stock.id,
                    stockPrice  :   this.stock.price,
                    quantity    :   this.quantity
                }
                // console.log(order)
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        },
        computed: {
            funds() {
                return this.$store.getters[type.FUNDS]
            },
            fundsExceed() {
                return this.stock.quantity < this.quantity 
            }
        },
    }
</script>