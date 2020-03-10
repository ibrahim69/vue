<template>
    <div>
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
    export default {
        data() {
            return {
                fruits: ['Apple', 'Mango', 'Banana', 'Melon', 'Guava'],
                filterText: ''
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                })
            }
        }
    }
</script>

<style>

</style>
