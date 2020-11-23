import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import Vuex from 'vuex'
import vueApollo from 'vue-apollo';
import VueRouter from 'vue-router'
import {router} from './Router/AppRoutes'
import MaterialIcons from 'material-icons'
// import firebase from "firebase/app";
// import {firebaseConfig} from "./firebase";
// import "firebase/database";
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


// let db = firebase.firestore();


Vue.use(Vuesax);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(MaterialIcons);
// Vue.use(firebase);
Vue.use(vueApollo);

const apolloProvider = new VueApollo({
  defaultClient : apolloClient,
})

Vue.config.productionTip = false
import 'vuesax/dist/vuesax.css';
import {store} from './Store/rootStore'
import 'material-icons/iconfont/material-icons.css';
import VueApollo from 'vue-apollo';
// import { ApolloClient } from 'apollo-boost';


new Vue({
  store : store,
  router,
  apollo:{
      //apollo specific
  },
    provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app')
