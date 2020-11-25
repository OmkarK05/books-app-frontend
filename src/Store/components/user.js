export default {
  namespaced: true,
  state: {
    firstname: '',
    lastname: '',
    DOB: '',
    email: '',
    city: '',
  },

  getters: {
    getUserData: function (state) {
      return {
        firstname: state.firstname,
        lastname: state.lastname,
        dateOfBirth: state.DOB,
        email: state.email,
        city: state.city
      };
    },

  },

  mutations: {},

  actions: {}

};