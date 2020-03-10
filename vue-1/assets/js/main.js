var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        searchme : 'Nothing yet',
        visjson : true,
        count  : 4,
        items: [
            {
                todo: "write code"
            }, {
                todo: "create Website"
            }, {
                todo: "load Content"
            }
        ]
    },
    created: function () {
        this.count++;
        console.log('Instance Created ' + this.message)
    },
    ready: function () {
        console.log('Instance Ready ' + this.message)
    }, methods : {
        vjson: function() {
            console.log('clicked');
            // hide or show element
            this.visjson ^= true;
                
            this.message = " updated : " + this.count;
            this.count++;
        }
    }
})

app.message = "Hello<br>World"

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})

// app3.seen = false

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text : 'Learn JavaScript' },
            { text : 'Learn Vue' },
            { text : 'Build something awesome' }
        ]
    }
})

// app4.todos.push({text : 'new item'})

var app5 = new Vue ({
    el: "#app-5",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage : function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue ({
    el: "#app-6",
    data: {
        message: "Hello Vue"
    }
})

// Define a new component called todo-item
Vue.component('todo-item', {
     // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue ({
    el: "#app-7",
    data: {
        groceryList: [
            { id : 0, text: 'Vegetables' },
            { id : 1, text: 'Cheese' },
            { id : 2, text: 'Whatever else human are supposed eat' }

        ]
    }
})

var obj = {
    foo : 'bar'
}

Object.freeze()

new Vue ({
    el: "#app-8",
    data: obj
})

var app9 = new Vue ({
    el: "#app-9",
    data: {
        a: 1
    },
    created: function() {
        console.log('a is: ' + this.a)
    }
})
