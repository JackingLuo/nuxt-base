const state = ({
  value: 'Hello World',
  list: [1, 2, 3, 4, 5]
});
const getters = {
  include: state => {
    return state.list.filter(item=>item===1)
  }
};
const mutations = {
  SET_VALUE(state, value) {
    state.value = value;
  }
};
const actions = {
  async getInfo({commit}, val) {
    commit('SET_VALUE', val);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};