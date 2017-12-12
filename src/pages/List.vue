<template>
  <div>
    <ul class="movie-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="30">
      <li
        v-for="movie of movieList"
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
    <div class="load-more" v-if="loading">Loading...</div>
  </div>
</template>

<script>
import chunk from 'lodash.chunk'
export default {
  data () {
    return {
      title: this.$route.params.type,
      index: 0,
      loading: false
    }
  },
  computed: {
    writeTitle () {
      const title = this.title
      return title === 'all' ? '全部收藏' : title
    },
    moviesBySort () {
      const [title, datas, len] = [this.title, this.$store.state.movieData, 10]
      return title === 'all'
        ? chunk(datas, len)
        : chunk(datas.filter(m => m.type === title), len)
    },
    movieList () {
      return [].concat(...this.moviesBySort.slice(0, this.index + 1))
    }
  },
  methods: {
    loadMore () {
      const movieList = this.moviesBySort
      const len = movieList.length
      if (len > 1) {
        this.loading = true
        setTimeout(() => {
          this.index < len - 1 && this.index++
          this.loading = false
        }, 2000)
      }
    }
  },
  mounted () {
    this.$store.commit('writeTitle', this.writeTitle)
  }
}
</script>
