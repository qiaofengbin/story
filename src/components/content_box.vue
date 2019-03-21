<template>
    <div class="content-box">
        <h3 class="title">{{title}}</h3>
        <ul class="list">
            <li v-for="(item,index) in list" :key="index"><span>{{item}}</span></li>
        </ul>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ContentBox',
        props: {
            title: {
                type: String,
                default: ''
            },
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>
<style scoped lang="less">
    .content-box {
        width: 92%;
        background: #fff;
        margin: 0;
        margin: 0 auto;
        margin-bottom: 6%;
        flex: 1;
        min-height: 440px;
        padding: 1.4rem;
    }

    .title {
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #454545;
        letter-spacing: 0;
        font-weight: 800;
    }

    .list li {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #454545;
        letter-spacing: 0;
        line-height: 2;
        position: relative;
        &:before{
            content: '';
            width: 6px;
            height: 6px;
            background: #DEDEDE;
            position: absolute;
            top:12px;
            left: -10px;
        }
    }
</style>