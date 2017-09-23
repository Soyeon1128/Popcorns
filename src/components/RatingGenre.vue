<template>
  <div class="rating-genre-container">
    <h2>장르별 인기순위</h2>
    <div class="genre-romance genre-area">
      <h4>로맨스</h4>
      <button class="genre-carousel-left" type="button">
        <span> < </span>
      </button>
      <button class="genre-carousel-right" type="button">
        <span> > </span>
      </button>
      <div class="genre-carousel-wrapper">
        <div class="genre-carousel" v-for="(item, index) in genreData" :key="item.id">
          <img class="genre-poster" :src="item.backdrop_path">
          <div class="genre-title">
            <span> {{ item.title }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingGenre',
  created() {
    this.getGenreData();
  },
  data() {
    return {
      genreData: "",
    }
  },
  methods: {
    getGenreData() {
      this.$http.get(
        "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&with_genres=10749&sort_by=popularity.desc&language=ko"
      )
      .then(response => {
        console.log(response.data);
        this.genreData = response.data.results;
        
        for(let i=0; i<20; i++) {
          this.genreData[i].backdrop_path = this.$store.state.url_backdrop + this.genreData[i].backdrop_path;
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
.rating-genre-container {
  background: pink;
  /*height: 1000px; */
}
.genre-area {
  height: 200px;
  background: orange;
  /*border: 2px solid blue;*/
  /*box-sizing: border-box;*/
  position: relative;
}
.genre-carousel-left {
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 300;
}
.genre-carousel-right {
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 300;
  
}
.genre-carousel-wrapper {
  background: blue;
  width: 5000px;
  height: 143px;
  /*padding: 0 50px;*/
  /*transform: translateX(-400px);*/
}
.genre-carousel {
  background: skyblue;
  border: 2px solid red;
  box-sizing: border-box;
  display: inline-block;
  width: 250px; 
  height: 146px; 
}
.genre-poster {
  max-height: 200px;
  width: 250px;
  /*display: inline-block;*/
  border: 2px solid #000;
  box-sizing: border-box;
  /*transform: translateX(-10%);*/
}
.genre-title {
  /*position: relative;*/

  /*float: right;*/
  transform: translateY(-26px);
  width: 250px;
  height: 26px;
  background: rgba(0,0,0,0.5);
  /*padding: 3px;*/
  overflow: hidden;
}
.parent::after {
  content: '';
  display: block;
  clear: both;
}
.genre-title span {
  float: right;
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  margin-right: 10px;
}
</style>

