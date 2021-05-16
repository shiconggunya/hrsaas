import request from '@/utils/request'

//登录接口封装
export function login(data) {
  //返回一个promise对象
  return request({
    url: '/sys/login',
    method : "post",
    data,  //请求体参数
  })
}

export function getInfo(token) {

}

export function logout() {

}
