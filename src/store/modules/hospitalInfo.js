const initState = {
  hospitalId: '5fd258859024ec6c3407e225',
  name: "Riley Children's Hospital",
  address: {
    street: "705 Riley Hospital Dr.",
    city: 'Indianapolis',
    country: 'United States',
    zipcode: 46202
  },
  playlists: [
    {
      id: '5fa0541fd776330c0c16c0c4',
      name: 'Superhero Videos',
      timesPlayed: 12,
      updatedAt: '2020-11-02T18:46:55.862+00:00'
    },
    {
      id: '5fa178d82881bd33ec3e5421',
      name: 'Peppa Pig',
      timesPlayed: 22,
      updatedAt: '2020-11-03T15:35:52.527+00:00'
    },
    {
      id: '5fa1b96ca99731648b4fafbc',
      name: 'Live News',
      timesPlayed: 2,
      updatedAt: '2020-11-03T20:11:24.100+00:00'
    },
    {
      id: '5fa1b9afa99731648b4fafbd',
      name: 'Twitch',
      timesPlayed: 18,
      updatedAt: '2020-11-03T20:12:31.753+00:00'
    },
    {
      id: '5fa1b9bba99731648b4fafbe',
      name: 'Princess',
      timesPlayed: 42,
      updatedAt: '2020-11-03T20:12:43.774+00:00'
    },
  ],
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

};

const actions = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};