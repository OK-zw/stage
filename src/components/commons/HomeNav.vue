<template>
    <div class="app-home-nav">
        <ul class="nav-main-menu">
            <li class="nav-main-menu-li" 
            v-for='navList in navLists' :key='navList.id' v-if='navList.id<4'>
               <router-link to='' class="nav-main-menu-link">{{ navList.title }}</router-link> 
            </li>
        </ul>
    </div>
</template>



<script>

    export default {
        name: 'AppHomeNav',
        data(){
            return {
                navLists: []
            }
        },
        methods: {
            getNavLists(){
                this.$http.get('/dt/project/src/api/stage.php',{
                   
                }).then(res => {
                    this.navLists = res.data
                })
            }
        },
        created(){
            this.getNavLists()
        }
    }
</script>


<style lang = 'scss' scoped>
    .app-home-nav{
        width: 100%;
        height: 0.4rem;
        background: #fff;
        .nav-main-menu{
            display: flex;
            height: 0.4rem;
            .nav-main-menu-li{
                flex: 1;
                padding: 0.08rem 0;
                text-align: center;
                .nav-main-menu-link{
                    display:block;
                    width: 100%;
                    height: 100%;
                    line-height: 0.24rem;
                    border-right: 2px dotted #d4d9de;
                }
            }
            .nav-main-menu-li:last-child{
               .nav-main-menu-link:last-child{
                    border: 0 none;
                } 
            }      
        }
    }
</style>