export const getDefaultState = () => ({
  friends: [],
  friendsBySearch: [],
  pendingRequests: [],
  addFriend: {},
});

export const state = getDefaultState;

export const mutations = {

  SET_FRIENDS(state, payload) {
    console.log(payload);
    state.friends = payload;
  },

  SET_PENDING_REQUESTS(state, payload){
    state.pendingRequests = payload;
  },

  REMOVE_PENDING_REQUEST(state, payload) {
    state.pendingRequests = state.pendingRequests.filter(request => request.login !== payload.login);
  },

  SET_FRIENDS_BY_SEARCH(state, payload) {
    state.friendsBySearch = payload;
  },

}

export const actions = {

  async fetchMyFriends({commit}, user) {
    await this.$axios.$post('/api/friends', user)
      .then(friends => commit('SET_FRIENDS', friends))
      .catch(e => console.error(e));
  },

  async fetchMyFriendsBySearch({commit}, params) {
    await this.$axios.$post('/api/friends-by-search', params)
      .then(friends => commit('SET_FRIENDS', friends))
      .catch(e => console.error(e));
  },

  async addFriend({commit}, user) {
    await this.$axios.$post('/api/send-friend-request', user)
      .then(response => console.log(response))
      .catch(e => console.error(e));
  },

  async fetchPendingRequests({commit}, user) {
    await this.$axios.$post('/api/pending-requests', user)
      .then(pendingRequests => commit('SET_PENDING_REQUESTS', pendingRequests))
      .catch(e => console.error(e));
  },

  async acceptFriendRequest({commit}, users) {
    await this.$axios.$post('/api/accept-friend-request', users)
      .then(sender => commit('REMOVE_PENDING_REQUEST', sender))
      .catch(e => console.error(e));
  },

  async fetchUsersBySearch({commit}, params) {
    await this.$axios.$post('/api/users', params)
      .then(users => commit('SET_FRIENDS_BY_SEARCH', users))
      .catch(e => console.error(e));
  },

}

export const getters = {

  friends(state) {
    return state.friends;
  },

  friendsBySearch(state) {
    return state.friendsBySearch;
  },

  pendingRequests(state) {
    return state.pendingRequests;
  }

}
