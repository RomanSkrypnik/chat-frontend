const getDefaultState = () => ({
  messages: [],
  lastMessages: [],
});

export const state = getDefaultState;

export const mutations = {

  SET_MESSAGES(state, payload) {
    state.messages = payload;
  },

  SET_LAST_MESSAGES(state, payload) {
    state.lastMessages = payload;
  }

}

export const actions = {

  async fetchMessages({commit}, params) {
    await this.$axios.$post('/api/private-messages', params)
      .then(messages => commit('SET_MESSAGES', messages))
      .catch(e => console.log(e));
  },

  async fetchLastMessages({commit}, user) {
    await this.$axios.$post('/api/last-private-messages', user)
      .then(lastMessages => commit('SET_LAST_MESSAGES', lastMessages))
      .catch(e => console.log(e));
  }

}

export const getters = {

  messages(state) {
    return state.messages;
  },

  lastMessages(state) {
    return state.lastMessages;
  }

}


