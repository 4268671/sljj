// 接口
import { getChannelTypes } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const article = {
  namespaced: true,

  state: {
    loading: "article default"
  },

  getters: {},

  // 异步
  actions: {
    async getArticles({ commit }, { payload }) {
      commit({
        type: "changeLoading",
        payload: "article loading"
      });
      const response = await getChannelTypes(payload);
      const { status, message, count, data } = await parseResponse(response);
      await console.log({ status, message, count, data }, "parse response");
      await console.log(response, "article response");
      commit({
        type: "changeLoading",
        payload: "article finished"
      });
    }
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeLoading(state, { payload }) {
      state.loading = payload;
    }
  }
};
