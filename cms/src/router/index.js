import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const Bank = resolve => require(['@/views/Bank.vue'], resolve)
const gongneng = resolve => require(['@/views/gongneng.vue'], resolve)
const shouyi = resolve => require(['@/views/shouyi.vue'], resolve)
const tuandui = resolve => require(['@/views/tuandui.vue'], resolve)
const withdraw = resolve => require(['@/views/withdraw.vue'], resolve)
const usertest = resolve => require(['@/views/usertest.vue'], resolve)
const tixianmemo = resolve => require(['@/views/tixianmemo.vue'], resolve)
const password = resolve => require(['@/views/password.vue'], resolve)
const active = resolve => require(['@/views/active.vue'], resolve)


export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Index
    }, {
      path: '/category',
      name: '分类页',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        component:CategoryMain
      }]
    }, {
      path: '/car',
      name: '购物车页',
      component: Car
    }, {
      path: '/car/pay',
      name: '支付页',
      component: Pay
    },
    {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       },
    }, {
      path: '/detail/:id',
      name: '详情页',
      component: Detail
    }, {
      path: '/search/:id',
      name: '管理页',
      component: Search
    },{
      path: '/login',
      name: '登录页',
      component: Login
    },{
      path: '/Bank',
      name: '财务页',
      component: Bank
    },{
      path: '/gongneng',
      name: '功能页',
      component: gongneng
    },{
      path: '/shouyi',
      name: '收益页',
      component: shouyi
    },{
      path: '/tuandui',
      name: '团队页',
      component: tuandui
    },{
      path: '/withdraw',
      name: '提现页',
      component: withdraw
    },{
      path: '/usertest',
      name: '调试页',
      component: usertest
    },{
      path: '/tixianmemo',
      name: '提现记录页',
      component: tixianmemo
    },{
      path: '/password',
      name: '密码页',
      component: password
    },{
      path: '/active',
      name: '活动页',
      component: active
    }
  ]
})
