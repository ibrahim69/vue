<template>
    <div>
        <div
            id="yes"
            @click="storeData(true)"
            :class=" { active: value }">
            Yes
        </div>

        <div
            id="no"
            @click="storeData(false)"
            :class=" { active: !value }">
            No
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            storeData(isYes) {
                this.$emit('input', isYes );
            }
        }
    }
</script>

<style scoped>
#yes,
#no {
    width: 40px;
    height: 20px;
    background-color: lightgrey;
    padding: 2px;
    display: inline-block;
    box-sizing: cyestent-box;
    cursor: pointer;
    text-align: center;
}

#yes:hover,
#yes.active {
    background-color: lightgreen;
}

#no:hover,
#no.active {
    background-color: lightcoral;
}
</style>