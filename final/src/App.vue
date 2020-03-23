<template>
    <div class="container">
        <appHeader></appHeader>
        <div class="row">
            <div class="col-md-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
    // import Home from './component/Home'
    import Header from './component/Header'
    
    import * as type from './store/types'

    export default {
        components: {
            // appHome: Home,
            appHeader: Header
        },
        created() {
            this.$store.dispatch(type.ACTIONS_INIT_STOCKS)
        }
    }
</script>

<style scoped>

    body {
        padding: 30px;
    }

    .slide-enter-active {
        animation: slide-in .5s ease-out forwards;
    }

     .slide-leave-active {
        animation: slide-out .8 cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }

        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

</style>
