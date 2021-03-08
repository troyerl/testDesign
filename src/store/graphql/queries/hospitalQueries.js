import gql from 'graphql-tag';

export default {
  getMediVuesByHospitalId: gql`
    query($hospitalId: ID!) {
      getMediVuesByHospitalId(hospitalId: $hospitalId) {
        id
        name
      }
    }
  `,
};