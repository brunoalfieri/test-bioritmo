export default {
  state: {
    places: {
      updated_at: undefined,
      locations: [],
      total: 0,
      wp_total: 0
    }
  },
  getters: {
    places: state => state.places
  },
  mutations: {
    places: (state, payload) => {
      state.places = {
        ...state.places,
        ...payload
      }
    }
  },
  actions: {}
}