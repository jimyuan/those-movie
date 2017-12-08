<template>
  <header class="nav-bar">
    <mt-header fixed :title="$store.state.pageTitle" :class="{'desc-class': descClass}">
      <mt-button icon="back" slot="left" @click.native="$router.go(-1)" v-if="needBack"></mt-button>
    </mt-header>
  </header>
</template>
<script>
export default {
  data () {
    return {
      needBack: false,
      descClass: false
    }
  },
  watch: {
    '$route' () {
      const path = this.$route.path
      this.needBack = path !== '/home'
      this.descClass = path.indexOf('/desc') > -1
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
