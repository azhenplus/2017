<template>
    <div class="forget">
        <i-header></i-header>
        <div class="ibanner">

        </div>
        <h1>
            <div class="w-1200">忘记密码</div>
            <i-service></i-service>
        </h1>
        <div class="w-1200">
            <form class="forget-form" action="" :model="formSet">
                <p class="tip">身份验证成功，请设置新密码</p>
                <div class="form-list">
                    <span class="label">密码</span>
                    <input class='long' type="password" v-model="formSet.psd" maxlength="18">
                    <span class="remind">数字/字母/英文符号，6-18位，区分大小写</span>
                </div>
                <div class="form-list">
                    <span class="label">确认密码</span>
                    <input class='long' type="password" v-model="formSet.psdagain" maxlength="18">
                </div>
                <div class="form-list warn">
                    {{tip}}
                </div>
                <div class="form-list sub-list">
                    <button class='find'  @click.prevent="submitRegisterForm">
                        保存修改
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
    import iService from '../../components/service.vue';

    import {isPassword} from '../../libs/reg';
    export default {
        name: '',
        data(){
            return{
                formSet:{
                    psd:"",
                    psdagain:"",
                },
                tip:"",
            }
        },
        components:{
            'i-header':iHeader,
            'n-footer':nFooter,
            'counter-down':counterDown,
            'i-service':iService,
        },
        mounted:function () {

        },
        methods:{
            submitRegisterForm(){
                 if(!isPassword(this.formSet.psd)){
                    this.tip="密码格式不正确";
                }else if(this.formSet.psd !== this.formSet.psdagain ){
                    this.tip="两次密码不一致";
                }else{
                    const operationType = 1;
                    const formData = this.formSet;
                    const url='../../mock/request.json';
                    this.$http.post(url,formData).then(function(data){
                        if(data.state=="success"){
                            setTimeout(function () {

                            }, 2000);
                        }

                    }).catch(function(){
//                        this.$Message.error('服务器错误');
                        this.$router.push({ path: `/success/${operationType}` })
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