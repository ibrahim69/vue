<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" :style="'cursor : pointer'"
                v-for="server in servers" 
                :key="server.id"
                @click="changeServer(server)">
                Server # {{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        data() {
            return {
                servers: [
                    {
                        id: 1,
                        status: 'Normal'
                    // }
                    },

                    {
                        id: 2,
                        status: 'Critical'
                    },

                    {
                        id: 3,
                        status: 'Error'
                    },

                    {
                        id: 4,
                        status: 'Busy'
                    },

                    {
                        id: 5,
                        status: 'Offline'
                    }

                ]
            }
        },
        methods: {
            changeServer(servers) {
                eventBus.setServer(servers)
            }
        }
    }
</script>

<style>

</style>
