<template>
    <div id="app-home-top">
        <a class="main-menu-btn">
            <i class="fa fa-align-justify ico" aria-hidden="true"></i>
        </a>
        <div class="logo-container">
            <a class="logo-link ">
                <img src="http://diz36nn4q02zr.cloudfront.net/webapi/images/s/ShopOfficialLogo/287/287logo?v=201804261424" alt="" class="logo-img " />
            </a>
        </div>
        <div class="nav-submenu">
            <ul class="nav-submenu-ul">
                <li class="nav-submenu-li" v-for='top in tops' :key='top.id'>
                    <a>
                        <i :class="['fa', top.icon]"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>


<script>
    
    export default {
        name: 'AppHomeTop',
        data(){
            return {
                tops: [
                    {id: 1, icon: 'fa-user-o ico'},
                    {id: 2, icon: 'fa-shopping-cart ico'},
                    {id: 3, icon: 'fa-search ico'},
                ]
            }
        }
    }
</script>


<style scoped lang = 'scss'>
    #app-home-top{
        display: flex;
        height: 0.56rem;
        width: 100%;
        background: #333333;
        .main-menu-btn{
            display: inline-block;
            width: 0.6rem;
            height: 0.56rem;
            text-align: center;
            line-height: 0.56rem;
            .fa-align-justify{
                font-size: 0.16rem;
            }
        }
 
        .logo-container{
            height: 0.56rem;
            padding:6px;
            .logo-link{
                display:block;
                width: 1.2rem;
                height: 0.44rem;
                padding: 6px 0;
                .logo-img{
                    width: 1.1rem;
                }
            }
        }
        
        .nav-submenu{
            width: 50%;
            .nav-submenu-ul{
                display:flex;
            .nav-submenu-li{
                    flex:1;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    height: 0.56rem;
                    .ico{
                        font-size: 0.16rem;
                    }
                }
            }
        } 
    }
</style>