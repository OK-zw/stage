<template>
    <div class="home-four">
        <div class="sleeping-img">
            <ul class="spot-ad-ul">
                <router-link tag='li' to='/' class="spot-ad-li" v-for='four in fours' :key='four.id' >
                    <img :src="four.images" class="loading-img" alt="" />
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
     export default{
        name: 'home-four',
        data(){
            return {
                fours: [],
                value1: true,
                value2: true
            }
        },
        methods: {
            getFours(){
                this.$http.get('../../../../static/data2.json').then(res => {
                    console.log(res.data)
                    this.fours = res.data
                })
            }
        },
        created(){
            this.getFours()
        }
     }
</script>

<style lang = 'scss' scoped>
    .home-four{
        width: 100%;
        height: 3.83rem;
        padding-top: 0.12rem;
        margin: 0.16rem 0;
        background: #fff;
        .spot-ad-ul{
            padding-left: 0.08rem;
            height: 3.71rem;
            display: flex;
            flex-wrap: wrap;
            .spot-ad-li{
                width: 1.835rem;
                height: 1.835rem;
                padding: 0 0.08rem 0.08rem 0;
                img{
                    width: 1.755rem;
                }
            }
        }
    }

</style>