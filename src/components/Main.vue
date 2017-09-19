<template>
  <div class="main-container">
    <top-header/>
    <rating/>
    <!--<search/>-->
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import Rating from './Rating.vue'
import Search from './Search.vue'

export default {
  name: 'Main',
  components: {
    TopHeader, Rating, Search
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.main-container {
  /*position: relative;*/
  height: 100%;
  /*background: #000;*/
}
</style>

