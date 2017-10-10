<template>

  <div class="information-container">
  <top-header/>
    <img class="info-bg" :src="movieData.backdrop_path" alt="배경 이미지">
    <div class="info-wrapper">
      <h2 class="info-header">Movie Detail</h2>
      <div class="info-movie">
        <div class="info-poster">
          <img :src="movieData.poster_path" alt="포스터 이미지">
        </div>
        <div class="info-description">
          <div class="info-title"> {{ movieData.title }} </div>
          <div class="info-original-title">  {{ movieData.original_title }} </div>
          <div class="info-date"> {{ movieData.release_date }} </div>
          <div class="info-runtime" v-if="is_runtime"> {{ is_runtime }}분 </div>
          <div class="info-rating">
            <div class="rating-star" :class="star_1">★</div>
            <div class="rating-star" :class="star_2">★</div>
            <div class="rating-star" :class="star_3">★</div>
            <div class="rating-star" :class="star_4">★</div>
            <div class="rating-star" :class="star_5">★</div>
              <!--<img class="star-img" src="../assets/rating_star.png" alt="">-->
              <!--<img class="coloring-img" :class="starClass" src="../assets/rating_bg.png" alt="">-->
            <span class="rating-score"> {{ movieData.vote_average }} </span>
          </div>
          <div class="info-genre">
            <div class="genre-item" v-for="(item,index) in genre_array" :key="genre_array[index]"> {{ item }} </div>
          </div>
          <div class="info-company">
            <div class="company-item" v-for="(item,index) in company_array" :key="company_array[index]"> {{ item }} </div>
          </div>
          <!--<div class="info-plot">-->
            <!--<span class="tagline-quote">"</span>-->
          <div class="info-tagline"> {{ movieData.tagline }} </div>
            <!--<span class="tagline-quote">"</span>-->
          <textarea class="info-overview" type="text" readonly="readonly" v-model="movieData.overview"></textarea>
          <!--</div>-->
        </div>
      </div>
      <div class="info-credit">
        <h2> Director & Actor </h2>
        <div class="credit-wrapper">
          <div class="info-crew">
            <div class="crew-img-wrapper">
              <img class="crew-img" :src="crewData.profile_path" alt="감독 프로필 이미지">
            </div>
            <div class="credit-item crew-name"> {{ crewData.name }} </div>
            <h4 class="credit-item crew-department"> 감독 </h4>                      
          </div>
          <div class="info-cast" v-for="(item, index) in castData" :key="item.cast_id">
            <div class="cast-img-wrapper">            
              <img class="cast-img" :src="item.profile_path" alt="배우 프로필 이미지">
            </div>
            <div class="credit-item cast-name"> {{ item.name }} </div>
            <div class="credit-item cast-character"> {{ item.character }} 역</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from './TopHeader.vue'

