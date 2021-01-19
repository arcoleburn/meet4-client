import config from '../config';
import TokenService from './tokenService';

const headers = {
  authorization: `bearer ${TokenService.getAuthToken()}`,
};

const Meet4ApiService = {
  startStats(){
    return fetch(`${config.API_ENDPOINT}/profile/stats`,{
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type':'application/json'
      },
      method: 'POST'
    }).then(res=>res.json())
  },
  getStats() {
    return fetch(`${config.API_ENDPOINT}/profile/stats`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => res.json());
  },
  updateUserStats(category) {
    return fetch(`${config.API_ENDPOINT}/profile/stats`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({ category: category }),
    }).then((res) => res.json());
  },
  updateFriendStats(id, category) {
    return fetch(`${config.API_ENDPOINT}/friends/${id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({ category: category }),
    }).then((res) => res.json());
  },
  getFriends() {
    return fetch(`${config.API_ENDPOINT}/friends`, {
      headers,
    }).then((res) =>
      res.json().then((data) => {
        return data;
      })
    );
  },
  addFriend(friendUsername) {
    return fetch(`${config.API_ENDPOINT}/friends`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ friendUsername: friendUsername }),
    }).then((res) => res.json());
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
    });
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
  getFriendLocs(friendUsername) {
    return fetch(
      `${config.API_ENDPOINT}/friends/friendlocs/${friendUsername}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) => res.json());
  },
  getBusinesses(addressA, addressB, category) {
    console.log('address B', addressB);
    return fetch(
      `${config.API_ENDPOINT}/directions/results?addressA=${addressA}&addressB=${addressB}&category=${category}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) => res.json());
  },
  getDirections(addressA, addressB) {
    return fetch(
      `${config.API_ENDPOINT}/directions?addressA=${addressA}&addressB=${addressB}`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) => res.json());
  },
  addHistory(
    user2,
    user1_location,
    user2_location,
    restaurant_name,
    restaurant_address,
    category
  ) {
    let newHistory = {
      user2,
      user1_location,
      user2_location,
      restaurant_name,
      restaurant_address,
      category,
    };
    console.log('new history', newHistory);
    return fetch(`${config.API_ENDPOINT}/history`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      method: 'POST',
      body: JSON.stringify(newHistory),
    });
  },
};

export default Meet4ApiService;
