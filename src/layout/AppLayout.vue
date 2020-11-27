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
        <!-- TODO: remove use of AppSection, add router-view directly and style the row instead -->
        <app-section />
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
import AppHeader from './AppHeader';
import AppSection from './AppSection';
import AppSidebar from './AppSidebar';
import { mapActions } from 'vuex';
import movies from '../assets/json/Movies.json';

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppSection,
    AppSidebar,
  },
  data: function () {
    return {
      // TODO delete isExtend comment 
      // isExtend: false,
      sidebarContent: [{
        label: 'Home',
        icon: 'home',
        id: 'home-tab',
        iconSize: '18px',
        link: '/',
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

      // TODO: move books to Movies.json and add genre & rating keys
      books: [
        {
          name: 'Long Bright River: A Novel',
          author: 'LIZ MOORE',
          image: 'https://hips.hearstapps.com/vader-prod' +
              '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*',
          id: 'book1',
          saved: false
        },
        {
          name: 'A Long Petal of the Sea: A Novel',
          author: 'ISABEL ALLENDE',
          image: 'https://hips.hearstapps.com' +
              '/vader-prod.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*',
          id: 'book2',
          saved: false
        },
        {
          name: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          image: 'https://hips.hearstapps.com/vader-prod' +
              '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*',
          id: 'book3',
          saved: false
        },
        {
          name: 'The Lord of the Rings',
          author: 'LIZ MOORE',
          image: 'https://hips.hearstapps.com/vader-prod' +
              '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id: 'book4',
          saved: false
        },
        {
          name: ' Harry Potter and the Philosopher’s Stone',
          author: 'J.K. Rowling', image: 'https://hips.hearstapp' +
              's.com/vader-prod.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*',
          id: 'book5',
          saved: false
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
    // TODO remove dead code
    // handleExtend: function (extend) {
    //   this.isExtend = extend;
    // },

    ...mapActions({
      setBooks: 'book/setBooks',
      setUserDetails: 'user/setUserDetails',
      setMovies : 'movie/setMovies'
    }),

    setInitialData: function () {
      this.setBooks(this.books);
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
</style>
