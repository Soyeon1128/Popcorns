<template>
  <div class="topheader-container">
    <header class="header">
      <!--<h1 @click="getData">!통신!</h1> -->
      <img src="../assets/popcorns.png">
    </header>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  methods : {
    // getData() {
    //   this.$http.get(
    //     // "https://api.themoviedb.org/3/search/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&query=boyhood"
    //     // "https://api.themoviedb.org/3/movie/211672?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko"
    //     "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&sort_by=popularity.desc"

    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // }
  }
}
</script>

<style>
.topheader-container {
  /*position: absolute;*/
  /*z-index: 1000;*/
  width: 100%;
}
.header {
  width: 100%;
  height: 70px;
  background: yellow;
}
.header img {
  height: 70px;
}
</style>


