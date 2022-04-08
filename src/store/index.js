import { createStore } from "vuex";

export default createStore({
  state: {
    q: ''
  },
  getters: {
      getQ: (state) => {
          return state.q
      },
  },
});
