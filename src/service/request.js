import axios from 'axios'
import { message } from 'antd';
import {
  getToken
} from '../utils/token'

const service = axios.create({
  baseURL: 'http://172.16.77.103:8082/basic-platform',

  timeout: 30000
});

service.interceptors.request.use(
  config => {
    // let token = getToken();
    // if (token) {
    //   config.headers['token'] = getToken()
    // }
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    // 设置请求的语言
    config.headers['locale'] = 'zh_CN'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  res => {
    let data = res.data || {}
    if (data.code === 200 || (!data.code && data)) {
      return data
    } else {
      if (data.code === 510) {
        message.error('登录超时，请重新登录',2)
        // setTimeout(() => {
        //   store.dispatch('user/logout').then(() => {
        //     location.reload()
        //   })
        // }, 1000)
      } else {
        message.error(data.message,2)
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(data)
    }
  },
  error => {
    let msg = ''
    let data = error || {}
    console.dir(error)
    if (error == 'Error: timeout of 5000ms exceeded') {
      msg = '无效请求！请求超时！'
    } else {
      msg = data.message
    }
    message.error(msg,2)
    return Promise.reject(error)
  }
)

export default service
