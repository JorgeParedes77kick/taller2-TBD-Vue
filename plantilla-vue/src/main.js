import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import VueResource from 'vue-resource';
//cada ves que se agrege una nuevo .vue 
import Actors2 from "./Actors2.vue";

require("./styles/style.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/actors', component: Actors},
  //lo mismo que lo anterior para agregar rutas
  {path:'/actors2', component: Actors2}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
