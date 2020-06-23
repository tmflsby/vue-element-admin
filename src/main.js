import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Cookies from "js-cookie";
import ElementUI from "element-ui";
import "normalize.css";   // a modern alternative to CSS resets
import "./styles/index.scss";   // global css
import "./styles/element-variables.scss";
import "./icons";   // icon
import * as filters from "./filters";   // global filters
import "./permission"   // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock');
  mockXHR();
}

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
