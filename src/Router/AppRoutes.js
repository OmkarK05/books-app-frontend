import VueRouter from 'vue-router'
import LandingPage from '../Pages/LandingPage'
import SavedBooks from '../Pages/SavedBooks'
import AddBook from '../Pages/AddBook'
import Group from '../Pages/AppGroup'
import Images from '../components/Images'
import Videos from '../components/Videos'
import Gifs from '../components/Gifs'



let routes = [
{path : '/' , component: LandingPage},
{path : '/saved-books' , component: SavedBooks},
{path : '/add-book' , component: AddBook},
{path : '/group' , component: Group},
{path : '/images' , component: Images},
{path : '/videos' , component: Videos},
{path : '/gifs' , component: Gifs},

];

export const router = new VueRouter({
    routes
})