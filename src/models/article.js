// 接口
import { getArticleList } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const article = {
    namespaced: true,

    state: {
        articlelist: []
    },

    getters: {},

    // 异步
    actions: {
        async getArticleList({ commit }) {
            const resp = await getArticleList();
            const { status, message, count, data } = await parseResponse(resp);
            await console.log(data)
            if (status > 0) {
                commit({
                    type: 'changeArticleList',
                    payload: data
                })
            }

        }
    },

    // 同步
    /* eslint-disable no-param-reassign */
    mutations: {
        changeArticleList(state, { payload }) {
            state.articlelist = payload
        }
    }
};