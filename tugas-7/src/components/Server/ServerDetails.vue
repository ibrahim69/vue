<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server.id">
            <p>Server  #{{ server.id }} selected, Status: {{ server.status }} </p>
            <hr>
        </div>
        <p v-else>Server Details are currently not updated</p>
    </div>

</template>

<script>
    import { eventBus } from "../../main";

    export default {
        data() {
            return {
                server: {}
            }
        },
        created() {
            eventBus.$on('serverWasChange', (server) => {
                this.server = server
            })
        }
    }
</script>

<style>

</style>
