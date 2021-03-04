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
  playlistLists: [],
  selectedPlaylist: {
    name: '',
    videos: []
  },
  mediVues: [
    {
      id: '5fa05f94bffc8119c82e02bf',
      name: 'Room 1'
    },
    {
      id: '5fa05f94bffc8119c82e02bf1',
      name: 'Room 2'
    }
  ]
};

const state = JSON.parse(JSON.stringify(initState));

const mutations = {
  UPDATE_LISTS_OF_PLAYLISTS(state, playlistListArray) {
    state.playlistLists = playlistListArray;
  },
  UPDATE_PLAYLIST_VIDEOS(state, selectedPlaylist) {
    state.selectedPlaylist.name = selectedPlaylist.name;
    state.selectedPlaylist.videos = selectedPlaylist.videos;
  }
};

const actions = {
  async getPlaylistList({ commit, rootState }) {
    const {
      data: {
        getHospitalById
      }
    } = await apolloClient.query({
      query: gql.getPlaylists,
      variables: { hospitalId: rootState.hospitalInfo.hospitalId },
    });

    commit('UPDATE_LISTS_OF_PLAYLISTS', getHospitalById[0].playlists)
  },
  async getPlaylistVideos({ commit }, playlistId) {
    return new Promise(async (resolve, reject) => {
      const {
        data: {
          getPlaylistById
        }
      } = await apolloClient.query({
        query: gql.getPlaylistById,
        variables: { playlistId },
      });
  
      commit('UPDATE_PLAYLIST_VIDEOS', getPlaylistById);
      resolve();
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};