<template>
    <div class="app-home-playbill">
        <div class="img-list" v-for='imgList in imgLists' :key='imgList.id'>
            <img :src="imgList.images" />
        </div>
    </div>
</template>


<script>
     export default{
        name: 'app-home-playbill',
        data(){
            return {
                imgLists: []
            }
        },
        methods: {
                getimgLists(){
                   this.$http.get('/dt/project/src/api/stage.php', { params: {}}).then(res => {
                        res.data.forEach((item) => {
                            if(item.id > 9){
                                this.imgLists.push(item)
                            }
                        })
                   })
            }
        },
        created(){
            this.getimgLists()
        }
     }
</script>


<style lang = 'scss' scoped>
    .app-home-playbill{
        padding: 0.16rem 0.1rem;
        background: #e5e3e3;
        height: 10.82rem;
        .img-list{
            width: 100%;
            height: 2.27rem;
            margin-bottom: 8px;
            img{
                height: 2.27rem;
                width: 100%;
            }
        }

        .img-list:nth-child(3){
            img{
                height: 5.80rem;
            }
        }
    }

</style>