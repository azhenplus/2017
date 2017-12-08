<template>
    <div>
        <n-header></n-header>
        <router-view/>
        <n-footer></n-footer>
    </div>
</template>
<script>
    import nHeader from '../components/header1.vue';
    import nFooter from '../components/foot.vue';
    export default {
        name: '',
        data:() => ({

        }),
        components:{
            'n-header':nHeader,
            'n-footer':nFooter
        },
        mounted:function () {

        },
        methods:{

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>