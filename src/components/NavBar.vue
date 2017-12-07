<template>
  <header class="nav-bar">
    <mt-header fixed title="旧电影"></mt-header>
  </header>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: ''
    }
  },
  watch: {
    '$route' () {
      this.activeIndex = this.$route.path
    }
  }
}
</script>
<style>
.mint-header {
  font-size: 0.18rem;
  opacity: 0.9;
}
</style>
