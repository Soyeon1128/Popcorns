<template>
  <div class="information-container">
    <h2 class="info-header">영화 상세 정보</h2>
    <div class="info-movie">
      <div class="info-wrapper info-img">
        <div class="info-poster">
          <img :src="movieData.poster_path" alt="포스터 이미지">
        </div>
      </div>
      <div class="info-wrapper info-description">
        <div class="info-title"> {{ movieData.title }} </div>
        <div class="info-original-title"> {{ movieData.original_title }} </div>
        <div class="info-date"> {{ movieData.release_date }} </div>
        <div class="info-runtime" v-if="is_runtime"> {{ is_runtime }}분 </div>
        <div class="info-vote"> ★☆★☆★ {{ movieData.vote_average }} </div>      
        <div class="info-genre">
          <div class="genre-item" v-for="(item,index) in genre_array" :key="genre_array[index]"> {{ item }} </div>
        </div>
        <div class="info-company">
          <div class="company-item" v-for="(item,index) in company_array" :key="company_array[index]"> {{ item }} </div>
        </div>
        <div class="info-tagline"> {{ movieData.tagline }} </div>
        <div class="info-overview"> {{ movieData.overview }} </div>
      </div>
    </div>
    <div class="info-credit">
      <div class="info-cast" v-for="(item, index) in castData" :key="item.cast_id">
        <div class="cast-item"> {{ item.character }} </div>
        <div class="cast-item"> {{ item.name }} </div>
        <div class="cast-item"> {{ item.gender }} </div>
        <img :src="item.profile_path" alt="">
      </div>
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
      company_array: [],
      is_runtime: "",
      creditData: "",
      castData: [],
      crewData: []
    }
  },
  methods: {
    getMovieData() {
      this.$http.get(
        this.$store.state.url_movie + "321612" + this.$store.state.api_key + this.$store.state.url_korean
        // this.$store.state.url_movie + "155" + this.$store.state.api_key + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.movieData = response.data;

        // genres 배열 데이터 저장
        let genre_length = this.movieData.genres.length;
        for(let i=0, l=genre_length; i<l; i++) {
          this.genre_array.push(this.movieData.genres[i].name);
        }
        // production companies 배열 데이터 저장
        let company_length = this.movieData.production_companies.length;
        for(let i=0, l=company_length; i<l; i++) {
          this.company_array.push(this.movieData.production_companies[i].name);
        }
        // runtime 유효성 검사 & 데이터 저장
        if ( !this.movieData.runtime ) {
          this.is_runtime = false;
        }
        else if ( !!this.movieData.runtime ){
          this.is_runtime = this.movieData.runtime;
        }
        // poster img
        this.movieData.poster_path = this.$store.state.url_poster_large + this.movieData.poster_path;
        // backdrop img
        this.movieData.backdrop_path = this.$store.state.url_backdrop + this.movieData.backdrop_path;

        // Credit 통신
        this.$http.get(
          this.$store.state.url_movie + "155" + "/credits" + this.$store.state.api_key + this.$store.state.url_korean
        )
        .then(response => {
          this.creditData = response.data;
          
          // cast 데이터
          for(let i=0; i<10; i++) {
            this.creditData.cast[i].profile_path = this.$store.state.url_profile + this.creditData.cast[i].profile_path;
            this.castData.push(this.creditData.cast[i]);
          }

        })
        .catch(error => {
          console.log(error);
        })

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
  background: #000;
  padding: 84px 50px 0 50px;
  height: 1000px;
  color: #ccc;
}
.info-header {
  font-size: 35px;
  font-weight: 500;
  margin: 10px 0 20px 0;
}
/* 영화 정보 영역 */
.info-movie {
  width: 100%;
  float: left;
}
.info-wrapper {
  float: left;
}
.info-img {
  width: 30%;
}
.info-img img {
  width: 100%;
}
.info-description {
  width: 50%;
  background: darkblue;
  padding: 10px;
}
.info-title {
  font-size: 30px;
}
.info-original-title {

}
.info-date {
  display: inline-block;
}
.info-runtime {
  display: inline-block;
}
.info-vote {
  background: orange;
  width: 100px;
  height: 25px;
  font-size: 20px;
}
.info-genre {
 
}
.genre-item {
  margin-right: 10px; 
  display: inline-block;
  
}
.info-company {

}
.company-item {
  margin-right: 10px; 
  display: inline-block;
  
}
.info-tagline {

}
.info-overview {

}
/* 인물 정보 영역 */
.info-credit {

}
</style>

