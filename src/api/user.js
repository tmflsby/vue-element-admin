import request from "@/utils/request";

export const login = (data) => request({
  url: '/vue-element-admin/user/login',
  method: 'post',
  data
});

export const getInfo = (token) => request({
  url: '/vue-element-admin/user/info',
  method: 'get',
  params: { token }
});

export const logout = () => request({
  url: '/vue-element-admin/user/logout',
  method: 'post'
});
