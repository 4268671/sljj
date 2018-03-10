// 接口
import { addApply } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const apply = {
  namespaced: true,

  state: {
    loading: false,
    message: ""
  },

  getters: {},

  // 异步
  actions: {
    async addNewApply({ commit }, { payload }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await addApply(payload);
      const { status, message } = await parseResponse(response);
      // await console.log({ status, message });

      if (status > 0) {
        await commit({
          type: "changeMessage",
          payload: message
        });
      } else {
        await console.log(message, "error message");
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
      state.loading = payload;
    },
    changeMessage(state, { payload }) {
      state.message = payload;
    }
  }
};
