<template>
  <div class="container">
    <div class="form-container">
      <vs-row
        vs-justify="center"
        vs-align="center"
      >
        <div class="head">
          My Details
        </div>
      </vs-row>
      <vs-row>
        <label>Edit</label>
        <vs-switch v-model="edit" />
      </vs-row>
      <vs-row
        vs-justify="center"
        vs-align="center"
      >
        <vs-col
          vs-w="12"
          class="flex-container"
        >
          <div>
            <label>Firstname</label>
            <vs-input
              v-model="userData.firstName"
              :disabled="!edit"
              class="name-input"
            />
          </div>
        </vs-col>
        <vs-col
          vs-w="12"
          class="flex-container"
        >
          <div>
            <label>Lastname</label>
            <vs-input
              v-model="userData.lastName"
              :disabled="!edit"
              class="name-input"
            />
          </div>
        </vs-col>
        <vs-col
          vs-w="12"
          class="flex-container"
        >
          <div>
            <label>City</label>
            <vs-input
              v-model="userData.city"
              :disabled="!edit"
              class="name-input"
            />
          </div>
        </vs-col>
        <vs-col
          vs-w="12"
          class="flex-container"
        >
          <div>
            <label>Date of Birth</label>
            <vs-input
              v-model="userData.dateOfBirth"
              :disabled="!edit"
              class="name-input"
              type="date"
            />
          </div>
        </vs-col>
        <vs-col
          vs-w="12"
          class="flex-container"
        >
          <div>
            <label>Email</label>
            <vs-input
              v-model="userData.email"
              :disabled="!edit"
              class="name-input"
              type="email"
            />
          </div>
        </vs-col>
        <vs-col
          class="btn-container flex-container"
          vs-w="12"
        >
          <vs-button
            :disabled="!edit"
            @click="handleSave"
          >
            Save
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppUser',
  data: function () {
    return {
      userData: {
        firstName: '',
        lastName: '',
        city: '',
        dateOfBirth: '',
        email: '',
      },
      edit: false,
    };
  },
  computed: {
    ...mapGetters({
      userDetails: 'user/getUserDetails'
    }),
  },
  watch: {
    dateOfBirth: function (cur) {
      console.log(cur);
    }
  },
  created () {
    this.setData(this.userDetails);
  },

  methods: {
    setData: function (userDetails) {
      this.userDetails = userDetails;
    },

    handleSave: function () {
      this.setUserDetails(this.userDetails);
    },

    ...mapActions({
      setUserDetails: 'user/setUserDetails'
    })
  }
};
</script>

<style scoped>
.btn-container {
  padding: 15px 0;
}

.container {
  width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 5px darkgrey;
  padding: 15px 0;
  border-radius: 15px;
}

.form-container {
  width: 200px;
  margin: 0 auto;
}

.flex-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
}

.head {
  padding: 15px 0;
  font-size: 18px;
}

</style>