import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {

  },

  state: {
    api_key : "?api_key=d699f344a468b575a26d5ea50f0265f4",
    url_rating : "http://api.themoviedb.org/3/discover/movie?api_key=d699f344a468b575a26d5ea50f0265f4&language=ko&sort_by=popularity.desc",
    url_movie : "https://api.themoviedb.org/3/movie/",
    url_search : "https://api.themoviedb.org/3/search/movie",
    url_backdrop : "https://image.tmdb.org/t/p/w1280"
  },

  getters: {

  }

})