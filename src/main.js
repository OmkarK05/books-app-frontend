import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {router} from './router/AppRoutes'
import MaterialIcons from 'material-icons'
import axios from 'axios';
import firebase from 'firebase/app';
import {firebaseConfig} from './firebase';
// import "firebase/database";

firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();
Vue.prototype.$axios = axios;

Vue.use(Vuesax);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(MaterialIcons);

export const EventBase = new Vue();

Vue.config.productionTip = false
import 'vuesax/dist/vuesax.css';
import {store} from './Store/rootStore'
import 'material-icons/iconfont/material-icons.css';



new Vue({
  store : store,
  router,
  render: h => h(App),
}).$mount('#app')


//Apollo Client setup
// import vueApollo from 'vue-apollo';
// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo';
// import { ApolloClient } from 'apollo-boost';
//Vue.use(vueApollo);

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'http://localhost:8000/graphql',
// })
//
// // Cache implementation
// const cache = new InMemoryCache()
//
// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })
// const apolloProvider = new VueApollo({
//   defaultClient : apolloClient,
// })