<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }} </p>
        <p>Analytics: {{ $route.query.q }} </p>
        <hr>
        <button class="btn-primary btn" @click="confirmed = true">Confirm</button>

        <div style="height: 700px"></div>
        <p id="data">Some Extra Text</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave (to, from, next) {
        if(this.confirmed) {
            next()
        } else {
            if(confirm('Do you really want to leave ?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>