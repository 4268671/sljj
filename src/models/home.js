// 接口
import { getHomeData } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const home = {
  namespaced: true,

  state: {
    isLoading: true,
    homeData: []
  },

  getters: {},

  // 异步
  actions: {
    async getHomeData({ commit }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getHomeData();
      const { status, message, count, data } = await parseResponse(response);
      await console.log(data, "home data");
      if (status > 0) {
        commit({
          type: "changeHomeData",
          payload: data
        });
      }
      await commit({
        type: "changeLoading",
        payload: false
      });
    }
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeLoading(state, { payload }) {
      state.isLoading = payload;
    },
    changeHomeData(state, { payload }) {
      state.homeData = payload;
    }
  }
};
