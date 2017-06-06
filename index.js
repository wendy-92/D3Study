import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)

const nav = {
  template: import('./components/navbar.html')
}

const demo1 = {
  template: 'demo1'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/app', component: nav,
    children: [
      {
        path: 'demo1',
        component: demo1
      },
    ]
   }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
