<template>
  <section id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </section>
</template>

<script>
import NavBar from './NavBar'
import { mapState } from 'vuex'
import { Indicator } from 'mint-ui'
import axios from 'axios'

export default {
  computed: mapState(['movieData']),
  methods: {
    /**
     * 从 store 获取 movieData，如没有，发起 ajax 请求从 JSON 文件中读取
     *
     * 1. 打开 Indicator
     * 2. 获取 data
     * 3. 获取成功，关闭 Indicator
     * 4. 获取失败，依然关闭 Indicator
     */
    fetchData () {
      if (this.movieData.length === 0) {
        // 1
        Indicator.open({ text: '载入数据...' })
        // 2
        axios.get('./static/movie.json')
          // 3
          .then(data => {
            this.$store.commit('fetchData', data.data.reverse())
            Indicator.close()
          })
          // 4
          .catch(err => {
            Indicator.close()
            console.log(err)
          })
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  components: { NavBar }
}
</script>

<style lang="scss">
@import "../assets/scss/docs";

.mint-indicator-wrapper {
  font-size: 0.16rem;
}
</style>
