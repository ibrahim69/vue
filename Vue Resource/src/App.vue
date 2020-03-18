<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Add New Data</h1>
                <form action="" class="form">
                    <div class="form-group">
                        <label for="namaBarang"> Nama Barang</label>
                        <input type="text" name="" id="namaBarang" class="form-control" v-model="namaBarang">
                    </div>

                    <div id="type-group" class="form-group">
                        <label class="col-form-label" for="">Type:</label>
                        <select name="typeSayur" id="type" class="form-control" v-model="selectedType">
                            <option value="appetizer">Appetizer</option>
                            <option value="main-course">Main Course</option>
                            <option value="dessert">Dessert</option>
                        </select>
                    </div>

                    <button type="button" class="btn btn-primary" id="addData" @click="addNew">Tambah Data</button>
                </form>
                <table id="example" class="display" style="width: 100%;">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>

                <tbody></tbody>

                <tfoot>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </tfoot>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    namaBarang: '',
                    selectedType: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            addNew() {
                // this.resource.saveAlt(this.user)
                console.log(response)
            },
            submit() {
                // this.$http.post('https://vuejs-http-cde5c.firebaseio.com/data.json', this.user)
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //         console.log(response)
                //         this.users.unshift({
                //             id: this.currentUser + 1
                //         })
                //         this.currentUser++
                //     }, error => {
                //         console.log(error)
                //     })

                // this.resource.save({}, this.user)
                this.resource.saveAlt(this.user)
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => {
                //         return response.json()
                //     })
                //     .then(data => {
                //         console.log(data)
                //         const resultArray = []
                //         for (let key in data) {
                //             resultArray.push(data[key])
                //         }
                //         this.users = resultArray
                //     })

                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        console.log(data)
                        const resultArray = []
                        for (let key in data) {
                            resultArray.push(data[key])
                        }
                        this.users = resultArray
                    })
            }
        },
        created() {
            // create a new Resource
            const customAction = {
                saveAlt: {method: 'POST', url: '/food-category.store' },
                getData: { method: 'GET' }
            }
            // this.resource = this.$resource('data.json');
            this.resource = this.$resource('{node}.json', {}, customAction);
        }
    }
</script>

<style>
</style>
