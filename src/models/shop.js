// 接口
import { getShopList } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const shop = {
  namespaced: true,

  state: {
    shoplist: []
  },

  getters: {},

  // 异步
  actions: {
    async getShopList({ commit }) {
      const response = await getShopList();
      await console.log(response, "response");
      const { status, message, count, data } = await parseResponse(response);
      await console.log(data, "data");
      if (status > 0) {
        commit({
          type: "changeShopList",
          payload: data
        });
      }
    }
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeShopList(state, { payload }) {
      state.shoplist = payload;
    }
  }
};
