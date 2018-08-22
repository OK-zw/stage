<template>
    <div class="app-home-theme">
        <ui-title-box title='主題推薦' class='title'></ui-title-box>
        <div ref = 'el' class="slider-wrap swiper-container">
            <ul class="slider-wrap-ul swiper-wrapper">
                <router-link tag='li' to='/' class="slider-wrap-li swiper-slide" v-for='theme in themes' :key='theme.id'>
                    <img :src="theme.images" alt=""  />
                    <p>{{ theme.content }}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">

    import Swiper from 'swiper'
    import Vue from 'Vue'

     export default{
        name: 'app-home-theme',
        data(){
            return {
                themes: []
            }
        },
        methods:{
            getTheme(){
                this.$http.get('../../../../static/data3.json').then(res => {
                    this.themes = res.data
                    Vue.nextTick(() => {
                        new Swiper(this.$refs.el, {
                            slidesPerView: 'auto',
                        })
                    })
                })
            }
        },
        created(){
            this.getTheme()
        }
     }
</script>

<style lang = 'scss' scoped>
    .app-home-theme{
        width: 100%;
        padding: 0.12rem 0.1rem;
        background: #fff;
        .title{
            background: #fff;
        }
        .slider-wrap{
            width: 3.55rem;
            height: 1.65rem;
            .slider-wrap-ul{
                display: flex;
                background:#fff;
                .slider-wrap-li{
                    width: 2.36469rem;
                    margin-left: 5px;
                    background:#fff;
                    img{
                        width: 2.36469rem;
                        height: 1.33rem;
                    }
                }
            }
        }
    }

</style>