<template>
  <div class="main-container">
    <top-header/>
    <rating/>
    <rating-genre/>
    <!--<search/>-->
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import Rating from './Rating.vue'
import Search from './Search.vue'
import RatingGenre from './RatingGenre.vue'

export default {
  name: 'Main',
  components: {
    TopHeader, Rating, RatingGenre, Search
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.main-container {
  height: 100%;
  background: #000;
}
</style>

