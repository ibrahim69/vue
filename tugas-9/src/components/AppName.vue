<template>
    <div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input
                    type="text"
                    id="firstName"
                    class="form-control"
                    :value="firstName"
                    @input="nameChanged(true, false, $event)">
        </div>
        <div class="form-group">
            <label for="middleName">Middle Name</label>
            <input
                    type="text"
                    id="middleName"
                    class="form-control"
                    :value="middleName"
                    @input="nameChanged(false, true, $event)">
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
                    type="text"
                    id="lastName"
                    class="form-control"
                    :value="lastName"
                    @input="nameChanged(false, false, $event)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        nameChanged(isFirst, isMiddle, event) {
            let name = '';

            if(isFirst) {
                name = event.target.value +  ' ' + this.middleName + ' ' + this.lastName;
            } else if(isMiddle) {
                name = this.firstName + ' ' + event.target.value + ' ' + this.lastName;
            } else {
                name = this.firstName + ' ' + this.middleName + ' ' + event.target.value;
            }
            this.value = name;
            this.$emit( 'input', this.value)
        }
    },
    computed: {
        firstName() {
            return this.value.split(' ')[0]
        },
        middleName() {
            return this.value.split(' ')[1]
        },
        lastName() {
            return this.value.split(' ')[2]
        }
    }
}
</script>