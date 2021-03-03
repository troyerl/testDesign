import gql from 'graphql-tag';

export default {
  getAverageDuration: gql`
    query($hospitalId: ID!) {
      getTotalAverageDurationByHospitalId(hospitalId: $hospitalId)
    }
  `,
  getMostPopularPlaylist: gql`
    query($hospitalId: ID!) {
      getMostPopularPlaylist(hospitalId: $hospitalId)
    }
  `,
  getTotalUsers: gql`
    query($hospitalId: ID!) {
      getTotalUsers(hospitalId: $hospitalId)
    }
  `,
  getTotalUsage: gql`
    query($hospitalId: ID!) {
      getTotalUsage(hospitalId: $hospitalId)
    }
  `,
  getTotalUsagePerMonth: gql`
    query($hospitalId: ID!, $year: Int!) {
      getTotalUsesPerMonth(hospitalId: $hospitalId, year: $year)
    }
  `,
  getTotalUsersPerMonth: gql`
    query($hospitalId: ID!, $year: Int!) {
      getTotalUsersPerMonth(hospitalId: $hospitalId, year: $year)
    }
  `,
  getTotalUsagePerUserPerMonth: gql`
    query($hospitalId: ID!, $year: Int!, $month: Int!) {
      getTotalUsagePerUserPerMonth(hospitalId: $hospitalId, year: $year, month: $month) {
        _id
        count
      }
    }
  `,
  getTotalPlaylistUsage: gql`
    query($hospitalId: ID!) {
      getTotalPlaylistUsage(hospitalId: $hospitalId) {
        playlistName
        number
      }
    }
  `,
};