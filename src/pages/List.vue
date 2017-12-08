<template>
  <div>
    <ul class="movie-list">
      <li
        v-for="movie of moviesBySort"
        :key="movie.id"
        @click="$router.push(`/desc/${movie.id}`)">
        <div class="poster" :style="`background-image: url(./static/poster/${movie.poster || 'default.jpg'})`"></div>
        <div class="desc">
          <span>
            {{ movie.name }}
            <mt-badge size="small" type="success">{{ movie.format.toLowerCase() }}</mt-badge>
          </span>
          <span class="gray12">
            {{ movie.arts.replace(/\n/g, '; ') }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: this.$route.params.type
    }
  },
  computed: {
    writeTitle () {
      const title = this.title
      return title === 'all' ? '全部收藏' : title
    },
    moviesBySort () {
      const self = this
      const title = self.title
      const datas = self.$store.state.movieData
      return title === 'all'
        ? datas
        : datas.filter(m => m.type === title)
    }
  },
  mounted () {
    this.$store.commit('writeTitle', this.writeTitle)
  }
}
</script>
