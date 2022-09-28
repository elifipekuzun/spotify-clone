import {Actions} from '../actions';
import {ActionTypes} from '../action-types';
import {
  Category,
  CategoryPlaylistItem,
  UserPlaylist,
  Track,
  ImageParams,
} from '../category';

interface SpotifyReducerState {
  categories: Category[];
  categoryPlaylist: CategoryPlaylistItem[];
  playlists: {
    [key: string]: CategoryPlaylistItem[];
  };
  userPlaylists: UserPlaylist[];
  tracks: Track[];
  coverImage: ImageParams[];
}

const initialState: SpotifyReducerState = {
  categories: [],
  categoryPlaylist: [],
  playlists: {},
  userPlaylists: [],
  tracks: [],
  coverImage: [],
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
    case ActionTypes.GET_PLAYLISTS:
      const {playlistName, data} = action.payload;
      state.playlists[playlistName] = data;
      return {
        ...state,
        playlists: state.playlists,
      };
    case ActionTypes.GET_USERS_PLAYLISTS:
      return {
        ...state,
        userPlaylists: action.payload.userPlaylists,
      };
    case ActionTypes.GET_PLAYLIST_TRACKS:
      return {
        ...state,
        tracks: action.payload.tracks,
        coverImage: action.payload.coverImage,
      };
    default:
      return state;
  }
};
