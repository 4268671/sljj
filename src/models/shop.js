// 接口
import { getShopList } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const shop = {
  namespaced: true,

  state: {
    isLoading: true,
    shoplist: []
  },

  getters: {},

  // 异步
  actions: {
    async getShopList({ commit }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getShopList();
      await console.log(response, "response");
      const { status, message, count, data } = await parseResponse(response);
      await console.log(data, "shop data");
      if (status > 0) {
        commit({
          type: "changeShopList",
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
    changeShopList(state, { payload }) {
      state.shoplist = payload;
    }
  }
};
