// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex'

// 屏幕适配
import flexible from './plugins/flexible'
flexible(window);

// 过滤器
import filters from './filter'
filters();

import musicPlay from "./musicPlay"
// 虽然知道这样不太合适。。。
// 暂时这样，后期优化😁
Vue.prototype.musicPlay = musicPlay;

Vue.config.productionTip = false

Vue.prototype.myEventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  filters
})
