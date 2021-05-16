//配置好了设置cookie(本地缓存)
import {getToken,setToken,removeToken} from '@/utils/auth'
//封装好的登录接口
import {login} from '@/api/user'

const state ={
  token:getToken(), // 设置token初始状态   token持久化 => 放到缓存中

}
const mutations = {
  //设置Token
  setToken(state,token){
    state.token = token; //将数据设置给vuex
    //同步给缓存,进行数据持久化
    setToken(token);
  },

  //删除token
  removeToken(state){
    state.token = null;  //将vuex数据置空
    removeToken();  //同步到缓存,缓存里也要讲token删除
  }
   
}
const actions ={
  async login(context,data){
    //调用api接口
    const result = await login(data) //拿到token
    
    //掉用mutations里的方法修改state
    context.commit('setToken',result)  //设置token

  }
}

export default {
  namespaced: true, 
  state,
  mutations,
  actions,

}