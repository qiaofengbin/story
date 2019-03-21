<template>
    <div class="bg_map">
        <div><slot></slot></div>
    </div>
</template>
<script>
    export default {
        name: 'BgMap'
    }
</script>
<style scoped lang="less">
    .bg_map{
        width: 100%;
        min-height: 100%;
        position: absolute;
        left: 0;
        background-image: linear-gradient(34deg, #4BBC8B 0%, #A4DD7D 91%, #ADE07B 100%);
        background-size: cover;
        &>div{
            display: flex;
            flex-direction: column;
            min-height:100%;
        }
    }
</style>