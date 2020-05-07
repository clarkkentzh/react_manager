import request from "../service/request";

export default {
  getDict (params) {
    return request({
      url: `sys/dict/getDictItems/${params.dictCode}`,
      method: 'get',
    })
  },
}