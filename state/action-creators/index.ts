import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from '../action-types';
import {Actions} from '../actions';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer BQCtVL9RrhN_kH3fECRDdZ24qUR7JaQ8XGjq0Mxh_D6vVcJGxdEG8LEMkWIBR2F_CzpC3t8MYsMuXpQL9QTJ8XEzUKZDzv-zMeO3eL4-AYRDn_uS0dzqdaWuOyoWQ05bq5F0u50X6yparsL_nDeiQ7Ta5rmcjf5OjfTYKLVWs5h0svTrKe0',
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

export const fetchPlaylistTracks = (playlistId: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const {data} = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers,
        },
      );
      const tracks = data.items.map((item: any) => item.track.album);

      const images = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/images`,
        {
          headers,
        },
      );

      dispatch({
        type: ActionTypes.GET_PLAYLIST_TRACKS,
        payload: {tracks, coverImage: images.data},
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
  fetchPlaylistTracks,
};
