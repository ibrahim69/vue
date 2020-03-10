<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <hr>
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <hr>
                <p> {{ selectedComponent }} </p>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <!-- <app-quote>
                    <h2 slot="title"> {{ quoteTitle }} </h2>
                    <p>A wonderfull Quote</p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quotes'
    import New from './components/New'
    import Author from './components/Author'

    export default {
        data: function() {
            return {
                quoteTitle : 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appNew: New,
            appAuthor: Author
        }
    }
</script>

<style>
</style>
