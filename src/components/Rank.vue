<template>
  <div class="rank-container">
    <div class="rank-area">
        <h2 @click="getData">순위</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rank',
  methods : {
    getData() {
      this.$http.get("http://api.themoviedb.org/3/movie/198277/casts?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
}
</script>

<style>
.rank-area {
  background: orange;  
}
</style>

