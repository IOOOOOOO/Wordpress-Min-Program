let Fly = require('../static/lib/flyio.min.js')
let fly = new Fly

/* 添加请求拦截器 */
fly.interceptors.request.use((request) => {
  /* 给所有请求添加自定义header */
  // request.headers['xxx'] = 'xxx'
  wx.showLoading({
    title: '加载中',
  })
  return request
})
 
/* 添加响应拦截器，响应拦截器会在then/catch处理之前执行 */
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()

    return response.data
  },
  (err) => {
    wx.hideLoading()
    //发生网络错误后会走到这里
    return Promise.resolve(err)
  }
)

export default fly
