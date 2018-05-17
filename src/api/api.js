import axios from 'common/js/http.js'
import { URL } from './config'
// import qs from 'qs'

/** 首页分类 **/
export function getHome () {
  const url = URL + '/getHome'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}