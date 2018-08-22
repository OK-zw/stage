<template>
    <div class="goods-list">
        <div class="goods-list-box" v-for='(goodsList, i) in goodsLists' :key='i'>
            <a class="img-top loading-img">
                <img :src="goodsList.images1" alt="" />
            </a>
            <a class="img-buttom">
                <ul>
                    <li>
                        <img :src="goodsList.images2" alt="" class="loading-img" />
                        <p>{{ goodsList.goodsname1 }}</p>
                        <span>{{ goodsList.price1 }}</span>
                    </li>
                    <li>
                        <img :src="goodsList.images3" alt="" class="loading-img"/>
                        <p>{{ goodsList.goodsname2 }}</p>
                        <span>{{ goodsList.price2 }}</span>
                    </li> 
                    <li>
                        <img :src="goodsList.images4" alt="" class="loading-img"/>
                        <p>{{ goodsList.goodsname3 }}</p>
                        <span>{{ goodsList.price3 }}</span>
                    </li>
                </ul>
            </a>
        </div>
    </div>
</template>

<script type="text/javascript">
     export default{
        name: 'goods-list',
        data(){
            return {
                goodsLists: []
            }
        },
        methods: {
            getgoodsLists(){
                this.$http.get('/static/data.json').then(res => {
                    this.goodsLists = res.data
                })
            }
        },
        created(){
            this.getgoodsLists()
        },
     }
</script>

<style lang = 'scss' scoped>
    .goods-list{
        width: 100%;
        height: 2.71266rem;
        .img-top{
            display: block;
            height: 1.10938rem;
            img{
                width: 100%;
                height: 1.10938rem;
            }
        }

        .img-buttom{
            ul{
                margin: 8px 0;
                display: flex;
                li{
                    margin-right: 6px;
                    img{
                        width: 1.14328rem;
                        height: 1.14328rem;
                    }
                    span{
                        color: #ff5353;
                        font-size: 0.14rem;
                    }
                }
            }
        }
    }
</style>