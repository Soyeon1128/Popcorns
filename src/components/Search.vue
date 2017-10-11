<template>
  <div class="search-container">
    <top-header/>
    <div class="search-wrapper">
      <h2> " <span>{{searchKeyword}}</span> " 검색 결과 </h2>
      <div class="search-item" v-for="(item, index) in searchData" :key="item.id">
        <div class="search-img-wrapper">
          <img class="search-img" :src="item.poster_path" alt="영화 포스터 이미지" :value="item.id" @click="clickSearch">
        </div>
        <div class="search-title"> {{ item.title }} </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import TopHeader from '../components/TopHeader.vue'

export default {
  name: 'Search',
  components: {
    TopHeader
  },
  data() {
    return {
      searchMovieId: ""
    }
  },
  // beforeupdate() {
  //   this.makeSearchData();
  // },
  computed: {
    ...mapGetters([
      'searchKeyword',
      'searchData',
    ])
  },
  methods : {
    clickSearch(e) {
      let click_search = e.target.attributes[2].value;
      this.searchMovieId = click_search;

       this.$router.push({
        name: 'Information',
        params: {
          ID: this.searchMovieId
        }
      })
    }
  }
}
</script>

<style>
.search-container {
  margin-top: 95px;
}
.search-wrapper{
  /*width: 100%;*/
  margin: 0 2%;
  /*margin: 0 10% 30px 10%;*/
}
.search-wrapper h2 {
  font-size: 30px;
  color: #ccc;
  margin: 0 0 35px 20px;
}
.search-wrapper span {
  font-weight: 700;
  color: #eee;  
}
.search-item {
  /*width: 300px;*/
  height: 450px;
  margin: 0 10px 40px 10px;
  /*display: inline-block;*/
  float: left;
  /*border: 3px solid red;*/
  /*background: darkblue;*/
}
.search-img-wrapper {
  position: relative;
  width: 250px;
  height: 360px;
  overflow: hidden;
}
.search-img {
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.search-title {
  color: #ccc;
  font-size: 20px;
  width: 250px;
  margin-top: 20px;
  padding: 0 3px;
  box-sizing: border-box;
}
</style>


