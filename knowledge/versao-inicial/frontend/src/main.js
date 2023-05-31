import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO! 
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIEIuIE5ldmVzIiwiZW1haWwiOiJicnVub2JuZXZlc2NAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4NTQ5NTEyMCwiZXhwIjoxNjg1NDk5NTAwfQ.UdBXtcqR3TQ55ZxRMg8uUh7m9U1CCto52g4z7rSHEMw'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')