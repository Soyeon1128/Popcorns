<template>
  <div class="rating-genre-container">
    <h2>장르별 인기순위</h2>
    <div class="genre-area" v-for="(items, index) in genreData" :key="items[index].id">
      <h4> {{ index }} </h4>
      <button class="genre-carousel-left" type="button">
        <span> < </span>
      </button>
      <button class="genre-carousel-right" type="button">
        <span> > </span>
      </button>
      <div class="genre-carousel-wrapper">
        <div class="genre-carousel" v-for="(item, index) in items" :key="item.id">
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
    this.getRomanceData();
    this.getComedyData();
    this.getActionData();
    this.getSfData();
    this.getHorrorData();
    this.getAnimationData();
    this.getMusicData();
    this.getDocumentaryData();
  },
  data() {
    return {
      genreData: [],
      
    }
  },
  methods: {
    getRomanceData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=10749" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[0][i].backdrop_path ) {
            this.genreData[0][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[0][i].backdrop_path;
          }
          else {
            this.genreData[0][i].backdrop_path = this.$store.state.url_noposter;
          }
        
        }

      })
      .catch(error => {
        console.log(error);
      })
    },
    getComedyData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=35" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[1][i].backdrop_path ) {
            this.genreData[1][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[1][i].backdrop_path;
          }
          else {
            this.genreData[1][i].backdrop_path = this.$store.state.url_noposter;
          }
        
        }

      })
      .catch(error => {
        console.log(error);
      })
    },
    getActionData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=28" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[2][i].backdrop_path ) {
            this.genreData[2][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[2][i].backdrop_path;
          }
          else {
            this.genreData[2][i].backdrop_path = this.$store.state.url_noposter;
          }
        
        }

      })
      .catch(error => {
        console.log(error);
      })
    },
    getSfData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=878" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[3][i].backdrop_path ) {
            this.genreData[3][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[3][i].backdrop_path;
          }
          else {
            this.genreData[3][i].backdrop_path = this.$store.state.url_noposter;
          }
        
        }

      })
      .catch(error => {
        console.log(error);
      })
    },
    getHorrorData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=27" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[4][i].backdrop_path ) {
            this.genreData[4][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[4][i].backdrop_path;
          }
          else {
            this.genreData[4][i].backdrop_path = this.$store.state.url_noposter;
          }
        
        }

      })
      .catch(error => {
        console.log(error);
      })
    },
    getAnimationData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=16" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[5][i].backdrop_path ) {
            this.genreData[5][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[5][i].backdrop_path;
          }
          else {
            this.genreData[5][i].backdrop_path = this.$store.state.url_noposter;
          }
        
        }

      })
      .catch(error => {
        console.log(error);
      })
    },
    getMusicData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=10402" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[6][i].backdrop_path ) {
            this.genreData[6][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[6][i].backdrop_path;
          }
          else {
            this.genreData[6][i].backdrop_path = this.$store.state.url_noposter;
          }
        
        }

      })
      .catch(error => {
        console.log(error);
      })
    },
    getDocumentaryData() {
      this.$http.get(
        this.$store.state.url_discover + this.$store.state.api_key + "&with_genres=99" + this.$store.state.url_popularity + this.$store.state.url_korean
      )
      .then(response => {
        console.log(response.data);
        this.genreData.push(response.data.results);

        for(let i=0; i<20; i++) {
          if ( !!this.genreData[7][i].backdrop_path ) {
            this.genreData[7][i].backdrop_path = this.$store.state.url_backdrop + this.genreData[7][i].backdrop_path;
          }
          else {
            this.genreData[7][i].backdrop_path = this.$store.state.url_noposter;
          }
        }

      })
      .catch(error => {
        console.log(error);
      })
    },

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

