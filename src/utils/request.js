// 导入axios
import axios from 'axios'
import {Message} from 'element-ui'

//创建axios实例对象
const service = axios.create(
 {
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000 // 定义5秒超时
 }
)

//请求拦截器
service.interceptors.request.use()

//响应拦截器
service.interceptors.response.use(response =>{
  //axios默认加了一层data
  const {success,message ,data} = response.data
  //根据success的成功与否决定下面的操作
  if(success){
    return data
  }else{
    //业务已经错误 , 不能进then , 要进catch
    Message.error(message) //提示错误信息
    return Promise.reject(new Error(message))
  }
}, error =>{
  Message.error(error.message) //提示错误信息
  return Promise.reject(error)  // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
})

//导出
export default service;
