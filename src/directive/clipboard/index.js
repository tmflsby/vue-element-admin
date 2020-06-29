import Clipboard from "./clipboard";

const install = (Vue) => {
  Vue.directive("Clipboard", Clipboard);
};

if (window.Vue) {
  window.clipboard = Clipboard;
  window.Vue.use(install);
}

Clipboard.install = install;

export default Clipboard;
