<template>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" @before-enter="beforeEnter" @before-leave="beforeLeave">
        <div class="car-box" v-show="visibility" @click="close">
            <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
                <div class="car-content" @click.stop="" v-show="show">
                    <header>
                        <h3>登陆</h3>
                    </header>
                    <section class="login-content">
                        <div class="login-item">
                            <label for="pbone" class="icon-phone"></label>
                            <input type="text" v-model="phone" id="pbone" placeholder="手机号码" ref="phone">
                            <i class="icon-close" style="">✕</i>
                        </div>
                        <div class="login-item">
                            <label for="code" class="icon-code"></label>
                            <input type="text" v-model="code" placeholder="短信验证码" id="code" ref="code">
                            <template v-if="time==0">
                                <button :disabled="!isCode" @click="getCode" class="get-code">获取验证码</button>
                            </template>
                            <template v-else>
                                <button :disabled="false" class="get-code">{{time}}秒后重新获取</button>
                            </template>
                        </div>
                        <button @click="login" class="login-btn">登陆</button>
                    </section>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
    import api from '@/api/index'
    import Fetch from '@/utils/fetch'
    export default {
        name: 'Dialog',
        data() {
            return {
                show: false,
                phone: '',
                code: '',
                time: 0,
                timer: ''
            }
        },
        props: {
            visibility: {
                type: Boolean,
                default: false
            },

        },
        computed: {
            isCode() {
                const reg = /\d{11}/
                return reg.test(this.phone)
            },

        },
        methods: {
            close() {
                this.$emit('update:visibility', false)
            },
            beforeEnter() {
                this.show = true
                // ...
            },
            beforeLeave() {
                // ...
                this.show = false
            },
            getCode() {
                this.time = 60
                api.user.code('/api/msgCode', {
                    phone: this.phone
                }).then((res) => {
                    console.log(res)
                    this.timer = setInterval(() => {
                        this.time -= 1;
                        if (this.time === 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000)
                })
            },
            login() {
                Fetch.post('/api/login', {
                    phone: this.phone,
                    code: this.code
                }).then((res) => {
                    // console.log(res)
                    this.$router.replace('/upload')
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .car-box {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: 100;
    }

    .car-content {
        position: absolute;
        left: 29px;
        right: 29px;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding:0 10px;
        header{
            h3{
                padding:30px 0;
                text-align:center; 
            }
        }
        .login-content {
            margin: .5rem 0 .8rem;
            .login-item {
                display: -webkit-box;
                -webkit-box-pack: justify;
                border-bottom: 1px solid #b2b2b2;
                height: 60px;
                -webkit-box-align: center;
                -webkit-align-content: center;
               
                label {
                    width: 18px;
                    height: 21px;
                    display: block;
                    &.icon-phone {
                        background: url('https://m.lechun.cc/images/login/login-phone.png') top left no-repeat;
                        background-size: 100% auto;
                    }
                    &.icon-code {
                        background: url('https://m.lechun.cc/images/login/login-code.png') top left no-repeat;
                        background-size: 100% auto;
                    }
                }
                input {
                    -webkit-box-flex: 1;
                    display: block;
                    margin: 0 .4rem;
                    padding: 0;
                    border: 0;
                    outline: 0;
                    background: 0 0;
                    color: #898989;
                    -webkit-tap-highlight-color: transparent;
                    -webkit-user-modify: read-write-plaintext-only;
                    -webkit-appearance: none;
                    font-size: .26rem;
                }
                .icon-close {
                    position: relative;
                    top: 0.1rem;
                    width: 20px;
                    height: 20px;
                    display: block;
                    background: #222222;
                    border-radius: 0.19rem;
                    color: #ffffff;
                    text-align: center;
                    /* line-height: 0.36rem; */
                    font-style: normal;
                    font-size: 0.24rem;
                    margin-right: 0.2rem;
                }
                .get-code {
                    width: 64px;
                    display: block;
                    border-left: 1px solid #b2b2b2;
                }

            }
            .login-btn {
                width: 100%;
                height: 41px;
                text-align: center;
                line-height: .86rem;
                border-radius: .2rem;
                background: #202020;
                font-size: .3rem;
                color: #ffffff;
                margin-top: 0.3rem;
            }
            button {
                -webkit-appearance: none;
                border: none;
                background: none;
                outline: none;
                padding: 0;
            }
        }
    }
</style>