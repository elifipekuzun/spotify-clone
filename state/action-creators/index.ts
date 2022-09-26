import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from '../action-types';
import {Actions} from '../actions';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer BQDF8L-0zuWL6Bf4z5X-u6llw8lTrdnHqghKPKH5tAOSSMA-gVW8gUbhzDtbrTL3AKNsFqvj1vPSi3TSlHGjRY3jlTNZnCX4kFWCskGvKXEKataexUn5VjH41_cUg1JJEl1j8ERBxpuERYx99_3_-PJ7MlIG1q2Vt73OdLoa8wqIhNQkTSo',
};

const fetchBrowseCategories = () => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const {data} = await axios.get(
        'https://api.spotify.com/v1/browse/categories',
        {
          headers,
        },
      );

      const categories = data.categories.items;
      dispatch({
        type: ActionTypes.GET_BROWSE_CATEGORIES,
        payload: {items: categories},
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
};

export const fetchCategoryPlaylist = (categoryId: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const {data} = await axios.get(
        `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
        {
          headers,
        },
      );
      const items = data.playlists.items;
      dispatch({
        type: ActionTypes.GET_CATEGORY_LIST,
        payload: {categoryPlaylist: items},
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
};

export const fetchPlaylists = (playlistName: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const {data} = await axios.get(
        `https://api.spotify.com/v1/browse/${playlistName}`,
        {
          headers,
        },
      );
      const playlists =
        playlistName === 'featured-playlists'
          ? data.playlists.items
          : data.albums.items;
      dispatch({
        type: ActionTypes.GET_PLAYLISTS,
        payload: {
          playlistName,
          data: playlists,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
};
export const fetchUsersPlaylists = () => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const {data} = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers,
        },
      );
      dispatch({
        type: ActionTypes.GET_USERS_PLAYLISTS,
        payload: {userPlaylists: data.items},
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
};

export const actionCreators = {
  fetchBrowseCategories,
  fetchCategoryPlaylist,
  fetchPlaylists,
  fetchUsersPlaylists,
};
