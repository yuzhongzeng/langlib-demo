const vueDirective = {};
vueDirective.install = function(Vue) {
  // 测试demo
  Vue.directive("demo", {
    bind(el, binding) {
      el.innerHTML = binding.value;
    }
  });
};

export default vueDirective;
