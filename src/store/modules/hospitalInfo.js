import gql from '../graphql';
import apolloClient from '../apollo';

const initState = {
  hospitalId: '5fd258859024ec6c3407e225',
  name: "Riley Children's Hospital",
  address: {
    street: "705 Riley Hospital Dr.",
    city: 'Indianapolis',
    country: 'United States',
    zipcode: 46202
  },
  mediVues: []
};

const state = JSON.parse(JSON.stringify(initState));

const mutations = {
  UPDATE_MEDIVUE_LIST(state, medivueArray) {
    state.mediVues = medivueArray;
  }
};

const actions = {
  async getMediVues({ commit, state }) {
    const {
      data: {
        getMediVuesByHospitalId
      }
    } = await apolloClient.query({
      query: gql.getMediVuesByHospitalId,
      variables: { hospitalId: state.hospitalId },
    });

    commit('UPDATE_MEDIVUE_LIST', getMediVuesByHospitalId);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};