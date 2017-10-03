<template>
  <div class="information-container">
    <h2>영화 상세 정보</h2>
    <div class="info-wrapper">
      <div class="info-title"> {{ movieData.title }} </div>
      <div class="info-original-title"> {{ movieData.original_title }} </div>
      <div class="info-vote"> {{ movieData.vote_average }} </div>
      <div class="info-date"> {{ movieData.release_date }} </div>
      <div class="info-genre" v-for="(item,index) in genre_array" :key="genre_array[index]">
        <div class="genre-item"> {{ item }} </div>
      </div>
      <div class="info-company" v-for="(item,index) in company_array" :key="company_array[index]">
        <div class="company-item"> {{ item }} </div>
      </div>
      <!--<div class="info-countries"> {{ movieData.production_countries }} </div>-->
      <!--<div class="info-companies"> {{ movieData.production_companies }} </div>-->
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
      genre_array: [],
      company_array: []
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

        // 장르 배열
        let genre_length = this.movieData.genres.length;
        for(let i=0, l=genre_length; i<l; i++) {
          this.genre_array.push(this.movieData.genres[i].name);
        }

        // 제작사 배열
        let company_length = this.movieData.production_companies.length;
        for(let i=0, l=company_length; i<l; i++) {
          this.company_array.push(this.movieData.production_companies[i].name);
        }

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

