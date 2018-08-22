<template>
    <div class="app-footer">
        <div class="footer-container">
            <ul class="footer-menu">
                <li class="footer-menu-li" v-for='content in contents' :key='content.id'>
                    <a>{{content.title}}</a>
                </li>
            </ul>

            <div class="footer-bottom">
                <small>
                    Powered by
                    <a>91APP</a>
                </small>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
     export default{
        name: 'app-footer',
        data(){
            return {
                contents: [
                    {id: 1, title: '品牌故事'},
                    {id: 2, title: '購物說明'},
                    {id: 3, title: '客服留言'},
                    {id: 4, title: '門市資訊'},
                ]
            }
        }
     }
</script>

<style lang = "scss" scoped>
    .app-footer{
        margin-bottom: 0.4rem;
        width: 3.75rem;
        height: 0.98rem;
        padding:0.08rem 0.2rem;
        border-top: 2px solid #000000;
        background: #fff;
        .footer-menu{
            display: flex;
            width: 3.75rem;
            justify-content: center;
            margin-top: 0.16rem;
            .footer-menu-li{
                display: inline-block;
                border-right: 1px dotted #d4d9de;
                a{
                    display: block;
                    padding: 0 8px;
                    text-decoration: none;
                    line-height: 1.5;
                    margin-left: -5px;
                    color: #666;
                }
            }
        }

        .footer-bottom{
            width: 3.35rem;
            height: 0.34rem;
            margin-top: 0.16rem;
            text-align: center;
        }
    }
</style>