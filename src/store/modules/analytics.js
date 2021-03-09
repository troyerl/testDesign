import gql from '../graphql';
import apolloClient from '../apollo';

const initState = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  report: {
    years: [],
    averageDuration: null,
    mostPopularPlaylist: '',
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
  }
};

const state = JSON.parse(JSON.stringify(initState));

const mutations = {
  UPDATE_TOTAL_USAGE_PER_MONTH(state, usageArray) {
    state.totalUsagePerMonth = usageArray;
  },
  UPDATE_TOTAL_USERS_PER_MONTH(state, userArray) {
    state.totalUsersPerMonth = userArray;
  },
  UPDATE_TOTAL_USAGE_PER_USER(state, usageObject) {
    state.report['totalUsagePerUser'] = usageObject;
  },
  UPDATE_TOTAL_PLAYLIST_USAGE(state, usageObject) {
    state.report['totalPlaylistUsage'] = usageObject;
  },
  UPDATE_REPORT(state, report) {
    state.report = JSON.parse(JSON.stringify(report));
  }
};

const actions = {
  async getReport({ commit, rootState, dispatch }) {
    let currentDate = new Date();
    
    const {
      data: {
        getAnalyticReport,
      }
    } = await apolloClient.query({
      query: gql.getAnalyticReport,
      variables: { hospitalId: rootState.hospitalInfo.hospitalId, year: currentDate.getFullYear(), month: currentDate.getMonth() },
    });

    const { totalPlaylistUsage, totalUsagePerUser, ...report} = getAnalyticReport;
    commit('UPDATE_REPORT', report);
    dispatch('getLabelsForTotalPlaylistUsage', totalPlaylistUsage);
    dispatch('getLabelsForTotalUsagePerUser', totalUsagePerUser)
  },
  getLabelsForTotalPlaylistUsage({ commit }, totalPlaylistUsageArray) {
    const tempTotalPlaylistReport = {
      data: [],
      labels: []
    };

    totalPlaylistUsageArray.forEach(playlist => {
      tempTotalPlaylistReport.data.push(playlist.number);
      tempTotalPlaylistReport.labels.push(playlist.playlistName);
    });

    commit('UPDATE_TOTAL_PLAYLIST_USAGE', tempTotalPlaylistReport);
  },
  getLabelsForTotalUsagePerUser({ commit }, totalUsageArray) {
    const tempTotalUsagePerUserReport = {
      data: [],
      labels: []
    };

    totalUsageArray.forEach((user, idx) => {
      tempTotalUsagePerUserReport.data.push(user.count);
      tempTotalUsagePerUserReport.labels.push(idx + 1);
    });

    commit('UPDATE_TOTAL_USAGE_PER_USER', tempTotalUsagePerUserReport);
  },
  async getTotalUsagePerMonth({ commit, rootState }, year) {
    const {
      data: {
        getTotalUsesPerMonth
      }
    } = await apolloClient.query({
      query: gql.getTotalUsagePerMonth,
      variables: { hospitalId: rootState.hospitalInfo.hospitalId, year },
    });
    
    commit('UPDATE_TOTAL_USAGE_PER_MONTH', getTotalUsesPerMonth);
  },
  async getTotalUsersPerMonth({ commit, rootState }, year) {
    const {
      data: {
        getTotalUsersPerMonth
      }
    } = await apolloClient.query({
      query: gql.getTotalUsersPerMonth,
      variables: { hospitalId: rootState.hospitalInfo.hospitalId, year },
    });

    commit('UPDATE_TOTAL_USERS_PER_MONTH', getTotalUsersPerMonth);
  },
  async getTotalUsagePerUserPerMonth({ commit, rootState }, { year, month }) {
    const {
      data: {
        getTotalUsagePerUserPerMonth
      }
    } = await apolloClient.query({
      query: gql.getTotalUsagePerUserPerMonth,
      variables: { hospitalId: rootState.hospitalInfo.hospitalId, year, month },
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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};