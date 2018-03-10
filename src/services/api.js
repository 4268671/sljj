import request from '@/utils/axios';
// 常量
import { API_DOMAIN } from '@/utils/consts';

// [GET]
// 获取栏目隐射表
export async function getChannelTypes(params = {}) {
  return request(`${API_DOMAIN}/api/front/allchanneltype`, {
    params
  });
}
