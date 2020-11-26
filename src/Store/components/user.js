export default {
  namespaced: true,
  state: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    city: '',
  },

  getters: {
    getUserDetails: function (state) {
      return {
        firstName: state.firstName,
        lastName: state.lastName,
        dateOfBirth: state.dateOfBirth,
        email: state.email,
        city: state.city
      };
    },

  },

  mutations: {
    SET_USER_DETAILS: function (state, userDetails) {
      state.firstName = userDetails.firstName;
      state.lastName = userDetails.lastName;
      state.city = userDetails.city;
      state.dateOfBirth = userDetails.dateOfBirth;
      state.email = userDetails.email;
    }
  },

  actions: {
    setUserDetails: function ({ commit, state }, userDetails) {
         commit('SET_USER_DETAILS', userDetails)
    }
  }
};