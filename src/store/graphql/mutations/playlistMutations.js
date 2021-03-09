import gql from 'graphql-tag';

export default {
  savePlaylist: gql`
    mutation($input: SavePlaylistInput) {
      savePlaylist(input: $input) {
        id
      }
    }
  `,
  deletePlaylist: gql`
    mutation($playlistId: ID!) {
      deletePlaylist(playlistId: $playlistId) 
    }
  `
};