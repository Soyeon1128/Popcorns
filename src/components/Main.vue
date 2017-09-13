<template>
  <div class="main-container">
    <top-header/>
    <rank/>
    <search/>
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import Rank from './Rank.vue'
import Search from './Search.vue'

export default {
  name: 'Main',
  components: {
    TopHeader, Rank, Search
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>

