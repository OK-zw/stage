<template>
    <div id="app-home">
        <app-home-top></app-home-top>
        <app-home-nav></app-home-nav>
        <app-home-banner></app-home-banner>
        <app-home-new-activity></app-home-new-activity>
        <app-home-special></app-home-special>
        <app-home-discount></app-home-discount>
        <app-home-playbill></app-home-playbill>
        <app-home-goods></app-home-goods>
        <app-home-four></app-home-four>
        <app-home-theme></app-home-theme>
        <app-home-ranking></app-home-ranking>
        <app-home-footer></app-home-footer>

        <app-cut></app-cut>
    </div>
</template>



<script>

import  AppHomeBanner from './HomeBanner.vue'
import  AppHomeNewActivity from './newActivity.vue'
import  AppHomeSpecial from './HomeSpecial.vue'
import  AppHomeDiscount from './HomeDiscount.vue'
import  AppHomePlaybill from './HomePlaybill.vue'
import  AppHomeGoods  from './HomeGoods.vue'
import AppHomeFour from './homeFour.vue'
import AppHomeTheme from './HomeTheme.vue'
import AppHomeRanking from './HomeRanking.vue'
import AppHomeFooter from '../../../components/commons/AppFooter.vue'

  export default {
    name: 'AppHome',
    components: {
        AppHomeBanner,
        AppHomeNewActivity,
        AppHomeSpecial,
        AppHomeDiscount,
        AppHomePlaybill,
        AppHomeGoods,
        AppHomeFour,
        AppHomeTheme,
        AppHomeRanking,
        AppHomeFooter
    }
  }


</script>



<style scoped lang = 'scss'>
    #app-home{
        background: #e5e3e3;
    }

</style>
