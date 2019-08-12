import Vue from 'nativescript-vue'
import App from './components/App'
import Page from './components/Page'
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

const routes =  [
  {name: 'Page', component: Page}
]

Vue.prototype.$router = (rota) => {
  let nextRoute = routes.find((r) => r.name === rota).component
  Vue.prototype.$navigateTo(nextRoute);
}

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
