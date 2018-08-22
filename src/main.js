// 全局引入
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 根组件

import './stylesheets/main.scss' // 全局通用样式

import computed_rem from './modules/rem' // rem
computed_rem() //计算rem

import './font-awesome-4.7.0/css/font-awesome.min.css' // 字体图标

import axios from 'axios' // axios
Vue.prototype.$http = axios // 挂载请求

import './modules/ui-components' // 引入全局组件

import 'swiper/dist/css/swiper.min.css' // swiper css(轮播图插件)

import router from './router' // 引入路由

import store from './store'  //引入vuex中的store

import md5 from 'js-md5'
Vue.prototype.md5 = md5

Vue.config.productionTip = false

/* eslint-disable no-new */
// 根实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  // 因为根实例里其实仅仅只放入了根组件，所以可以这样指定根实例的模版就是根组件
  template: '<App/>'
})
