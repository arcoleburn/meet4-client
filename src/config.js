/* eslint-disable */

let API_ENDPOINT;

process.env.NODE_ENV == 'development'
  ? (API_ENDPOINT = 'http://localhost:8000/api')
  : (API_ENDPOINT = 'https://fast-shelf-63629.herokuapp.com/api');

export default {
  API_ENDPOINT,
};
