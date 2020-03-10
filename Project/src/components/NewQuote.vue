<template>
    <div class="row">
        <form action="">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-sm-offset-3 col-xs-12 form-group">
                <label for="">Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-sm-offset-3 col-xs-12 form-group">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            }
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote)
                // clear last quote
                this.quote = ''
            }
        }
    }
</script>

<style> 

</style>