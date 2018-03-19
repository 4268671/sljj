// 接口
import { getChannelList } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const channel = {
  namespaced: true,

  state: {
    channelist: [], // 所有栏目数据
    currentChannelid: null // 当前栏目id
  },

  getters: {},

  // 异步
  actions: {
    // 获取栏目列表
    async getChannelList({ commit }) {
      const response = await getChannelList();
      const { status, message, count, data } = await parseResponse(response);
      // await console.log(data, "data");
      if (status > 0) {
        commit({
          type: "changeChanneList",
          payload: data
        });
        localStorage.setItem("channelist", JSON.stringify(data));
      }
    }
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeChanneList(state, { payload }) {
      state.channelist = payload;
    },
    changeCurrentChannelId(state, { payload }) {
      state.currentChannelid = payload;
    }
  }
};
