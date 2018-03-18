// 接口
import { getBrandList } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const brand = {
  namespaced: true,

  state: {
    isLoading: true,
    brandlist: []
  },

  getters: {},

  // 异步
  actions: {
    async getBrandList({ commit }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getBrandList();
      const { status, message, count, data } = await parseResponse(response);
      await console.log(data, "brand data");
      if (status > 0) {
        commit({
          type: "changeBrandList",
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
    changeBrandList(state, { payload }) {
      state.brandlist = payload;
    }
  }
};
