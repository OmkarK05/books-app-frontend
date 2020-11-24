import Vue from 'vue';
import Vuex from 'vuex';
import book from './components/book';

Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
     book : book,
   }
})