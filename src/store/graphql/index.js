import analyticsQueries from './queries/analyticsQueries';

import playlistQueries from './queries/playlistQueries';

import Mutations from './mutations';

export default {
  ...analyticsQueries,
  ...playlistQueries,
  ...Mutations
};