<template>
  <div class="platform">
    <div class="ibanner">
      <div class="loginbox">
        <h4>账号登录</h4>
        <Form :model="formItem" :label-width="80">
          <div class="form-list clearfix">
            <div class="iconbox fl"><img src="../../assets/platform/admin.png" alt=""></div>
            <div class="inputbox fl">
              <Input type="text"  v-model="formItem.account" placeholder="请输入账号"></Input>
              <img class="s-icon" src="../../assets/platform/i-close.png" alt="×" @click="clearAccount">
            </div>
          </div>
          <div class="form-list clearfix" style="margin-top: 17px;">
            <div class="iconbox fl"><img src="../../assets/platform/lock.png" alt=""></div>
            <div class="inputbox fl">
              <Input type="password" v-model="formItem.psd" placeholder="请输入密码"></Input>
              <img class="s-icon" src="../../assets/platform/i-keyboard.png" alt="">
            </div>
          </div>
          <label class="w-check-label clearfix">
            <span class="radio-outer fl" @click="isChecked=!isChecked">
              <input type="checkbox" v-model="formItem.radio">
              <span class="radio-inside" v-show="isChecked"></span>
            </span>
            记住密码
          </label>
          <div class="opt-box">
            <router-link to="/forget">忘记密码</router-link>
            <router-link to="/register">立即注册</router-link>
          </div>
          <Button type="success" long size="large" @click="submitForm">登录</Button>
        </Form>
      </div>
    </div>
    <div class="i-info i-info1">
      <i-service></i-service>
    </div>
    <ul class="clearfix">
      <li class="fl"><div class="mask"></div> </li>
      <li class="fl" @mouseover="isHover1=true" @mouseout="isHover1=false">
        <router-link to="/sdk">
          <div class="iconbox"><img src="../../assets/platform/icon1.png" class="animated" :class="{'wobble': isHover1}"> </div>
          <h4 class="animated" :class="{'bounceInDown': isHover1}">SKD文档下载</h4>
          <p class="animated" :class="{'bounceInDown': isHover1}"> SKD DOWNDOAD</p>
        </router-link>
      </li>
      <li class="fl"><div class="mask"></div></li>
      <li class="fl" @mouseover="isHover2=true" @mouseout="isHover2=false">
        <router-link to="/contact">
          <div class="iconbox"><img src="../../assets/platform/icon2.png" class="animated" :class="{'wobble': isHover2}"> </div>
          <h4 class="animated" :class="{'bounceInDown': isHover2}">联系我们</h4>
          <p class="animated" :class="{'bounceInDown': isHover2}">CONTACT US</p>
        </router-link>
      </li>
      <li class="fl" @mouseover="isHover3=true" @mouseout="isHover3=false">
        <router-link to="/api">
          <div class="iconbox"><img src="../../assets/platform/icon3.png" class="animated" :class="{'wobble': isHover3}"> </div>
          <h4 class="animated" :class="{'bounceInDown': isHover3}">API文档</h4>
          <p class="animated" :class="{'bounceInDown': isHover3}">API DOCUMENTATION</p>
        </router-link>
      </li>
      <li class="fl"><div class="mask"></div></li>
      <li class="fl" @mouseover="isHover4=true" @mouseout="isHover4=false">
        <router-link to="/api">
          <div class="iconbox"><img src="../../assets/platform/icon4.png" class="animated" :class="{'wobble': isHover4}"> </div>
          <h4 class="animated" :class="{'bounceInDown': isHover4}">帮助中心</h4>
          <p class="animated" :class="{'bounceInDown': isHover4}">HELP AND SUPPORT</p>
        </router-link>
      </li>
      <li class="fl"><div class="mask"></div></li>
    </ul>
    <div class="i-info i-info2"></div>
  </div>
</template>
<script>
    import iService from '../../components/service.vue';
    export default {
        data () {
            return {
                isHover1:false,
                isHover2:false,
                isHover3:false,
                isHover4:false,
                isChecked:true,
                formItem:{
                    account:'',
                    psd:'',
                    radio:'checked',
                },
                message:''
            }
        },
        components:{
            'i-service':iService,
        },
        methods:{
            clearAccount(){
                this.formItem.account="";
            },
            submitForm(){
                const formData = this.formItem;
                const url='../mock/request.json';
                this.$http.post(url,formData).then(function(data){
                    if(data.state=="success"){
                        setTimeout(function () {
                            console.log("success");
                        }, 2000);
                    }

                }).catch(function(){
                    console.log("服务器异常！");
                });
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @primary-color:#f39800;
  .ibanner{background: url(../../assets/platform/banner.png) center top;background-size: 100% auto}
  .i-info1{background: url(../../assets/platform/title.png) center 60% no-repeat}
  .i-info2{background: url(../../assets/platform/title2.png) center 60% no-repeat}
  .loginbox{
    .w-check-label{line-height: 40px;}
    button{background:@primary-color;border-color: @primary-color; }
  }
</style>
