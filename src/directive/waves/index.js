import waves from './waves';

const install = (Vue) => {
  Vue.directive('waves', waves)
};

if (window.Vue) {
  window.waves = waves;
  // eslint-disable-next-line no-undef
  Vue.use(install);
}

waves.install = install;

export default waves;
