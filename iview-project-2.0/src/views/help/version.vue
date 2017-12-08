<template>
  <div class="questions">
    version

  </div>
</template>
<script>
    export default {
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
                if(uri === '/help/isProduct'){
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
                if(uri === '/help/isVersion'){
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
                if(uri === '/help/isCharge'){
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
                if(uri === '/help/isUsage'){
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
                if(uri === '/help/isDownload'){
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
                if(uri === '/help/isGroup'){
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
                if(uri === '/help/isMessage'){
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
                if(uri === '/help/isSet'){
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
                if(uri === '/help/isOther'){
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
