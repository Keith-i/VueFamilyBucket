import config from '../config/index'
import axios from 'axios'
import store from '../store'
import Vue from 'vue'
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
import { Message } from 'element-ui'

axios.interceptors.request.use(
  config => {
    // config.headers.Authorization = '000'
    const token = localStorage.getItem('IBS:token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return window.Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return window.Promise.resolve(error.response)
  }
)

function checkStatus(response) {
  if ([200, 304].indexOf(response.status) !== -1) {
    return response.data
  }
  return Promise.reject(response.data.message)
}

function checkCode(res) {
  if (res.resultcode === 200) {
    return res
  }
  if (res.code === 20001 || res.code === 20003) {
    Message.error(res.message)
    localStorage.removeItem('IBS:token')
    window.setTimeout(() => {
      window.location.href = './index.html'
    }, 3000)
  }
  return res
}

const throwErr = err => {
  throw err
}

export default (api, data = {}, method = 'POST') => {
  let hotelGroupCode = ''
  let hostId = ''
  let baseData = Object.assign({}, data)
  // https://sit1.utuapp.cn/callcome/console/
  return axios({
    method,
    baseURL: config.baseUrl + api,
    data: baseData
  })
    .then(checkStatus)
    .then(checkCode)
    .catch(throwErr)
}
