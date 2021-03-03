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
  totalUsagePerUser: {
    data: [],
    labels: []
  },
  totalPlaylistUsage: {
    data: [],
    labels: []
  }
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
  },
  UPDATE_TOTAL_USERS_PER_MONTH(state, userArray) {
    state.totalUsersPerMonth = userArray;
  },
  UPDATE_TOTAL_USAGE_PER_USER(state, usageObject) {
    state.totalUsagePerUser.data = usageObject.data;
    state.totalUsagePerUser.labels = usageObject.labels;
  },
  UPDATE_TOTAL_PLAYLIST_USAGE(state, usageObject) {
    state.totalPlaylistUsage.data = usageObject.data;
    state.totalPlaylistUsage.labels = usageObject.labels;
  }
};

const actions = {
  getReport({ dispatch }) {
    let currentDate = new Date();
    dispatch('getAverageDuration');
    dispatch('getMostPopularPlaylist');
    dispatch('getTotalUsers');
    dispatch('getTotalUsage');
    dispatch('getTotalUsagePerMonth', currentDate.getFullYear());
    dispatch('getTotalUsersPerMonth', currentDate.getFullYear());
    dispatch('getTotalUsagePerUserPerMonth', { year: currentDate.getFullYear(), month: currentDate.getMonth() });
    dispatch('getTotalPlaylistUsage');
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
        getTotalUsesPerMonth
      }
    } = await apolloClient.query({
      query: gql.getTotalUsagePerMonth,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID, year },
    });
    
    commit('UPDATE_TOTAL_USAGE_PER_MONTH', getTotalUsesPerMonth);
  },
  async getTotalUsersPerMonth({ commit }, year) {
    const {
      data: {
        getTotalUsersPerMonth
      }
    } = await apolloClient.query({
      query: gql.getTotalUsersPerMonth,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID, year },
    });

    commit('UPDATE_TOTAL_USERS_PER_MONTH', getTotalUsersPerMonth);
  },
  async getTotalUsagePerUserPerMonth({ commit }, { year, month }) {
    const {
      data: {
        getTotalUsagePerUserPerMonth
      }
    } = await apolloClient.query({
      query: gql.getTotalUsagePerUserPerMonth,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID, year, month },
    });

    const tempTotalUsagePerUserReport = {
      data: [],
      labels: []
    };

    getTotalUsagePerUserPerMonth.forEach((user, idx) => {
      tempTotalUsagePerUserReport.data.push(user.count);
      tempTotalUsagePerUserReport.labels.push(idx + 1);
    });

    commit('UPDATE_TOTAL_USAGE_PER_USER', tempTotalUsagePerUserReport);
  },
  async getTotalPlaylistUsage({ commit }) {
    const {
      data: {
        getTotalPlaylistUsage
      }
    } = await apolloClient.query({
      query: gql.getTotalPlaylistUsage,
      variables: { hospitalId: process.env.VUE_APP_HOSPITAL_ID },
    });

    const tempTotalPlaylistReport = {
      data: [],
      labels: []
    };

    getTotalPlaylistUsage.forEach(playlist => {
      tempTotalPlaylistReport.data.push(playlist.number);
      tempTotalPlaylistReport.labels.push(playlist.playlistName);
    });

    commit('UPDATE_TOTAL_PLAYLIST_USAGE', tempTotalPlaylistReport);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};