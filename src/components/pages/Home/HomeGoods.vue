<template>
    <div class="home-goods">
        <goods-list></goods-list>
    </div>
</template>


<script type="text/javascript">
import GoodsList from '../../commons/goodsList.vue'
    export default{
        name: 'home-goods',
        components: {
            GoodsList,
        },
    }
</script>


<style  >
    .home-goods{
        width: 100%;
        height: 11.1706rem;
        padding: 0.12rem 0.1rem;
        margin:0.16rem 0;
        background: #fff;
    }
</style>