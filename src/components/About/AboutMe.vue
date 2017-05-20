<template>
  <div class="aboutMe">
    <h1>{{ msg }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam soluta, eligendi rerum cum omnis deleniti dolor odio, maxime corrupti ullam commodi provident animi autem odit voluptates aut delectus dolorem voluptas.</p>
  </div>
</template>

<script>
export default {
  name: 'aboutFirst',
  data () {
    return {
      msg: 'About Me'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>