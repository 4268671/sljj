// 接口
import { getArticleListByid, getArticleDetail } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const article = {
  namespaced: true,

  state: {
    isLoading: true, // loading状态
    articlelist: [], // 文章列表数据
    articleDetail: {} // 文章详细内容数据
  },

  getters: {},

  // 异步
  actions: {
    // 根据栏目id获取文章列表
    // payload: {id[栏目id], currentPage[页码], pageSize[页条数], pageTotal[总条数]}
    // pageSize 可等于pageTotal
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
    },
    // 根据文章id获取文章详细内容
    // payload: {id[文章id]}
    async getArticleDetail({ commit }, { payload }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getArticleDetail(payload);
      const { status, message, count, data } = await parseResponse(response);
      if (status > 0) {
        await commit({
          type: "changeArticleDetail",
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
    },
    changeArticleDetail(state, { payload }) {
      state.articleDetail = payload;
    }
  }
};
