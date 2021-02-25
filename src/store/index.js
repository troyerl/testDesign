import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth';
import analytics from './modules/analytics';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    analytics,
  },
  // plugins: [
  //   createPersistedState({
  //     paths: ['shopping', 'admin'],
  //   }),
  // ],
});