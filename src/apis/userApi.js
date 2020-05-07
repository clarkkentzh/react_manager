import request from "../service/request";

export default {
  login (params) {
    return request({
      url: '/sys/login',
      method: 'post',
      data: params
    })
  },
}