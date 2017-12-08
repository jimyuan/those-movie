<template>
  <div>
    <mt-cell
      title="最新收录"
      value="全部"
      class="section-title"
      @click.native="$router.push('/list')"
      is-link ></mt-cell>
    <section class="latest-wrap">
      <div class="latest-movie">
        <figure v-for="movie of latest4" :key="movie.id" @click="$router.push(`/desc/${movie.id}`)">
          <img :src="`/static/poster/${movie.poster || 'default.jpg'}`">
          <figcaption v-text="movie.name"></figcaption>
        </figure>
      </div>
    </section>
    <mt-cell title="分类浏览" class="section-title"></mt-cell>
    <mt-button
      type="primary"
      class="movie-sort"
      v-for="(v, k) of movieType"
      size="small"
      :key="k"
      @click.native="$router.push(`/list/${k}`)"
      plain>{{ `${k} (${v})` }}</mt-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return { }
  },
  computed: {
    ...mapState(['movieData']),
    latest4 () {
      return this.movieData.slice(0, 4)
    },
    movieType () {
      const movieData = this.movieData
      const sortArr = [...new Set(movieData.map(movie => movie.type))]
      let sortObj = {}
      for (let sort of sortArr) {
        sortObj[sort] = [...new Set(movieData
          .filter(m => m.type === sort)
          .map(n => n.e_name))]
          .length
      }
      return sortObj
    }
  },
  mounted () {
    this.$store.commit('writeTitle', '旧电影')
  }
}
</script>
