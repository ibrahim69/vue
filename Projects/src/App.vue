<template>
    <div class="container">
        <!-- <app-header></app-header> -->
        <hr>
        <!-- <app-quote></app-quote> -->
        <hr>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
        <hr>
        <!-- <info-quote></info-quote> -->
    </div>
</template>

<script>
    // import Header from './components/Header'
    // import Quote from './components/Quote'
    import QuoteGrid from './components/QuoteGrid'
    // import InfoQuote from './components/InfoQuote'

    export default {
        data() {
            return {
                quotes: [
                    'Just a Quote to see Something'
                ],
                maxQuotes: 10
            }
        },
        components: {
            // appHeader: Header,
            // appQuote: Quote,
            appQuoteGrid: QuoteGrid,
            // InfoQuote
        }
    }
</script>

<style>
</style>
