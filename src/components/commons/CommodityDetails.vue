 <template>
     <div class="commodity-details">
        <app-home-top></app-home-top>
        <app-home-nav></app-home-nav>
        <div class="good-img-box">
             <img :src="goodnames.images" alt="" class="loading-img" />
        </div>


        <div class="good-referral-box" >
            <p>{{goodnames.goodname}}</p>
            <div class="box">
                <span>超取滿1,000元免運</span>
                <span>海外配送</span>
                <i class="fa fa-heart-o"></i>
            </div>
            <p class="price">{{goodnames.price}}</p>
        </div>

        <div class="good-bottom">
            <div class="add-car">
                <p>加入购物车</p>
            </div>
            <div class="pay">
                <p>立即结账</p>
            </div>
        </div>
     </div>
 </template>

 <script type="text/javascript">
      export default{
        name: 'commodity-details',
        data(){
            return {
                goodItems: [],
                goodnames: []
            }
        },
        methods: {
            getGoodItems(){
                this.$http.get('../../../static/data4.json').then(res => {
                    this.goodItems = res.data
                    
                    let goodname = this.$route.params.goodname

                    this.goodItems.forEach((item) => {
                        if(item.goodname === goodname){
                            this.goodnames = item
                    
                        }
                    })


                })
            },
        },
        created(){
            this.getGoodItems()
        }
      }
 </script>

 <style lang = 'scss' scoped>
    .commodity-details{
        .good-img-box{
            width: 100%;
            height: 3.75rem;
            img{
                width: 100%;
            }
        }
        .good-referral-box{
            width: 3.75rem;
            height: 1.18rem;
            padding: 0.16rem;
            .box{
                margin-top: 0.08rem;
                span{
                    font-size: 12px;
                    line-height: 1;
                    color: #ff9933;
                    border: 1px solid #ff9933;
                    padding: 2px 6px;
                    min-width: 40px;
                    box-sizing: border-box;
                    text-align: center;
                    margin-right: 0.08rem;
                }
                i{
                    margin-left: 1.2rem;
                    color: #ff5353;
                    font-size: 1.33333333em;
                } 
            }

            .price{
                color: #ff5353;
                font-size: 1.5em;
                margin-top:0.16rem;
            } 
            
        }

        .good-bottom{
            justify-content: space-around;
            align-items: center;
            display: flex;
            position: fixed;
            bottom:0;
            width: 3.75rem;
            height: 0.68rem;
            .add-car,.pay{
                width: 1.695rem;
                height: 0.44rem;
                text-align: center;
                background: #f93;
                border-radius: 0.08rem;
                p{
                    line-height: 0.44rem;
                    color: #fff;
                    font-size: 0.18rem;
                }
            }
            .pay{
                background: #ff5353;
            }
        }
    }



 </style>