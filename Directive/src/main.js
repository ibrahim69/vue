import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // cara pertama 
    // el.style.backgroundColor = 'green';
    // el.style.color = 'white';

    // cara kedua
    // el.style.backgroundColor = binding.value;

    // cara ketiga
    // if(binding.arg == 'background') {
    //   el.style.backgroundColor = binding.value;
    // } else {
    //   el.sytle.color = binding.value;
    // }


    // modifier
    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 5000;
    }
    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.sytle.color = binding.value;
      }
    }, delay);
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
