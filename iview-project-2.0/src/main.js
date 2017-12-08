import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routers from './router';
import Util from './libs/util';
import {Carousel, CarouselItem} from 'element-ui'
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import 'animate.css/animate.css'; // get animate.css

import './styles/style.less';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);
Vue.use(Carousel);
Vue.use(CarouselItem);

// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
