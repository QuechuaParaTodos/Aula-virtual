
export const state = () => ({
    layout: 'login-layout',
    user: null,
  });
export const  mutations= {
    SET_LAYOUT(state, newLayout) {
        state.layout = newLayout;
    },
};
export const actions=  {
async getUser({ commit }, user) {
    if (user) {
    commit('SET_USER', user);
    } else {
    commit('SET_USER', null);
    }
},
};
