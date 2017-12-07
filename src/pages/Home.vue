<template>
  <div>
    <h4>最新收录</h4>
    <section class="latest-wrap">
      <div class="latest-movie">
        <figure>
          <img src="../assets/img/logo.png">
          <figcaption>一个描述</figcaption>
        </figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return { }
  },
  computed: mapState(['movieData']),
  mounted () {

  }
}
</script>
