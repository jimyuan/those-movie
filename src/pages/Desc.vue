<template>
  <section class="movie-desc" v-if="movie">
    <div class="post-area" :style="`background-image: url(/static/poster/${movie.poster || 'default.jpg'})`"></div>
    <section>
      <h2>{{ movie.name }}</h2>
      <div class="sub-content gray12">
        <div v-if="movie.e_name">原名：{{ movie.e_name }}</div>
        <div v-if="movie.format">格式：{{ movie.format.toLowerCase() }}</div>
        <div v-if="movie.size">大小：{{ movie.size }} M</div>
      </div>
    </section>
    <section v-if="directors">
      <p class="gray12">导演：</p>
      <div v-for="director of directors">{{ director }}</div>
    </section>
    <section v-if="actors">
      <p class="gray12">主演：</p>
      <div v-for="actor of actors">{{ actor }}</div>
    </section>
    <p class="gray12">简介：</p>
    <section class="movie-script" v-if="movieScript">
      <p v-for="script of movieScript">{{ script }}</p>
    </section>
    <section class="movie-script" v-else>
      <p>暂无简介！</p>
    </section>
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
      const director = this.movie.director
      return director === '' ? null : director.split('\n')
    },
    actors () {
      const arts = this.movie.arts
      return arts === '' ? null : arts.split('\n')
    },
    movieScript () {
      const script = this.movie.script
      return script === '' ? null : script.replace(/\n\n/g, '\n').split('\n')
    }
  },
  mounted () {
    this.$store.commit('writeTitle', '')
  }
}
</script>
