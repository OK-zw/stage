<template>
    <div class="not-found">
        <div class="top">
            <a @click='blck' class="fa fa-arrow-left"></a>
        </div>
        <div class="content">
            <h4>访问的页面不存在<router-link to='/'>回到首页</router-link></h4>
        </div>
    </div>
</template>

<script>
     export default{
        name: 'not-found',
        methods: {
            blck(){
                this.$router.go(-1)
            }
        }
     }
</script>

<style lang = 'scss' scoped>
    .not-found{
        display: flex;
        flex-direction: column;
        .top{
            width: 100%;
            height: 0.65rem;
            padding-left: 0.3rem;
            a{
                line-height: 0.65rem;
                font-size: 0.19rem;
            }
        }
        .content{
            flex:1;
            text-align: center;
            line-height: 1.8rem;
            background: #ccc;
            color: #000;
            font-size: 0.18rem  ;
            h4{
                a{
                    font-size: 0.18rem;
                    color:blue;
                    font-weight: bold;
                }
            }
        }
    }


</style>