<template>
    <BgMap>
        <ScenePage/>
        <ContentBox title="活动介绍" :list="list">
            <BtnGroup @click.native="clickFn">参加故事大赛</BtnGroup>
            <Dialog :visibility.sync="visibility"/>
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
    export default {
        name: 'Home',
        data(){
            return {
                list:[
                    '活动时间：11月6日-11月10日，请在11月10日 24点前上传参赛视频；',
                    '故事题材不限，内容应积极向上，富有童趣；',
                    '11月13日，关注公众号内容查询老师点评及分数。'
                ],
                visibility:false
            }
        },
        components: {
            ScenePage,
            BgMap,
            ContentBox,
            BtnGroup,
            Dialog
        },
        methods:{
            clickFn(){
               this.visibility=true
            }
        }
    }
</script>
<style scoped>
  
</style>