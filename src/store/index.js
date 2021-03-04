import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth';
import analytics from './modules/analytics';
import hospitalInfo from './modules/hospitalInfo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    analytics,
    hospitalInfo
  },
  // plugins: [
  //   createPersistedState({
  //     paths: ['shopping', 'admin'],
  //   }),
  // ],
});