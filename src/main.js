import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 扩展vue
import vueExtend from "@/utils/vue.extend.js";
Vue.use(vueExtend);

// element-ui全局引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// vue-happy-scroll滚动条插件
import HappyScroll from "vue-happy-scroll";
import "vue-happy-scroll/docs/happy-scroll.css";
Vue.use(HappyScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
