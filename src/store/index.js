import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueRouter from 'vue-router';
import {routes} from '../routes.js';


Vue.use(Vuex);
Vue.use(VueRouter);


export const store = new Vuex.Store({

  modules: {

  },

  state: {
    api_key : "?api_key=d699f344a468b575a26d5ea50f0265f4",
    url_discover : "http://api.themoviedb.org/3/discover/movie",
    url_movie : "https://api.themoviedb.org/3/movie/",
    url_search : "https://api.themoviedb.org/3/search/movie",
    // url_poster_small : "https://image.tmdb.org/t/p/w185",
    url_poster_small : "https://image.tmdb.org/t/p/w342",
    url_poster_large : "https://image.tmdb.org/t/p/w500",
    url_backdrop : "https://image.tmdb.org/t/p/w1280",  
    url_profile : "https://image.tmdb.org/t/p/w185",
    url_popularity : "&sort_by=popularity.desc",
    url_korean : "&language=ko",
    url_noposter : "http://imgur.com/pX9VPgU.jpg",
    url_noposter_search : "http://imgur.com/Sf8JCf0.jpg",
    url_noprofile : "http://imgur.com/ycmr3A3.jpg",
    search_keyword: "",
    search_data: ""
  },

  getters: {
    searchKeyword(state) {
      return state.search_keyword;
    },
    searchData(state) {
      return state.search_data;
    }
  },

  mutations: {
    showAllSearchResults(state, e) {
      // console.log("과아아앙아아아아연!",e);
      state.search_keyword = e.target.value;

      let keyword = state.search_keyword;
      
      axios.get(
        state.url_search + state.api_key + state.url_korean + "&query=" + keyword
      )
      .then(response => {
        state.search_data = response.data.results;
        
        let search_length = state.search_data.length;
        for(let i=0; i<search_length; i++) {
          if ( !!state.search_data[i].poster_path ) {
            state.search_data[i].poster_path = state.url_poster_small + state.search_data[i].poster_path;
          }
          else {
            state.search_data[i].poster_path = state.url_noposter_search;
          }
        }
        
      })
      .catch(error => {
        console.log(error);
      })

    },
  }

})