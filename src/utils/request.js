// 导入axios
import axios from 'axios'

//创建axios实例对象
const service = axios.create()

//请求拦截器
service.interceptors.request.use()

//响应拦截器
service.interceptors.response.use()

//导出
export default service;
