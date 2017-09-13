<template>
  <div id="app">

    <!--헤더 영역-->
    <header class="header">
      <h2>HEADER</h2>
    </header>

    <!--메인 영역-->
    <div class="main">
      <div class="rank-area">
        <h2 @click="getData">순위</h2>
      </div>
      <div class="search-area">
        <h2>검색</h2>        
      </div>
    </div>

    <!--푸터 영역-->
    <footer class="footer">
      <h2>FOOTER</h2>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods : {
    getData() {
      this.$http.get("http://api.themoviedb.org/3/movie/198277/casts?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko", {

      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
}
</script>

<style>
/*헤더 영역*/
.header {
  background: yellow;
}

/*메인 영역*/
.main {
  background: pink;
}
.rank-area {
  background: orange;  
}
.search-area {
  background: green;  
}

/*푸터 영역*/
.footer {
  background: red;  
}
</style>
