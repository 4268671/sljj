import { getChannelTypes } from "@/services/api";

export const user = {
  namespaced: true,

  state: {
    loading: "user default"
  },

  getters: {},

  // 异步
  actions: {
    async getUsers({ commit }, { payload }) {
      await console.log(payload, "payload");
      commit({
        type: "changeLoading",
        payload: "user loading"
      });
      const response = await getChannelTypes({
        sid: "59607e3c682e090ca074ecfd"
      });
      await console.log(response, "user response");
      commit({
        type: "changeLoading",
        payload: "user finished"
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
