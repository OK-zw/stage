<template>
    <div class="app-home-banner swiper-container" >
        <div class="swiper-wrapper">
            <router-link to='' class="swiper-slide loading-img" v-for='banner in banners' :key='banner.id' v-if='banner.id>3'>
                <img :src='banner.images' alt="" />
            </router-link>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>



<script>

    import Swiper from 'swiper' // 引入swiper.js
    import Vue from 'vue'

    export default{
        name: 'AppHomeBanner',
        data(){
            return {
                banners: []
            }
        },
        methods: {
            getBanners(){
                this.$http.get('/dt/project/src/api/stage.php').then(res => {
                    this.banners = res.data
                    Vue.nextTick(() => {
                        new Swiper('.app-home-banner', {
                            pagination: { el: '.swiper-pagination', clickable: true},
                            autoplay:{
                                disableOnInteraction: false,
                            },
                            loop: true,

                        })
                    })
                })
            }
        },
        created() {
            this.getBanners();
        },
    }  
</script>


<style lang = 'scss' >
    .swiper-container{
        width: 100%;
        height: 2.45rem;
        /*background:#ccc;*/
        .swiper-slide{
            img{
                width: 100%;
                height: 2.45rem;
            }
        }
        .swiper-pagination-bullet{
              width: 0.1rem;
              height: 0.1rem;
              background: #000;
        }   
    }
    

</style>