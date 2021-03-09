import gql from '../graphql';
import apolloClient from '../apollo';

const initState = {
  playlistLists: [],
  selectedPlaylist: {
    hospitalId: '',
    id: '',
    name: '',
    videos: []
  }
};

const state = JSON.parse(JSON.stringify(initState));

const mutations = {
  UPDATE_LISTS_OF_PLAYLISTS(state, playlistListArray) {
    state.playlistLists = playlistListArray;
  },
  UPDATE_PLAYLIST_VIDEOS(state, selectedPlaylist) {
    state.selectedPlaylist.id = selectedPlaylist.id;
    state.selectedPlaylist.videos = selectedPlaylist.videos;
    state.selectedPlaylist.name = selectedPlaylist.name;
  },
  RESET_PLAYLIST(state) {
    state.selectedPlaylist.id = '';
    state.selectedPlaylist.videos = [];
    state.selectedPlaylist.name = '';
  },
  REMOVE_PLAYLIST(state, idx) {
    state.playlistLists.splice(idx, 1);
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
  async getPlaylist({ commit, dispatch }, playlistId) {
    return new Promise((resolve, reject) => {
      if (playlistId === 'new') {
        const newPlaylist = {
          id: '',
          name: '',
          videos: []
        }
        commit('UPDATE_PLAYLIST_VIDEOS', newPlaylist);
        resolve(newPlaylist);
      } else {
        dispatch('fetchPlaylist', playlistId).then((playlist) => {
          resolve(playlist);
        })
      }
    })
  },
  async fetchPlaylist({ commit }, playlistId) {
    return new Promise(async (resolve, reject) => {
      const {
        data: {
          getPlaylistById
        }
      } = await apolloClient.query({
        query: gql.getPlaylistById,
        variables: { playlistId },
      });

      const tempPlaylistInfo = {
        hospitalId: getPlaylistById.hospitalId,
        id: getPlaylistById.id,
        name: getPlaylistById.name,
        videos: []
      };

      await (async () => {
  
        for (const [idx, video] of getPlaylistById.videos.entries()) {
          let newVideo = {
            url: video.url,
            id: video.id,
            videoId: video.url.split('v=')[1],
            order: idx,
            title: ''
          }

          let resData = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${newVideo.videoId}&key=${process.env.VUE_APP_GOOGLE_API}`, {
            method: 'GET'
          });

          

          let videoData = await resData.json();
          newVideo.title = videoData.items[0].snippet.title;

          tempPlaylistInfo.videos.push(newVideo);
        }
      })();
      
      commit('UPDATE_PLAYLIST_VIDEOS', tempPlaylistInfo);
      resolve(tempPlaylistInfo);
    })
  },
  resetPlaylist({ commit }) {
    commit('RESET_PLAYLIST');
  },
  savePlaylist({ rootState, dispatch }, playlist) {
    return new Promise(async (resolve, reject ) => {
      const { videos, ...newPlaylist} = playlist;
      let tempVideos = [];

      newPlaylist['hospitalId'] = rootState.hospitalInfo.hospitalId;

      videos.forEach(video => {
        if (video.url) {
          tempVideos.push({ id: video.id, url: video.url });
        }
      });

      newPlaylist['videos'] = tempVideos;

      const {
        data: {
          savePlaylist
        }
      } = await apolloClient.query({
        query: gql.savePlaylist,
        variables: { input: newPlaylist },
      }).catch(err => {
        reject(err);
      });

      dispatch('fetchPlaylist', savePlaylist.id).then(returnPlaylist => {
        resolve(returnPlaylist);
      });
    })
  },
  deletePlaylist({ commit }, { id, idx }) {
    return new Promise(async (resolve, reject) => {
      await apolloClient.query({
        query: gql.deletePlaylist,
        variables: { playlistId: id },
      }).catch(err => {
        reject(err);
      })
  
      commit('REMOVE_PLAYLIST', idx);
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