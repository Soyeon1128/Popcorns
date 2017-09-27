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
      classArray: [ "", "", "", "", "", "", "", ""]
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
      if ( index === 0 ) {     
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[0] ) {
          switch ( this.classArray[0] ) {
            case "genre-carousel-1" :
              this.classArray.splice(0,1);
              this.classArray.splice(0,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(0,1);
              this.classArray.splice(0,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(0,1);
              this.classArray.splice(0,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[0] ) {
          this.classArray.splice(0,1);
          this.classArray.splice(0,0,"genre-carousel-3");
        }
      }
      else if ( index === 1 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[1] ) {
          switch ( this.classArray[1] ) {
            case "genre-carousel-1" :
              this.classArray.splice(1,1);
              this.classArray.splice(1,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(1,1);
              this.classArray.splice(1,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(1,1);
              this.classArray.splice(1,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[1] ) {
          this.classArray.splice(1,1);
          this.classArray.splice(1,0,"genre-carousel-3");
        }
      }
      else if ( index === 2 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[2] ) {
          switch ( this.classArray[2] ) {
            case "genre-carousel-1" :
              this.classArray.splice(2,1);
              this.classArray.splice(2,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(2,1);
              this.classArray.splice(2,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(2,1);
              this.classArray.splice(2,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[2] ) {
          this.classArray.splice(2,1);
          this.classArray.splice(2,0,"genre-carousel-3");
        }
      }
      else if ( index === 3 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[3] ) {
          switch ( this.classArray[3] ) {
            case "genre-carousel-1" :
              this.classArray.splice(3,1);
              this.classArray.splice(3,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(3,1);
              this.classArray.splice(3,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(3,1);
              this.classArray.splice(3,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[3] ) {
          this.classArray.splice(3,1);
          this.classArray.splice(3,0,"genre-carousel-3");
        }
      }
      else if ( index === 4 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[4] ) {
          switch ( this.classArray[4] ) {
            case "genre-carousel-1" :
              this.classArray.splice(4,1);
              this.classArray.splice(4,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(4,1);
              this.classArray.splice(4,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(4,1);
              this.classArray.splice(4,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[4] ) {
          this.classArray.splice(4,1);
          this.classArray.splice(4,0,"genre-carousel-3");
        }
      }
      else if ( index === 5 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[5] ) {
          switch ( this.classArray[5] ) {
            case "genre-carousel-1" :
              this.classArray.splice(5,1);
              this.classArray.splice(5,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(5,1);
              this.classArray.splice(5,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(5,1);
              this.classArray.splice(5,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[5] ) {
          this.classArray.splice(5,1);
          this.classArray.splice(5,0,"genre-carousel-3");
        }
      }
      else if ( index === 6 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[6] ) {
          switch ( this.classArray[6] ) {
            case "genre-carousel-1" :
              this.classArray.splice(6,1);
              this.classArray.splice(6,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(6,1);
              this.classArray.splice(6,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(6,1);
              this.classArray.splice(6,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[6] ) {
          this.classArray.splice(6,1);
          this.classArray.splice(6,0,"genre-carousel-3");
        }
      }
      else if ( index === 7 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[7] ) {
          switch ( this.classArray[7] ) {
            case "genre-carousel-1" :
              this.classArray.splice(7,1);
              this.classArray.splice(7,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(7,1);
              this.classArray.splice(7,0,"genre-carousel-1");
            break;
            case "genre-carousel-3" :
              this.classArray.splice(7,1);
              this.classArray.splice(7,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[7] ) {
          this.classArray.splice(7,1);
          this.classArray.splice(7,0,"genre-carousel-3");
        }
      }
    },
    assignClassRight(index) {
      if ( index === 0 ) {     
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[0] ) {
          switch ( this.classArray[0] ) {
            case "genre-carousel-3" :
              this.classArray.splice(0,1);
              this.classArray.splice(0,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(0,1);
              this.classArray.splice(0,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(0,1);
              this.classArray.splice(0,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[0] ) {
          this.classArray.splice(0,1);
          this.classArray.splice(0,0,"genre-carousel-1");
        }
      }
      else if ( index === 1 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[1] ) {
          switch ( this.classArray[1] ) {
            case "genre-carousel-3" :
              this.classArray.splice(1,1);
              this.classArray.splice(1,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(1,1);
              this.classArray.splice(1,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(1,1);
              this.classArray.splice(1,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[1] ) {
          this.classArray.splice(1,1);
          this.classArray.splice(1,0,"genre-carousel-1");
        }
      }
      else if ( index === 2 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[2] ) {
          switch ( this.classArray[2] ) {
            case "genre-carousel-3" :
              this.classArray.splice(2,1);
              this.classArray.splice(2,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(2,1);
              this.classArray.splice(2,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(2,1);
              this.classArray.splice(2,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[2] ) {
          this.classArray.splice(2,1);
          this.classArray.splice(2,0,"genre-carousel-1");
        }
      }
      else if ( index === 3 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[3] ) {
          switch ( this.classArray[3] ) {
            case "genre-carousel-3" :
              this.classArray.splice(3,1);
              this.classArray.splice(3,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(3,1);
              this.classArray.splice(3,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(3,1);
              this.classArray.splice(3,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[3] ) {
          this.classArray.splice(3,1);
          this.classArray.splice(3,0,"genre-carousel-1");
        }
      }
      else if ( index === 4 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[4] ) {
          switch ( this.classArray[4] ) {
            case "genre-carousel-3" :
              this.classArray.splice(4,1);
              this.classArray.splice(4,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(4,1);
              this.classArray.splice(4,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(4,1);
              this.classArray.splice(4,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[4] ) {
          this.classArray.splice(4,1);
          this.classArray.splice(4,0,"genre-carousel-1");
        }
      }
      else if ( index === 5 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[5] ) {
          switch ( this.classArray[5] ) {
            case "genre-carousel-3" :
              this.classArray.splice(5,1);
              this.classArray.splice(5,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(5,1);
              this.classArray.splice(5,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(5,1);
              this.classArray.splice(5,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[5] ) {
          this.classArray.splice(5,1);
          this.classArray.splice(5,0,"genre-carousel-1");
        }
      }
      else if ( index === 6 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[6] ) {
          switch ( this.classArray[6] ) {
            case "genre-carousel-3" :
              this.classArray.splice(6,1);
              this.classArray.splice(6,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(6,1);
              this.classArray.splice(6,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(6,1);
              this.classArray.splice(6,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[6] ) {
          this.classArray.splice(6,1);
          this.classArray.splice(6,0,"genre-carousel-1");
        }
      }
      else if ( index === 7 ) {
        // 기존에 클래스명이 존재할 경우
        if ( !!this.classArray[7] ) {
          switch ( this.classArray[7] ) {
            case "genre-carousel-3" :
              this.classArray.splice(7,1);
              this.classArray.splice(7,0,"");
            break;
            case "genre-carousel-2" :
              this.classArray.splice(7,1);
              this.classArray.splice(7,0,"genre-carousel-3");
            break;
            case "genre-carousel-1" :
              this.classArray.splice(7,1);
              this.classArray.splice(7,0,"genre-carousel-2");
            break;
          }
        }
        // 기존에 클래스명이 존재하지 않을 경우
        else if ( !this.classArray[7] ) {
          this.classArray.splice(7,1);
          this.classArray.splice(7,0,"genre-carousel-1");
        }
      }
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
.genre-carousel-1 {
  transform: translateX(-1155px);  
}
.genre-carousel-2 {
  transform: translateX(-2415px);  
}
.genre-carousel-3 {
  transform: translateX(-3575px);  
}
.genre-carousel {
  background: skyblue;
  /*border: 2px solid red;*/
  /*box-sizing: border-box;*/
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

