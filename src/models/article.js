// 接口
import { getArticleListByid } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const article = {
  namespaced: true,

  state: {
    isLoading: true,
    articlelist: []
  },

  getters: {},

  // 异步
  actions: {
    async getArticleListByid({ commit }, { payload }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getArticleListByid(payload);
      const { status, message, count, data } = await parseResponse(response);
      if (status > 0) {
        await commit({
          type: "changeArticleList",
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
    changeArticleList(state, { payload }) {
      state.articlelist = payload;
    }
  }
};
