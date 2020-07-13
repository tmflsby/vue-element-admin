import permission from "./permission";

const install = (Vue) => {
  Vue.directive("permission", permission);
};

if (window.Vue) {
  window['permission'] = permission;
  window.Vue.use(install);
}

permission.install = install;

export default permission;
