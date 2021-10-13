export const getDefaultState = () => ({
  rooms: [],
  room: {},
  messages: [],
  onlineUsers: [],
  offset: 0,
  pagination: 0,
});

export const state = getDefaultState;

export const mutations = {

  SET_ROOMS(state, payload) {
    state.rooms = payload;
  },

  SET_ROOM(state, payload) {
    state.room = payload;
  },

  SET_MESSAGES(state, payload) {
    state.messages = payload;
  },

  SET_ONLINE_USERS(state, payload) {
    state.onlineUsers = payload;
  },

  SET_OFFSET(state, payload) {
    state.offset = payload;
  },

  SET_PAGINATION(state, payload) {
    state.pagination = payload;
  },

  ADD_NEW_MESSAGE(state, payload) {
    state.messages = {payload, ...state.messages};
  },

  ADD_NEW_MESSAGES(state, messages) {
    messages.map(message => state.messages.unshift(message));
  },

  TRUNCATE_MESSAGES(state) {
    state.messages = [];
  },

}

export const actions = {

  async fetchRooms({commit}, page) {
    await this.$axios.$get('/api/rooms')
      .then(rooms => commit('SET_ROOMS', rooms))
      .catch(e => console.error(e));
  },

  async fetchRoom({commit}, id) {
    await this.$axios.$get(`/api/room/${id}`)
      .then(room => commit('SET_ROOM', room))
      .catch(e => console.error(e));
  },

  async fetchMessages({commit, state}, roomId) {
    await this.$axios.$get(`/api/messages/${roomId}`, {params: {offset: 0}})
      .then(messages => commit('SET_MESSAGES', messages))
      .catch(e => console.error(e));
  },

  async fetchOlderMessages({commit, state}, roomId) {
    await this.$axios.$get(`/api/messages/${roomId}`, {params: {offset: state.offset}})
      .then(messages => {
        commit('ADD_NEW_MESSAGES', messages);
        commit('SET_OFFSET', state.offset + 20);
      })
      .catch(e => console.error(e));
  }
}

export const getters = {

  rooms(state) {
    return state.rooms;
  },

  room(state) {
    return state.room;
  },

  messages(state) {
    return state.messages;
  },

  onlineUsers(state) {
    return state.onlineUsers;
  }

}
