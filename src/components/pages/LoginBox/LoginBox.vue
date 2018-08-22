<template>
    <div class="app-login-box">
        <a class="top">
            <img src="https://diz36nn4q02zr.cloudfront.net/webapi/images/s/ShopOfficialLogo/287/287logo?v=201804261424" />
        </a>

        <app-home-nav></app-home-nav>

        <div class="content">
            <div class="btn-tab">
                <router-link active-class='active' replace :to= "{name: 'login'}">登入</router-link>
                <router-link active-class='active' replace :to= "{name: 'register'}">注册</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
     export default{
        name: 'app-login-box'
     }
</script>


<style lang = 'scss' scoped>

    .app-login-box{
        display:flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .top{
            display: block;
            height: 0.56rem;
            width: 100%;
            padding: 0.06rem 0;
            background: #333;
            img{
                width: 1.10rem;
                height: 0.44rem;
                position: relative;
                left:0.6rem;
            }
        }

        .content{
            display:flex;
            flex:1;
            flex-direction: column;
            .btn-tab{
                display: flex;
                flex:1;
                flex-wrap: wrap;
                justify-content: space-between;
                a{
                    display:block;
                    flex:1;
                    text-align: center;
                    max-height: 0.38rem;
                    line-height: 0.38rem;
                    font-size: 0.18rem;
                    background: #ccc;
                    border-top: 2px solid #fff;
                    &.active{
                        border-top: 2px solid orange;
                        background: #fff;
                    }
                }
            }
        }
    }

</style>