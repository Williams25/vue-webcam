import Vue from 'vue'
import App from './App.vue'
import Camera from './components/Camera.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.component('app-camera', Camera)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
