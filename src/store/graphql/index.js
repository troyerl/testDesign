import analyticsQueries from './queries/analyticsQueries';

import playlistQueries from './queries/playlistQueries';
import playlistMutations from './mutations/playlistMutations';

import hospitalQueries from './queries/hospitalQueries';

export default {
  ...analyticsQueries,
  ...playlistQueries,
  ...playlistMutations,
  ...hospitalQueries
};