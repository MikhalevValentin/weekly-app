<template>
  <div class="about submenu-content">
		<div class="submenu">
			<div class="user-info-box">
				<div class="user-photo"></div>
				<div class="user-info">
					<span class="user-name">Ansar</span>
					<span class="user-city">Jiddah, USA</span>
				</div>
			</div>
			<nav class="submenu-list">
				<h3 class="submenu-title">About</h3>
				<li class="submenu-item">
					<router-link class="submenu-link" v-bind:to="'/about/'" exact>About Me</router-link>
				</li>
				<li class="submenu-item">
					<router-link class="submenu-link" v-bind:to="'/about/contact'">Contact</router-link>
				</li>
			</nav>
		</div>
  	<div class="content">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>
<!-- styling for the component -->
<style>
</style>