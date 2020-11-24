import Vue from 'vue';
import Vuex from 'vuex';
import book from './book';

Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
     book : book,
   }
})