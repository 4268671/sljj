import request from "@/utils/axios";
// 常量
import { API_DOMAIN } from "@/utils/consts";

// [GET]
// 获取栏目隐射表
export async function getChannelTypes(params = {}) {
  return request(`${API_DOMAIN}/api/front/allchanneltype`, {
    params
  });
}
// 获取文章列表
export async function getArticleList(params = {}) {
  return request(`${API_DOMAIN}/api/front/allarticles`, {
    params
  });
}
// 获取实体店铺列表
export async function getShopList(params = {}) {
  return request(`${API_DOMAIN}/api/server/shops`, {
    params
  });
}
// 获取导航栏目列表
export async function getChannelList(params = {}) {
  return request(`${API_DOMAIN}/api/front/allchannels`, {
    params
  });
}

// [POST]
// 添加加盟申请
export async function addApply(params = {}) {
  return request(`${API_DOMAIN}/api/front/addapply`, {
    method: "POST",
    body: params
  });
}
