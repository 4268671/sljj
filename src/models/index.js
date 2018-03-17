/*
 * @Author: Kevin Bolton
 * @Date: 2018-03-09 15:40:56
 * @Last Modified by: Kevin Bolton
 * @Last Modified time: 2018-03-17 14:24:19
 */
import Vue from "vue";
import Vuex from "vuex";

// 加载Vuex
Vue.use(Vuex);

// modules
import { article } from "./article";
import { apply } from "./apply";
import { shop } from "./shop";
import { channel } from "./channel";

export default new Vuex.Store({
  // 模块分组
  modules: {
    article,
    apply,
    shop,
    channel
  }
});
