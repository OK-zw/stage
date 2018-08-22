import Vue from 'vue'
import Router from 'vue-router' // 引入路由


// Vue的全局插件或工具往往需要利用Vue.use去注册一下    
Vue.use(Router)

import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Classify/Classify'
import Mine from '../components/pages/Mine/Mine'
import LoginBox from '../components/pages/LoginBox/LoginBox'
import Login from '../components/pages/Login/Login'
import Register from '../components/pages/Register/Register'

import CommodityDetails from '../components/commons/CommodityDetails'

import NotFound from '../components/pages/NotFound/NotFund'


import store from '../store'

// 路由表,设置路由切换的规则
const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/classify', name: 'classify', component: Classify},
    {path: '/mine', name: 'mine', component: Mine},
    {path: '/loginbox', name: 'loginbox', component: LoginBox, children: [
        { // 默认路由
            path: '',
            // component: Login
            redirect: {name: 'login'}
        },
        {
            path: 'login',
            name: 'login',
            component: Login
        },
        {
            path: 'register',
            name: 'register',
            component: Register
        },
    ]},
    {path: '/not-found', name: 'not-found', component: NotFound},
    {path: '/commodity-details/:goodname', name: 'commodity-details', component: CommodityDetails},









    
    {path: '/**', redirect: {name: 'not-found'}, component: NotFound},
]


// 创建路由实例，传入配置项
const router = new Router({
    mode: 'history',
    routes
})


// 全局路由守卫

let need_user_state = ['mine', ] // 需要判断登录状态的路由

router.beforeEach((to, from, next) => {

    // 是否需要判断登入状态
    let need_us = need_user_state.some(name => to.name === name)

    if(need_us && !store.state.commons.user_state){
        next('/loginbox'); return false;
    }

    next()
})


export default router