export default {
  name: 'Information',
  components: {
    TopHeader
  },
  created() {
    this.getMovieData(this.$route.params.ID);
  },
  data () {
    return {
      movieData: "",
      star_1: "coloring_full",
      star_2: "coloring_full",
      star_3: "coloring_full",
      star_4: "coloring_half",
      star_5: "coloring_none",
      genre_array: [],
      company_array: [],
      is_runtime: "",
      creditData: "",
      castData: [],
      crewData: [],
    }
  },
  methods: {
    getMovieData(movieId) {
      // let movieId = "155";
      // let movieId = "293660";
      // let movieId = "27205";
      // let movieId = "13";
      // let movieId = "372058";
      // let movieId = "296096";
      // let movieId = "597";
      // let movieId = "310";
      // let movieId = "343668";

      this.$http.get(
        this.$store.state.url_movie + movieId + this.$store.state.api_key + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.movieData = response.data;

        // 별점 클래스 스타일 동적 생성
        let score = this.movieData.vote_average;
        if ( score === 10) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_full";
          this.star_3 = "coloring_full";
          this.star_4 = "coloring_full";
          this.star_5 = "coloring_full";
        }
        else if ( score >= 9 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_full";
          this.star_3 = "coloring_full";
          this.star_4 = "coloring_full";
          this.star_5 = "coloring_half";
        }
        else if ( score >= 8 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_full";
          this.star_3 = "coloring_full";
          this.star_4 = "coloring_full";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 7 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_full";
          this.star_3 = "coloring_full";
          this.star_4 = "coloring_half";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 6 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_full";
          this.star_3 = "coloring_full";
          this.star_4 = "coloring_none";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 5 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_full";
          this.star_3 = "coloring_half";
          this.star_4 = "coloring_none";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 4 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_full";
          this.star_3 = "coloring_none";
          this.star_4 = "coloring_none";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 3 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_half";
          this.star_3 = "coloring_none";
          this.star_4 = "coloring_none";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 2 ) {
          this.star_1 = "coloring_full";
          this.star_2 = "coloring_none";
          this.star_3 = "coloring_none";
          this.star_4 = "coloring_none";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 1 ) {
          this.star_1 = "coloring_half";
          this.star_2 = "coloring_none";
          this.star_3 = "coloring_none";
          this.star_4 = "coloring_none";
          this.star_5 = "coloring_none";
        }
        else if ( score >= 0 || null ) {
          this.star_1 = "coloring_none";
          this.star_2 = "coloring_none";
          this.star_3 = "coloring_none";
          this.star_4 = "coloring_none";
          this.star_5 = "coloring_none";
        }
      
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
          this.$store.state.url_movie + movieId + "/credits" + this.$store.state.api_key + this.$store.state.url_korean
        )
        .then(response => {
          this.creditData = response.data;

          // crew 데이터
          let crew_length = this.creditData.crew.length;
          for (let i=0; i<crew_length; i++) {
            if ( this.creditData.crew[i].department === "Directing") {
              this.crewData = this.creditData.crew[i];
              break;
            }
          }
          if ( !!this.crewData.profile_path ) {
            this.crewData.profile_path = this.$store.state.url_profile + this.crewData.profile_path;            
          }
          else {
            this.crewData.profile_path = this.$store.state.url_noprofile;
          }

          // cast 데이터
          for(let i=0; i<11; i++) {
            if( !!this.creditData.cast[i].profile_path ) {
              this.creditData.cast[i].profile_path = this.$store.state.url_profile + this.creditData.cast[i].profile_path;
            }
            else {
              this.creditData.cast[i].profile_path = this.$store.state.url_noprofile;              
            }
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
  position: relative;
}
.info-bg {
  position: absolute;
  z-index: 100;
  width: 100%;
  margin-top: 78px;
}
.info-wrapper {
  position: absolute;
  z-index: 200;
  background: rgba(0,0,0,0.8);
  /*padding: 84px 70px 0 70px;*/
  width: 100%;
  height: 805px;
  color: #ccc;
  /*margin-left: 10%;*/
  margin-top: 78px;
  font-size: 18px;
}
.info-header {
  font-size: 30px;
  /*padding: 30px;*/
  box-sizing: border-box;
  display: inline-block;
  padding: 20px 0 0 30px;
}
/* 영화 정보 영역 */
.info-movie {
  width: 74%;
  margin: 2% 0 0 16%;
  float: left;
  /*padding: 2% 0;*/
  height: 90%;
  box-sizing: border-box;
}
.info-poster {
  float: left;  
  width: 50%;
}
.info-poster img {
  width: 87%;
}
.info-description {
  float: left;  
  width: 50%;
  /*max-height: 670px;*/
  /*overflow: hidden;*/
  margin-top: 20px;
  /*padding-right: 30px;*/
  /*background: darkblue;*/
  /*padding-left: 50px;*/
  /*box-sizing: border-box;*/
}
.info-title {
  font-size: 40px;
  font-weight: 500;
  /*margin-left: -5px;*/
  margin-bottom: 10px;
}
.info-original-title {
  margin-bottom: 25px;
  /*margin-left: 5px;  */
}
.info-date {
  display: inline-block;
  margin-bottom: 15px;
  
  /*line-height: 34px;*/
}
.info-runtime {
  display: inline-block;
  margin-left: 10px;
  /*line-height: 34px;*/
}
.info-rating {
  display: inline-block;  
  margin-left: 15px;
  /*position: relative;*/
  /*width: 175px;*/
  /*margin-bottom: 25px;*/
  /*transform: translate(15px, 10px);*/
  /*font-size: 18px;*/
}
.rating-star {
  /*position: relative;*/
  /*width: 138px;
  height: 30px;
  overflow: hidden;*/
  display: inline-block;
  font-size: 20px;
}
.coloring_full {
  color: red;
}
.coloring_half {
  background: -webkit-linear-gradient(left, red 0%, red 50%, #444 50.1%,#444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.coloring_none {
  color: #444;
}
.rating-score {
  /*position: absolute;*/
  top: 0;
  right: 0;
  font-size: 20px;
  line-height: 34px;
}
.info-genre {
  margin-bottom: 10px;
}
.genre-item {
  margin-right: 10px; 
  display: inline-block;
}
.info-company {
  margin-bottom: 40px;
  width: 70%;
}
.company-item {
  margin-right: 10px; 
  display: inline-block;
  font-size: 14px;  
}
.tagline-quote {
  font-size: 30px;
  display: inline-block;
  margin-top: -30px;
}
.info-tagline {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  /*width: 400px;*/
  max-height: 57px;
  max-width: 450px;
  overflow: hidden;
}
.info-overview {
  line-height: 24px;
  font-size: 17px;
  border: none;
  background: transparent;
  color: inherit;
  font-weight: 200;
  width: 100%;
  height: 320px;

}
/* 인물 정보 영역 */
.info-credit {
  float: left;
  width: 100%;
  /*margin: 0 25%;*/
  /*padding-left: 25%;*/
}
.info-credit h2 {
  font-size: 30px;
  margin: 30px;
  display: inline-block;
}
.credit-wrapper {
  width: 100%;
  /*margin-left: 3%;*/
  padding: 0 5%;
  /*background: lightgreen;*/
  box-sizing: border-box;
  /*margin: 0 auto;*/
}
/*.credit-wrapper img {
  width: 185px;
  height: 278px;
}*/
.info-crew, .info-cast {
  display: inline-block;  
  width: 185px;
  /*background: yellow;*/
  height: 370px;
  margin: 0 1%;
}
.crew-img-wrapper, .cast-img-wrapper {
  position: relative;
  width: 185px;
  height: 278px;
  overflow: hidden;
}
.crew-img, .cast-img {
  /*min-height: 278px;*/
  /*width: 185px;*/
  height: 100%;
  position: absolute;
  /*top: 50%;*/
  left: 50%;
  transform: translateX(-50%); 
  float: left;
}
.credit-item {
  width: 185px;
  float: left;
}
.crew-name {
  font-weight: 700;
  margin-top: 10px;
}
.crew-department {
  font-weight: 300;
  font-size: 16px;
  margin-top: 5px;
}
.cast-name {
  font-weight: 700;
  margin-top: 10px;
}
.cast-character {
  font-weight: 300;
  font-size: 16px;
  margin-top: 5px;
}
</style>

