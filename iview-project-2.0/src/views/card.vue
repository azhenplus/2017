<template>
  <div class="card">
      <div class="ibanner"></div>
      <div class="i-info">
        <i-service></i-service>
      </div>
      <div class="card-introduce">
          <el-carousel :interval="2000" type="card" indicator-position="none" height="413px">
              <el-carousel-item >
                  <img src="../assets/card/cardgreen.png" alt="">
              </el-carousel-item>
              <el-carousel-item >
                  <img src="../assets/card/cardpurple.png" alt="">
              </el-carousel-item>
              <el-carousel-item >
                  <img src="../assets/card/cardblue.png" alt="">
              </el-carousel-item>
          </el-carousel>
          <div class="content clearfix">
              <div class="iconbox fl">
                  <img src="../assets/card/code.png" alt="">
                  <p>官方微信平台</p>
              </div>
              <ol class="texts fl">
                  <li>1.本卡仅限集分卡专属会员内部使用，可供移动、电信、联通三网及中石化用户兑换话费  <br>  流量及加油充值服务，详情可扫码关注微信</li>
                  <li>2.本卡不记名、不挂失，并严禁倒卖，如违反规定，本公司有权终止本卡使用权；</li>
                  <li>3.请在有效期限截止日期前使用，有效截止日期：2019年3月1日</li>
                  <li>4.请避开系统维护期使用（每日22:00-次日02:00）；如遇服务高峰期（月初和月末）<br>会有延迟，请耐心等待；</li>
                  <li>5.客户服务热线：0571-86572999，客户服务时间：周一至周五9:00-18:00。</li>
              </ol>
          </div>
          <div class="to-use">
              <h3>使用流程</h3>
              <div class="progress">
                  <img src="../assets/card/progress.png" alt="">
              </div>
          </div>
      </div>
      <div class="space"></div>
  </div>
</template>
<script>
    import iService from '../components/service.vue';
    export default {
        components:{
            'i-service':iService,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
    .ibanner{background: url(../assets/card/cardbanner.png) center no-repeat;}
    .i-info{background: url(../assets/card/title.png) center 60% no-repeat}
    .el-carousel{
        margin: 50px auto;
        max-width: 1200px;
        img{width: 100%}
    }

</style>
