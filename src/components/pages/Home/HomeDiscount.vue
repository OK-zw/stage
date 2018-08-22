<template>
    <div class="home-discount">
        <ui-title-box title = '折價券'></ui-title-box>

        <div class="holder">
            <div class="ecoupon-item">
                <a>
                    <div class="top">
                        <i class="fa fa-shopping-bag"></i>
                        <span>Coupon Sale</span>
                    </div>

                    <div class="main">
                        <span>首次下載折價券</span>
                        <i class="fa fa-apple"></i>
                        <i class="fa fa-barcode"></i>
                    </div>
                    <div class="buttom">
                        <h2>$ 300</h2>
                        <h4>08/01~08/31限量發送</h4>
                        <h3><i class="fa fa-clock-o"></i>限时限量</h3>
                        <span>领取</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
     export default{
        name: 'home-discount'
     }
</script>


<style lang = 'scss' scoped>
    .holder{
        width: 100%;
        height: 1.37rem;
         padding-left: 0.1rem;
         background: #e5e3e3;
         overflow: hidden;
        .ecoupon-item{
            min-width: 2.54rem;
            height: 100%;
            background:url('http://d1du811ltzbmji.cloudfront.net/V2/Content/Images/bg_coupon_mobile_single.png')no-repeat;
            background-size: cover;
            padding: 0.1rem 0.17rem;
            .top{
                i{
                    color: #ff5353;
                }
                span{
                    color:#ccc;
                }
            }

            .main{
                    margin-top: 0.08rem;
                span{
                    font-size: 0.17rem;
                }
            }

            .buttom{
                height: 0.7rem;
                h2{
                    color: #ff5353;
                    font-family: Arial-MT;
                    font-size: 0.46rem;
                    font-weight: bold;
                    height: 0.42rem;
                    line-height: 0.42rem;
                }

                h3{
                    position:relative;
                    top:-0.32rem;
                    right:-73%;
                }
                span{
                    background-color: #ff5353;
                    border-radius: 20px;
                    color: #fff;
                    display: block;
                    font-size: 0.15rem;
                    font-weight: 500;
                    padding-bottom: 5px;
                    padding-top: 5px;
                    text-align: center;
                    width: 1.04rem;
                    height: 0.25rem;
                    line-height: 0.15rem;
                    position:relative;
                    right:-68%;
                    top:-0.32rem;
                }

                h4{
                    display:inline-block;
                    margin-top: 8px;
                }
            }
        }
    }



</style>