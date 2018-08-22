<template>
    <div class="app-cut">
        <router-link active-class='active' exact :to='{name: cut.name}' v-for='cut in cuts' :key='cut.id'>
            <i :class='"fa fa-" + cut.icon'></i>
            <span>{{ cut.title }}</span>
        </router-link>
    </div>
</template>


<script type="text/javascript">
    
    export default{
        name: 'app-cut',
        data(){
            return {
                cuts: [
                    {id: 1, title: '首页', icon: 'home', name: 'home'},
                    {id: 2, title: '分类', icon: 'bullseye', name: 'classify'},
                    {id: 3, title: '我的', icon: 'user-circle-o', name: 'mine'},
                ]
            }
        }
    }
</script>


<style scoped lang = 'scss'>
@import '../../stylesheets/_base.scss';
    .app-cut{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.4rem;
        background: #fff;
        border-top: 1px solid #e4e2e2;
        display: flex;
        padding: 0.05rem 0px;
        z-index: 1000;
    }

    i{
        font-size: 0.2rem;
    }

    a{
        flex-grow: 1;
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
        &.active{
            color: $base-color;
        }
    }
</style>

