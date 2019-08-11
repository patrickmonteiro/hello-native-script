import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Page from './components/Page'
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'
Vue.use(VueRouter)

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {path: '', component: App},
    {path: '/app', component: App},
    {path: '/page', component: Page},
    {path: '*', redirect: '/app'}
  ]
});

router.replace('/app')

new Vue({
  store,
  router,
  render: h => h('frame', [h(App)])
}).$start()
