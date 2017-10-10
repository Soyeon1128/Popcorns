import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {

  },

  state: {
    api_key : "?api_key=d699f344a468b575a26d5ea50f0265f4",
    url_discover : "http://api.themoviedb.org/3/discover/movie",
    url_movie : "https://api.themoviedb.org/3/movie/",
    url_search : "https://api.themoviedb.org/3/search/movie",
    url_poster_small : "https://image.tmdb.org/t/p/w342",
    url_poster_large : "https://image.tmdb.org/t/p/w500",
    url_backdrop : "https://image.tmdb.org/t/p/w1280",  
    url_profile : "https://image.tmdb.org/t/p/w185",
    url_popularity : "&sort_by=popularity.desc",
    url_korean : "&language=ko",
    url_noposter : "http://imgur.com/pX9VPgU.jpg",
    url_noprofile : "http://imgur.com/ycmr3A3.jpg",
  },

  getters: {

  }

})