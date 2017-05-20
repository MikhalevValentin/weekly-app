<template>
  <div class="hello submenu-content">
		<div class="submenu">
			<div class="user-info-box">
				<div class="user-photo"></div>
				<div class="user-info">
					<span class="user-name">Ansar</span>
					<span class="user-city">Jiddah, USA</span>
				</div>
			</div>
			<nav class="submenu-list">
				<li class="submenu-item">
					<router-link class="submenu-link" v-bind:to="'/'">home1</router-link>
				</li>
				<li class="submenu-item">
					<router-link class="submenu-link" v-bind:to="'/second'">home2</router-link>
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
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
