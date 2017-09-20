<template>
  <div class="rating-container" :class="carouselClass">
      <div class="rating-carousel" v-for="(item, index) in carouselData" :key="item.id"> 
        <div class="rating-wrapper" >
          <!--캐러셀 화살표-->
          <button class="carousel-left" type="button" :value="`left${index+1}`" @click="pushLeft">
            <span> < </span>
          </button>
          <button class="carousel-right" type="button" :value="`right${index+1}`" @click="pushRight">
            <span> > </span>
          </button>
          <!--그라디언트 이미지-->
          <img class="rating-gradient" src="../assets/gradient6.png">
          <!--영화 이미지-->
          <img class="rating-poster" v-bind:src="item.backdrop_path">
          <!--영화 설명 영역-->
          <div class="rating-description">
            <h2 class="rating-title"> {{ item.title }} </h2>
            <div class="rating-subtitle">
              <h5> {{ item.original_title }} </h5>
              <span> {{ item.release_date }} </span>
            </div>
            <div class="rating-tagline">
              {{ item.tagline }}
            </div>
            <div class="rating-overview">
              {{ item.overview }}
            </div>
          </div>
        </div>  
      </div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  created() {
    this.getRatingData();
  },
  data() {
    return {
      ratingData : "",
      ratingId: [],
      carouselData: [],
      carouselClass: ""
    }
  },
  methods: {
    // Rating 통신
    getRatingData() {
      // Popularity Rank 20 Movie 통신
      this.$http.get(
        this.$store.state.url_rating
      )
      .then(response => {
        this.ratingData = response.data.results;
        // Popularity Top Rank 10 Movie 통신 : ID
        for(let i=0; i<10; i++) {
          this.ratingId.push(this.ratingData[i].id);
        }      
        // Popularity Top Rank 10 Movie 통신 : Movie Detail (Carousel Data)
        for(let i=0; i<10; i++) {
          this.$http.get(
            this.$store.state.url_movie + this.ratingId[i] + this.$store.state.api_key + "&language=ko"
          )
          .then(response => {
            this.carouselData.push(response.data);
            this.carouselData[i].backdrop_path = this.$store.state.url_backdrop + response.data.backdrop_path;
          })
          .catch(error => {
            console.log(error);
          })
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    pushLeft(e) {
      let targetValue = e.target.parentElement.attributes[1].value;
      console.log(targetValue);
      switch(targetValue) {
        case 'left1':
          this.carouselClass = 'push-left-1';
          break;          
        case 'left2':
          this.carouselClass = 'push-left-2';
          break;                  
        case 'left3':
          this.carouselClass = 'push-left-3';
          break;                  
        case 'left4':
          this.carouselClass = 'push-left-4';
          break;        
        case 'left5':
          this.carouselClass = 'push-left-5';
          break;
        case 'left6':
          this.carouselClass = 'push-left-6';
          break;
        case 'left7':
          this.carouselClass = 'push-left-7';
          break;
        case 'left8':
          this.carouselClass = 'push-left-8';
          break;
        case 'left9':
          this.carouselClass = 'push-left-9';
          break;
        case 'left10':
          this.carouselClass = 'push-left-10';
          break;
      }
    },
    pushRight(e) {
      let targetValue = e.target.parentElement.attributes[1].value;
      console.log(targetValue);
      switch(targetValue) {
        case 'right1':
          this.carouselClass = 'push-right-1';
          break;          
        case 'right2':
          this.carouselClass = 'push-right-2';
          break;                  
        case 'right3':
          this.carouselClass = 'push-right-3';
          break;                  
        case 'right4':
          this.carouselClass = 'push-right-4';
          break;        
        case 'right5':
          this.carouselClass = 'push-right-5';
          break;
        case 'right6':
          this.carouselClass = 'push-right-6';
          break;
        case 'right7':
          this.carouselClass = 'push-right-7';
          break;
        case 'right8':
          this.carouselClass = 'push-right-8';
          break;
        case 'right9':
          this.carouselClass = 'push-right-9';
          break;
        case 'right10':
          this.carouselClass = 'push-right-10';
          break;
      }
    },

  }
}
</script>

<style>
body {
  overflow: hidden;
}
/* 컨테이너 영역 */
.rating-container {
  width: 1000%;
}
/* 캐러셀 영역 */
.rating-carousel {
  width: 100vw;
  display: inline-block;
}
.rating-wrapper{
  width: 100%;
  background: #000; 
  height: 550px;
  position: relative;
  overflow: hidden;
}
.carousel-left {
  position: absolute;
  top: 200px;
  left: 0;
  z-index: 2000;
  font-size: 100px;
  font-weight: 600;
  color: rgba(250, 250, 250, 0.3);
  background: none;
  border: none;
  cursor: pointer;
}
.carousel-right {
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 2000;
  font-size: 100px;
  font-weight: 600;
  color: rgba(250, 250, 250, 0.3);
  background: none;  
  border: none;
  cursor: pointer;
}
@keyframes push-left-1 {
  from {
    margin-left: 0;
  }
  to {
    margin-left: -100vw;
  }
}
@keyframes push-left-2 {
  from {
    margin-left: -100vw;
  }
  to {
    margin-left: -200vw;    
  }
}
@keyframes push-left-3 {
  from {
    margin-left: -200vw;
  }
  to {
    margin-left: -300vw;  
  }
}
@keyframes push-left-4 {
  from {
    margin-left: -300vw;  
  }
  to {
    margin-left: -400vw;  
  }
}
@keyframes push-left-5 {
  from {
    margin-left: -400vw;  
  }
  to {
    margin-left: -500vw;  
  }
}
@keyframes push-left-6 {
  from {
    margin-left: -500vw;  
  }
  to {
    margin-left: -600vw;  
  }
}
@keyframes push-left-7 {
  from {
    margin-left: -600vw;  
  }
  to {
    margin-left: -700vw;  
  }
}
@keyframes push-left-8 {
  from {
    margin-left: -700vw;  
  }
  to {
    margin-left: -800vw;  
  }
}
@keyframes push-left-9 {
  from {
    margin-left: -800vw;  
  }
  to {
    margin-left: -900vw;  
  }
}
@keyframes push-left-10 {
  from {
    margin-left: -900vw;  
  }
  to {
    margin-left: 0;  
  }
}
.push-left-1 {
  animation-name: push-left-1;  
}
.push-left-2 {
  animation-name: push-left-2;
}
.push-left-3 {
  animation-name: push-left-3;
}
.push-left-4 {
  animation-name: push-left-4;
}
.push-left-5 {
  animation-name: push-left-5;
}
.push-left-6 {
  animation-name: push-left-6;
}
.push-left-7 {
  animation-name: push-left-7;
}
.push-left-8 {
  animation-name: push-left-8;
}
.push-left-9 {
  animation-name: push-left-9;
}
.push-left-10 {
  animation-name: push-left-10;
}
.push-left-1, .push-left-2, .push-left-3, .push-left-4, .push-left-5, .push-left-6, .push-left-7, .push-left-8, .push-left-9, .push-left-10 {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes push-right-1 {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-900vw);    
  }
}
@keyframes push-right-2 {
  from {
    transform: translateX(-100vw);    
  }
  to {
    transform: translateX(0);    
  }
}
@keyframes push-right-3 {
  from {
    transform: translateX(-200vw);    
  }
  to {
    transform: translateX(-100vw);        
  }
}
@keyframes push-right-4 {
  from {
    transform: translateX(-300vw);
  }
  to {
    transform: translateX(-200vw);  
  }
}
@keyframes push-right-5 {
  from {
    transform: translateX(-400vw);
  }
  to {
    transform: translateX(-300vw);  
  }
}
@keyframes push-right-6 {
  from {
    transform: translateX(-500vw);
  }
  to {
    transform: translateX(-400vw);  
  }
}
@keyframes push-right-7 {
  from {
    transform: translateX(-600vw);
  }
  to {
    transform: translateX(-500vw);  
  }
}
@keyframes push-right-8 {
  from {
    transform: translateX(-700vw);
  }
  to {
    transform: translateX(-600vw);  
  }
}
@keyframes push-right-9 {
  from {
    transform: translateX(-800vw);
  }
  to {
    transform: translateX(-700vw);  
  }
}
@keyframes push-right-10 {
  from {
    transform: translateX(-900vw);
  }
  to {
    transform: translateX(-800vw); 
  }
}
.push-right-1 {
  animation-name: push-right-1;  
}
.push-right-2 {
  animation-name: push-right-2;
}
.push-right-3 {
  animation-name: push-right-3;
}
.push-right-4 {
  animation-name: push-right-4;
}
.push-right-5 {
  animation-name: push-right-5;
}
.push-right-6 {
  animation-name: push-right-6;
}
.push-right-7 {
  animation-name: push-right-7;
}
.push-right-8 {
  animation-name: push-right-8;
}
.push-right-9 {
  animation-name: push-right-9;
}
.push-right-10 {
  animation-name: push-right-10;
}
.push-right-1, .push-right-2, .push-right-3, .push-right-4, .push-right-5, .push-right-6, .push-right-7, .push-right-8, .push-right-9, .push-right-10 {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}
/* 그라디언트 이미지 영역 */
.rating-gradient {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  /*height: 720px;*/
  z-index: 200;
  width: 80%;
  min-width: 978px; 
  min-height: 550px;
  /*border: 3px solid red;*/
}
/* 영화 이미지 영역 */
.rating-poster {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  /*max-height: 1280px;*/
  /*width: 300px;*/
  z-index: 100;  
  /*height: 550px;*/
  width: 80%;
  min-width: 978px; 
  min-height: 550px;
  /*margin-left: 100px;*/
}
/* 영화 설명 영역 */
.rating-description {
  position: absolute;
  top: 80px;
  left: 63%;
  z-index: 300;
  width: 30%;
  height: 550px;
  color: #eee;
  padding: 20px;
}
.rating-title{
  font-size: 47px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-left: -10px;
}
.rating-subtitle{
  margin-bottom: 30px;
  font-size: 14px;
}
.rating-subtitle h5 {
  display: inline-block;
}
.rating-subtitle span {
  display: inline-block;
}
.rating-tagline{
  margin-bottom: 30px;  
  font-size: 23px;
  font-weight: 400;
  line-height: 26px;
}
.rating-overview{
  line-height: 22px;
  font-size: 14px;
}
</style>


