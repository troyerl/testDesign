import gql from 'graphql-tag';

export default {
  getPlaylists: gql`
    query($hospitalId: ID!) {
      getHospitalById(hospitalId: $hospitalId) {
        playlists {
          id
          name
          timesPlayed
          updatedAt
        }
      }
    }
  `,
  getPlaylistById: gql`
    query($playlistId: ID!) {
      getPlaylistById(playlistId: $playlistId) {
        id
        name
        hospitalId
        videos {
          id
          url
        }
      }
    }
  `,
};