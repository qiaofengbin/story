<template>
    <div class="upload">
       <template v-if="capture">
            <input type="file" @change="onUpload" :accept="accept" :capture="capture"/>
       </template>
       <template v-else>
            <input type="file" @change="onUpload" :accept="accept" />
       </template>
        <slot></slot>
        <div class="progress" v-show="progessShow">
            <div>
                {{percent}}
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '@/api/index'
    export default {
        name: 'UploadFiles',
        data() {
            return {
                progessShow:false,
                percent:'0%'
            }
        },
        props:{
            accept:{
                type:String,
                default:'image/*'
            },
            capture:{
                type:String,
                default:''
            }
        },
        methods: {
            onUpload(e) {
                this.progessShow = true
                let formData = new FormData(); //创建form对象
                let value = e.target.files[0];
                formData.append('file', value);//通过append向form对象添加数据
                // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                //     api.user.upload(formData).then(()=>{
                //        alert('上传成功')
                //    })
                axios({
                    url: '/api/base/upload',
                    method: 'post',
                    data: formData,
                    onUploadProgress:(p)=>{
                        this.percent = parseInt(p.loaded/p.total*100)+'%';
                    }
                }).then((data) => {
                    this.progessShow = false
                    this.$emit('successFn',data)
                })
            }
        }

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