// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Hello from './components/Hello'
import About from './components/About'
import HelloFirst from './components/HelloFirst'
import HelloSecond from './components/HelloSecond'
import AboutFirst from './components/AboutFirst'
import AboutSecond from './components/AboutSecond'

const routes = [
	{ path: '/', component: Hello,
	 	children: [
			{ path: '', component: HelloFirst },
			{ path: 'second', component: HelloSecond }
		]
	},
	{ path: '/about', component: About,
	 	children: [
			{ path: '', component: AboutFirst },
			{ path: 'second', component: AboutSecond }
		]
	}
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
	linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
