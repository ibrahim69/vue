<template>
    <div class="row">
        <app-overview></app-overview>
        <app-details></app-details>
    </div>
</template>

<script>
import ServerDetails from './ServerDetails'
import ServerOverview from './ServerOverview'
export default {
    components : {
        'app-details' : ServerDetails,
        'app-overview' : ServerOverview
    }
}
</script>