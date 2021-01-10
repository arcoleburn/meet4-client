import config from '../config';
import TokenService from './tokenService';

const headers = {
  authorization: `bearer ${TokenService.getAuthToken()}`,
};

const Meet4ApiService = {
  getStats() {
    return fetch(`${config.API_ENDPOINT}/profile/stats`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => res.json());
  },
  getFriends() {
    return fetch(`${config.API_ENDPOINT}/friends`, {
      headers,
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        return data;
      })
    );
  },
  getFriendRequests() {
    return fetch(`${config.API_ENDPOINT}/friends/requests`, {
      headers,
    }).then((res) => res.json());
  },
  acceptFriendRequest(id) {
    return fetch(`${config.API_ENDPOINT}/friends/${id}`, {
      headers,
      method: 'PATCH',
    }).then((res) => res.json());
  },
  deleteFriendRequest(id) {
    return fetch(`${config.API_ENDPOINT}/friends/${id}`, {
      headers,
      method: 'DELETE',
    })
    //.then((res) => res.json()).then(data=>data);
  },
  getFriendDetails(friendId) {
    return fetch(`${config.API_ENDPOINT}/friends/friendDetails`, {
      headers,
      body: JSON.stringify(friendId),
    }).then((res) => res.json());
  },

  getUserLocations() {
    return fetch(`${config.API_ENDPOINT}/profile/locations`, {
      headers,
    }).then((res) => res.json());
  },

  addLocationForUser(location) {
    console.log('location sent', location);
    return fetch(`${config.API_ENDPOINT}/profile/locations`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      method: 'POST',
      body: JSON.stringify(location),
    }).then((res) => res.json());
  },
  deleteLocationForUser(id) {
    return fetch(`${config.API_ENDPOINT}/profile/locations/${id}`, {
      headers,
      method: 'DELETE',
    });
  },
};

export default Meet4ApiService;
