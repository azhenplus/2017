<template>
    <div class="forget success">
        <i-header></i-header>
        <div class="ibanner">

        </div>
        <h1>
            <div class="w-1200">忘记密码</div>
            <i-service></i-service>
        </h1>
        <div class="w-1200 clearfix">
            <p class="tip">{{userAction}}成功</p>
            <div class="fl content-box">
                <div class="fl iconbg iconbg1" @mouseover="isHoverLeft=true" @mouseout="isHoverLeft=false">
                    <img class="animated" :class="{'shake': isHoverLeft}" src="../../assets/platform/platform.png" alt="">
                </div>
                <router-link to="/platform">开放平台 ></router-link>
            </div>
            <div class="fl content-box">
                <div class="fl iconbg iconbg2" @mouseover="isHoverRight=true" @mouseout="isHoverRight=false">
                    <img class="animated" :class="{'shake': isHoverRight}" src="../../assets/platform/mall.png" alt="">
                </div>
                <router-link to="/mall">集分商城 ></router-link>
            </div>
        </div>
        <n-footer></n-footer>
    </div>
</template>
<script>
    import iHeader from '../../components/header2.vue';
    import nFooter from '../../components/foot.vue';
    import iService from '../../components/service.vue';
    export default {
        name: '',
        data(){
            return{
                userAction:"",
                isHoverLeft:"",
                isHoverRight:""
            }
        },
        components:{
            'i-header':iHeader,
            'n-footer':nFooter,
            'i-service':iService,
        },
        created:function () {
            const options=["注册","修改"];
            const opt=this.$route.params.operationType;
            this.userAction=options[opt-1];
        },
        methods:{

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ibanner{background: url(../../assets/platform/banner.png) center top;background-size: 100% auto}
    a{color: #fff}
</style>