// 接口
import { getChannelList } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const channel = {
  namespaced: true,

  state: {
    channelist: []
  },

  getters: {},

  // 异步
  actions: {
    async getChannelList({ commit }) {
      const response = await getChannelList();
      const { status, message, count, data } = await parseResponse(response);
      await console.log(data, "data");
      if (status > 0) {
        commit({
          type: "changeChanneList",
          payload: data
        });
      }
    }
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeChanneList(state, { payload }) {
      state.channelist = payload;
    }
  }
};
