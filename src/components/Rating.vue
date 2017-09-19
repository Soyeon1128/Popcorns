<template>
  <div class="rating-container">
    <button class="carousel-left" type="button">
      <span> < </span>
    </button>
    <button class="carousel-right" type="button">
      <span> > </span>
    </button>
    <div class="rating-carousel-wrapper">
      <div class="rating-carousel"> 
        <div class="rating-wrapper">
          <!--그라디언트 이미지-->
          <img class="rating-gradient" src="../assets/gradient6.png">
          <!--영화 이미지-->
          <img class="rating-poster" src="https://image.tmdb.org/t/p/w1280/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg">
          <!--영화 설명 영역-->
          <div class="rating-description">
            <h2 class="rating-title">인터스텔라</h2>
            <div class="rating-subtitle">
              <h5>Interstellar | </h5>
              <span>2014-11-05</span>
            </div>
            <div class="rating-taglines">
              우린 답을 찾을 거야, 늘 그랬듯이
            </div>
            <div class="rating-overview">
              세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다. 나사 소속 우주비행사였던 쿠퍼(매튜 매커너헤이)는 지구에 몰아친 식량난으로 옥수수나 키우며 살고 있다. 거센 황사가 몰아친 어느 날 알 수 없는 힘에 이끌려 딸과 함께 도착한 곳은 인류가 이주할 행성을 찾는 나사의 비밀본부. 이 때 시공간에 불가사의한 틈이 열리고, 이 곳을 탐험해 인류를 구해야 하는 임무를 위해 쿠퍼는 만류하는 딸을 뒤로한 채 우주선에 탑승한다.
            </div>
          </div>
        </div>  
      </div>
    </div>
    <div class="rating-carousel-wrapper">
      <div class="rating-carousel">  
        <div class="rating-wrapper">
          <!--그라디언트 이미지-->
          <img class="rating-gradient" src="../assets/gradient6.png">
          <!--영화 이미지-->
          <img class="rating-poster" src="https://image.tmdb.org/t/p/w1280/tZvdyLP2F6x2TTuh292ceH87qZT.jpg">
          <!--영화 설명 영역-->
          <div class="rating-description">
            <h2 class="rating-title">캐리비안의 해적: 죽은 자는 말이 없다</h2>
            <div class="rating-subtitle">
              <h5>Pirates of the Caribbean: Dead Men Tell No Tales | </h5>
              <span>2017-05-23</span>
            </div>
            <div class="rating-taglines">
              죽음마저 집어삼킨 복수가 시작된다!
            </div>
            <div class="rating-overview">
              전설적인 해적 캡틴 ‘잭 스패로우’(조니 뎁)의 눈 앞에 죽음마저 집어삼킨 바다의 학살자  ‘살라자르’(하비에르 바르뎀)가 복수를 위해 찾아온다. 둘 사이에 숨겨진 엄청난 비밀···  잭은 자신과 동료들의 죽음에 맞서 살아남기 위해 사투를 시작하는데···  지금, 모든 것을 압도할 거대한 전투가 펼쳐진다!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rating-carousel-wrapper">
      <div class="rating-carousel">
        <div class="rating-wrapper">
          <!--그라디언트 이미지-->
          <img class="rating-gradient" src="../assets/gradient6.png">
          <!--영화 이미지-->
          <img class="rating-poster" src="https://image.tmdb.org/t/p/w1280/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg">
          <!--영화 설명 영역-->
          <div class="rating-description">
            <h2 class="rating-title">미니언즈</h2>
            <div class="rating-subtitle">
              <h5>Minions | </h5>
              <span>2015-06-17</span>
            </div>
            <div class="rating-taglines">
              비켜, 이 구역의 주인공은 나야! 최고의 악당을 찾아 떠나는 ‘슈퍼배드 원정대’의 모험이 시작된다!
            </div>
            <div class="rating-overview">
              인류가 탄생하기 훨씬 오래 전, 태초에 미니언이 있었다. 당대 최고의 슈퍼 악당만을 보스로 섬겨온 미니언들!  하지만 의도치 않은 치명적(?) 실수로 인해 보스들과 이별하게 되고, 우울증에 빠진 미니언들을 구하기 위해 용감한 리더 ‘케빈’은 자유로운 영혼 ‘스튜어트’와 무한 긍정 ‘밥’과 함께 ‘슈퍼배드 원정대’를 결성한다.  세계 악당 챔피언십에 참석해 최초의 여성 슈퍼 악당 ‘스칼렛’(산드라 블록)을 보고 첫눈에 홀~딱 반한 이들은 일생일대의 위기가 다가오는지도 모른 채 스칼렛의 특급 미션을 넙죽 받게 되는데…
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
}
</script>

<style>
body {
  overflow: hidden;
}
/* 컨테이너 영역 */
.rating-container {
  width: 305%;
}
/* 캐러셀 영역 */
.carousel-left {
  font-size: 100px;
  font-weight: 600;
  color: rgba(250, 250, 250, 0.4);
  position: fixed;
  top: 300px;
  left: 0;
  z-index: 2000;
  background: none;
  border: none;
  cursor: pointer;
}
.carousel-right {
  font-size: 100px;
  font-weight: 600;
  color: rgba(250, 250, 250, 0.2);
  position: fixed;
  top: 300px;
  right: 0;
  z-index: 2000;
  background: none;  
  border: none;
  cursor: pointer;
}
.rating-carousel-wrapper {
  width: 100vw;
  display: inline-block;
}
.rating-carousel {
  width: 100%;
}
.rating-wrapper{
  width: 101%;
  background: #000; 
  height: 550px;
  position: relative;
  overflow: hidden;
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
.rating-taglines{
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

