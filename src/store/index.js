import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: []
  },
  getters: {
  },
  mutations: {
    addCartProduct(state, payload) {
      state.cartProducts.push(payload)
    },
    deleteProductFromCart(state, payload) {
      state.cartProducts.splice(payload, 1)
    },
  },
  actions: {
    handleAddCartProduct({ commit }, payload) {
      commit("addCartProduct", payload);
    },
    handleRemoveProductFromCart({commit}, payload) {
      commit('deleteProductFromCart', payload)
    }
  },
  modules: {
  }
})
