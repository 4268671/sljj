/*
 * @Author: Kevin Bolton
 * @Date: 2018-03-09 15:40:56
 * @Last Modified by: Kevin Bolton
 * @Last Modified time: 2018-03-10 18:26:37
 */
import Vue from "vue";
import Vuex from "vuex";

// 加载Vuex
Vue.use(Vuex);

// modules
import { article } from "./article";
import { apply } from "./apply";

export default new Vuex.Store({
  // 模块分组
  modules: {
    article,
    apply
  }
});
