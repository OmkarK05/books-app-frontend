import VueRouter from 'vue-router'
import LandingPage from '../Pages/LandingPage'
import SavedBooks from '../Pages/SavedBooks'
import AddBook from '../Pages/AddBook'
import Group from '../Pages/AppGroup'


let routes = [
{path : '/' , component: LandingPage},
{path : '/saved-books' , component: SavedBooks},
{path : '/add-book' , component: AddBook},
{path : '/group' , component: Group},
];

export const router = new VueRouter({
    routes
})