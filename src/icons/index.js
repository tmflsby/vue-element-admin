import Vue from "vue";
import SvgIcon from "@/components/SvgIcon";

// register globally
Vue.component("SvgIcon", SvgIcon);

/**
 * 用webpack的require.context() 简化你的代码
 * @see https://www.daozhao.com/8323.html
 */
const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);

requireAll(req);
