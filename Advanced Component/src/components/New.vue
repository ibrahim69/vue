<template>
    <div>
        <h1>New Vue Component</h1>
        <hr>
        <button @click="counter++">Increase</button>
        <hr>
        <p> {{ counter }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter : 0
        }
    },
    destroyed() {
        console.log('Destroyed!')
    },
    deactivated() {
        console.log('Deactivated!')
    },
    activated() {
        console.log('Activated!')
    }
}
</script>

<style scooped>
    h1 {
        color: red;
    }
</style>