<template>
    <div class="container">
        <header>
            <app-header></app-header>
        </header>
        <hr>
        <servers></servers>
        <hr>
        <footer>
            <app-footer></app-footer>
        </footer>
    </div>
</template>

<script>
import Header from './components/Header';
import Servers from './components/Servers'
import Footer from './components/Footer';

export default {
    components: {
        appHeader : Header,
        Servers,
        'app-footer' : Footer
        // Penamaan yg tidak sesuai antara component dan di html akan menyebabkan errors walaupun
        // contoh error
        // Component : {
                // servers
        // }
        //  HTML
        //  <app-servers></app-servers>
    }
}
</script>

<style>

</style>
