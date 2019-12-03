import Vue from 'vue'
import toStringDate from 'xe-utils/methods/date/toDateString'
import axios from 'axios'
import Qs from 'qs'
import api from '~/plugins/api'

function serializeformQuery (requestParams) {
  let query = ''
  for (const param in requestParams) {
    if (param !== undefined && param !== '') {
      query += param + '=' + requestParams[param] + '&'
    }
  }
  if (query !== '') {
    query = query.substring(0, query.length - 1)
  }
  return query
}
const BASICURL = 'http://192.168.80.102:8686/quasarserver'
const PROXYDCODEURL = BASICURL + '/common/proxyDecode'
const minixs = {
  data () {
    return {
      phoneReg: /^1[345789]\d{9}$/,
      api: api
    }
  },
  computed: {},
  watch: {},
  methods: {
    isIE () {
      const userAgent = navigator.userAgent
      const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
      const isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
      const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
      // console.log('userAgent', userAgent)
      if (isIE || isEdge || isIE11) {
        // this.$message.error('系统暂不支持ie浏览器，推荐使用chrome进行访问')
        alert('系统暂不支持ie浏览器，推荐使用chrome进行访问')
        return false
      }
    },
    jump (to) {
      if (this.$router) this.$router.push(to)
    },
    back () {
      if (this.$router) this.$router.go(-1)
    },
    getValidateCode () {
      // const basicArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      const basicArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      const basiCode = ['Z', 'H', '1', '8']
      basiCode.map((itm, idx) => {
        console.log(itm)
        const rdmIdx = Math.floor(Math.random() * 100) % basicArray.length
        basiCode[idx] = basicArray[rdmIdx]
      })
      return basiCode.join('')
    },
    chineseReg (val) {
      const reg = /^[\u4e00-\u9fa5]+$/g
      return reg.test(val)
    },
    faxNumReg (val) {
      const reg = /^(\d{3,4}-)?\d{7,8}$/
      return reg.test(val)
    },
    mobileReg (mobile) {
      const reg = /^1[3|4|5|8|9][0-9]\d{4,8}$/
      return reg.test(mobile)
    },
    redirect (to) {
      if (this.$router) this.$router.replace(to)
    },
    jump (to) {
      if (this.$router) this.$router.push(to)
    },
    back () {
      if (this.$router) this.$router.go(-1)
    },
    toStringDate: toStringDate,
    // erp 专用
    requestDecode (reqUrl, params, type, charset = 'gbk', outCharset = 'gbk') {
      const param = serializeformQuery(params)
      const reqBody = {
        reqUrl: reqUrl,
        params: param,
        type: type,
        charset: charset,
        outCharset: outCharset
      }
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: PROXYDCODEURL,
          params: reqBody,
          paramsSerializer: (params) => {
            return Qs.stringify(params, { arrayFormat: 'brackets' })
          }
        }).then(resp => {
          if (resp.status === 200) {
            resolve(resp.data.body ? JSON.parse(resp.data.body) : resp.data)
          } else {
            console.log('error')
            console.log(resp)
            reject(new Error(resp.data.msg || '网络异常'))
          }
        }).catch(err => {
          console.log('error')
          console.log(err)
          reject(err)
        })
      })
    },
    request (reqUrl, params, type, mock = false) {
      const param = serializeformQuery(params)
      const reqBody = {
        reqUrl: reqUrl,
        params: param,
        type: type,
        charset: 'utf8'
      }
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: mock ? reqUrl : PRINTERURL,
          params: reqBody,
          paramsSerializer: (params) => {
            return Qs.stringify(params, { arrayFormat: 'brackets' })
          }
        }).then(resp => {
          if (resp.status === 200) {
            // console.log('resp:>.' , resp)
            resolve(resp.data)
          } else {
            console.log('error')
            console.log(resp)
            reject(new Error(resp.statusText || '网络异常'))
          }
        }).catch(err => {
          console.log('error')
          console.log(err)
          reject(err.message || '网络异常')
        })
      })
    }
  }
}

Vue.mixin(minixs)
