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

      const tempPlaylistInfo = {
        name: '',
        videos: []
      };

      tempPlaylistInfo.name = getPlaylistById.name;

      getPlaylistById.videos.forEach(async (video, idx) => {
        let newVideo = {
          id: video.id,
          videoId: video.url.split('v=')[1],
          order: idx,
          title: ''
        }

        let resData = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + newVideo.videoId + "&key=AIzaSyC7twizv7BBLpXLWrCMh0VmWT91uzicw0o", {
          method: 'GET'
        });

        let videoData = await resData.json();
        newVideo.title = videoData.items[0].snippet.title;

        tempPlaylistInfo.videos.push(newVideo);
      })
      
      commit('UPDATE_PLAYLIST_VIDEOS', tempPlaylistInfo);
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