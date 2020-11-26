import Vue from 'vue';
import Vuex from 'vuex';
import book from './components/book';
import user from './components/user';
import movie from './components/movies';


Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
     book : book,
     user : user,
     movie : movie,
   }
})