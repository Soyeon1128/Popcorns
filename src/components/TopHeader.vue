<template>
  <div class="topheader-container">
    <header class="header">
      <h1 @click="goToMain">POPCORNS</h1>
      <!--<button class="test" @click="getTestData">통신</button> -->
      <!--<img src="../assets/header_img.png">-->
      <form class="search-form">
        <label for="search-movie"> 검색 </label>
        <input id="search-movie" type="text" placeholder="검색어를 입력해주세요." @input="goToSearch">
        <!--<input id="search-movie" type="text" placeholder="검색어를 입력해주세요." v-model="search_keyword" >-->
        <button class="search-btn fa fa-search" type="button"></button>
      </form>
    </header>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'TopHeader',
  data () {
    return {
      // searchKeyword: "",
      // searchData: ""
    }
  },
  computed: {
    ...mapGetters([
      // 'searchKeyword',
      // 'searchData',
    ])
  },
  methods : {
    ...mapMutations([
      'showAllSearchResults'
    ]),
    getTestData() {
      this.$http.get(
        // "https://api.themoviedb.org/3/search/person?api_key=d699f344a468b575a26d5ea50f0265f4&query=tom"
        // "https://api.themoviedb.org/3/person/31?api_key=d699f344a468b575a26d5ea50f0265f4"
        // "http://api.themoviedb.org/3/movie/155/casts?api_key=d699f344a468b575a26d5ea50f0265f4",        
        // "https://api.themoviedb.org/3/search/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&query=boyhood"
        // "https://api.themoviedb.org/3/movie/155?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko"
        // "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&sort_by=popularity.desc"
        // "https://api.themoviedb.org/3/genre/movie/list?api_key=d699f344a468b575a26d5ea50f0265f4"
        // "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&with_genres=99&sort_by=popularity.desc&language=ko"
        // "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&certification_country=US&certification=R&sort_by=vote_average.desc"
        // "http://api.themoviedb.org/3/discover/movie/?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&certification_country=US&certification=R&sort_by=vote_average.desc"
        // "https://api.themoviedb.org/3/movie/latest?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko"
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },
    goToMain() {
      this.$router.push({
        name: 'Main'
      })
    },
    goToSearch(e) {
      this.showAllSearchResults(e);

      this.$router.push({
        name: 'Search'
      })
    }
    // inputChangeSearch(e) {
    //   this.searchKeyword = e.target.value;

    //   let keyword = this.searchKeyword;

      // this.$http.get(
      //   this.$store.state.url_search + this.$store.state.api_key + this.$store.state.url_korean + "&query=" + keyword
      // )
      // .then(response => {
      //   this.searchData = response.data.results;
      //   this.$router.push({
      //     name: 'Search',
      //     params: {
      //       data: this.searchData
      //     }
      //   })
      // })
      // .catch(error => {
      //   console.log(error);
      // })
    // },
    // clickSearch(e) {
    //   let keyword = this.search_keyword;
      
    //   this.$http.get(
    //     this.$store.state.url_search + this.$store.state.api_key + this.$store.state.url_korean + "&query=" + keyword
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
.topheader-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 100%;
}
.header {
  width: 100%;
  /*background: #fff;*/
  background: rgba(0, 0, 0, 0.7);
  padding: 17px
}
.header h1 {
  color: rgba(255, 0, 0, 0.7);
  font-size: 36px;
  font-weight: 900;
  /*margin-top: 9px;*/
  /*margin: 20px 0 0 20px;*/
  /*line-height: 70px;*/
  padding: 5px 12px 3px 12px;
  display: inline-block;
  cursor: pointer;
  /*border: 3px solid rgba(255, 0, 0, 0.7);*/
  /*border-radius: 20px;*/
}
.test {
  width: 80px;
  height: 30px;
  font-size: 23px;
}
.search-form {
  /*background: green;*/
  display: inline-block;
  position: absolute;
  top: 28%;
  right: 3%;
}
.search-form label {
  color: rgba(255, 0, 0, 0.7);
  /*color: #ccc;*/
  font-size: 25px;
  font-weight: 500;
  margin-right: 5px;
  vertical-align: middle;
}
#search-movie {
  width: 250px;
  height: 24px;
  font-size: 18px;
  font-weight: 300;
  color: #ccc;
  border: 2px solid rgba(255, 0, 0, 0.7);
  background: transparent;
  border-radius: 12px;
  padding: 3px 10px;
  vertical-align: middle;
}
.search-btn {
  background: none;
  border: none;
  color: rgba(255, 0, 0, 0.7);
  font-size: 22px;
  cursor: pointer;
  vertical-align: middle; 
}
</style>


