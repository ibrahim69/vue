<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <br>
                <button @click="loadTemplate = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="loadTemplate = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="loadTemplate = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <p> {{ loadTemplate }} </p>
                <hr>
                <component :is="loadTemplate">
                    <p>This is a Content</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                loadTemplate: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
