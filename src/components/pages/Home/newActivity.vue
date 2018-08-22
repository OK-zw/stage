<template>
    <div class="app-new-activity">
        <div class="section-board loading-img">
        </div>


        <div class="box">
            <div v-for='(box, i) in boxs' :key='i'>{{ box }}</div>
        </div>

        <div>
            <el-collapse-transition>
                <div v-show="show3" class="hello">
                    <div v-for='(toLearnList, i) in toLearnLists' :key='i'>{{ toLearnList }}</div>
                </div>
            </el-collapse-transition>
        </div>

        <div class="btn-box">
            <el-button @click="show3 = !show3">{{word}}</el-button>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'appNewActivity',
        data () {
            return {
            toLearnLists:[
                'html','css','javascript','java','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php','php'  //进行显示的数据
            ],
            boxs: ['to', 'op', 'oo'],
            show3:false,
            }
        },
        methods: {
            getnewActivityImg(){}
        
        },
        created(){
            this.getnewActivityImg()
        },


       computed: {
            word: function(){
                if(this.show3 == false){
                    return '展开'
                }else{
                    return '收起'
                }
            }

       }
    }
</script>


<style lang = 'scss' scoped>
    .app-new-activity{
        width: 100%;
        .section-board{
            padding: 0 0.1rem;
            margin: 0.16rem 0;
            height: 1.38rem;
           
        }
        .box{
            width: 100%;
            height: auto;
            background: #fff;
            text-align: center;
            border-bottom: 1px solid #fff;
        }
        .btn-box{
            width: 100%;
            text-align: center;
        }
        .hello{
            text-align: center; 
            background: #fff;
            overflow: hidden;
        } 
        .show-more{
            text-align: center;
            height: 0.35rem;
            padding: 0.08rem 0;
            background: #fff;
        } 
    }

</style>