import Vue from 'vue'
import Vuex from 'vuex'
//整合分割的模块
import test from './modules/test'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  //  如果确认要使用modules切割模块，除了登陆和鉴权信息，其他建议不在此处理其他信息
  state: {
    userInfo: null
  },
  mutations: {
    setUserInfo (state,value) {
      state.userInfo = value;
    }
  },
  modules: {
    test
  }
})

export default store