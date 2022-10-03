import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from '../action-types';
import {Actions} from '../actions';
import {UserPlaylist} from '../category';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer BQDniitz5xKN954vdJvK3KytAyQ-oSFenmBn0tTbIfkvkL5O-hfLxjXaItMHI_S2lSsiyfGzb2w2yWA1u_Gqc1AJuo0hNheDolBjFtr2MdtGRxg_0Tr_zIc_vCWwT9cKMoX_DUygMI7GVkmc7U0pQlcWUsInXZ5H2uBmPoHSKQsQm0CxeVo',
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
export const fetchUsersPlaylists = (userId: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const {data} = await axios.get(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
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
      const res = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
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
        payload: {tracks, coverImage: images.data, playlist: res.data},
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
};

export const createPlaylist = (
  userId: string,
  name: string,
  description: string,
) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      const res = await axios.post(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {name, description, public: false},
        {headers},
      );
      dispatch({
        type: ActionTypes.CREATE_PLAYLIST,
        payload: {createdPlaylist: res.data},
      });
      const playlist = res.data as UserPlaylist;
      return {createdPlaylistId: playlist.id};
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
  createPlaylist,
};
