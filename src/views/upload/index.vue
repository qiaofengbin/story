<template>
    <BgMap>
        <ScenePage/>
        <ContentBox title="活动介绍" :list="list">
            <div class="btn">
                <UploadFiles @successFn="successFn" accept="video/*">
                    <BtnGroup @click.native="clickFn">上传视频</BtnGroup>
                </UploadFiles>
                <UploadFiles>
                    <BtnGroup @click.native="clickFn" accept="video/*" capture="camera">录制视频</BtnGroup>
                </UploadFiles>
            </div>
            <Dialog :visibility.sync="visibility" />
        </ContentBox>

    </BgMap>
</template>
<script>
    import ScenePage from '@/components/scene'
    import BgMap from '@/components/bg_map'
    import ContentBox from '@/components/content_box'
    import BtnGroup from '@/components/button'
    import Dialog from '@/components/dialog'
    import api from '@/api/index'
    import UploadFiles from '@/components/uploadFiles'
    export default {
        name: 'Upload',
        data() {
            return {
                list: [
                    '活动时间：11月6日-11月10日，请在11月10日 24点前上传参赛视频；',
                    '故事题材不限，内容应积极向上，富有童趣；',
                    '11月13日，关注公众号内容查询老师点评及分数。'
                ],
                visibility: false
            }
        },
        components: {
            ScenePage,
            BgMap,
            ContentBox,
            BtnGroup,
            Dialog,
            UploadFiles
        },
        methods: {
            clickFn() {
                this.visibility = true
            },
            successFn(data){
                // console.log(data.data.url.path)
                this.$router.push({
                    path:'/submit',
                    query:{
                        url:data.data.url
                    }
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .btn {
        display: flex;
        justify-content: space-between;
        .upload {
            width: 48%;
            overflow: hidden;
        }
    }
</style>