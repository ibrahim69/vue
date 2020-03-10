<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myClick:click="clickMe" class="btn btn-danger">Click Me</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myClick': {
                bind(el, binding, vnode) {
                    el.addEventListener(binding.arg, () => binding.value() )
                    console.log(binding.value)
                    console.log(binding.arg)
                }
            }
        },
        methods: {
            clickMe() {
                alert('You Click Me')
            }
        }
    }
</script>

<style>
</style>
