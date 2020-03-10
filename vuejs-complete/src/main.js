// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Home from './components/Home'

// Vue.config.productionTip = false
// Vue.component('app-servers', Home);

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdited', age);
        }
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
  // render: h => h(App)
})
