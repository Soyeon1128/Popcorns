<template>
  <div class="main-container">
    <top-header/>
    <rating/>
    <rating-genre/>
    <!--<information/>-->
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import Rating from './Rating.vue'
import RatingGenre from './RatingGenre.vue'
import Information from './Information.vue'

export default {
  name: 'Main',
  components: {
    TopHeader, Rating, RatingGenre, Information
  }
}
</script>

<style>
.main-container {
  height: 100%;
  background: #000;
}
</style>

