// 接口
import { getProductListByid } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const product = {
  namespaced: true,

  state: {
    isLoading: true,
    productlist: []
  },

  getters: {},

  // 异步
  actions: {
    async getProductListByid({ commit }, { payload }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getProductListByid(payload);
      const { status, message, count, data } = await parseResponse(response);
      if (status > 0) {
        await commit({
          type: "changeProductList",
          payload: data
        });
        await commit({
          type: "changeLoading",
          payload: false
        });
      }
    }
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeLoading(state, { payload }) {
      state.isLoading = payload;
    },
    changeProductList(state, { payload }) {
      state.productlist = payload;
    }
  }
};
