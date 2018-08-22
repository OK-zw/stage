// 全局组件注册

import Vue from 'vue'

import AppHomeTop from '../components/commons/HomeTop.vue'
import AppHomeNav from '../components/commons/HomeNav.vue'
import AppCut from '../components/commons/AppCut.vue'
import AppGoodsItem from '../components/commons/GoodsItem.vue'

//element-ui 插件
import UItitleBox from '../components/commons/UItitleBox.vue'

import { Button, Select,} from 'element-ui'

// collapse 展开折叠
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';






Vue.component('app-home-top', AppHomeTop) // 头部组件
Vue.component('app-home-nav', AppHomeNav) // 导航组件
Vue.component('app-cut', AppCut) //底部页面切换
Vue.component('app-goods-ltem', AppGoodsItem) // 商品组件

Vue.component('ui-title-box', UItitleBox) // title标题

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(CollapseTransition.name, CollapseTransition)





