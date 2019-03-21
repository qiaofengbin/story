<template>
    <div class="video_wrap">
        <div class="height"></div>
        <div class="content">
            <video :src="url" ref="video" @loadedmetadata="load" @timeupdate="timeupdate"></video>
            <div class="tool">
                <div v-show="!isPlay" class="play" @click="isPlay=true">
                    <i class="play-icon"></i>
                    <span class="time">{{time}}</span>
                </div>
                <div v-show="isPlay" class="tool-bar">
                    <span>
                        <i class="stop-icon" @click="isPlay=false"></i>
                    </span>
                    <div class="line">
                        <div class="line_width" :style="{width:baseWidth}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import transferTime from '@/utils/transferTime'
    export default {
        name: 'Vidoe_box',
        data() {
            return {
                isPlay: false,
                time:'',
                baseWidth:'0%'
            }
        },
        props: {
            url: {
                type: String,
                default: ''
            }
        },
        components: {
        },
        watch: {
            isPlay(newVal) {
                console.log(this.$refs)
                if (newVal) { // 视频播放
                    this.$refs.video.play()
                } else { // 视频暂停
                    this.$refs.video.pause()
                }
            }
        },
        methods: {
            load(){ // 计算视频的时间
                this.time = transferTime(this.$refs.video.duration*1000)
            },
            timeupdate(){
                const duration = this.$refs.video.duration; //获得当前视频的长度
                
                const currentTime = this.$refs.video.currentTime; //属性设置或返回音频/视频播放的当前位置（以秒计）。
                // console.log(duration,currentTime)
                this.baseWidth = currentTime / duration*100 +'%'
            }
        }
    }
</script>
<style scoped lang="less">
    .video_wrap {
        width: 100%;
        overflow: hidden;
        position: relative;
        .height {
            margin-top: 60%;
        }
        .content {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
        video {
            display: block;
            width: 100%;
        }
        .tool {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .3);
            z-index: 100;
            .play {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                z-index: 100;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
               
                .play-icon {
                    background: url('../../static/img/play.png') no-repeat;
                    background-size: 100%;
                    width: 19px;
                    height: 23px;
                    
                }
                .time {
                    color: #fff;
                }
            }

        }
        .tool-bar {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 46px;
            display: flex;
            opacity: 0.7;
            padding: 10px;
            background: #000000;
            span {
                width: 30px;
                .stop-icon {
                    background: url('../../static/img/stop.png') no-repeat;
                    background-size: 100%;
                    width: 19px;
                    height: 23px;
                    display: block;
                }
            }
            .line {
                flex: 1;
                height: 5px;
                background: #fff;
                margin-top: 10px;
                .line_width{
                  
                    height: 100%;
                    background: red;
                }
            }
        }
    }
</style>