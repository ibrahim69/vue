<template>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <input type="text" name="" v-model="filterText" >
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixins} from '../fruitMixins'

    export default {
        mixins: [fruitMixins]
    }
</script>

<style>

</style>
