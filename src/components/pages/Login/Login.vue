<template>
    <div class="login">
        <form @submit.prevent = 'submit'>
            <label>手机号</label>
            <input type="text" placeholder='请输入手机号' v-model='phone'/>
            <button @click='sendCode' class="send-code" v-if='isPhone'>发送验证码</button>
            <br />
            <label>验证码</label>
            <input type="text" placeholder='请输入验证码'/>
            <br />
            <button>登入</button>
        </form>
    </div>
</template>

<script type="text/javascript">
     export default{
        name: 'app-login',
        data(){
            return {
                phone: '',
                code: ''
            }
        },
        computed: {
            isPhone(){
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                if (!myreg.test(this.phone)) {
                    return false;
                } else {
                    return true;    
                }

            }
        },
        methods: {
            submit(){
                if(!this.code){
                    return false
                }

                this.$http.post('/mz/v4/api/login?__t='+Date.now, { 
                    code: "",
                    codekey: "",
                    loginType: 1,
                    password: this.md5(this.code),
                    username: this.phone
                })
            },
            sendCode(){ // 发送验证码
                this.$http.post('/mz/v4/api/code?__t='+Date.now(), {
                    params: {
                        mobile: this.phone,
                        type:"2"
                    }
                }).then(res => {
                    console.log(res.data)
                    if(res.data.status === 0){
                        console.log('手机验证码发送成功')
                    }
                })
            }
        }
     }
</script>

<style lang = "scss" scoped>
    .login{
        width: 100%;
        height: 90%;
        text-align: center;
        padding-top: 1rem;
        label{
            display: inline-block;
            width: 0.8rem;
            margin-bottom: 0.5rem;
        }
        input{
            border:2px solid #ccc;
            width: 2.33rem;
            height: 0.3rem;
        }

        button{
            width: 1.55rem;
            height: 0.3rem;
        }

        .send-code{
            width: 0.9rem;
            height: 0.3rem;
            position: absolute;
            right:0;
        }
    }



</style>