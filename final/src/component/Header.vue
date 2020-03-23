<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" activeClass="active">
                        <a>Portfolio</a>
                    </router-link>

                    <router-link to="/stocks" tag="li" activeClass="active">
                        <a>Stock</a>
                    </router-link>
                </ul>
                <strong class="navbar-text navbar-right"> Funds {{ funds | currency }} </strong>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" @click="endDay">End Day</a>
                    </li>
                    <li class="dropdown"
                        :class=" { open: isDropdownOpen } "
                        @click="isDropdownOpen = !isDropdownOpen">
                        <a
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false">

                            Save & Load
                            <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
        </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as type from '../store/types';

    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters[type.FUNDS]
            }
        },
        methods: {
            ...mapActions({
                randomPrice: type.ACTIONS_RANDOM_STOCKS,
                getData: type.ACTION_LOAD_DATA
            }),
            endDay() {
                this.randomPrice()
            },
            saveData() {
                const data = {
                    funds : this.$store.getters[type.FUNDS],
                    stockPortfolio : this.$store.getters[type.STOCK_PORTFOLIO],
                    stock : this.$store.getters[type.STOCKS]
                }

                this.$http.put('data.json', data);
            },
            loadData() {
                this.getData()
            }
            // ...mapActions([
            //     type.ACTIONS_RANDOM_STOCKS
            // ]),
            // endDay() {
            //     this[type.ACTIONS_RANDOM_STOCKS]
            // }
        },
    }
</script>