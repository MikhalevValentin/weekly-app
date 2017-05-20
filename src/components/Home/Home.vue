<template>
  <div class="home submenu-content">
		<div class="submenu">
			<div class="user-info-box">
				<div class="user-photo"></div>
				<div class="user-info">
					<span class="user-name">Ansar</span>
					<span class="user-city">Jiddah, USA</span>
				</div>
			</div>
			<nav class="submenu-list">
				<h3 class="submenu-title">Dashboard</h3>
				<li class="submenu-item">
					<router-link class="submenu-link" v-bind:to="'/'" exact>Checklist</router-link>
				</li>
				<li class="submenu-item">
					<router-link class="submenu-link" v-bind:to="'/social'">Social</router-link>
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
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
