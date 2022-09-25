import {Actions} from '../actions';
import {ActionTypes} from '../action-types';
import {Category, CategoryPlaylistItem} from '../category';

interface SpotifyReducerState {
  categories: Category[];
  categoryPlaylist: CategoryPlaylistItem[];
}

const initialState: SpotifyReducerState = {
  categories: [],
  categoryPlaylist: [],
};

export const spotifyReducer = (
  state = initialState,
  action: Actions,
): SpotifyReducerState => {
  switch (action.type) {
    case ActionTypes.GET_BROWSE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.items,
      };
    case ActionTypes.GET_CATEGORY_LIST:
      return {
        ...state,
        categoryPlaylist: action.payload.categoryPlaylist,
      };
    default:
      return state;
  }
};
