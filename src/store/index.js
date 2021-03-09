import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth';
import analytics from './modules/analytics';
import hospitalInfo from './modules/hospitalInfo';
import playlist from './modules/playlist';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    analytics,
    hospitalInfo,
    playlist
  },
  // plugins: [
  //   createPersistedState({
  //     paths: ['shopping', 'admin'],
  //   }),
  // ],
});