<template>
  <div class="help">
    <div class="w1700">
      <ul class="l-links">
        <li> <router-link to="/help" :class="{'act-tab': isQuestion}">热门问题</router-link> </li>
        <li> <router-link to="/help/product" :class="{'act-tab': isProduct}">产品属性</router-link> </li>
        <li> <router-link to="/help/version" :class="{'act-tab': isVersion}">版本相关</router-link> </li>
        <li> <router-link to="/help/charge" :class="{'act-tab': isCharge}">资费类</router-link> </li>
        <li> <router-link to="/help/usage" :class="{'act-tab': isUsage}">功能使用类</router-link> </li>
        <li class="s"><router-link to="/help/download" :class="{'act-tab': isDownload}">下载和注册</router-link></li>
        <li class="s"><router-link to="/help/group" :class="{'act-tab': isGroup}">群组和功能</router-link></li>
        <li class="s"><router-link to="/help/message" :class="{'act-tab': isMessage}">消息|免费短信|电话留言</router-link></li>
        <li class="s"><router-link to="/help/set" :class="{'act-tab': isSet}">设置</router-link></li>
        <li class="s"><router-link to="/help/other" :class="{'act-tab': isOther}">其他</router-link></li>
      </ul>
      <div class="r-contents">
        <div class="search-header">
          <input type="text" placeholder="请输入搜索关键字">
          <span class="search">搜索</span>
        </div>
        <div class="questions">
          <h2>-{{header}}-</h2>
        </div>
        <router-view/>
      </div>
    </div>
    <i-service></i-service>
  </div>
</template>
<script>
    import iService from '../../components/service.vue'
    export default {
        components:{
            'i-service':iService
        },
        data(){
            return {
                isQuestion:true,
                isProduct:false,
                isVersion:false,
                isCharge:false,
                isUsage:false,
                isDownload:false,
                isGroup:false,
                isMessage:false,
                isSet:false,
                isOther:false,
                header:""
            }
        },
        created () {
            this.getRoute()
        },
        watch: {
            '$route': 'getRoute'
        },
        methods:{
            getRoute(){
                const uri=this.$route.path;
                console.log(uri);
                if(uri === '/help'){
                    this.isQuestion = true;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="热门问题"
                }
                if(uri === '/help/product'){
                    this.isQuestion = false;
                    this.isProduct = true;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="产品属性"
                }
                if(uri === '/help/version'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = true;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="版本相关"
                }
                if(uri === '/help/charge'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=true;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="资费类"
                }
                if(uri === '/help/usage'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=true;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="功能使用类"
                }
                if(uri === '/help/download'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=true;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="下载和注册"
                }
                if(uri === '/help/group'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=true;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="群组和功能"
                }
                if(uri === '/help/message'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=true;
                    this.isSet=false;
                    this.isOther=false;
                    this.header="消息|免费短信|电话留言"
                }
                if(uri === '/help/set'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=true;
                    this.isOther=false;
                    this.header="设置"
                }
                if(uri === '/help/other'){
                    this.isQuestion = false;
                    this.isProduct = false;
                    this.isVersion = false;
                    this.isCharge=false;
                    this. isUsage=false;
                    this.isDownload=false;
                    this.isGroup=false;
                    this.isMessage=false;
                    this.isSet=false;
                    this.isOther=true;
                    this.header="其他"
                }
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .help .l-links .act-tab{background: #f69f16;  color: #fff;}
</style>
