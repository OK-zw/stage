     <template>
     <div class="home-special">
        <ui-title-box title='折扣活动'></ui-title-box>

        <div class="box">
            <div ref = 'el' class="holder swiper-container">
                <div class="swiper-wrapper">
                    <div class="slide-card swiper-slide" v-for='special in specials' v-if='special.id>6' :key = 'special.id'>
                        <a class="promotion-card">
                            <h2 class="promotion-title">{{ special.title }}</h2>
                            <div class="promotion-duration">
                                <i class="fa fa-clock-o"></i>
                                <span>{{ special.time }}</span>
                                ~
                                <span>{{ special.time2 }}</span>
                            </div>

                            <ul class="promotion-img-ul">
                                <li class="promotion-img-li loading-img">
                                    <img :src= 'special.images' alt="" />
                                </li>
                                <li class="promotion-img-li loading-img">
                                    <img :src="special.images2" alt="" />
                                </li>
                                <li class="promotion-img-li loading-img">
                                    <img :src="special.images3" alt="" />
                                </li>
                            </ul>
                        </a> 
                    </div>

                </div>
            </div>
        </div> 
     </div>
 </template>

 <script>
    import Swiper from 'swiper'
    import Vue from 'Vue'
     export default{
        name: 'home-special',
        data(){
            return{
                specials: []
            }
        },
        methods: {
            getSpecials(){
                this.$http.get('/dt/project/src/api/stage.php', {params: {}}).then(res => {
                    res.data.forEach((item) => {
                        if(item.id > 6){
                            this.specials.push(item)
                            Vue.nextTick(() => {
                                new Swiper(this.$refs.el, {
                                    slidesPerView: 'auto',
                                    pagination: {
                                        // el: '.swiper-pagination',
                                        // clickable: true,
                                    }
                                })
                            })
                        }
                    })
                })
            }
        },
        created(){
            this.getSpecials()  
        }
     }
 </script>


 <style lang = 'scss' scoped>
 .box{
    display:flex;
    .holder{
       /* width: 100%;*/
        height: 1.65rem;
        /*display:flex;*/
        background: #e5e3e3;
        .slide-card{
            width: 2.48rem;
            height: 1.65rem;
            background: #fff;
            margin-left: 0.1rem;
            box-sizing: border-box;
            overflow: hidden;
            box-shadow: 0 1px 2px 0 rgba(71,73,72,.2);
            .promotion-card{
                display: block;
                width: 2.18rem;
                height: 100%;
                padding: 0.23rem 0.15rem 0.15rem;
                position: relative;
                -webkit-tap-highlight-color: rgba(255,255,255,0);
                .promotion-title{
                    color: #4a4e5c;
                    margin: 5px 0;
                    font-size: 0.15rem;
                    line-height: 0.16rem;
                    text-overflow: ellipsis;
                    white-space: normal;
                    -webkit-line-clamp: 1;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    word-break: break-all;
                    height: 0.16rem;
                }
                .promotion-duration{
                    color: #999;
                    display: inline-block;
                    font-size: 0.12rem;
                    line-height: 1.3;
                }
                .promotion-img-ul{
                    margin-top: 0.12rem;
                    display:flex;
                    .promotion-img-li{
                        display: inline-block;
                        position: relative;
                        width: 32%;
                        box-sizing: border-box;
                        margin-right: 2%;
                        img{
                            width: 100%;
                            border: 1px solid #e1e1e1;
                            box-sizing: border-box;
                        }
                    }
                }
            }
        }
    }
}

 </style>