<template>
    <div>
        <header>
            <div class="container clearfix">
                <div class="logo fl">
                    <img src="../assets/logo2.png" alt="">
                </div>
                <nav class="fl">
                    <router-link to="/" :class="{'act-color': isHome}">首页</router-link>
                    <router-link to="/card" :class="{'act-color': isCard}">集分卡</router-link>
                    <router-link to="/mall" :class="{'act-color': isMall}">集分商城</router-link>
                    <router-link to="/platform" :class="{'act-color': isPlatform}">开放平台</router-link>
                    <router-link to="/help" :class="{'act-color': isHelp}">帮助中心</router-link>
                    <router-link to="/contact" :class="{'act-color': isContact}">联系我们</router-link>
                </nav>
                <div class="contact-way fl">
                    <p><img src="../assets/tel.png">400-081-7007</p>
                    <p><img src="../assets/email.png">000000000@qq.com</p>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        name: '',
        data:() => ({
            isHome:true,
            isCard:false,
            isMall:false,
            isPlatform:false,
            isHelp:false,
            isContact:false,
        }),
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods:{
            fetchData () {
                const uri=this.$route.path;
                if(uri === '/'){
                    this.isHome = true;
                    this.isCard = false;
                    this.isMall = false;
                    this.isPlatform=false;
                    this. isHelp=false;
                    this.isContact=false;
                }
                if(uri ==='/card'){
                    this.isHome = false;
                    this.isCard = true;
                    this.isMall = false;
                    this.isPlatform=false;
                    this. isHelp=false;
                    this.isContact=false;
                }
                if(uri ==='/mall'){
                    this.isHome = false;
                    this.isCard = false;
                    this.isMall = true;
                    this.isPlatform=false;
                    this. isHelp=false;
                    this.isContact=false;
                }
                if(uri ==='/platform'){
                    this.isHome = false;
                    this.isCard = false;
                    this.isMall = false;
                    this.isPlatform=true;
                    this. isHelp=false;
                    this.isContact=false;
                }
                if(uri ==='/help'){
                    this.isHome = false;
                    this.isCard = false;
                    this.isMall = false;
                    this.isPlatform=false;
                    this. isHelp=true;
                    this.isContact=false;
                }
                if(uri ==='/contact'){
                    this.isHome = false;
                    this.isCard = false;
                    this.isMall = false;
                    this.isPlatform=false;
                    this. isHelp=false;
                    this.isContact=true;
                }
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>