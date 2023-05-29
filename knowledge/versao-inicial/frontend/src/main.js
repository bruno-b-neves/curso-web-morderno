import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO! 
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIEIuIE5ldmVzIiwiZW1haWwiOiJicnVub2JuZXZlc2NAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4NTMyNDQwMCwiZXhwIjoxNjg1MzI4NzgwfQ.qM0HM4sPKCdXx1NgApR8saUHiZiLx2U0Ik56BR3WMn4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')