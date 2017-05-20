<template>
  <div id="app" class="app">
		<aside class="sidebar">
			<div class="sidebar-button">
				<button class="button button-nav"></button>
			</div>
			<nav class="sidebar-nav">
				<li class="sidebar-item">
					<router-link class="sidebar-link link-home" v-bind:to="'/'" :class="{'active': $route.fullPath ==='/' || $route.fullPath === '/second'}" exact></router-link>
				</li>
				<li class="sidebar-item">
					<router-link class="sidebar-link link-about" v-bind:to="'/about'"></router-link>
				</li>
			</nav>
		</aside>
		<div class="sidebar-content">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import 'styles/main.scss'
</style>
