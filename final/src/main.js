// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/routers';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueResource);

// Buat URL Request
Vue.http.options.root = 'https://stocktrade-d023b.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
