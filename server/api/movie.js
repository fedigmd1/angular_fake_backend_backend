'use strict';

const SetupEndpoint = require('./setup/');

module.exports = SetupEndpoint({
  name: 'movie',
  urls: [
    {
      params: '/popular',
      requests: [{
        method: 'GET',
        response: '/response-files/popular.json'
      }]
    },
    {
      params: '/top-rated',
      requests: [{
        method: 'GET',
        response: '/response-files/top-rated.json'
      }]
    },
  ]
});
