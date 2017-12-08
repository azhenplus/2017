<template>
    <div class="forget">
       <i-header></i-header>
        <div class="ibanner">

        </div>
        <h1>
            <div class="w-1200">忘记密码</div>
            <img class='service' src="../../assets/service.png" alt="">
        </h1>
        <div class="w-1200">
            <form class="forget-form" action="" :model="formPsd">
                <p class="tip">*请输入注册时填写的信息，核实后可以找回密码。</p>
                <div class="form-list">
                    <span class="label">登录邮箱</span>
                    <input class='long' type="text" v-model="formPsd.email">
                    <span class="remind">用于登录集分卡公众平台/开放平台</span>
                </div>
                <div class="form-list">
                    <span class="label">手机号码</span>
                    <input class='prefix' type="text" placeholder="+86" >
                    <input class='tel' type="text" maxlength="11" v-model="formPsd.tel">
                </div>
                <div class="form-list h60">
                    <span class="label">验证码</span>
                    <input class='code' type="text" maxlength="6" v-model="formPsd.code" v-on:input="testCode">
                    <img src="../../assets/platform/code.png" alt="" class="code">
                    <img class="correct" src="../../assets/platform/correct.png" alt="√" v-show="isCodeCorrect">
                </div>
                <div class="form-list">
                    <span class="label ">短信验证</span>
                        <button class="send"  type="primary" size="large" v-show="isSend" @click.prevent="getCode">
                            <span>发送短信获取验证码</span>
                        </button>
                        <input class='long' type="text" v-model="formPsd.msg" v-show="!isSend">

                        <span v-show="!isSend" class="remind">验证码已发出 {{count}}s后可</span>
                        <span  v-show="(!isSend) && (!isClear)" class="remind">重新发送</span>
                        <span v-show="isClear" class="able-color remind" @click.prevent="getCode">重新发送</span>
                </div>
                <div class="form-list warn">
                    {{tip}}
                </div>
                <div class="form-list sub-list">
                    <button class='find' type="primary" size="large" @click.prevent="submitPasswordForm">
                        找回密码
                    </button>
                </div>
            </form>
        </div>
        <n-footer></n-footer>
    </div>
</template>
<script>
    import iHeader from '../../components/header2.vue';
    import nFooter from '../../components/foot.vue';
    import counterDown from '../../components/service.vue';

    import isEmail from 'outils/isEmail';
    import isPhoneNum from 'outils/isPhoneNum';
    import { isVerification,isSMSVerificantion} from '../../libs/reg';

    export default {
        name: '',
        data(){
            return{
                formPsd:{
                    email:"",
                    tel:"",
                    code:"",
                    msg:""
                },
                tip:"",
                isSend:true,
                isClear:false,
                count:"",
                timer:null,
                isCodeCorrect:false
            }
        },
        components:{
            'i-header':iHeader,
            'n-footer':nFooter,
            'counter-down':counterDown
        },
        mounted:function () {

        },
        methods:{
            testCode(){
                if(isVerification(this.formPsd.code)){
                    this.isCodeCorrect=true;
                }else {
                    this.isCodeCorrect=false;
                }
            },
            getCode(){
                const TIME_COUNT = 5;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.isSend = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            clearInterval(this.timer);
                            this.timer = null;
                            this.isClear=true;
                        }
                    }, 1000)
                }
            },
            submitPasswordForm(){
                if(!isEmail(this.formPsd.email)){
                    this.tip="请输入正确的邮箱地址";
                }else if(!isPhoneNum(this.formPsd.tel)){
                    this.tip="请输入正确的电话号码";
                }else if(!isVerification(this.formPsd.code)){
                    this.tip="请输入正确的验证码";
                }else if(!isSMSVerificantion(this.formPsd.msg)){
                    this.tip="请输入正确的短信验证码";
                }else{

                    const formData = this.formPsd;
                    const url='../../mock/request.json';
                    this.$http.post(url,formData).then(function(data){
                        if(data.state=="success"){
                            setTimeout(function () {

                            }, 2000);
                        }

                    }).catch(function(){
//                        this.$Message.error('服务器错误');
                        this.$router.push({ path: "/set" })
                    });
                }
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ibanner{background: url(../../assets/platform/banner.png) center top;background-size: 100% auto}
    a{color: #fff}
</style>