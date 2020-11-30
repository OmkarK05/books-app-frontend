<template>
  <vs-row
    class="container"
    vs-justify="flex-end"
  >
    <vs-col
      class="sidebar"
      vs-w="1.5"
    >
      <app-sidebar
        :sidebar-content="sidebarContent"
      />
    </vs-col>
    <vs-col
      vs-w="10.5"
      class="main"
    >
      <vs-row>
        <app-header />
      </vs-row>
      <vs-row>
        <vs-col
          vs-w="12"
          class="section-container"
        >
          <router-view />
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { mapActions } from 'vuex';
import movies from '../assets/json/Movies.json';
import books from '../assets/json/Books.json';


export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppSidebar,
  },
  data: function () {
    return {
      sidebarContent: [
        {
          label: 'Home',
          icon: 'home',
          id: 'home-tab',
          iconSize: '18px',
          link: '/',
        },
        {
          label: 'Books',
          icon: 'books',
          id: 'books-tab',
          iconSize: '18px',
          link: '/books',
        }, {
          label: 'Movies',
          icon: 'movies',
          id: 'movie-tab',
          iconSize: '18px',
          link: '/movies',
        },
        {
          label: 'My Library',
          icon: 'library_books',
          id: 'myLibrary-tab',
          iconSize: '18px',
          link: '/saved-books',
        },
        {
          label: 'Add Book',
          icon: 'library_add',
          id: 'home-tab',
          iconSize: '18px',
          link: '/add-book',
        },
        {
          label: 'Groups',
          icon: 'group',
          id: 'groups-tab',
          iconSize: '18px',
          link: '/group',
        }
      ],

      user: {
        firstName: 'Omkar',
        lastName: 'Kesarkhane',
        city: 'Sangli',
        dateOfBirth: '1998-12-06',
        email: 'omkesarkhane@gmail.com',
      }
    };
  },

  mounted: function () {
    this.setInitialData();
  },

  methods: {
    ...mapActions({
      setBooks: 'book/setBooks',
      setUserDetails: 'user/setUserDetails',
      setMovies: 'movie/setMovies'
    }),

    setInitialData: function () {
      this.setBooks(books);
      this.setUserDetails(this.user);
      this.setMovies(movies);
    }
  }
};

</script>

<style lang="scss" scoped>
@import "./../assets/scss/mixins";

.main {
  justify-self: flex-end;
  align-self: end;
  width: 100%;
  transition: all 0.5s linear;
  border-radius: 15px;
  margin: 5px 0;
  padding: 0px 15px;

  @include Mobile() {
    margin-left: 0 !important;
    margin-right: 50px;
  }
}

.sidebar {
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
}

.container {
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.footer {
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  background-color: rgb(195, 197, 194);
}

.section-container {
  width: 100%;
  height: 100%;
}

</style>
