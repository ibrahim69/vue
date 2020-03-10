<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{ text | toUppercase }} </p>
                <p> {{ text | to-Lowercase }} </p>
                <hr>
                <input type="text" name="" v-model="filterText" >
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">
                        {{ fruit }}
                    </li>
                </ul>
            </div>

            <hr>

            <app-list></app-list>
        </div>
    </div>
</template>

<script>
    import List from './components/List'

    export default {
        data() {
            return {
                text: 'Hello There!',
                fruits: ['Apple', 'Mango', 'Banana', 'Melon', 'Guava'],
                filterText: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                })
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
