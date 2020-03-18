<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{ text | toUppercase | reverse }} </p>
                <p> {{ text | to-Lowercase }} </p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input type="text" name="" v-model="filterText" >
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">
                        {{ fruit }}
                    </li>
                </ul>
            </div>

            <br>

            <app-list></app-list>
        </div>
    </div>
</template>

<script>
    import List from './components/List'
    import {fruitMixins} from './fruitMixins'

    export default {
        data() {
            return {
                text: 'Hello There!'
            }
        },
        mixins: [fruitMixins],
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
