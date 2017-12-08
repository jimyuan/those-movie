<template>
  <section class="movie-desc">
    <div class="post-area"></div>
    <h2>{{ movie.name }}</h2>
    <div class="sub-content gray12">
      <div v-if="movie.e_name">原名：{{ movie.e_name }}</div>
      <div v-if="movie.format">格式：{{ movie.format.toLowerCase() }}</div>
    </div>
    <p class="gray12">导演：</p>
    <div v-for="director of directors">{{ director }}</div>
    <p class="gray12">主演：</p>
    <div v-for="actor of actors">{{ actor }}</div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    movie () {
      return this.$store.state.movieData.find(m => m.id === +this.id)
    },
    directors () {
      return this.movie.director.split('\n')
    },
    actors () {
      return this.movie.arts.split('\n')
    }
  },
  mounted () {
    this.$store.commit('writeTitle', '')
  }
}
</script>
