<template>
  <div class="rating-container">
    <!--<h1 @click="getData">!통신!</h1>-->
    <div class="rating-area">
      <!--영화 이미지 영역-->
      <div class="rating-img-area">
        <div class="rating-poster-wrapper">
          <div class="rating-poster-gradient"></div>
          <img class="rating-poster" src="https://image.tmdb.org/t/p/w500/65RFjAnMAvWMN9iWgOdpZ9ahH5e.jpg">
          
        </div>
      </div>
      <!--영화 설명 영역-->
      <div class="rating-description-area">
        <h2 class="rating-title">미니언즈</h2>
        <div class="rating-subtitle">
          <h5>Minions</h5>
          <span>2015-06-17</span>
        </div>
        <div class="rating-taglines">
          비켜, 이 구역의 주인공은 나야! 최고의 악당을 찾아 떠나는 ‘슈퍼배드 원정대’의 모험이 시작된다!
        </div>
        <div class="rating-overview">
          인류가 탄생하기 훨씬 오래 전, 태초에 미니언이 있었다. 당대 최고의 슈퍼 악당만을 보스로 섬겨온 미니언들!  하지만 의도치 않은 치명적(?) 실수로 인해 보스들과 이별하게 되고, 우울증에 빠진 미니언들을 구하기 위해 용감한 리더 ‘케빈’은 자유로운 영혼 ‘스튜어트’와 무한 긍정 ‘밥’과 함께 ‘슈퍼배드 원정대’를 결성한다.  세계 악당 챔피언십에 참석해 최초의 여성 슈퍼 악당 ‘스칼렛’(산드라 블록)을 보고 첫눈에 홀~딱 반한 이들은 일생일대의 위기가 다가오는지도 모른 채 스칼렛의 특급 미션을 넙죽 받게 되는데…"
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  methods : {
    // getData() {
    //   this.$http.get(
    //     // "https://api.themoviedb.org/3/search/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&query=boyhood"
    //     // "https://api.themoviedb.org/3/movie/346364?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko"
    //     // "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&sort_by=popularity.desc"

    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // }
  }
}
</script>

<style>
.rating-area {
  width: 80%;
  background: orange; 
  margin-left: 10%;
  height: 600px;
}
.rating-img-area {
  width: 50%;
  background: green;
  float: left;
  height: 550px;  
  /*position: relative;*/
}
.rating-poster-wrapper {
  position: relative;
  width: 100%;
  height: 550px;
  background: pink;
  
}
.rating-poster-gradient {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);  
  height: 500px;
  width: 400px;
  border: 3px solid red;
  z-index: 10000;
  background: -moz-radial-gradient(center, ellipse cover, transparent 80%, #000000 100%); /* ff3.6+ */
background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(80%, transparent), color-stop(100%, #000000)); /* safari4+,chrome */
background: -webkit-radial-gradient(center, ellipse cover, transparent 80%, #000000 100%); /* safari5.1+,chrome10+ */
background: -o-radial-gradient(center, ellipse cover, transparent 80%, #000000 100%); /* opera 11.10+ */
background: -ms-radial-gradient(center, ellipse cover, transparent 80%, #000000 100%); /* ie10+ */
background: radial-gradient(ellipse at center, transparent 80%, #000000 100%); /* w3c */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000',GradientType=1 ); /* ie6-9 */
}
.rating-poster {
  position: absolute;
  top: 0;
  left: 50%;
  height: 500px;
  transform: translateX(-50%);
  z-index: 1000;  
  /*height: 550px;*/
  /*margin-left: 100px;*/
}
.rating-description-area {
  width: 50%;
  background: blue;
  float: left;
  height: 550px;
  
  /*position: relative; */
}
.rating-title{
  /*display: inline-block;*/
}
.rating-subtitle{
  /*display: inline-block;*/
}
.rating-subtitle h5 {
  display: inline-block;
}
.rating-subtitle span {
  display: inline-block;
}
.rating-taglines{
  /*display: inline-block;*/
}
.rating-overview{
  /*display: inline-block;*/
}
</style>

