<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5" :key="index">
                {{ message }} {{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Server # '
        }
    }
}
</script>