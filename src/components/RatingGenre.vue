<template>
  <div class="rating-genre-container">
    <h2>장르별 인기순위</h2>
    <div class="genre-area" v-for="(items, index) in genreData" :key="items[index].id">
      <h4> {{ genreName[index] }} </h4>
      <button class="genre-carousel-left" type="button" @click="assignClassLeft(index)">
        <span> < </span>
      </button>
      <button class="genre-carousel-right" type="button" @click="assignClassRight(index)">
        <span> > </span>
      </button>
      <div class="genre-carousel-wrapper" :class="classArray[index]">
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
      genreName: ["로맨스", "코미디", "액션", "SF", "공포", "애니메이션", "음악", "다큐멘터리"],
      classArray: [ "", "", "", "", "", "", "", "" ]
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
    assignClassLeft(index) {
      for(let i=0; i<8; i++) {
        if ( index === i ) {
          switch ( this.classArray[i] ) {
            case "" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-3");
            break;
            case "genre-left-0" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-3");
            break;
            case "genre-left-1" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-0");
            break;
            case "genre-left-2" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-1");
            break;
            case "genre-left-3" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-2");
            break;
            case "genre-right-0" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-3");
            break;
            case "genre-right-1" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-0");
            break;
            case "genre-right-2" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-1");
            break;
            case "genre-right-3" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-left-2");
            break;
          }
        }
      }
    },
    assignClassRight(index) {
      for(let i=0; i<8; i++) {
        if ( index === i ) {
          switch ( this.classArray[i] ) {
            case "" :
                this.classArray.splice(i,1);
                this.classArray.splice(i,0,"genre-right-1");
            break;
            case "genre-right-3" :
                this.classArray.splice(i,1);
                this.classArray.splice(i,0,"genre-right-0");
            break;
            case "genre-right-2" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-right-3");
            break;
            case "genre-right-1" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-right-2");
            break;
            case "genre-right-0" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-right-1");
            break;
            case "genre-left-3" :
                this.classArray.splice(i,1);
                this.classArray.splice(i,0,"genre-right-0");
            break;
            case "genre-left-2" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-right-3");
            break;
            case "genre-left-1" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-right-2");
            break;
            case "genre-left-0" :
              this.classArray.splice(i,1);
              this.classArray.splice(i,0,"genre-right-1");
            break;
          }
        }
      }
    },
  }
}
</script>

<style>
.rating-genre-container {
  background: pink;
  overflow: hidden;
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
}
/* push left 2 -> 1 */
@keyframes genre-left-1 {
  from {
    transform: translateX(-2415px);
  }
  to {
    transform: translateX(-1155px);
  } 
}
/* push left 3 -> 2 */
@keyframes genre-left-2 {
  from {
    transform: translateX(-3575px);
  }
  to {
    transform: translateX(-2415px);
  }  
}
/* push left 0 -> 3 */
@keyframes genre-left-3 {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-3575px);
  }  
}
/* push left 1 -> 0 */
@keyframes genre-left-0 {
  from {
    transform: translateX(-1155px);    
  }
  to {
    transform: translateX(0px);
  }
}
/* push right 0 -> 1 */
@keyframes genre-right-1 {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-1155px);
  } 
}
/* push right 1 -> 2 */
@keyframes genre-right-2 {
  from {
    transform: translateX(-1155px);
  }
  to {
    transform: translateX(-2415px);
  }  
}
/* push right 2 -> 3 */
@keyframes genre-right-3 {
  from {
    transform: translateX(-2415px);
  }
  to {
    transform: translateX(-3575px);
  }  
}
/* push right 3 -> 0 */
@keyframes genre-right-0 {
  from {
    transform: translateX(-3575px);
  }
  to {
    transform: translateX(0px);
  }
}
.genre-left-1 {
  animation-name: genre-left-1;
}
.genre-left-2 {
  animation-name: genre-left-2;
}
.genre-left-3 {
  animation-name: genre-left-3;
}
.genre-left-0 {
  animation-name: genre-left-0;
}
.genre-right-1 {
  animation-name: genre-right-1;
}
.genre-right-2 {
  animation-name: genre-right-2;
}
.genre-right-3 {
  animation-name: genre-right-3;
}
.genre-right-0 {
  animation-name: genre-right-0;
} 
.genre-left-1, .genre-left-2, .genre-left-3, .genre-left-0, .genre-right-1, .genre-right-2, .genre-right-3, .genre-right-0 {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}
.genre-carousel {
  background: skyblue;
  /*border: 2px solid red;*/
  /*box-sizing: border-box;*/
  display: inline-block;
  width: 250px; 
  height: 146px;
  overflow: hidden;
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

