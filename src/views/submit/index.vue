<template>
    <div class="submit_wrap">
       <VidoeBox :url="$route.query.url"></VidoeBox>
        <ContentBox>
            <BtnGroup @click.native="submitVideo">提交视频</BtnGroup>
        </ContentBox>
    </div>
</template>
<script>
    import BtnGroup from '@/components/button'
    import ContentBox from '@/components/content_box'
    import VidoeBox from '@/components/video'
    export default {
        name: 'Submit',
        data() {
            return {
            }
        },
        props:{
           src:{
            type:String,
            default:''
           }
        },
        methods: {
            submitVideo(){
                alert(11)
                console.log('提交')
            }
        },
        components: {
            BtnGroup,
            ContentBox,
            VidoeBox
        },

    }
</script>
<style scoped lang="less">
    .upload {
        position: relative;
        input {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 100px;
            opacity: 0;
        }
    }
</style>