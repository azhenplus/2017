<template>
  <div class="mall">
    <div class="ibanner"></div>
    <div class="i-info">
      <i-service></i-service>
    </div>
    <div class="content">
      <ul class="w-1200">
        <li>
          <img src="../assets/mall/l1.png" alt="" class="l1 bounceInLeft">
          <img src="../assets/mall/r1.png" alt="" class="r1 bounceInRight">
        </li>
        <li>
          <img src="../assets/mall/l2.png" alt="" class="l1 bounceInLeft">
          <img src="../assets/mall/r2.png" alt="" class="r1 bounceInRight">
        </li>
        <li>
          <img src="../assets/mall/l3.png" alt="" class="l1 bounceInLeft">
          <img src="../assets/mall/r3.png" alt="" class="r1 bounceInRight">
        </li>
        <li>
          <img src="../assets/mall/l4.png" alt="" class="l1 bounceInLeft">
          <img src="../assets/mall/r4.png" alt="" class="r1 bounceInRight">
        </li>
        <li>
          <img src="../assets/mall/l5.png" alt="" class="l1 bounceInLeft">
          <img src="../assets/mall/r5.png" alt="" class="r1 bounceInRight">
        </li>
        <li>
          <img src="../assets/mall/l6.png" alt="" class="l1 bounceInLeft">
          <img src="../assets/mall/r6.png" alt="" class="r1 bounceInRight">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    import $ from 'jquery';
    import iService from '../components/service.vue';
    export default {
        data:() => ({

        }),
        components:{
            'i-service':iService,
        },
        mounted() {
            window.addEventListener('scroll', this.menu)
        },
        methods: {
            menu() {
                const scroll = window.pageYOffset;//滚动距离
                const height =document.documentElement.clientHeight;//可视化窗口距离
                const lis=$(".w-1200 li");
                $.each(lis,function () {
                    $(this).children("img").hide();
                    const top = $(this).offset().top;
                    if(scroll+height-300 > top){
                        $(this).children("img").show().addClass('animated');
                    }
                });
            }
        },

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .ibanner{background: url(../assets/mall/mallbanner.png) center top no-repeat;}
  .i-info{background: url(../assets/card/title.png) center 60% no-repeat}
  .content{background: url(../assets/mall/line.png) center bottom no-repeat;}
</style>
