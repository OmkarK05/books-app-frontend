<template>
  <vs-row
    class="container"
    vs-type="flex"
    justify-content="space-between"
  >
    <vs-col
      class="sidebar"
      :class="isExtend ? 'open-sidebar' : 'close-sidebar'"
    >
      <!-- TODO OK: change extendSidebar to extend-sidebar : Done -->
      <app-sidebar
        :sidebar-content="sidebarContent"
        @extend-sidebar="handleExtend"
      />
    </vs-col>
    <vs-col
      vs-w="12"
      class="main"
      :class=" isExtend ? 'open' : 'close'"
    >
      <vs-row>
        <app-header />
      </vs-row>
      <vs-row>
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

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppSection,
    AppSidebar,
  },
  //TODO OK: change this from data() to data: function () : Done
  data: function () {
    return {
      // TODO OK: change extend to isExtend : Done
      isExtend: false,
      // TODO OK: remove 'top' key from sidebarContent
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

      books: [
        {
          name: 'Long Bright River: A Novel', author: 'LIZ MOORE', image: 'https://hips.hearstapps.com/vader-prod' +
              '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id: 'book1',
          saved: false
        },
        {
          name: 'A Long Petal of the Sea: A Novel', author: 'ISABEL ALLENDE', image: 'https://hips.hearstapps.com' +
              '/vader-prod.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*',
          id: 'book2', saved: false
        },
        {
          name: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://hips.hearstapps.com/vader-prod' +
              '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id: 'book3',
          saved: false
        },
        {
          name: 'The Lord of the Rings', author: 'LIZ MOORE', image: 'https://hips.hearstapps.com/vader-prod' +
              '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id: 'book4',
          saved: false
        },
        {
          name: ' Harry Potter and the Philosopher’s Stone', author: 'J.K. Rowling', image: 'https://hips.hearstapp' +
              's.com/vader-prod.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*'
          , id: 'book5', saved: false
        }

      ]

    };
  },

  mounted: function () {
    this.getBooks([...this.books]);
  },

  methods: {
    // TODO OK: change parameter a to isExtend: Done
    handleExtend: function (isExtend) {
      this.isExtend = isExtend;
    },
    ...mapActions({
      getBooks: 'book/getBooks'
    })
  }
};

</script>

<style lang="scss" scoped>
@import "./../assets/scss/mixins";

.main {
  width: 100%;
  transition: all 0.5s linear;
  border-radius: 15px;
  margin: 5px 0;

  @include Mobile() {
    margin-left: 0 !important;
    margin-right: 50px;
  }
}

.open-sidebar {
  width: 150px !important;
}

.close-sidebar {
  width: 50px !important;
}

.open {
  margin-left: 150px !important;
}

.close {
  margin-left: 50px !important;
}

.sidebar {
  height: 100%;
  width: 150px;
}

.container {
  width: 100%;
}

.footer {
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  background-color: rgb(195, 197, 194);
}
</style>
