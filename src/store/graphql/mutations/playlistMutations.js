import gql from 'graphql-tag';

export default {
  tempVideo: gql`
    type TempVideo {
      id: ID!,
      url: String
    }
  `,
  savePlaylist: gql`
    mutation($input: SavePlaylistInput!) {
      savePlaylist(input: $input) {
        id
      }
    }
  `,
};