import gql from '../graphql';
import apolloClient from '../apollo';

const state = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  years: [2020, 2021],
  averageDuration: null,
  favoritePlaylist: '',
  totalUsage: 0,
  totalUsers: 0,
  totalUsagePerMonth: [],
  totalUsersPerMonth: [],
  totalUsagePerUser: []
};

const mutations = {
  UPDATE_AVERAGE_DURATION(state, averageDuration) {
    state.averageDuration = averageDuration;
  },
  UPDATE_MOST_POPULAR_PLAYLIST(state, playlist) {
    state.favoritePlaylist = playlist;
  },
  UPDATE_TOTAL_USERS(state, totalUserCount) {
    state.totalUsers = totalUserCount;
  },
  UPDATE_TOTAL_USAGE(state, totalUsageCount) {
    state.totalUsage = totalUsageCount;
  },
  UPDATE_TOTAL_USAGE_PER_MONTH(state, usageArray) {
    state.totalUsagePerMonth = usageArray;
  }
};

const actions = {
  getReport({ dispatch }) {
    dispatch('getAverageDuration');
    dispatch('getMostPopularPlaylist');
    dispatch('getTotalUsers');
    dispatch('getTotalUsage');
  },
  async getAverageDuration({ commit }) {
    const {
      data: {
        getTotalAverageDurationByHospitalId,
      }
    } = await apolloClient.query({
      query: gql.getAverageDuration,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID },
    });

    commit('UPDATE_AVERAGE_DURATION', getTotalAverageDurationByHospitalId);
  },
  async getMostPopularPlaylist({ commit }) {
    const {
      data: {
        getMostPopularPlaylist,
      }
    } = await apolloClient.query({
      query: gql.getMostPopularPlaylist,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID },
    });

    commit('UPDATE_MOST_POPULAR_PLAYLIST', getMostPopularPlaylist);
  },
  async getTotalUsers({ commit }) {
    const {
      data: {
        getTotalUsers,
      }
    } = await apolloClient.query({
      query: gql.getTotalUsers,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID },
    });
    
    commit('UPDATE_TOTAL_USERS', getTotalUsers);
  },
  async getTotalUsage({ commit }) {
    const {
      data: {
        getTotalUsage,
      }
    } = await apolloClient.query({
      query: gql.getTotalUsage,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID },
    });
    
    commit('UPDATE_TOTAL_USAGE', getTotalUsage);
  },
  async getTotalUsagePerMonth({ commit }, year) {
    const {
      data: {
        getTotalUsesPerMonth,
      }
    } = await apolloClient.query({
      query: gql.getTotalUsagePerMonth,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID, year },
    });
    
    commit('UPDATE_TOTAL_USAGE_PER_MONTH', getTotalUsesPerMonth);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};