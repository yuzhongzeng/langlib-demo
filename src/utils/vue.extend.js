import vueDirective from "./vueDirective.js";
import vueComponents from "./vueComponents.js";

const vueExtend = {};
vueExtend.install = function(Vue) {
  // 添加全局组件
  Vue.use(vueComponents);

  // 添加自定义指令
  Vue.use(vueDirective);

  // 	// 添加自定义过滤器
  //   Vue.use(iesFilter);

  // 	// 注入组件
  //   Vue.use(iesMixin);

  // 	// 添加实例方法
  //   Vue.prototype.$ies = iesPrototype;
};

export default vueExtend;
