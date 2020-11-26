import VueRouter from 'vue-router';
import LandingPage from '../pages/LandingPage';
import SavedBooks from '../pages/SavedBooks';
import AddBook from '../pages/AddBook';
import Group from '../pages/AppGroup';
import User from '../pages/AppUser';


let routes = [
  { path: '/', component: LandingPage },
  { path: '/saved-books', component: SavedBooks },
  { path: '/add-book', component: AddBook },
  { path: '/group', component: Group },
  { path: '/user', component: User },

];

export const router = new VueRouter({
  routes
});