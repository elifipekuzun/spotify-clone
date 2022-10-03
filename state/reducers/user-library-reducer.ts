import {Actions} from '../actions';
import {ActionTypes} from '../action-types';
import {UserPlaylist} from '../category';

export interface UserLibraryReducerState {
  userLibrary: {
    all: UserPlaylist[];
    created: UserPlaylist;
  };
}

const createdPlaylist: UserPlaylist = {
  id: '',
  images: [],
  name: '',
  tracks: {
    href: '',
    total: 0,
  },
  type: '',
  owner: {
    display_name: '',
    id: '',
    href: '',
    uri: '',
  },
};

const initialState: UserLibraryReducerState = {
  userLibrary: {
    all: [],
    created: createdPlaylist,
  },
};

export const userLibraryReducer = (
  state = initialState,
  action: Actions,
): UserLibraryReducerState => {
  switch (action.type) {
    case ActionTypes.GET_USERS_PLAYLISTS:
      return {
        ...state,
        userLibrary: {
          ...state.userLibrary,
          all: action.payload.userPlaylists,
        },
      };
    case ActionTypes.CREATE_PLAYLIST:
      return {
        ...state,
        userLibrary: {
          ...state.userLibrary,
          all: [...state.userLibrary.all, action.payload.createdPlaylist],
          created: action.payload.createdPlaylist,
        },
      };
    default:
      return state;
  }
};
