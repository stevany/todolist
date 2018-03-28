import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import VueBlu from 'vue-blu';
import App from './App';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.css';
import 'vue-blu/dist/css/vue-blu.css';

Vue.use(VueMaterial)
Vue.use(VueBlu)
Vue.material.registerTheme({
  default: {
    primary: 'teal',
    accent: 'green'
  }
})

new Vue({
	el:'#app',
	router,
	store,
	render: h => h(App)
})