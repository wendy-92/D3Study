import VueRouter from 'vue-router';
import Vue from 'vue';

const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user', component: User }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
