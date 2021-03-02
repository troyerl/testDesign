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
};