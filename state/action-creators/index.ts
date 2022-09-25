import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from '../action-types';
import {Actions} from '../actions';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer BQCO6_G4751lNyA77oDxauNF6BSLFTu1fXqiOdy70_Rp85jlFeH-s4bjaShkmZhUO4XKjiFkdzqMbt3WS_58sP11-oAW4MSlgkCElgbgd4JW38MNAXtLhhrQgMAniqETPYI5EEe7oO_CP1kvFo9fNt_BirSkblys0o30S5o0BM0_JqudAjo',
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

export const actionCreators = {
  fetchBrowseCategories,
  fetchCategoryPlaylist,
};
