<template>
    <div>
        <h3>Some User Details</h3>
        <p> User loaded ID {{ $route.params.id }} </p>
        <router-link 
            :to="link"
            class="btn btn-primary"
            tag="button"
            > 
            Edit User 
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: { 
                name : 'userEdit',
                params: {
                    id: this.$route.params.id
                },
                query: {
                    locale: 'en',
                    q: 100
                },
                hash: '#data'
            }
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('Inside a component setup');
        if(true) {
            next()
        } else {
            next(false)
        }
    }
}
</script>