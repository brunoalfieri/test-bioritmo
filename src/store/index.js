export default {
  state: {
    places: {
      updated_at: undefined,
      locations: [],
      total: 0,
      wp_total: 0
    },
    placesFilted: {
      locationsFilted: [],
      userSelectTime: undefined,
      userFilterLocationsClose: false,
      total: 0
    }
  },
  getters: {
    places: state => state.places,
    placesFilted: state => state.placesFilted,
    saveUserSelectTime: state => state.placesFilted.userSelectTime,
    saveUserFilterLocationsClose: state => state.placesFilted.userFilterLocationsClose
  },
  mutations: {
    places: (state, payload) => {
      state.places = {
        ...state.places,
        ...payload
      }
    },
    placesFilted: (state, payload) => {
      state.placesFilted = {
        ...state.placesFilted,
        ...payload
      }
    },
    saveUserSelectTime: (state, payload) => {
      state.placesFilted = {
        ...state.placesFilted,
        userSelectTime: payload
      }
    },
    saveUserFilterLocationsClose: (state, payload) => {
      state.placesFilted = {
        ...state.placesFilted,
        userFilterLocationsClose: payload
      }
    }
  },
  actions: {}
}