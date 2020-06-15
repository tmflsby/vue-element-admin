import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Cookies from "js-cookie";
import ElementUI from "element-ui";
import "normalize.css";
import "./styles/index.scss";
import "./styles/element-variables.scss";
import "./icons";

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
