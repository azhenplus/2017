<style scoped lang="less">
</style>
<template>
    <div class="index">
        <div class="slide">
            <Carousel autoplay v-model="value2"  loop radius-dot arrow="never">
                <CarouselItem>
                    <div class="carouse"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carouse">4</div>
                </CarouselItem>
            </Carousel>
            <div class="z-99 clearfix">
                <div class="text-l fl">
                    <h1>共享经济&nbsp;分享链接&nbsp;持续收益</h1>
                    <h2>集分卡共享合作平台</h2>
                    <p>SHARING AND COOPERATION PLATFORM OF SET CARD</p>
                    <button>一起了解更多</button>
                </div>
                <div class="icons-r fl">
                    <ul class="fl">
                        <li class="fl">
                            <div class="icon-box" @mouseover="isApple=true" @mouseout="isApple=false">
                                <img src="../assets/web/index/apple.png" alt="" class="animated" :class="{'flip': isApple}" >
                            </div>
                            <p>App store</p>
                        </li>
                        <li class="fl">
                            <div class="icon-box" @mouseover="isAndroid=true" @mouseout="isAndroid=false">
                                <img src="../assets/web/index/android.png" alt="" class="animated" :class="{'flip': isAndroid}">
                            </div>
                            <p>Android</p>
                        </li>
                        <li class="fl">
                            <div class="icon-box" @mouseover="isPC=true" @mouseout="isPC=false">
                                <img src="../assets/web/index/windows.png" alt="" class="animated" :class="{'flip': isPC}">
                            </div>
                            <p>电脑版</p>
                        </li>
                        <li class="fl">
                            <div class="icon-box" @mouseover="isCode=true" @mouseout="isCode=false">
                                <img src="../assets/web/index/code.png" alt="" class="animated" :class="{'flip': isCode}">
                            </div>
                            <p>二维码下载</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
            <img src="../assets/web/index/middle.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0,
                isApple:false,
                isAndroid:false,
                isPC:false,
                isCode:false,
            }
        },
        methods:{
            hover:function () {
//                this.isApple=true;
//                this.isAndroid=true;
//                this.isPC=true;
//                this.isCode=true;
            },
            leave:function () {
//                this.isApple=false;
//                this.isAndroid=false;
//                this.isPC=false;
//                this.isCode=false;
            }
        }
    }
</script>
