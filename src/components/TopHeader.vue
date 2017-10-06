<template>
  <div class="topheader-container">
    <header class="header">
      <h1>POPCORNS</h1>
      <button class="test" @click="getTestData">통신</button> 
      <!--<img src="../assets/header_img.png">-->
    </header>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  methods : {
    getTestData() {
      this.$http.get(
        "http://api.themoviedb.org/3/movie/155/casts?api_key=d699f344a468b575a26d5ea50f0265f4",

        // "https://api.themoviedb.org/3/search/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&query=boyhood"
        // "https://api.themoviedb.org/3/movie/155?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko"
        // "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&sort_by=popularity.desc"
        // "https://api.themoviedb.org/3/genre/movie/list?api_key=d699f344a468b575a26d5ea50f0265f4"
        // "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&with_genres=99&sort_by=popularity.desc&language=ko"
        // "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&certification_country=US&certification=R&sort_by=vote_average.desc"
        // "http://api.themoviedb.org/3/discover/movie/?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&certification_country=US&certification=R&sort_by=vote_average.desc"
        // "https://api.themoviedb.org/3/movie/latest?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko"
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style>
.topheader-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.header {
  width: 100%;
  /*height: 60px;*/
  background: rgba(0, 0, 0, 0.7);
  padding: 17px
}
.header h1 {
  color: rgba(255, 0, 0, 0.7);
  font-size: 36px;
  font-weight: 900;
  /*margin-top: 9px;*/
  /*margin: 20px 0 0 20px;*/
  /*line-height: 70px;*/
  padding: 5px 12px 3px 12px;
  display: inline-block;
  border: 3px solid rgba(255, 0, 0, 0.7);
  border-radius: 20px;
}
.test {
  width: 80px;
  height: 30px;
  font-size: 23px;
}
</style>


