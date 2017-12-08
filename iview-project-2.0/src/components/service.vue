<template>
    <div>
        <img class='service' src="../assets/service.png" alt="">
    </div>
</template>
<script>
    export default {
        name: '',
        data(){
           return{
                isServise:false,
           }
        },
        methods:{

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .service{
        position: absolute;
        right: -125px;
        top: 0;
        height: 300px;
        transition: all 1s;}
    .service:hover{right:0;}
</style>