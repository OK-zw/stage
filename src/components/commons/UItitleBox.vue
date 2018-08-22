<template>
    <div class="ui-title-box">
        <div class="title">
            <h2 class="section-board-title">{{ title }}</h2>
            <a class="core-link">看全部</a>
        </div>
    </div>
</template>


<script>
    export default{
        name: 'ui-title-box',
        props: ['title']
    }
</script>


<style scoped lang = 'scss'>
    .ui-title-box{
        background: #e5e3e3;
        padding: 0.08rem 0;
        .section-board-title{
            display:inline-block;
            font-size: 1em;
            color: #4a4e5c;
            text-align: center;
            position:relative;
            top:0;
            left:50%;
            transform: translateX(-50%);
        }
        .core-link{
                display: inline-block;
                color: #428bca;
                font-size: 0.13rem;
                font-weight: normal;
                line-height: 1.5px;
                -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
                position: relative;
                top: 0;
                right: -70%;
        }
        
    }
</style>