<template>
    <div class="goods-ltem">
        <ul class="ul-box">
            <router-link tag='li' :to="{name: 'commodity-details',params: {goodname: getGoodsItem.goodname}}"  class="li-box" v-for='getGoodsItem in getGoodsItems' :key='getGoodsItem.id'>
                <img :src="getGoodsItem.images" alt="" class="loading-img" />
                <span>{{getGoodsItem.id}}</span>
                <p>{{getGoodsItem.price}}</p>
                <h3>{{getGoodsItem.goodname}}</h3>

                <router-link tag='div' to='' class='li-buttom'>
                    <i v-for='botton in bottons' :key='botton.id' :class='["fa", botton.icon]'></i>
                </router-link>
            </router-link>
        </ul>
    </div>
</template>

<script type="text/javascript">
     export default{
        name: 'goods-ltem',
        props: ['getGoodsItems'],
        data(){
            return {
                bottons: [
                    {id: 1, icon: 'fa-heart-o', },
                    {id: 2, icon: 'fa-cart-plus', },
                ],
            }
        }
    }
</script>

<style lang = "scss" scoped>
    .ul-box{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .li-box{
            margin: 0.1rem 0.0375rem;
            width: 1.8rem;
            height: 3.15rem;
            background: #fff;
            span{
                padding: 0.09rem 0.14391rem;
                background:rgba(255,0,0,.5);
                position: relative;
                top: -1.71rem;
                left:1.44rem;
            }
            img{
                width: 1.8rem;
                height: 1.8rem;
            }
            p{
                font-size: 1.2em;
                color: #ff5353;
                line-height: 1.4em;
                padding: 5px 0;
            }
            h3{
                color: #333; 
                margin: 0; 
                font-size: 14px; 
                line-height: 20px; 
                font-weight: 700;
                text-overflow: ellipsis;
                white-space: normal;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                 -webkit-box-orient: vertical; 
                overflow: hidden;
                height: 40px;
            }
            .li-buttom{
                display:flex;
                width: 1.8rem;
                height: 0.4rem;
                border-top: 1px solid #e1e1e1;
                border-bottom: 1px solid #e1e1e1;
                i{
                    display:block;
                    flex:1;
                    text-align: center;
                    line-height: 0.38rem;
                    border-left: 1px solid #e1e1e1;
                }
            }
        }
    }


</style>