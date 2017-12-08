<template>
  <div class="contact">
    <div class="ibanner"></div>
    <div class="i-info i-info1">
      <i-service></i-service>
    </div>
    <div class="w1350">
      <div class="map" id="allmap">
      </div>
      <div class="magifier animated" :class="{'zoomInUp': isShow}" v-show="isShow">
        <p>地址</p>
        <p>杭州市滨江区聚业路26号金秀国际中心</p>
        <p>EMAIL</p>
        <p>XXXX@XXXX.COM</p>
        <P>电话</P>
        <P>0571-86572999</P>
      </div>
      <div class="arrow" @click="isShow=!isShow">
        <img src="../assets/contact/arrow.png" alt="">
      </div>
    </div>
    <section class="w540 company-info">
      <p>公司地址：杭州市滨江区聚业路26号金秀国际中心 <br> B座901 <br>服务电话：0571-86572999 <br>
        服务手机：1360308223 <br> 邮箱：xxxx@xxx.com  <br> 官网：www.tianyuan.com </p>
      <ul class="slogan">
        <li>求精务实</li>
        <li class="dot"></li>
        <li>成就客户</li>
        <li class="dot"></li>
        <li>成就未来</li>
      </ul>
    </section>
    <div class="w-1200 entext">
      <img src="../assets/contact/text-img.png" alt="">
    </div>
  </div>
</template>
<script>
    import iService from '../components/service.vue';
    export default {
        data(){
           return{
               isShow:false
           }
        },
        components:{
            'i-service':iService,
        },
        mounted: function(){
            //        初始化实例及位置
            const map = new BMap.Map("allmap");
            const point = new BMap.Point(120.2223430000,30.1907060000);
            //地图标注
            const marker = new BMap.Marker(point);
            //左上角放大控件
            const top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
            const top_left_navigation = new BMap.NavigationControl();  //左上角，
            //卫星图，三维图
            const mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
            const mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_RIGHT});

            const overView = new BMap.OverviewMapControl();
            const overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
            //添加地图类型和缩略图

            map.centerAndZoom(point, 15);
            map.addOverlay(marker);
            map.addControl(top_left_control);
            map.addControl(top_left_navigation);

            map.addControl(mapType1);          //2D图，卫星图
            map.addControl(mapType2);          //左上角，默认地图控件
            map.setCurrentCity("杭州");
            map.addControl(overView);          //添加默认缩略地图控件
            map.addControl(overViewOpen);

            const opts = {
                width : 200,     // 信息窗口宽度
                height: 100,     // 信息窗口高度
                title : "杭州天缘网络科技有限公司" , // 信息窗口标题
                enableMessage:true,//设置允许信息窗发送短息
                message:"~"
            };
            const infoWindow = new BMap.InfoWindow("地址：杭州市滨江区聚业路26号金绣国际中心", opts);  // 创建信息窗口对象
            marker.addEventListener("click", function(){
                map.openInfoWindow(infoWindow,point); //开启信息窗口
            });
            //可缩放
            map.enableScrollWheelZoom(true);
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ibanner{background: url(../assets/contact/banner.png) center top;background-size: 100% auto}
  .i-info1{background: url(../assets/contact/title.png) center 60% no-repeat}
</style>
