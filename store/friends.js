export const getDefaultState = () => ({
  friends: [],
  friendsBySearch: [],
  modalOpened: false,
});

export const state = getDefaultState;

const mutations = {

  SET_FRIENDS(state, payload) {
    state.friends = payload;
  },

  SET_FRIENDS_BY_SEARCH(state, payload) {
    state.friendsBySearch = payload;
  },

  SET_MODAL_OPENED(state, payload) {
    state.modalOpened = payload;
  }

}

export const actions = {

  async fetchMyFriends({commit}, login) {
    await this.$axios.$post('/api/users', {login})
      .then(users => console.log(users))
      .catch(e => console.error(e));
  }

}

export const getters = {

  friends(state) {
    return state.friends;
  },

  friendsBySearch(state) {
    return state.friendsBySearch;
  },

  modalOpened(state) {
    return state.modalOpened;
  }

}
