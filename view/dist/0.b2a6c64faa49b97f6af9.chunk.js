webpackJsonp([0],{"0fJc":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAdVBMVEUAAACcULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULuYz2EoAAAAJnRSTlMA0wMT81AYCvr3yFvs3L14LB23iGpUSAbnrqSWkH9iI6E841kxJOV18kkAAADnSURBVCjPbc/ZcoQgEIXhg6KC27jrjDpLFt7/EdOxBaZI/gtL/YoG8FsEbpTdkMIXrbq8H2/ztC3qmTq4GWqwX4mQIzgCJmu7uvBsc0YDX8+hpV+JPqi2omc8tlzdYiJVkEhjO3Zu8uoB7JIeDnLeJuuqDJG4+jUixklVT/NMg9yB7S5pUbnjwtLClekJWGuk6pAGvpoO/VkCWzgN33TKmDReHIUlhin9Sz1TxaeYujyxEl3fqDBU4c5ZM5UTwz9k6N4BzTzQp2O3Vx/QF1yjfIePGb6281A2wZ3FCQtB0GsVWok+pdcfOREkuFno8LQAAAAASUVORK5CYII="},"18Nr":function(t,s){function e(t){return/^[a-zA-Z]{6}$/.test(t)}function i(t){return/^[0-9]{6}$/.test(t)}function o(t){return/^[\w\?%&=\-_]{6,18}$/.test(t)}t.exports={isVerification:e,isSMSVerificantion:i,isPassword:o}},"3KDu":function(t,s){function e(t){return/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(t)}t.exports=e},"7FWj":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("lnNX"),o=e.n(i),n=e("7y/R"),r=e.n(n),a=e("idHs"),c=e.n(a),l=e("QsLT"),u=e.n(l),d=e("3KDu"),m=e.n(d),p=e("18Nr");e.n(p);s.default={name:"",data:function(){return{formPsd:{email:"",tel:"",code:"",msg:""},tip:"",isSend:!0,isClear:!1,count:"",timer:null,isCodeCorrect:!1}},components:{"i-header":o.a,"n-footer":r.a,"counter-down":c.a},mounted:function(){},methods:{testCode:function(){e.i(p.isVerification)(this.formPsd.code)?this.isCodeCorrect=!0:this.isCodeCorrect=!1},getCode:function(){var t=this;this.timer||(this.count=5,this.isSend=!1,this.timer=setInterval(function(){t.count>0&&t.count<=5?t.count--:(clearInterval(t.timer),t.timer=null,t.isClear=!0)},1e3))},submitPasswordForm:function(){if(u()(this.formPsd.email))if(m()(this.formPsd.tel))if(e.i(p.isVerification)(this.formPsd.code))if(e.i(p.isSMSVerificantion)(this.formPsd.msg)){var t=this.formPsd;this.$http.post("../../mock/request.json",t).then(function(t){"success"==t.state&&setTimeout(function(){},2e3)}).catch(function(){this.$router.push({path:"/set"})})}else this.tip="请输入正确的短信验证码";else this.tip="请输入正确的验证码";else this.tip="请输入正确的电话号码";else this.tip="请输入正确的邮箱地址"}}}},"7y/R":function(t,s,e){e("l4VU");var i=e("mEwh")(e("aNFr"),e("uzm1"),"data-v-4a4be058",null);i.options.__file="E:\\2017\\official-website\\src\\components\\foot.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] foot.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},"9WjY":function(t,s,e){t.exports=e.p+"images/a80fd86e.android.png"},A2cm:function(t,s,e){t.exports=e.p+"images/c7b85292.badge.png"},EOMX:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"forget"},[i("i-header"),t._v(" "),t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1),t._v(" "),i("div",{staticClass:"w-1200"},[i("form",{staticClass:"forget-form",attrs:{action:"",model:t.formPsd}},[i("p",{staticClass:"tip"},[t._v("*请输入注册时填写的信息，核实后可以找回密码。")]),t._v(" "),i("span",{staticClass:"remind remind-mb"},[t._v("用于登录集分卡公众平台/开放平台")]),t._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label"},[t._v("登录邮箱")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formPsd.email,expression:"formPsd.email"}],staticClass:"long",attrs:{type:"text"},domProps:{value:t.formPsd.email},on:{input:function(s){s.target.composing||t.$set(t.formPsd,"email",s.target.value)}}}),t._v(" "),i("span",{staticClass:"remind remind-pc"},[t._v("用于登录集分卡公众平台/开放平台")])]),t._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label"},[t._v("手机号码")]),t._v(" "),i("input",{staticClass:"prefix",attrs:{type:"text",placeholder:"+86"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formPsd.tel,expression:"formPsd.tel"}],staticClass:"tel",attrs:{type:"text",maxlength:"11"},domProps:{value:t.formPsd.tel},on:{input:function(s){s.target.composing||t.$set(t.formPsd,"tel",s.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-list h60"},[i("span",{staticClass:"label"},[t._v("验证码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formPsd.code,expression:"formPsd.code"}],staticClass:"code",attrs:{type:"text",maxlength:"6"},domProps:{value:t.formPsd.code},on:{input:[function(s){s.target.composing||t.$set(t.formPsd,"code",s.target.value)},t.testCode]}}),t._v(" "),i("img",{staticClass:"code",attrs:{src:e("W5oW"),alt:""}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.isCodeCorrect,expression:"isCodeCorrect"}],staticClass:"correct",attrs:{src:e("cIWD"),alt:"√"}})]),t._v(" "),i("div",{staticClass:"form-list"},[i("span",{staticClass:"label "},[t._v("短信验证")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:t.isSend,expression:"isSend"}],staticClass:"send",attrs:{type:"primary",size:"large"},on:{click:function(s){s.preventDefault(),t.getCode(s)}}},[i("span",[t._v("发送短信获取验证码")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formPsd.msg,expression:"formPsd.msg"},{name:"show",rawName:"v-show",value:!t.isSend,expression:"!isSend"}],staticClass:"long",attrs:{type:"text"},domProps:{value:t.formPsd.msg},on:{input:function(s){s.target.composing||t.$set(t.formPsd,"msg",s.target.value)}}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.isSend,expression:"!isSend"}],staticClass:"remind"},[t._v("验证码已发出 "+t._s(t.count)+"s后可")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.isSend&&!t.isClear,expression:"(!isSend) && (!isClear)"}],staticClass:"remind"},[t._v("重新发送")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.isClear,expression:"isClear"}],staticClass:"able-color remind",on:{click:function(s){s.preventDefault(),t.getCode(s)}}},[t._v("重新发送")])]),t._v(" "),i("div",{staticClass:"form-list warn"},[t._v("\n                "+t._s(t.tip)+"\n            ")]),t._v(" "),i("div",{staticClass:"form-list sub-list"},[i("button",{staticClass:"find",attrs:{type:"primary",size:"large"},on:{click:function(s){s.preventDefault(),t.submitPasswordForm(s)}}},[t._v("\n                    找回密码\n                ")])])])]),t._v(" "),i("n-footer")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ibanner"},[i("img",{attrs:{src:e("emnW"),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("h1",[i("div",{staticClass:"w-1200"},[t._v("忘记密码")]),t._v(" "),i("img",{staticClass:"service",attrs:{src:e("M8mE"),alt:""}})])}]},t.exports.render._withStripped=!0},EiBU:function(t,s,e){t.exports=e.p+"images/11c10872.pc.png"},Gehi:function(t,s){},GfE1:function(t,s,e){t.exports=e.p+"images/fd00cc32.navicon.png"},"L9W/":function(t,s,e){e("hL5g");var i=e("mEwh")(e("7FWj"),e("EOMX"),"data-v-38535cd7",null);i.options.__file="E:\\2017\\official-website\\src\\views\\login\\forget.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] forget.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},M8mE:function(t,s,e){t.exports=e.p+"images/36056183.service.png"},OUj2:function(t,s){},"QIG/":function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("img",{staticClass:"service",attrs:{src:e("M8mE"),alt:""}})])}]},t.exports.render._withStripped=!0},QsLT:function(t,s){function e(t){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t)}t.exports=e},W5oW:function(t,s,e){t.exports=e.p+"images/4be87216.code.png"},X4MI:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABrCAMAAADAUGU4AAAAgVBMVEUAAACTTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq6TTq5AlPUbAAAAKnRSTlMANvPn39LtohMHBPcaC8Wak3x1Py4fsqlKh29hVQ/Zy70nwbetZlxEjoH9j7i4AAAC0UlEQVRo3rWZ266iQBBFq7nfQRQQUARFPfb/f+CMkzF9QTwkbtYzWekUVcXuQN8QtaPDGeHZVg7/ywEuvvf8CV5dVPzFHmu+OvwFuNYZFxhHpHnkEiekueIyGdC8EVpwgzDVbHgwc9Cp6pJg5MIK7mrPUM02/h3iDx2YqvlCMPaqOSxw6lRV3wiHpZhToHmHLrSglc2Jj1TX8pmFGbzzMsJyfomdFmwO7FdrFAQmfmrN5MFI4Bc7NkTHxafbtXVaXUb3p7l7sjpv9rtY9t5c699UmuesjRYkl0weDKPPh7nA8LCUqS9vwect0XOdsNrSlKg2uE53nRcPI3/LqIeN48bh70jYXHIJ+RzuVi5FbvE58rfmH/6JczMEz0KwvDT4B1ya4vLfsMvyJLRz9P7UjOLs69VAoa/bhiOpfHnJQ3GkIbahZjuSMxGS5ChnIqg51lL+Oq3nhcg6x2qQw2FEyua3gOq9uvuB5lS/qsFwYlqrHo0e5GCYAa21mDaTtAVimuRPuDnUzJ6zWj0Yh3HXM816pW5haiueXDJRnEijxjcIPiQkujpbryApTN35q53aidCvUaBn6wdO3QorOt3oyfqGU1sBrfbR3erfr9Uq4pk4dai1X7JeDEk5kGG9q0YPbxHBVbkTm0h1qJSk5EhMDz3qAtuDD41wF+ibncDcwle2YBOIAIXGvv6/O3Ycj8lEj6Ap6EkU4s2piO9omNgjYOzp1QD/dT+AzaZIUuj+2xAhjz37f/OEPrRgC6+04IL/iuHXtkWrhfg76cQOxlwJJTC0zv/t7XEjrhMZ35tHWQidSedIM7jo7hD4XwaHnOaJTNy1QGf3xass6TPMgJuFe24qwy7pE9tYXo0pw7vdndT34bkrg4I1pcWnPGgJ8Y++y2pGMt7BNbUn9rQQNkqL3T3ENCE+pJZ4pPZoObvNxTKcrnzshVcjYE3W212S3d6O4B/YJOErtZA3rwAAAABJRU5ErkJggg=="},aNFr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"",data:function(){return{}},mounted:function(){}}},cIWD:function(t,s,e){t.exports=e.p+"images/85652ad8.correct.png"},emnW:function(t,s,e){t.exports=e.p+"images/6096a083.banner.png"},h9eT:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"",data:function(){return{isShow:!1,isHome:!0,isCard:!1,isMall:!1,isPlatform:!1,isHelp:!1,isContact:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){this.isShow=!1;var t=this.$route.path;"/"===t&&(this.isHome=!0,this.isCard=!1,this.isMall=!1,this.isPlatform=!1,this.isHelp=!1,this.isContact=!1),"/card"===t&&(this.isHome=!1,this.isCard=!0,this.isMall=!1,this.isPlatform=!1,this.isHelp=!1,this.isContact=!1),"/mall"===t&&(this.isHome=!1,this.isCard=!1,this.isMall=!0,this.isPlatform=!1,this.isHelp=!1,this.isContact=!1),"/platform"===t&&(this.isHome=!1,this.isCard=!1,this.isMall=!1,this.isPlatform=!0,this.isHelp=!1,this.isContact=!1),"/help"===t&&(this.isHome=!1,this.isCard=!1,this.isMall=!1,this.isPlatform=!1,this.isHelp=!0,this.isContact=!1),"/contact"===t&&(this.isHome=!1,this.isCard=!1,this.isMall=!1,this.isPlatform=!1,this.isHelp=!1,this.isContact=!0)}}}},hExg:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"full-mask"},[i("div",{staticClass:"extend-nav"},[i("button",{on:{click:function(s){t.isShow=!1}}},[t._v("×")]),t._v(" "),i("ul",[i("li",{class:{"act-color":t.isHome}},[i("router-link",{class:{"act-color":t.isHome},attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),i("li",{class:{"act-color":t.isCard}},[i("router-link",{class:{"act-color":t.isCard},attrs:{to:"/card"}},[t._v("集分卡")])],1),t._v(" "),i("li",{class:{"act-color":t.isMall}},[i("router-link",{attrs:{to:"/mall"}},[t._v("集分商城")])],1),t._v(" "),i("li",{class:{"act-color":t.isPlatform}},[i("router-link",{attrs:{to:"/platform"}},[t._v("开放平台")])],1),t._v(" "),i("li",{class:{"act-color":t.isHelp}},[i("router-link",{class:{"act-color":t.isHelp},attrs:{to:"/help"}},[t._v("帮助中心")])],1),t._v(" "),i("li",{class:{"act-color":t.isContact}},[i("router-link",{class:{"act-color":t.isContact},attrs:{to:"/contact"}},[t._v("联系我们")])],1)])])]),t._v(" "),i("header",[i("div",{staticClass:"container clearfix"},[t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1),t._v(" "),i("div",{staticClass:"iconbox",on:{click:function(s){t.isShow=!0}}},[i("img",{attrs:{src:e("GfE1"),alt:""}})])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"logo fl"},[i("img",{attrs:{src:e("xAza"),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"contact-way fr"},[i("p",[i("img",{attrs:{src:e("0fJc")}}),t._v("0571-86572999")]),t._v(" "),i("p",[i("img",{attrs:{src:e("wF+D")}}),t._v("000000000@qq.com")])])}]},t.exports.render._withStripped=!0},hL5g:function(t,s){},idHs:function(t,s,e){e("Gehi");var i=e("mEwh")(e("jZQv"),e("QIG/"),null,null);i.options.__file="E:\\2017\\official-website\\src\\components\\service.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] service.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},jZQv:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"",data:function(){return{isServise:!1}},methods:{}}},kfBz:function(t,s,e){t.exports=e.p+"images/d6fc79f7.wx.png"},l4VU:function(t,s){},lnNX:function(t,s,e){e("OUj2");var i=e("mEwh")(e("h9eT"),e("hExg"),null,null);i.options.__file="E:\\2017\\official-website\\src\\components\\header2.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] header2.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},uzm1:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("footer",[i("div",{staticClass:"w-1195"},[i("div",{staticClass:"iconbox"},[i("ul",[i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:e("kfBz"),alt:"wxcode"}})])]),t._v(" "),i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:e("X4MI"),alt:"app store"}})]),t._v(" "),i("p",[t._v("App store")])]),t._v(" "),i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:e("EiBU"),alt:"pc"}})]),t._v(" "),i("p",[t._v("电脑版")])]),t._v(" "),i("li",[i("div",{staticClass:"logobox"},[i("img",{attrs:{src:e("9WjY"),alt:"android"}})]),t._v(" "),i("p",[t._v("Android")])])])]),t._v(" "),i("section",{staticClass:"contact-us"},[i("h4",[t._v("联系我们")]),t._v(" "),i("p",[t._v("公司地址：杭州市滨江区聚业路26号金秀国际中心")]),t._v(" "),i("p",[t._v(" B座901 ")]),t._v(" "),i("p",[t._v("服务电话：0571-86572999 ")]),t._v(" "),i("p",[t._v("服务手机：1360308223")]),t._v(" "),i("p",[t._v("邮箱：...@.com")]),t._v(" "),i("p",[t._v("官网：www.")])]),t._v(" "),i("section",{staticClass:"bottom"},[i("ul",[i("li",[i("small",[t._v("公司简介")])]),t._v(" "),i("li",[i("small",[t._v("服务条款")])]),t._v(" "),i("li",[i("small",[t._v("网站地图")])]),t._v(" "),i("li",[i("small",[t._v("电信业务")])])]),t._v(" "),i("hr"),t._v(" "),i("p",[i("small",[t._v("Copyright @ 2017  杭州市市天缘网络科技有限公司 版权所有 "),i("img",{attrs:{src:e("A2cm"),alt:""}}),t._v(" 浙ICP备100422527  ")])])])])])])}]},t.exports.render._withStripped=!0},"wF+D":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAZCAMAAACB+BfnAAAAclBMVEUAAACcULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULucULthasI3AAAAJXRSTlMAiJ6MlpMqz+62BK98W02opHNjU0P059V4WEgzHhXJvoFpYAslU5/pAAAAAPhJREFUKM990llygzAQRdEriMBMAeN5ju28/W8xDGUrAsP7QVQduptqATYwc7HVBSIKzcdwJolJ4xmziMgSQu1SykkUQ6aAsONmAmVdI9uoJquJ4X6IFs3jq1cyRJsxOnCQ/ikFPOPx3Hv5Slcoh3MHGiotTuRyqXju5Ks+Nav3ec9po49Kx/c/FJwlX7mXNWncNz+y/Kwsa21TsnYZiXJqXzkkbX+5w7U5LbmPVdiifg/nrdSxx1AZvl9f3l6HnMJXhpXGMf6GrKvkJefhVOjQ6FLUnTJ+pXHTogW2kUdNZ0mtkuQ2Uclt1CZE5JpPxgWoymAuVXLhD5N7Y+7dCA4HAAAAAElFTkSuQmCC"},xAza:function(t,s,e){t.exports=e.p+"images/7ff7951c.logo2.png"}});