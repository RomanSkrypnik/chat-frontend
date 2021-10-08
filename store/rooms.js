export const getDefaultState = () => ({
  rooms: [],
  room: {},
  messages: [],
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

  ADD_NEW_MESSAGE(state, payload) {
    state.messages.push(payload);
  },

  SET_PAGINATION(state, payload) {
    state.pagination = payload;
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
      .then(data => {
          commit('SET_ROOM', data.room);
          commit('SET_MESSAGES', data.messages);
      })
      .catch(e => console.error(e));
  }
}

export const getters = {

  rooms(state){
    return state.rooms;
  },

  room(state){
    return state.room;
  },

  messages(state){
    return state.messages;

  }

}
