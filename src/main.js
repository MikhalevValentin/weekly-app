// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Hello from './components/Home/Home'
import Checklist from './components/Home/Checklist'
import Social from './components/Home/Social'

import About from './components/About/About'
import AboutMe from './components/About/AboutMe'
import Contact from './components/About/Contact'

import Mail from './components/Mail/Mail'
import AllMessage from './components/Mail/AllMessage'
import SentMail from './components/Mail/SentMail'

const routes = [
	{ path: '/', component: Hello,
	 	children: [
			{ path: '', component: Checklist },
			{ path: 'social', component: Social }
		]
	},
	{ path: '/about', component: About,
	 	children: [
			{ path: '', component: AboutMe },
			{ path: 'contact', component: Contact }
		]
	},
	{ path: '/mailbox', component: Mail,
	 	children: [
			{ path: '', component: AllMessage },
			{ path: 'sentmail', component: SentMail }
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
