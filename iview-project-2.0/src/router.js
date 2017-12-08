import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/home.vue'], resolve),
        children:[
            {path:'',component:(resolve) => require(['./views/index.vue'], resolve)},
            {path:'/contact',component:(resolve) => require(['./views/contact.vue'], resolve)},
            {path:'/help',component:(resolve) => require(['./views/help/help.vue'], resolve),
                children:[
                    {path:'',component:(resolve) => require(['./views/help/hot.vue'], resolve)},
                    {path:'product',component:(resolve) => require(['./views/help/product.vue'], resolve)},
                    {path:'version',component:(resolve) => require(['./views/help/version.vue'], resolve)},
                    {path:'charge',component:(resolve) => require(['./views/help/charge.vue'], resolve)},
                    {path:'usage',component:(resolve) => require(['./views/help/usage.vue'], resolve)},
                    {path:'download',component:(resolve) => require(['./views/help/download.vue'], resolve)},
                    {path:'group',component:(resolve) => require(['./views/help/group.vue'], resolve)},
                    {path:'message',component:(resolve) => require(['./views/help/message.vue'], resolve)},
                    {path:'set',component:(resolve) => require(['./views/help/set.vue'], resolve)},
                    {path:'/other',component:(resolve) => require(['./views/help/other.vue'], resolve)},
                ]
            },
            {path:'/card',component:(resolve) => require(['./views/card.vue'], resolve)},
            {path:'/mall',component:(resolve) => require(['./views/mall.vue'], resolve)},
            {path:'/Platform',component:(resolve) => require(['./views/platform/platform.vue'], resolve)},
            {path:'/sdk',component:(resolve) => require(['./views/platform/sdk.vue'], resolve)},
            {path:'/api',component:(resolve) => require(['./views/platform/api.vue'], resolve)},
        ]
    },
    {path:'/register',component:(resolve) => require(['./views/login/register.vue'], resolve)},
    {path:'/forget',component:(resolve) => require(['./views/login/forget.vue'], resolve)},
    {path:'/set',component:(resolve) => require(['./views/login/set.vue'], resolve)},
    {path:'/success/:operationType',component:(resolve) => require(['./views/login/success.vue'], resolve)},

];
export default routers;