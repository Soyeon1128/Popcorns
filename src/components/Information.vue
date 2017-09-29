<template>
  <div class="information-container">
    <h2>영화 상세 정보</h2>
    <div class="info-wrapper">
      <div class="info-title"> {{ movieData.title }} </div>
      <div class="info-original-title"> {{ movieData.original_title }} </div>
      <div class="info-vote"> {{ movieData.vote_average }} </div>
      <div class="info-date"> {{ movieData.release_date }} </div>
      <div class="info-genres"> {{ movieData.genres }} </div>
      <div class="info-countries"> {{ movieData.production_countries }} </div>
      <div class="info-companies"> {{ movieData.production_companies }} </div>
      <div class="info-runtime"> {{ movieData.runtime }} </div>
      <div class="info-popularity"> {{ movieData.popularity }} </div>
      <div class="info-tagline"> {{ movieData.tagline }} </div>
      <div class="info-overview"> {{ movieData.overview }} </div>
      <div class="info-poster"> {{ movieData.poster_path }} </div>
      <div class="info-backdrop"> {{ movieData.backdrop_path }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  created() {
    this.getMovieData();
  },
  data () {
    return {
      movieData: "",
    }
  },
  methods: {
    getMovieData() {
      this.$http.get(
        this.$store.state.url_movie + "155" + this.$store.state.api_key + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.movieData = response.data;
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style>
.information-container {
  background: lightseagreen;
  /*padding-top: 84px;*/
  height: 1000px;
}
</style>

