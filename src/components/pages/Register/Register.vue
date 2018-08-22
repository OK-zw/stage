<template>
    <div class="register">
        <form @submit.prevent = 'submit'>
            <label>手机号</label>
            <input type="text"  placeholder='请输入手机号'/>
            <label>验证码</label>
            <input type="text" placeholder='请输入验证码' />
            <br />
            <button type="submit">注册</button>
        </form>
    </div>
</template>

<script type="text/javascript">
     export default{
        name: 'app-register',
        methods: {
            submit(){

            }
        }
     }
</script>

<style lang = "scss" scoped>
    .register{
        width: 100%;
        height: 100%;
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
    }
</style>