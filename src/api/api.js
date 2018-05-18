// import axios from 'common/js/http.js'
// import { URL } from './config'
var appData = require('../../jsonData/data.json') // 数据模拟
// import qs from 'qs'

/** 首页轮播 **/
export function getHomeBanner () {
  // const url = URL + '/getBanner'
  // return axios.get(url).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  return Promise.resolve(appData.banner)
}

/** 首页获取关键词 **/
export function getHomeKeyWords () {
  // const url = URL + '/getHomeKeyWords'
  // return axios.get(url).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  return Promise.resolve(appData.keysWords)
}

/** 首页导航 **/
export function getHomeNav () {
  // const url = URL + '/getHomeNav'
  // return axios.get(url).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  return Promise.resolve(appData.homeNav)
}

/** 首页文章分页 **/
export function getNewsList () {
  // const url = URL + '/getNewsList'
  // return axios.get(url).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  return Promise.resolve(appData.getNewsList)
}
