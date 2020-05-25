const vueComponents = {};
vueComponents.install = function(Vue) {
  // 面包屑导航组件
  Vue.component("FiBreadcrumb", () =>
    import("@/components/common/FiBreadcrumb.vue")
  );
};

export default vueComponents;
