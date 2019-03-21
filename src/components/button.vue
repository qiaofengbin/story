<template>
    <div class="btn-group">
        <button>
            <slot></slot>
        </button>
    </div>
</template>
<script>
    export default {
        name: 'BtnGroup'
    }
</script>
<style scoped lang="less">
    .btn-group {
        button {
            background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
            border-radius: 100px;
            width: 100%;
            height: 45px;
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #FFFFFF;
            letter-spacing: 0;
            border:none;
            outline:none;
        }
    }
</style>