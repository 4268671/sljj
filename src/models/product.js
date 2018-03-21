// 接口
import { getProductListByid, getProductDetail } from "@/services/api";
// 方法
import { parseResponse } from "@/utils/parse";

export const product = {
  namespaced: true,

  state: {
    isLoading: true,
    productlist: [], // 产品列表数据
    productDetail: {} // 产品详细内容数据
  },

  getters: {},

  // 异步
  actions: {
    // 根据栏目id获取产品列表
    // payload: {id[栏目id], currentPage[页码], pageSize[页条数], pageTotal[总条数]}
    // pageSize 可等于pageTotal
    async getProductListByid({ commit }, { payload }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getProductListByid(payload);
      const { status, message, count, data } = await parseResponse(response);
      if (status > 0) {
        console.log(data, "data");
        await commit({
          type: "changeProductList",
          payload: data
        });
      }
      await commit({
        type: "changeLoading",
        payload: false
      });
    },
    // 根据产品id获取产品详细内容
    // payload: {id[产品id]}
    async getProductDetail({ commit }, { payload }) {
      await commit({
        type: "changeLoading",
        payload: true
      });
      const response = await getProductDetail(payload);
      const { status, message, count, data } = await parseResponse(response);
      if (status > 0) {
        await commit({
          type: "changeProductDetail",
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
    changeProductList(state, { payload }) {
      state.productlist = payload;
    },
    changeProductDetail(state, { payload }) {
      state.productDetail = payload;
    }
  }
};
