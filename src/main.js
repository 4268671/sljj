// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

// 模块
import App from "./App";
import router from "./router";
import store from "./models";

// 组件
import Animatecss from "animate.css";

// 样式
import "./assets/w3.css";
import "./assets/my.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App, Animatecss },
  template: "<App/>"
});
