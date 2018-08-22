<template>
    <div class="home-ranking">
        <ui-title-box title="销售排行"></ui-title-box>

        <app-goods-ltem :getGoodsItems='goodsItems'></app-goods-ltem>
    </div>
</template>

<script type="text/javascript">
     export default{
        name: 'home-ranking',
        data(){
            return {
                goodsItems: []
            }
        },
        methods:{
            getGoodsItems(){
                this.$http.get('../../../static/data4.json').then(res=> {
                    this.goodsItems = res.data
                })
            }
        },
        created(){
            this.getGoodsItems()
        }
     }
</script>

<style lang= "scss" scoped>
    


</style>